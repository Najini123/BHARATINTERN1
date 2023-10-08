 celsius = document.getElementById('celsius');
 fahrenhit = document.getElementById('fahrenhit');

 celsius.oninput = () => {
    output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenhit.value=parseFloat(output.toFixed(2));
};

fahrenhit.oninput = () => {
    output = (parseFloat(fahrenhit.value) - 32) * 5 / 9;
    celsius.value=parseFloat(output.toFixed(2));
};