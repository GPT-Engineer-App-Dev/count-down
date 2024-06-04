import { Container, VStack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">About the Author</Text>
        <Text fontSize="lg">This is a brief description about the author. You can add more details here.</Text>
      </VStack>
    </Container>
  );
};

export default About;
