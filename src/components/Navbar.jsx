import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>£Cat Converters</h1>
            <div className="links">
               <Link to="/">Home</Link>
               <a href="/create">Basket</a>
            </div>
        </nav>
     );
}
 
export default Navbar;