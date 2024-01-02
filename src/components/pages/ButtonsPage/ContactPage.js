import styles from './ContactPage.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => (
  <div className={styles.contactPage}>
    <Container>
      <h1 className="text-center m-0 p-3">My contact info</h1>
      <Row>
        <Col>
          <h2>Phone</h2>
          <FontAwesomeIcon className={styles.links} icon={faPhone} />
          <p>+48 510 706 003</p>
        </Col>
        <Col>
          <h2>Email</h2>
          <FontAwesomeIcon className={styles.links} icon={faEnvelope} />
          <p>maciek30088@gmail.com</p>
        </Col>
        <Col>
          <h2>My socials</h2>
          <a className={styles.links} href="https://github.com/Maciej-Lask">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/maciej-lask/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContactPage;
