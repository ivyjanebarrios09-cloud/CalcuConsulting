
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="prose max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold font-headline text-primary mb-8">Privacy Policy</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString('en-GB')}</strong></p>

        <p>
          CalcuConsulting ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect personal information from you in a variety of ways, including when you apply for a job, inquire about our client services, or contact us directly.</p>

        <h3>For Candidates:</h3>
        <ul>
          <li><strong>Personal Identification Information:</strong> Name, email address, phone number, location.</li>
          <li><strong>Professional Information:</strong> Job titles of interest, employment history, qualifications, and any other information you provide in your application.</li>
        </ul>

        <h3>For Clients:</h3>
        <ul>
          <li><strong>Contact Information:</strong> Company name, contact person's name, email address, phone number.</li>
          <li><strong>Business Information:</strong> Details about job vacancies, required skills, employment type, and other information related to your workforce needs.</li>
        </ul>

        <h3>For General Inquiries:</h3>
        <ul>
          <li><strong>Contact Details:</strong> Name, email address, and the content of your message.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li><strong>To Provide Services:</strong> To match candidates with potential job opportunities and to help clients find suitable talent.</li>
          <li><strong>To Communicate:</strong> To respond to your inquiries, send you updates about your application, discuss client needs, and provide information about our services.</li>
          <li><strong>For Internal Record Keeping:</strong> To maintain our database of candidates and clients for current and future recruitment needs.</li>
          <li><strong>To Improve Our Services:</strong> To understand how you use our services and to improve our website and service offerings.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell, trade, or rent your personal identification information to others. We may share your information in the following situations:</p>
        <ul>
          <li><strong>With Potential Employers:</strong> With your consent, we will share candidate information with clients who have job vacancies that match your profile.</li>
          <li><strong>With Candidates:</strong> We may share relevant details about a client's job vacancy with interested candidates.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We are committed to ensuring that your information is secure. We use appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
        </p>
        
        <h2>5. Your Data Protection Rights</h2>
        <p>You have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        </ul>
        <p>If you wish to exercise any of these rights, please contact us.</p>
        
        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We have the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
        </p>
        
        <h2>7. Contacting Us</h2>
        <p>
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
        </p>
        <p><strong>CalcuConsulting</strong></p>
        <p>Email: calcuconsulting@proton.me</p>
      </div>
    </div>
  );
}
