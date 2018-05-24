//
// class chrono {
//
//   constructor(){
//
//       currentTime : 0,
//
//     this.start = function(){
//       // setInterval(1000);
//       // setTimeout(repeat);
//       let repeat = currentTime++;
//
//       // console.log(launch);
//       // console.log('hello');
//       console.log(repeat);
//
//
//
//
//     }
//
//     this.pause = function(){
//
//     }
//
//     this.stop = function(){
//
//     }
//
//
//   }
//
// }
//
//
// chrono1 = new chrono()
// currentTime = 0


class Chrono {


  
  constructor(){


    var interval;

    let timer = function timer() {
    currentTime++;
    console.log(currentTime);
    console.log(Date());
    };

    let currentTime = 0;

    this.start = function() {
      interval = setInterval(function() {timer()},1000)
      
    }

    this.pause = function() {
        clearInterval(interval);
        console.log('chrono paused at '+currentTime);
        
    }

    this.stop = function() {
      clearInterval(interval);
      currentTime = 0;
      console.log('chrono stoped')
    }
}

  greet() {
  return console.log('hello');
  }
};

let chrono = new Chrono();





