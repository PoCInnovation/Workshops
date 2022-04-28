import React from "react";
import {httpNft} from "utils/AxiosHttp";

interface NftArray {
  userId: string,
  contractId: string,
  nft?: [string]
}

interface GetNftProps {

}

const getNft = async ({  }: GetNftProps): Promise<NftArray> => {
  const userId = localStorage.getItem('id');

  try {
    const response = await httpNft.get<NftArray>(`/userNft/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error)
  }
};

export default getNft;