import {
  Box,
  HStack,
  Image,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";

const Footer = () => {
  return (
    <Box bg="darkBlue" mt={40} pt={24} py={20}>
      <CustomContainer>
        <VStack alignItems={"flex-start"} gap={0}>
          <Image
            alt="Logo"
            borderRadius={"16px"}
            src="/images/svgs/footer-logo.svg"
            w="100%"
          />
          <HStack
            alignItems="center"
            color={"offWhite"}
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
              <Text>Lorem</Text>
              <Text>Lorem</Text>
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
