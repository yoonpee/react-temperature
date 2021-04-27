import React, { useState } from 'react';

const App = () =>{

    const [tempValue, setTempValue] = useState(0);
    const [tempColor, setTempColor] = useState("cold");

    const btnUpColor = ()=>{
        if(tempValue === 30) return;
        const upNum = tempValue + 1;
        if(upNum >= 15){
            setTempColor("hot")
        }
        setTempValue(upNum);
        
    }
    const btnDownColor = ()=>{
        if(tempValue === 0) return;
        const downNum = tempValue - 1;
        if(downNum < 15){
            setTempColor("cold")
        }
        setTempValue(downNum);
        
    }
    return (
        <div className="container">
            <div className="display-container">
                <div className={`temperature-display  ${tempColor}`}>{tempValue}°C</div>
            </div>
            <div className="button-container">
                <button onClick={()=> btnUpColor()}>+</button>
                <button onClick={()=> btnDownColor()}>-</button>
            </div>
        </div>
    )
}
export default App;

    // const [temperatureValue, setTemperatureValue] = useState(10);
    // const [temperatureColor, setTemperatureColor] = useState("cold")

    // const tempChange = () =>{
    //     if(temperatureValue === 30) return;
    //     const tempIncrease = temperatureValue +1
    //     setTemperatureValue(tempIncrease);

    //     if(tempIncrease >= 15){
    //         setTemperatureColor('hot');
    //     } 
    // }
    // const tempChangeDown = () =>{
    //     if(temperatureValue === 0) return;
    //     const tempDecrease = temperatureValue -1
    //     setTemperatureValue(tempDecrease);

    //     if(tempDecrease < 15){
    //         setTemperatureColor('cold');
    //     } 
    // }
   
    // return (
    //     <div className="app-container">
    //         <div className="temperature-display-container">
    //              <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}℃</div>
    //         </div> 
    //         <div className="button-container">
    //             <button onClick={()=> tempChange()}>+</button>
    //             <button onClick={()=> tempChangeDown()}>-</button>
    //         </div>     
    //     </div>
        
    // )

