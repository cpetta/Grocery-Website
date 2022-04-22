import Logo from "../logo/logo.js";
import Search from "../search/search.js";

import classes from "./header.module.css";

function Header(props) {
    return (
        <header>
            <Logo />
            <Search />
        </header>
    );
}

export default Header;