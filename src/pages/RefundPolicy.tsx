 import Layout from '@/components/layout/Layout';
 
 const RefundPolicy = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-foreground mb-8">Refund & Return Policy</h1>
           <p className="text-muted-foreground mb-8">Last updated: February 5, 2026</p>
           <div className="prose prose-lg text-muted-foreground space-y-8">
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">30-Day Return Policy</h2>
               <p>We offer a 30-day return policy on most products. If you're not satisfied with your purchase, you may return it within 30 days of delivery for a full refund or exchange.</p>
             </section>
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">Eligibility</h2>
               <ul className="list-disc pl-6 space-y-2">
                 <li>Items must be unused and in original packaging</li>
                 <li>Ink/toner cartridges must be sealed and unopened</li>
                 <li>Items must be returned within 30 days of delivery</li>
                 <li>Proof of purchase is required</li>
               </ul>
             </section>
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">How to Request a Return</h2>
               <p>Email support@printerfix.shop with your order number and reason for return. We'll provide return instructions within 24-48 hours.</p>
             </section>
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">Refund Processing</h2>
               <p>Refunds are processed within 5-7 business days after we receive and inspect the returned item. Refunds are issued to the original payment method.</p>
             </section>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default RefundPolicy;