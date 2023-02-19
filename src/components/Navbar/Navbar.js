
import './styles.scss';
import CartWidget from '../CartWidget/CartWidget.js';



function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          
          <img src={require('./mountain-logo-.png')} alt="Site logo" height="100px" width="100px" />
          
        </div>

        <ul className="menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          
        </ul>
      </div>

      <div className="right">
        <CartWidget/>
      </div>
    </div>  )
}

export default Navbar;