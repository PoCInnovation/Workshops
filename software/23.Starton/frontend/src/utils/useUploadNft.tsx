import React from "react";
import {httpNft} from "utils/AxiosHttp";

interface UseUploadNftProps {
  name: string;
  nftName: string;
  description: string;
  receiverAddress: string;
  image: string;
}

const useUploadNft = async ({ name, nftName, description, receiverAddress, image }: UseUploadNftProps): Promise<boolean> => {
  try {
    const userId = localStorage.getItem('id');
    const response = await httpNft.post('smart-contract/nft/uploadNft',  {
      userId,
      image,
      name,
      nftName,
      description,
      receiverAddress
    });
    return response.status === 200
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default useUploadNft;