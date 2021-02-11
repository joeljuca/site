import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const Welcome = ({ children, ...props }) => (
  <div className="Welcome" {...props}>
    <Container>
      <Row>
        <Col
          className="align-y-center"
          xs={{ span: 8, offset: 2 }}
          sm={{ span: 4, offset: 1 }}
          xl={{ span: 3, offset: 3 }}
        >
          <div className="mb-4 ">
            <picture>
              <source
                srcSet="https://www.gravatar.com/avatar/acfa202cc869d143b760cff76659cb64?s=360"
                media="(max-width: 575px)"
              />
              <source
                srcSet="https://www.gravatar.com/avatar/acfa202cc869d143b760cff76659cb64?s=160"
                media="(max-width: 767px)"
              />
              <source
                srcSet="https://www.gravatar.com/avatar/acfa202cc869d143b760cff76659cb64?s=240"
                media="(max-width: 991px)"
              />
              <img
                src="https://www.gravatar.com/avatar/acfa202cc869d143b760cff76659cb64?s=320"
                alt="Profile photo of Joel Jucá"
                title="Joel Jucá"
                className="Welcome-photo border rounded-circle shadow"
                style={{ width: "100%" }}
              />
            </picture>
          </div>
        </Col>
        <Col
          className="align-y-center"
          xs={{ span: 8, offset: 2 }}
          sm={{ span: 6, offset: 0 }}
          xl={{ span: 4, offset: 0 }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  </div>
);
