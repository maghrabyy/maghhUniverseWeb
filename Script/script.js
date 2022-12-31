let herosData = [];
let villainsData = [];
let civilsData = [];

let herosIndex = 0;
let villainsIndex = 0;
let civilsIndex = 0;

const imgSrc = "/assets/images/";
const defaultMaleHeroImg = "defaultMaleHero";
const defaultFemaleHeroImg = "defaultFemaleHero";
const defaultMaleVillainImg = "defaultMaleVillain";
const defaultFemaleVillainImg = "defaultFemaleVillain";


const defaultVillainTarget = "hero";

const HERO_TYPE = "Hero";
const VILLAIN_TYPE = "Villain";
const CIVIL_TYPE = "Civil";

const ALERT_INFO = "Info";
const ALERT_WARNING = "Warning";


const humanHealth = 100;
//Heros List

const spidermanObj = {
    heroName: "Spiderman",
    heroAge: 24,
    heroSex: "Male",
    heroPower: "Spider/Web",
    heroImg: `${imgSrc}spiderman.png`,
    heroHealth: humanHealth,
    heroProtecting: []
}

const batmanObj = {
    heroName: "Batman",
    heroAge: 34,
    heroSex: "Male",
    heroPower: "Fighting Skills",
    heroImg: `${imgSrc}batman.png`,
    heroHealth: humanHealth,
    heroProtecting: []
}

// Villains List

const venomObj = {
    villainName: "Venom",
    villainAge: 32,
    villainSex: "Male",
    villainPower: "Symbiote",
    villainImg: `${imgSrc}venom.png`,
    villainHealth: humanHealth,
    villainTarget: defaultVillainTarget
}

const jokerObj = {
    villainName: "Joker",
    villainAge: 43,
    villainSex: "Male",
    villainPower: "Crime Master",
    villainImg: `${imgSrc}joker.png`,
    villainHealth: humanHealth,
    villainTarget: defaultVillainTarget
}

// Civils List

const jaredObj = {
    civilName: "Jared",
    civilAge: 27,
    civilSex: "Male",
    civilHealth: humanHealth,
    civilProtector: ''
}

const steveObj = {
    civilName: "Steve",
    civilAge: 35,
    civilSex: "Male",
    civilHealth: humanHealth,
    civilProtector: ''
}

const sophiaObj = {
    civilName: "Sophia",
    civilAge: 23,
    civilSex: "Female",
    civilHealth: humanHealth,
    civilProtector: ''
}

herosData.push(spidermanObj);
herosData.push(batmanObj);
villainsData.push(venomObj);
villainsData.push(jokerObj);
civilsData.push(jaredObj);
civilsData.push(steveObj);
civilsData.push(sophiaObj);

const createHuman = function (humanType, humanImg, humanName, humanAge, humanGender, humanPower) {
    let superHumanObj = {};
    let civilObj = {};
    if (humanType === HERO_TYPE) {
        superHumanObj = {
            heroName: humanName,
            heroAge: humanAge,
            heroSex: humanGender,
            heroPower: humanPower,
            heroImg: `${imgSrc}${humanImg ? humanImg : humanGender === "Male" ? defaultMaleHeroImg : defaultFemaleHeroImg}.png`,
            heroHealth: humanHealth,
            heroProtecting: []
        }
        herosData.push(superHumanObj);
    }
    else if (humanType === VILLAIN_TYPE) {
        superHumanObj = {
            villainName: humanName,
            villainAge: humanAge,
            villainSex: humanGender,
            villainPower: humanPower,
            villainImg: `${imgSrc}${humanImg ? humanImg : humanGender === "Male" ? defaultMaleVillainImg : defaultFemaleVillainImg}.png`,
            villainHealth: humanHealth,
            villainTarget: defaultVillainTarget
        }
        villainsData.push(superHumanObj);
    }
    else if (humanType === CIVIL_TYPE) {
        civilObj = {
            civilName: humanName,
            civilAge: humanAge,
            civilSex: humanGender,
            civilHealth: humanHealth,
            civilProtector: ''
        }
        civilsData.push(civilObj);
    } else {
        throw "Invalid human type.";
    }
}


for (const key in venomObj) {
    console.log(`${key}: ${venomObj[key]}`)
    console.log('-----------------------')
}

//Buttons
const heroNextBtn = document.getElementById("hero-next-btn");
const heroPrevBtn = document.getElementById("hero-prev-btn");
const villainNextBtn = document.getElementById("villain-next-btn");
const villainPrevBtn = document.getElementById("villain-prev-btn");
const civilNextBtn = document.getElementById("civil-next-btn");
const civilPrevBtn = document.getElementById("civil-prev-btn");
const civilNextBtnLg = document.getElementById("civil-next-btn-lg");
const civilPrevBtnLg = document.getElementById("civil-prev-btn-lg");
const heroAttackBtn = document.getElementById("hero-attack-btn");
const heroHealBtn = document.getElementById("hero-heal-btn");
const heroProtectBtn = document.getElementById("hero-protect-btn");
const villainAttackBtn = document.getElementById("villain-attack-btn");
const villainChangeTargetBtn = document.getElementById("villain-changeTarget-btn");

const isTargetingHero = () => {
    if (villainsData[villainsIndex].villainTarget === defaultVillainTarget)
        return true;
    else return false;
}

const updateHeroUI = function (index) {
    const herosList = herosData[index];
    document.getElementById("hero-name").textContent = herosList.heroName;
    document.getElementById("hero-age").textContent = herosList.heroAge;
    document.getElementById("hero-sex").textContent = herosList.heroSex;
    document.getElementById("hero-power").textContent = herosList.heroPower;
    document.getElementById("hero-img").src = herosList.heroImg;
    document.getElementById("hero-health").style.width = `${herosList.heroHealth}%`;
    if (isTargetingHero()) {
        document.getElementById("villain-target").textContent = herosList.heroName;
    }
}

updateHeroUI(herosIndex);

const updateVillainUI = function (index) {
    const villainsList = villainsData[index];
    document.getElementById("villain-name").textContent = villainsList.villainName;
    document.getElementById("villain-age").textContent = villainsList.villainAge;
    document.getElementById("villain-sex").textContent = villainsList.villainSex;
    document.getElementById("villain-power").textContent = villainsList.villainPower;
    document.getElementById("villain-img").src = villainsList.villainImg;
    document.getElementById("villain-health").style.width = `${villainsList.villainHealth}%`;
    if (isTargetingHero()) {
        document.getElementById("villain-target").textContent = herosData[herosIndex].heroName;
    } else {
        document.getElementById("villain-target").textContent = civilsData[civilsIndex].civilName;
    }
}

updateVillainUI(villainsIndex);

const updateCivilUI = function (index) {
    const civilsList = civilsData[index];
    document.getElementById("civil-name").textContent = civilsList.civilName;
    document.getElementById("civil-age").textContent = civilsList.civilAge;
    document.getElementById("civil-sex").textContent = civilsList.civilSex;
    document.getElementById("civil-health").style.width = `${civilsList.civilHealth}%`;
    if (!isTargetingHero()) {
        document.getElementById("villain-target").textContent = civilsList.civilName;
    }
    if (civilsList.civilProtector) {
        document.getElementById("civil-protector").classList.replace("d-none", "d-block");
        document.getElementById("civil-protector-name").textContent = civilsList.civilProtector;
        document.getElementById("civil-progress-bar").classList.add("d-none");
    } else {
        document.getElementById("civil-protector").classList.replace("d-block", "d-none");
        document.getElementById("civil-protector-name").textContent = "none";
        document.getElementById("civil-progress-bar").classList.remove("d-none");
    }
}

updateCivilUI(civilsIndex);

const domHeroName = document.getElementById('hero-name');
const domVillainName = document.getElementById('villain-name');
const domCivilName = document.getElementById('civil-name');
domHeroName.style.fontWeight = 'bold';
domVillainName.style.fontWeight = 'bold';
domCivilName.style.fontWeight = 'bold';

console.log(`herosIndex = ${herosIndex}`);
console.log(`villainsIndex = ${villainsIndex}`);
console.log(`civilsIndex = ${civilsIndex}`);
console.log(`Villain targeting: ${villainsData[villainsIndex].villainTarget}`);

const navButton = function (btnID) {
    let buttonData = {};
    if (btnID === 'hero-prev-btn' || btnID === 'hero-next-btn') {
        buttonData.humanIndex = herosIndex;
        buttonData.humanData = herosData;
        buttonData.humanIndexString = 'herosIndex';
    }
    else if (btnID === 'villain-prev-btn' || btnID === 'villain-next-btn') {
        buttonData.humanIndex = villainsIndex;
        buttonData.humanData = villainsData;
        buttonData.humanIndexString = 'villainsIndex';
    }
    else if (btnID === 'civil-prev-btn' || btnID === 'civil-next-btn' || btnID === 'civil-prev-btn-lg' || btnID === 'civil-next-btn-lg') {
        buttonData.humanIndex = civilsIndex;
        buttonData.humanData = civilsData;
        buttonData.humanIndexString = 'civilsIndex';
    }
    return buttonData;
}

const updateHumanIndex = function (btnID, indx) {
    if (btnID === 'hero-prev-btn' || btnID === 'hero-next-btn') {
        herosIndex = indx;
        updateHeroUI(indx)
    }
    else if (btnID === 'villain-prev-btn' || btnID === 'villain-next-btn') {
        villainsIndex = indx;
        updateVillainUI(indx);
    }
    else if (btnID === 'civil-prev-btn' || btnID === 'civil-next-btn' || btnID === 'civil-prev-btn-lg' || btnID === 'civil-next-btn-lg') {
        civilsIndex = indx;
        updateCivilUI(indx);
    }
}

const prevButton = function (btnID) {
    const navButtonData = navButton(btnID);
    if (navButtonData.humanIndex > 0) {
        navButtonData.humanIndex--;
    }
    else {
        navButtonData.humanIndex = navButtonData.humanData.length - 1;
    }

    console.log(`${navButtonData.humanIndexString} = ${navButtonData.humanIndex}`);
    updateHumanIndex(btnID, navButtonData.humanIndex);
}

const nextButton = function (btnID) {
    const navButtonData = navButton(btnID);
    if (navButtonData.humanIndex < navButtonData.humanData.length - 1) {
        navButtonData.humanIndex++;
    }
    else {
        navButtonData.humanIndex = 0;
    }

    console.log(`${navButtonData.humanIndexString} = ${navButtonData.humanIndex}`);
    updateHumanIndex(btnID, navButtonData.humanIndex);
}

heroPrevBtn.addEventListener("click", () => {
    prevButton("hero-prev-btn");
});

heroNextBtn.addEventListener("click", () => {
    nextButton("hero-next-btn");
});


villainPrevBtn.addEventListener("click", () => {
    prevButton("villain-prev-btn");
});

villainNextBtn.addEventListener("click", () => {
    nextButton("villain-next-btn");
});


civilPrevBtn.addEventListener("click", () => {
    prevButton("civil-prev-btn");
});

civilNextBtn.addEventListener("click", () => {
    nextButton("civil-next-btn");
});

civilPrevBtnLg.addEventListener("click", () => {
    prevButton("civil-prev-btn-lg");
});

civilNextBtnLg.addEventListener("click", () => {
    nextButton("civil-next-btn-lg");
});

const getAttackData = function (btnID) {
    let attackData = {};
    if (btnID === "hero-attack-btn") {
        attackData.attackerHealth = herosData[herosIndex].heroHealth;
        attackData.targetHealth = villainsData[villainsIndex].villainHealth;
        attackData.targetName = villainsData[villainsIndex].villainName;
        attackData.maxDamage = 15;
    }
    else if (btnID === "villain-attack-btn") {
        attackData.attackerHealth = villainsData[villainsIndex].villainHealth;
        attackData.maxDamage = 20;
        if (villainsData[villainsIndex].villainTarget === defaultVillainTarget) {
            attackData.targetHealth = herosData[herosIndex].heroHealth;
            attackData.targetName = herosData[herosIndex].heroName;
        }
        else {
            attackData.targetHealth = civilsData[civilsIndex].civilHealth;
            attackData.targetName = civilsData[civilsIndex].civilName;
            attackData.targetProtector = civilsData[civilsIndex].civilProtector;
        }
    }
    return attackData;
}

const removeHeroProtection = function () {
    if (herosData[herosIndex].heroHealth === 0) {
        if (herosData[herosIndex].heroProtecting.length > 0) {
            for (const [objectIndx, objectElem] of civilsData.entries()) {
                if (objectElem.civilProtector === herosData[herosIndex].heroName) {
                    civilsData[objectIndx].civilProtector = '';
                    civilsIndex = objectIndx;
                    updateCivilUI(objectIndx);
                }
            }
            herosData[herosIndex].heroProtecting.splice(0);
            displayAlert(`${herosData[herosIndex].heroName} is dead and no longer protecting.`, ALERT_INFO);
        }
    }
}

const updateTargetHealth = function (btnID, targetDamage, targetHealth, targetName) {
    if (btnID === "hero-attack-btn") {
        villainsData[villainsIndex].villainHealth = targetHealth;
        updateVillainUI(villainsIndex);
    }
    else if (btnID === "villain-attack-btn") {
        if (villainsData[villainsIndex].villainTarget === defaultVillainTarget) {
            herosData[herosIndex].heroHealth = targetHealth;
            updateHeroUI(herosIndex);
            removeHeroProtection();
        }
        else {
            civilsData[civilsIndex].civilHealth = targetHealth;
            updateCivilUI(civilsIndex);

        }
    }
    console.log("attack damage = " + targetDamage);
    console.log(`${targetName}'s health =   ${targetHealth}`);
    console.log("--------------------------");
}

const attackHuman = function (btnID) {
    const attackData = getAttackData(btnID);
    const randNum = Math.random() * attackData.maxDamage + 1;
    const randDamage = Math.floor(randNum);
    if (attackData.attackerHealth > 0) {
        if (attackData.targetHealth > 0) {
            if (!attackData.targetProtector) {
                if (attackData.targetHealth > 0 && randDamage <= attackData.targetHealth) {
                    attackData.targetHealth -= randDamage;
                }
                else {
                    attackData.targetHealth = 0;
                }
                if (attackData.targetHealth === 0) {
                    displayAlert(`You've killed ${attackData.targetName}.`, ALERT_INFO)
                }
                updateTargetHealth(btnID, randDamage, attackData.targetHealth, attackData.targetName);
            } else {
                displayAlert(`You can't attack ${attackData.targetName}, already protected by ${attackData.targetProtector}`, ALERT_WARNING);
            }
        }
        else {
            displayAlert(`${attackData.targetName} is dead already.`, ALERT_WARNING)
        }
    }
    else {
        displayAlert("You're already dead, you can't attack.", ALERT_WARNING);
    }
}

heroAttackBtn.addEventListener("click", () => {
    attackHuman("hero-attack-btn");
});

villainAttackBtn.addEventListener("click", () => {
    attackHuman("villain-attack-btn");
});

villainChangeTargetBtn.addEventListener("click", () => {
    if (villainsData[villainsIndex].villainHealth > 0) {
        if (isTargetingHero()) {
            villainsData[villainsIndex].villainTarget = "civil";
            updateCivilUI(civilsIndex);
            console.log(`Villain targeting: ${villainsData[villainsIndex].villainTarget}`);
        }
        else {
            villainsData[villainsIndex].villainTarget = defaultVillainTarget;
            updateHeroUI(herosIndex);
            console.log(`Villain targeting: ${villainsData[villainsIndex].villainTarget}`);
        }
    }
    else {
        displayAlert("You're already dead, you can't change target.", ALERT_WARNING);
    }
});

const healCivil = function () {
    const randNum = Math.random() * 10 + 1;
    const randHeal = Math.floor(randNum);
    const herosList = herosData[herosIndex];
    const civilsList = civilsData[civilsIndex];
    if (herosList.heroHealth > 0) {
        if (civilsList.civilHealth > 0) {
            if (civilsList.civilHealth < 100) {
                if (civilsList.civilHealth < 100 && randHeal <= (100 - civilsList.civilHealth)) {
                    civilsList.civilHealth += randHeal;
                }
                else {
                    civilsList.civilHealth = 100;
                }
                updateCivilUI(civilsIndex);
                console.log("heal value = " + randHeal);
                console.log(`${civilsList.civilName}'s health =  ${civilsList.civilHealth}`);
                console.log("--------------------------");
            }
            else {
                displayAlert(`${civilsList.civilName} is fully healed already.`, ALERT_WARNING);
            }
        }
        else {
            displayAlert(`${civilsList.civilName} is dead already, you can't heal ${civilsData[civilsIndex].civilSex === "Male" ? "him" : "her"}.`, ALERT_WARNING);
        }
    }
    else {
        displayAlert("You're already dead, you can't heal.", ALERT_WARNING);
    }
}

heroHealBtn.addEventListener("click", () => {
    healCivil();
});

const protectCivil = function () {
    if (herosData[herosIndex].heroHealth > 0) {
        if (civilsData[civilsIndex].civilHealth > 0) {
            if (!civilsData[civilsIndex].civilProtector) {
                civilsData[civilsIndex].civilProtector = herosData[herosIndex].heroName;
                updateCivilUI(civilsIndex);
                displayAlert(`${civilsData[civilsIndex].civilName} is now protected by ${civilsData[civilsIndex].civilProtector}`, ALERT_INFO);
                herosData[herosIndex].heroProtecting.push(civilsData[civilsIndex].civilName);
                console.log(`--- ${herosData[herosIndex].heroName}'s protection ---`);
                for (const elem of herosData[herosIndex].heroProtecting) {
                    console.log(`${herosData[herosIndex].heroName} is protecting ${elem}`);
                }
                console.log('------------------------');
            }
            else {
                if (civilsData[civilsIndex].civilProtector === herosData[herosIndex].heroName) {
                    displayAlert(`${civilsData[civilsIndex].civilName} is no longer protected by ${civilsData[civilsIndex].civilProtector}`, ALERT_INFO);
                    civilsData[civilsIndex].civilProtector = '';
                    updateCivilUI(civilsIndex);
                    const civilIndex = herosData[herosIndex].heroProtecting.indexOf(civilsData[civilsIndex].civilName);
                    herosData[herosIndex].heroProtecting.splice(civilIndex, 1);
                    if (herosData[herosIndex].heroProtecting.length > 0) {
                        console.log(`--- ${herosData[herosIndex].heroName}'s protection ---`);
                        for (const elem of herosData[herosIndex].heroProtecting) {
                            console.log(`${herosData[herosIndex].heroName} is protecting ${elem}`);
                        }
                        console.log('------------------------');
                    }
                    else {
                        displayAlert(`${herosData[herosIndex].heroName} isn't protecting anyone.`, ALERT_INFO)
                    }
                }
                else {
                    displayAlert(`${civilsData[civilsIndex].civilName} is already protected by ${civilsData[civilsIndex].civilProtector}`, ALERT_WARNING);
                }
            }
        }
        else {
            displayAlert(`${civilsData[civilsIndex].civilName} is dead already, you can't protect ${civilsData[civilsIndex].civilSex === "Male" ? "him" : "her"}.`, ALERT_WARNING);
        }
    }
    else {
        displayAlert("You're already dead, you can't protect.", ALERT_WARNING);
    }
}

heroProtectBtn.addEventListener("click", () => {
    protectCivil();
});

const displayAlert = function (alertMsg, type) {
    if (type === ALERT_WARNING) {
        document.getElementById("alert-warning").classList.add("alert-warning");
        document.getElementById("alert-warning").classList.replace("alert-info", "alert-warning");
        document.getElementById("alert-type").firstChild.textContent = "Warning:";
    } else if (type === ALERT_INFO) {
        document.getElementById("alert-warning").classList.add("alert-info");
        document.getElementById("alert-warning").classList.replace("alert-warning", "alert-info");
        document.getElementById("alert-type").firstChild.textContent = "Info:";
    }
    document.getElementById("alert-msg").textContent = alertMsg;
    document.getElementById("alert-warning").classList.replace("d-none", "d-flex");
    setTimeout(existAlert, 5000);
}

const existAlert = function () {
    document.getElementById("alert-msg").textContent = '';
    document.getElementById("alert-warning").classList.replace("d-flex", "d-none");
}

document.getElementById("alert-exit-btn").addEventListener("click", () => {
    existAlert();
});

const charTypeRadio = document.getElementsByName('charTypeSelection');
const genderTypeRadio = document.getElementsByName('genderSelection');
const formTextFields = document.querySelectorAll(".addCharForm");

const determineGenderSelection = function () {
    if (genderTypeRadio[0].checked)
        return genderTypeRadio[0].value;
    else if (genderTypeRadio[1].checked)
        return genderTypeRadio[1].value;
    else {
        throw "You've to select a gender.";
    }
}

const validateAge = function () {
    const inputtedHumanAge = parseInt(document.getElementById("humanAgeInput").value);
    if (inputtedHumanAge) {
        if (!isNaN(inputtedHumanAge) && inputtedHumanAge > 0) {
            return inputtedHumanAge;
        } else {
            throw "You've inputted an invalid age.";
        }
    } else {
        throw "You've to input an age.";
    }

}

const onDisplayCharDialogPressed = function () {
    document.getElementById("char-form").classList.replace("d-none", "d-block");
    document.getElementById("superHumanPower").classList.replace("d-none", "d-block");
    document.getElementById("overlay").classList.replace("d-none", "d-block");
    document.body.style.overflow = 'hidden';
}

document.getElementById("display-char-btn").addEventListener("click", () => {
    onDisplayCharDialogPressed();
});

const errorMessage = document.getElementById("Error-Msg");
let imgValue;

const onExitDialogPressed = function () {
    document.getElementById("char-form").classList.replace("d-block", "d-none");
    document.getElementById("overlay").classList.replace("d-block", "d-none");
    errorMessage.classList.replace("d-block", "d-none");
    imgValue = null;
    document.getElementById("imgSelectorButton").textContent = imgValue ? imgValue : "Select an image.";
    document.body.style.overflow = 'auto';
    for (const el of charTypeRadio) {
        if (el.checked) {
            el.checked = false;
        }
    }
    for (const el of genderTypeRadio) {
        if (el.checked) {
            el.checked = false;
        }
    }
    for (const el of formTextFields) {
        el.value = "";
    }
}

document.getElementById("exit-char-btn").addEventListener("click", () => {
    onExitDialogPressed();
});


document.querySelectorAll(".dropdown-item").forEach((elem) => {
    elem.addEventListener("click", () => {
        imgValue = elem.firstElementChild.getAttribute("imgValue");
        document.getElementById("imgSelectorButton").textContent = imgValue ? imgValue : "Select an image.";
    });
});


const onAddCharPressed = function () {
    const inputtedHumanName = document.getElementById("humanNameInput").value;
    const inputtedHumanPower = document.getElementById("humanPowerInput").value;
    if (charTypeRadio[2].checked ? inputtedHumanName : inputtedHumanName && inputtedHumanPower) {
        if (charTypeRadio[0].checked) {
            createHuman(HERO_TYPE, imgValue, inputtedHumanName, validateAge(), determineGenderSelection(), inputtedHumanPower);
            onExitDialogPressed();
            displayAlert("Character created.", ALERT_INFO);
            herosIndex = herosData.length - 1;
            updateHeroUI(herosIndex);
        }
        else if (charTypeRadio[1].checked) {
            createHuman(VILLAIN_TYPE, imgValue, inputtedHumanName, validateAge(), determineGenderSelection(), inputtedHumanPower);
            onExitDialogPressed();
            displayAlert("Character created.", ALERT_INFO);
            villainsIndex = villainsData.length - 1;
            updateVillainUI(villainsIndex);
        }
        else if (charTypeRadio[2].checked) {
            createHuman(CIVIL_TYPE, inputtedHumanName, validateAge(), determineGenderSelection(), inputtedHumanPower);
            onExitDialogPressed();
            displayAlert("Character created.", ALERT_INFO);
            civilsIndex = civilsData.length - 1;
            updateCivilUI(civilsIndex);
        }
        else {
            throw "You've to select character type.";
        }
    }
    else {
        throw "Complete the following fields.";
    }

}

document.getElementById("add-char-btn").addEventListener("click", () => {
    try {
        onAddCharPressed();
    } catch (error) {
        errorMessage.textContent = error;
        errorMessage.classList.replace("d-none", "d-block");
    }
});

charTypeRadio.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (charTypeRadio[2].checked) {
            document.getElementById("superHumanPower").classList.replace("d-block", "d-none");
            document.getElementById("superHumanImgs").classList.replace("d-block", "d-none");
            document.getElementById("humanPowerInput").value = "";
        } else {
            document.getElementById("superHumanPower").classList.replace("d-none", "d-block");
            document.getElementById("superHumanImgs").classList.replace("d-none", "d-block");
        }
    });
});

const onUserReset = function () {
    for (const [objectIndx, objectElem] of herosData.entries()) {
        objectElem.heroHealth = humanHealth;
        objectElem.heroProtecting = [];
    }
    for (const [objectIndx, objectElem] of villainsData.entries()) {
        objectElem.villainHealth = humanHealth;
        objectElem.villainTarget = defaultVillainTarget;
    }
    for (const [objectIndx, objectElem] of civilsData.entries()) {
        objectElem.civilHealth = humanHealth;
        objectElem.civilProtector = '';
    }
    herosIndex = 0;
    civilsIndex = 0;
    villainsIndex = 0;
    updateHeroUI(herosIndex);
    updateVillainUI(villainsIndex);
    updateCivilUI(civilsIndex);
}

document.getElementById("reset-btn").addEventListener("click", () => {
    onUserReset();
});

const createParagraph = function (pText) {
    const p = document.createElement("p");
    p.textContent = pText;
    return p;
}

const createAdvElement = function (elemTag, elemContent, ...elemClass) {
    const elem = document.createElement(elemTag);
    elem.textContent = elemContent;
    elem.classList.add(elemClass)
    return elem;
}

document.getElementById("contact-btn").addEventListener("click", () => {
    document.querySelector(".dialogWindow").classList.replace("d-none", "d-block");
    document.getElementById("overlay").classList.replace("d-none", "d-block");
    document.getElementById("dialogText-title").textContent = 'Contact';
    const emailSection = document.createElement("div");
    emailSection.classList.add("d-flex", "gap-2", "align-items-center");
    emailSection.innerHTML = '<i class="fa-solid fa-envelope"></i> <p class="mt-3">Mahmoud.elmaghraby11@gmail.com</p>';
    const gitHubSection = document.createElement("div");
    gitHubSection.classList.add("d-flex", "gap-2", "align-items-center");
    gitHubSection.innerHTML = '<i class="fa-brands fa-github"></i> <p class="mt-3">maghrabyy</p>';
    const twitterSection = document.createElement("div");
    twitterSection.classList.add("d-flex", "gap-2", "align-items-center");
    twitterSection.innerHTML = '<i class="fa-brands fa-twitter"></i> <p class="mt-3">mahmoghraby</p>';
    document.querySelector(".dialog-body").appendChild(emailSection);
    document.querySelector(".dialog-body").appendChild(gitHubSection);
    document.querySelector(".dialog-body").appendChild(twitterSection);
    // document.querySelector(".dialog-body").appendChild(createParagraph("01282807419"));
});

document.getElementById("about-btn").addEventListener("click", () => {
    document.querySelector(".dialogWindow").classList.replace("d-none", "d-block");
    document.getElementById("overlay").classList.replace("d-none", "d-block");
    document.getElementById("dialogText-title").textContent = 'About';
    const aboutBody = document.createElement("p")
    aboutBody.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quos, assumenda ad delectus consequatur dolor perferendis vel cum vero itaque voluptate perspiciatis nam! Laborum excepturi ipsa ratione quisquam inventore! Dolorem?';
    document.querySelector(".dialog-body").appendChild(aboutBody);
});


document.getElementById('dialog-exit-btn').addEventListener("click", () => {
    document.querySelector(".dialogWindow").classList.replace("d-block", "d-none");
    document.getElementById("overlay").classList.replace("d-block", "d-none");
    document.querySelector(".dialog-body").innerHTML = '';
});