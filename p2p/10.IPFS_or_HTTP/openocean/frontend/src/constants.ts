import { from } from "env-var";

const vars = {
  VITE_PINATA_API_KEY: import.meta.env.VITE_PINATA_API_KEY,
  VITE_PINATA_GATEWAY: import.meta.env.VITE_PINATA_GATEWAY,
};

const env = from(vars, {});

export const constants = {
  pinataAPIKey: env.get("VITE_PINATA_API_KEY").asString(),
  pinataGateway: env.get("VITE_PINATA_GATEWAY").asString(),
};
