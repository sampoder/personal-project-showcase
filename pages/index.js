import Head from "next/head";
import {
  Box,
  Center,
  SimpleGrid,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      {
         <Nav />
      }
      <Center
        height="40vh"
        p={["10px 10px", "10px 50px", "10px 50px"]}
        bg="#26a0db"
        color="white"
        justifyContent="left"
        className="header"
      >
        <Box textAlign="left">
          <Heading fontSize={["12vw", "4vw", "4vw"]} fontWeight="500">
            We're making
          </Heading>
          <Heading fontSize={["16vw", "7vw", "7vw"]} textTransform="uppercase">
            the future
          </Heading>
        </Box>
      </Center>
      <Box p={["10px 10px", "10px 50px", "10px 50px"]}>Every year, students in Greade</Box>
      <style>{`
      
        .header{
          background-color: #000;
          background-image: url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233189b4' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      
      `}</style>
    </div>
  );
}
