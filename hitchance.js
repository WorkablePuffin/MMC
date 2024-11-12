

document.getElementById('hitchance-form').addEventListener('submit', function (e) 
{
    e.preventDefault();
    //passed values; not that this does not include fortune and misfortune bonuses as that requires scraper implementation
    let skillmod = parseFloat(document.getElementById('skill-mod').value);
    let enemyac = parseFloat(document.getElementById('enemy-ac').value);
    let circum = parseFloat(document.getElementById('circumstance-bonus').value);
    let status = parseFloat(document.getElementById('status-bonus').value);
    let item = parseFloat(document.getElementById('item-bonus').value);
    let circump = parseFloat(document.getElementById('circumstance-penalty').value);
    let statusp = parseFloat(document.getElementById('status-penalty').value);
    let itemp = parseFloat(document.getElementById('item-penalty').value);
    let attempts = parseFloat(document.getElementById("attemptnumber").value);
    let agile = document.getElementById('agileyesno').checked;

    let hitdiff;

    //calculate the results
    let avghitchance =  calculateAverageHitChance(skillmod,enemyac, circum, status, item, circump, statusp, itemp, attempts,hitdiff,agile);
    document.getElementById('avghc-result').textContent = avghitchance;

});
function calculateAverageHitChance(skillmod, enemyac, circum, status, item, circump, statusp, itemp, attempts, hitdiff,agile)
{
    //basic calculations for the high, low, and average rolls
    let bonussum = skillmod+circum+status+item-circump-statusp-itemp;
    let playeravg = 10+ bonussum;
    let playercritmax = 20+ bonussum;
    let playernormax = 19+ bonussum;
    let playerlowmin = 1+ bonussum;
    let playerlownorm = 2+bonussum;

    //attempt 1
    if (attempts = 1){
    if (playeravg = enemyac)
    {
        avghitchance = 55
    }

    //if the roll isn't an assurance roll, it gets more complicated. we must find the player average, find if it is possible for the 
    //player to even hit the enemy, and then do the actual calculation. the calculation will essentially find what number the 
    //player needs to roll to hit, then find the difference from that and twenty; e.g. the 'assurance' is essentially doing 20-11 which is 55%
    //as the player will hit on 11 numbers (they will miss on 9 of them)
    else if(playercritmax < enemyac)
    {
        avghitchance = 0
    }
    else if (playernormax < enemyac)
    {
        avghitchance = 5
    }
    else if( playerlowmin > enemyac+10)
    {
        avghitchance = 100
    }

    else if (playerlownorm > enemyac)
    {
        avghitchance = 95
    }
    else
    {
        hitdiff = 1 + (enemyac - (bonussum))
        avghitchance = 100 - (hitdiff/20)
    }
    return avghitchance;
    }

    if(attempts = 2){
        for (let i = attempts; i>0; i++){
            if(agile == true){
                playeravg = playeravg - ((attempts*4)-4)
            }
            else{
                playeravg = playeravg - ((attempts*5)-5)
            }

            if (playeravg = enemyac)
                {
                    avghitchance += 55
                }
            
                //if the roll isn't an assurance roll, it gets more complicated. we must find the player average, find if it is possible for the 
                //player to even hit the enemy, and then do the actual calculation. the calculation will essentially find what number the 
                //player needs to roll to hit, then find the difference from that and twenty; e.g. the 'assurance' is essentially doing 20-11 which is 55%
                //as the player will hit on 11 numbers (they will miss on 9 of them)
                else if(playercritmax < enemyac)
                {
                    avghitchance += 0
                }
                else if (playernormax < enemyac)
                {
                    avghitchance += 5
                }
                else if( playerlowmin > enemyac+10)
                {
                    avghitchance += 100
                }
            
                else if (playerlownorm > enemyac)
                {
                    avghitchance += 95
                }
                else
                {
                    hitdiff = 1 + (enemyac - (bonussum))
                    avghitchance += 100 - (hitdiff/20)
                }

        }
        avghitchance = avghitchance/attempts;

        return avghitchance;
    }

    if(attempts = 3){
        for (let i = attempts; i>0; i++){
            if(agile == true){
                playeravg = playeravg - ((attempts*4)-4)
            }
            else{
                playeravg = playeravg - ((attempts*5)-5)
            }

            if (playeravg = enemyac)
                {
                    avghitchance += 55
                }
            
                //if the roll isn't an assurance roll, it gets more complicated. we must find the player average, find if it is possible for the 
                //player to even hit the enemy, and then do the actual calculation. the calculation will essentially find what number the 
                //player needs to roll to hit, then find the difference from that and twenty; e.g. the 'assurance' is essentially doing 20-11 which is 55%
                //as the player will hit on 11 numbers (they will miss on 9 of them)
                else if(playercritmax < enemyac)
                {
                    avghitchance += 0
                }
                else if (playernormax < enemyac)
                {
                    avghitchance += 5
                }
                else if( playerlowmin > enemyac+10)
                {
                    avghitchance += 100
                }
            
                else if (playerlownorm > enemyac)
                {
                    avghitchance += 95
                }
                else
                {
                    hitdiff = 1 + (enemyac - (bonussum))
                    avghitchance += 100 - (hitdiff/20)
                }

        }
        avghitchance = avghitchance/attempts;

        return avghitchance;
    }

    else{
        if (playeravg = enemyac)
            {
                avghitchance = 55
            }
        
            //if the roll isn't an assurance roll, it gets more complicated. we must find the player average, find if it is possible for the 
            //player to even hit the enemy, and then do the actual calculation. the calculation will essentially find what number the 
            //player needs to roll to hit, then find the difference from that and twenty; e.g. the 'assurance' is essentially doing 20-11 which is 55%
            //as the player will hit on 11 numbers (they will miss on 9 of them)
            else if(playercritmax < enemyac)
            {
                avghitchance = 0
            }
            else if (playernormax < enemyac)
            {
                avghitchance = 5
            }
            else if( playerlowmin > enemyac+10)
            {
                avghitchance = 100
            }
        
            else if (playerlownorm > enemyac)
            {
                avghitchance = 95
            }
            else
            {
                hitdiff = 1 + (enemyac - (bonussum))
                avghitchance = 100 - (hitdiff/20)
            }
            return avghitchance;
        }
}
