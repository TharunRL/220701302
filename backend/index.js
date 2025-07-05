import express, { json } from 'express'
import cors from 'cors'
import logger from '../logs/log.js'

const app = express()
app.use(cors())
app.use(json())

const urlmap = {}

const shortner = (url,shortcode="",validity=30)=>{
    if (!shortcode || shortcode in urlmap)
    {
        let chars = "abcdefghijklmnopqrstuvwABCDEFGHIJKLMNOPQRSTUVW1234567890"
        for(let i=0; i<6 ; i++){
            shortcode+=chars.charAt(Math.floor(Math.random()*chars.length))
        }
    }
    const now = new Date();
    const future = new Date(now.getTime() + validity * 1000); // 10 seconds = 10 * 1000 ms
    console.log(future);
    urlmap[shortcode]={
        url : url,
        shortLink:"http://localhost:3000/shorturls/"+shortcode,
        expiry : future,
        timesUsed : 0,
        createdAt : now
    }
    return shortcode
}
app.post('/shorturls',(req,res)=>{
    let url = req.body.url
    let shortcode = req.body.shortcode
    let validity = req.body.validity
    if(url){
        let short = shortner(url,shortcode?shortcode:"",validity?validity:30)
        console.log(urlmap)
        res.json({
            shortLink:urlmap[short].shortLink,
            expiry: urlmap[short].expiry
        })
    }
    else{
        console.log("error");
        
    }


})
app.get('shorturls/:id',(req,res)=>{
    let short= req.params.id;
    console.log(short)
    if(urlmap[short]){
        urlmap[short].timesUsed+=1
        console.log(urlmap[short])
        res.json(urlmap[short])
    }
    else{res.status(404).json({ error: "Short URL not found" });}
})


app.listen(3000,()=>{console.log("Sever running at localhost")})