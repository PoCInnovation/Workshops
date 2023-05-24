const getHashPreview = (hash: string) => {
  const start = hash.substring(0, 4);
  const end = hash.substring(hash.length - 4, hash.length);

  return `${start}...${end}`;
};

export default getHashPreview;
