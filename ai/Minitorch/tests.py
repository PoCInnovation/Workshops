
# TODO : test the function later
import numpy as np
from typing import Callable, Any

""" derivatives """

class MyCrossBackward:

    def __init__(self, *args, backward_function : Callable[..., None], name : str) -> None:
        
        self.__data = list(args)
        self.__bf = backward_function
        self.__name = name

    """ Private """

    def __str__(self) -> str:
        return self.__name
    
    def __call__(self, x) -> Any:
        """
            This method is called when calling the model with the () operation.
            Ex:
                bcw = MyCrossBackward(...)
                bcw(x) <- called here
        """

        return self.run(x)
    
    """ Public """
    
    def run(self, base) -> None:
        """run the backward operation

        Args:
            base (MyTensor): basicly the tensor accumulating gradients

        Returns:
            None: nothing
        """
        return self.__bf(base, *self.__data)

class CorrectTensor:

    def __init__(self,
                 data : list | np.ndarray | float,
                 dtype : np.dtype = None,
                 requires_grad : bool = False,
                 crossOpBack : MyCrossBackward = None) -> None:
        # the __ prefix mark private attributes (it can't be recovered
        # outside of the class)
        
        assert (isinstance(data, (list, np.ndarray, int))), "The given data is of an invalid type"

        # code the init here (take into account the different possible input types)
        # init the following properties :
        self.__data : np.ndarray = data
        if (isinstance(data, list) or isinstance(data, float)):
            self.__data = np.array(self.__data)
        self.dtype = dtype
        self.requires_grad = requires_grad
        self.grad = None
        self.backward_op = crossOpBack
        #end of code
        pass

    """ Properties """

    """ Here an example on how to set a getter for an attribute """
    @property
    def shape(self):
        return self.__data.shape
    """ Know make it for: strides, data and size"""

    @property
    def data(self):
        return self.__data
    
    @property
    def strides(self):
        return self.__data.strides

    """ Privates """

    def __str__(self) -> str:
        # display the data and info about the tensor
        return "Tensor(" + str(self.data) + ", requires_grad=" + str(self.requires_grad) + ")"

    def __repr__(self) -> str:
        return self.__str__()

    # as our tensor elements need to be accessible you need to make each
    # function that make you object a pylist
    # hint: __getitem__, __setitem__ 
    
    def __getitem__(self, x):
        return self.__data[x]
    
    def __setitem__(self, x, v):
        self.__data[x] = v

    # the operations ? (see hints)
    # the need operations for this one are : add, mul, pow, div, sub. (with tensors and scalars (int, float)).
    ...

    """ Operations """

    def __add__(self, x):
        return CorrectTensor(self.__data + x.data,
                             requires_grad=x.requires_grad or self.requires_grad,
                             crossOpBack=MyCrossBackward(
                                self, x,
                                backward_function=add_deriv_soluce,
                                name="AddBackward"
                             ) if x.requires_grad or self.requires_grad else None)

    def __mul__(self, x):
        return CorrectTensor(self.__data * x.data,
                             requires_grad=x.requires_grad or self.requires_grad, 
                             crossOpBack=MyCrossBackward(
                                self, x,
                                backward_function=mul_deriv_soluce,
                                name="MulBackward"
                             ) if x.requires_grad or self.requires_grad else None)

    def __truediv__(self, x):
        return CorrectTensor(self.__data / x.data,
                             requires_grad=x.requires_grad or self.requires_grad,
                             crossOpBack=MyCrossBackward(
                                self, x,
                                backward_function=div_deriv_soluce,
                                name="DivBackward"
                             ) if x.requires_grad or self.requires_grad else None)

    def __pow__(self, x):
        return CorrectTensor(self.__data ** x,
                             requires_grad=self.requires_grad,
                             crossOpBack=MyCrossBackward(
                                self, x,
                                backward_function=pow_deriv_soluce,
                                name="PowBackward"
                             ) if self.requires_grad else None)

    def __sub__(self, x):
        return CorrectTensor(self.__data - x.data,
                             requires_grad=x.requires_grad or self.requires_grad,
                             crossOpBack=MyCrossBackward(
                                self, x,
                                backward_function=sub_deriv_soluce,
                                name="SubBackward"
                             ) if self.requires_grad or x.requires_grad else None)

    """ Publics """

    def backward(self, base = None) -> None:
        """This function call the backward on the Directed Acyclic graph
        formed from the operations between the tensors.

        Args:
            base (MyTensor, optional): The base tensor that accumulate grads. Defaults to None.
        """

        # in theory: a backward that accumulate gradient just start with a base tensor of 1 (if is None)
        
        # code here
        if (base == None):
            base = CorrectTensor([1])
        # end of code

        if (self.backward_op):
            self.backward_op(base)

# TODO : finsh backwards
#

def add_deriv_soluce(base, *tensors):
    """ the tensors we will consider are only of the same shape """
    left : CorrectTensor = tensors[0]
    right : CorrectTensor = tensors[1]

    if (left.requires_grad):
        grad = CorrectTensor(base.data * np.ones_like(right.data))
        if (left.backward_op == None):
            left.grad = left.grad and left.grad + grad or grad 
        left.backward(grad)
    
    if (right.requires_grad):
        grad = CorrectTensor(base.data * np.ones_like(left.data))
        if (right.backward_op == None):
            right.grad = right.grad and right.grad + grad or grad
        right.backward(grad)

def mul_deriv_soluce(base, *tensors):
    """ tensors[0] AxB, tensors[1] BxC """
    left : CorrectTensor = tensors[0]
    right : CorrectTensor = tensors[1]

    if left.requires_grad:
        grad = CorrectTensor(base.data.T * right.data)
        if (left.backward_op == None):
            left.grad = left.grad and left.grad + grad or grad
        left.backward(grad)
    
    if right.requires_grad:
        grad = CorrectTensor(left.data.T * base.data)
        if (right.backward_op == None):
            right.grad = right.grad and right.grad + grad or grad
        right.backward(grad)

def div_deriv_soluce(base, *tensors):
    """ tensors of the same shape """
    
    unpacked_tensors : list[CorrectTensor] = list(tensors)

    zis_tensor : bool = isinstance(unpacked_tensors[0], CorrectTensor)
    is_tensor : bool = isinstance(unpacked_tensors[1], CorrectTensor)

    if (zis_tensor and unpacked_tensors[0].requires_grad):
        grad = CorrectTensor(base.data * (1 / (unpacked_tensors[1].data if is_tensor else unpacked_tensors[1])))
        if (unpacked_tensors[0].backward_op == None):
            unpacked_tensors[0].grad = unpacked_tensors[0].grad and unpacked_tensors[0].grad + grad or grad
        unpacked_tensors[0].backward(grad, forced = True)

    if (is_tensor and unpacked_tensors[1].requires_grad):
        grad = CorrectTensor(-base.data * ((unpacked_tensors[0].data if zis_tensor else unpacked_tensors[0].data) / np.power(unpacked_tensors[1].data, 2)))
        if (unpacked_tensors[1].backward_op == None):
            unpacked_tensors[1].grad = unpacked_tensors[1].grad and unpacked_tensors[1].grad + grad or grad
        unpacked_tensors[1].backward(grad)

def pow_deriv_soluce(base, *args):
    """ tensor, power """
    tensor : CorrectTensor = args[0]
    pw : int = args[1]

    grad = CorrectTensor(base.data * (pw * np.power(tensor.data, pw - 1)))
    if tensor.backward_op == None:
        tensor.grad = tensor.grad and tensor.grad + grad or grad
    tensor.backward(grad)

def sub_deriv_soluce(base, *tensors):
    
    unpacked_tensors : list[CorrectTensor] = list(tensors)

    if (unpacked_tensors[0].requires_grad):
        grad = CorrectTensor(base.data * np.ones_like(tensors[1].data))
        if (unpacked_tensors[0].backward_op == None):
            unpacked_tensors[0].grad = unpacked_tensors[0].grad and unpacked_tensors[0] + grad or grad
        unpacked_tensors[0].backward(grad)

    if (unpacked_tensors[1].requires_grad):
        grad = CorrectTensor(-1 * base.data * np.ones_like(tensors[0].data))
        if (unpacked_tensors[1].backward_op == None):
            unpacked_tensors[1].grad = unpacked_tensors[1].grad and unpacked_tensors[1] + grad or grad
        unpacked_tensors[1].backward(grad)


def test_tensor_class(TensorType):

    # test the tensor

    a = TensorType([2, 3, 2, 4])

    print('Checking attributes...')
    assert (hasattr(a, 'dtype')
            and hasattr(a, 'requires_grad')
            and hasattr(a, 'grad')
            and hasattr(a, 'backward_op')), "basic attributes not found"

    assert (a.requires_grad == False), "Invalid requires_grad property"
    assert (a.grad == None), "Grad need to be set to None to begin with"
    assert (a.backward_op == None), "Backward op need to be set to None at first"

    assert (getattr(a, 'data') is not None and getattr(a, 'shape') and getattr(a, 'strides')), "properties getter not found. There should be data, shape and strides"
    assert (isinstance(a.data, np.ndarray))

    print('Checking list properties...')

    assert (hasattr(a, '__getitem__') and hasattr(a, '__setitem__')), "The tensor does not have the possibility to retreive and set elements"

    a[0] = 6

    print('Checking operations...')
    assert (hasattr(a, "__add__") and hasattr(a, "__mul__") and hasattr(a, "__truediv__") and hasattr(a, "__pow__") and hasattr(a, "__sub__")), "Missing operations. The operations to implement: add, div, pow, mul, sub"

    b = TensorType([3, 4, 2, 5], requires_grad=True)

    assert (b.requires_grad == True), "requires_grad option does not function properly"

    c = a + b
    assert (isinstance(c, TensorType)), "Result of addition is not a tensor"
    assert (c.requires_grad == True), "requires_grad is not passed down to operation result. It should be."
    assert (c[0] == 9 and c[1] == 7 and c[2] == 4 and c[3] == 9), "Addition is invalid"

    assert (b.requires_grad == True), "requires_grad option does not function properly"

    c2 = a * b
    assert (isinstance(c2, TensorType)), "Result of mul is not a tensor"
    assert (c2.requires_grad == True), "requires_grad is not passed down to operation result. It should be."
    assert (c2[0] == 18 and c2[1] == 12 and c2[2] == 4 and c2[3] == 20), "mul is invalid"

    c3 = a / b
    assert (isinstance(c3, TensorType)), "Result of div is not a tensor"
    assert (c3.requires_grad == True), "requires_grad is not passed down to operation result. It should be."
    assert (c3[0] == a[0] / b[0] and c3[1] == a[1] / b[1] and c3[2] == a[2] / b[2] and c3[3] == a[3] / b[3]), "div is invalid"

    c4 = b ** 2
    assert (isinstance(c4, TensorType)), "Result of pow is not a tensor"
    assert (c4.requires_grad == True), "requires_grad is not passed down to operation result. It should be."
    assert (c4[0] == b[0] ** 2 and c4[1] == b[1] ** 2 and c4[2] == b[2] ** 2 and c4[3] == b[3] ** 2), "pow is invalid"


    c5 = a - b
    assert (isinstance(c5, TensorType)), "Result of sub is not a tensor"
    assert (c5.requires_grad == True), "requires_grad is not passed down to operation result. It should be."
    assert (c5[0] == 3 and c5[1] == -1 and c5[2] == 0 and c5[3] == -1), "sub is invalid"

    print('Checking backwards...')

    c.backward()
    assert (b.grad != None), "Invalid grad for add backward"
    assert (b.grad.data == np.array([1, 1, 1, 1])).all(), "Invalid Addition backward"

    # resetting grads
    b.grad = None

    c2.backward()
    assert (b.grad != None), "Invalid grad for mul backward"
    assert (b.grad.data == np.array([6, 3, 2, 4])).all(), "Invalid mul backward for same shape mul."

    b.grad = None

    c3.backward()
    assert (b.grad != None), "Invalid grad for div backward"
    assert (b.grad.data == -a.data / np.power(b.data, 2)).all(), "Invalid div backward"

    b.grad = None

    c4.backward()
    assert (b.grad != None), "Invalid grad for power backward"
    assert (b.grad.data == 2 * b.data).all(), "Invalid power derivation"

    b.grad = None

    c5.backward()
    assert (b.grad != None), "Invalid grad for sub backward"
    assert (b.grad.data == -1 * np.ones_like(a.data)).all(), "Invalid sub backward"

class CorrectParameter:

    def __init__(self, tensor :CorrectTensor) -> None:
        self.tensor : CorrectTensor = tensor
        self.tensor.requires_grad = True
        self.__name : str = None

    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, x):
        self.__name = x

class CorrectModule:

    def __init__(self) -> None:
        
        self._parameters : list[CorrectParameter] = []
        self._sub_modules : list[CorrectModule] = []

    def __setattr__(self, __name: str, __value: Any) -> None:
        
        if (isinstance(__value, CorrectParameter)):
            __value.name = __name
            self._parameters.append(__value)

        if (isinstance(__value, CorrectModule) and __value != self):
            self._sub_modules.append(__value)

        self.__dict__.__setitem__(__name, __value)

    def parameters(self):
        ## this function need to return the list of all parameters
        params = [] + self._parameters
        for i in self._sub_modules:
            params += i.parameters()
        return params

def test_my_module(ModuleClass, TensorClass, ParameterClass):

    class SubTestModule(ModuleClass):

        def __init__(self):
            super().__init__()
            self.param2 = ParameterClass(TensorClass([3, 4]))

    class TestModule(ModuleClass):

        def __init__(self):
            super().__init__()

            self.param1 = ParameterClass(TensorClass([2, 3]))

            self.sub_module = SubTestModule()

    a = TestModule()
    assert (len(a.parameters()) == 2), "Parameter function is invalid"

import torch as t

def test_linear(LinearModule, TensorClass, ParameterClass):

    print("Testing Linear forward..")

    a = LinearModule(2, 4)
    a._Linear__weights = ParameterClass(TensorClass([[2, 2], [2, 2], [2, 2], [2, 2]]))
    a._Linear__bias = ParameterClass(TensorClass([2, 2, 2, 2]))
    b = t.nn.Linear(2, 4)
    b.weight = t.nn.Parameter(t.tensor([[2, 2], [2, 2], [2, 2], [2, 2]], dtype=t.float32))
    b.bias = t.nn.Parameter(t.tensor([2, 2, 2, 2], dtype=t.float32))

    y = a(TensorClass([3, 4])).data
    y_ = b(t.tensor([3, 4], dtype=t.float32)).detach().numpy()
    assert (y == y_).all(), "Linear result is not equivalent to torch's"

    a = LinearModule(4, 1)
    a._Linear__weights = ParameterClass(TensorClass([[2, 2, 2, 2]]))
    a._Linear__bias = ParameterClass(TensorClass([2]))
    b = t.nn.Linear(4, 1)
    b.weight = t.nn.Parameter(t.tensor([[2, 2, 2, 2]], dtype=t.float32))
    b.bias = t.nn.Parameter(t.tensor([2], dtype=t.float32))
    y = a(TensorClass(np.array([3, 4, 5, 6]).reshape(4, 1)))
    y_ = b(t.tensor([3, 4, 5, 6], dtype=t.float32))
    assert (y.data == y_.detach().numpy()).all(), "Linear result is not equivalent to torch's"

    print('Testing backward..')
    y.backward()
    y_.backward()

    assert (b.weight.grad.detach().numpy() == a._Linear__weights.tensor.grad.data).all(), "Invalid backward gradients"


def test_sgd(SGD, TensorType, ParameterType):

    print("Testing SGD...")

    a = TensorType([3, 4, 2])
    b = ParameterType(TensorType([5, 6, 7]))
    op = SGD([b], lr=0.01)
    (a * b.tensor).backward()
    op.step()

    a_torch = t.tensor([3, 4, 2], dtype=t.float32, requires_grad=True)
    b_torch = t.nn.Parameter(t.tensor([5, 6, 7], dtype=t.float32, requires_grad=True))
    op_torch = t.optim.SGD([b_torch], lr=0.01)
    loss = t.sum(a_torch * b_torch)
    loss.backward()
    op_torch.step()
    assert (np.allclose(b_torch.detach().numpy(), b.tensor.data)), "Invalid sgd"

def test_mseloss(MSELoss, TensorClass):

    print("Testing MSE...")

    y = TensorClass([3, 4, 2, 5])
    y_target = TensorClass([5, 2, 5, 1])
    loss = MSELoss()
    res = loss(y, y_target)

    y_torch = t.tensor([3, 4, 2, 5], dtype=t.float32)
    y_target_torch = t.tensor([5, 2, 5, 1], dtype=t.float32)
    loss = t.nn.MSELoss()
    res_torch = loss(y_torch, y_target_torch)

    assert (res.data == res_torch.detach().numpy()).all(), "Invalid result for MSE"


#test_tensor_class(CorrectTensor)
#
#test_my_module(CorrectModule, CorrectTensor, CorrectParameter)
