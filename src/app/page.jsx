"use client";

import React from "react";
import Link from "next/link";
import { Button, Divider, Flex, Row, Col } from "antd";
import { Typography } from "antd";
import Image from "next/image";
import { InstagramFilled, FacebookFilled } from "@ant-design/icons";

const { Title } = Typography;

export default function Home() {
  return (
    <div>
       <Flex justify="center">
        <Title level={1} style={{ fontFamily: 'Playwright IN, serif' }}>
          Bem Garota !
        </Title>
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
      <footer align="center">
        <InstagramFilled />
        <FacebookFilled />
        
        <Divider>
          <a>By Gabrielle Brogio</a>
        </Divider>
      </footer>
    </div>
  );
}
