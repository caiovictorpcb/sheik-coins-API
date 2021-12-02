import express from 'express'
import cors from 'cors'
import sequelize from './db';
import AuthRouter from './routes/auth.router'
import CryptoRouter from './routes/crypto.router'
import PortfolioRouter from './routes/portfolio.router'

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", AuthRouter)
app.use("/crypto", CryptoRouter)
app.use("/portfolio", PortfolioRouter)

app.listen(process.env.PORT || 5000, () => {
  console.log("Rodando em http://localhost:5000")
})

try {
  sequelize.sync();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


export default app;
