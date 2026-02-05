 import Layout from '@/components/layout/Layout';
 
 const PrivacyPolicy = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
           <p className="text-muted-foreground mb-8">Last updated: February 5, 2026</p>
 
           <div className="prose prose-lg text-muted-foreground space-y-8">
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
               <p>
                 Printer Fix ("we", "our", or "us") operates the website printerfix.shop. This Privacy Policy 
                 explains how we collect, use, disclose, and safeguard your information when you visit our 
                 website or make a purchase.
               </p>
               <p>
                 By using our website, you consent to the data practices described in this policy. If you 
                 do not agree with the terms of this privacy policy, please do not access the site.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
               <p>We may collect information about you in a variety of ways:</p>
               <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Personal Data</h3>
               <p>
                 When you make a purchase or attempt to make a purchase, we collect certain information 
                 from you, including your name, billing address, shipping address, payment information, 
                 email address, and phone number.
               </p>
               <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Device Information</h3>
               <p>
                 When you visit our website, we automatically collect certain information about your device, 
                 including your web browser, IP address, time zone, and some of the cookies installed on 
                 your device.
               </p>
               <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Order Information</h3>
               <p>
                 We collect information about the products you view, add to cart, purchase, and any 
                 interactions you have with our website.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
               <p>We use the information we collect to:</p>
               <ul className="list-disc pl-6 space-y-2">
                 <li>Process and fulfill your orders</li>
                 <li>Communicate with you about your orders and provide customer support</li>
                 <li>Send you promotional emails (you can opt out at any time)</li>
                 <li>Improve our website and product offerings</li>
                 <li>Screen orders for potential fraud or risk</li>
                 <li>Comply with applicable laws and regulations</li>
               </ul>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">4. Sharing Your Information</h2>
               <p>
                 We share your Personal Information with third parties only to help us process orders 
                 and operate our business:
               </p>
               <ul className="list-disc pl-6 space-y-2">
                 <li>Payment processors to process your payments securely</li>
                 <li>Shipping partners to deliver your orders</li>
                 <li>Analytics providers to help us understand website usage</li>
               </ul>
               <p className="mt-4">
                 We do not sell, trade, or rent your personal identification information to others.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Security</h2>
               <p>
                 We implement appropriate technical and organizational security measures to protect your 
                 personal information against unauthorized access, alteration, disclosure, or destruction. 
                 All payment transactions are processed through secure payment gateways and we do not 
                 store your credit card information on our servers.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
               <p>You have the right to:</p>
               <ul className="list-disc pl-6 space-y-2">
                 <li>Access the personal information we hold about you</li>
                 <li>Request correction of inaccurate information</li>
                 <li>Request deletion of your personal information</li>
                 <li>Opt out of marketing communications</li>
               </ul>
               <p className="mt-4">
                 To exercise any of these rights, please contact us at support@printerfix.shop
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies</h2>
               <p>
                 We use cookies and similar tracking technologies to track activity on our website. 
                 Cookies are small data files stored on your device. You can instruct your browser to 
                 refuse all cookies or indicate when a cookie is being sent. However, if you do not 
                 accept cookies, you may not be able to use some portions of our website.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
               <p>
                 We may update this privacy policy from time to time. We will notify you of any changes 
                 by posting the new policy on this page and updating the "Last updated" date.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Us</h2>
               <p>
                 If you have any questions about this Privacy Policy, please contact us at:
               </p>
               <p className="mt-2">
                 Email: support@printerfix.shop<br />
                 Phone: +1-877-419-4506<br />
                 Address: 20503 Khole Springs Lane, Cypress, TX, 77433
               </p>
             </section>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default PrivacyPolicy;