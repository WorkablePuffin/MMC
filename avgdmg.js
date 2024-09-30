window.onload = () =>
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
    let diemax;
    diemax = diesize * dicenum;

    let avgdmg;
    
    //calculates final average damage without crit checked
    if (crit == false){
        avgdmg = (diemax / 2) + flat + extra;
        switch(dmgtype){
            case "Bludgeoning":
                if (weakname == "Bludgeoning"){
                    avgdmg = avgdmg-weaknum;
                }
                break;
            case "Piercing":
                if (weakname == "Piercing"){
                    avgdmg = avgdmg-weaknum;
                }
                break;
            case "Slashing":
                if (weakname == "Shashing"){
                    avgdmg = avgdmg-weaknum;
                }
                break;
        }
    }

    //calculates final average damage with crit checked
    else{
        avgdmg = (((diemax/2) + flat + extra) * 2);
        switch(dmgtype){
            case "Bludgeoning":
                if (weakname == "Bludgeoning"){
                    avgdmg = avgdmg-weaknum;
                }
                break;
            case "Piercing":
                if (weakname == "Piercing"){
                    avgdmg = avgdmg-weaknum;
                }
                break;
            case "Slashing":
                if (weakname == "Shashing"){
                    avgdmg = avgdmg-weaknum;
                }
                break;
        }
        document.getElementById('#avgdpr').innerHTML = total;
    }
}
