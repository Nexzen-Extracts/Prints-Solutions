 import Layout from '@/components/layout/Layout';
 
 const RefundPolicy = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto">
           
           {/* PAGE TITLE & DATES */}
<section>
  <h1 className="text-4xl font-bold text-foreground mb-4">
    Return & Refund Policy
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
    Thank you for shopping with <strong>Printerfix</strong>. We value your
    satisfaction and want to ensure your shopping experience is smooth and
    worry-free.
  </p>

  <p>
    This Return & Refund Policy explains when and how you can request a
    return, replacement, or refund for your purchase made on{' '}
    <strong>www.printerfix.com</strong> (“the Site”).
  </p>
</section>

{/* 1. ELIGIBILITY FOR RETURNS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    1. Eligibility for Returns
  </h2>

  <p>You may request a return if:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>The product you received is damaged, defective, or incorrect, or</li>
    <li>
      The item you received does not match the description shown on our
      website.
    </li>
  </ul>

  <p className="mt-4">To qualify for a return:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>The request must be made within 7 days of receiving your order.</li>
    <li>
      The item must be unused, in original packaging, and include all original
      accessories, manuals, and documentation.
    </li>
    <li>
      Proof of purchase (invoice or order confirmation) must be provided.
    </li>
  </ul>
</section>

{/* 2. NON-RETURNABLE ITEMS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    2. Non-Returnable Items
  </h2>

  <p>
    Certain products cannot be returned for safety, hygiene, or quality
    control reasons, including:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Opened or partially used ink cartridges, toner, or other consumables.
    </li>
    <li>
      Products damaged due to improper handling, installation, or misuse.
    </li>
    <li>Digital downloads, gift cards, or electronic codes.</li>
    <li>
      Items marked “Final Sale” or “Non-Returnable” at the time of purchase.
    </li>
  </ul>
</section>

{/* 3. RETURN PROCESS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    3. Return Process
  </h2>

  <p>To initiate a return, please follow these steps:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Contact our support team at <strong>support@printerfix.shop</strong>{' '}
      within 7 days of delivery.
    </li>
    <li>
      Provide your order number, a brief reason for return, and supporting
      photos (if applicable).
    </li>
    <li>
      Our team will review your request and provide a Return Authorization
      (RA) number along with shipping instructions.
    </li>
  </ul>

  <p className="mt-4">
    Please do not send items back without prior authorization, as they may
    not be accepted or refunded.
  </p>
</section>

{/* 4. RETURN SHIPPING */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    4. Return Shipping
  </h2>

  <p>
    If the return is due to our error (wrong, damaged, or defective item), we
    will provide a prepaid return shipping label.
  </p>

  <p>
    If the return is for any other reason (e.g., change of mind, ordered by
    mistake), the customer is responsible for return shipping costs.
  </p>

  <p>
    We recommend using a trackable shipping method and retaining the tracking
    receipt until the return is processed.
  </p>
</section>

{/* 5. REFUNDS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    5. Refunds
  </h2>

  <p>Once your return is received and inspected:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      We will notify you by email regarding the approval or rejection of your
      refund.
    </li>
    <li>
      Approved refunds will be processed to your original payment method
      within 5–10 business days.
    </li>
    <li>
      Refunds may take additional time to appear on your statement depending
      on your bank or payment provider.
    </li>
  </ul>

  <p className="mt-4">
    <strong>Partial Refunds May Apply If:</strong>
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>The returned item shows signs of use or missing components.</li>
    <li>The packaging is not intact or missing labels/manuals.</li>
  </ul>
</section>

{/* 6. REPLACEMENTS & EXCHANGES */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    6. Replacements & Exchanges
  </h2>

  <p>If you prefer an exchange instead of a refund:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      A replacement will be shipped once the original product is received
      and verified.
    </li>
    <li>
      If the replacement item is out of stock, a full refund will be issued
      instead.
    </li>
  </ul>
</section>

{/* 7. DAMAGED OR DEFECTIVE ITEMS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    7. Damaged or Defective Items
  </h2>

  <p>If your product arrives damaged or defective:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Contact us immediately at <strong>support@printerfix.shop</strong> with
      your order details and clear photos of the issue.
    </li>
    <li>
      We will investigate and provide a replacement or refund at no
      additional cost.
    </li>
  </ul>
</section>

{/* 8. ORDER CANCELLATIONS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    8. Order Cancellations
  </h2>

  <p>
    Orders can be canceled before shipment. Once an order has been
    dispatched, it cannot be canceled and will instead fall under our return
    policy guidelines.
  </p>

  <p>
    To cancel, please email <strong>support@printerfix.shop</strong> as soon
    as possible after placing your order.
  </p>
</section>
{/* 9. LATE OR MISSING REFUNDS */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    9. Late or Missing Refunds
  </h2>

  <p>
    If you haven’t received a refund after the stated processing period:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Check your bank or card statement.</li>
    <li>Contact your payment provider for updates.</li>
    <li>
      If unresolved, please reach out to us at{' '}
      <strong>support@printerfix.shop</strong>, and we’ll help track the issue.
    </li>
  </ul>
</section>

{/* 10. POLICY UPDATES */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    10. Policy Updates
  </h2>

  <p>
    Printerfix reserves the right to modify this Return & Refund Policy at
    any time without prior notice.
  </p>

  <p>
    Updates will be reflected on this page with the new “Last Updated” date.
  </p>
</section>

{/* 11. CONTACT US */}
<section>
  <h2 className="text-xl font-semibold text-foreground mb-4">
    11. Contact Us
  </h2>

  <p>
    For all return and refund inquiries, please contact our support team:
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
 
 export default RefundPolicy;