function toggleHome() {
    console.log('testings')
    $('#nav-Home').toggleClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}
function toggleAbout() {
    console.log('testings')
    $('#nav-About').toggleClass('show-dropdown')
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}
function toggleOutreach() {
    console.log('testings')
    $('#nav-Outreach').toggleClass('show-dropdown')
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}
function toggleEvents() {
    console.log('testings')
    $('#nav-Events').toggleClass('show-dropdown')
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}
function togglePeople() {
    console.log('testings')
    $('#nav-People').toggleClass('show-dropdown')
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}
function toggleMore() {
    console.log('testings')
    $('#nav-More').toggleClass('show-dropdown')
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
}
window.onclick = function (event) {
    console.log(event.target);
    if (!event.target.matches('.nav-item')) {
        // console.log(event.target)
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        // console.log('window click')
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-dropdown')) {
                openDropdown.classList.remove('show-dropdown');
            }
        }
    }
}