import React  from "react";
import express from 'express';
import {readFileSync} from 'fs'
import {renderToString } from 'react-dom/server'
import { App } from "../client/App";
import { updateVote } from "../shared/utility";

const app = express();

const data = {

    questions:[{

        questionId:"Q1",
        content:"Which JavaScript Libary Do You Like?"

    },{

        questionId:"Q2",
        content:"What percentage of developer time should be devoted to end-to-end testing?"

    }],
    answers:[{

        answerId:"A1",
        questionId:'Q1',
        upvotes:2,
        content: "Jquery"

    },{

        answerId:"A2",
        questionId:"Q1",
        upvotes:0,
        content:"React"

    },{

        answerId:"A3",
        questionId:"Q1",
        upvotes:4,
        content:"KnockOut"

    },{

        answerId:"A4",
        questionId:"Q2",
        upvotes:2,
        content:"25%"

    },{

        answerId:"A5",
        questionId:"Q2",
        upvotes:1,
        content:"50%"

    },{

        answerId:"A6",
        questionId:"Q2",
        upvotes:1,
        content:"75%"

    }]
    
}
app.use(express.static("dist"));

app.get('/vote/:answerId',(_req,res)=>{
    const {query,params}    =   _req;
    data.answers            =   updateVote(data.answers,params.answerId,query.vote);
    res.send("OK")
})

app.get('/data',(_req,res)=>{
    res.json(data);
})

app.get('/',(_req,res)=>{
    const index     =   readFileSync('public/index.html','utf8');
    const rendered  =   renderToString(<App questions={data.questions} answers={data.answers}/>);
    res.send(index.replace("{{render}}",rendered));
})

app.listen(8080,()=>{ console.log('fds')})