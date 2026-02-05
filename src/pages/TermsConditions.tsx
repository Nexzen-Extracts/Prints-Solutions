 import Layout from '@/components/layout/Layout';
 
 const TermsConditions = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
           <p className="text-muted-foreground mb-8">Last updated: February 5, 2026</p>
 
           <div className="prose prose-lg text-muted-foreground space-y-8">
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
               <p>
                 These Terms and Conditions constitute a legally binding agreement between you and Printer Fix 
                 concerning your access to and use of the printerfix.shop website. By accessing or using the 
                 website, you agree to be bound by these Terms. If you disagree with any part of these terms, 
                 you may not access the website.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">2. Products and Services</h2>
               <p>
                 We make every effort to display as accurately as possible the colors, features, specifications, 
                 and details of the products available on the website. However, we do not guarantee that the 
                 colors, features, specifications, and details of the products will be accurate, complete, 
                 reliable, current, or free of other errors.
               </p>
               <p>
                 All products are subject to availability. We reserve the right to discontinue any product 
                 at any time without notice.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">3. Pricing and Payment</h2>
               <p>
                 All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless 
                 otherwise stated. We reserve the right to change prices at any time without prior notice.
               </p>
               <p>
                 Payment must be received in full before orders are processed. We accept major credit cards, 
                 debit cards, UPI, and net banking. Payment processing is handled by secure third-party 
                 payment processors.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">4. Order Acceptance</h2>
               <p>
                 Your receipt of an order confirmation does not constitute our acceptance of your order. 
                 We reserve the right to accept or decline your order for any reason, including but not 
                 limited to product availability, errors in pricing or product information, or issues 
                 identified by our fraud protection systems.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">5. Shipping and Delivery</h2>
               <p>
                 We aim to dispatch orders within 1-2 business days of receiving payment. Delivery times 
                 vary depending on your location and shipping method selected. Estimated delivery times 
                 are provided as a guide only and are not guaranteed.
               </p>
               <p>
                 Risk of loss and title for products purchased pass to you upon delivery of the products 
                 to the carrier.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">6. Returns and Refunds</h2>
               <p>
                 Please refer to our separate Refund & Return Policy for detailed information about 
                 returns, exchanges, and refunds.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">7. User Responsibilities</h2>
               <p>By using our website, you agree to:</p>
               <ul className="list-disc pl-6 space-y-2">
                 <li>Provide accurate, current, and complete information</li>
                 <li>Maintain the security of your account credentials</li>
                 <li>Not use the website for any unlawful purpose</li>
                 <li>Not attempt to interfere with the proper functioning of the website</li>
                 <li>Not reproduce, duplicate, copy, sell, or exploit any portion of the website</li>
               </ul>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
               <p>
                 The website and its entire contents, features, and functionality (including but not limited 
                 to all information, software, text, displays, images, and the design) are owned by Printer Fix 
                 and are protected by copyright, trademark, and other intellectual property laws.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
               <p>
                 To the fullest extent permitted by law, Printer Fix shall not be liable for any indirect, 
                 incidental, special, consequential, or punitive damages, including but not limited to loss 
                 of profits, data, use, or other intangible losses, resulting from your access to or use 
                 of the website.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">10. Governing Law</h2>
               <p>
                 These Terms shall be governed by and construed in accordance with the laws of India. 
                 Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                 of the courts of Gurgaon, Haryana.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
               <p>
                 We reserve the right to modify these Terms at any time. Changes will be effective 
                 immediately upon posting to the website. Your continued use of the website after 
                 any changes constitutes your acceptance of the new Terms.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact Information</h2>
               <p>
                 For questions about these Terms, please contact us at:
               </p>
               <p className="mt-2">
                 Email: support@printerfix.shop<br />
                 Phone: +1-877-419-4506
               </p>
             </section>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default TermsConditions;