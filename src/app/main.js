import validate from "./utils/validate";
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');
const warning = document.getElementById('warning');

export const main = () =>{
    addButton.addEventListener('click', ()=>{
        const inputOneValue = parseInt(inputOne.value);
        const inputTwoValue = parseInt(inputTwo.value);
        if(validate(inputOneValue, inputTwoValue)){
            const addedNumber =  inputOneValue + inputTwoValue;
            result.innerHTML = addedNumber;
            warning.style.display = 'none';
        }else{
            warning.style.display = 'block';
        }
       
    })
}
