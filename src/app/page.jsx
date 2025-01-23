"use client";

import React from "react";
import Link from "next/link";
import { Button, Divider, Flex, Row, Col } from "antd";
import { Typography } from "antd";
import Image from "next/image";

const { Title } = Typography;

export default function Home() {
  return (
    <div>
      <Flex justify="center">
        <Title level={1}>Bem Garota !</Title>
      </Flex>

      <Flex justify="center">
        <Image
          src="/logo.png"
          alt="Logo marca"
          width={150}
          height={150}
          style={{
            border: "2px radius",
            borderRadius: "8px",
            marginRight: "10px",
          }} 
        />
      </Flex>

      <Divider>
        <a>By Gabrielle Brogio</a>
      </Divider>

      <Row justify="center">
        <Col>
          <Link href="/masculino" passHref>
            <Button color="purple" variant="outlined">
              Masculino
            </Button>
          </Link>
        </Col>
        <Col>
          <Link href="/feminino" passHref>
            <Button color="purple" variant="outlined">
              Feminino
            </Button>
          </Link>
        </Col>
      </Row>

      <Divider />

      <Divider />
    </div>
  );
}
