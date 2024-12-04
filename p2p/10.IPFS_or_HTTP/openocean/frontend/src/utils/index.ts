import { constants } from "../constants";

export const displayUgnot = (ugnot: number) => {
  return ugnot >= 1000
    ? `${Math.floor(ugnot / 1000).toLocaleString("fr-FR")} GNOT`
    : `${ugnot.toLocaleString("fr-FR")} ugnot`;
};

export const displayGnot = (gnot: number) => {
  return `${gnot.toLocaleString("fr-FR", {
    style: "currency",
    currency: "USD",
  })} GNOT`;
};

export const parseDataJson = <T>(data: string): T => {
  const content = data.slice(2, -'" string)'.length).replaceAll("\\", "");
  return JSON.parse(content);
};

export const urlFromIpfsHash = (hash: string) =>
  hash.includes("https://")
    ? hash
    : `https://${constants.pinataGateway}/ipfs/${hash}`;

export const urlFromFileName = (filename: string): string => {
  const url = `http://localhost:8080/uploads/${filename}`;
  console.log(url);
  return url;
}
