import { lazy, Suspense } from "react";
import { Box, useColorModePreference, Flex } from "@chakra-ui/react";
const RandomGif = lazy(() => import("./RandomGif"));
const Tag = lazy(() => import("./Tag"));

export default function Card({ isTag }) {
  return (
    <Suspense fallback={<div>loading...</div>}>
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
    </Suspense>
  );
}
