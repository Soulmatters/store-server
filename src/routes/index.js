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
  var corsOptions2 = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

    router.get('/products', cors(corsOptions2), (req, res) => {

        products(auth).then(response => {
            res.json(response.data)
        }).catch(err => {
            console.log(err)
            res.send(err)
        })
         
    });


    router.get('/product/:slug', cors(corsOptions2),(req, res) => {

        productById(req.params.slug, auth).then(response => {
          res.json(response.data[0])
      }).catch(err => {
          res.send({err: 'err'})
      })
       
    });


export default router