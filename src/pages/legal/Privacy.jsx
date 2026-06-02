import LegalLayout from '../../components/LegalLayout'

const sections = [
  {
    h: 'Introduction',
    body: [
      'Antique Clock Restorers ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit antiqueclockrestorers.com (the "Site"), how we use it, the choices you have, and how we protect it. By using the Site you agree to the practices described here.',
      'We have written this policy in plain language because many of our readers are not technical specialists, and we believe you deserve to understand clearly how your information is handled.'
    ]
  },
  {
    h: 'Information We Collect',
    body: [
      'We collect only the information needed to operate the Site and respond to you. This falls into two categories. Information you provide directly: your name, email address, and message when you use our contact form or subscribe to our newsletter. Information collected automatically: standard technical data such as your browser type, device, approximate region, the pages you view, and the time spent on them.',
      'We do not ask for, and you should never send us, sensitive personal information such as financial account numbers or government identifiers.'
    ]
  },
  {
    h: 'Cookies and Analytics',
    body: [
      'The Site uses Google Analytics (Google tag G-4J046JXWVC) to understand, in aggregate, how visitors use our guides so we can improve them. Analytics cookies are disabled by default. We implement Google Consent Mode v2, which means analytics and advertising storage remain set to "denied" until you actively consent through our cookie banner.',
      'If you accept analytics through the banner, your choice is stored locally in your browser so we do not ask again. You may withdraw consent at any time by clearing your browser storage or declining when prompted. Functional and security storage necessary for the Site to work remain enabled.'
    ]
  },
  {
    h: 'How We Use Your Information',
    body: [
      'We use the information we collect to respond to your questions and messages, send our newsletter to subscribers who have requested it, understand and improve how the Site performs, maintain the security and integrity of the Site, and comply with applicable law.',
      'We do not use automated decision-making that produces legal or similarly significant effects about you.'
    ]
  },
  {
    h: 'Legal Bases and Your Choices',
    body: [
      'Where required, we rely on your consent (for analytics and newsletter communications) and our legitimate interest in operating and securing the Site. You can decline analytics, unsubscribe from the newsletter at any time using the link in every email, and contact us to ask about the information we hold.'
    ]
  },
  {
    h: 'How We Share Information',
    body: [
      'We do not sell your personal information, and we do not share it with third parties for their own marketing. We share limited information only with service providers that help us operate the Site (such as Google Analytics and our email and hosting providers), and only as needed to perform those services. We may also disclose information if required by law or to protect our rights and the safety of others.'
    ]
  },
  {
    h: 'Data Retention',
    body: [
      'We keep contact-form messages and newsletter records only as long as needed to respond to you and to operate the newsletter, and analytics data is retained according to our analytics provider’s standard, limited retention settings. When information is no longer needed, we delete or anonymize it.'
    ]
  },
  {
    h: 'Your Privacy Rights',
    body: [
      'Depending on where you live, you may have the right to access, correct, or delete the personal information we hold about you, to object to or restrict certain processing, and to withdraw consent. Residents of California and certain other jurisdictions have specific rights under applicable law, including the right not to be discriminated against for exercising them. To make a request, contact us using the details at the end of this policy; we will respond within the time required by law.'
    ]
  },
  {
    h: 'Children’s Privacy',
    body: [
      'The Site is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us and we will delete it.'
    ]
  },
  {
    h: 'Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect your information, including serving the Site over encrypted connections and limiting access to the information we collect. No method of transmission or storage is perfectly secure, however, and we cannot guarantee absolute security.'
    ]
  },
  {
    h: 'Third-Party Links',
    body: [
      'Our guides occasionally reference or link to other websites and resources. We are not responsible for the privacy practices of those third parties, and we encourage you to read their privacy policies before providing them any information.'
    ]
  },
  {
    h: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or the law. When we do, we will revise the "Last updated" date at the top of this page. Significant changes will be communicated prominently on the Site.'
    ]
  },
  {
    h: 'Contact Us',
    body: [
      'If you have questions or requests regarding this Privacy Policy or your personal information, please contact us using the details below. We are glad to help and will respond as promptly as we reasonably can.'
    ]
  }
]

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How Antique Clock Restorers collects, uses, and protects your information, including our use of Google Analytics with Consent Mode v2."
      path="/legal/privacy"
      updated="May 1, 2025"
      sections={sections}
    />
  )
}
