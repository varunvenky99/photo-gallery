import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../style/index.scss'
import layoutStyles from'./layout.module.scss'
const Layout = (props) => {
    return(
     <main className={layoutStyles.gridParent}>
        <section className={layoutStyles.sidebar}>
        <Header/>
        
            </section>
        
            <aside className={layoutStyles.main}>
            {props.children}
            </aside>
        
    </main>
    )
}
export default Layout