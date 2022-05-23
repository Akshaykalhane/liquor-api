let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb+srv://user:root@cluster0.fsqmx.mongodb.net/liquorr2?retryWrites=true&w=majority"
const dotenv = require('dotenv');
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors');
const res = require('express/lib/response');
let port = process.env.PORT || 8210;
var db;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('welcome to my express app')
})

//city
app.get('/city/:id', (req, res) => {
    let restId = Number(req.params.id)
    db.collection('city').find({ city_id: restId }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// app.get('/city',(req,res)=>{
//     let cityId=Number(req.query.city_id);
//     let query={}
//     if(cityId){
//         query={"city.city_id":cityId}
//     }
//     db.collection('city').find().toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })
// })

// show all category

app.get('/categories', (req, res) => {
    // let restId=Number(req.params.category_id)
    db.collection('data').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// category by choice
app.get('/category/:id', (req, res) => {
    let restId = Number(req.params.id)
    db.collection('liquor').find({ category_id: restId }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//type by choice

app.get('/catetype',(req,res)=>{
    let  cateId=Number(req.query.category_id);
    let query={};
    if(cateId){
        query={category_id:cateId}
    }
    db.collection('liquor').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//for beer 
app.get('/beer',(req,res)=>{
    let cateId=Number(req.query.product_id);
    let query={}
    if(cateId){
        query={product_id:cateId}
    }
    db.collection('beer').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})

//beer details
app.get('/beerdetails/:id',(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('beer').find({"product_id":restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//beer getitem

app.post('/beerItem',(req,res)=>{
    db.collection('beer').find({product_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


//for wine

app.get('/wine',(req,res)=>{
    let cateId=Number(req.query.product_id);
    let query={}
    if(cateId){
        query={product_id:cateId}
    }
    db.collection('wine').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})

//wine details
app.get('/winedetails/:id',(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('wine').find({"product_id":restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//wine items

app.post('/wineItem',(req,res)=>{
    db.collection('wine').find({product_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//rum listing
app.get('/rum',(req,res)=>{
    let cateId=Number(req.query.product_id);
    let query={}
    if(cateId){
        query={product_id:cateId}
    }
    db.collection('rum').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//rum details

app.get('/rumdetails/:id',(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('rum').find({"product_id":restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//rum item

app.post('/rumItem',(req,res)=>{
    db.collection('rum').find({product_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//for tequila listing

app.get('/tequila',(req,res)=>{
    // let cateId=Number(req.query.product_id);
    // let query={}
    db.collection('tequila').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//tequila details

app.get('/tequiladetails/:id',(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('tequila').find({"product_id":restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//tequila getitems

app.post('/tequilaItem',(req,res)=>{
    db.collection('tequila').find({product_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//for vodka listing page

app.get('/vodka',(req,res)=>{
    let cateId=Number(req.query.product_id)
    let query={}
    if(cateId){
        query={product_id:cateId}
    }
    db.collection('vodka').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


//vodka details

app.get('/vodkadetails/:id',(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('vodka').find({"product_id":restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//vodka getitem
app.post('/vodkaItem',(req,res)=>{
    db.collection('vodka').find({product_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//for whiskey listing

app.get('/whiskey',(req,res)=>{
    let cateId=Number(req.query.product_id);
    let query={}
    if(cateId){
        query={product_id:cateId}
    }
    db.collection('whiskey').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//whiskey details
app.get('/whiskeydetails/:id',(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('whiskey').find({"product_id":restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//for whiskey items

app.post('/whiskeyItem',(req,res)=>{
    db.collection('whiskey').find({product_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// filter
app.get('filter/:categoryId',(req,res)=>{
    let sort={cost:1}
    let categoryId=Number(req.params.categoryId);
    let skip=0;
    let limit=1000000;
    let lcost=Number(req.query.lcost)
    let hcost=Number(req.query.hcost)
    let query={};

    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(lcost && hcost){
        query={
            $and:[{cost:{$gt:lcost, $lt:hcost}}],
            "category_id":categoryId
        }
    }
    db.collection('liquor').find(query).sort(sort).skip(skip).limit(limit).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//product details
app.get('/details/:id',(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('liquor').find({"product_id":restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// order on basis of user selection

app.get('/orders',(req,res)=>{
    let email=req.query.email;
    let query={}
    if(email){
        query={"email":email}
    }
    db.collection('orders').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// place order
app.post('/placeOrder',(req,res)=>{
    db.collection('orders').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.post('/productItem',(req,res)=>{
    db.collection('liquor').find({product_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//delete order
app.delete('/deleteOrder',(req,res)=>{
    db.collection('orders').remove({},(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// update order
app.put('/updateOrder/:id',(req,res)=>{
    let oId=mongo.ObjectId(req.params.id)
    let status=req.query.status?req.query.status:'Pending'
    db.collection('orders').updateOne({_id:oId},
        {$set:{
            "status":status,
            "bank_name":req.body.bank_name,
            "bank_status":req.body.bank_status
        }},
        (err,result)=>{
            if(err) throw err;
            res.send('Status updated to ${status}')
        })
})

console.log('hello world');

MongoClient.connect(mongoUrl, (err, client) => {
    if (err) console.log("Error While Connecting")
    db = client.db('liquorr2');
    app.listen(port, () => {
        console.log(`listening on port no ${port}`)
    })
})
