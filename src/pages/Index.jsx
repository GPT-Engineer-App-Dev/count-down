import { useState } from "react";
import { Container, VStack, Text, Button, HStack } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Counter App</Text>
        <Text fontSize="4xl">{count}</Text>
        <HStack spacing={4}>
          <Button onClick={decrement} leftIcon={<FaMinus />} colorScheme="red">
            Decrement
          </Button>
          <Button onClick={increment} rightIcon={<FaPlus />} colorScheme="green">
            Increment
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
