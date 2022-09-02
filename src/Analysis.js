import Select from "react-select";
import React, {useMemo, useState } from "react";
import countryList from "react-select-country-list";
import Background from './Background.js';
import Item from "./Item.js";
import './Pages.css';

function Analysis(){
    const [value, setValue] = useState('')
    const [bestCrop, setCrop] = useState('')
    const options = useMemo(() => countryList().getData(),[])
    const changeHandler = (value) => {
        setValue(value)
        console.log(value)
    }
    return (
        <Background>
            <div id = "page" className="Analysis">
                <div className="Row1">
                    <h1 className="CountryText">
                        Select a country:    
                    </h1>
                    <Select className = "CountrySelector" options={options} value ={value} onChange = {changeHandler}/>
                </div>
                <div className="Board">
                    <div className="Row2">
                        <Item key={value} country={value} ></Item>
                    </div>
                    <div className="Row3">
                        The best crop is: {bestCrop}
                    </div>
                </div>
            </div>
        </Background>
    );
}
export default Analysis