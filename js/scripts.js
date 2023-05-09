
window.addEventListener('DOMContentLoaded', event => {


    // var form1 = document.getElementById("labels-checkbox");

    // document.getElementById("next-btn-labels").addEventListener("click", function () {
    //     form1.submit();
    // });

    // var form2 = document.getElementById("newfood-mc");

    // document.getElementById("next-btn-newfoods").addEventListener("click", function () {
    //     form2.submit();
    // });

    // var form3 = document.getElementById("labels-checkbox2");

    // document.getElementById("next-btn-labels2").addEventListener("click", function () {
    //     form3.submit();
    // });
    
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

submitForm = function () {
    document.getElementById("labels-checkbox").submit();
    document.getElementById("newfood-mc").submit();
    document.getElementById("labels-checkbox2").submit();
    document.getElementById("zip-code").submit();
    document.getElementById("nutrition").submit();
}

function checkOnlyOne(b) {
    console.log(b)
    var x = document.getElementsByClassName('radio');
    var i;

    for (i = 0; i < x.length; i++) {
        if (x[i].value != b) x[i].checked = false;
    }
}


document.getElementById("zip-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default behavior of the button
    printZipCode(); // Calls the printZipCode function
  });
  

function printZipCode() {
    var zipCode = document.getElementById("zip-code-line").value; // Retrieves the value of the input field
    var zipElement = document.createElement("p"); // Creates a new <p> element
    zipElement.innerHTML = "You entered zip code " + zipCode; // Inserts the zip code into the <p> element
    document.getElementById("ch2-container").appendChild(zipElement); // Inserts the <p> element into the HTML code
  }

function showSelectedAnswer() {
    var selected = document.querySelectorAll('input[name="nutrition_comfort"]:checked');
    var answer = "";
    for (var i = 0; i < selected.length; i++) {
        answer += selected[i].value + " ";
    }
    document.getElementById("selected-answer").innerHTML = "Selected answer: " + answer;
}

