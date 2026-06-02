import LegalLayout from '../../components/LegalLayout'

const sections = [
  {
    h: 'Overview',
    body: [
      'This Refund Policy explains our approach to payments and refunds. Antique Clock Restorers is, first and foremost, a free educational journal and community. The great majority of what we publish — our guides, articles, and reader stories — is available to everyone at no cost, and our newsletter is free to join and free to leave.',
      'We provide this policy so that, should we ever offer a paid item, our practices are clear and fair in advance.'
    ]
  },
  {
    h: 'Free Content and Newsletter',
    body: [
      'Access to the Site’s articles and guides, and subscription to our newsletter, are entirely free. Because no payment is taken for these, no refund is necessary or applicable. You may unsubscribe from the newsletter at any time using the link in every email.'
    ]
  },
  {
    h: 'Paid Items, If Offered',
    body: [
      'From time to time we may offer optional paid items, such as a downloadable reference guide, a printed publication, or a workshop event. Where we do, the price, contents, and any delivery details will be stated clearly before you purchase, and the terms of this policy will apply to that purchase.'
    ]
  },
  {
    h: 'Digital Products',
    body: [
      'For digital products that are delivered immediately upon purchase, we offer a refund within 14 days of purchase if the product is defective, was not delivered, or was materially not as described. Because digital goods cannot be returned once downloaded, refunds outside these circumstances are granted at our discretion. If you experience any problem with a digital purchase, contact us and we will make it right.'
    ]
  },
  {
    h: 'Physical Goods',
    body: [
      'For any physical item we may sell, you may request a return within 30 days of delivery provided the item is in its original, undamaged condition. Return shipping is the buyer’s responsibility unless the item arrived damaged or incorrect, in which case we cover it. Refunds for approved returns are issued to the original payment method once we receive the item.'
    ]
  },
  {
    h: 'Events and Workshops',
    body: [
      'For any paid event or workshop, cancellations made at least 7 days before the event date are eligible for a full refund. Cancellations within 7 days may receive a partial refund or credit toward a future event, at our discretion. If we cancel an event for any reason, registrants receive a full refund.'
    ]
  },
  {
    h: 'How to Request a Refund',
    body: [
      'To request a refund, email us at antiqueclockrestorers@gmail.com with your name, the item or order in question, the date of purchase, and a brief description of the issue. We aim to acknowledge refund requests within three business days and to resolve them promptly and fairly.'
    ]
  },
  {
    h: 'Processing Times',
    body: [
      'Approved refunds are processed to your original payment method. Once issued, it may take several business days for the funds to appear, depending on your bank or card provider.'
    ]
  },
  {
    h: 'Changes to This Policy',
    body: [
      'We may update this Refund Policy from time to time. Any changes will be posted here with an updated date, and the policy in effect at the time of your purchase will govern that purchase.'
    ]
  },
  {
    h: 'Contact',
    body: [
      'Questions about this Refund Policy or a specific purchase are always welcome. Please reach us using the details below, and we will be glad to help.'
    ]
  }
]

export default function Refund() {
  return (
    <LegalLayout
      title="Refund Policy"
      description="The refund and returns policy for Antique Clock Restorers, covering free content, digital products, physical goods, and events."
      path="/legal/refund"
      updated="May 1, 2025"
      sections={sections}
    />
  )
}
