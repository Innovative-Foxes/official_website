"use client";

import {
  Box,
  CloseButton,
  Flex,
  IconButton,
  Image,
  Link,
  Separator,
  VStack,
} from "@chakra-ui/react";
import { LuArrowRightFromLine, LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import StatusPing from "../StatusPing/StatusPing";

const FixedNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show navbar after scrolling 200px
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 0,
      label: "Why Us",
      href: "#why-us",
    },
    {
      id: 1,
      label: "Our Advantage",
      href: "#our-advantage",
    },
    {
      id: 2,
      label: "Packages",
      href: "#packages",
    },
    {
      id: 3,
      label: "Meet The Team",
      href: "#meet-the-team",
    },
    {
      id: 5,
      label: "Book Intro Call",
      href: "https://cal.com/innovativefoxes/innovative-foxes-introduction",
      isExternal: true,
      hasStatus: true,
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <Box
        display={{ base: "none", md: "block" }}
        width="fit-content"
        margin="auto"
        left={0}
        opacity={isVisible ? 1 : 0}
        pointerEvents={isVisible ? "auto" : "none"}
        position="fixed"
        right={0}
        top={4}
        transition="all 0.3s ease-in-out"
        visibility={isVisible ? "visible" : "hidden"}
        zIndex={1000}
      >
        <Flex
          align="center"
          backdropFilter="blur(10px)"
          backgroundColor="rgba(255, 255, 255, 0.9)"
          bg="white"
          borderColor="gray.300/75"
          borderRadius="full"
          borderWidth="2px"
          boxShadow="lg"
          mx="auto"
          overflow="hidden"
          pl={3}
          w="fit-content"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => setIsNavHovered(false)}
        >
          {/* Logo */}
          <Link
            as="button"
            bg="transparent"
            border="none"
            cursor="pointer"
            flexShrink={0}
            outline="none"
            pr={4}
            transition="padding 0.3s ease-in-out"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              alt="Logo"
              height="40px"
              src="/images/png/hero-logo-v2.png"
              width="auto"
            />
          </Link>
          {/* Expand hint icon — visible when collapsed */}
          <Box
            alignItems="center"
            color="gray.400"
            display="flex"
            maxW={isNavHovered ? "0" : "40px"}
            opacity={isNavHovered ? 0 : 1}
            overflow="hidden"
            pr={isNavHovered ? 0 : 3}
            transition="max-width 0.4s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out"
          >
            <LuArrowRightFromLine size={16} />
          </Box>
          {/* Links — collapse when not hovered */}
          <Box
            display="flex"
            maxW={isNavHovered ? "800px" : "0"}
            opacity={isNavHovered ? 1 : 0}
            overflow="hidden"
            transition="max-width 0.4s ease-in-out, opacity 0.3s ease-in-out"
          >
            {links.map((link, i) => {
              const showSeparator = i !== links.length;
              return (
                <Flex
                  key={link.id}
                  _hover={{ bg: "gray.100" }}
                  transition="background 0.2s"
                >
                  {showSeparator && (
                    <Separator height="55px" orientation="vertical" />
                  )}
                  <Link
                    fontSize="sm"
                    href={link.href}
                    outline="none"
                    px={4}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    target={link.isExternal ? "_blank" : undefined}
                    textWrap="nowrap"
                  >
                    {link.hasStatus && <StatusPing />}
                    {link.label}
                  </Link>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </Box>
      {/* Mobile Navbar */}
      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        right={4}
        top={4}
        zIndex={1000}
      >
        <IconButton
          aria-label="Toggle menu"
          bg="white"
          border="2px solid"
          borderColor="gray.300"
          boxShadow="lg"
          color="darkBlueCustom"
          rounded="md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <LuMenu />
        </IconButton>
        {isMobileMenuOpen && (
          <VStack
            bgColor="darkBlueCustom"
            gap={0}
            h="100vh"
            left={0}
            overflow="hidden"
            position="fixed"
            top={0}
            w="100vw"
            zIndex={999}
          >
            <Box display="flex" justifyContent="flex-end" p={4} w="full">
              <CloseButton
                variant="subtle"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </Box>
            {links.map((link) => (
              <Link
                key={link.id}
                as="a"
                color="white"
                fontSize="lg"
                href={link.href}
                outline="none"
                px={6}
                py={4}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                target={link.isExternal ? "_blank" : undefined}
                textWrap="nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.hasStatus && <StatusPing />}
                {link.label}
              </Link>
            ))}
          </VStack>
        )}
      </Box>
    </>
  );
};

export default FixedNavbar;
