"use client";

import React from "react";
import Link from "next/link";
import { Button, Divider, Flex} from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <div>
      <Flex justify="center">
      <Title level={1}>Bem Garota !</Title>
      </Flex>
      <Divider>
      <a>By Gabrielle Brogio</a>
     </Divider>   
    
      <Flex justify="center" >
      <Link href="/feminino" passHref>
        <Button color="violet" variant="outlined"> Feminino</Button>
      </Link>
      </Flex>
      
      <Flex justify="center">
      <Link href="/masculino" passHref>
        <Button color="purple" variant="outlined">Masculino</Button>
      </Link>
      </Flex>

      <Divider />
    </div>
  );
}