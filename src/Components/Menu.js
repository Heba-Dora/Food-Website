import React from 'react'
import dishes from './dishes'
import '../Styles/Menu.css'

function Menu() {
    return (
        <div className="menuList">
            {dishes.map((dish, id)=>{
                return(
                    <div className="dishesList" key={id} >
                        <h4>Price: {dish.price} €</h4>
                        <div className="foodImage" style={{ display: 'flex', flexWrap:'wrap',  position:'relative', width:'50%', gridTemplateRows: 'auto 1fr'}}>{dish.image}</div>
                        <h2 >{dish.name}</h2>
                        <h5>{dish.description}</h5>
                        

                    </div>
                )
            })

            }            
        </div>
    )
}

export default Menu
