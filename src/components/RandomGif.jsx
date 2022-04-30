import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import useGif from "../useGif";

export default function RandomGif() {
    const {gif, fetchGif} = useGif();

    return (
        <>
        <Box
            maxW={480}
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="2xl"
          >
            <Image src={gif} alt="Random Gif" roundedTop="lg" objectFit="cover" />
          </Box>
          <Box p={6}>
            <Flex mt={1} justify="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Random Gif
              </Box>
            </Flex>
            <Button
              w="full"
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color="white"
              rounded="md"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              onClick={fetchGif}
            >
              Click for new
            </Button>
          </Box>
        </>
    )
}

