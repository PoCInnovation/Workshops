import React from "react";
import {httpNft} from "utils/AxiosHttp";

interface NftArray {
  userId: string,
  contractId: string,
  nft?: [string]
}

interface UseNftProps {

}

const useNft = async ({  }: UseNftProps): Promise<NftArray> => {
  const userId = localStorage.getItem('id');

  try {
    const response = await httpNft.get<NftArray>(`/userNft/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error)
  }
};

export default useNft;