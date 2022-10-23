$("img").attr("draggable","false")
$(".p2").css("display", "none")
$(".b-main").css("transform","translate(0px) scale(0.7)").css("opacity","0.7")
        setTimeout(() => {
            $(".b-main").css("transform","translate(0px) scale(1)").css("opacity","1")
        }, 0);

function fc1() {
    $(".b2").css("border-bottom","2px solid rgb(119, 0, 255)")
    $(".b2").css("border-left","rgb(119, 0, 255)")
}
function fc2() {
    $(".b2").css("border-bottom","none")
    $(".b2").css("border-left","2px solid rgb(119, 0, 255)")
}
function fc3() {
    $(".b3").css("border-bottom","2px solid rgb(119, 0, 255)")
    $(".b3").css("border-left","rgb(119, 0, 255)")
}
function fc4() {
    $(".b3").css("border-bottom","none")
    $(".b3").css("border-left","2px solid rgb(119, 0, 255)")
}

function fc5() {
    $(".p1").css("display", "flex")
    $(".p2").css("display", "none")
        setTimeout(() => {
            $(".p1").css("display", "none")
            $(".p2").css("display", "flex")
        }, 120);
    $(".a-main").css("background-color", "#111")
    $(".b-main").css("background-color", "#1f1f1f").css("border","1px solid rgb(30, 30, 30)")
    $("*").css("color", "white")
    $(".b5").css("color", "gray")
    $(".b6").css("color", "white")
}
function fc6() {
    $(".p1").css("display", "none")
    $(".p2").css("display", "flex")
        setTimeout(() => {
            $(".p1").css("display", "flex")
            $(".p2").css("display", "none")
        }, 120);
    $(".a-main").css("background-color", "white")
    $(".b-main").css("background-color", "rgb(240, 240, 240)").css("border","1px solid rgb(200, 200, 200)")
    $("*").css("color", "black")
    $(".b5").css("color", "gray")
    $(".b4").css("color", "white")
    $(".p1").css("color", "orange")
}