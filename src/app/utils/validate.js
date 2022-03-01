const validate = (numberOne, numberTwo) =>{
    if((numberOne == false)  || (numberTwo == false) || (isNaN(numberOne)) || (isNaN(numberTwo))){
        return false;
    }
    return true;
}

export default validate;
