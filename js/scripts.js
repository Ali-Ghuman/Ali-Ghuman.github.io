
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

// define an async function to read the CSV file
/*
async function readCSV(url) {
    const response = await fetch(url);
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    const result = rows.map(row => {
      const columns = row.split(",");
      return {
        id: columns[0],
        borough: columns[1],
        name: columns[2]
      };
    });
    return result;
  }
  
  // define the URL of the CSV file
  const csvUrl = "data/2022-chp-pud.csv";
  
  // get the select element from the HTML
  const dropdown = document.getElementById("names-dropdown");
  
  // call the readCSV function and generate the dropdown options
  readCSV(csvUrl).then(data => {
    // create an object to store options for each borough
    const optionsByBorough = {};
  
    // loop through the data and add each name to its corresponding borough
    data.forEach(row => {
      if (!optionsByBorough[row.borough]) {
        optionsByBorough[row.borough] = [];
      }
      optionsByBorough[row.borough].push(row.name);
    });
  
    // generate the dropdown options for each borough
    Object.keys(optionsByBorough).forEach(borough => {
      const optionGroup = document.createElement("optgroup");
      optionGroup.label = borough;
  
      optionsByBorough[borough].forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.text = borough + " " + name;
        optionGroup.appendChild(option);
      });
  
      dropdown.appendChild(optionGroup);
    });
  });
*/


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
    const neighborhoodSelect = document.querySelector('#neighborhood-select');
    var selectedNeighborhood = neighborhoodSelect.value;
    console.log(selectedNeighborhood)

    // Neighborhod image;
    let neighborhoodImage = document.getElementById("neighborhood-result")
    neighborhoodImage.src = `assets/neigborhood-plots/${selectedNeighborhood}.png`

    var nutrition_wish_understand = Number(document.querySelectorAll('input[name="nutrition_wish_understand"]:checked')[0].value);
    var nutritious_meals = Number(document.querySelectorAll('input[name="nutritious_meals"]:checked')[0].value);
    var nutrition_comfort = Number(document.querySelectorAll('input[name="nutrition_comfort"]:checked')[0].value);
    var new_food = Number(document.querySelectorAll('input[name="new_food"]:checked')[0].value);
    var fruit_vege = Number(document.querySelectorAll('input[name="fruit_vege"]:checked')[0].value);

    console.log(nutrition_wish_understand, nutritious_meals, nutrition_comfort, new_food, fruit_vege)

    let brighter_bites = 0, nutrition_course = 0, cooking_class = 0, shopping_tour = 0, texts = 0;
    brighter_bites = brighter_bites + nutritious_meals
    nutrition_course = nutrition_course + nutrition_wish_understand + nutrition_comfort
    cooking_class = cooking_class + new_food
    shopping_tour = shopping_tour + new_food + fruit_vege

    console.log(`BB ${brighter_bites} |  NC ${nutrition_course} | CC ${cooking_class} | ST ${shopping_tour}`)
    // console.log(`BB ${eval("brighter_bites")} |  NC ${window["nutrition_course"]} | CC ${window["cooking_class"]} | ST ${window["shopping_tour"]}`)

    // Check which variable has the largest value
    let largest = "brighter_bites";
    if (nutrition_course > brighter_bites) {
    largest = "nutrition_course";
    }
    if (cooking_class > eval(largest)) {
    largest = "cooking_class";
    }
    if (shopping_tour > eval(largest)) {
    largest = "shopping_tour";
    }
    if (texts > eval(largest)) {
    largest = "texts";
    }

    console.log("The variable with the largest value is:", largest);



    // Display the correct images

    // Get the image element
    let imgElement = document.getElementById("survey-result");
    // Use a switch statement to display different images based on the variable value
    switch (largest) {
        case "brighter_bites":
            imgElement.src = "../assets/ch1.png";
            break;
        case "nutrition_course":
            imgElement.src = "../assets/ch2.png";
            break;
        case "cooking_class":
            imgElement.src = "../assets/ch3.png";
            break;
        case "shopping_tour":
            imgElement.src = "../assets/ch4.png";
            break;
        case "texts":
            imgElement.src = "../assets/ch5.png";
            break; 

        default:
            imgElement.src = "../assets/ch9.png";
  }
  
}

function generate_checklist(){

    const options = ["Manhattan:	Greenwich Village and Soho","Manhattan:	Lower East Side and Chinatown","Manhattan:	Clinton and Chelsea","Manhattan:	Midtown","Manhattan:	Stuyvesant Town and Turtle Bay","Manhattan:	Upper West Side","Manhattan:	Upper East Side","Manhattan:	Morningside Heights and Hamilton Heights","Manhattan:	Central Harlem","Manhattan:	East Harlem","Manhattan:	Washington Heights and Inwood","Bronx:	Mott Haven and Melrose","Bronx:	Hunts Point and Longwood","Bronx:	Morrisania and Crotona","Bronx:	Highbridge and Concourse","Bronx:	Fordham and University Heights","Bronx:	Belmont and East Tremont","Bronx:	Kingsbridge Heights and Bedford","Bronx:	Riverdale and Fieldston","Bronx:	Parkchester and Soundview","Bronx:	Throgs Neck and Co-op City","Bronx:	Morris Park and Bronxdale","Bronx:	Williamsbridge and Baychester","Brooklyn:	Greenpoint and Williamsburg","Brooklyn:	Fort Greene and Brooklyn Heights","Brooklyn:	Bedford Stuyvesant","Brooklyn:	Bushwick","Brooklyn:	East New York and Starrett City","Brooklyn:	Park Slope and Carroll Gardens","Brooklyn:	Sunset Park","Brooklyn:	Crown Heights and Prospect Heights","Brooklyn:	South Crown Heights and Lefferts Gardens","Brooklyn:	Bay Ridge and Dyker Heights","Brooklyn:	Bensonhurst","Brooklyn:	Borough Park","Brooklyn:	Coney Island","Brooklyn:	Flatbush and Midwood","Brooklyn:	Sheepshead Bay","Brooklyn:	Brownsville","Brooklyn:	East Flatbush","Brooklyn:	Flatlands and Canarsie","Queens:	Long Island City and Astoria","Queens:	Woodside and Sunnyside","Queens:	Jackson Heights","Queens:	Elmhurst and Corona","Queens:	Ridgewood and Maspeth","Queens:	Rego Park and Forest Hills","Queens:	Flushing and Whitestone","Queens:	Hillcrest and Fresh Meadows","Queens:	Kew Gardens and Woodhaven","Queens:	South Ozone Park and Howard Beach","Queens:	Bayside and Little Neck","Queens:	Jamaica and Hollis","Queens: Queens Village","Queens:	Rockaway and Broad Channel","Staten Island:	St. George and Stapleton","Staten Island:	South Beach and Willowbrook","Staten Island:	Tottenville and Great Kills"]
    // Create select element
    const select = document.createElement("select");

    // Create default option
    const defaultOption = document.createElement("option");
    defaultOption.text = "Select a neighborhood";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    select.appendChild(defaultOption);

    // Create options from array
    for (let i = 0; i < options.length; i++) {
        const option = document.createElement("option");
        option.text = options[i];
        select.appendChild(option);
    }

    select.id = "neighborhood-select";
    select.name = "neighborhood-select";

    // Add select element to HTML
    document.body.appendChild(select);


    select.addEventListener("change", (event) => {
        const selectedOption = event.target.value;
        console.log(selectedOption); // Output the selected option
    });
      
}
