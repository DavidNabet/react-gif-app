import { Header, Card } from "./components";
import { Container, Flex } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Header />
      <Container maxW={"7xl"}>
        <Flex justify="space-between">
          <Card />
          <Card isTag />
        </Flex>
      </Container>
    </>
  );
}

export default App;
