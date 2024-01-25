
import React, { useMemo } from 'react';
import Cards from './cards';
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const headingStyle = {
  color: "white",
  fontSize: "50px",
  fontWeight: "light",
  textAlign: "center",
  lineHeight: "60px",
};

const Context = React.createContext({
  name: 'Default',
});

const Newnature = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );
  return (
    <>
    <Container fluid id="whatsnewinnature">
      <Row className="py-5 mx-5">
        <Col className="text-white" style={headingStyle}>
          What’s New in Nature
        </Col>
        <p style={{ color: "white" }}>
          Recent updates, immersive stories and relevant explainer articles from
          around The Nature Conservancy.
        </p>
      </Row>
    </Container>
    <Container fluid className="bg-white">
      <div className="d-grid justify-content-center h-100">
      <Cards />
      </div>
    </Container>
    </>
  );
};

export default Newnature;
