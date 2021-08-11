import { Input } from "@chakra-ui/react";
import { useState } from "react";
import useGif from "../useGif";
import {
    Box,
    Flex,
    Image,
    useColorModeValue,
    Button,
  } from "@chakra-ui/react";

export default function Tag() {
    const [tag, setTag] = useState("dogs");
    const {gif, fetchGif} = useGif(tag);

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
            <Input placeholder="tag" value={tag} onChange={({target}) => setTag(target.value)} />
            <Flex mt={1} justify="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Random {tag} Gif
              </Box>
            </Flex>
            <Button
              w="full"
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color="white"
              rounded="md"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              onClick={() => fetchGif(tag)}
            >
              Click for new
            </Button>
          </Box>
        </>
    )
}