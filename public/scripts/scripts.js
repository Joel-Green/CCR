(function($) {
    $.fn.textfill = function(maxFontSize) {
        maxFontSize = parseInt(maxFontSize, 10);
        return this.each(function(){
            var ourText = $("#verseSize .dailyVerses:nth-child(1)", this),
                parent = ourText.parent(),
                maxHeight = parent.height(),
                maxWidth = parent.width(),
                fontSize = parseInt(ourText.css("fontSize"), 10),
                multiplier = maxWidth/ourText.width(),
                newSize = (fontSize*(multiplier-0.1));
                console.log(ourText);
            ourText.css(
                "fontSize", 
                (maxFontSize > 0 && newSize > maxFontSize) ? 
                    maxFontSize : 
                    newSize
            );
            // ourText.css("color","red");
        });
    };
})(jQuery);
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
$( document ).ready(function() {
    console.log( "ready!" );
    setTimeout(function(){
        $('#verseSize').textfill({maxFontSize:28});

    },5000)
});
console.log("Scripts are runnings");
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
    // console.log('testings')
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
const thresholdArray = steps => Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0);


for(size=9; size<100 && size >= 9; size=size*4/3)
{
    console.log(size);
}


window.onclick = function (event) {
    // console.log(event.target);
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
// const content = document.querySelectorAll(".content-main")
// const contentone = document.querySelector('#intro')
// console.log(content);
// const optionsBasic = {
//     root: null,
//     threshold: 0,
//     rootMargin: "-300px 0px -300px 0px",
// }

// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach(entry => {
//         // console.log(entry.target, " ", entry.isIntersecting);
//         if (!entry.isIntersecting) {

//             // console.log("np")
//             entry.target.classList.add('off-screen')
//         }
//         else {
//             // console.log("yeas")
//             entry.target.classList.remove('off-screen')

//         }
//     });
// }, optionsBasic)

// content.forEach(section => {
//     observer.observe(section);

// })
// const holdheading = document.querySelectorAll(".hold-heading")
// const holdcontent = document.querySelectorAll(".hold-content")

// let previousY = 0
// let previousRatio = 0
// // console.log(holdheading);
// const options = {
//     root: null,
//     threshold: thresholdArray(20),
//     rootMargin: "-45% 0px",
// }

// const observerHold = new IntersectionObserver(function (entries, observerHold) {
//     entries.forEach(entry => {
//         // console.log(entry.target, " ", entry.isIntersecting);
//         const currentRatio = entry.intersectionRatio;
//         const currentY = entry.boundingClientRect.y
//         // const currentRatio = entry.intersectionRatio
//         const isIntersecting = entry.isIntersecting
//         // console.log(currentRatio);
//         // if (!entry.isIntersecting) {

//         //     console.log("Off- screen")
//         //     // entry.target.classList.remove('off-screen')
//         // }
//         // else {
//         //     console.log("ON SCREEN CHANGE NOW")
//         // entry.target.classList.toggle('scroll-trigger')
//         //     // console.log(entry.target.nextElementSibling.childNodes);
//         //     entry.target.nextElementSibling.childNodes.forEach(function (element) {
//         //         console.log(element.className.indexOf("hold-content"));
//         //         console.log(element.className);

//         //     });
//         //     // console.log;

//         //     // entry.target.nextSibling.childNodes[1].toggle('scroll-trigger');
//         //     // holdcontent[0].classList.toggle('scroll-trigger');

//         // }
//         if (currentY < previousY) {
//             console.log("Scrolling down ")

//             entry.target.classList.add('scroll-trigger')

//             entry.target.childNodes.forEach(function (element) {
//                 try {
//                     if (element.className.indexOf("header-trigger")) {
//                         document.querySelector('.header').classList.add('header-scrolled');
//                     }
//                 } catch (error) {

//                 }
//             })

//             // } else {
//             // console.log("Scrolling down leave")
//             // entry.target.classList.add('scroll-trigger')
//             // }
//             entry.target.nextElementSibling.childNodes.forEach(function (element) {
//                 try {
//                     if (element.className.indexOf("hold")) {
//                         element.classList.add("scroll-trigger");
//                     }

//                 } catch (error) {

//                 }
//             })
//         } else if (currentY > previousY && isIntersecting) {
//             // if (currentRatio < previousRatio) {
//             entry.target.nextElementSibling.childNodes.forEach(function (element) {
//                 try {
//                     if (element.className.indexOf("hold")) {
//                         element.classList.remove("scroll-trigger");
//                     }

//                 } catch (error) {

//                 }
//             })
//             console.log("Scrolling up leave")
//             entry.target.classList.remove('scroll-trigger')
//             entry.target.childNodes.forEach(function (element) {
//                 try {
//                     if (element.className.indexOf("header-trigger")) {
//                         document.querySelector('.header').classList.remove('header-scrolled');
//                     }
//                 } catch (error) {

//                 }
//             })
//             // } else {
//             // console.log("Scrolling up enter");
//             // entry.target.classList.remove('scroll-trigger')
//             // }
//         }

//         previousY = currentY
//         previousRatio = currentRatio
//     })
// }, options)

// holdheading.forEach(section => {
//     observerHold.observe(section);

// })

// const  trigger = document.querySelectorAll('.trigger');
// const handleIntersect = entries => {
//     entries.forEach(entry => {
//         const currentY = entry.boundingClientRect.y
//         const currentRatio = entry.intersectionRatio
//         const isIntersecting = entry.isIntersecting

//         // Scrolling down/up
//         console.log(currentRatio);
//         if (currentY < previousY) {
//             if (currentRatio > previousRatio && isIntersecting) {
//                 console.log( "Scrolling down enter")
//             } else {
//                 console.log( "Scrolling down leave")
//             }
//         } else if (currentY > previousY && isIntersecting) {
//             if (currentRatio < previousRatio) {
//                 console.log( "Scrolling up leave")
//             } else {
//                 console.log( "Scrolling up enter");
//             }
//         }

//         previousY = currentY
//         previousRatio = currentRatio
//     })
// }

// const triggerObserve = new IntersectionObserver(handleIntersect, {
//     threshold: thresholdArray(20),
//     rootMargin: "-45% 0px",
// })


// // console.log($('#intro'));

// // const intro = document.querySelector('#intro');
// // console.log(intro);

// // optionIntro = {
// //     root:null,
// //     threshold: thresholdArray(20), 
// //     rootMargin : "0px"
// // }
// // const observeIntro = new IntersectionObserver ( function(entry, observeIntro){
// //     // console.log(entry.isIntersecting);
// //     console.log("Please Work");
// //     // console.log(entry[0].intersectionRatio);
// //     if(entry[0].intersectionRatio<0.998){
// //         // console.log(entry[0].isIntersecting);
// //         console.log("Please Work remove it");
// //         document.getElementById("header").classList.remove('opacity-0');
// //     }
// //     else{
// //         // console.log(entry[0].isIntersecting);
// //         console.log("Please Work add it");
// //         document.getElementById("header").classList.add('opacity-0');
// //     }

// // }, optionIntro)

// // observeIntro.observe(intro);

let homeHeader =  document.querySelectorAll(".homeHeaderTrigger");
let introHeader = document.querySelectorAll('.home-header');
let introContent = document.getElementById('intro');
console.log(homeHeader);

optionsHomeHeader = {
    root:null,
    threshold :thresholdArray(30),
    rootMargin : "0px 0px 0px 0px"
}
const observeHomeHeader = new IntersectionObserver (function(entry,observeHomeHeader){
    // console.log(entry[0].intersectionRatio);
    introHeader[0].style.opacity=3*entry[0].intersectionRatio-1.64;
    introContent.style.opacity=3*entry[0].intersectionRatio-1.64;
    console.log(3*entry[0].intersectionRatio-1.94);
},optionsHomeHeader);

observeHomeHeader.observe(homeHeader[0]);
