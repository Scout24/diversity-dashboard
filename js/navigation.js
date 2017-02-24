function toggleNav() {
    $("#dashboard-nav").toggleClass("menu-active");
    $("#community-nav").toggleClass("menu-active");
}

function toggleContent() {
    $("#dashboard").toggle();
    $("#community-info").toggle();
    $("#headline-dashboard").toggle();
    $("#headline-community-info").toggle();
}


function showDashboard() {
    toggleNav();
    toggleContent();
}

function showCommunityInfo() {
    toggleNav();
    toggleContent();
}
