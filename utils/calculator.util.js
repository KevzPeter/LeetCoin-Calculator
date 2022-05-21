
const calculate=(coinsNeeded, streak)=>{
    let endDate = new Date();
    while(coinsNeeded > 0){
        if(endDate.getDate() == 1) streak = 1;
        
        if(endDate.getDate() == 25 && streak == 25){
            coinsNeeded -= 25;
        }
        
        else if(isLastDayOfMonth(endDate) && streak == endDate.getDate()){
            coinsNeeded -= 50;
        }
        coinsNeeded -= 10;
        streak++;
        endDate.setDate(endDate.getDate() + 1);
    }
    return endDate.toDateString();
}
const isLastDayOfMonth=(date)=>{
  const oneDayInMs = 1000 * 60 * 60 * 24;
  return new Date(date.getTime() + oneDayInMs).getDate() === 1;
}

module.exports = {calculate};