// get an array with even scores
const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];

const newScoreList = scoreList.filter((item,index,self)=>{

    if(item%2 === 0){
        return item;
    }

});

console.log(newScoreList);

