import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink
                    to="/profile"
                    className={(nav) => (nav.isActive ? s.active : s.nav__item)}
                >
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/dialogs"
                    className={(nav) => (nav.isActive ? s.active : s.nav__item)}
                >
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/news"
                    className={(nav) => (nav.isActive ? s.active : s.nav__item)}
                >
                    News
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/music"
                    className={(nav) => (nav.isActive ? s.active : s.nav__item)}
                >
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/settings"
                    className={(nav) => (nav.isActive ? s.active : s.nav__item)}
                >
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
