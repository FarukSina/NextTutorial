import classes from "../styles/Header.module.css"
const Header = () => {
    return (
        <div>
            <h1 className={classes.title}><span>NextJS</span> News</h1>
            <p className={classes.description}>Keep up to date with the lates next js news</p>
        </div>
    )
}

export default Header
