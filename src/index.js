import  express from 'express';
const app = express();
import router from './routes'
import morgan from 'morgan'


    app.use(morgan('dev'))
    app.use('/api', router);
    app.get('/', (req, res) => res.send('Hello World!'))



  app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))
