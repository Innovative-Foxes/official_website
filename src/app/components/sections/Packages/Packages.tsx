import {
  Box,
  Card,
  Grid,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import { FaChevronRight } from "react-icons/fa";
import { PrimaryButton } from "../../ui/Button/Button";
import StatusPing from "../../ui/StatusPing/StatusPing";

const Packages = () => {
  return (
    <CustomContainer>
      <Box id="packages" mt={{ base: 16, md: 32 }} textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "5xl" }}
          fontWeight={"medium"}
          lineHeight={"shorter"}
          my={4}
          textTransform="uppercase"
        >
          Our{" "}
          <Text as="span" color="orange" fontWeight={"semibold"}>
            Marketo
          </Text>{" "}
          Landing Page &amp; Email Packages
        </Heading>
      </Box>
      <Grid
        gap={{ base: "8", md: "8" }}
        mt={16}
        templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      >
        <PackageCard
          benefits={[
            "Landing Page or Email Template",
            "Up to 20 custom modules to fit marketing needs",
            "Easily edit all content on the template",
            "Customize by moving & hiding sections",
            "Fully mobile responsive",
            "Branded custom styled Marketo forms",
            "Training provided on using template",
          ]}
          bgColor="#E4EDF5"
          description="You bring the designs, we bring the development. A fully custom template ready to be used by your marketers right away."
          slot={2}
          title="Development Only"
          turnAround="2-6 week"
        />
        <PackageCard
          popular
          benefits={[
            "Landing Page or Email Template",
            "Branded modern template design with up to 3 revisions",
            "Up to 20 custom modules to fit marketing needs",
            "Easily edit all content on the template",
            "Customize by moving & hiding sections",
            "Fully mobile responsive",
            "Branded custom styled Marketo forms",
            "Training provided on using template",
          ]}
          bgColor="#D7ECFF"
          description="No design? No problem. Our expert designers will create a custom template based on your branding guidelines. Once approved, we’ll turn it into a fully functional, marketer-ready template."
          slot={1}
          title="Design &amp; Development"
          turnAround="6-10 week"
        />
        <Box px={{ base: 4, lg: 0 }} textAlign={{ base: "center", lg: "left" }}>
          <Heading
            as={"h3"}
            fontSize={{ base: "xl", md: "3xl" }}
            lineHeight={"normal"}
          >
            Not sure if these options are the right fit for you?
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} mb={5} mt={2}>
            If your project or vision does not fit into one of these options
            then feel free to schedule a call with us and we will try to find a
            plan that fits better for you.
          </Text>
          <Box m={{ base: "auto", md: "0" }} w="fit-content">
            <PrimaryButton
              fontSize="base"
              icon={
                <Icon h={3}>
                  <FaChevronRight />
                </Icon>
              }
              label={"Book A Call Now"}
              minHeight={45}
              px={24}
              url="https://cal.com/innovativefoxes/intro-call"
            />
          </Box>
        </Box>
      </Grid>
    </CustomContainer>
  );
};

interface PackageCardProps {
  benefits: string[];
  bgColor: string;
  description: string;
  title: string;
  turnAround: string;
  slot: number;
  popular?: boolean;
}

const PackageCard = ({
  benefits,
  bgColor,
  description,
  title,
  turnAround,
  popular = false,
  slot,
}: PackageCardProps) => {
  return (
    <Card.Root bgColor={bgColor} px={{ base: 6, md: 10 }} py={6}>
      {popular && (
        <Box
          bgColor={"orange"}
          borderRadius={"full"}
          color={"offWhite"}
          fontWeight={"medium"}
          m={"auto"}
          mt={"-34px"}
          px={3}
        >
          <Text fontSize={"sm"}>Most Popular</Text>
        </Box>
      )}
      <VStack
        justifyContent={"space-between"}
        minH={{ base: "auto", md: "800px" }}
      >
        <Card.Body gap="2">
          <Text fontSize={"14px"} fontStyle={"italic"} mt={{ base: 4, md: 0 }}>
            {turnAround} turn around 🚀
          </Text>
          <Box minH={{ base: "auto", md: "200px" }}>
            <Card.Title
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={"bold"}
              my="2"
            >
              {title}
            </Card.Title>
            <Card.Description fontSize={"md"} mb={3}>
              {description}
            </Card.Description>
          </Box>
          <Box bg="blue" h="2px" mb={4} minW={"50px"} w={"25%"} />
          <VStack alignItems={"flex-start"}>
            {benefits.map((item: string, idx) => {
              return (
                <HStack key={idx} alignItems={"flex-start"}>
                  <Image
                    alt="Logo"
                    h={4}
                    mt={1}
                    src="/images/svgs/check-orange.svg"
                    w="auto"
                  />
                  <Text fontSize={{ base: "sm", md: "md" }}>{item}</Text>
                </HStack>
              );
            })}
          </VStack>
        </Card.Body>
        <Card.Footer
          alignItems={{ base: "center", md: "flex-end" }}
          flexDirection={{ base: "column", md: "row" }}
          gap={2}
          justifyContent="space-between"
          mt={{ base: 4, md: 0 }}
          w={"100%"}
        >
          <PrimaryButton
            fontSize="base"
            icon={
              <Icon h={3}>
                <FaChevronRight />
              </Icon>
            }
            label={"Get Started"}
            minHeight={40}
            px={24}
            url="https://cal.com/innovativefoxes/intro-call"
          />
          <HStack mt={{ base: 4, md: 0 }}>
            <StatusPing />
            <Text fontSize={{ base: "sm", md: "md" }}>
              {slot} {slot > 1 ? "slots" : "slot"} left
            </Text>
          </HStack>
        </Card.Footer>
      </VStack>
    </Card.Root>
  );
};

export default Packages;
