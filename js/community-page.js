var people = [
    raluca = {
        name: "Raluca Idor",
        title: "Talen Acquisition Manager",
        company: "IS24",
        img: "raluca.jpeg"
    },
    katrin = {
        name: "Katrin Kern",
        title: "Engineering Manager",
        company: "IS24",
        img: "christin.jpeg"
    },
    sebastian = {
        name: "Sebastian Nachtigall",
        title: "Engineering Manager",
        company: "IS24",
        img: "sebastian.jpeg"
    },
    gro = {
        name: "Gro Geert-Jørgensen",
        title: "Agile Coach",
        company: "AS24",
        img: "gro.png"
    },
    pavlo = {
        name: "Pavlo Voznenko",
        title: "Head of Technology",
        company: "AS24",
        img: "pavlo.png"
    },
    myrtha = {
        name: "Myrtha Fuog",
        title: "Junior Fullstack Developer",
        company: "IS24",
        img: "pavlo.png"
    },
    britta = {
        name: "Britta Reiners",
        title: "Agile Tester",
        company: "AS24",
        img: "britta.png"
    },
    nicole = {
        name: "Nicole Nenova",
        title: "Working Student",
        company: "IS24",
        img: "nicole.jpg"
    },
    christin = {
        name: "Christin Westermann",
        title: "Software Engineer",
        company: "IS24",
        img: "christin.jpeg"
    }
];


var numberOfPeopleFirstRow = Math.floor(people.length / 2 + 1);
var numberOfPeopleSecondRow = Math.round(people.length / 2 - 1);


var firstRowGridClass = calculateCssGridClassForRow(numberOfPeopleFirstRow);
var secondRowGridClass = calculateCssGridClassForRow(numberOfPeopleSecondRow);

var peopleFirstRow = people.slice(0, numberOfPeopleFirstRow);
var peopleSecondRow = people.slice(numberOfPeopleFirstRow, people.length);

console.log("numberOfPeopleFirstRow:" + numberOfPeopleFirstRow);
console.log("numberOfPeopleSecondRow:" + numberOfPeopleSecondRow);
console.log("firstRowGridClass:" + firstRowGridClass);
console.log("secondRowGridClass:" + secondRowGridClass);
console.log("peopleFirstRow:" + peopleFirstRow);
console.log("peopleSecondRow:" + peopleSecondRow);


peopleFirstRow.forEach(function (value, i) {
    $("#profiles-desk1").append(
        "<div class=\"grid-item " + firstRowGridClass + " align-center\">" +
            "<img src=\"assets/" + value.img + "\" class=\"circular--square profile\">" + 
            "<p class=\"font-s font-italic font-bold\">" + value.name + "</p>" +
            "<p class=\"font-s font-italic\">" + value.company + ", " + value.title + "</p>" +
        "</div>");
});  

peopleSecondRow.forEach(function (value, i) {
    $("#profiles-desk2").append(
        "<div class=\"grid-item " + secondRowGridClass + " align-center\">" +
            "<img src=\"assets/" + value.img + "\" class=\"circular--square profile\">" + 
            "<p class=\"font-s font-italic font-bold\">" + value.name + "</p>" +
            "<p class=\"font-s font-italic\">" + value.company + ", " + value.title + "</p>" +
        "</div>");
});

function calculateCssGridClassForRow(numberOfPeople) {
    switch(numberOfPeople) {
        case 2:
            return "one-half";
        case 3:
            return "one-third";
        case 4: 
            return "one-fourth";
        case 5:
            return "one-fifth";
        default:
            return "one-third";
    }
}