// $('document').ready(function (){
    var resquestURL = 'diapo.json';
    var request = new XMLHttpRequest();
    request.open('GET' , resquestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var diapoImgs = request.response;
        diapoRotate(diapoImgs);
    }

function diapoRotate(){
    var resquestURL = 'diapo.json';
    var request = new XMLHttpRequest();
    request.open('GET' , resquestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var diapoImgs = request.response;
    }
    var diapoImgs = JSON.parse(resquestURL)
    
    
}
    


// })