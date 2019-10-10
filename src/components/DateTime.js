import React, {Component} from 'react'; 

export default class DateTime extends Component {
    
    
  timeZone(props) {    
     // const destOffset = timezone/60/60;
    const destOffset = this.props.timezone;
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

<p>{timezone.getDate()}/{timezone.getMonth()}/{timezone.getFullYear()}{" "}
{timezone.getHours()}:{timezone.getMinutes()}:{timezone.getSeconds()}</p>

      </div>
    );
  }

} 

  