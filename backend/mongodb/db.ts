'use strict';

import mongoose from "mongoose";
import config from 'config-lite';

// mongoose.connect(config.url,{useMongoClient: true});
// mongoose.Promise = global.Promise;


const db = mongoose.connection;

// db.once('open',()=>{
//     console.log('testing api')
// })