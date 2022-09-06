// code your solution here
// const superbowlWin = (array) => {
//    const winObj = array.find(item => item.result === 'W');
//    return winObj.year;

//   }

const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "l"},
    { year: "2014", result: "N/A"},
  ]

const superbowlWin = (array) => {
  let winningYear = array.find((obj) => obj.result === 'W');
  if(winningYear !== undefined){
    return winningYear.year
    
  }
    
};
    
superbowlWin(record);
    

