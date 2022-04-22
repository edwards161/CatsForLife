import {Link} from 'react-router-dom'
import BasketModal from './Basket'

const Navbar = ({list,addToList}) => {
    return ( 
        <nav className="navbar">
            <h1>£Cat Converters</h1>
            <div className="links">

               <Link to="/">Home</Link>
               <BasketModal list={list} addToList={addToList}/>
            </div>
        </nav>
     );
}



export default Navbar;