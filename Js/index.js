// For Double
document.getElementById('double-button').addEventListener('click', function () {
    const inputNumber = document.getElementById('input-number');
    const numberElementString = inputNumber.value;
    const numberElement = parseFloat(numberElementString);

    if(isNaN(numberElement)){
        alert('Please enter a number');
        return;
    }

    const oldNumber = document.getElementById('old-input');
    oldNumber.innerText = numberElement;

    const showNumber = document.getElementById('show-number');
    const doubleNumber = numberElement * 2;
    showNumber.innerText = doubleNumber;

    inputNumber.value = '';
})

// For Triple
document.getElementById('triple-butoon').addEventListener('click', function () {
    const inputNumber = document.getElementById('input-number');
    const numberElementString = inputNumber.value;
    const numberElement = parseFloat(numberElementString);

    if(isNaN(numberElement)){
        alert('Please enter a number');
        return;
    }

    const oldNumber = document.getElementById('old-input');
    oldNumber.innerText = numberElement;

    const showNumber = document.getElementById('show-number');
    const tripleNumber = numberElement * 3;
    showNumber.innerText = tripleNumber;

    inputNumber.value = '';
})