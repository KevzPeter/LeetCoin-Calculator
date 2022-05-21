
const oneDayInMs = 1000 * 60 * 60 * 24;

const calculate=(coinsNeeded, streak, type)=>{
    if(coinsNeeded < 0 || streak < 0 || type == null) return null;
    let endDate = new Date();

    if(type === "checkIn"){
        endDate.setDate(endDate.getDate() + coinsNeeded);
        return endDate.toDateString();
    }

    let lastBiWeekly = null;
    while(coinsNeeded > 0){
        if(endDate.getDate() == 1){
            streak = 1;
        }
        if(endDate.getDate() == 25 && streak == 25){
            coinsNeeded -= 25;
        }
        else if(isLastDayOfMonth(endDate) && streak == endDate.getDate()){
            coinsNeeded -= 50;
        }
        if(type === "contest"){
            if(endDate.getDay() == 6) //Weekly contest on Sundays
                coinsNeeded -= 5; 
            else if(endDate.getDay() == 5){ //Biweekly Contest on Saturdays
                if(lastBiWeekly == null){
                    lastBiWeekly = endDate;
                    coinsNeeded -= 5;
                }
                else if(Math.abs((lastBiWeekly.getTime() - endDate.getTime()) / oneDayInMs) == 14){
                    coinsNeeded -= 35; //participate in both contests in a week
                }
            } 
        }
        coinsNeeded -= 11; //daily challenge(10) + daily checkin(1)
        streak++;
        endDate.setDate(endDate.getDate() + 1);
    }
    return endDate.toDateString();
}

const isLastDayOfMonth=(date)=>{
  return new Date(date.getTime() + oneDayInMs).getDate() === 1;
}

module.exports = {calculate};