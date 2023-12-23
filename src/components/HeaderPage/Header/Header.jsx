import { Button } from "components/UI/Button/Button";
import './Header.scss'


const Header=() => {
    return (
        <header className="header">
            <div className="header-overlay">
                <div className="header-wrap">
                <h1 className="header-title">
                    Test assignment for front-end developer
                </h1>
                <p className="header-text">
                    What defines a good front-end developer is one that has skilled knowledge of HTML,
                    CSS, JS with a vast understanding of User design thinking as they'll be building
                    web interfaces with accessibility in mind.
                    They should also be excited to learn,
                    as the world of Front-End Development keeps evolving.
                </p>
                    <Button text='Sign Up' />
                    </div>
            </div>
        </header>
    )
}

export default Header