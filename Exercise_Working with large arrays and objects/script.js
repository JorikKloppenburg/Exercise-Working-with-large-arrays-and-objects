//Buttons
const displayList = document.querySelector(".list");
countryBtn.addEventListener("click", function () { displayList.classList.toggle("showList") });

//Sub-exercise: country list - 1 point
const getResultList = document.getElementById("resultList");

let ul = document.createElement("ul");
getResultList.appendChild(ul);

const data = randomPersonData;

const showCountries = data => {
    ul.innerHTML= " ";
    return data.map(person => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = person.region
    }) 
}

showCountries(data).sort();



/*
//Sub exercise: Capricorn women - 3 points
const showCapriWoman = data => {
    ul.innerHTML= " ";
    return data.map(person => {
        let li = document.createElement("li");
        ul.appendChild(li);
    //create image tagg in a tagg
    let img = document.createElement("img");
    // create image source
    li.appendChild(img);

    
        li.innerHTML = person.name + " " + person.surname
    }) 
}

showCapriWoman(data)
*/