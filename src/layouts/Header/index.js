import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux'
import '../style.css';
import '../js.js';
import { Button } from './Button'

import { MenuItems } from "./itensMenu";

import LogoutService from '../../services/logout.service'

class Header extends Component {

 
    length = () => {
        const length = useSelector(state => state.cart.length)
    }


    state = { clicked:false };

    handleClick = () => {
        this.setState({ clicked:!this.state.clicked })
    }

    render() {
        
        //const length = useSelector(state => state.length)

    return(
        

        <nav className="NavbarItems">

            <h1 className="navbar-logo"> Reac</h1>

            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times': 'fas ' +
                    'fa-bars' }></i>
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' :
                'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}

                            </a>
                            
                        </li>
                    );
                })}


            </ul>

           <Button>Logar</Button>

           <a className="nav-item" href="/cart">
            <i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
                <span className="fa-counter" >{length}</span>
               
             
            </i>
           </a>
        </nav>

    );

    }
}
export default Header;

