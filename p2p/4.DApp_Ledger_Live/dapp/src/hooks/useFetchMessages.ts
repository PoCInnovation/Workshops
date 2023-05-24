import artifacts from "../utils/contract.json";
import { domain } from "../utils/EIP712";
import { useEffect } from "react";
import { useContractRead, useContractEvent } from "wagmi";

const useFetchMessages = () => {
  const { data, isError, isLoading, refetch } = useContractRead({
    addressOrName: domain.verifyingContract,
    contractInterface: artifacts.abi,
    functionName: "getLast10Messages",
  });

  useContractEvent({
    addressOrName: domain.verifyingContract,
    contractInterface: artifacts.abi,
    eventName: "MessageSent",
    listener: () => {
      refetch();
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  return { data, isError, isLoading };
};

export default useFetchMessages;
