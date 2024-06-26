import { useEffect, useState } from "react";
import Light from "./Light";

const duration = [20000, 15000, 5000];   //duration condition  red-->green(20000)   green-->yellow(15000)   yellow-->red(5000)

function TrafficLight({ value }) {
  
  const [trafficColor, setTrafficColor] = useState(value);       //initail value is red color

  useEffect(() => {
 
    let timer;
    timer = setTimeout(() => {                          //timer would help to chnage the color of traffic light after given particular durarion
        setTrafficColor((trafficColor + 1) % 3);
      }, duration[trafficColor]);
      return (() => {
    clearTimeout(timer)                             //cleartimeOut will clear the timer function
})
    
  }, [trafficColor]);

  const handleClick = (color) => {
    setTrafficColor(color);                       //changing the color of the change on click 
  };

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',maxWidth:'100vw',height:'95vh'}}>
      <div style={{fontSize:'20px',fontWeight:600}}>Traffic Lights</div>
      <div style={{height:'400px',width:'150px',background:'#d2d2d2',display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',paddingTop:'10px'}}>
        <Light color={'red'} active={trafficColor===0} /> 
        <Light color={'green'} active={trafficColor===1} />
        <Light color={'yellow'} active={trafficColor===2}/>
      </div>
      <div style={{display:'flex',gap:'10px',marginTop:'20px'}}>
        <button style={{background:'red',color:'#fff',border:'red',padding:'20px 40px',borderRadius:'5px',fontSize:'20px',fontWeight:600,cursor:'pointer'}} onClick={() => handleClick(0)}>Red Button</button>
        <button  style={{background:'green',color:'#fff',border:'green',padding:'20px 40px',borderRadius:'5px',fontSize:'20px',fontWeight:600,cursor:'pointer'}} onClick={() => handleClick(1)}>
          Green Button
        </button>
        <button  style={{background:'yellow',color:'#000',border:'yellow',padding:'20px 40px',borderRadius:'5px',fontSize:'20px',fontWeight:600,cursor:'pointer'}} onClick={() => handleClick(2)}>Yellow Button</button>
      </div>
    </div>
  );
}

export default TrafficLight;