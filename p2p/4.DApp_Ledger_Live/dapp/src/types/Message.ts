import { BigNumber } from "ethers";

type Address = string;

type Message = {
  author: Address;
  content: string;
  id: BigNumber;
  likes: BigNumber;
  timestamp: BigNumber;
};

export default Message;
