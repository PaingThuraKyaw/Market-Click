'use strict';

import mongoose from "mongoose";

// mongoose.connect(config.url,{useMongoClient: true});
// mongoose.Promise = global.Promise;


const db = mongoose.connection;

// db.once('open',()=>{
//     console.log('testing api')
// })