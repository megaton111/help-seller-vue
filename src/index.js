import express from 'express'
import cors from 'cors'
import { checkPass } from "./apis/checkPass"
 
export default (app, http) => {
 
  app.use(express.json())
  app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
  }))
 
  app.post('/check', (req, res) => {
    // let id = req.body.id
    // let link = req.body.link
    console.log('check!!!!!!!!!'); 
    console.log( req.body )
 
    // checkProducts(id, link).then( product => {
    //   res.json(product)
    // }).catch( err => console.log(err) )
  })
  
}