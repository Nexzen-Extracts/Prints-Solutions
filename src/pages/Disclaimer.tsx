 import Layout from '@/components/layout/Layout';
 
 const Disclaimer = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
           <p className="text-muted-foreground mb-8">Last updated: February 5, 2026</p>
           <div className="prose prose-lg text-muted-foreground space-y-8">
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">General Information</h2>
               <p>The information provided on printerfix.shop is for general informational purposes only. While we strive to keep product information accurate and up-to-date, we make no representations or warranties about the completeness, accuracy, reliability, or availability of any information.</p>
             </section>
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">Product Information</h2>
               <p>Product specifications, images, and descriptions are provided for reference only and may differ from actual products. We reserve the right to modify product information without prior notice.</p>
             </section>
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">Pricing</h2>
               <p>All prices are subject to change without notice. Despite our best efforts, pricing errors may occur. We reserve the right to cancel orders if products are listed at incorrect prices.</p>
             </section>
             <section>
               <h2 className="text-xl font-semibold text-foreground mb-4">Third-Party Links</h2>
               <p>Our website may contain links to third-party websites. We have no control over the content or practices of these sites and accept no responsibility for them.</p>
             </section>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Disclaimer;