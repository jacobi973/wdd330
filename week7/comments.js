function getCurDate() {
    // debugger;
    const curDate = new Date();
    let curYear = curDate.getFullYear();
    let curMonth = curDate.getMonth()+1;
    let curDay = curDate.getDate();

    if(curDay < 10) {
        curDay = '0' + curDay;
    }
    if(curMonth < 10) {
        curMonth = '0' + curMonth;
    } 

    let dateFormated = curDay + '/' + curMonth + '/' +curYear;
    return dateFormated;
}

export  {
    getCurDate
}
