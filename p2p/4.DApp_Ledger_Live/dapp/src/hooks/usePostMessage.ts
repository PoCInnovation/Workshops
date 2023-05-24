import { useContractWrite, useSignTypedData } from "wagmi";
import artifacts from "../utils/contract.json";
import { domain, types } from "../utils/EIP712";

const WRITE_ASYNC_OVERRIDES_GASLIMIT = { gasLimit: 250_000 };

const usePostMessage = () => {
  const { data, isError, isLoading, isSuccess, error, writeAsync } =
    useContractWrite({
      addressOrName: domain.verifyingContract,
      contractInterface: artifacts.abi,
      functionName: "sendMessage",
    });
  const {
    isError: is712Error,
    isSuccess: is712Success,
    error: error712,
    isLoading: is712Loading,
    signTypedDataAsync,
  } = useSignTypedData();

  const postMessage = async (message: string, author: string) => {
    // TODO: post message to contract
  };

  return {
    postMessage,
    data,
    error: error || error712,
    isError: isError || is712Error,
    isLoading: isLoading || is712Loading,
    isSuccess: isSuccess && is712Success,
  };
};

export default usePostMessage;
