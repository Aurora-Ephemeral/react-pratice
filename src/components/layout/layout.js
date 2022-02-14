import Navbar from "./navbar";
import classes from "./layout.module.css"

function Layout(props){
    return <div>
            <Navbar />
                <main className={classes.main}>
                    {props.children}
                </main>
            </div>
    }

export default Layout;