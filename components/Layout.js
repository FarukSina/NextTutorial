import classes from "../styles/Layout.module.css"
import Nav from "./Nav"
import Header from "./Header"
const Layout = ({children}) => {
    return (
        <>
        <Nav/>
        <div className={classes.container}>
            <main className={classes.main}>
                <Header/>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
