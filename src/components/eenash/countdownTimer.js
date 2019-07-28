import React from "react";
import ReactDOM from "react-dom";



class CountdownTimer extends React.Component {
    constructor() {
      super();
      this.state = { time: {"h":0,"m":60,"s":0}, seconds: 60*60-1};
      this.timer = 0;
    //   this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60*60));
  
      let divisor_for_minutes = secs % (60*60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds,
      };
      return obj;
    }
    
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }
    
    // startTimer() {
    //     if (this.timer == 0 && this.state.seconds > 0) {
    //         this.timer = setInterval(this.countDown, 1000);
    //     }
    // }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      var m = this.state.time.m.toString().padStart(2, '0');
      var s = this.state.time.s.toString().padStart(2, '0');
      return(
        <div>
          {m}:{s}
        </div>
      );
    }
  }
  
  export default CountdownTimer
