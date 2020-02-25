const calculatorscreen=document.querySelector('.calculator-screen');

const updatescreen=(number)=>{
    calculatorscreen.value=number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updatescreen(currentInput);  
    })
})
//console.log(numbers);
let prevInput='0';
let currentInput='0';
let calculationOperator='';

const inputNumber=(number)=>{
    if(currentInput==='0'){
        currentInput=number;
    }else{
    currentInput+=number;
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputoperator(event.target.value);
    }) 
}) 

const inputoperator=(operator)=>{
    prevInput=currentInput;
    calculationOperator=operator;
    currentInput='0';
}

const equalsign=document.querySelector('.equal-sign');

equalsign.addEventListener('click',()=>{
    console.log('operator is pressed');
    calculate();
    updatescreen(currentInput);
})

const calculate=()=>{
    let result=0;
    switch(calculationOperator){
        case '+':
            result=parseInt(prevInput)+parseInt(currentInput);
            break;
        case '-':
            result=parseInt(prevInput)-parseInt(currentInput);
            break;
        case '*':
            result=parseInt(prevInput)*parseInt(currentInput);
            break;
        case '/':
            result=parseInt(prevInput)/parseInt(currentInput);
            break;    
        default:
            return;
    }
    currentInput=result.toString();
    calculationOperator='';
}

const clearBtn=document.querySelector('.all-clear');

clearBtn.addEventListener('click',()=>{
    //console.log('ac is pressed');
    clearAll();
    updatescreen(currentInput);
})

const clearAll=()=>{
    prevInput='0';
    currentInput='0';
    calculationOperator='';
}