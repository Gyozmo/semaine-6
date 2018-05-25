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


class Diaporama {

    constructor(){


        this.startRotation;
        this.imgValue = 1;
        this.imgRetrieve = diapoImgs.diapo['photos'+this.imgValue+''];
    
        this.addDiapo = function () {
            $('.container').after('<img>');

        }

        this.start = function(){

            
    
        this.startRotation = setInterval(function(){
            
            $('img').attr("src",diapoImgs.diapo['photos'+this.imgValue+''])
    
            if (this.imgValue < 5) {
                this.imgValue++;
            } else {
                this.imgValue = 1;
            }
        },500)
    
            console.log(diapoImgs.diapo['photos1']);
        }


    }
}

let diaporama1 = new Diaporama();
let diaporama2 = new Diaporama();
diaporama1.start()




}

 
    
    
}


})