import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'


export const NavBar = () => {

    return (
    
    <header className="header">
        <Link to="/"><h1>Logo</h1></Link>


        <nav>
          <ul>
            <li><Link to="/productos/vino">Vino</Link></li>
            <li><Link to="/productos/gin">Gin</Link></li>
            <li><Link to="/productos/whisky">Whisky</Link></li>
            <li><Link to="/productos/otros">Otros</Link></li>
            
          </ul>
          </nav>

    <Link to="cart"><CartWidget/></Link>    
          
    </header>

            )
        }