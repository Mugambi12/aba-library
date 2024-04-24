import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../assets/variables/styles";

const GeneralAbout = () => {
  return (
    <Container id="about">
      <h1 style={styles.color.primary}>About</h1>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nunc vel aliquam tincidunt, odio neque malesuada lectus,
            ac tincidunt est sapien ac magna. Nulla facilisi. Nulla facilisi.
            Nullam euismod, metus a ultricies lacinia, nunc orci fermentum
            turpis, et lacinia sapien nunc nec erat. Nulla facilisi. Nulla
            facilisi. Nullam euismod, metus a ultricies lacinia, nunc orci
            fermentum turpis, et lacinia sapien nunc nec erat.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralAbout;