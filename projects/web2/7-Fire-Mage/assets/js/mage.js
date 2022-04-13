var health = document.querySelector("#health")
var hpCount = 100;
var mage = document.querySelector("#fireMage")
var alive = true;
var gameEvent = document.querySelector("#event")
var gameOver = document.querySelector("#gameOver")
var monsterHealth = document.querySelector("#monsterHealth")
var monsterHP = 20;
var monster = document.querySelector("#monster")
var randomMonster = 20;
var wizardLevel = 1;
var monsterAttack = 0;
var damageButtonMessage = document.querySelector("#dealDamage")

var mana = document.querySelector("#mana") 
var mpCount = 30;

function takeDamage(damage) {
    hpCount -= damage
    if (hpCount <= 0){
        mage.setAttribute("src", "assets/images/DeadFireMage.png")
        alive = false;   
        gameEvent.innerHTML = "You died."
        gameOver.style.display = "block"
    }
    health.innerHTML = `${hpCount}`
}

function gainMana() {
    mpCount += 10;
    mana.innerHTML = `${mpCount}`
    monsterAttack =  Math.floor((Math.random() * 10) + 1)
    if(monsterAttack > 7) {
        takeDamage(randomMonster)
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function dealDamage() {
    if(mpCount >= 5) {
        mpCount -= 5
        monsterHP -= Math.floor((Math.random() * 5) + 2 * wizardLevel) // firebolt damage
        monsterHealth.innerHTML = `${monsterHP}`
        if(monsterHP <= 0) { 
            monster.classList.add("monsterDies")
            await delay(1000)
            randomMonster =  Math.floor((Math.random() * 100) + 1)
            if(randomMonster < 41)
            {
                monsterHP = Math.floor((Math.random() * 10) + 5)
                monster.setAttribute("src", "assets/images/Monster2.png")
            }
            if(randomMonster < 100 && randomMonster > 40)
            {
                monsterHP = Math.floor((Math.random() * 20) + 15)
                monster.setAttribute("src", "assets/images/Monster.png")
            }
            if(randomMonster > 99)
            {
                monsterHP = Math.floor((Math.random() * 300) + 155)
                monster.setAttribute("src", "assets/images/Monster3.png")
            }
            monsterHealth.innerHTML = `${monsterHP}` 
            monster.classList.remove("monsterDies")
            levelUp()

        }
    }
    else {
        mpCount = 0;
    }
    mana.innerHTML = `${mpCount}`
}

function levelUp() {
    wizardLevel += 1;
    gameEvent.innerHTML = `You are a level ${wizardLevel} wizard` 
    if(wizardLevel == 5) {
        gameEvent.innerHTML =`You have become a midlevel wizard!`
        damageButtonMessage.innerHTML = `Cast a fireball`
    }
}

function reset() {
    hpCount = 100;
    health.innerHTML = `${hpCount}`
    mpCount = 30;
    mana.innerHTML = `${mpCount}`
    gameOver.style.display = "none"
    alive = true;
    mage.setAttribute("src", "assets/images/FireMage.png")
    gameEvent.innerHTML = "You are a level 1 wizard."
    monsterHP = 20;
    randomMonster = 0;
    wizardLevel = 1;
    randomMonster = 20;
    monsterHealth.innerHTML = `${monsterHP}`
    damageButtonMessage.innerHTML = `Cast a fire bolt`
    monster.setAttribute("src", "assets/images/Monster.png")

}

var takeDamageButton = document.querySelector("#takeDamage")

takeDamageButton.addEventListener("click", () => {
    if(alive){
        takeDamage(10);
    }
})

var gainManaButton = document.querySelector("#gainMana")
gainManaButton.addEventListener("click", () => {
    if(alive){
        gainMana();
    }
})

var dealDamageButton = document.querySelector("#dealDamage")

dealDamageButton.addEventListener("click", () => {
    if(alive){
        dealDamage();
    }
})

gameOver.addEventListener("click", () => {
    if(!alive){
        reset();
    }
})