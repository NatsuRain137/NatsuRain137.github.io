const section2 = document.querySelector("section[secondpage]");
const backgroundImage = document.querySelector("img[background]");
const goTop = document.querySelector("div[gotop]");

let scrollHeight;

window.addEventListener("scroll", (e) => {
    scrollHeight = window.scrollY || document.documentElement.scrollTop;
    if (scrollHeight > 200) {
        goTop.style.opacity = 1;
        goTop.style.pointerEvents = "initial";
    } else {
        goTop.style.opacity = 0;
        goTop.style.pointerEvents = "none";
    }

    if (scrollHeight >= section2.offsetTop) {
        if (window.location.href.endsWith("sd/")) {
            backgroundImage.src = "../assets/images/dancing.gif";
        } else if (window.location.href.endsWith("fy/")) {
            backgroundImage.src = "../assets/images/building.png";
        }else{
            backgroundImage.src = "assets/images/flying.jpg";
        }
    } else if (scrollHeight < section2.offsetTop) {
        if (window.location.href.endsWith("sd/")) {
            backgroundImage.src = "../assets/images/building2.png";
        } else if (window.location.href.endsWith("fy/")) {
            backgroundImage.src = "../assets/images/ground.png";
        }else {
            backgroundImage.src = "assets/images/hallway.png";
        }
    }

    if (window.location.href.endsWith("sd/")) {
        if (scrollHeight >= document.querySelector("section[thirdpage]").offsetTop) {
            backgroundImage.src = "../assets/images/trees.png";
        }
    }


    console.log(document.body.scrollTop, section2.offsetTop);
});

goTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})