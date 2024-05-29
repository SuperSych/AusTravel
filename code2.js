'use strict';

document.body.style.overflow = "hidden";
let preloader = document.getElementById('preload');
let test = document.getElementById("testing");
let find = document.getElementById("finder");
let box = document.querySelector(".box_section_7_extra");
let in_1 = document.querySelector(".in_1");
let in_2 = document.querySelector(".in_2");
let in_3 = document.querySelector(".in_3");
let in_4 = document.querySelector(".in_4");
let in_5 = document.querySelector(".in_5");
let drawing = false;
let touched = false;
let counter = 0;


////////////////// рандом //////////////////
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
////////////////// рандом //////////////////


////////////////// появление билетов //////////////////
find.addEventListener("click", function() {

    let templateCode = `
        <div class = "tickets tickets_extra">
            <div class = "tickets_el">
                <p class = "pp1 pp3">{{from}}</p>
            </div>
            <div class = "tickets_el">
                <p class = "pp1 pp3">{{to}}</p>
            </div>
            <div class = "tickets_el">
                <p class = "pp1 pp3">{{when}}</p>
            </div>
            <div class = "tickets_el">
                <p class = "pp1 pp3">{{when_back}}</p>
            </div>
            <div class = "tickets_el">
                <p class = "pp1 pp3">{{passengers}}</p>
            </div>
        </div>
        `
    let template = Handlebars.compile(templateCode);

    let addContainer = box;

    if (in_1.value != "" && in_2.value != "" && in_3.value != "" && in_4.value != "" && in_5.value != "" ){
        
        counter++;

        let number = getRandomInt(20, 100);

        let itog = number - in_5.value;

        if (itog < 0){
            itog = 0;
        }

        addContainer.innerHTML += template(
            {
                "from": in_1.value,
                "to": in_2.value,
                "when": in_3.value,
                "when_back": in_4.value,
                "passengers": itog
            }
        );
        
        if (counter != 0 && counter % 3 == 0){
            prel();
        } else {
            window.scrollBy({
                top: 500,
                left: 0,
                behavior: "smooth"
            });
        }
    } else {
        alert("Некорректный ввод!");
    }

    in_1.value = "";
    in_2.value = "";
    in_3.value = "";
    in_4.value = "";
    in_5.value = "";
});
////////////////// появление билетов //////////////////


////////////////// прелоадер //////////////////
function prel(){
    preloader.style.display = 'flex';
    document.body.style.overflow = "hidden";
    let number2 = getRandomInt(1, 5);
    let letter = document.getElementById('letter');
    if (number2 == 1){
        letter.innerHTML = '"A"';
    }
    if (number2 == 2){
        letter.innerHTML = '"B"';
    }
    if (number2 == 3){
        letter.innerHTML = '"C"';
    }
    if (number2 == 4){
        letter.innerHTML = '"D"';
    }
    test.addEventListener("click", function() {
        if (touched){
            preloader.style.display = 'none';
            document.body.style.overflow = "auto";
            ctx.clearRect(0, 0, 400, 200);
            if (counter != 0){
                window.scrollBy({
                    top: 500,
                    left: 0,
                    behavior: "smooth"
                });
            }
        } else {
            alert("Вы не прошли проверку!");
        }
    });
}
////////////////// прелоадер //////////////////


////////////////// рисование Canvas //////////////////
let canvas = document.querySelector("#game");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "orange";
ctx.strokeStyle = "orange";
ctx.lineWidth = 3;

canvas.addEventListener("mousedown", function(e) {
    drawing = true;
});

canvas.addEventListener("mouseup", function(e) {
    drawing = false;
});

canvas.addEventListener("mousemove", function(e) {
    if (drawing){
        ctx.beginPath();
        let x = e.clientX - canvas.getBoundingClientRect().left;
        let y = e.clientY - canvas.getBoundingClientRect().top;
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        touched = true;
    }
});
////////////////// рисование Canvas //////////////////

prel();