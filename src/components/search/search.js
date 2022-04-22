import searchbtn from "./search_icon.svg";
import classes from "./search.module.css"
//<img src={logoSVG} className={classes['image']} alt="logo" />
function Search(props) {
		return (
				<form>
					<select>
							<option value="">All Categories</option>
					</select>
					<div className={classes["virticalLine"]}></div>
					<input type="search" placeholder="Search for items..."></input>
					<button type="button"><img src={searchbtn} alt=""/></button>
				</form>
		);
}
export default Search;