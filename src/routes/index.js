import { Router } from 'express';
const router = Router();
import { products, productById } from './../controllers/products.js'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
const username = process.env.username;
const password = process.env.password;
console.log(username)
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

var whitelist = process.env.whitelist;
console.log(whitelist)
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      }
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