import express from 'express'
import cors from 'cors'
import smartContracts from "./routes/smartContractRouter";
import nft from "./routes/nftRouter"
import user from "./routes/userRouter"
import initClientDbConnection from './services/mongo';
import auth from './middleware/auth'

export const app = express();
const port = 3000;

initClientDbConnection();

app.use(cors());
app.use(express.json({limit: '2mb'}))
app.use("/user", user);

app.listen(port, () => console.log(`server is listening on ${port}`));

export default app