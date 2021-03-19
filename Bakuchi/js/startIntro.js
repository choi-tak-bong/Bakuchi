
class Intro {
    static drawHeadLine() {
        let headLine = document.getElementById("head_line");
        let headLineOpacity = 0;
        let topRem = 15;
        let introInterval = setInterval(function() {
            if (headLineOpacity === 100) {
                clearInterval(introInterval);
            } else {
                topRem += 0.1;
                headLine.style.opacity = headLineOpacity * 0.01;
                headLine.style.top = topRem + "rem"; 
                headLineOpacity += 10;
            }
        }, 100);
    }

    static drawRect() {

    }
}