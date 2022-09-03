import Select from "react-select";
import React, {useMemo, useState } from "react";
import countryList from "react-select-country-list";
import Background from './Background.js';
import Item from "./Item.js";
import './Pages.css';
import corn from "./images/corn.png"
import sweet_potato from "./images/sweet_potato.png"
import cassava from "./images/cassava.png"
import rice from "./images/rice.png"
import sorghum from "./images/sorghum2.png"
import soybeans from "./images/soybeans.png"
import wheat from "./images/wheat.png"
import yam from "./images/yam.png"
import potato from "./images/potato.png"
import other from "./images/other.png"

function Analysis(){
    const [value, setValue] = useState('')
    const [bestCrop, setCrop] = useState('Other Crops')
    const countries = ['India', 'Pakistan', 'Algeria', 'Brazil', 'Japan', 'Egypt',
    'Angola', 'Mauritius', 'Libya', 'Kazakhstan', 'Madagascar',
    'Mexico', 'Armenia', 'Belarus', 'Canada', 'Australia', 'Argentina',
    'Rwanda', 'Peru', 'Italy', 'Iraq', 'Colombia', 'Chile', 'Turkey',
    'Germany', 'Albania', 'Suriname', 'Cameroon', 'South Africa',
    'Tajikistan', 'Lebanon', 'Thailand', 'Ukraine', 'Indonesia',
    'Botswana', 'Ecuador', 'Ghana', 'Nepal',
    'Central African Republic', 'Uruguay', 'Portugal', 'Hungary',
    'Malawi', 'Dominican Republic', 'Burundi', 'Senegal', 'Sri Lanka',
    'Kenya', 'Guinea', 'Jamaica', 'El Salvador', 'Bangladesh',
    'Eritrea', 'Zimbabwe', 'Denmark', 'Guatemala', 'Zambia',
    'United Kingdom', 'Azerbaijan', 'Bulgaria', 'Latvia', 'Poland',
    'Haiti', 'Niger', 'Netherlands', 'Papua New Guinea', 'Uganda',
    'Honduras', 'Burkina Faso', 'Spain', 'Mali', 'New Zealand',
    'Malaysia', 'Namibia', 'Morocco', 'Switzerland', 'Bahamas',
    'Nicaragua', 'Greece', 'Saudi Arabia', 'Mozambique', 'Belgium',
    'Ireland', 'Tunisia', 'Lesotho', 'Austria', 'Guyana', 'Slovenia',
    'Mauritania', 'Sweden', 'Romania', 'Norway', 'Estonia', 'Croatia',
    'Qatar', 'Lithuania', 'Sudan', 'Finland', 'France', 'Bahrain',
    'Montenegro']
    countries.sort()
    const options =  countries.map((country, index) => {
        return {
           label: country,
           value: country
        }
     })
    const changeHandler = (value) => {
        setValue(value)
        console.log(value)
    }
    var dict = {
        "Corn": [corn,150,150,0,0],
        "Sweet Potato": [sweet_potato,130,130,20,0],
        "Cassava": [cassava,130,130,20,0],
        "Rice": [rice,180,180,0,0],
        "Sorghum": [sorghum,150,150,0,0],
        "Soybeans": [soybeans,140,140,20,0],
        "Wheat":[wheat,120,120,20,0],
        "Yams": [yam,130,130,30,10],
        "Potatos": [potato,100,100,20,20],
        "Other Crops": [other,100,100,20,20]
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
                    <div className="Images">
                        <img src = {corn} alt = "Corn Image" height={60} width= {60} id = "Corn"></img>
                        <img src = {sweet_potato} alt = "Sweet Potato Image" height={45} width= {45} id = "Sweet_Potato"></img>
                        <img src = {cassava} alt = "Cassava Image" height={55} width= {55} id = "Cassava"></img>
                        <img src = {rice} alt = "Rice Image" height={80} width= {80} id = "Rice"></img>
                        <img src = {sorghum} alt = "Sorghum Image" height={60} width= {60} id = "Sorghum"></img> 
                        <img src = {soybeans} alt = "Soybeans Image" height={45} width= {45} id = "Soybean"></img>
                        <img src = {wheat} alt = "Wheat Image" height={45} width= {45} id = "Wheat"></img>
                        <img src = {yam} alt = "Yam Image" height={45} width= {45} id = "Yam"></img>
                        <img src = {potato} alt = "Potato Image" height={40} width= {40} id = "Potato"></img>
                        <img src = {other} alt = "Other Plant Image" height={45} width= {45} id = "Other"></img>
                    </div>
                    <div className="Row3">
                        <h1 id="BestCrop" style={{marginRight:dict[bestCrop][3]}}>IntelliFarm Reccomends Planting {bestCrop} </h1> 
                        <img src = {dict[bestCrop][0]} alt = "Best Crop" height={dict[bestCrop][1]} width={dict[bestCrop][2]}
                        style={{marginTop:dict[bestCrop][4]}}></img>
                    </div>
                </div>
                
            </div>
        </Background>
    );
}
export default Analysis