import { Box, SimpleGrid, Image } from "@chakra-ui/react";

export default function Nav() {
  return (
    <div>
      <Box
        bg="#26a0db"
        p={["10px 10px", "10px 50px", "10px 50px"]}
        color="white"
      >
        <SimpleGrid columns={[1, 2, 2]} spacing={0}>
          <Box fontWeight="bold" fontSize={["4vw", "inherit", "inherit"]}>
            <Image
              src="https://cloud-1ljrsw2oo.vercel.app/0gems_g.png"
              display={["inline-block", "none", "none"]}
              height="5vw"
              verticalAlign="text-top"
              paddingRight="10px"
            />
            MYP Personal Project Showcase 2021
          </Box>
          <Box
            textAlign="right"
            fontWeight="medium"
            display={["none", "block", "block"]}
          >
            GEMS World Academy Singapore
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}
