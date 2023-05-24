export const domain = {
  name: "ChatBox",
  version: "1",
  verifyingContract: "0xd156b7CcEE0951eACfFC3f2dbc5Ef7Be3782eA88",
  chainId: 5,
};

export const types = {
  sendMessage: [
    { name: "from", type: "address" },
    { name: "contents", type: "string" },
  ],
};
