"use client";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import Clock from "../../ui/Clock/Clock";
import CustomContainer from "../../ui/Container/Container";

const Footer = () => {
  return (
    <Box
      bg="darkBlueCustom"
      mt={{ base: 20, md: 40 }}
      pt={{ base: 12, md: 20 }}
      pb={{ base: 8, md: 12 }}
    >
      <CustomContainer>
        <VStack gap={0} w="full">
          {/* Main content */}
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: 10, md: 0 }}
            w="full"
          >
            {/* Left — logo + clocks */}
            <GridItem>
              <VStack alignItems="flex-start" gap={8}>
                <Link href="/">
                  <Image
                    alt="Innovative Foxes"
                    h={{ base: "52px", md: "70px" }}
                    src="/images/png/footer-logo.png"
                    w="auto"
                  />
                </Link>
                <VStack alignItems="flex-start" gap={1} color="offWhite" opacity={0.7}>
                  <Text fontSize="xs" letterSpacing="wider" textTransform="uppercase" opacity={0.5} mb={1}>
                    Local time
                  </Text>
                  <Text fontSize="sm">
                    Vancouver&ensp;→&ensp;<Clock timezone="US/Pacific" />
                  </Text>
                  <Text fontSize="sm">
                    Montreal&ensp;→&ensp;<Clock timezone="America/Montreal" />
                  </Text>
                </VStack>
              </VStack>
            </GridItem>
            {/* Right — email CTA */}
            <GridItem display="flex" alignItems={{ base: "flex-start", md: "flex-end" }} flexDirection="column">
              <VStack alignItems={{ base: "flex-start", md: "flex-end" }} gap={3}>
                <Text
                  color="offWhite"
                  fontSize="xs"
                  letterSpacing="wider"
                  opacity={0.5}
                  textTransform="uppercase"
                >
                  Say hello
                </Text>
                <Link
                  _hover={{ color: "white", textDecoration: "none", letterSpacing: "0.02em" }}
                  color="orangeCustom"
                  fontSize="lg"
                  fontWeight="medium"
                  href="mailto:hello@innovativefoxes.com"
                  target="_blank"
                  transition="all 0.2s ease"
                >
                  hello@innovativefoxes.com
                </Link>
              </VStack>
            </GridItem>
          </Grid>
          <Separator borderColor="whiteAlpha.100" mt="10" />
          {/* Bottom bar */}
          <HStack
            alignItems="center"
            color="offWhite"
            flexWrap="wrap"
            fontSize="xs"
            gap={4}
            justifyContent={{ base: "flex-start", md: "space-between" }}
            mt={{base: 0, md: 4}}
            opacity={0.4}
            w="full"
          >
            <Text letterSpacing="wide">© {new Date().getFullYear()} Innovative Foxes</Text>
            <HStack gap={4}>
              <Link _hover={{ opacity: 1, textDecoration: "underline" }} href="/privacy" target="_blank">
                Privacy
              </Link>
              <Separator height="3" orientation="vertical" />
              <Link _hover={{ opacity: 1, textDecoration: "underline" }} href="/terms" target="_blank">
                Terms
              </Link>
            </HStack>
          </HStack>
        </VStack>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
