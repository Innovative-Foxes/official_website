"use client";

import React, { useState } from "react";
import RightToggleDrawer from "../../../components/ui/Drawer/RightToggleDrawer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

interface InputChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

const EventLandingPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    eventDate: "",
  });

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleSectionToggle = (sectionId: string, isVisible: boolean) => {
    console.log(
      `Section ${sectionId} toggled to ${isVisible ? "visible" : "hidden"}`,
    );
  };

  return (
    <>
      {/* RightToggleDrawer with side tab - handles its own positioning */}
      <RightToggleDrawer
        drawerTitle="Event Page Controls"
        triggerLabel="TOGGLE SECTIONS"
        onSectionToggle={handleSectionToggle}
      />

      <div style={styles.container}>
        {/* Navigation */}
        <nav
          data-title="Navigation Section"
          data-toggle="navigation-section"
          style={styles.nav}
        >
          <div style={styles.navContainer}>
            <div style={styles.navContent}>
              <div style={styles.logoSection}>
                <div style={styles.logoIcon}>
                  <span style={styles.logoText}>E</span>
                </div>
                <span style={styles.brandName}>EventPro</span>
              </div>

              <div data-title="Navigation CTA Button" data-toggle="nav-button">
                <button style={styles.navButton}>Sign Up</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          data-title="Hero Section"
          data-toggle="hero-section"
          style={styles.heroSection}
        >
          <div style={styles.heroContainer}>
            <div style={styles.heroGrid}>
              <div style={styles.heroText}>
                <div style={styles.heroContent}>
                  <h1 style={styles.heroTitle}>
                    Transform Your
                    <span style={styles.gradientText}> Future</span>
                  </h1>
                  <p style={styles.heroDescription}>
                    Join industry leaders and innovators at our exclusive event.
                    Discover cutting-edge insights, network with peers, and
                    unlock new opportunities that will accelerate your career.
                  </p>
                </div>

                <div style={styles.statsContainer}>
                  <div style={styles.statItem}>
                    <div style={styles.statNumber}>500+</div>
                    <div style={styles.statLabel}>Attendees</div>
                  </div>
                  <div style={styles.statItem}>
                    <div style={styles.statNumber}>25+</div>
                    <div style={styles.statLabel}>Speakers</div>
                  </div>
                  <div style={styles.statItem}>
                    <div style={styles.statNumber}>3</div>
                    <div style={styles.statLabel}>Days</div>
                  </div>
                </div>
              </div>

              <div
                data-title="Main Form"
                data-toggle="form"
                style={styles.formContainer}
              >
                <div style={styles.formCard}>
                  <h3 style={styles.formTitle}>Reserve Your Spot</h3>
                  <div style={styles.formFields}>
                    <div style={styles.nameFields}>
                      <input
                        name="firstName"
                        placeholder="First Name"
                        style={styles.input}
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      <input
                        name="lastName"
                        placeholder="Last Name"
                        style={styles.input}
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <input
                      name="email"
                      placeholder="Email Address"
                      style={styles.input}
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <select
                      name="eventDate"
                      style={styles.select}
                      value={formData.eventDate}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Event Date</option>
                      <option value="2025-10-15">October 15, 2025</option>
                      <option value="2025-10-22">October 22, 2025</option>
                      <option value="2025-10-29">November 5, 2025</option>
                    </select>
                    <button style={styles.submitButton} onClick={handleSubmit}>
                      Secure My Seat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section
          data-title="Speakers Section"
          data-toggle="speakers-section"
          style={styles.speakersSection}
        >
          <div style={styles.speakersContainer}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Meet Our Expert Speakers</h2>
              <p style={styles.sectionDescription}>
                Learn from industry pioneers and thought leaders who are shaping
                the future of business and technology.
              </p>
            </div>

            <div style={styles.speakersGrid}>
              <div style={styles.speakerCard}>
                <div
                  style={{
                    ...styles.speakerAvatar,
                    background:
                      "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                  }}
                ></div>
                <h3 style={styles.speakerName}>Sarah Chen</h3>
                <p style={styles.speakerTitle}>
                  AI Strategy Expert & Former Tesla VP
                </p>
              </div>

              <div style={styles.speakerCard}>
                <div
                  style={{
                    ...styles.speakerAvatar,
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                  }}
                ></div>
                <h3 style={styles.speakerName}>Marcus Johnson</h3>
                <p style={styles.speakerTitle}>
                  Digital Transformation Leader & Author
                </p>
              </div>

              <div style={styles.speakerCard}>
                <div
                  style={{
                    ...styles.speakerAvatar,
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  }}
                ></div>
                <h3 style={styles.speakerName}>Elena Rodriguez</h3>
                <p style={styles.speakerTitle}>
                  Startup Founder & Venture Capitalist
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos */}
        <section
          data-title="Testimonial Section"
          data-toggle="testimonial-section"
          style={styles.testimonialSection}
        >
          <div style={styles.testimonialContainer}>
            <p style={styles.testimonialText}>
              Trusted by leading companies worldwide
            </p>
            <div style={styles.logoContainer}>
              <div style={{ ...styles.logo, width: "96px" }}></div>
              <div style={{ ...styles.logo, width: "128px" }}></div>
              <div style={{ ...styles.logo, width: "112px" }}></div>
              <div style={{ ...styles.logo, width: "80px" }}></div>
              <div style={{ ...styles.logo, width: "144px" }}></div>
            </div>
          </div>
        </section>

        {/* Customer Review */}
        <section
          data-title="Review Section"
          data-toggle="review-section"
          style={styles.reviewSection}
        >
          <div style={styles.reviewContainer}>
            <div>
              <div style={styles.starsContainer}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    style={styles.star}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote style={styles.reviewQuote}>
                &quot;This event completely transformed how I think about
                innovation. The networking opportunities and insights I gained
                were invaluable for my career growth.&quot;
              </blockquote>
              <cite style={styles.reviewCite}>
                — Jennifer Walsh, Product Director at InnovateCoTM
              </cite>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section
          data-title="Banner Section"
          data-toggle="banner-section"
          style={styles.bannerSection}
        >
          <div style={styles.bannerContainer}>
            <h2 style={styles.bannerTitle}>Don&apos;t Miss This Opportunity</h2>
            <p style={styles.bannerDescription}>
              Join us for three days of groundbreaking insights, meaningful
              connections, and transformative experiences that will shape your
              professional future.
            </p>
            <button style={styles.bannerButton}>Register Today</button>
          </div>
        </section>

        {/* Footer */}
        <footer
          data-title="Footer Section"
          data-toggle="footer-section"
          style={styles.footer}
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
        </footer>
      </div>
    </>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "white",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  // Navigation Styles
  nav: {
    backgroundColor: "white",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    borderBottom: "1px solid #f3f4f6",
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
  },
  navContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
  },
  logoIcon: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "12px",
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
  },
  brandName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#111827",
  },
  navButton: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "8px 24px",
    borderRadius: "8px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  // Hero Section Styles
  heroSection: {
    padding: "80px 0",
    background: "linear-gradient(135deg, #f9fafb 0%, white 100%)",
  },
  heroContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "center",
  },
  heroText: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "32px",
  },
  heroContent: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  heroTitle: {
    fontSize: "48px",
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
    fontSize: "20px",
    color: "#4b5563",
    lineHeight: "1.6",
    margin: 0,
  },
  statsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  statItem: {
    textAlign: "center" as const,
  },
  statNumber: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#9333ea",
  },
  statLabel: {
    fontSize: "14px",
    color: "#4b5563",
  },

  // Form Styles
  formContainer: {
    display: "flex",
  },
  formCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    width: "100%",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "24px",
    margin: "0 0 24px 0",
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
    borderRadius: "8px",
    fontSize: "16px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    boxSizing: "border-box" as const,
  },
  select: {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    boxSizing: "border-box" as const,
    backgroundColor: "white",
  },
  submitButton: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  // Speakers Section Styles
  speakersSection: {
    padding: "80px 0",
    backgroundColor: "white",
  },
  speakersContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  sectionHeader: {
    textAlign: "center" as const,
    marginBottom: "64px",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "16px",
    margin: "0 0 16px 0",
  },
  sectionDescription: {
    fontSize: "20px",
    color: "#4b5563",
    maxWidth: "768px",
    margin: "0 auto",
  },
  speakersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  speakerCard: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #f3f4f6",
    textAlign: "center" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  speakerAvatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "0 auto 16px",
  },
  speakerName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "8px",
    margin: "0 0 8px 0",
  },
  speakerTitle: {
    color: "#4b5563",
    margin: 0,
  },

  // Testimonial Section Styles
  testimonialSection: {
    padding: "64px 0",
    backgroundColor: "#f9fafb",
  },
  testimonialContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  testimonialText: {
    textAlign: "center" as const,
    color: "#4b5563",
    marginBottom: "32px",
    margin: "0 0 32px 0",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "48px",
    opacity: 0.6,
  },
  logo: {
    height: "32px",
    backgroundColor: "#d1d5db",
    borderRadius: "4px",
  },

  // Review Section Styles
  reviewSection: {
    padding: "80px 0",
    backgroundColor: "white",
  },
  reviewContainer: {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "0 1rem",
    textAlign: "center" as const,
  },
  starsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "4px",
    marginBottom: "16px",
  },
  star: {
    width: "24px",
    height: "24px",
    color: "#fbbf24",
  },
  reviewQuote: {
    fontSize: "24px",
    fontWeight: "500",
    color: "#111827",
    marginBottom: "16px",
    fontStyle: "normal" as const,
    margin: "0 0 16px 0",
  },
  reviewCite: {
    fontSize: "18px",
    color: "#4b5563",
    fontStyle: "normal" as const,
  },

  // Banner Section Styles
  bannerSection: {
    padding: "96px 0",
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
  },
  bannerContainer: {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "0 1rem",
    textAlign: "center" as const,
  },
  bannerTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "24px",
    margin: "0 0 24px 0",
  },
  bannerDescription: {
    fontSize: "20px",
    opacity: 0.9,
    marginBottom: "32px",
    maxWidth: "512px",
    margin: "0 auto 32px",
  },
  bannerButton: {
    backgroundColor: "white",
    color: "#9333ea",
    padding: "12px 32px",
    borderRadius: "8px",
    fontWeight: "500",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  // Footer Styles
  footer: {
    backgroundColor: "#111827",
    padding: "48px 0",
    color: "white",
  },
  footerContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
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
  },
  footerBrandName: {
    fontSize: "18px",
    fontWeight: "bold",
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

export default EventLandingPage;
