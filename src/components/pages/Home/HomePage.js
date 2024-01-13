// home.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './HomePage.module.scss';
import ContactPage from '../ContactPage/ContactPage';

const HomePage = () => (
  <div className={styles.homePage}>
    <Container>
      <Row>
        <header>
          <h1 className="text-center m-0 p-3">Hi, I'am Maciej</h1>
          <p>Junior Full Stack Developer</p>
        </header>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <h2>About Me</h2>
              <p>
                I am an ambitious Junior Full Stack Developer with a passion for
                creating innovative solutions. My driving force is a constant
                desire for growth and acquiring new skills. My projects are
                characterized by a focus on code quality and meeting user needs.
                Currently I am learning Angular and TailwindCSS.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="col-2">
          <Card>
            <Card.Body>
              <h3>Skills</h3>
              <p>
                HTML | CSS | JavaScript | Node.js | TypeScript | React | Redux |
                Bootstrap | Express | WebSocket | MongoDB | Mongoose | GitHub |
                Jira | MySQL | RWD | NPM | Webpack | NestJS | Prisma | AJAX
              </p>
            </Card.Body>
            <Card.Body>
              <h3>Language Proficiency</h3>
              <ul>
                <li>English - B2</li>
                <li>Polish - Native</li>
              </ul>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <h2>My Projects</h2>
              <Card>
                <Card.Body>
                  <h3>Project 1</h3>
                  <p>Description of project 1.</p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <h3>Project 2</h3>
                  <p>Description of project 2.</p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <h3>Project 3</h3>
                  <p>Description of project 3.</p>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <ContactPage className={styles.contactSection} />
        </Col>
      </Row>
      {/* Add more sections for Projects, Professional Experience, Contact, etc. */}
    </Container>
  </div>
);

export default HomePage;
