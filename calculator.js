const clearScreen = () => {
    document.getElementById('result').value = "";
}

const display = (value) => {
    document.getElementById('result').value += value;
}

const calculation = () => {
    var p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q;
}