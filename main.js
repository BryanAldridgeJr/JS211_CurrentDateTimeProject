console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


const formCalculate = document.querySelector('#calculate');

formCalculate.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const result1 = document.querySelector('#result1');
  const firstNum = parseFloat(document.querySelector('#firstNum').value);
  const secNum = parseFloat(document.querySelector('#secNum').value);
  const operation = document.querySelector('#selector').value;

  let calculationResult;

  switch (operation) {
    case 'addition':
      calculationResult = firstNum + secNum;
      break;
    case 'multiplication':
      calculationResult = firstNum * secNum;
      break;
    case 'subtraction':
      calculationResult = firstNum - secNum;
      break;
    case 'division':
      calculationResult = firstNum / secNum;
      break;
    default:
      calculationResult = 'Invalid operation';
  }

  console.log(calculationResult)
  result1.textContent = 'Result: ' + calculationResult;
});


function isFalsy(value) {
  if (value === 'undefined') {
    return true;
  } else if (value === 'null') {
    return true;
  } else if (value === 'false') {
    return true;
  } else if (value === 'NaN') {
    return true;
  } else if (value === '0') {
    return true;
  } else if (value === '-0') {
    return true;
  } else if (value === '0n') {
    return true;
  } else if (value === '') {
    return true;
  } else if (value === "") {
    return true;
  } else {
    return false;
  }
}

const formCompare = document.querySelector('#compare');

formCompare.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const textInput1 = document.querySelector('#firText')
  const textInput2 = document.querySelector('#secText')
  const result2 = document.querySelector('#result2');
  const result3 = document.querySelector('#result3');

  //console.log(textInput2)
  //console.log(textInput1)
  
  
  if (!isFalsy(textInput1.value)) {
    result2.textContent = textInput1.value + ' is a truthy value';
  } else {  
    result2.textContent = textInput1.value + ' is a falsey value';
  }
  
  if (!isFalsy(textInput2.value)) {
    result3.textContent = `${textInput2.value} is a truthy value`;
  } else {  
    result3.textContent = `${textInput2.value} is a falsey value`;
  }

  console.log(result2)
  console.log(result3)
});

