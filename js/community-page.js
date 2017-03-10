var people = [
    raluca = {
        name: "Raluca Idor",
        title: "Talen Acquisition Manager",
        company: "IS24",
        img: "raluca.jpeg",
        flag: "ro"
    },
    katrin = {
        name: "Katrin Kern",
        title: "Engineering Manager",
        company: "IS24",
        img: "christin.jpeg",
        flag: "de"
    },
    sebastian = {
        name: "Sebastian Nachtigall",
        title: "Engineering Manager",
        company: "IS24",
        img: "sebastian.jpeg",
        flag: "de"
    },
    gro = {
        name: "Gro Geert-Jørgensen",
        title: "Agile Coach",
        company: "AS24",
        img: "gro.png",
        flag: "de"
    },
    pavlo = {
        name: "Pavlo Voznenko",
        title: "Head of Technology",
        company: "AS24",
        img: "pavlo.png",
        flag: "de"
    },
    myrtha = {
        name: "Myrtha Fuog",
        title: "Junior Fullstack Developer",
        company: "IS24",
        img: "pavlo.png",
        flag: "ch"
        
    },
    britta = {
        name: "Britta Reiners",
        title: "Agile Tester",
        company: "AS24",
        img: "britta.png",
        flag: "de"
    },
    nicole = {
        name: "Nicole Nenova",
        title: "Working Student",
        company: "IS24",
        img: "nicole.jpg",
        flag: "de"
    },
    christin = {
        name: "Christin Westermann",
        title: "Software Engineer",
        company: "IS24",
        img: "christin.jpeg",
        flag: "de"
    }
];


var numberOfPeopleFirstRow = Math.floor(people.length / 2 + 1);
var numberOfPeopleSecondRow = Math.round(people.length / 2 - 1);


var firstRowGridClass = calculateCssGridClassForRow(numberOfPeopleFirstRow);
var secondRowGridClass = calculateCssGridClassForRow(numberOfPeopleSecondRow);

var peopleFirstRow = people.slice(0, numberOfPeopleFirstRow);
var peopleSecondRow = people.slice(numberOfPeopleFirstRow, people.length);

peopleFirstRow.forEach(function (value, i) {
    $("#profiles-desk1").append(
        "<div class=\"grid-item " + firstRowGridClass + " align-center\">" +
            "<img src=\"assets/" + value.img + "\" class=\"circular--square profile\">" + 
            "<p class=\"font-s font-italic font-bold\">" +                     
                "<span class=\"flag-icon flag-icon-" + value.flag + "\"></span>  " +  
                value.name +                 
            "</p>" +
            "<p class=\"font-s font-italic\">" + value.company + ", " + value.title + "</p>" +
        "</div>");
});  

peopleSecondRow.forEach(function (value, i) {
    $("#profiles-desk2").append(
        "<div class=\"grid-item " + secondRowGridClass + " align-center\">" +
            "<img src=\"assets/" + value.img + "\" class=\"circular--square profile\">" + 
            "<p class=\"font-s font-italic font-bold\">" +                     
                "<span class=\"flag-icon flag-icon-" + value.flag + "\"></span>  " +  
                value.name +                 
            "</p>" +
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