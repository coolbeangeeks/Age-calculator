document.querySelector('button').addEventListener('click',showAge);
function showDivs() {
    const divsToShow = document.getElementsByClassName('age');
    for (let i = 0; i < divsToShow.length; i++) {
          divsToShow[i].style.display = "block"; // Show each div with the class "my-div"
        }
}


function showAge(){
    let x=document.getElementById('day-month-year').value;
    const xdate=new Date(x);
    // console.log(xdate);
    const xday=xdate.getDate();
    const xmonth=xdate.getMonth()+1;
    const xyear=xdate.getFullYear();
    // console.log(xday);
    // console.log(xmonth);
    // console.log(xyear);


    const currdate=new Date();
    const curr_day=currdate.getDate();
    const curr_month=currdate.getMonth()+1;
    const curr_year=currdate.getFullYear();

    let diffyear=curr_year-xyear;
    let diffmonth=curr_month-xmonth;
    let diffday=curr_day-xday;
    if(xmonth<curr_month){
        diffmonth=(curr_month-xmonth)+12;
        console.log(diffmonth);
        diffyear+=Math.floor(diffmonth/12);
        console.log(diffyear);
        diffmonth=diffmonth%12;
        console.log(diffmonth)
    }
    else if(xmonth>curr_month){
        diffmonth=(curr_month-xmonth)+12;
    }
    if(diffday<curr_day){
        diffday=curr_day-diffday;
    }
    else if(diffday>curr_day){
        diffday=curr_day-diffday+30;
    }
    
    document.querySelector('.year').innerHTML=`${diffyear}<br>Year`;
    document.querySelector('.month').innerHTML=`${diffmonth}<br>Month`;
    document.querySelector('.day').innerHTML=`${diffday}<br>Day`;
    showDivs();
    



}