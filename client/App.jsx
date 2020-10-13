import React from 'react';

export const App = ({questions, answers, modifyVote})=>(
    <div className="container mt-5">
        <h1>

            Server Side React Render

        </h1>

        {questions.map(({questionId, content})=>(

            <div  className="questContainer" key={questionId}>

                <h3>

        {content}
                    
                </h3>

                {answers.filter(content=>content.questionId==questionId).map(content=>{
                    return (<div>
                                <p key={content.answerId}>{content.content}<br/> <button onClick={()=>{modifyVote(content.answerId,content.upvotes+1)}}>+</button> {content.upvotes} <button onClick={()=>{modifyVote(content.answerId,content.upvotes>0?content.upvotes-1:content.upvotes)}}>-</button></p>
                            </div>
                    )
                })}     
            

            </div>
        ))}
        
    </div>
)