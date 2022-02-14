import {Link} from 'react-router-dom'
import navstyle from './navbar.module.css'

function Navbar(){
    return <header className={navstyle.header}>
        <div className={navstyle.logo}>React</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetup </Link>
                </li>
                <li>
                    <Link to='/new'>New Meetup </Link>
                </li>
                <li>
                    <Link to='/favorite'>All Meetup </Link>
                </li>
            </ul>
        </nav>

    </header>;
}

export default Navbar;