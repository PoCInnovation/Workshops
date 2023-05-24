import isIframe from "../utils/isIframe";
import Connectors from "./Connectors";

const Header = (): JSX.Element => {
  const isInIframe = isIframe();

  return (
    <header className="flex m-4 mb-8 justify-between items-center">
      <h1>Workshop Dapp Ledger Live</h1>

      {!isInIframe && <Connectors />}
    </header>
  );
};

export default Header;
