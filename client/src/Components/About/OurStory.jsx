import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../assets/variables/styles";

const OurStory = () => {
  return (
    <Container id="ourStory">
      <h2 style={styles.color.primary}>Our Story</h2>
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

export default OurStory;