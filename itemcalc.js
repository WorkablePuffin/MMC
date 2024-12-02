document.getElementById ('itemeffect-form').addEventListener('submit', function (e)
{
    e.preventDefault;

    let item = parseFloat(document.getElementById('item-type'));
    let numberofitems = parseFloat(document.getElementById('number-being-used'));
    let currentHP = parseFloat(document.getElementById('userhp'));

    let hphealed = calculateHPHealed(item, numberofitems, currentHP);

    document.getElementById('avghp').textContent = hphealed;
});

function calculateHPHealed(item, numberofitems, currentHP){
    switch (item){
        case 1: {
            let dice = 1
            let flat = 0
            avg = (dice*4.5)+flat
            return avg
        }
        case 2: {
            let dice = 2
            let flat = 5
            avg = (dice*4.5)+flat
            return avg
        }
        case 3: {
            let dice = 3
            let flat = 10
            avg = (dice*4.5)+flat
            return avg
        }
        case 4: {
            let dice = 6
            let flat = 20
            avg = (dice*4.5)+flat
            return avg
        }
        case 5: {
            let dice = 8
            let flat = 30
            avg = (dice*4.5)+flat
            return avg
        }
        case 6: {
            let dice = 1
            let flat = 0
            avg = (dice*3.5)+flat
            return avg
        }
        case 7: {
            let dice = 3
            let flat = 6
            avg = (dice*3.5)+flat
            return avg
        }
        case 8: {
            let dice = 5
            let flat = 18
            avg = (dice*3.5)+flat
            return avg
        }
        case 9: {
            let dice = 7
            let flat = 21
            avg = (dice*3.5)+flat
            return avg
        }
        case 10: {
            let dice = 8
            let flat = 21
            avg = (dice*3.5)+flat
            return avg
        }
        case 11: {
            let dice = 10
            let flat = 27
            avg = (dice*3.5)+flat
            return avg
        }
    }
};
