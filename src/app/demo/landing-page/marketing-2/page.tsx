"use client";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { FaNetworkWired } from "react-icons/fa";

import { FaChartSimple, FaObjectGroup } from "react-icons/fa6";

const NexusPayLanding = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">NexusPay</span>
            </div>
          </div>
          <nav className="nav-links">
            <a className="nav-link" href="#products">
              Products
            </a>
            <a className="nav-link" href="#customers">
              Customers
            </a>
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
          </nav>
          <div className="nav-actions">
            <Box display={{ base: "none", lg: "block" }}>
              <a className="login-link" href="#login">
                Sign In
              </a>
            </Box>
            <Box display={{ base: "none", lg: "block" }}>
              <button className="cta-btn">Get Started Free</button>
            </Box>
          </div>
          <button className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Global payments
                <br />
                made simple
                <br />
                and secure.
              </h1>
              <p className="hero-description">
                Connect your business to the world with instant cross-border
                <br />
                payments, real-time settlements, and enterprise-grade security.
              </p>
              <div className="hero-cta-buttons">
                <button className="hero-cta-primary">Get Started Free →</button>
                <button className="hero-cta-secondary">Watch Demo</button>
              </div>
              <div className="partner-logos">
                <span className="partner">Stripe</span>
                <span className="partner">PayPal</span>
                <span className="partner">Wise</span>
              </div>
            </div>
            <div className="hero-right">
              <div className="signup-form">
                <div className="form-header">
                  <h3>Start your free trial</h3>
                  <p>No credit card required</p>
                </div>
                <form className="signup-form-content">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      required
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company name</label>
                    <input
                      required
                      id="company"
                      placeholder="Enter company name"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      required
                      id="password"
                      placeholder="Create a password"
                      type="password"
                    />
                  </div>
                  <button className="signup-btn" type="submit">
                    Create your account
                  </button>
                  <p className="form-footer">
                    Already have an account? <a href="#">Sign in</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="features-title">
            Built for the future
            <br />
            of global commerce.
          </h2>
          <p className="features-subtitle">
            Enterprise-grade payment infrastructure that scales with your
            business. From startups to Fortune 500s, we power seamless financial
            experiences across every continent.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global reach</h3>
              <p>
                Send and receive payments in 150+ currencies across 200+
                countries with real-time exchange rates and instant settlements.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>API-first platform</h3>
              <p>
                Seamlessly integrate our payment infrastructure into your
                existing systems with our comprehensive REST APIs and SDKs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Bank-grade security</h3>
              <p>
                PCI DSS Level 1 compliance with end-to-end encryption, fraud
                detection, and regulatory compliance across all jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-content">
            <div className="stats-cards">
              <div className="stats-card">
                <h2>Trusted by global leaders</h2>
                <div className="stat-large">50k+</div>
                <p>Businesses processing payments worldwide</p>
              </div>
              <div className="stats-card">
                <VStack
                  alignItems={"start"}
                  h={"full"}
                  justifyContent={"space-between"}
                >
                  <div>
                    <h3>Real-time settlements</h3>
                    <p>
                      Process payments instantly with 99.9% uptime and global
                      reach
                    </p>
                  </div>
                  <Box>
                    <button className="settlement cta-primary">
                      Learn More →
                    </button>
                  </Box>
                </VStack>
              </div>
            </div>
            <Box
              bg={"gray.150"}
              borderRadius={"16px"}
              boxShadow={"0 4px 20px rgba(0,0,0,.08)"}
              overflow={"hidden"}
              p={"2.5rem"}
            >
              <HStack flexDirection={{ base: "column", md: "row" }} gap={6}>
                <div>
                  <Heading
                    color={"#1A1A1A"}
                    fontFamily={"poppins"}
                    fontSize={"32px"}
                    mb={"24px"}
                  >
                    MRR Increase
                  </Heading>
                  <Text color={"#666"} fontSize={"20px"}>
                    Focused on compounding revenue streams with scalable,
                    predictable, and recurring growth models.
                  </Text>
                </div>
                <Image
                  alt="chart"
                  boxShadow={"0 4px 20px rgba(0,0,0,.08)"}
                  maxW={650}
                  mb={"-50px"}
                  src="/images/png/chart-1.png"
                  w={"full"}
                />
              </HStack>
            </Box>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="reserve">
        <div className="container">
          <div className="reserve-content">
            <h2>
              Integrate in minutes,
              <br />
              scale to millions.
            </h2>
            <div className="reserve-features">
              <div className="reserve-feature">
                <div className="reserve-icon">
                  <Icon>
                    <FaNetworkWired />
                  </Icon>
                </div>
                <div>
                  <h3>Connect your systems</h3>
                  <p>
                    Integrate our APIs into your existing infrastructure with
                    our comprehensive documentation and SDKs.
                  </p>
                </div>
              </div>
              <div className="reserve-feature">
                <div className="reserve-icon">
                  <Icon>
                    <FaObjectGroup />
                  </Icon>
                </div>
                <div>
                  <h3>Customize workflows</h3>
                  <p>
                    Build custom payment flows that match your business needs
                    with our flexible configuration options.
                  </p>
                </div>
              </div>
              <div className="reserve-feature">
                <div className="reserve-icon">
                  <Icon>
                    <FaChartSimple />
                  </Icon>
                </div>
                <div>
                  <h3>Monitor & optimize</h3>
                  <p>
                    Track performance with real-time analytics and optimize your
                    payment processing with actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="innovation">
        <div className="container">
          <h2>
            Powering the next
            <br />
            generation of commerce
          </h2>
          <p>
            From fintech startups to global enterprises,
            <br />
            we&apos;re building the infrastructure for tomorrow&apos;s economy.
          </p>
          <div className="innovation-stats">
            <div className="innovation-stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="innovation-stat">
              <div className="stat-number">$2.4B+</div>
              <div className="stat-label">Processed annually</div>
            </div>
            <div className="innovation-stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Supported currencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <div className="pricing-header">
            <h2>Choose your plan</h2>
            <p>Start free, upgrade when you&apos;re ready</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Starter</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">0</span>
                  <span className="period">/month</span>
                </div>
                <p className="price-description">Perfect for startups</p>
              </div>
              <div className="pricing-features">
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Up to $10K monthly volume</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Basic API access</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Email support</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Standard settlement</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>2.9% + $0.30 per transaction</span>
                </div>
              </div>
              <button className="pricing-btn">Get Started</button>
            </div>
            <div className="pricing-card premium">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-card-header">
                <h3>Enterprise</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">299</span>
                  <span className="period">/month</span>
                </div>
                <p className="price-description">For high-volume businesses</p>
              </div>
              <div className="pricing-features">
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Unlimited volume</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Advanced APIs & webhooks</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Dedicated support</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Real-time settlements</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Custom pricing</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>White-label solutions</span>
                </div>
              </div>
              <button className="pricing-btn premium-btn">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>
              Ready to transform your
              <br />
              global payment infrastructure?
            </h2>
            <HStack
              className="cta-buttons"
              flexDirection={{ base: "column", md: "row" }}
              gap={4}
              justifyContent={"center"}
            >
              <button className="cta-primary">Get Started Free</button>
              <Box w={"207px"}>
                <button className="cta-secondary">Learn More →</button>
              </Box>
            </HStack>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">NexusPay</span>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Solutions</h4>
                <a href="#">Banking</a>
                <a href="#">Payments</a>
                <a href="#">Cards</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Security</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 NexusPay. All rights reserved.</p>
            <div className="social-icons">
              <span>f</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .header .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: #6366f1;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #6366f1;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #6366f1;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .login-link {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .login-link:hover {
          color: #6366f1;
        }

        .cta-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu-btn span {
          width: 25px;
          height: 3px;
          background: #333;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Hero */
        .hero {
          padding: 4rem 0;
          background: #f8f9fa;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
        }

        .hero-cta-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .hero-cta-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .hero-cta-primary:hover,
        .signup-btn:hover,
        .cta-btn:hover {
          background: linear-gradient(135deg, #4345a3, #8b5cf6);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .hero-cta-secondary {
          background: transparent;
          color: #6366f1;
          padding: 1rem 2rem;
          border: 2px solid #6366f1;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-cta-secondary:hover {
          background: #6366f1;
          color: white;
          transform: translateY(-2px);
        }

        .partner-logos {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .partner {
          font-size: 1.2rem;
          font-weight: 600;
          color: #999;
        }

        .signup-form {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-header h3 {
          font-size: 1.8rem;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: #666;
          font-size: 1rem;
        }

        .signup-form-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: #333;
          font-size: 0.9rem;
        }

        .form-group input {
          padding: 1rem;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        .form-group input:focus {
          outline: none;
          border-color: #6366f1;
          background: white;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .signup-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          margin-top: 0.5rem;
        }

        .signup-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .form-footer {
          text-align: center;
          color: #666;
          font-size: 0.9rem;
        }

        .form-footer a {
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
        }

        .form-footer a:hover {
          text-decoration: underline;
        }

        /* Features */
        .features {
          padding: 6rem 0;
        }

        .features-title {
          font-size: 3rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }

        .features-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .feature-card {
          text-align: center;
          padding: 2rem;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        /* Stats */
        .stats {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .stats-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .stats-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .stats-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .stats-card h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .stats-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .stat-large {
          font-size: 3.5rem;
          font-weight: bold;
          color: #6366f1;
          margin-bottom: 1rem;
        }

        .stats-card p {
          color: #666;
          line-height: 1.6;
        }

        .stat-icons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          background: #6366f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .volatility-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .volatility-card h3 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .volatility-card p {
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .chart {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
          position: relative;
        }

        .chart-line {
          height: 80px;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          border-radius: 8px 8px 0 0;
          margin-bottom: 1rem;
        }

        .chart-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: #6366f1;
        }

        /* Reserve */
        .reserve {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1e1b4b, #312e81);
          color: white;
        }

        .reserve h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 3rem;
        }

        .reserve-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .reserve-feature {
          display: flex;
          gap: 1.5rem;
        }

        .reserve-icon {
          width: 40px;
          height: 40px;
          background: #6366f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: bold;
        }

        .reserve-feature h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .reserve-feature p {
          color: rgba(255, 255, 255, 0.8);
        }

        /* Innovation */
        .innovation {
          padding: 6rem 0;
          text-align: center;
        }

        .innovation h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .innovation p {
          color: #666;
          margin-bottom: 4rem;
        }

        .innovation-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .innovation-stat {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #6366f1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #666;
          font-weight: 500;
        }

        /* Pricing */
        .pricing {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .pricing-header h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .pricing-header p {
          color: #666;
          font-size: 1.2rem;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .pricing-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          position: relative;
          transition: all 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .pricing-card.premium {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }

        .pricing-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #ff6b6b;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .pricing-card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .pricing-card h3 {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .currency {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .amount {
          font-size: 3rem;
          font-weight: bold;
          margin: 0 0.25rem;
        }

        .period {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .price-description {
          color: #666;
          font-size: 1rem;
        }

        .pricing-card.premium .price-description {
          color: rgba(255, 255, 255, 0.8);
        }

        .pricing-features {
          margin-bottom: 3.5rem;
        }

        .pricing-card.premium .pricing-features {
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .pricing-card.premium .feature-item {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .check {
          width: 20px;
          height: 20px;
          background: #6366f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .pricing-card.premium .check {
          background: rgba(255, 255, 255, 0.2);
        }

        .pricing-btn {
          width: 100%;
          background: #6366f1;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pricing-btn:hover {
          background: #4c4fb8;
          transform: translateY(-2px);
        }

        .premium-btn {
          background: white;
          color: #6366f1;
        }

        .premium-btn:hover {
          background: rgba(255, 255, 255, 0.9);
        }

        /* Final CTA */
        .final-cta {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1e1b4b, #312e81);
          color: white;
          text-align: center;
        }

        .final-cta h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .cta-primary {
          background: #6366f1;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
        }

        .settlement.cta-primary {
          padding: 0.85rem 1.5rem;
          font-size: 1rem;
        }

        .cta-primary:hover {
          background: #474aeb;
        }

        .cta-secondary {
          background: transparent;
          color: white;
          padding: 1rem 2rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
        }

        .cta-secondary:hover {
          background: #474aeb;
        }

        /* Footer */
        .footer {
          padding: 4rem 0 2rem;
          background: #f8f9fa;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 4rem;
          margin-bottom: 2rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .footer-column h4 {
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .footer-column a {
          display: block;
          text-decoration: none;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icons span {
          width: 40px;
          height: 40px;
          background: #6366f1;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-content,
          .stats-cards,
          .reserve-features,
          .features-grid,
          .innovation-stats,
          .pricing-cards {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .features-title,
          .innovation h2,
          .final-cta h2,
          .pricing-header h2 {
            font-size: 2rem;
          }

          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
          }

          .signup-form {
            padding: 2rem;
          }

          .stats-card,
          .volatility-card {
            padding: 2rem;
          }

          .pricing-card {
            padding: 2rem;
          }

          .pricing-card-header {
            text-align: left;
          }

          .price {
            justify-content: flex-start;
          }

          .pricing-badge {
            display: none;
          }

          .pricing-card.premium {
            transform: none;
          }

          .partner-logos {
            justify-content: center;
          }

          .settlement.cta-primary {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NexusPayLanding;
