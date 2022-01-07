import React from "react";


const Navbar = () => {
    return (
        <div className="container">
         <div className="navbar">
           <div className="logo">
             <img src="images/logo1.png" width="125px" alt="" />
           </div>
           <nav>
             <ul id="MenuItems">
               <li><a href="#">Home</a></li>
               <li><a href="#">Products</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
               <li><a href="#">Account</a></li>
             </ul>
           </nav>
           <img src="images/cart.png" alt="" width="30px" height="30px" />
           <img src="images/menu.png" className="menu-icon" alt="" />
         </div>
       </div>
    )
}

export default Navbar;