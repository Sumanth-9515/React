import "./Apipage.css"
import Footer from "./Footer"
import Nav from "./nav"
import { products } from './Products'
function App() {
    // console.log(products)

    function mapping(value, index) {
        return (
            <>
                <div className="card">
                    <h2 >{value.id}</h2>
                    <div className="card-image">
                        <img src={value.image} alt="" />
                    </div>
                    <div className="card-content">
                        <h1>{value.title}</h1>
                        <p>{value.description}</p>
                        <b>{value.price}</b>
                        <p className="category">{value.category}</p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>  
        <Nav/>
        <div className="card-container">
                {products.map(mapping)}
        </div>
        <Footer/>




        </>
    )
}

export default App