// products
import one from"../assets/images/One.jpeg"
import two from"../assets/images/Two.jpeg"
import three from"../assets/images/Three.jpg"
function Products(){
    return(
      <div className="products">
        <div className="Box1">
        <img className="Img1" src={one} alt="Perfume"></img>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, vitae. Expedita eos vero dolores eaque optio nulla mollitia non dolore consequatur, harum repellendus voluptas sit qui! Fugit sint nesciunt officia?</p>
      </div>
    
      <div className="Box1">
      <img className="Img1" src={two}  alt="Perfume"></img>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, vitae. Expedita eos vero dolores eaque optio nulla mollitia non dolore consequatur, harum repellendus voluptas sit qui! Fugit sint nesciunt officia?</p>
    </div>
  
    <div className="Box1">
    <img className="Img1" src={three}  alt="Perfume"></img>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, vitae. Expedita eos vero dolores eaque optio nulla mollitia non dolore consequatur, harum repellendus voluptas sit qui! Fugit sint nesciunt officia?</p>
  </div>
      </div>
      
    )
  }

  export default Products