import { useMemo } from "react";
import {
  Connector as WAGMIConnect,
  useAccount,
  useConnect,
  useDisconnect,
} from "wagmi";
import getHashPreview from "../utils/getHashPreview";

type ConnectorButtonProps = {
  connector?: WAGMIConnect;
  onClick: () => void;
};

const ConnectorButton = ({ connector, onClick }: ConnectorButtonProps) => {
  if (!connector) return null;

  return (
    <button
      className="border px-4 py-2 mx-2"
      disabled={!connector.ready}
      onClick={onClick}
    >
      {connector.name}
    </button>
  );
};

type DisconnectButtonProps = {
  address: string;
  onClick: () => void;
};

const DisconnectButton = ({ address, onClick }: DisconnectButtonProps) => {
  const addressPreview = useMemo(() => getHashPreview(address), [address]);

  return (
    <button className="m-2 p-2" onClick={onClick}>
      Disconnect <span>{`(${addressPreview})`}</span>
    </button>
  );
};

const Connectors = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();

  if (!connectors.length) return null;

  if (isConnected && address)
    return <DisconnectButton address={address} onClick={disconnect} />;

  return (
    <div className="flex flex-col items-end">
      <div className="flex">
        {connectors.map((connector) => (
          <ConnectorButton
            key={connector.id}
            connector={connector}
            onClick={() => connect({ connector })}
          />
        ))}
      </div>

      {error && <div className="mt-2">{error.message}</div>}
    </div>
  );
};

export default Connectors;
