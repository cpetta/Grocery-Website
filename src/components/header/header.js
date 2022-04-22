import Logo from "../logo/logo.js";
import Search from "../search/search.js";
import Wishlist from "../wishlist/wishlist.js";

import classes from "./header.module.css";

function Header(props) {
    return (
        <header>
            <Logo />
            <Search />
            <Wishlist />
        </header>
    );
}

export default Header;