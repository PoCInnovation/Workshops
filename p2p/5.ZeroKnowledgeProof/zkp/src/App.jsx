import './App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function App() {
  const {connected, setConnected} = useState(false);
  const {accounts, setAccounts} = useState([]);
  const {receiver, setReceiver} = useState("");
  const {price, setPrice} = useState(0);
  const {transactionState, setTransactionState} = useState("primary");
  const {transactionHash, setTransactionHash} = useState("");

  function enableMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        setConnected(true)
        setAccounts(accounts);
      })
      .catch(() => setConnected(false));
    }
  }

  function sendMoney() {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_sendTransaction', params: {
        from: accounts[0],
        to: receiver,
        gas: '0x76c0',
        gasPrice: '0x9184e72a000',
        value: price
      }})
      .then((result) => {
        setTransactionState("success")
        setTransactionHash(result);
      })
      .catch(() => setTransactionState("danger"));
    }
  }

  return (
      <div className="App">
          { connected === "connected" ? (
          <div className="App-header">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">ETH</InputGroup.Text>
                <FormControl
                    placeholder="Price"
                    aria-label="Price"
                    aria-describedby="basic-addon1"
                    onChange={(e => setPrice(e.target.value))}
                    type="float"
                />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">From</InputGroup.Text>

                <FormControl disabled={true}
                    placeholder="Ethereum's sender account address"
                    value={accounts.length >= 1 ? accounts[0] : ""}
                    aria-label="From"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">To</InputGroup.Text>
                <FormControl
                    placeholder="Ethereum's receiver account address"
                    aria-label="To"
                    aria-describedby="basic-addon3"
                    onChange={(e => setReceiver(e.target.value))}
                />
            </InputGroup>
            <Button variant={transactionState} onClick={sendMoney}>Send money</Button>
            {transactionState === "success" ? <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon4">Hash</InputGroup.Text>

                <FormControl disabled={true}
                    placeholder="Ethereum's transaction hash"
                    value={transactionHash}
                    aria-label="Hash"
                    aria-describedby="basic-addon4"
                />
            </InputGroup> : null}
          </div>
          ) : (
          <div className="App-header"><Button variant="primary" onClick={enableMetaMask}>Please connect your MetaMask account</Button></div>
          ) }
      </div>
  )
}
