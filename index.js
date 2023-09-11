const dateOfBirth = document.querySelector("#dateof");
const luckyNo = document.querySelector("#lucky")
const check = document.querySelector("#result");

function compare(sum,luckyNo){
    if(sum % luckyNo === 0){
        demo.innerHTML =  "<h2>You are Lucky 😄 </h2>";
    }
    else{
        demo.innerHTML = "<h2>You not Lucky 😒 </h2>";
    }
}

function isLucky(){
    const dob = dateOfBirth.value;
    const lucky = luckyNo.value
    const sum = calculteSum(dob);
    if(sum && dob){
   compare(sum,lucky);
    }
    else{
        demo.innerHTML = "<h2> Must Filled </h2>"
    }
}

function calculteSum(dob){
    dob = dob.replaceAll("-","")
    let sum = 0;
    for(let index = 0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

check.addEventListener('click',isLucky);