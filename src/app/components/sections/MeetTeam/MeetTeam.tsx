import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";

const MeetTeam = () => {
  const specialties = [
    "Email & Landing Page Development",
    "Marketo Form Styling",
    "Front-end Web Development",
    "Client Relationships",
    "End-to-end Testing",
    "Automation",
  ];

  return (
    <Box bg="white" py={20}>
      <CustomContainer>
        <VStack gap={0} mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={"medium"}
            lineHeight={"shorter"}
            textAlign="center"
            textTransform="uppercase"
          >
            Meet The Team
          </Heading>
        </VStack>

        <Grid
          gap={{ base: 8, lg: 16 }}
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          alignItems="center"
        >
          {/* Left Column - Content */}
          <VStack alignItems="start" gap={6}>
            <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
              Hello 👋
            </Text>

            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
              I'm Ty, the founder of Innovative Foxes.
            </Text>

            <Text fontSize="md" lineHeight="tall" color="gray.700">
              My developer journey first started when a friendly customer
              approached while I was bartending in my early 20's suggesting that
              I give coding a try. From the minute I wrote my first line of
              code, I completely fell in love and have pursued web development
              to it's fullest. I've worked in SaaS & Marketo agencies where I've
              had the pleasure of working with clients such as Meta, Amazon,
              Twilio, and S&P Global, building cutting edge Marketo email &
              landing page templates.
            </Text>

            <Text fontSize="md" lineHeight="tall" color="gray.700">
              Today I bring all my experience to Innovative Foxes for you. While
              it may sound like a grand establishment, it's entirely run by me
              working alongside talented Marketo developers and designers I've
              come to know along the way. I prioritize quality over quantity,
              which is why at Innovative Foxes we ensure each team member
              collaborates with only one client at a time, ensuring you receive
              dedicated attention and top-tier Marketo solutions at a
              comfortable rate delivered on time.
            </Text>

            <Text fontSize="md" lineHeight="tall" color="gray.700">
              Moreover, I deeply value building long-term relationships with my
              clients, fostering a partnership that grows and evolves over time.
              I look forward to collaborating with you and I truly believe we
              can do some great things together!
            </Text>
          </VStack>

          {/* Right Column - Image and Specialties */}
          <VStack alignItems="start" gap={8}>
            {/* Placeholder Image */}
            <Box
              bg="gray.200"
              borderRadius="lg"
              height={{ base: "300px", md: "400px" }}
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.500" fontSize="lg">
                Image Placeholder
              </Text>
            </Box>

            {/* Specialties */}
            <VStack alignItems="start" gap={4} width="100%">
              <Text fontSize="lg" fontWeight="bold">
                Specialties
              </Text>
              <VStack alignItems="start" gap={3} width="100%">
                {specialties.map((specialty, index) => (
                  <HStack key={index} alignItems="center" gap={3}>
                    <Image
                      alt="Check mark"
                      src="/images/svgs/check-orange.svg"
                      width="18px"
                      height="18px"
                    />
                    <Text fontSize="md">{specialty}</Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </VStack>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default MeetTeam;
