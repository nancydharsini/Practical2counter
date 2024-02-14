let counter = 9999;

const DISPLAY = document.getElementById('display');
const ALERT_EL = document.getElementById('alert');
const ERROR_MSG_OUT_OF_MEMORY = 'Out of Memory';
const ERROR_MSG_INVALID_RANGE = 'Zero is the lower limit';
//console.log(DISPLAY);
// 
function updateDisplay(){
    const spanElements = DISPLAY.children;
    let numberToString = counter.toString().padStart(4,0);
    for(let i = 0; i < numberToString.length; i++) {
        spanElements.item(i).innerText = numberToString[i];
    }
}

function increment(){
    const boxCount = DISPLAY.children.length;
    counter++;
    if(counter.toString().length === 5 && boxCount === 4) {
        addBox();
    } else if(counter.toString().length === 6 && boxCount === 5) {
        addBox();
    }else if(counter.toString().length > 6) {
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY;
        return;
    }
    ALERT_EL.innerText = '';
    /* if(counter >= 9999) {
        addBox();
    }; */
    updateDisplay();
}

// function manageBox() {
//     const boxCount = DISPLAY.children.length;
//     const counterLen = counter.toString().length;
//     const remainingBox = counterLen - boxCount;
//     if(remainingBox ) {

//     }
// }

function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}

function decrement(){
    if(counter === 0) {
        ALERT_EL.innerText = ERROR_MSG_INVALID_RANGE;
        return
    };
    counter--;
    updateDisplay();
}

function reset(){
    counter =0;
    updateDisplay();
}

function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if(remainingSpace > 0) {
        let newString = originalString;
        for(let i=0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}

updateDisplay();