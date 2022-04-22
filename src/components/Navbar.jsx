import {Link} from 'react-router-dom'
import BasketModal from './Basket'

const Navbar = ({list,removeFromList}) => {
    return ( 
        <nav className="navbar">
            <h1>£Cat Converters</h1>
            <div className="links">

               <Link to="/">Home</Link>
               <BasketModal list={list} removeFromList={removeFromList}/>
            </div>
        </nav>
     );
}



export default Navbar;