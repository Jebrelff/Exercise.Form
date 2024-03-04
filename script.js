//Code Your Solution Below
const booster = document.querySelector('input[name=boosterCount]');

const form = document.getElementById('exercise');
const simulate = document.getElementById('simulate')


function run(){
    form.addEventListener("submit", alert(" sucessfully submitted"));
    simulate.addEventListener("click", alert("simulation sucessful"));
   
}



function sim(){

    if (query.value.trim() === '') { 
            alert("please fill out the form");
     }else if (booster.innerHTML << 10 ) {

          sim();
     }

}

window.addEventListener("load", function(){
   
    form.addEventListener("submit", run);
 });