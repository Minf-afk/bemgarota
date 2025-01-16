"use client";
import React from "react";
import { Button, Typography, Row, Col } from "antd";
import Image from "next/image";


const { Title } = Typography;

export default function Feminino() {
  return (
    <div>
      <Row justify="center">
        <Col>
          <Title level={1}>Feminino</Title>
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col>
          <Image  
            src="/vestido-rosa.jpg"
            alt="Vestido Rosa"
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
            src="/vestido-verde.webp"
            alt="Vestido Azul"
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
            src="/vestido-branco.webp"
            alt="Vestido Azul"
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