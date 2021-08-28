import React from 'react'
import {Link} from 'react-router-dom';
import '../Styles/Home.css'

function Home() {
    return (
        
        <div className="homepage" style={{backgroundImage: `url("https://images.immediate.co.uk/production/volatile/sites/2/2019/10/OLI-1119_Healthy-MushroomStroganoff_00429-9d0e131.jpg?webp=true&quality=45&resize=1240%2C826")`}}>
            
            <div className="maintext">
                <h1> GlutenFree Foods</h1>
                <h4>Healthy Delicious Foods</h4>
                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home

