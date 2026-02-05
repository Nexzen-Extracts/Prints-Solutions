 import Layout from '@/components/layout/Layout';
 import { Card, CardContent } from '@/components/ui/card';
 import { Users, Award, Target, Heart } from 'lucide-react';
 
 const stats = [
   { label: 'Years in Business', value: '10+' },
   { label: 'Happy Customers', value: '50,000+' },
   { label: 'Products Delivered', value: '200,000+' },
   { label: 'Cities Served', value: '500+' },
 ];
 
 const values = [
   {
     icon: Award,
     title: 'Quality First',
     description: 'We source only genuine products from authorized distributors. Every item we sell is backed by manufacturer warranty and our personal guarantee of quality.',
   },
   {
     icon: Users,
     title: 'Customer Focus',
     description: 'Our customers are at the heart of everything we do. We listen to your needs, provide honest recommendations, and stand behind every purchase.',
   },
   {
     icon: Target,
     title: 'Reliability',
     description: 'When you order from Printer Fix, you can count on timely delivery and products that work as promised. We understand that your printing needs can\'t wait.',
   },
   {
     icon: Heart,
     title: 'Integrity',
     description: 'We believe in transparent pricing, honest product descriptions, and fair business practices. No hidden fees, no surprises.',
   },
 ];
 
 const About = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         {/* Hero Section */}
         <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-foreground mb-6">About Printer Fix</h1>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             We're a team of printing enthusiasts dedicated to helping homes and businesses 
             find the right printing solutions at fair prices.
           </p>
         </div>
 
         {/* Our Story */}
         <section className="mb-16">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
             <div className="prose prose-lg text-muted-foreground space-y-4">
               <p>
                 Printer Fix started in 2015 with a simple mission: make it easy for people to get 
                 quality printing supplies without the hassle of visiting multiple stores or worrying 
                 about product authenticity.
               </p>
               <p>
                 What began as a small operation in Gurgaon has grown into a trusted online destination 
                 for printers, ink, toner, paper, and accessories. Today, we serve customers across 
                 India, from individual home users to large enterprises.
               </p>
               <p>
                 We understand that printing is essential for many businesses and homes. A printer 
                 running out of ink at a critical moment or using subpar supplies that damage your 
                 equipment can be frustrating and costly. That's why we focus on providing genuine, 
                 reliable products at competitive prices.
               </p>
               <p>
                 Our team personally tests and evaluates products before adding them to our catalog. 
                 We build direct relationships with manufacturers and authorized distributors to ensure 
                 you receive authentic products every time.
               </p>
             </div>
           </div>
         </section>
 
         {/* Stats */}
         <section className="mb-16">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {stats.map((stat, index) => (
               <Card key={index} className="text-center">
                 <CardContent className="pt-6">
                   <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                   <p className="text-sm text-muted-foreground">{stat.label}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </section>
 
         {/* Our Values */}
         <section className="mb-16">
           <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Values</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {values.map((value, index) => (
               <Card key={index}>
                 <CardContent className="pt-6">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                       <value.icon className="h-6 w-6 text-primary" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                       <p className="text-muted-foreground text-sm leading-relaxed">
                         {value.description}
                       </p>
                     </div>
                   </div>
                 </CardContent>
               </Card>
             ))}
           </div>
         </section>
 
         {/* Mission */}
         <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
           <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             To be India's most trusted destination for printing solutions by providing genuine 
             products, honest advice, and exceptional service that helps our customers print 
             with confidence.
           </p>
         </section>
       </div>
     </Layout>
   );
 };
 
 export default About;