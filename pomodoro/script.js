
class Chrono {



    constructor(){

        let currentTime;
        let countdown = 0;

        this.start = function(){
            currentTime = 2
            setInterval(function(){
                
                currentTime--;
                console.log(currentTime);
                
            }, 1000)
            console.log(currentTime);
                        
        }

        this.pause = function () {
            
        }

        this.stop = function(){

        }

        if (countdown == 4){
            console.log('25 minutes break u lucky');
            
        } else if (countdown < 4 && countdown > 0) {
            console.log('5 minutes and take back work');
        }

        if(currentTime == 0){
            countdown++;
            console.log(countdown);
            
            clearInterval(this.start)
        }

        
        console.log('countdown = '+countdown);
        
    }

}

let chrono = new Chrono;
chrono.start()
