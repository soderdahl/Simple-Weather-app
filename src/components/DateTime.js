import React,{ Component } from 'react';


   
export default class DateTime extends Component {
    
    
    timeZone(timezone) {
      //destination timezone offset, Bangkok = +7
      const destOffset = timezone/360; 
  
     const today = new Date();  
      const localoffset = -(today.getTimezoneOffset()/60);    
      const offset = destOffset-localoffset;
      const dt = new Date( new Date().getTime() + offset * 3600 * 1000)
      return dt;
   }
  
   render() {
       const timezone = this.timeZone();   
      return (
        <div className = "timeZone">    
          
  <p>{timezone.getDate()}/{timezone.getMonth()}/{timezone.getFullYear()}</p>
  <p>{timezone.getHours()}:{timezone.getMinutes()}:{timezone.getSeconds()}</p>
        </div>
      );
    }
  
  }