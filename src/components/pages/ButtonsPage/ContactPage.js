import styles from './ContactPage.module.scss';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const variant = 'dark';
const borderColor = 'light';
const ContactPage = () => (
  <div className={styles.contactPage}>
    <Container>
      <h1 className="text-center m-0 p-3">My contact info</h1>
      <Row>
        <Col className="p-0">
          <Card
            className={styles.card}
            border={borderColor}
            bg={variant}
            key={variant}
            text="white"
          >
            <Card.Header>Phone</Card.Header>
            <Card.Body>
              <FontAwesomeIcon className={`${styles.links}`} icon={faPhone} />
              <Card.Text>+48 510 706 003</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0">
          <Card
            className={styles.card}
            border={borderColor}
            bg={variant}
            key={variant}
            text="white"
          >
            <Card.Header>Email</Card.Header>
            <Card.Body>
              <FontAwesomeIcon className={styles.links} icon={faEnvelope} />
              <Card.Text>maciek30088@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0">
          <Card
            className={styles.card}
            border={borderColor}
            bg={variant}
            key={variant}
            text="white"
          >
            <Card.Header>My socials</Card.Header>
            <Card.Body>
              <Card.Text>
                Github:
                <Card.Link
                  className={styles.links}
                  href="https://github.com/Maciej-Lask"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Card.Link>
              </Card.Text>
              <Card.Text>
                LinkedIn:
                <Card.Link
                  className={styles.links}
                  href="https://www.linkedin.com/in/maciej-lask/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContactPage;
