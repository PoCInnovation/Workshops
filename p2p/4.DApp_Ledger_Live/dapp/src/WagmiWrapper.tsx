import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ alchemyId: import.meta.env.VITE_ALCHEMY_API_KEY })]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
});

const WagmiWrapper = ({ children }: { children: JSX.Element }) => (
  <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
);

export default WagmiWrapper;
