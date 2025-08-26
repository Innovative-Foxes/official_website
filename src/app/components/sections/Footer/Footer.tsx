"use client";
import {
  Box,
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
      bg="darkBlue"
      mt={{ base: 20, md: 40 }}
      pt={{ base: 12, md: 24 }}
      py={{ base: 12, md: 20 }}
    >
      <CustomContainer>
        <VStack alignItems={{ base: "center", md: "flex-start" }} gap={0}>
          <Image
            alt="Logo"
            borderRadius={"16px"}
            maxW={{ base: "200px", md: "none" }}
            src="/images/svgs/footer-logo.svg"
            w="100%"
          />
          <VStack
            alignItems="center"
            color={"offWhite"}
            display={{ base: "flex", md: "none" }}
            gap={{ base: 6, lg: 16 }}
            my={{ base: 12, md: 20 }}
            w="full"
          >
            <Box textAlign="center">
              <Text fontSize={{ base: "sm", md: "md" }}>
                © Innovative Foxes
              </Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize={"sm"}>
                Vancouver → <Clock timezone="US/Pacific" />
              </Text>
              <Text fontSize={"sm"}>
                Montreal → <Clock timezone="America/Montreal" />
              </Text>
            </Box>
            <Box textAlign="center">
              <Link
                _hover={{ textDecoration: "underline" }}
                color="orange"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="medium"
                href="mailto:hello@innovativefoxes.com"
              >
                hello@innovativefoxes.com
              </Link>
            </Box>
          </VStack>
          <HStack
            alignItems="center"
            color={"offWhite"}
            display={{ base: "none", md: "flex" }}
            gap={{ base: 8, lg: 16 }}
            justifyContent={"space-between"}
            my={20}
            position="relative"
            w="full"
          >
            <Box>
              <Text>© Innovative Foxes</Text>
            </Box>
            <Box
              left="50%"
              position="absolute"
              textAlign="center"
              transform="translateX(-50%)"
            >
              <Text>
                Vancouver → <Clock timezone="US/Pacific" />
              </Text>
              <Text>
                Montreal → <Clock timezone="America/Montreal" />
              </Text>
            </Box>
            <Box>
              <Link
                _hover={{ textDecoration: "underline" }}
                color="orange"
                fontWeight="medium"
                href="mailto:hello@innovativefoxes.com"
              >
                hello@innovativefoxes.com
              </Link>
            </Box>
          </HStack>
          <HStack
            alignItems={"center"}
            color={"offWhite"}
            fontSize={"sm"}
            gap={4}
            justifyContent={"center"}
            mt={6}
            w="full"
          >
            <Link href="/privacy">Privacy</Link>
            <Separator height="4" orientation="vertical" />
            <Link href="/terms">Terms</Link>
          </HStack>
        </VStack>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
