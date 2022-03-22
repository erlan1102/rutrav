import React from 'react';
import FirstScreen from "./First-screen/First-screen";
import SecondScreen from "./SecondScreen/SecondScreen";
import ThirdScreen from "./ThirdScreen/ThirdScreen";
import FourthScreen from "./FourthScreen/FourthScreen";
import FifthScreen from "./FifthScreen/FifthScreen";
import SixthScreen from "./SixthScreen/SixthScreen";

const Main = () => {
    return (
        <div className='main'>
            <FirstScreen/>
            <SecondScreen/>
            <ThirdScreen/>
            <FourthScreen/>
            <FifthScreen/>
            <SixthScreen/>
        </div>
    );
};

export default Main;