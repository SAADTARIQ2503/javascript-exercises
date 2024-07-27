const leapYears = function(years) {
    let isLeap=false;
    if(years%4==0)
    {
        isLeap= true;
        if(years%100==0)
        {
            isLeap=false;
            if(years%400==0)
                isLeap=true;
        }
    }
    return isLeap;
};
console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
