import { Box, useColorModePreference, Flex } from "@chakra-ui/react";
import { RandomGif, Tag } from "./hooks";

export default function Card({ isTag }) {
  return (
    <>
      <Flex direction="column">
        <Box
          bg={useColorModePreference("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {isTag ? <Tag /> : <RandomGif />}
        </Box>
      </Flex>
    </>
  );
}
