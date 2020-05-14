import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                    <Link className={headerStyles.title} to='/'>
                 Apoorva Shivaram Photography
                </Link>
                </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.navCurrentItem} to="/">Home</Link>
                    </li>

                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navCurrentItem} to="/about">About</Link>
                    </li>

                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navCurrentItem} to="/pg1">Leaves</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navCurrentItem} to="/pg2">chicago</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navCurrentItem} to="/pg3">turkey</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}
export default Header