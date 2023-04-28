// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
    var rs = getComputedStyle(r);
    alert("The value of --color-text-primary is: " + rs.getPropertyValue('--color-text-primary'));
}

// Create a function for setting a variable value
function myFunction_dark() {
    r.style.setProperty('--color-text-primary', 'whitesmoke');
    r.style.setProperty('--color-text-secondary', 'rgb(27,27, 27)');
    r.style.setProperty('--color-background-primary', 'rgb(27,27, 27)');
    r.style.setProperty('--color-background-secondary', 'whitesmoke');
    r.style.setProperty('--color-shadow', 'rgb(0, 0, 0)');
}

function myFunction_light() {
    r.style.setProperty('--color-text-primary', 'rgb(27,27, 27)');
    r.style.setProperty('--color-text-secondary', 'whitesmoke');
    r.style.setProperty('--color-background-primary', 'whitesmoke');
    r.style.setProperty('--color-background-secondary', 'rgb(27,27, 27)');
    r.style.setProperty('--color-shadow', 'rgb(134, 134, 134)');
}