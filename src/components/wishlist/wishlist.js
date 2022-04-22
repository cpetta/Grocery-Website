import heart from "./heart.svg";
import classes from "./wishlist.module.css"
//<img src={logoSVG} className={classes['image']} alt="logo" />
function Search(props) {
    return (
        <a className={classes["container"]} href="#Wishlist">
            <div className={classes["number"]}>4</div>
            <img className={classes["heart"]} src={heart} alt=""/>
            <div className={classes["text"]}>Wishlist</div>
        </a>
    );
}
export default Search;