import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Topbar } from "./topbar";

const menu = [
  ["GitHub", { href: "https://github.com/joeljuca" }],
  ["LinkedIn", { href: "https://www.linkedin.com/in/joeljuca/" }],
  ["Contact", { href: "mailto:joelwallis@gmail.com" }],
];

export const Heading = ({ children, ...props }) => (
  <div className="Heading">
    <header>
      <Container>
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <Topbar menu={menu} />
          </Col>
        </Row>
      </Container>
    </header>

    {children}
  </div>
);
