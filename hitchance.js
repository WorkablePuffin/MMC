roanokestuff
roanokestuff
(☞ﾟヮﾟ)☞
mmc funhouse

roanokestuff — 12/2/2024 9:16 PM
right
puff — 12/2/2024 9:17 PM
yeah maybe
its confusing
roanokestuff — 12/2/2024 9:17 PM
I'm in the camp of scraping the redundant use case diagram
puff — 12/2/2024 9:18 PM
lets just do that
roanokestuff — 12/2/2024 9:28 PM
connor do you need help yapping
puff — 12/2/2024 9:29 PM
im tabbed out finalizing a lotta stuff rn
hold on
roanokestuff — 12/2/2024 9:30 PM
I'm just wondering because now is the time that I usually shut everything down and get ready for bed
puff — 12/2/2024 9:30 PM
uhhh
can you handle
roanokestuff — 12/2/2024 9:31 PM
I need to know if you need help so I can not do that
puff — 12/2/2024 9:31 PM
5.5
and the use case related stuff
so 3.2.1 and 3.2.2-3.3
we dont need 2.6
for 6 im honestly not sure
since we didnt need it for the slides
roanokestuff — 12/2/2024 9:36 PM
wait I thought we were cutting 5.5
puff — 12/2/2024 9:37 PM
? oh i thought you meant 'since we didnt have it we should do it now'
my bad
roanokestuff — 12/2/2024 9:37 PM
no worries
there's like no time to do it anyways
wtf is this garbage in 3.2.1
try typing there
puff — 12/2/2024 9:41 PM
@roanokestuff
Image
roanokestuff — 12/2/2024 9:41 PM
woo it's fixed
thanks
OKAY what else do I need to yap about
puff — 12/2/2024 9:49 PM
uhh
5 is done
im still confused about 6
ok ill ask this
do we want to do 6
oh yeah can you put screenshots in 7 too
we cant submit code yet since yknow.. not done
roanokestuff — 12/2/2024 9:49 PM
I do not want to do 6
puff — 12/2/2024 9:50 PM
ok we aint doing it
nobody else talked about test cases sooooooooooo
roanokestuff — 12/2/2024 9:50 PM
full send
:HACKERCAT:
puff — 12/2/2024 9:50 PM
ok yea just put in da screenies for 6.1 then
new 6.1
roanokestuff — 12/2/2024 9:51 PM
windows pls it's your brother
Image
screenies have been screened
I am going to shower then bed
puff — 12/2/2024 9:56 PM
ok goonai
its due on the 4th so IDEALLY we have code done by then
Image
roanokestuff — Yesterday at 9:59 AM
okay, I get home today by around 4 pm, and I'm free all day tomorrow
I feel like I'll have enough braincells to yap for the report today and help debug tomorrow
puff — Yesterday at 9:59 AM
Splendid
I'll finish up the report after work
roanokestuff — Yesterday at 10:19 AM
Oh, and because classes end tomorrow I also have Thursday to work on stuff
The Big Hedgehog — Yesterday at 10:24 AM
so I have fixed class optimizer mostly
puff — Yesterday at 10:24 AM
OK huge
@roanokestuff i think I need to rework the dropdowns again I'm ngl
The Big Hedgehog — Yesterday at 10:25 AM
it is posting everything except the ability boost from the ancestry though it is doing it for the background
i have no idea why thats happening but I can fix that later, good news is it can find the json just fine now
roanokestuff — Yesterday at 10:33 AM
:MYAAA:
Why 
puff — Yesterday at 10:34 AM
Well not the dropdoens themselves
How I'm passing
roanokestuff — Yesterday at 10:38 AM
Can you give me any specifics on how you want to rework the drop downs
puff — Yesterday at 10:44 AM
Image
I'm gonna try to change my passing to something like this
roanokestuff — Yesterday at 10:49 AM
Okay
roanokestuff — Yesterday at 9:38 PM
I did not have the braincells to write more than 2 sentences
puff — Yesterday at 9:39 PM
this is me
roanokestuff — Yesterday at 9:40 PM
It's fine I can do more tomorrow
puff — Yesterday at 9:40 PM
ill see what i can do as well
roanokestuff — Yesterday at 9:40 PM
it's half done anyways
roanokestuff — Today at 11:47 AM
okay my doc appointment is over
what can I do team
puff — Today at 11:50 AM
uhhhhh
can you go into the code for me
and see if you can change around that passing
value will probably be easier than text for items, but probably want to use text for combat calc
roanokestuff — Today at 12:03 PM
I fixed hitchance
Image
puff — Today at 12:03 PM
what was broke
roanokestuff — Today at 12:03 PM
attemptnumber
puff — Today at 12:03 PM
i never noticed how high his keys fly in this gif
roanokestuff — Today at 12:04 PM
Image
puff — Today at 12:04 PM
hes slamming
roanokestuff — Today at 12:04 PM
this code in on your machine right
puff — Today at 12:05 PM
Image
roanokestuff — Today at 12:05 PM
ah
one sec I'm going to fix that
puff — Today at 12:05 PM
let me just


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
    let oneattempt = document.getElementById('1attempt').checked;
    let twoattempt = document.getElementById('2attempt').checked;
    let threeattempt = document.getElementById('3attempt').checked;
    let agile = document.getElementById('agileyesno').checked;

    let hitdiff;

    //calculate the results
    let avghitchance =  calculateAverageHitChance(skillmod,enemyac, circum, status, item, circump, statusp, itemp, hitdiff,agile,oneattempt,twoattempt,threeattempt);
    document.getElementById('avghc-result').textContent = avghitchance;
});
function calculateAverageHitChance(skillmod, enemyac, circum, status, item, circump, statusp, itemp, attempts, hitdiff,agile,oneattempt,twoattempt,threeattempt)
{


    //attempt 1
    if (oneattempt == true){
    //basic calculations for the high, low, and average rolls
    let bonussum = skillmod+circum+status+item-circump-statusp-itemp;
    let playeravg = 10+ bonussum;
    let playercritmax = 20+ bonussum;
    let playernormax = 19+ bonussum;
    let playerlowmin = 1+ bonussum;
    let playerlownorm = 2+bonussum;

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

    else if(twoattempt == true){
        for (let i = 1; i>=2; i++){
        //basic calculations for the high, low, and average rolls
        let bonussum = skillmod+circum+status+item-circump-statusp-itemp;

        if(agile == true){
            bonussum = bonussum - ((i*4)-4)
        }
        else{
            bonussum = bonussum - ((i*5)-5)
        }

        let playeravg = 10+ bonussum;
        let playercritmax = 20+ bonussum;
        let playernormax = 19+ bonussum;
        let playerlowmin = 1+ bonussum;
        let playerlownorm = 2+bonussum;

            if(agile == true){
                playeravg = playeravg - ((attempts*4)-4)
            }
            else{
                playeravg = playeravg - ((attempts*5)-5)
            }

            if (playeravg = enemyac)
                {
... (135 lines left)
Collapse
message.txt
9 KB
this still has the issue where it returns NaN randomly
either 55% or NaN
roanokestuff — Today at 12:07 PM
what does your hmtl look like for combat calc
puff — Today at 12:07 PM

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
Expand
message.txt
11 KB
slightly outdated
were you 


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
    let oneattempt = document.getElementById('1attempt').checked;
    let twoattempt = document.getElementById('2attempt').checked;
    let threeattempt = document.getElementById('3attempt').checked;
    let agile = document.getElementById('agileyesno').checked;

    let hitdiff;

    //calculate the results
    let avghitchance =  calculateAverageHitChance(skillmod,enemyac, circum, status, item, circump, statusp, itemp, hitdiff,agile,oneattempt,twoattempt,threeattempt);
    document.getElementById('avghc-result').textContent = avghitchance;
});
function calculateAverageHitChance(skillmod, enemyac, circum, status, item, circump, statusp, itemp, attempts, hitdiff,agile,oneattempt,twoattempt,threeattempt)
{


    //attempt 1
    if (oneattempt == true){
    //basic calculations for the high, low, and average rolls
    let bonussum = skillmod+circum+status+item-circump-statusp-itemp;
    let playeravg = 10+ bonussum;
    let playercritmax = 20+ bonussum;
    let playernormax = 19+ bonussum;
    let playerlowmin = 1+ bonussum;
    let playerlownorm = 2+bonussum;

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

    else if(twoattempt == true){
        for (let i = 1; i>=2; i++){
        //basic calculations for the high, low, and average rolls
        let bonussum = skillmod+circum+status+item-circump-statusp-itemp;

        if(agile == true){
            bonussum = bonussum - ((i*4)-4)
        }
        else{
            bonussum = bonussum - ((i*5)-5)
        }

        let playeravg = 10+ bonussum;
        let playercritmax = 20+ bonussum;
        let playernormax = 19+ bonussum;
        let playerlowmin = 1+ bonussum;
        let playerlownorm = 2+bonussum;

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

    else if(threeattempt == true){
        for (let i = 1; i>=3; i++){
            //basic calculations for the high, low, and average rolls
            let bonussum = skillmod+circum+status+item-circump-statusp-itemp;

            if(agile == true){
                bonussum = bonussum - ((i*4)-4)
            }

            else{
                bonussum = bonussum - ((i*5)-5)
            }

        let playeravg = 10+ bonussum;
        let playercritmax = 20+ bonussum;
        let playernormax = 19+ bonussum;
        let playerlowmin = 1+ bonussum;
        let playerlownorm = 2+bonussum;

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
        let bonussum = skillmod+circum+status+item-circump-statusp-itemp;
        let playeravg = 10+ bonussum;
        let playercritmax = 20+ bonussum;
        let playernormax = 19+ bonussum;
        let playerlowmin = 1+ bonussum;
        let playerlownorm = 2+bonussum;

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
message.txt
9 KB
