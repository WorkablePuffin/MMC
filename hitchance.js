window.onload = () =>
    //called when the initial calculation button is clicked
    {
        document.getElementById('#hitchancebutton').onclick = calculateAverageHitChance;
    }

function calculateAverageHitChance(){
    //passed values; not that this does not include fortune and misfortune bonuses as that requires scraper implementation
    let skillmod = document.getElementById('#skill-mod').value;
    let enemyac = document.getElementById('#enemy-ac').value;
    let circum = document.getElementById('#circumstance-bonus').value;
    let status = document.getElementById('#status-bonus').value;
    let item = document.getElementById('#item-bonus').value;
    let circump = document.getElementById('#circumstance-penalty').value;
    let statusp = document.getElementById('#status-penalty').value;
    let itemp = document.getElementById('#item-penalty').value;
    let attempts = document.getElementById('#number-of-attempts').value;

    let avghitchance;

    //basic calculations for the high, low, and average rolls
    let bonussum = skillmod+circum+status+item-circump-statusp-itemp;
    let playeravg = 10+ bonussum;
    let playercritmax = 20+ bonussum;
    let playernormax = 19+ bonussum;
    let playerlowmin = 1+ bonussum;
    let playerlownorm = 2+bonussum;
    let hitdiff;


    //attempt 1
    if (playeravg = enemyac){
        avghitchance = 55
    }

    //if the roll isn't an assurance roll, it gets more complicated. we must find the player average, find if it is possible for the 
    //player to even hit the enemy, and then do the actual calculation. the calculation will essentially find what number the 
    //player needs to roll to hit, then find the difference from that and twenty; e.g. the 'assurance' is essentially doing 20-11 which is 55%
    //as the player will hit on 11 numbers (they will miss on 9 of them)
    else if(playercritmax < enemyac){
        avghitchance = 0
    }
    else if (playernormax < enemyac){
        avghitchance = 5
    }
    else if( playerlowmin > enemyac+10){
        avghitchance = 100
    }
    else if (playerlownorm > enemyac){
        avghitchance = 95
    }
    else{
        hitdiff = 1 + (enemyac - (bonussum))
        avghitchance = 100 - (hitdiff/20)
    }

    //TODO: attempt 2
    

    //TODO: attempt 3
}