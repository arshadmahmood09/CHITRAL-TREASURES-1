document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.92)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },150);

    });

});

// SMOOTH SCROLL EFFECT

document
.querySelectorAll("a")
.forEach(link => {

    link.addEventListener("click", e => {

        if(link.hash !== ""){

            e.preventDefault();

        }

    });

});


// PRODUCT BUTTON EFFECT

document
.querySelectorAll(".buy-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerText = "Coming Soon ✨";

        setTimeout(() => {

            btn.innerText = "Explore";

        }, 2000);

    });

});

/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
        .getElementById("loader")
        .style.opacity = "0";

        setTimeout(() => {

            document
            .getElementById("loader")
            .style.display = "none";

        }, 1000);

    }, 1500);

});


/* BACK TO TOP */

const topBtn =
document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});


topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* CONTACT */

document
.querySelector("form")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Thank you! We will contact you soon. 🏔️"
    );

});


/* SCROLL REVEAL */

const cards =
document.querySelectorAll(
".card,.artisan-card,.review-card,.event,.organic-card,.souvenir-card"
);

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            card.style.opacity="1";

            card.style.transform=
            "translateY(0)";

        }

    });

});


cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform=
    "translateY(50px)";

    card.style.transition=
    "1s";

});