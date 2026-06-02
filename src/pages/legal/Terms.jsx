import LegalLayout from '../../components/LegalLayout'

const sections = [
  {
    h: 'Acceptance of These Terms',
    body: [
      'These Terms of Use ("Terms") govern your access to and use of antiqueclockrestorers.com (the "Site"), operated by Antique Clock Restorers ("we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.'
    ]
  },
  {
    h: 'About the Site',
    body: [
      'The Site is an educational journal and community devoted to the restoration and care of antique clocks, pocket watches, and vintage collectibles. We publish articles, guides, reference material, and reader stories. We do not sell clocks and we do not accept timepieces for repair.'
    ]
  },
  {
    h: 'Educational Purpose — No Professional Advice',
    body: [
      'All content on the Site is provided for general educational and informational purposes only. It does not constitute professional horological, appraisal, financial, insurance, or legal advice, and it is not a substitute for the judgment of a qualified professional. You should consult an appropriate expert before acting on any information found here, particularly when a clock or collectible is rare, valuable, or of sentimental importance.'
    ]
  },
  {
    h: 'Assumption of Risk',
    body: [
      'Restoring and maintaining mechanical timepieces involves tools, springs under tension, and delicate components, and carries inherent risks of personal injury and of damage to property and to the items themselves. You acknowledge and accept these risks. You are solely responsible for working safely, for any work you choose to perform, and for deciding when a task should be entrusted to a professional.'
    ]
  },
  {
    h: 'Intellectual Property',
    body: [
      'The Site and its content — including text, photographs, graphics, logos, and the selection and arrangement of that content — are owned by or licensed to Antique Clock Restorers and are protected by copyright and other laws. You may view and print content for your own personal, non-commercial use. You may not copy, republish, distribute, or create derivative works from our content without our prior written permission.'
    ]
  },
  {
    h: 'Permitted Use and User Conduct',
    body: [
      'You agree to use the Site lawfully and respectfully. You will not use the Site to violate any law, infringe the rights of others, transmit harmful or malicious code, attempt to gain unauthorized access to our systems, or interfere with the proper functioning of the Site. We reserve the right to restrict access to anyone who misuses the Site.'
    ]
  },
  {
    h: 'User Submissions',
    body: [
      'If you send us a message, story, photograph, or other material, you confirm that you have the right to do so and that it does not infringe the rights of any third party. By submitting material you grant us a non-exclusive, royalty-free license to use, edit, and display it in connection with the Site and our communications, with attribution where appropriate. We are not obligated to publish any submission and may decline or remove material at our discretion.'
    ]
  },
  {
    h: 'Newsletter and Communications',
    body: [
      'If you subscribe to our newsletter, you consent to receive periodic emails from us. Every email includes a way to unsubscribe, and you may opt out at any time. We do not sell or rent subscriber lists.'
    ]
  },
  {
    h: 'Third-Party Links and Resources',
    body: [
      'The Site may reference or link to third-party websites, products, and services that we do not control. We provide these references for convenience and do not endorse and are not responsible for the content, accuracy, or practices of any third party. Accessing third-party resources is at your own risk and subject to their terms.'
    ]
  },
  {
    h: 'Disclaimer of Warranties',
    body: [
      'The Site and all content are provided "as is" and "as available," without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components, or that any information is complete or current.'
    ]
  },
  {
    h: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Antique Clock Restorers and its contributors will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, property, or profits, arising out of or related to your use of the Site or your reliance on its content — including any damage to timepieces or injury resulting from restoration work — whether based in contract, tort, or any other theory, even if advised of the possibility of such damages.'
    ]
  },
  {
    h: 'Indemnification',
    body: [
      'You agree to indemnify and hold harmless Antique Clock Restorers and its contributors from any claims, losses, liabilities, and expenses (including reasonable legal fees) arising out of your use of the Site, your violation of these Terms, or your infringement of any right of another party.'
    ]
  },
  {
    h: 'Privacy',
    body: [
      'Your use of the Site is also governed by our Privacy Policy, which explains how we collect and use information. By using the Site you consent to those practices.'
    ]
  },
  {
    h: 'Changes to These Terms',
    body: [
      'We may revise these Terms from time to time. Changes take effect when posted, and we will update the "Last updated" date accordingly. Your continued use of the Site after changes are posted constitutes acceptance of the revised Terms.'
    ]
  },
  {
    h: 'Governing Law',
    body: [
      'These Terms are governed by the laws of the State of Arizona, United States, without regard to its conflict-of-law principles. Any dispute arising from these Terms or the Site will be subject to the exclusive jurisdiction of the state and federal courts located in Arizona.'
    ]
  },
  {
    h: 'Severability and Entire Agreement',
    body: [
      'If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force. These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and us regarding the Site.'
    ]
  },
  {
    h: 'Contact',
    body: [
      'If you have questions about these Terms, please contact us using the details below.'
    ]
  }
]

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      description="The terms governing your use of the Antique Clock Restorers website, including educational-purpose, liability, intellectual property, and governing-law provisions."
      path="/legal/terms"
      updated="May 1, 2025"
      sections={sections}
    />
  )
}
