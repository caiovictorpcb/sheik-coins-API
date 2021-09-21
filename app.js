import express from 'express'
import indexRouter from './routes/index'
import cors from 'cors'
import sequelize from './db';


var app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use('/crypto', indexRouter)

app.use('/users', indexRouter)

app.listen(5000, () => {
  console.log("Rodando em http://localhost:5000")
})

try {
  await sequelize.sync();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


export default app;
