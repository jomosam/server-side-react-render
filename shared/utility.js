export function updateVote(answers,answerId,newVote){

    return answers.map(answer=>{
        return answerId===answer.answerId?{...answer,upvotes:newVote}:{...answer} ;
      })
}