 // ============================================
 // EmailJS Configuration for Printer Fix
 // ============================================
 // 
 // To set up EmailJS:
 // 1. Go to https://www.emailjs.com/ and create a free account
 // 2. Create an Email Service (e.g., Gmail, Outlook)
 // 3. Create an Email Template with these variables:
 //    - {{from_name}} - Sender's name
 //    - {{from_email}} - Sender's email
 //    - {{subject}} - Email subject
 //    - {{message}} - Email message
 // 4. Copy your credentials below:
 //
 // ============================================
 
 export const EMAILJS_CONFIG = {
   // Your EmailJS Public Key (Account > API Keys)
   PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
   
   // Your EmailJS Service ID (Email Services > Your Service)
   SERVICE_ID: 'YOUR_SERVICE_ID',
   
   // Your EmailJS Template ID (Email Templates > Your Template)
   TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
 };
 
 // Check if EmailJS is configured
 export const isEmailJSConfigured = (): boolean => {
   return (
     EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
     EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
     EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID'
   );
 };