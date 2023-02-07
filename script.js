let button = document.getElementById("button2");
let score1= document.getElementById("score1") ;
let score2= document.getElementById("score2") ;

button.addEventListener("click", () => {

    // let score1 = 121 / 7;
    // let score2 = 133 / 4;
    let run1 = score1.value.split("/")[0];
    let run2 = score2.value.split("/")[0];
    let wicket1 = score1.value.split("/")[1];
    let wicket2 = score2.value.split("/")[1];
    console.log(parseInt(run1),parseInt(run2))
    if (parseInt(run1) == parseInt(run2) ){
        alert('match tie')
        return;
    }
    parseInt(run1) > parseInt(run2) ? alert(`team1 won by ${parseInt(run1)-parseInt(run2)} runs`) : alert(`team2 won by ${10-parseInt(wicket2)} wickets`);
    
})
