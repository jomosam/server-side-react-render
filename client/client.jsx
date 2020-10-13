import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App";
import { updateVote } from "../shared/utility";
// ReactDOM.render(<App/>,document.getElementById('root'));


let state;

fetch('http://localhost:8080/data').then(data=>data.json()).then(json=>{
    state=json;
    console.log(state);
    render();
}).catch((e)=>{console.log('SOME_ERROR_OCCURED',e)})

const modifyVote    =   (answerId,newVote)=>{

    state.answers   =   updateVote(state.answers,answerId,newVote);
    //console.log('update',updateVote(state.answers,answerId,newVote))
    fetch(`/vote/${answerId}?vote=${newVote}`)
    console.log('state',state);
    render();
}

function render(){

    ReactDOM.hydrate(<App {...state} modifyVote={modifyVote}/>,document.getElementById('root'))
}

