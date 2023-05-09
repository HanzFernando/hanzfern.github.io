// Scroll upon click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        })
    })
})

// Adding navbar styling to current section

document.querySelectorAll('a[href^="#"]').forEach(navbtnItem => {
    navbtnItem.addEventListener('click', function(e){
        e.preventDefault();


        document.querySelectorAll('a[href^="#"]').forEach(btn => {           
            if(btn.classList.contains('current')){
                btn.classList.remove('current');
            }
        });

        var currentBtn = this.className;

        document.querySelectorAll(`a[class=${CSS.escape(currentBtn)}]`).forEach(btn => {   
                btn.classList.add('current');
        });
       
    });   
});

// Navbar Appearing upon scrolling past landing page

let scrollerBlock = $("#nav-bg");
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        scrollerBlock.fadeIn(400);
    } else {
        scrollerBlock.fadeOut(400);
    }
});




// Highlight current when scrolling
const sections = document.querySelectorAll('section');
const navLiAnchor = document.querySelectorAll('nav ul li a');
const showcaseLiAnchor = document.querySelectorAll('.home-nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        // get postion from top of page
        const sectionTop = section.offsetTop;
        // get height of section
        const sectionHeight = section.clientHeight;

        if(scrollY >= (sectionTop - sectionHeight / 2)){
            current = section.getAttribute('id');

        }

    })
    // console.log(current);

    navLiAnchor.forEach(a => {
        a.classList.remove('current');
        if(a.classList.contains(current)){
            a.classList.add('current');
        }
    })

    showcaseLiAnchor.forEach(a => {
        a.classList.remove('current');
        if(a.classList.contains(current)){
            a.classList.add('current');
        }
    })
})
