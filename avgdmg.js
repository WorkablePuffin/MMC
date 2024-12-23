
//this function calculates the average DPR; note that this is an initial version that determines the average damage without a round
//constraint, among other things
document.getElementById ('averageDPR-form').addEventListener('submit', function (e)
{
    e.preventDefault();

    let diesize = parseFloat(document.getElementById('damage-die-size').value);
    let dicenum = parseFloat(document.getElementById('number-of-dice').value);
    let flat = parseFloat(document.getElementById('flat-bonus').value);
    let extra = parseFloat(document.getElementById('extra-bonus').value);
    let dmgtype = parseFloat(document.getElementById('damage-type').value);
    let weakname = parseFloat(document.getElementById('enemy-weakness-name').value);
    let weaknum = parseFloat(document.getElementById('enemy-weakness-num').value);
    let resname = parseFloat(document.getElementById('enemy-resistance-name').value);
    let resnum = parseFloat(document.getElementById('enemy-resistance-num').value);
    let crit = document.getElementById('crityesno').checked;
    let fatal = document.getElementById('fatalyesno').checked;
    let fatalsize = parseFloat(document.getElementById('fatalsize').value);
    let deadly = document.getElementById('deadlyyesno').checked;
    let deadlysize = parseFloat(document.getElementById('deadlysize').value);

    //2nd-layer variables; constructed from imported values
    let dieavg;
    let avgperdie;
    let deadlyavg;

    //calculates the average dice roll by taking the factorial and dividing it by the size of the die, then gets the average
    //by multiplying the resulting number by the number of dice
    if (fatal == false){
        avgperdie = (diesize+1)/2
        dieavg = avgperdie * dicenum;
    }
    else{
        diesize = fatalsize
        avgperdie = (diesize+1)/2
        dieavg = avgperdie * dicenum;
    }

    if (deadly == true){
        deadlyavg = (deadlysize+1)/2;
    }

    //calculate the results
    let avgdmg = calculateAverageDamagePerRound(diesize, dicenum, flat, extra, dmgtype, weakname, weaknum, resname, resnum, crit, avgperdie, dieavg, fatal, deadly, deadlyavg);
    //display the results
    document.getElementById('avgdpr').textContent = avgdmg;
});
function calculateAverageDamagePerRound(diesize, dicenum, flat, extra, dmgtype, weakname, weaknum, resname, resnum, crit, avgperdie, dieavg, fatal, deadly, deadlyavg)
{
    //calculates final average damage without crit checked
        if (crit == false)
        {
            avgdmg = dieavg + flat + extra;
            switch(dmgtype){
                case 1:
                    if (weakname == 1)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 1)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 2:
                    if (weakname == 2)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 2)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 3:
                    if (weakname == 3)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 3)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
            }
        }

        //calculates final average with crit and fatal checked
        else if (crit == true && fatal == true)
        {
            avgdmg = ((dieavg + flat + extra) * 2) + avgperdie;
            switch(dmgtype){
                case 1:
                    if (weakname == 1)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 1)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 2:
                    if (weakname == 2)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 2)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 3:
                    if (weakname == 3)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 3)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
            }
        }

        //calculates damage if crit and deadly are checked
        else if (crit == true && deadly == true)
            {
                avgdmg = ((dieavg + flat + extra) * 2) + deadlyavg;
               switch(dmgtype){
                case 1:
                    if (weakname == 1)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 1)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 2:
                    if (weakname == 2)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 2)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 3:
                    if (weakname == 3)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 3)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
            }
            }

         //calculates damage if all three are checked
         else if (crit == true && deadly == true && fatal == true)
            {
                avgdmg = ((dieavg + flat + extra) * 2) + dieavg + deadlyavg;
                switch(dmgtype){
                case 1:
                    if (weakname == 1)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 1)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 2:
                    if (weakname == 2)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 2)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 3:
                    if (weakname == 3)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 3)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
            }
            }

        //calculates final average damage with only crit checked; last case
        else
        {
            avgdmg = ((dieavg + flat + extra) * 2);
            switch(dmgtype){
                case 1:
                    if (weakname == 1)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 1)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 2:
                    if (weakname == 2)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 2)
                    {
                        avgdmg = avgdmg-resnum;
                    }
                    else{
                        avgdmg = avgdmg;
                    }
                    break;
                case 3:
                    if (weakname == 3)
                    {
                        avgdmg = avgdmg+weaknum;
                    }
                    if(resname == 3)
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
