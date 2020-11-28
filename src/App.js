import React, { useState } from 'react';
import './App.css'; 
import Vehicle from './Vehicle/vehicle';

const App= props=> {
 const [vehicleState, setVehicleState] =useState( 
   {
   vehicles: [
     { VehicleType: "Car", Name: "Altroz", Manufacturer: "Tata", FuelType:"Petrol" },
     { VehicleType: "Car", Name: "Seltos", Manufacturer: "Kia", FuelType:"Diesel" },  
     { VehicleType: "Car", Name: "XUV", Manufacturer: "Mahindra", FuelType:"Diesel" }, 
     { VehicleType: "Car", Name: "Nexon", Manufacturer: "Tata",FuelType:"Electric" },  
     { VehicleType: "Car", Name: "City", Manufacturer: "Honda",FuelType:"Electric" },
     ],  
      Count:6, 
     showVehicles: true, 
     showVehiclesLabel:"Hide Vehicles"
   } 
  );  
  //reference type 

const addVehicleHandler = () => {  
  const vehicleList=[...vehicleState.vehicles]; 
  const newVehicle= { VehicleType: "Car", Name: "XUV", Manufacturer: "Mahindra", FuelType:"Diesel" } 
  vehicleList.push(newVehicle);
     setVehicleState({
       vehicles:vehicleState,
      Count:vehicleState.Count +1 ,
      showVehicles: vehicleState.showVehicles, 
     showVehiclesLabel:vehicleState.showVehiclesLabel
       });  
     }   
     const deletevehicleHandler = (vehicleIndex)=> { 
       const vehicleList=[...vehicleState.vehicles]; 
       vehicleList.splice(vehicleIndex-1); 
       setVehicleState({
         vehicles:vehicleState,
        Count:vehicleState.Count +1 ,
        showVehicles: vehicleState.showVehicles, 
       showVehiclesLabel:vehicleState.showVehiclesLabel
         });  
     }
     const toggleVehicleListHandler =() => { 
   let toggleVehicle= !vehicleState.showVehicles; 
   let label =""; 
    if(toggleVehicle){ 
     label ="Hide Vehicles";
     }  else { 
label ="Show Vehicles"; 
}   
  setVehicleState({ 
   Vehicles: vehicleState.showVehicles,  
   Count:vehicleState.Count,  
   showVehicles:toggleVehicle,
 showVehiclesLabel:label
});
  }
  let vehicleList=null; 
  if (vehicleState.showVehicles) { 
    vehicleList= (<div className="row">  
    { 
    vehicleState.vehicles.map((vehicleItem,index) => {  
      return <Vehicle  
      VehicleType={ vehicleItem.VehicleType} 
      Name={ vehicleItem.Name}  
      Manufacturer={vehicleItem.Manufacturer}  
      FuelType={vehicleItem.FuelType}  
      onDelete={deletevehicleHandler.bind (this,index)}
       /> 
        })  
        }
      </div>    
     );}
    return (  
  <div className="App cotainer-fluid" >   
    <div className="row"> 
   <div className="col-lg-6">
  <h1> Vehicles List | Total Vehicles: {vehicleState.Count}</h1> 
  </div>  
  <div className="col-leg-6 divButton">
   <button className="btn btn-primary btn-lrg buttonDiv buttonUpdate" onClick={addVehicleHandler}>Add Vehicle</button>  
   <button className="btn btn-secondry btn-lrg buttonDiv buttonUpdate" onClick={toggleVehicleListHandler}>{vehicleState.showVehiclesLabel}</button> 
   </div>   
   </div>  
   {vehicleList}        
   
    </div> 
   );
  } 
export default App;  