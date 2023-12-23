import { Button } from "components/UI/Button/Button"
import Logo from '../../../assets/Logo.svg'
import './Nav.scss'

 const Nav = () => {
    

    return (
        <nav className="nav" >
            <div className="nav-wrap">
                <a href="#nav" >
                    <img src={Logo} alt="TESTTASK" className="nav-logo" />
                </a>
            <div className="nav-buttons">
                <Button text="Users"  />
                <Button text="Sign Up" />
                
               
            </div>
     </div>
        </nav>
    )
}

export default Nav