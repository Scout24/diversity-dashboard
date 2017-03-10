var people = [
    raluca = {
        name: "Raluca Idor",
        title: "Talent Acquisition Manager",
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
        img: "myrtha.jpg",
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


for(var i = 0; i < people.length; i+=2) {
    var first = people[i];
    var second = (people.length >= i + 1) ? people[i + 1] : null;

    var id = "palm-profile-" + i;
    
    $("#profiles-palm").append(
        "<div id=\"" + id + "\" class=\"grid gutter-l\">" +
            getProfileItem(first) +
        "</div>"
    );
    
    if(second) {
        $("#" + id).append(getProfileItem(second));
    }
}

function getProfileItem(person) {
    return  "<div class=\"grid-item one-half align-center\">" +
                "<img src=\"assets/" + person.img + "\" class=\"circular--square profile\">" + 
                "<p class=\"font-s font-italic font-bold\">" +                     
                    "<span class=\"flag-icon flag-icon-" + person.flag + "\"></span>  " +  
                    person.name +                 
                "</p>" +
                "<p class=\"font-s font-italic\">" + person.company + ", " + person.title + "</p>" +
            "</div>"
}


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