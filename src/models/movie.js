/**
 * Created by prashantsudeep on 10/10/2020. COVID19
 */
 
import mongoose from 'mongoose';

let movie= new mongoose.Schema({
    title:String,
    release_date:String,
    synopsis:String
})


module.exports = mongoose.model("Movie", movie);