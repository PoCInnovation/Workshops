import express from 'express'
import smartContracts from "./router/smartContractRouter";
import nft from "./router/nftRouter"
import user from "./router/userRouter"
import initClientDbConnection from './services/mongo';
import auth from './middleware/auth'

const app = express();
const port = 3000;

initClientDbConnection();

app.use(express.json({limit: '2mb'}))


app.listen(port, () => console.log(`server is listening on ${port}`));

export default app 