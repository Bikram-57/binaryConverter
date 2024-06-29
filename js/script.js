function convertedResult() {
    // alert("hello")
    const numberInput = document.getElementById('getNumber');
    const numberValue = numberInput.value;
    const binaryValue = parseInt(numberValue, 10).toString(2);
    document.getElementById('result').value = binaryValue;
}

