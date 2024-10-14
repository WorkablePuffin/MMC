window.onload = () =>
    //TODO: integrate proper display and ensure that values are being passed properly; this code should work
    //called when the initial calculation button is clicked
    {
        document.getElementById('#avgdmgbutton').onclick = calculateAverageDamagePerRound;
    }

//this function calculates the average DPR; note that this is an initial version that determines the average damage without a round
//constraint, among other things
function calculateAverageDamagePerRound(){
    //init value importation from html document
    let diesize = document.getElementById('#damage-die-size').value;
    let dicenum = document.getElementById('#number-of-dice').value;
    let flat = document.getElementById('#flat-bonus').value;
    let extra = document.getElementById('#extra-bonus').value;
    let dmgtype = document.getElementById('#damage-type').value;
    let weakname = document.getElementById('#circumstance-penalty').value;
    let weaknum = document.getElementById('#enemy-weakness-num').value;
    let resname = document.getElementById('#skill-mod').value;
    let resnum = document.getElementById('#enemy-resistance-num').value;
    let crit = document.getElementById('#crityesno').checked;

    //2nd-layer variables; constructed from imported values
    let dieavg;
    let factorialdie;

    //calculates the average dice roll by taking the factorial and dividing it by the size of the die, then gets the average
    //by multiplying the resulting number by the number of dice
    factorialdie = factorial(diesize)/diesize
    dieavg = factorialdie * dicenum;

    //final return value
    let avgdmg;

    //calculates final average damage without crit checked
    if (crit == false){
        avgdmg = dieavg + flat + extra;
        switch(dmgtype){
            case "Bludgeoning":
                if (weakname == "Bludgeoning"){
                    avgdmg = avgdmg+weaknum;
                }
                break;
            case "Piercing":
                if (weakname == "Piercing"){
                    avgdmg = avgdmg+weaknum;
                }
                break;
            case "Slashing":
                if (weakname == "Slashing"){
                    avgdmg = avgdmg+weaknum;
                }
                break;
        }
    }

    //calculates final average damage with crit checked
    else{
        avgdmg = ((dieavg + flat + extra) * 2);
        switch(dmgtype){
            case "Bludgeoning":
                if (weakname == "Bludgeoning"){
                    avgdmg = avgdmg+weaknum;
                }
                break;
            case "Piercing":
                if (weakname == "Piercing"){
                    avgdmg = avgdmg+weaknum;
                }
                break;
            case "Slashing":
                if (weakname == "Slashing"){
                    avgdmg = avgdmg+weaknum;
                }
                break;
        }
        document.getElementById('#avgdpr').innerHTML = avgdmg;
    }
}

//this function calculates the factorial of a number, used to calculate the average of dice
function factorial(num){
    //factorial of 0 and 1 are both 1
    if(num == 0 || num == 1){
        return 1;
    }
    //otherwise, loops
    for (var i = num-1; i >= 1; i++){
        num *= i;
    }
    //returns final factorial
    return num;
}
