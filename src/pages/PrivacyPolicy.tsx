 import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* PAGE TITLE & DATES */}
<section>
  <h1 className="text-4xl font-bold text-foreground mb-4">
    Privacy Policy
  </h1>

  <p className="text-muted-foreground">
    <strong>Effective Date:</strong> October 23, 2025
  </p>
  <p className="text-muted-foreground mb-6">
    <strong>Last Updated:</strong> October 23, 2025
  </p>
</section>

{/* INTRODUCTION */}
<section>
  <p>
    Welcome to <strong>Printerfix</strong> (“we,” “our,” or “us”). Your
    privacy matters to us, and we are committed to protecting the personal
    information you share when you visit or make a purchase through our
    website <strong>www.printerfix.com</strong> (“the Site”).
  </p>
</section>

{/* POLICY SCOPE */}
<section>
  <p>
    This Privacy Policy describes how we collect, use, disclose, and protect
    your information in compliance with applicable privacy laws in the United
    States (including the California Consumer Privacy Act (CCPA) and the
    California Privacy Rights Act (CPRA)) and Canada (under the Personal
    Information Protection and Electronic Documents Act (PIPEDA)).
  </p>
</section>

{/* USER CONSENT */}
<section>
  <p>
    By using our website, you acknowledge and agree to this Privacy Policy.
  </p>
</section>


            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Information We Collect
              </h2>

              <p>
                We collect personal and non-personal information to process
                orders, enhance user experience, and improve our services.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
                1.1 Personal Information
              </h3>

              <p>When you engage with our website, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Billing and shipping address</li>
                <li>Phone number</li>
                <li>
                  Payment details (processed securely through third-party
                  payment gateways)
                </li>
                <li>Order history, preferences, and communication records</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">
                1.2 Non-Personal Information
              </h3>

              <p>Automatically collected data may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and operating system</li>
                <li>Device information (desktop, tablet, or mobile)</li>
                <li>Website usage statistics and browsing patterns</li>
                <li>Cookies, pixels, and similar tracking technologies</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill orders efficiently</li>
                <li>Provide shipping updates and order confirmations</li>
                <li>Communicate with you regarding support or inquiries</li>
                <li>
                  Improve website performance and personalize your experience
                </li>
                <li>
                  Send promotional offers, newsletters, or updates (only with
                  your consent)
                </li>
                <li>
                  Prevent fraudulent activity and ensure platform security
                </li>
                <li>Comply with legal, tax, and regulatory obligations</li>
              </ul>
            </section>

            {/* 3. Sharing of Information */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Sharing of Information
              </h2>

              <p>
                We do not sell or rent your personal data. However, we may share
                limited information with trusted third parties:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Payment Processors:</strong> To authorize and complete
                  secure transactions.
                </li>
                <li>
                  <strong>Shipping Carriers:</strong> To deliver your orders
                  accurately and on time.
                </li>
                <li>
                  <strong>Service Providers:</strong> For hosting, analytics,
                  marketing, and customer support.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to
                  prevent fraud.
                </li>
              </ul>

              <p className="mt-4">
                All partners are contractually obligated to protect your data
                and use it only for authorized purposes.
              </p>
            </section>

            {/* 4. Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Cookies and Tracking Technologies
              </h2>

              <p>
                We use cookies and tracking tools to enhance your browsing
                experience and deliver relevant promotions.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for website
                  functionality.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Analyze site traffic
                  and usability.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Enable personalized ads
                  and remarketing.
                </li>
              </ul>

              <p className="mt-4">
                You can manage or disable cookies via your browser settings.
              </p>
            </section>

            {/* 5. DATA SECURITY */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    5. Data Security
  </h2>

  <p>
    We use robust technical and organizational safeguards to protect your
    personal data, including:
  </p>

  <ul className="list-disc pl-6 space-y-2 mt-3">
    <li>SSL encryption for secure data transmission</li>
    <li>Encrypted payment gateways for financial transactions</li>
    <li>Firewalls and threat monitoring systems</li>
    <li>Restricted employee access to sensitive data</li>
  </ul>

  <p className="mt-4">
    Despite these efforts, no system is 100% secure. You share information
    with us at your own discretion.
  </p>
</section>

{/* 6. YOUR PRIVACY RIGHTS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    6. Your Privacy Rights (U.S. & Canada)
  </h2>

  <p>
    Depending on your location, you may have the right to:
  </p>

  <ul className="list-disc pl-6 space-y-2 mt-3">
    <li>Access the personal data we hold about you</li>
    <li>Request corrections to inaccurate or outdated information</li>
    <li>
      Request deletion of your personal data (subject to legal requirements)
    </li>
    <li>Opt out of marketing communications or targeted advertising</li>
    <li>Limit data sharing under CCPA/CPRA provisions</li>
  </ul>

  <p className="mt-4">
    To exercise your rights, contact us at{' '}
    <strong>support@printerfix.shop</strong> or call{' '}
    <strong>+1-877-419-4506</strong>.
  </p>

  <p>
    We may verify your identity before processing your request.
  </p>
</section>

{/* 7. DATA RETENTION */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    7. Data Retention
  </h2>

  <p>
    We retain your data only for as long as necessary to:
  </p>

  <ul className="list-disc pl-6 space-y-2 mt-3">
    <li>Fulfill your orders and provide support</li>
    <li>Maintain accurate business, tax, and compliance records</li>
    <li>Meet legal and regulatory obligations</li>
  </ul>

  <p className="mt-4">
    When no longer required, data is securely deleted or anonymized.
  </p>
</section>

              {/* 8. THIRD-PARTY LINKS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    8. Third-Party Links
  </h2>

  <p>
    Our website may include links to third-party platforms or external
    websites. We are not responsible for their privacy practices or content.
    Please review their privacy policies before providing any personal
    information.
  </p>
</section>

{/* 9. CHILDREN’S PRIVACY */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    9. Children’s Privacy
  </h2>

  <p>
    Our services are intended for users aged 18 years and older.
  </p>

  <p>
    We do not knowingly collect personal data from minors. If we learn that
    we have unintentionally gathered data from a child, it will be promptly
    deleted.
  </p>
</section>

{/* 10. INTERNATIONAL DATA TRANSFERS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    10. International Data Transfers
  </h2>

  <p>
    Your data may be stored or processed outside your country of residence,
    including in the United States.
  </p>

  <p>
    We ensure that any cross-border transfer complies with applicable
    privacy laws and provides adequate protection standards.
  </p>
</section>

{/* 11. UPDATES TO THIS POLICY */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    11. Updates to This Policy
  </h2>

  <p>
    We may revise this Privacy Policy from time to time to reflect changes
    in technology, laws, or business operations.
  </p>

  <p>
    The revised version will be posted on this page with an updated “Last
    Updated” date. Continued use of the website constitutes acceptance of
    the revised policy.
  </p>
</section>

{/* 12. CONTACT US */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    12. Contact Us
  </h2>

  <p>
    If you have any questions, requests, or concerns about this Privacy
    Policy, please contact us:
  </p>

  <p className="mt-4">
    <strong>Printerfix</strong><br />
    📧 Email: support@printerfix.shop<br />
    📞 Phone: +1-877-419-4506<br />
    📍 Address: 20503 Khole Springs Lane, Cypress, TX, 77433<br />
    🌐 Website: www.printerfix.com
  </p>
</section>

          </div>
        </div>
      
    </Layout>
  );
};

export default PrivacyPolicy;
