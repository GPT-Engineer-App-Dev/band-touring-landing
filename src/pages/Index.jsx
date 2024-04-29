import { Box, Flex, Heading, Text, Button, Image, Input, Textarea, VStack, HStack } from '@chakra-ui/react';
import { FaMapMarkedAlt, FaEnvelope, FaCameraRetro } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" p={5}>
        <Heading as="h1" size="2xl" mb={4}>The Rockers</Heading>
        <Text fontSize="xl" mb={6}>Join us on our world tour!</Text>
        <Image src="/images/band.jpg" alt="The Rockers Band" boxSize="400px" borderRadius="md" mb={4} />
        
        <VStack spacing={4} align="stretch" mb={6}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="lg" mb={2}><FaMapMarkedAlt /> Tour Dates</Heading>
            <Text>City A - Date A</Text>
            <Text>City B - Date B</Text>
            <Text>City C - Date C</Text>
          </Box>
          
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="lg" mb={2}>Biography</Heading>
            <Text>The Rockers have been electrifying audiences worldwide with their stunning rock performances since 1999.</Text>
          </Box>
          
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="lg" mb={2}><FaCameraRetro /> Photo Gallery</Heading>
            <HStack spacing={4}>
              <Image src="/images/photo1.jpg" alt="Concert Photo" boxSize="120px" borderRadius="md" />
              <Image src="/images/photo2.jpg" alt="Band Photo" boxSize="120px" borderRadius="md" />
              <Image src="/images/photo3.jpg" alt="Event Photo" boxSize="120px" borderRadius="md" />
            </HStack>
          </Box>
          
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="lg" mb={2}><FaEnvelope /> Contact Us</Heading>
            <VStack spacing={3}>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button colorScheme="blue">Send Message</Button>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;