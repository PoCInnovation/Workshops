import {httpConnection} from "utils/AxiosHttp";

interface PutRegisterProps {
  email: string;
  password: string;
  wallet: string;
}

const putRegister = async ({ email, password, wallet }: PutRegisterProps): Promise<boolean> => {
  try {
    const response = await httpConnection.put('/user/register', {email, password, wallet});
    localStorage.setItem('id', response.data._id)
    localStorage.setItem('token', response.data.token);
    return response.status === 201;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default putRegister;