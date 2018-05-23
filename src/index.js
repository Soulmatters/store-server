import  express from 'express';
const app = express();
import router from './routes'



    app.use('/api', router);
    app.get('/', (req, res) => res.send('Hello World!'))



  app.listen(9000, () => console.log('Example app listening on port 9000!'))
