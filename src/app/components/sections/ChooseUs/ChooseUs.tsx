import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";

const ChooseUs = () => {
  return (
    <CustomContainer>
      <Box textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight={"medium"}
          lineHeight={"shorter"}
          my={4}
          textTransform="uppercase"
        >
          Why fast-moving marketing teams choose{" "}
          <Text as="span" color="orange" fontWeight={"semibold"}>
            Innovative Foxes
          </Text>{" "}
          to get the job done
        </Heading>
      </Box>
      <Grid gap="8" mt={16} templateColumns="repeat(3, 1fr)">
        <Content
          description="Elevate your Marketo templates with up to 20 custom modules,
      intuitive show/hide content functionality, fully branded forms, and
      flexible layouts you can rearrange on the fly—all designed to boost
      engagement and drive conversions."
          heading={
            <>
              Built for Marketers. <br /> Engineered to Convert.
            </>
          }
          imgSrc="/images/jpg/toggle-marketers.jpg"
        />
        <Content
          description="Stay informed every step of the way with direct 1:1 Slack access (optional), weekly progress updates, and rapid feedback cycles to keep your project on track and moving fast."
          heading={
            <>
              No guesswork, no delays. <br />
              We keep you informed.
            </>
          }
          imgSrc="/images/jpg/slack-marketers.jpg"
        />
        <Content
          description="From mobile to desktop, your Marketo landing pages never miss. From Outlook to Gmail, your Marketo emails always deliver flawlessly."
          heading={<>Blazing-fast &amp; reliable Marketo-ready templates.</>}
          imgSrc="/images/jpg/marketo-marketers.jpg"
        />
      </Grid>
    </CustomContainer>
  );
};

interface ContentProps {
  imgSrc: string;
  heading: React.ReactNode;
  description: React.ReactNode;
}

const Content = ({ imgSrc, heading, description }: ContentProps) => {
  return (
    <VStack alignItems={"start"}>
      <Image alt="" src={imgSrc} />
      <Heading
        as={"h3"}
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight={"medium"}
        lineHeight={"shorter"}
        mb={2}
        mt={4}
      >
        {heading}
      </Heading>
      <Text fontSize={"md"}>{description}</Text>
    </VStack>
  );
};

export default ChooseUs;
