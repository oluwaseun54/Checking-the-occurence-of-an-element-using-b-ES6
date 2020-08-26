Stopwatch.prototype.start=function(){
            if(this.running)
            throw new Error('stop watch is working');
            this.running=true;
            this.startTime =new Date();
            console.log(startTime);

        }

        Stopwatch.prototype.stop=function(){
            if(!this.running)
            throw new Error('stop watch has stopped');
           this. running=false;
            this.endTime=new Date();

           const seconds =(endTime.getTime()-startTime.getTime()) /1000
            this.duration+=seconds;
          

       };

          
          Stopwatch.prototype.reset=function(){
              this.duration=0;
              this.startTime=null;
             this.endTime=null;
             this.running=false;
          }
          
          
