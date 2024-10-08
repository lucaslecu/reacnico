import CartWitget from "./CartWitget"
import "./navbar.scss"

const NavBar = () =>{

    return(
        <nav className="navbar">
        <div className="brand">
        <h2>Nicoleshop</h2>
        </div>
          <ul>
              <li>electrodomesticos</li>
              <li>juguetes</li>
              <li>muebles</li>
              

          </ul>
        <CartWitget/>
       

      </nav>
    )
}
export default NavBar