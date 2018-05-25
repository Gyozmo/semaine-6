$('document').ready(function (){
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




    let startRotation;
    let imgValue = 1;

    $('img').attr("src",diapoImgs.diapo['photos'+imgValue+''])

    startRotation = setInterval(function(){
        
        $('img').attr("src",diapoImgs.diapo['photos'+imgValue+''])

        if (imgValue < 5) {
            imgValue++;
        } else {
            imgValue = 1;
        }
    },500)

        console.log(diapoImgs.diapo['photos1']);
        
    }
 
    
    
}


})