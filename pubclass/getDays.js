/*
 *获取当前月的天数
 *author:liulyliu
 * */
Date.prototype.getCurrentMonthDays = function(){
        var thisTime = this.getTime();
        if(this.getMonth() == 11){
            this.setYear(this.getYear()+1);
            this.setMonth(0);
        }
        else{
            this.setMonth(this.getMonth()+1);
        }
        var currentDays = parseInt((this.getTime()-thisTime)/1000/60/60/24);
        this.setTime(thisTime);
        return currentDays; 
    }
