import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Carousel from "../../ui/Swiper/Carousel";
import CustomContainer from "../../ui/Container/Container";

const MeetTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ty",
      greeting: "Hello 👋",
      introduction:
        "I'm Tyrell Curry, Web Developer & Founder of Innovative Foxes.",
      description: [
        "My developer journey first started when a friendly customer approached me while I was bartending in my early 20's suggesting that I give coding a try. From the minute I wrote my first line of code, I completely fell in love and have pursued web development to its fullest. I've worked in SaaS companies & Marketo agencies where I've had the pleasure of working with clients such as Meta, Amazon, Twilio, and S&P Global, building cutting edge Marketo email & landing page templates.",
        "Today I bring all my experience to Innovative Foxes for you. I prioritize quality over quantity, ensuring you receive dedicated attention and top-tier Marketo solutions at a comfortable rate delivered on time.",
        "Moreover, I deeply value building long-term relationships with my clients, fostering a partnership that grows and evolves over time. I look forward to collaborating with you and I truly believe we can do some great things together!",
      ],
      image: "/images/jpg/meet-team-ty.jpg",
      languages: ["English"],
      specialties: [
        "Landing Page Development",
        "Form Styling",
        "Front-end Web Development",
        "Client Relationships",
        "End-to-end Testing",
        "Velocity Scripting",
        "Automation",
      ],
    },
    {
      id: 2,
      name: "Éric Vaillancourt",
      greeting: "Bonjour 👋",
      introduction:
        "I'm Éric Vaillancourt, Senior Email Developer, Graphic Designer & Co-Founder of Innovative Foxes.",
      description: [
        "For over a decade, I’ve honed my skills in graphic design and email development. I've mastered the art of creating experiences that not only look great but also perform flawlessly across every device and client. I specialize in platforms such as Marketo, SFMC, Hubspot, and Pardot, helping campaigns reach their full potential.",
        "Along the way, I’ve partnered with hundres of clients and teams such as Air Canada Vacations, Amazon, Bank OZK, HashiCorp, James Hardie, Meta, NYU, S&P Global, Sub-Zero, and many more.",
      ],
      image: "/images/jpg/meet-team-eric-2.jpeg",
      languages: ["English", "French"],
      specialties: [
        "Email Development",
        "Graphic Design",
        "Client Relationships",
        "Management",
        "End-to-end Testing",
      ],
    },
  ];

  return (
    <Box bg="white" id="meet-the-team" my={{ base: 16, md: 32 }}>
      <CustomContainer>
        <VStack gap={0} mb={{ base: 6, md: 10 }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            textAlign="center"
            textTransform="uppercase"
          >
            Meet The{" "}
            <Text as="span" color="orangeCustom">
              Team
            </Text>
          </Heading>
        </VStack>
        <Box>
          <Carousel slideContent={teamMembers} />
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default MeetTeam;
