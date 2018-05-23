

// let chrono = {

// start: function(){
//   window.setTimeout(chronoEnd, 2000)
//     function chronoEnd(){
//       alert('Fin!')
//     }
// },

// pause: function(){

// },

// stop: function(){

// },

// currentTime:0

// }


class chrono {

  constructor(){

      currentTime : 0,

    this.start = function(){
      // setInterval(1000);
      // setTimeout(repeat);
      let repeat = currentTime++;

      // console.log(launch);
      // console.log('hello');
      console.log(repeat);
      
      
      
      
    }

    this.pause = function(){

    }

    this.stop = function(){

    }


  }

}


chrono1 = new chrono()
currentTime = 0







/*Example1*/
/*
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert("That was really slow!");
}

function clearAlert() {
  window.clearTimeout(timeoutID);
  console.log(window.clearTimeout(timeoutID));
}
*/



//
// function hello() {
//   var intervalID = window.setInterval(myCallback, 500);
//
//   function myCallback() {
//     console.log('hey');
//   }
// }
