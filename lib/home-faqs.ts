import { SITE } from "./site";
import { hoursSentence } from "./treatments/local";

export interface HomeFaq {
  id: string;
  question: string;
  answer: string;
}

/**
 * Homepage FAQs. Shared by the FAQ accordion and the FAQPage structured data, so the markup
 * always matches the visible text. No absolute outcome claims ("painless", "zero discomfort").
 */
export const HOME_FAQS: HomeFaq[] = [
  {
    id: "first-visit",
    question: "What can I expect during my first dental visit?",
    answer:
      "Dr. Gayatri begins with an unhurried conversation about your concerns, then examines your teeth, gums and mouth and takes digital X-rays only if they will help. We explain what we find in plain language, discuss your options and give you a clear, written plan with the estimated cost before any treatment begins.",
  },
  {
    id: "comfort",
    question: "Will my treatment hurt?",
    answer:
      "We do everything we can to keep you comfortable. Local anaesthesia is used wherever it is needed, we explain each step before we start, and you can ask us to pause at any time. Some soreness after certain treatments is normal, and we tell you what to expect and how to manage it.",
  },
  {
    id: "checkup-frequency",
    question: "How often should my family visit for routine check-ups?",
    answer:
      "We recommend a check-up and professional cleaning every six months. Regular visits catch early decay before it causes pain, remove hardened tartar and help you keep your natural teeth for life.",
  },
  {
    id: "pediatric-care",
    question: "Do you treat infants and young children?",
    answer:
      "Yes. We welcome children of all ages, from a first visit around the first birthday to teenagers. We offer gentle check-ups, fluoride applications, sealants for back teeth and guidance on habits such as thumb sucking, and parents are welcome to stay beside the chair.",
  },
  {
    id: "emergencies",
    question: "What should I do in a dental emergency?",
    answer: `If you have severe toothache, a broken or knocked-out tooth or facial swelling, call us on ${SITE.phoneDisplay} as soon as you can. We do our best to see urgent cases at the earliest suitable slot. ${hoursSentence()} For swelling with fever, trouble breathing or swallowing, or heavy bleeding outside these hours, go to your nearest hospital emergency department.`,
  },
  {
    id: "implants-vs-bridges",
    question: "What are the advantages of dental implants over bridges?",
    answer:
      "An implant replaces the missing tooth root as well as the visible tooth, so it does not rely on the neighbouring teeth for support and does not need them to be shaved down. It also helps protect the jawbone where the tooth was lost. Not everyone is suitable, so we examine you first and explain whether an implant, a bridge or a denture suits you best.",
  },
  {
    id: "cost",
    question: "How much do dental treatments cost in Hadapsar?",
    answer:
      "The cost depends on the treatment and on your mouth, so we do not quote a price over the phone. After an examination you receive a written estimate that you can take home and consider. Each treatment page on this site lists what affects the price.",
  },
  {
    id: "location",
    question: "Where is the clinic, and which areas do you serve?",
    answer: `We are at Shop No. 18, Ambrosia Alley, Tupe Patil Road, Amanora Park Town, Hadapsar, Pune, near Kotak Mahindra Bank and opposite Sadhna Bank. Patients visit us from ${SITE.serviceAreas.slice(0, -1).join(", ")} and across Pune.`,
  },
];
