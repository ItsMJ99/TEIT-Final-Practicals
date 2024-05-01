import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import SongModel from './models/Song.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://madhav3jadhav:<password99>@cluster0.s63txrq.mongodb.net/<database>');

app.post('/addSong',(req,res)=>{
    SongModel.create(req.body)
    .then(music => res.json(music))
    .catch(err => res.json(err));
})

app.get('/',(req,res)=>{
    SongModel.find({})
    .then(music => res.json(music))
    .catch(err => res.json(err));
})

app.get('/getSong/:id',(req,res)=>{
    const id = req.params.id;
    SongModel.findById({_id:id})
    .then(music => res.json(music))
    .catch(err => res.json(err));
})

app.put('/editSong/:id',(req,res)=>{
    const id = req.params.id;
    SongModel.findByIdAndUpdate({_id:id},req.body)
    .then(music => res.json(music))
    .catch(err => res.json(err));
})

app.delete('/deleteSong/:id',(req,res)=>{
    const id= req.params.id;
    SongModel.findByIdAndDelete({_id:id})
    .then(music => res.json(music))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log('listening on port 3001');
})
