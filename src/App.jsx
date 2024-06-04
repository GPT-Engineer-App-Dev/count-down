import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import { Box, Flex, Button } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box as="nav" bg="teal.500" p={4}>
        <Flex justify="space-between">
          <Button as={Link} to="/" colorScheme="teal" variant="ghost">
            Home
          </Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="ghost">
            About
          </Button>
        </Flex>
      </Box>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
