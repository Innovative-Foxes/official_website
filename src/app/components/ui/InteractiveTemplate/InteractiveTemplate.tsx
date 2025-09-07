"use client";
import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { Box, Icon, Spinner, Text } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { FaUpDown } from "react-icons/fa6";

const InteractiveTemplate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroBackgroundUrl, setHeroBackgroundUrl] = useState(
    "/images/jpg/speaker-bg.jpg",
  );
  const [bannerBgColor, setBannerBgColor] = useState("#667eea");
  const [navBgColor, setNavBgColor] = useState("#ffffff");
  const [navFontColor, setNavFontColor] = useState("#111827");
  const [toggles, setToggles] = useState({
    navigation: true,
    navButton: true,
    hero: true,
    heroLeft: true,
    heroRight: true,
    heroBackground: true,
    speakers: true,
    speaker1: true,
    speaker2: true,
    speaker3: true,
    testimonial: true,
    banner: true,
    footer: true,
  });

  // Simulate loading state for landing page and state initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const sectionControls = [
    { id: "navigation", title: "Navigation Bar", hasSubControls: true },
    { id: "navButton", title: "└ Navigation CTA Button", isSubControl: true },
    { id: "hero", title: "Hero Section", hasSubControls: true },
    { id: "heroLeft", title: "└ Hero Content (Left)", isSubControl: true },
    { id: "heroRight", title: "└ Hero Form (Right)", isSubControl: true },
    {
      id: "heroBackground",
      title: "└ Hero Background Image",
      isSubControl: true,
    },
    { id: "speakers", title: "Speakers Section", hasSubControls: true },
    { id: "speaker1", title: "└ Speaker 1 (Sarah Chen)", isSubControl: true },
    {
      id: "speaker2",
      title: "└ Speaker 2 (Marcus Johnson)",
      isSubControl: true,
    },
    {
      id: "speaker3",
      title: "└ Speaker 3 (Elena Williams)",
      isSubControl: true,
    },
    { id: "testimonial", title: "Testimonial Section", hasSubControls: false },
    { id: "banner", title: "CTA Banner Section", hasSubControls: false },
    { id: "footer", title: "Footer Section", hasSubControls: false },
  ];

  const handleToggle = (itemId: keyof typeof toggles) => {
    setToggles((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Calculate dynamic speaker grid layout
  const getVisibleSpeakers = () => {
    const speakers = [];
    if (toggles.speaker1) speakers.push("speaker1");
    if (toggles.speaker2) speakers.push("speaker2");
    if (toggles.speaker3) speakers.push("speaker3");
    return speakers;
  };

  const getSpeakersGridStyle = () => {
    const visibleCount = getVisibleSpeakers().length;
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
      gap: "32px",
      justifyContent: "center",
      maxWidth:
        visibleCount === 1 ? "400px" : visibleCount === 2 ? "800px" : "100%",
      margin: "0 auto",
    };
  };

  // Get dynamic hero section style with optional background
  const getHeroSectionStyle = () => {
    const baseStyle = {
      padding: "60px 0",
      backgroundImage:
        "linear-gradient(135deg,rgb(238, 242, 255) 0%, #ffffff 100%)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    if (toggles.heroBackground) {
      return {
        ...baseStyle,
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(255, 255, 255, 0.9)), url('${heroBackgroundUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }

    return baseStyle;
  };

  // Get dynamic hero container style based on visible components
  const getHeroContainerStyle = () => {
    const bothVisible = toggles.heroLeft && toggles.heroRight;
    const onlyLeftVisible = toggles.heroLeft && !toggles.heroRight;
    const onlyRightVisible = !toggles.heroLeft && toggles.heroRight;

    if (bothVisible) {
      // Default: both visible, use grid layout
      return {
        ...styles.heroContainer,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
      };
    } else if (onlyLeftVisible) {
      // Only text content visible, span full width
      return {
        ...styles.heroContainer,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
    } else if (onlyRightVisible) {
      // Only form visible, center it
      return {
        ...styles.heroContainer,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
    }

    // Neither visible (edge case)
    return styles.heroContainer;
  };

  // Get dynamic content styles
  const getHeroContentStyle = () => {
    if (!toggles.heroRight) {
      // Form is hidden, make content full width and centered
      return {
        ...styles.heroContent,
        maxWidth: "800px",
        textAlign: "center" as const,
      };
    }
    return styles.heroContent;
  };

  const getHeroFormStyle = () => {
    if (!toggles.heroLeft) {
      // Text content is hidden, make form larger and centered
      return {
        ...styles.heroForm,
        maxWidth: "500px",
        width: "100%",
      };
    }
    return styles.heroForm;
  };

  // Get dynamic banner section style with custom background color
  const getBannerSectionStyle = () => {
    return {
      ...styles.bannerSection,
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(135deg, ${bannerBgColor} 0%, #764ba2 100%)`,
    };
  };

  // Get dynamic navigation style with custom background color
  const getNavigationStyle = () => {
    return {
      ...styles.navigation,
      backgroundColor: navBgColor,
    };
  };

  // Get dynamic brand name style with custom font color
  const getBrandNameStyle = () => {
    return {
      ...styles.brandName,
      color: navFontColor,
    };
  };

  const styles: Record<string, React.CSSProperties> = {
    container: {
      display: "flex",
      gap: "1rem",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    // Navigation Styles
    navigation: {
      backgroundColor: "white",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      borderBottom: "1px solid #f3f4f6",
      position: "sticky" as const,
      top: 0,
      zIndex: 50,
    },
    navContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logoIcon: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      width: "32px",
      height: "32px",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: "14px",
    },
    brandName: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#111827",
    },
    navButton: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "8px 20px",
      borderRadius: "6px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
    },
    // Hero Styles
    heroSection: {
      padding: "60px 0",
      background: "linear-gradient(135deg, #f9fafb 0%, white 100%)",
    },
    heroContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "center",
    },
    heroContent: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "24px",
    },
    heroEyebrow: {
      color: "#9333ea",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "uppercase" as const,
      letterSpacing: "0.05em",
    },
    heroTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#111827",
      lineHeight: "1.1",
      margin: 0,
    },
    gradientText: {
      background: "linear-gradient(to right, #9333ea, #2563eb)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroDescription: {
      fontSize: "18px",
      color: "#4b5563",
      lineHeight: "1.6",
      margin: 0,
    },
    heroForm: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      padding: "32px",
      borderRadius: "12px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    formTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "20px",
      margin: "0 0 20px 0",
      textAlign: "center" as const,
    },
    formFields: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "16px",
    },
    nameFields: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      boxSizing: "border-box" as const,
    },
    select: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      boxSizing: "border-box" as const,
      backgroundColor: "white",
    },
    submitButton: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "12px",
      borderRadius: "6px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      width: "100%",
      fontSize: "14px",
    },
    // Section Styles
    section: {
      padding: "60px 0",
    },
    sectionContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    sectionHeader: {
      textAlign: "center" as const,
      marginBottom: "48px",
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "16px",
      margin: "0 0 16px 0",
    },
    sectionDescription: {
      fontSize: "18px",
      color: "#4b5563",
      maxWidth: "600px",
      margin: "0 auto",
    },
    // Speakers Styles
    speakersGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "32px",
    },
    speakerCard: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "8px",
      border: "1px solid #f3f4f6",
      textAlign: "center" as const,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    speakerAvatar: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      margin: "0 auto 16px",
      background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    },
    speakerName: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "8px",
      margin: "0 0 8px 0",
    },
    speakerTitle: {
      color: "#4b5563",
      margin: 0,
      fontSize: "14px",
    },
    // Testimonial Styles
    testimonialSection: {
      backgroundColor: "#f9fafb",
    },
    testimonialContent: {
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center" as const,
    },
    starsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "4px",
      marginBottom: "24px",
    },
    star: {
      color: "#fbbf24",
      fontSize: "20px",
    },
    testimonialQuote: {
      fontSize: "20px",
      fontWeight: "500",
      color: "#111827",
      marginBottom: "24px",
      fontStyle: "normal" as const,
      margin: "0 0 24px 0",
      lineHeight: "1.6",
    },
    testimonialAuthor: {
      fontSize: "16px",
      color: "#4b5563",
      fontStyle: "normal" as const,
    },
    // Banner Styles
    bannerSection: {
      background:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
    },
    bannerContent: {
      textAlign: "center" as const,
      maxWidth: "600px",
      margin: "0 auto",
    },
    bannerTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "20px",
      margin: "0 0 20px 0",
    },
    bannerDescription: {
      fontSize: "18px",
      opacity: 0.9,
      marginBottom: "32px",
      margin: "0 0 32px 0",
      lineHeight: "1.6",
    },
    bannerButton: {
      backgroundColor: "white",
      color: "#9333ea",
      padding: "12px 32px",
      borderRadius: "6px",
      fontWeight: "500",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
    },
    titleContainer: {
      background: "#C2E5F9",
      padding: "12px 24px",
    },
    sidebarTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "0px",
      color: "#1F2937",
    },
    controlsContainer: {
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    controlItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      backgroundColor: "#F9FAFB",
      borderRadius: "8px",
    },
    controlLabel: {
      color: "#374151",
      fontWeight: "500",
    },
    toggleButton: {
      position: "relative",
      width: "48px",
      height: "24px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    toggleButtonActive: {
      backgroundColor: "#26B34B",
    },
    toggleButtonInactive: {
      backgroundColor: "#CBCBCB",
    },
    toggleSlider: {
      position: "absolute",
      top: "2px",
      width: "20px",
      height: "20px",
      backgroundColor: "white",
      borderRadius: "50%",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    },
    instructions: {
      marginTop: "32px",
      padding: "16px",
      backgroundColor: "#EFF6FF",
      borderRadius: "8px",
    },
    instructionsTitle: {
      fontWeight: "600",
      color: "#1F2937",
      marginBottom: "8px",
    },
    instructionsText: {
      fontSize: "14px",
      color: "#6B7280",
    },
    // Text Input Styles
    inputContainer: {
      paddingBottom: "24px",
      borderBottom: "1px solid #D1D5DB",
    },
    inputContainerNoBorder: {
      paddingBottom: "12px",
    },
    inputLabel: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "8px",
    },
    textInput: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #D1D5DB",
      borderRadius: "6px",
      fontSize: "14px",
      backgroundColor: "white",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      boxSizing: "border-box" as const,
    },
    // Color Picker Styles
    colorPickerContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    colorSquare: {
      width: "28px",
      height: "28px",
      borderRadius: "4px",
      border: "2px solid #D1D5DB",
      cursor: "pointer",
      transition: "border-color 0.2s ease, transform 0.1s ease",
      position: "relative" as const,
      flexShrink: 0,
    },
    colorInput: {
      flex: 1,
      padding: "6px 8px",
      border: "1px solid #D1D5DB",
      borderRadius: "4px",
      fontSize: "12px",
      backgroundColor: "white",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      boxSizing: "border-box" as const,
      fontFamily: "monospace",
    },
    hiddenColorInput: {
      position: "absolute" as const,
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "pointer",
    },
    // Footer Styles
    footer: {
      backgroundColor: "#111827",
      padding: "48px 0",
      color: "white",
    },
    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    footerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap" as const,
      gap: "16px",
    },
    footerLogo: {
      display: "flex",
      alignItems: "center",
    },
    footerLogoIcon: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "8px",
    },
    footerLogoText: {
      color: "white",
      fontWeight: "bold",
      fontSize: "14px",
    },
    footerBrandName: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
    },
    copyright: {
      color: "#9ca3af",
      fontSize: "14px",
    },
    footerLinks: {
      display: "flex",
      gap: "24px",
    },
    footerLink: {
      color: "#9ca3af",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
    },
  };

  return (
    <Box>
      <Box bg={"transparent"} h={1} w={"full"}></Box>

      <div style={styles.container}>
        {/* Landing Page */}
        <Box flex={1} position="relative">
          {/* Scroll Tip Notification Tab */}
          <Box
            alignItems="center"
            bg="blue.50"
            border="2px solid #01203F"
            borderBottom="none"
            borderRadius="8px 8px 0 0"
            display="flex"
            fontSize="sm"
            gap={2}
            justifyContent="center"
            left="50%"
            minWidth="max-content"
            position="absolute"
            px={3}
            py={1}
            top="-31px"
            transform="translateX(-50%)"
            whiteSpace="nowrap"
            zIndex={10}
          >
            <Icon boxSize={3} fill={"blue.600"}>
              <FaInfoCircle />
            </Icon>
            <Text
              color={"darkBlueCustom"}
              fontSize={"sm"}
              fontWeight={"semibold"}
            >
              Try scrolling on the landing page preview &amp; variables section
            </Text>
            <Icon boxSize={3} fill={"darkBlueCustom"}>
              <FaUpDown />
            </Icon>
          </Box>

          <Box
            bg="white"
            border="4px solid #01203F"
            borderRadius="8px"
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                margin: "0 1px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(0, 0, 0, 0.4)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "rgba(0, 0, 0, 0.6)",
              },
            }}
            height="80vh"
            overflowY="auto"
            position={"relative"}
            width="100%"
          >
            {isLoading ? (
              <Box
                alignItems="center"
                display="flex"
                height="100%"
                justifyContent="center"
                width="100%"
              >
                <Spinner size="xl" />
              </Box>
            ) : (
              <>
                {/* Navigation */}
                <AnimatePresence>
                  {toggles.navigation && (
                    <motion.nav
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      initial={{ opacity: 0, y: -20 }}
                      style={getNavigationStyle()}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div style={styles.navContainer}>
                        <div style={styles.logoSection}>
                          <div style={styles.logoIcon}>E</div>
                          <span style={getBrandNameStyle()}>EventPro</span>
                        </div>
                        <AnimatePresence>
                          {toggles.navButton && (
                            <motion.button
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              style={styles.navButton}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              Sign Up
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.nav>
                  )}
                </AnimatePresence>

                {/* Hero Section */}
                <AnimatePresence>
                  {toggles.hero && (
                    <motion.section
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      initial={{ opacity: 0, y: 20 }}
                      style={getHeroSectionStyle()}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div style={getHeroContainerStyle()}>
                        <AnimatePresence>
                          {toggles.heroLeft && (
                            <motion.div
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              initial={{ opacity: 0, x: -20 }}
                              style={getHeroContentStyle()}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div style={styles.heroEyebrow}>
                                Exclusive Event
                              </div>
                              <h1 style={styles.heroTitle}>
                                Transform Your{" "}
                                <span style={styles.gradientText}>Future</span>
                              </h1>
                              <p style={styles.heroDescription}>
                                Join industry leaders and innovators at our
                                exclusive event. Discover cutting-edge insights,
                                network with peers, and unlock new opportunities
                                that will accelerate your career.
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <AnimatePresence>
                          {toggles.heroRight && (
                            <motion.div
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              initial={{ opacity: 0, x: 20 }}
                              style={getHeroFormStyle()}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <h3 style={styles.formTitle}>
                                Reserve Your Spot
                              </h3>
                              <div style={styles.formFields}>
                                <div style={styles.nameFields}>
                                  <input
                                    placeholder="First Name"
                                    style={styles.input}
                                  />
                                  <input
                                    placeholder="Last Name"
                                    style={styles.input}
                                  />
                                </div>
                                <input
                                  placeholder="Email Address"
                                  style={styles.input}
                                />
                                <select style={styles.select}>
                                  <option>Select Event Date</option>
                                  <option>October 15, 2025</option>
                                  <option>October 22, 2025</option>
                                  <option>November 5, 2025</option>
                                </select>
                                <button style={styles.submitButton}>
                                  Secure My Seat
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>

                {/* Speakers Section */}
                <AnimatePresence>
                  {toggles.speakers && (
                    <motion.section
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      initial={{ opacity: 0, y: 20 }}
                      style={styles.section}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div style={styles.sectionContainer}>
                        <div style={styles.sectionHeader}>
                          <h2 style={styles.sectionTitle}>
                            Meet Our Expert Speakers
                          </h2>
                          <p style={styles.sectionDescription}>
                            Learn from industry pioneers and thought leaders who
                            are shaping the future of business and technology.
                          </p>
                        </div>
                        <div style={getSpeakersGridStyle()}>
                          <AnimatePresence>
                            {toggles.speaker1 && (
                              <motion.div
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                style={styles.speakerCard}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                              >
                                <div
                                  style={{
                                    ...styles.speakerAvatar,
                                    backgroundImage:
                                      "url('/images/jpg/speaker-1.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                ></div>
                                <h3 style={styles.speakerName}>Sarah Chen</h3>
                                <p style={styles.speakerTitle}>
                                  AI Strategy Expert & Former Tech VP
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <AnimatePresence>
                            {toggles.speaker2 && (
                              <motion.div
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                style={styles.speakerCard}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                              >
                                <div
                                  style={{
                                    ...styles.speakerAvatar,
                                    backgroundImage:
                                      "url('/images/jpg/speaker-2.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                ></div>
                                <h3 style={styles.speakerName}>
                                  Marcus Johnson
                                </h3>
                                <p style={styles.speakerTitle}>
                                  Digital Transformation Leader & Author
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <AnimatePresence>
                            {toggles.speaker3 && (
                              <motion.div
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                style={styles.speakerCard}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                              >
                                <div
                                  style={{
                                    ...styles.speakerAvatar,
                                    backgroundImage:
                                      "url('/images/jpg/speaker-3.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                ></div>
                                <h3 style={styles.speakerName}>
                                  Elena Williams
                                </h3>
                                <p style={styles.speakerTitle}>
                                  Startup Founder & Venture Capitalist
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>

                {/* Testimonial Section */}
                <AnimatePresence>
                  {toggles.testimonial && (
                    <motion.section
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      initial={{ opacity: 0, y: 20 }}
                      style={{
                        ...styles.section,
                        ...styles.testimonialSection,
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div style={styles.sectionContainer}>
                        <div style={styles.testimonialContent}>
                          <div style={styles.starsContainer}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={styles.star}>
                                ★
                              </span>
                            ))}
                          </div>
                          <blockquote style={styles.testimonialQuote}>
                            &quot;This event completely transformed how I think
                            about innovation. The networking opportunities and
                            insights I gained were invaluable for my career
                            growth.&quot;
                          </blockquote>
                          <cite style={styles.testimonialAuthor}>
                            — Jennifer Walsh, Product Director at InnovateCo
                          </cite>
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>

                {/* Banner Section */}
                <AnimatePresence>
                  {toggles.banner && (
                    <motion.section
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      initial={{ opacity: 0, y: 20 }}
                      style={{ ...styles.section, ...getBannerSectionStyle() }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div style={styles.sectionContainer}>
                        <div style={styles.bannerContent}>
                          <h2 style={styles.bannerTitle}>
                            Don&apos;t Miss This Opportunity
                          </h2>
                          <p style={styles.bannerDescription}>
                            Join us for three days of groundbreaking insights,
                            meaningful connections, and transformative
                            experiences that will shape your professional
                            future.
                          </p>
                          <button style={styles.bannerButton}>
                            Register Today
                          </button>
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>

                {/* Footer Section */}
                <AnimatePresence>
                  {toggles.footer && (
                    <motion.footer
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      initial={{ opacity: 0, y: 20 }}
                      style={styles.footer}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div style={styles.footerContainer}>
                        <div style={styles.footerContent}>
                          <div style={styles.footerLogo}>
                            <div style={styles.footerLogoIcon}>
                              <span style={styles.footerLogoText}>E</span>
                            </div>
                            <span style={styles.footerBrandName}>EventPro</span>
                          </div>

                          <div style={styles.copyright}>
                            © 2025 EventPro. All rights reserved.
                          </div>

                          <div style={styles.footerLinks}>
                            <a href="#" style={styles.footerLink}>
                              Privacy Policy
                            </a>
                            <a href="#" style={styles.footerLink}>
                              Terms of Service
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.footer>
                  )}
                </AnimatePresence>
              </>
            )}
          </Box>
        </Box>

        {/* Toggle Controls */}
        <div>
          <div style={styles.titleContainer}>
            <h3 style={styles.sidebarTitle}>Variables</h3>
          </div>
          <Box
            bg="white"
            boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                margin: "0 1px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(0, 0, 0, 0.4)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "rgba(0, 0, 0, 0.6)",
              },
            }}
            height="calc(80vh - 54px)"
            overflowY="auto"
            width="320px"
          >
            {isLoading ? (
              <Box
                alignItems="center"
                display="flex"
                height="100%"
                justifyContent="center"
                width="100%"
              >
                <Spinner size="xl" />
              </Box>
            ) : (
              <div style={styles.controlsContainer}>
                {/* Hero Background Image URL Input */}
                <div style={styles.inputContainer}>
                  <label htmlFor="heroBackgroundUrl" style={styles.inputLabel}>
                    Hero Background Image
                  </label>
                  <input
                    id="heroBackgroundUrl"
                    placeholder="Enter image URL..."
                    style={styles.textInput}
                    type="text"
                    value={heroBackgroundUrl}
                    onChange={(e) => setHeroBackgroundUrl(e.target.value)}
                  />
                </div>

                {/* Color Pickers Group */}
                <div style={styles.inputContainer}>
                  {/* Navigation Background Color Picker */}
                  <div style={styles.inputContainerNoBorder}>
                    <label htmlFor="navBgColor" style={styles.inputLabel}>
                      Navigation Background Color
                    </label>
                    <div style={styles.colorPickerContainer}>
                      <div
                        style={{
                          ...styles.colorSquare,
                          backgroundColor: navBgColor,
                        }}
                      >
                        <input
                          style={styles.hiddenColorInput}
                          type="color"
                          value={navBgColor}
                          onChange={(e) => setNavBgColor(e.target.value)}
                        />
                      </div>
                      <input
                        id="navBgColor"
                        placeholder="#ffffff"
                        style={styles.colorInput}
                        type="text"
                        value={navBgColor}
                        onChange={(e) => setNavBgColor(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Navigation Font Color Picker */}
                  <div style={styles.inputContainerNoBorder}>
                    <label htmlFor="navFontColor" style={styles.inputLabel}>
                      Navigation Font Color
                    </label>
                    <div style={styles.colorPickerContainer}>
                      <div
                        style={{
                          ...styles.colorSquare,
                          backgroundColor: navFontColor,
                        }}
                      >
                        <input
                          style={styles.hiddenColorInput}
                          type="color"
                          value={navFontColor}
                          onChange={(e) => setNavFontColor(e.target.value)}
                        />
                      </div>
                      <input
                        id="navFontColor"
                        placeholder="#111827"
                        style={styles.colorInput}
                        type="text"
                        value={navFontColor}
                        onChange={(e) => setNavFontColor(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Banner Background Color Picker */}
                  <div>
                    <label htmlFor="bannerBgColor" style={styles.inputLabel}>
                      Bottom CTA Banner Background Color
                    </label>
                    <div style={styles.colorPickerContainer}>
                      <div
                        style={{
                          ...styles.colorSquare,
                          backgroundColor: bannerBgColor,
                        }}
                      >
                        <input
                          style={styles.hiddenColorInput}
                          type="color"
                          value={bannerBgColor}
                          onChange={(e) => setBannerBgColor(e.target.value)}
                        />
                      </div>
                      <input
                        id="bannerBgColor"
                        placeholder="#667eea"
                        style={styles.colorInput}
                        type="text"
                        value={bannerBgColor}
                        onChange={(e) => setBannerBgColor(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {sectionControls.map((control) => (
                  <div
                    key={control.id}
                    style={{
                      ...styles.controlItem,
                      ...(control.isSubControl
                        ? { marginLeft: "16px", backgroundColor: "#f3f4f6" }
                        : {}),
                    }}
                  >
                    <span
                      style={{
                        ...styles.controlLabel,
                        ...(control.isSubControl
                          ? { fontSize: "13px", color: "#6b7280" }
                          : {}),
                      }}
                    >
                      {control.title}
                    </span>
                    <motion.button
                      style={{
                        ...styles.toggleButton,
                        ...(toggles[control.id as keyof typeof toggles]
                          ? styles.toggleButtonActive
                          : styles.toggleButtonInactive),
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        handleToggle(control.id as keyof typeof toggles)
                      }
                    >
                      <motion.div
                        animate={{
                          x: toggles[control.id as keyof typeof toggles]
                            ? 24
                            : 2,
                        }}
                        style={styles.toggleSlider}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    </motion.button>
                  </div>
                ))}
              </div>
            )}
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default InteractiveTemplate;
