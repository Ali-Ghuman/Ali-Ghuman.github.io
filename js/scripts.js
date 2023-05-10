
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
    document.getElementById("nutrition_comfort").submit();
}

function checkOnlyOne(val, name) {
    console.log(val)
    var x = document.querySelectorAll(`input[name=${name}]`); //document.getElementsByClassName('radio');
    var i;

    for (i = 0; i < x.length; i++) {
        if (x[i].value != val) x[i].checked = false;
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
    var selected = document.querySelectorAll('input[name="nutrition_wish_understand"]:checked');
    var answer = "";
    for (var i = 0; i < selected.length; i++) {
        answer += selected[i].value + " ";
    }
    document.getElementById("selected-answer").innerHTML = "Selected answer: " + answer;
}

function onSubmit(){
    //var nutrition_wish_understand = Number(document.querySelectorAll('input[name="nutrition_wish_understand"]:checked')[0].value);
    //var nutritious_meals_yes = Number(document.querySelectorAll('input[name="nutritious_meals_yes"]:checked')[0].value);
    
    //const sub_nutrition_comfort = Number(document.querySelectorAll('input[name="nutrition_comfort"]:checked')[0].value);
    //console.log(sub_nutrition_comfort)

    var sub_new_food = document.querySelectorAll('input[name="new_food"]:checked');
    console.log(sub_new_food);
    // const new_food = sub_new_food[0].value
    var sub_fruit_vege = document.querySelectorAll('input[name="fruit_vege"]:checked');
    console.log(sub_fruit_vege);
    console.log(new_food)
    /*
    let brighter_bites = 0, nutrition_course = 0, cooking_class = 0, shopping_tour = 0, texts = 0;
    brighter_bites = brighter_bites + nutritious_meals_yes
    nutrition_course = nutrition_course + nutrition_wish_understand + nutrition_comfort_little
    cooking_class = cooking_class + new_food
    shopping_tour = shopping_tour + new_food + fruit_vege

    console.log(`BB ${brighter_bites} |  NC ${nutrition_course} | CC ${cooking_class} | ST ${shopping_tour}`)
    */
    var answer = "";

    /*
    for (var i = 0; i < nutrition_comfort_little.length; i++) {
        answer += nutrition_comfort_little[i].value + " ";
    }

    document.getElementById("selected-answer").innerHTML = "Selected answer: " + answer;
    */
}