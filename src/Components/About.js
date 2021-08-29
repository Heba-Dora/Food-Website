import React from 'react'
import '../Styles/About.css'

function About() {
    return (
        <div className="aboutPage">
            <div className="picSection" 
            style={{backgroundImage: `url("https://media-cdn.tripadvisor.com/media/photo-s/11/54/65/d8/pizza-spinaci-sugo-mozzarella.jpg")` }}>
            
            </div>
            
            <div className="descpart">
                <h1>GlutenFree Diet</h1>
                <p>
                A gluten-free diet (GFD) is a nutritional plan that strictly excludes gluten, 
                which is a mixture of proteins found in wheat (and all of its species and hybrids, 
                such as spelt, kamut, and triticale), as well as barley, rye. 
                Since the beginning of the 21st century, 
                the gluten-free diet has become the most popular fad diet in the United States and other countries.
                Clinicians worldwide have been challenged by an increasing number of people who do not have coeliac disease nor wheat allergy, 
                with digestive or extra-digestive symptoms which improved removing wheat/gluten from the diet. 
                </p>
                
            
            </div>
            
        </div>
    )
}

export default About;


//Paragraph extracted from https://en.wikipedia.org/wiki/Gluten-free_diet
