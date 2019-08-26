if (window.addEventListener) {
    console.log("-- ----- >> ENTER loadEventListener() TC39");    
    window.addEventListener("load", displayCurrentYear, false);
    console.log("-- ----- << LEAVE loadEventListener() TC39");    
} else if (window.attachEvent) {
    console.log("-- ----- >> ENTER loadEventListener() MS");
    window.addEventListener("onload", displayCurrentYear);
}

function displayCurrentYear() {
        console.log("-- ----- >> ENTER displayCurrentYear() in <footer>");
        var currentYear = new Date().getFullYear();
        var dateContainer = document.getElementById("copyright");
        dateContainer.innerHTML = currentYear;
        console.log("-- ----- << LEAVE displayCurrentYear() in <footer>");
 }
