import {httpNft} from "utils/AxiosHttp";
import React from "react";

interface PostSmartContractProps {
  dashboardName: string;
  name: string;
  metadataName: string;
  description: string;
}

const postSmartContract = async ({ dashboardName, name, metadataName, description }: PostSmartContractProps): Promise<boolean> => {
  try {
    const userId = localStorage.getItem('id');
    const response = await httpNft.post('smart-contract/ipfs-nft-contract',  {
      userId,
      dashboardName,
      name,
      metadataName,
      description,
    });
    return response.status === 201;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default postSmartContract;