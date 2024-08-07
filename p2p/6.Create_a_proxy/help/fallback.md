# 🙋‍♂️ Help to create the fallback function for the proxy

The fallback function is a function that is called when a contract is called with a method that is not implemented. This function is called with the method name and the arguments that were passed to the proxy.

```solidity
fallback() external payable {
    (bool success, bytes memory returnData) = implementation.delegatecall(msg.data);
    if (!success) {
        if (returnData.length > 0) {
            assembly {
                let returndata_size := mload(returnData)
                revert(add(32, returnData), returndata_size)
            }
        } else {
            revert("Delegatecall failed without reason");
        }
    }
    assembly {
        return(add(returnData, 32), mload(returnData))
    }
}
```

## ⛓️‍💥 Let's break down the fallback function line by line:

1. `(bool success, bytes memory returnData) = implementation.delegatecall(msg.data);`
    - This line calls the `delegatecall` function on the `implementation` contract with the `msg.data` that was sent to the proxy. The `delegatecall` function executes the code of the `implementation` contract in the context of the proxy contract. The `success` variable will be `true` if the `delegatecall` was successful, and the `returnData` variable will contain the return data from the `delegatecall`.

2. `if (!success) {`
    - This line checks if the `delegatecall` was successful. If it was not successful, the code inside the `if` block will be executed.

3. `if (returnData.length > 0) {`
    - This line checks if the `returnData` has a length greater than 0. If it does, it means that the `delegatecall` failed with a revert reason.
    - The `assembly` block extracts the revert reason from the `returnData` and reverts with that reason.
    - If the `returnData` is empty, it means that the `delegatecall` failed without a revert reason, and the fallback function reverts with a generic message.
    - We use `assembly` to handle the revert reason because the `delegatecall` does not automatically propagate the revert reason.

4. `assembly { return(add(returnData, 32), mload(returnData)) }`
    - This line returns the `returnData` if the `delegatecall` was successful. The `returnData` contains the return value of the function that was called in the `implementation` contract.

👌 Perfect now you have a fallback function that will call the `implementation` contract with the method name and arguments that were passed to the proxy.  

If the `delegatecall` is successful, it will return the return value of the function that was called in the `implementation` contract. If the `delegatecall` fails, it will revert with the revert reason.

> ⚠️ It's the main logic of the proxy so if you have any questions feel free to ask to the PoC Team.

⏪ Back to the [Workshop](../README.md).
