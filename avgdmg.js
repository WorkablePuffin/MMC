
//this function calculates the average DPR; note that this is an initial version that determines the average damage without a round
//constraint, among other things
document.getElementById ('averageDPR-form').addEventListener('submit', function (e)
{
    e.preventDefault();

    let diesize = parseFloat(document.getElementById('damage-die-size').value);
    let dicenum = parseFloat(document.getElementById('number-of-dice').value);
    let flat = parseFloat(document.getElementById('flat-bonus').value);
    let extra = parseFloat(document.getElementById('extra-bonus').value);
    let dmgtype = new String(document.getElementById('damage-type').value);
    let weakname = new String(document.getElementById('enemy-weakness-name').value);
    let weaknum = parseFloat(document.getElementById('enemy-weakness-num').value);
    let resname = new String(document.getElementById('enemy-resistance-name').value);
    let resnum = parseFloat(document.getElementById('enemy-resistance-num').value);
    let crit = document.getElementById('crityesno').checked;

    let num;

    //2nd-layer variables; constructed from imported values
    let dieavg;
    let avgperdie;

    //calculates the average dice roll by taking the factorial and dividing it by the size of the die, then gets the average
    //by multiplying the resulting number by the number of dice
    avgperdie = (diesize+1)/2
    dieavg = avgperdie * dicenum;

    //calculate the results
    let avgdmg = calculateAverageDamagePerRound(diesize, dicenum, flat, extra, dmgtype, weakname, weaknum, resname, resnum, crit, avgperdie, dieavg,num);
    //display the results
    document.getElementById('avgdpr').textContent = avgdmg;
});
function calculateAverageDamagePerRound(diesize, dicenum, flat, extra, dmgtype, weakname, weaknum, resname, resnum, crit, avgperdie, dieavg)
{
    //calculates final average damage without crit checked
        if (crit == false)
        {
            avgdmg = dieavg + flat + extra;
            switch(dmgtype){
                case 'Bludgeoning':
                    if (weakname === 'Bludgeoning')
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname === 'Bludgeoning')
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 'Piercing':
                    if (weakname === 'Piercing')
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname === 'Piercing')
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 'Slashing':
                    if (weakname === 'Slashing')
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname === 'Slashing')
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
            }
        }

    //calculates final average damage with crit checked
        else
        {
            avgdmg = ((dieavg + flat + extra) * 2);
            switch(dmgtype){
                case 'Bludgeoning':
                    if (weakname === 'Bludgeoning')
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname === 'Bludgeoning')
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 'Piercing':
                    if (weakname === 'Piercing')
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname === 'Piercing')
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case "Slashing":
                    if (weakname === "Slashing")
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname === "Slashing")
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
            }    
        }
    return avgdmg;
}
