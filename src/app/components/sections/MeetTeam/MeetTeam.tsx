import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
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
    <Box bg="white" my={40}>
      <CustomContainer>
        <VStack gap={0} mb={24}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={"bold"}
            lineHeight={"shorter"}
            textAlign="center"
            textTransform="uppercase"
          >
            Meet The Team
          </Heading>
        </VStack>

        <HStack
          alignItems="start"
          gap={{ base: 8, lg: 16 }}
          justifyContent={"space-between"}
        >
          {/* Left Column - Content */}
          <VStack
            alignItems="start"
            gap={6}
            maxW={{ base: "100%", lg: "700px" }}
          >
            <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
              Hello 👋
            </Text>

            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
              I&apos;m Ty, the founder of Innovative Foxes.
            </Text>

            <Text color="gray.700" fontSize="lg" lineHeight="tall">
              My developer journey first started when a friendly customer
              approached while I was bartending in my early 20&apos;s suggesting
              that I give coding a try. From the minute I wrote my first line of
              code, I completely fell in love and have pursued web development
              to it&apos;s fullest. I&apos;ve worked in SaaS &amp; Marketo
              agencies where I&apos;ve had the pleasure of working with clients
              such as{" "}
              <Text as="span" fontWeight={"semibold"}>
                Meta, Amazon, Twilio, and S&amp;P Global
              </Text>
              , building cutting edge{" "}
              <Text as="span" fontWeight={"semibold"}>
                Marketo email & landing page templates
              </Text>
              .
            </Text>

            <Text color="gray.700" fontSize="lg" lineHeight="tall">
              Today I bring all my experience to Innovative Foxes for you. While
              it may sound like a grand establishment, it&apos;s entirely run by
              me working alongside talented Marketo developers and designers
              I&apos;ve come to know along the way. I prioritize quality over
              quantity, which is why at Innovative Foxes{" "}
              <Text as="span" fontWeight={"semibold"}>
                we ensure each team member collaborates with only one client at
                a time
              </Text>
              , ensuring you receive dedicated attention and top-tier Marketo
              solutions at a comfortable rate delivered on time.
            </Text>

            <Text color="gray.700" fontSize="lg" lineHeight="tall">
              Moreover, I deeply value building long-term relationships with my
              clients, fostering a partnership that grows and evolves over time.
              I look forward to collaborating with you and I truly believe we
              can do some great things together!
            </Text>
          </VStack>

          <Box minW={{ base: "100%", lg: "fit-content" }}>
            {/* Right Column - Image and Specialties */}
            <VStack alignItems="start" gap={8}>
              <Image
                alt="Logo"
                borderRadius={"16px"}
                maxW={{ base: "100%", lg: "350px" }}
                src="/images/png/meet-team-ty.png"
                w="100%"
              />
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
                        height="18px"
                        src="/images/svgs/check-orange.svg"
                        width="18px"
                      />
                      <Text fontSize="md">{specialty}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </VStack>
          </Box>
        </HStack>
      </CustomContainer>
    </Box>
  );
};

export default MeetTeam;
