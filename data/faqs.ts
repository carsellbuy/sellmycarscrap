// FAQ content shown on the site. The FAQPage structured data is generated
// from these same lists, so the schema always matches what visitors see.

export interface Faq {
  question: string;
  answer: string;
}

export const GENERAL_FAQS: Faq[] = [
  {
    question: 'Do you buy damaged or non-running cars?',
    answer:
      'Yes, absolutely! We specialize in buying scrap, damaged, accident-wrecked, and non-running cars. Whether it has a blown engine, transmission failure, or has been in a major accident, we will offer you a fair price and tow it away for free.',
  },
  {
    question: 'Which documents do I need to sell my car?',
    answer:
      'You will need your original Emirates ID, vehicle registration card (Mulkiya), and bank account details for the transfer. If the car has a mortgage, we need a clearance letter from the bank.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'The entire process usually takes about 30 minutes from inspection to payment. We value your time and aim for the fastest turnaround in the UAE.',
  },
  {
    question: 'Is the valuation free?',
    answer:
      'Yes, our valuation and inspection services are 100% free with no obligation to sell. Call us and we will give you a price over the phone or schedule a visit.',
  },
  {
    question: 'Do you buy cars with expired registration?',
    answer:
      'Yes, we buy cars with expired registration. We handle all the necessary RTA paperwork and fines clearance (if applicable) to transfer the ownership legally.',
  },
];

export const ABU_DHABI_FAQS: Faq[] = [
  {
    question: 'Do you provide free towing in Mussafah?',
    answer:
      'Yes absolutely! If your car is non running or damaged, we provide completely free towing across all regions of Abu Dhabi including Mussafah.',
  },
  {
    question: 'How fast can I sell my car in the capital?',
    answer: 'We offer an instant 30 minute inspection and cash payment anywhere in Abu Dhabi. We value your time.',
  },
];

export const ARABIC_FAQS: Faq[] = [
  {
    question: 'هل تشترون السيارات بدون ملكية؟',
    answer: 'نعم، نتعامل مع السيارات التي فُقدت وثائقها أو منتهية الملكية. تواصل معنا لمعرفة التفاصيل.',
  },
  {
    question: 'هل خدمة السحب مجانية؟',
    answer: 'نعم، نصل إليك ونسحب السيارة مجاناً في دبي والشارقة وعجمان.',
  },
  {
    question: 'كم من الوقت يستغرق الدفع؟',
    answer: 'الدفع يتم نقداً في نفس اللحظة عند استلام السيارة.',
  },
  {
    question: 'هل تشترون السيارات المتضررة بالحوادث؟',
    answer: 'نعم، نشتري السيارات المتضررة بجميع درجات الضرر، حتى الخسارة الكلية.',
  },
  {
    question: 'ما هي المناطق التي تخدمونها؟',
    answer: 'نغطي دبي، الشارقة، عجمان، وأبوظبي. تواصل معنا للتأكد من منطقتك.',
  },
];
