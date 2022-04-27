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
    if (response && response.status === 200) {
      console.log(response);
      return true;
    }
    return false;
  } catch (error) {
    console.warn(error)
  }
};

export default useSmartContract;