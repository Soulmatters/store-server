import { Router } from 'express';
const router = Router();
import { products, productById } from './../controllers/products.js'
import cors from 'cors';

const username = 'ck_bee8ba8ae89ee594ef31e31d1016156b51162ad0';
const password = 'cs_d3edf0891e380e813e19d30d25ccdb87472165f5';

var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');


const corsOptions = {
    origin: 'http://localhost:6060',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


    router.get('/products', cors(corsOptions), (req, res) => {

        products(auth).then(response => {
            res.json(response.data)
        }).catch(err => {
            console.log(err)
            res.send(err)
        })
         
    });


    router.get('/product/:id', cors(corsOptions),(req, res) => {

        productById(req.params.id, auth).then(response => {
          res.json(response.data)
      }).catch(err => {
          res.send({err: 'err'})
      })
       
    });


export default router