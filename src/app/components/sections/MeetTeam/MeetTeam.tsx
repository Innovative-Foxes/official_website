import { Box, Heading, VStack } from "@chakra-ui/react";
import Carousel from "../../ui/Swiper/Carousel";
import CustomContainer from "../../ui/Container/Container";

const MeetTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ty",
      greeting: "Hello 👋",
      introduction:
        "I'm Tyrell Curry, the Developer & Founder of Innovative Foxes.",
      description: [
        "My developer journey first started when a friendly customer approached while I was bartending in my early 20's suggesting that I give coding a try. From the minute I wrote my first line of code, I completely fell in love and have pursued web development to it's fullest. I've worked in SaaS & Marketo agencies where I've had the pleasure of working with clients such as Meta, Amazon, Twilio, and S&P Global, building cutting edge Marketo email & landing page templates.",
        "Today I bring all my experience to Innovative Foxes for you. While it may sound like a grand establishment, it's entirely run by me working alongside talented Marketo developers and designers I've come to know along the way. I prioritize quality over quantity, which is why at Innovative Foxes we ensure each team member collaborates with only one client at a time, ensuring you receive dedicated attention and top-tier Marketo solutions at a comfortable rate delivered on time.",
        "Moreover, I deeply value building long-term relationships with my clients, fostering a partnership that grows and evolves over time. I look forward to collaborating with you and I truly believe we can do some great things together!",
      ],
      image: "/images/png/meet-team-ty-sq.png",
      languages: ["English"],
      specialties: [
        "Landing Page Development",
        "Marketo Form Styling",
        "Front-end Web Development",
        "Client Relationships",
        "End-to-end Testing",
        "Automation",
      ],
    },
    {
      id: 2,
      name: "Éric Vaillancourt",
      greeting: "Bonjour 👋",
      introduction:
        "I'm Éric Valiancourt, Senior Email Developer & Graphic Designer.",
      description: [
        "For over a decade, I’ve honed my skills in graphic design and email development. I've mastered the art of creating experiences that not only look great but also perform flawlessly across every device and client. I specialize in platforms such as Marketo, SFMC, and Pardot, helping campaigns reach their full potential.",
        "Along the way, I’ve partnered with hundres of clients and teams such as Air Canada Vacations, Amazon, Bank OZK, HashiCorp, James Hardie, Meta, NYU, S&P Global, Sub-Zero, and many more.",
      ],
      image: "/images/jpg/meet-team-eric.jpeg",
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
    <Box bg="white" my={{ base: 24, md: 40 }}>
      <CustomContainer>
        <VStack gap={0} mb={{ base: 6, md: 10 }}>
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

        <Box>
          <Carousel slideContent={teamMembers} />
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default MeetTeam;
