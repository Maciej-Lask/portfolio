import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'react-bootstrap';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <Navbar expand="md" className="navbar navbar-dark animated fadeIn">
        <Navbar.Toggle className="ms-auto me-3" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem className={styles.navItem}>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem className={styles.navItem}>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainMenu;
