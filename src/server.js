import 'dotenv/config';
import express from 'express';
import userController from '../app/controllers/userController';
import bullBoard from 'bull-board';
import Queue from '../app/lib/Queue';

const app = express();
bullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use('/admin/queues', bullBoard.UI);
app.post('/users', userController.store);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});