// let onHeader = false;
// $('.header').hover(function () {
//     onHeader = true
//     console.log('onheader', onHeader)
// },
//     function () {
//         onHeader = false
//         console.log('onheader', onHeader)
//     }
// )
$('#link-home').hover(function () {
    $('#nav-Home').addClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}, function () {
    $('.header').hover(function () { }, function () {
        $('#nav-Home').removeClass('show-dropdown')
        $('#nav-About').removeClass('show-dropdown')
        $('#nav-Outreach').removeClass('show-dropdown')
        $('#nav-Events').removeClass('show-dropdown')
        $('#nav-People').removeClass('show-dropdown')
        $('#nav-More').removeClass('show-dropdown')

    })
})
$('#link-about').hover(function () {
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').addClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}, function () {
    $('.header').hover(function () { }, function () {
        $('#nav-Home').removeClass('show-dropdown')
        $('#nav-About').removeClass('show-dropdown')
        $('#nav-Outreach').removeClass('show-dropdown')
        $('#nav-Events').removeClass('show-dropdown')
        $('#nav-People').removeClass('show-dropdown')
        $('#nav-More').removeClass('show-dropdown')

    })
})
$('#link-outreach').hover(function () {
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').addClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}, function () {
    $('.header').hover(function () { }, function () {
        $('#nav-Home').removeClass('show-dropdown')
        $('#nav-About').removeClass('show-dropdown')
        $('#nav-Outreach').removeClass('show-dropdown')
        $('#nav-Events').removeClass('show-dropdown')
        $('#nav-People').removeClass('show-dropdown')
        $('#nav-More').removeClass('show-dropdown')

    })
})
$('#link-events').hover(function () {
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').addClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}, function () {
    $('.header').hover(function () { }, function () {
        $('#nav-Home').removeClass('show-dropdown')
        $('#nav-About').removeClass('show-dropdown')
        $('#nav-Outreach').removeClass('show-dropdown')
        $('#nav-Events').removeClass('show-dropdown')
        $('#nav-People').removeClass('show-dropdown')
        $('#nav-More').removeClass('show-dropdown')

    })
})
$('#link-people').hover(function () {
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').addClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}, function () {
    $('.header').hover(function () { }, function () {
        $('#nav-Home').removeClass('show-dropdown')
        $('#nav-About').removeClass('show-dropdown')
        $('#nav-Outreach').removeClass('show-dropdown')
        $('#nav-Events').removeClass('show-dropdown')
        $('#nav-People').removeClass('show-dropdown')
        $('#nav-More').removeClass('show-dropdown')

    })
})
$('#link-more').hover(function () {
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').addClass('show-dropdown')
}, function () {
    $('.header').hover(function () { }, function () {
        $('#nav-Home').removeClass('show-dropdown')
        $('#nav-About').removeClass('show-dropdown')
        $('#nav-Outreach').removeClass('show-dropdown')
        $('#nav-Events').removeClass('show-dropdown')
        $('#nav-People').removeClass('show-dropdown')
        $('#nav-More').removeClass('show-dropdown')

    })
})
$('#link-reachus').hover(function () {
    $('#nav-Home').removeClass('show-dropdown')
    $('#nav-About').removeClass('show-dropdown')
    $('#nav-Outreach').removeClass('show-dropdown')
    $('#nav-Events').removeClass('show-dropdown')
    $('#nav-People').removeClass('show-dropdown')
    $('#nav-More').removeClass('show-dropdown')
}, function () {
    $('.header').hover(function () { }, function () {
        $('#nav-Home').removeClass('show-dropdown')
        $('#nav-About').removeClass('show-dropdown')
        $('#nav-Outreach').removeClass('show-dropdown')
        $('#nav-Events').removeClass('show-dropdown')
        $('#nav-People').removeClass('show-dropdown')
        $('#nav-More').removeClass('show-dropdown')

    })
})
// $('#link-about').hover(function () {
//     toggleAbout()
// })
// $('#link-outreach').hover(function () {
//     toggleOutreach()
// })
// $('#link-events').hover(function () {
//     toggleEvents()
// })
// $('#link-people').hover(function () {
//     togglePeople()
// })
// $('#link-more').hover(function () {
//     toggleMore()
// })
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
// const content = $('.content-main');
// console.log(content);
const content = document.querySelectorAll(".content-main")
const contentone = document.querySelector('#intro')
console.log(content);
const optionsBasic = {
    root: null,
    threshold: 0,
    rootMargin: "-300px 0px -300px 0px",
}

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        // console.log(entry.target, " ", entry.isIntersecting);
        if (!entry.isIntersecting) {

            console.log("np")
            entry.target.classList.add('off-screen')
        }
        else {
            console.log("yeas")
            entry.target.classList.remove('off-screen')

        }
    });
}, optionsBasic)

content.forEach(section => {
    observer.observe(section);

})
const holdheading = document.querySelectorAll(".hold-heading")
const holdcontent = document.querySelectorAll(".hold-content")
const thresholdArray = steps => Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0)

let previousY = 0
let previousRatio = 0
console.log(holdheading);
const options = {
    root: null,
    threshold: thresholdArray(20),
    rootMargin: "-30% 0px",
}

const observerHold = new IntersectionObserver(function (entries, observerHold) {
    entries.forEach(entry => {
        // console.log(entry.target, " ", entry.isIntersecting);
        const currentRatio = entry.intersectionRatio;
        const currentY = entry.boundingClientRect.y
        // const currentRatio = entry.intersectionRatio
        const isIntersecting = entry.isIntersecting
        console.log(currentRatio);
        // if (!entry.isIntersecting) {

        //     console.log("Off- screen")
        //     // entry.target.classList.remove('off-screen')
        // }
        // else {
        //     console.log("ON SCREEN CHANGE NOW")
        // entry.target.classList.toggle('scroll-trigger')
        //     // console.log(entry.target.nextElementSibling.childNodes);
        //     entry.target.nextElementSibling.childNodes.forEach(function (element) {
        //         console.log(element.className.indexOf("hold-content"));
        //         console.log(element.className);

        //     });
        //     // console.log;

        //     // entry.target.nextSibling.childNodes[1].toggle('scroll-trigger');
        //     // holdcontent[0].classList.toggle('scroll-trigger');

        // }
        if (currentY < previousY) {
            console.log("Scrolling down ")

            entry.target.classList.add('scroll-trigger')

            entry.target.childNodes.forEach(function (element) {
                try {
                    if (element.className.indexOf("header-trigger")) {
                        document.querySelector('.header').classList.add('header-scrolled');
                    }
                } catch (error) {

                }
            })

            // } else {
            // console.log("Scrolling down leave")
            // entry.target.classList.add('scroll-trigger')
            // }
            entry.target.nextElementSibling.childNodes.forEach(function (element) {
                try {
                    if (element.className.indexOf("hold")) {
                        element.classList.add("scroll-trigger");
                    }

                } catch (error) {

                }
            })
        } else if (currentY > previousY && isIntersecting) {
            // if (currentRatio < previousRatio) {
            entry.target.nextElementSibling.childNodes.forEach(function (element) {
                try {
                    if (element.className.indexOf("hold")) {
                        element.classList.remove("scroll-trigger");
                    }

                } catch (error) {

                }
            })
            console.log("Scrolling up leave")
            entry.target.classList.remove('scroll-trigger')
            entry.target.childNodes.forEach(function (element) {
                try {
                    if (element.className.indexOf("header-trigger")) {
                        document.querySelector('.header').classList.remove('header-scrolled');
                    }
                } catch (error) {

                }
            })
            // } else {
            // console.log("Scrolling up enter");
            // entry.target.classList.remove('scroll-trigger')
            // }
        }

        previousY = currentY
        previousRatio = currentRatio
    })
}, options)

holdheading.forEach(section => {
    observerHold.observe(section);

})