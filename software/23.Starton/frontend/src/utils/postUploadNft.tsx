import React from "react";
import {httpNft} from "utils/AxiosHttp";

interface PostUploadNftProps {
  name: string;
  nftName: string;
  description: string;
  receiverAddress: string;
  image: string;
}

const postUploadNft = async ({ name, nftName, description, receiverAddress, image }: PostUploadNftProps): Promise<boolean> => {
  try {
    const userId = localStorage.getItem('id');
    const response = await httpNft.post('/nft/uploadNft',  {
      userId,
      image,
      name,
      nftName,
      description,
      receiverAdress: receiverAddress
    });
    return response.status === 201
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default postUploadNft;