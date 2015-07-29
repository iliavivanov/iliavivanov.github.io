// QRCODE reader Copyright 2011 Lazar Laszlo
// http://www.webqr.com

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function read(a) {
    var html = "<br>";
    if (a.indexOf("http://") === 0 || a.indexOf("https://") === 0)
        html += "<a target='_blank' href='" + a + "'>" + a + "</a><br>";
    html += "<b>" + htmlEntities(a) + "</b><br><br>";
    console.log(htmlEntities(a));
    //document.getElementById("result").innerHTML = html;
}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

function load() {
    if (isCanvasSupported() && window.File && window.FileReader) {
        qrcode.callback = read;
        console.log("111");
    } else {
        console.log("sorry your browser is not supported");
    }
}
