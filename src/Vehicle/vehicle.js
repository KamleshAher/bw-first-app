import './vehicle.css';

const vehicle = props => (
    <div className="vehicle col-lg-3">

        <h1> Vehicle: {props.VehicleType}</h1>

        <p onClick={props.updateClick} >Name: {props.Name}</p>
        <p>Manufacturer: {props.Manufacturer}</p>
        <p>Fuel type: {props.Fuel}</p>
        
    </div>
);
export default vehicle;