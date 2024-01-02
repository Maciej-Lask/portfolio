
import { Container } from 'react-bootstrap';
import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className={styles.homePage}>
    <Container>

    <h1 className="text-center m-0 p-3">Home Page</h1>
    <p>This is the Home Page</p>
    <p>And this is some more text</p>
    <p>And this is even more text</p>
    <p>And this is even more text</p>
    <p>And this is even more text</p>

    </Container>
  </div>
);

export default HomePage;
