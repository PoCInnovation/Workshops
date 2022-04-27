import {httpNft} from "utils/AxiosHttp";
import React from "react";

interface UseSmartContractProps {
  dashboardName: string;
  name: string;
  metadataName: string;
  description: string;
}

const useSmartContract = async ({ dashboardName, name, metadataName, description }: UseSmartContractProps): Promise<boolean> => {
  try {
    const userId = localStorage.getItem('id');
    const response = await httpNft.post('smart-contract/ipfs-nft-contract',  {
      userId,
      dashboardName,
      name,
      metadataName,
      description,
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default useSmartContract;