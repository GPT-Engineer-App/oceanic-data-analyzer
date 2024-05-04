import { Box, Container, Text, VStack, Input, Button, Select, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [analysisType, setAnalysisType] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAnalysisTypeChange = (event) => {
    setAnalysisType(event.target.value);
  };

  const handleSubmit = () => {
    // Placeholder for file processing and analysis
    console.log("File:", file);
    console.log("Analysis Type:", analysisType);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="blue.50">
          <Text fontSize="xl" mb={4}>
            Welcome to DataWiki
          </Text>
          <Text>DataWiki is your go-to solution for all data analysis needs. We help you make sense of your data through powerful, easy-to-use tools and stunning visualizations.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="blue.100">
          <Text fontSize="xl" mb={4}>
            Upload Data
          </Text>
          <Input type="file" onChange={handleFileChange} size="md" mb={4} />
          <Select placeholder="Select analysis type" onChange={handleAnalysisTypeChange} mb={4}>
            <option value="statistical">Statistical Analysis</option>
            <option value="predictive">Predictive Modeling</option>
            <option value="diagnostic">Diagnostic Analysis</option>
          </Select>
          <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleSubmit}>
            Analyze
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTcxNDg1MjExMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Data Visualization" />
      </VStack>
    </Container>
  );
};

export default Index;
