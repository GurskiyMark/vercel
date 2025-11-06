import express, { Request, Response } from 'express';
import { productsRouter } from './products-router';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Samurai');
});

app.use('/products', productsRouter);

export default app; // ⚡️ ключевой момент — экспорт, без app.listen
