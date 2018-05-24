
class Chrono {

    constructor(){

        let timer;
        let currentTime = 10;
        let countdown = 0;
        let Pomodorozilla;

        this.start = function(){
            // currentTime = 10

            //countdown
            timer = setInterval(function(){
              if (currentTime != 0) {
                currentTime--;
                console.log(currentTime);
              } else {
                clearInterval(timer);
                console.log('it\s time !');
                countdown++;
                console.log('countdown = ' + countdown);
                currentTime=1500
                if (currentTime == 0 && countdown > 0 && countdown < 4) {
                    console.log('5 min break ! Gambare !');
                } else if ( currentTime == 0 && countdown == 4) {
                  console.log('Well done bro ! take a 25 minutes break now.');
                }
              };
            }, 1000)
            console.log(currentTime);

        }

        this.pause = function () {
          Pomodorozilla = clearInterval(timer)
        }

        this.stop = function(){
          clearInterval(timer);
          countdown = 0;
          currentTime = 1500;
        }



        // if(currentTime == 0){
        //     countdown++;
        //     console.log(countdown);
        //
        //     clearInterval(timer)
        // } else {
        //   console.log();
        // }
        //
        // if (countdown == 4){
        //     console.log('25 minutes break u lucky');
        //
        // } else if (countdown < 4 && countdown > 0) {
        //     console.log('5 minutes and take back work');
        // } else {
        //
        // }


        console.log('countdown = '+countdown);

    }
}

let chrono = new Chrono;
chrono.start()
