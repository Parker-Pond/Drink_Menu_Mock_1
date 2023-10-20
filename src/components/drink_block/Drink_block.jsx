import { useEffect, useState } from "react";
import { BASEURL } from "../api";
import "./drink_block.css";

export default function Drink_block() {
  const [coke, setCoke] = useState([]);
  const [mtwDew, setMtwDew] = useState([]);
  const [drP, setDrP] = useState([]);
  const [redbull, setRedbull] = useState([]);

  //? this is kind of ugly i need to figure out what i was doing wrong to get around this archaic method to fill my useState containers.
  const cokeDrinks = [];
  const dewDrinks = [];
  const drPDrinks = [];
  const bullDrinks = [];

    const practiceInfo = ["drink 1","drink 1","drink 1","drink 1",]

  function setState() {
    console.log("setState fired");
    setCoke(cokeDrinks);
    setMtwDew(dewDrinks);
    setDrP(drPDrinks);
    setRedbull(bullDrinks);
  }

  
    async function getAllDrinksFromAPI() {
      try {
        const response = await fetch(`${BASEURL}/drinks`);
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
          const selected_drink = data[i];

          if (selected_drink.base == "Coke") {
            cokeDrinks.push(selected_drink);
          }
          if (selected_drink.base == "Mint dew ") {
            dewDrinks.push(selected_drink);
          }
          if (selected_drink.base == "Dr. Pepper ") {
            drPDrinks.push(selected_drink);
          }
          if (selected_drink.base == "RedBull") {
            bullDrinks.push(selected_drink);
          }
        }
        setState()
      } catch (error) {
        console.log("error fetching data from API", error);
      }
    }
    useEffect(()=>{
        getAllDrinksFromAPI()
    },[])
    console.log("logfired", coke.length, mtwDew.length, drP.length, redbull.length);
 

  return (
    <>
      <div className="drink_box">
        <h2 className="drinkTitle">Coke</h2>
        <div className="inner_drink_box">  
          <div className="drink_card_container">
          {coke.length ? (
            coke.map((drink, idx) => {
                return ( 
                <div className="drink_card" key={idx}> 
                  <h4>{drink.drink_name}</h4> 
                  <h5>mixins </h5>
                  <div id="mixin_container">
                  {drink.mixins.length? drink.mixins.map((mixer, idx)=>{
                    return(<p>{mixer},</p>)
                  }):<h3>loding...</h3>}
                </div>
                </div>   
              );
            })
          ) : (
            <h3>Loding...</h3>    
          )}    

          </div>
        </div>
      </div>

      <div className="drink_box">
      <h2 className="drinkTitle">Mountain Dew</h2>
        <div className="inner_drink_box">
          <div className="drink_card_container">
          {mtwDew.length ? (
            mtwDew.map((drink, idx) => {
                return ( 
                <div className="drink_card" key={idx}> 
                  <h4>{drink.drink_name}</h4> 
                  <h5>mixins </h5>
                  <div id="mixin_container">
                  {drink.mixins.length? drink.mixins.map((mixer, idx)=>{
                    return(<p>{mixer},</p>)
                  }):<h3>loding...</h3>}
                </div>
                </div>   
              );
            })
          ) : (
            <h3>Loding...</h3>    
          )}    

          </div>
        </div>
      </div>
 
 
      <div className="drink_box">
      <h2 className="drinkTitle">Dr. Pepper</h2>
        <div className="inner_drink_box"> 
          <div className="drink_card_container">
          {drP.length ? (
            drP.map((drink, idx) => {
                return ( 
                <div className="drink_card" key={idx}> 
                  <h4>{drink.drink_name}</h4> 
                  <h5>mixins </h5>
                  <div id="mixin_container">
                  {drink.mixins.length? drink.mixins.map((mixer, idx)=>{
                    return(<p>{mixer},</p>)
                  }):<h3>loding...</h3>}
                </div>
                </div>   
              );
            })
          ) : (
            <h3>Loding...</h3>    
          )}    

          </div>
        </div>
      </div>

 
      <div className="drink_box">
        <div className="inner_drink_box"> 
          <div className="drink_card_container">
          {redbull.length ? (
            redbull.map((drink, idx) => {
                return ( 
                <div className="drink_card" key={idx}> 
                  <h4>{drink.drink_name}</h4> 
                  <h5>mixins </h5>
                  <div id="mixin_container">
                  {drink.mixins.length? drink.mixins.map((mixer, idx)=>{
                    return(<p>{mixer},</p>)
                  }):<h3>loding...</h3>}
                </div>
                </div>   
              );
            })
          ) : (
            <h3>Loding...</h3>    
          )}    

          </div>
        </div>
      </div>


    </>
  );
}
