import BasketModal from './Basket'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>£Cat Converters</h1>
            <div className="links">
               <p>Home</p>
               <BasketModal />
            </div>
        </nav>
     );
}



export default Navbar;