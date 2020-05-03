setInterval(function () {
    var seconds = new Date().getUTCSeconds();
    var sdegree = seconds * 6;
    var srotate = "rotate(" + sdegree + "deg)";
    $("#sec").css({ "transform": srotate });
}, 1000);

setInterval(function () {
    var hours = new Date().getUTCHours();
    var mins = new Date().getUTCMinutes();
    var hdegree = hours * 30 + (mins / 2);
    var hrotate = "rotate(" + hdegree + "deg)";

    $("#hour").css({ "transform": hrotate });
}, 1000);

setInterval(function () {

    var mins = new Date().getUTCMinutes();
    var mdegree = mins * 6;
    var mrotate = "rotate(" + mdegree + "deg)";

    $("#min").css({ "transform": mrotate });
}, 1000);