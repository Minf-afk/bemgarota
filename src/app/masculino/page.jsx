"use client";
import React from "react";
import { Button, Typography, Row, Col } from "antd";
import Image from "next/image";

const { Title } = Typography;

export default function Masculino() {
  return (
    <div>
      <Row justify="center">
        <Col>
          <Title level={1}>Masculino</Title>
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col>
          <Image  
            src="/camisa-azul.jpg"
            alt="Camisa Azul"
            width={250}
            height={250}
          />
          <Row justify="center">
        <Col>
          <Button color="purple" type="primary">Comprar</Button>
        </Col>
      </Row>
        </Col>
        <Col>
          <Image
            src="/camisa-vermelha.jpg"
            alt="Camisa Vermelha"
            width={250}
            height={250}
          />
          <Row justify="center">
        <Col>
          <Button color="purple" type="primary">Comprar</Button>
        </Col>
      </Row>
        </Col>
        <Col>
          <Image
            src="/camisa-branca.jpg"
            alt="Camisa Branca"
            width={250}
            height={250}
          />
          <Row justify="center">
        <Col>
          <Button color="purple" type="primary">Comprar</Button>
        </Col>
      </Row>
        </Col>

      </Row>
    </div>
  );
}