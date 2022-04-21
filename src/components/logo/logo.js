import logoSVG from "./logo.svg";
import classes from "./logo.module.css"

function Logo(props) {
    return (
        <div className={classes['container']}>
            <img src={logoSVG} className={classes['image']} alt="logo" />
            <div className={classes['text']}>
                <div className={classes['name']}>Groceyish</div>
                <div className={classes['tagline']}>Grocery</div>
            </div>
        </div>
    );
}

export default Logo;