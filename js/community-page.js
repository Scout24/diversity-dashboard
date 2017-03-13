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
        img: "katrin.jpeg",
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
        flag: "dk"
    },
    pavlo = {
        name: "Pavlo Voznenko",
        title: "Head of Technology",
        company: "AS24",
        img: "pavlo.png",
        flag: "ua"
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
    },
    martin = {
        name: "Martin Koch",
        title: "Working Student",
        company: "IS24",
        img: "martin.jpg",
        flag: "de"
    }
];


// desk und lap
for(var i = 0; i < people.length; i+=4) {
    var first = people[i];
    var second = (people.length >= i + 1) ? people[i + 1] : null;
    var third = (people.length >= i + 2) ? people[i + 2] : null;
    var fourth = (people.length >= i + 3) ? people[i + 3] : null;

    var id = "desk-profile-" + i;
    
    $("#profiles-desk").append(
        "<div id=\"" + id + "\" class=\"grid gutter-l\">" +
            getProfileItem(first, "one-fourth") +
        "</div>"
    );
    
    if(second) {
        $("#" + id).append(getProfileItem(second, "one-fourth"));
    }
    if(third) {
        $("#" + id).append(getProfileItem(third, "one-fourth"));
    }
    if (fourth) {
        $("#" + id).append(getProfileItem(fourth, "one-fourth"));
    }
}

// palm
for(var i = 0; i < people.length; i+=2) {
    var first = people[i];
    var second = (people.length >= i + 1) ? people[i + 1] : null;

    var id = "palm-profile-" + i;
    
    $("#profiles-palm").append(
        "<div id=\"" + id + "\" class=\"grid gutter-l\">" +
            getProfileItem(first, "one-half") +
        "</div>"
    );
    
    if(second) {
        $("#" + id).append(getProfileItem(second, "one-half"));
    }
}

function getProfileItem(person, cssGridItemClass) {
    return  "<div class=\"grid-item " + cssGridItemClass + " align-center\">" +
                "<img src=\"assets/" + person.img + "\" class=\"circular--square profile\">" + 
                "<p class=\"font-s font-italic font-bold\">" +                     
                    "<span class=\"flag-icon flag-icon-" + person.flag + "\"></span>  " +  
                    person.name +                 
                "</p>" +
                "<p class=\"font-s font-italic\">" + person.company + ", " + person.title + "</p>" +
            "</div>"
}