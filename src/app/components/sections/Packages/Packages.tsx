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
      <Box mt={32} textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight={"medium"}
          lineHeight={"shorter"}
          my={4}
          textTransform="uppercase"
        >
          Our Marketo Landing Page &amp; Email Packages
        </Heading>
      </Box>
      <Grid gap="8" mt={16} templateColumns="repeat(3, 1fr)">
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
          title="Design &amp; Development"
          turnAround="6-10 week"
        />
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
  popular?: boolean;
}

const PackageCard = ({
  benefits,
  bgColor,
  description,
  title,
  turnAround,
  popular = false,
}: PackageCardProps) => {
  return (
    <Card.Root bgColor={bgColor} px={10} py={6}>
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
      <VStack justifyContent={"space-between"} minH={"800px"}>
        <Card.Body gap="2">
          <Text fontSize={"14px"} fontStyle={"italic"}>
            {turnAround} turn around 🚀
          </Text>
          <Box minH={"200px"}>
            <Card.Title fontSize={"xl"} fontWeight={"bold"} my="2">
              {title}
            </Card.Title>
            <Card.Description fontSize={"md"}>{description}</Card.Description>
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
                  <Text fontSize={"md"}>{item}</Text>
                </HStack>
              );
            })}
          </VStack>
        </Card.Body>
        <Card.Footer gap={2} justifyContent="space-between" w={"100%"}>
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
            url="#"
          />
          <HStack>
            <StatusPing />
            <Text fontSize={"md"}>2 slots left</Text>
          </HStack>
        </Card.Footer>
      </VStack>
    </Card.Root>
  );
};

export default Packages;
