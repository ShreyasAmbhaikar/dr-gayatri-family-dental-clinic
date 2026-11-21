import type { TreatmentContent } from "./types";
import { hoursSentence, local } from "./local";
import { SITE } from "../site";

/** Surgical, emergency and cosmetic treatments. */
export const CONTENT_C: Record<string, TreatmentContent> = {
  "tooth-extraction": {
    metaDescription:
      "Tooth extraction in Hadapsar, Pune: gentle, carefully planned removal of damaged, infected or problem teeth under local anaesthesia. Book a consultation.",
    heroSub:
      "Tooth extraction in Hadapsar, Pune: when a tooth cannot be saved, we remove it gently and carefully under local anaesthesia, and plan its replacement so your smile and bite stay healthy.",
    quickAnswer:
      "A tooth extraction is the removal of a tooth from its socket in the jawbone. It is recommended when a tooth is too damaged, decayed or loose to be saved, or when it must be removed for orthodontic or other reasons. It is done under local anaesthesia, so you should feel pressure but not pain.",
    overview:
      "We always try to save a natural tooth first, because it is usually the right option. But some teeth are too broken, infected or loose to repair, and removing them protects your health and prevents infection spreading.",
    symptomsTitle: "When is a tooth extraction needed?",
    symptoms: [
      "A tooth is badly decayed or broken below the gum line",
      "A tooth has an infection that cannot be treated by a root canal",
      "Advanced gum disease has left a tooth very loose",
      "A tooth is blocking others from coming through or is causing crowding",
      "Teeth need removing before braces or dentures",
      "A tooth was damaged in an injury and cannot be repaired",
    ],
    steps: [
      { title: "Examination and X-ray", text: "We examine the tooth and take an X-ray to plan the safest approach.", art: "xray" },
      { title: "Anaesthesia", text: "The area is numbed with local anaesthetic, and we check you are comfortable before starting.", art: "anaesthesia" },
      { title: "Removing the tooth", text: "The tooth is loosened and removed carefully. A surgical approach may be used for broken or impacted teeth.", art: "extraction" },
      { title: "Cleaning and care of the socket", text: "The area is cleaned, and stitches are placed if needed.", art: "stitch" },
      { title: "Aftercare instructions", text: "You receive written advice on eating, cleaning and medicines, and we plan your replacement tooth if you want one.", art: "notes" },
    ],
    benefits: [
      "Relieves pain and removes the source of infection",
      "Protects neighbouring teeth from damage",
      "Makes room for braces or dentures where needed",
      "A quick procedure with comfortable local anaesthesia",
      "Followed by a clear plan to replace the tooth",
    ],
    suitableTitle: "Can my tooth be saved instead?",
    suitableFor:
      "Often yes. A root canal, filling or crown can save many damaged teeth, and we will always discuss these first. If extraction is the right option, we explain why and what comes next, including replacement with an implant, bridge or denture.",
    aftercare: [
      "Bite gently on the gauze for 30–45 minutes to control bleeding",
      "Avoid rinsing, spitting hard, using a straw or smoking for at least 48 hours",
      "Eat soft, cool food and avoid hot drinks on the first day",
      "Take any prescribed medicines as directed",
      "Contact us if you have heavy bleeding, increasing pain or swelling after a few days",
    ],
    localNote:
      "Tooth pain does not wait for a convenient time, so call first and we will do our best to see urgent cases at the earliest suitable slot. We are on Tupe Patil Road, near Kotak Mahindra Bank in Amanora Park Town, a short drive from Magarpatta City, Mundhwa and Keshav Nagar, with evening and Sunday-morning hours.",
    faqs: [
      { q: "Is a tooth extraction painful?", a: "The area is fully numbed, so you should feel pressure rather than pain during the procedure. Some soreness afterwards is normal and settles in a few days." },
      { q: "How long does it take to recover?", a: "The socket usually starts to heal within a week, and the gum settles over one to two weeks. The bone takes longer to fill in." },
      { q: "What is a dry socket and how do I avoid it?", a: "A dry socket happens when the blood clot is lost from the socket, which can cause severe pain. Avoid rinsing hard, using straws and smoking for the first few days to help prevent it." },
      { q: "How much does a tooth extraction cost in Hadapsar, Pune?", a: "A simple extraction costs less than a surgical one for a broken or impacted tooth. We quote after examining the tooth and, where needed, taking an X-ray, so you know the total before we begin." },
      local(
        "Where can I get a tooth extracted near Magarpatta City or Mundhwa?",
        "If you are in pain, call before you set out so we can advise you and offer the earliest suitable appointment.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["dental-implants", "wisdom-tooth-removal", "emergency-dental-care"],
    keywords: ["tooth removal in pune", "tooth extraction cost pune", "gentle tooth extraction hadapsar", "surgical extraction"],
  },

  "wisdom-tooth-removal": {
    metaDescription:
      "Wisdom tooth removal in Hadapsar, Pune: relief from painful, impacted or infected wisdom teeth with careful planning and gentle surgery. Book your consultation.",
    heroSub:
      "Wisdom tooth removal in Hadapsar, Pune: get relief from painful, swollen or impacted wisdom teeth with careful planning, gentle technique and clear aftercare from start to finish.",
    quickAnswer:
      "Wisdom tooth removal is the surgical or simple extraction of the third molars at the back of the mouth. It is advised when these teeth are impacted, painful, repeatedly infected, decaying or damaging neighbouring teeth. It is done under local anaesthesia after an X-ray shows the position of the tooth.",
    overview:
      "Wisdom teeth often lack the space to come through properly. They can become stuck under the gum or bone, trap food, cause infection and damage the tooth in front. Not every wisdom tooth needs removing, but those causing problems should be dealt with early.",
    symptomsTitle: "When should a wisdom tooth be removed?",
    symptoms: [
      "Pain or swelling at the back of the jaw",
      "Repeated gum infections around a partly erupted tooth",
      "A wisdom tooth that is decayed or cannot be cleaned",
      "Damage or decay in the neighbouring molar",
      "Difficulty opening the mouth fully",
      "A tooth stuck beneath the gum or bone (impacted)",
    ],
    steps: [
      { title: "Examination and X-ray", text: "An OPG or digital X-ray shows how the tooth is positioned and how close it is to nerves and neighbouring teeth.", art: "xray" },
      { title: "Planning", text: "We explain whether the tooth needs removing, the type of procedure and any risks, in plain language.", art: "plan" },
      { title: "Anaesthesia", text: "The area is numbed with local anaesthetic, so you feel pressure but not pain.", art: "anaesthesia" },
      { title: "Removing the tooth", text: "A small opening in the gum is made if needed, and the tooth is removed carefully, sometimes in sections.", art: "extraction" },
      { title: "Closing and aftercare", text: "Stitches are placed if needed, and you receive written instructions and a prescription.", art: "stitch" },
      { title: "Review", text: "We check your healing and remove stitches if necessary.", art: "calendar" },
    ],
    benefits: [
      "Relief from pain and recurring infection",
      "Protects the neighbouring molar from decay and damage",
      "Prevents problems from getting worse later",
      "Easier cleaning at the back of the mouth",
      "A planned, comfortable procedure with proper aftercare",
    ],
    suitableTitle: "Do all wisdom teeth have to come out?",
    suitableFor:
      "No. Wisdom teeth that are healthy, fully erupted and easy to clean can often stay. We recommend removal when there is pain, infection, decay or damage, or a clear risk of future problems. We will show you the X-ray and explain our reasoning.",
    aftercare: [
      "Bite on the gauze for 30–45 minutes and avoid spitting",
      "Use a cold pack on the cheek for the first day to reduce swelling",
      "Eat soft, cool foods and avoid straws and smoking for at least 48 hours",
      "Take medicines exactly as prescribed",
      "Expect swelling to peak around day two to three and then settle",
    ],
    localNote:
      "If you work in the offices or study at the colleges around Magarpatta City, Hadapsar or Keshav Nagar, a Saturday evening or Sunday-morning appointment leaves recovery days free. Our Tupe Patil Road clinic in Amanora Park Town is a short drive away.",
    faqs: [
      { q: "Is wisdom tooth removal painful?", a: "The area is numbed, so you should not feel pain during the procedure. After the anaesthetic wears off, soreness is normal and is managed with prescribed medicines." },
      { q: "How long is the recovery?", a: "Most people feel much better in three to five days, and the gum heals over a couple of weeks. Swelling usually peaks on the second or third day." },
      { q: "What can I eat after wisdom tooth removal?", a: "Soft, cool foods such as curd, dal, khichdi, mashed potato and smoothies (without a straw) for the first few days. Avoid hot, spicy, crunchy or very chewy foods until the area has healed, and chew on the other side." },
      { q: "What are the risks of wisdom tooth removal?", a: "Risks include infection, dry socket, swelling and rarely temporary numbness. We discuss these with you in advance and take steps to minimise them." },
      { q: "How much does wisdom tooth removal cost in Pune?", a: "It depends on how deeply impacted the tooth is, its angle and roots, and whether one tooth or several are removed. A fully erupted tooth is simpler than a deeply impacted one, and we give you an estimate after the X-ray." },
      local(
        "Where can I get wisdom teeth removed near Magarpatta City and Keshav Nagar?",
        "The X-ray, planning, removal and review visit all take place at our clinic.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["tooth-extraction", "emergency-dental-care", "dental-checkup"],
    keywords: ["wisdom tooth extraction cost pune", "impacted wisdom tooth", "third molar removal hadapsar", "wisdom tooth pain"],
  },

  "emergency-dental-care": {
    metaDescription:
      "Emergency dentist in Hadapsar, Pune: fast help for severe toothache, swelling, broken or knocked-out teeth. Call first; Sunday-morning visits available.",
    heroSub:
      "Emergency dentist in Hadapsar, Pune: severe toothache, swelling, a broken tooth or an injury? Call us. We see urgent cases at the earliest suitable slot to relieve your pain and protect your tooth.",
    quickAnswer:
      "A dental emergency is any sudden problem that needs prompt care, such as severe toothache, facial swelling, a knocked-out or broken tooth, bleeding that will not stop or a lost filling or crown with pain. Call us as soon as possible so we can advise you and see you quickly.",
    overview:
      "Dental emergencies rarely happen at a convenient time. The right first steps at home can make a real difference, especially if a tooth is knocked out. We can talk you through what to do on the phone.",
    symptomsTitle: "What counts as a dental emergency?",
    symptoms: [
      "Severe or throbbing toothache that medicines do not relieve",
      "Swelling of the face, gum or jaw, or a pimple on the gum",
      "A tooth knocked out or loosened by an injury",
      "A broken or chipped tooth with pain or sharp edges",
      "A lost filling or crown with pain or exposed tooth",
      "Bleeding from the mouth that does not stop",
    ],
    steps: [
      { title: "Call us", text: "Tell us your symptoms. We will advise on first aid and book the earliest suitable appointment.", art: "phone" },
      { title: "Quick assessment", text: "We examine the area and take an X-ray if required to find the cause of the problem.", art: "urgent" },
      { title: "Relief first", text: "We deal with the pain, whether by cleaning an infection, opening a tooth to drain it or stabilising an injured tooth.", art: "anaesthesia" },
      { title: "Treat the cause", text: "We carry out the treatment needed now, or plan it for a follow-up visit.", art: "plan" },
      { title: "Follow-up", text: "We check your recovery and complete any further treatment.", art: "calendar" },
    ],
    benefits: [
      "Fast relief from severe pain",
      "A better chance of saving an injured tooth",
      "Prevents infection from spreading",
      "Clear first-aid advice over the phone",
      "A calm, caring approach when you are anxious",
    ],
    suitableTitle: "What to do while you wait",
    suitableFor:
      "For a knocked-out adult tooth, hold it by the crown, gently rinse it, and keep it in milk or in your mouth beside your cheek, and see us immediately, ideally within an hour. Do not scrub it. For swelling or fever, seek medical care without delay. For pain, rinse with warm water and avoid placing aspirin on the gum.",
    aftercare: [
      "Take medicines exactly as advised",
      "Keep your head slightly raised if you have swelling",
      "Avoid hot drinks and hard foods on the affected side",
      "Return for any follow-up treatment we advise",
      "Call us if pain, swelling or fever worsens",
    ],
    localNote:
      `We are on Tupe Patil Road, close to Kotak Mahindra Bank in Amanora Park Town, so patients in Hadapsar, Magarpatta City, Mundhwa and Keshav Nagar can reach us quickly. Please call ${SITE.phoneDisplay} before you set out, so we can give first-aid advice on the way.`,
    faqs: [
      { q: "What should I do if my tooth is knocked out?", a: "Handle it by the crown, not the root. Rinse gently without scrubbing, keep it moist in milk, and see a dentist within the hour if you can. Do not let it dry out." },
      { q: "I have a swollen face. Is it serious?", a: "Swelling can be a sign of spreading infection and should be seen quickly. If you have trouble breathing or swallowing, go to a hospital emergency department straight away." },
      { q: "Can you treat a toothache the same day?", a: "We do our best to see urgent cases the same day, depending on the schedule. Call us and we will tell you the earliest available time." },
      { q: "Are you open 24 hours for dental emergencies?", a: `No. ${hoursSentence()} For severe swelling with fever, trouble breathing or swallowing, or heavy bleeding outside these hours, go to your nearest hospital emergency department.` },
      { q: "How much does an emergency dental visit cost in Hadapsar?", a: "The cost depends on what is needed to relieve the problem, for example an examination and X-ray, opening a tooth to drain an infection or a repair. We tell you the price of the recommended treatment before we start, so you can decide even while you are in pain." },
      local(
        "Where is the nearest emergency dentist to Magarpatta City and Mundhwa?",
        "Please call before you set out, so we can give first-aid advice and tell you the earliest time we can see you.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["root-canal-treatment", "tooth-extraction", "wisdom-tooth-removal"],
    keywords: ["emergency dentist near me", "toothache treatment hadapsar", "broken tooth repair pune", "dentist open sunday hadapsar"],
  },

  "teeth-whitening": {
    metaDescription:
      "Teeth whitening in Hadapsar, Pune: safe, dentist-supervised whitening for a visibly brighter smile. See who it suits, how it works and book your consultation.",
    heroSub:
      "Teeth whitening in Hadapsar, Pune: brighten your smile safely with dentist-supervised whitening, planned around your teeth and your sensitivity, with realistic expectations explained upfront.",
    quickAnswer:
      "Professional teeth whitening uses a controlled bleaching gel, applied by a dentist, to lighten the natural shade of your teeth and remove deep stains from tea, coffee, tobacco and ageing. It is quicker and more predictable than over-the-counter products and is carried out after a check that your teeth and gums are healthy.",
    overview:
      "Teeth gradually darken with age and with the things we drink and eat. Whitening can lift stains that brushing cannot reach, but it works best on healthy teeth, and it does not change the colour of fillings, crowns or veneers.",
    symptomsTitle: "Who is whitening for?",
    symptoms: [
      "Teeth that have yellowed with age",
      "Stains from tea, coffee, cola, red wine or tobacco",
      "A wedding, interview or event coming up",
      "Teeth that look dull even though you brush well",
      "A wish to lighten teeth before braces, veneers or a smile makeover",
    ],
    steps: [
      { title: "Examination and shade check", text: "We examine your teeth and gums, record your starting shade and discuss realistic expectations.", art: "shade" },
      { title: "Cleaning", text: "A professional cleaning removes surface stains and plaque so the gel works evenly.", art: "polish" },
      { title: "Protecting the gums", text: "A barrier is applied to protect your gums and lips from the whitening gel.", art: "barrier" },
      { title: "Whitening gel", text: "The gel is applied to the teeth in timed stages, with the shade checked during the session.", art: "gel" },
      { title: "Finishing and advice", text: "We remove the gel, apply a desensitising product if needed and explain how to keep your new shade.", art: "smile" },
    ],
    benefits: [
      "A visibly brighter smile in a single visit",
      "Supervised by a dentist, so gums and teeth are protected",
      "More predictable than over-the-counter kits",
      "Boosts confidence for events and everyday life",
      "A non-invasive treatment that does not remove tooth structure",
    ],
    suitableTitle: "Is whitening safe, and who should avoid it?",
    suitableFor:
      "Whitening is safe when carried out by a dentist on healthy teeth. It is not recommended during pregnancy or breastfeeding, for young children, or when you have untreated cavities or gum disease. Existing crowns, fillings and veneers will not lighten, so we plan around them.",
    aftercare: [
      "For 48 hours, avoid tea, coffee, red wine, cola, tobacco and strongly coloured foods",
      "Use a toothpaste for sensitive teeth if you feel any sensitivity",
      "Brush gently twice daily and floss every day",
      "Book a professional cleaning every six months to maintain brightness",
      "Ask us about top-up whitening after a year or so",
    ],
    localNote:
      "If you are planning whitening before a wedding or festival, book a few weeks ahead. Our Tupe Patil Road clinic in Amanora Park Town is a short drive from Magarpatta City, Hadapsar, Mundhwa and Keshav Nagar, with evening appointments until 9 PM.",
    faqs: [
      { q: "Is teeth whitening safe?", a: "Yes, when done by a dentist on healthy teeth. We protect your gums and use controlled concentrations." },
      { q: "Does whitening hurt?", a: "Some people feel mild, temporary sensitivity during or after treatment. It usually settles within a day or two, and we can reduce it with desensitising products." },
      { q: "How long do the results last?", a: "It varies, but results often last from several months to a couple of years, depending on your habits. Avoiding staining drinks and tobacco helps." },
      { q: "How much does teeth whitening cost in Pune?", a: "It depends on the method, the number of sessions and your starting shade, so costs vary. We give you a clear estimate at your consultation, before any treatment starts." },
      local(
        "Where can I get teeth whitening near Amanora Park Town and Magarpatta City?",
        "Whitening is planned after a short examination and cleaning, and the session takes about an hour to an hour and a half.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["teeth-cleaning", "veneers", "smile-makeover"],
    keywords: ["teeth whitening cost in pune", "dental bleaching hadapsar", "professional teeth whitening", "yellow teeth treatment"],
  },

  veneers: {
    metaDescription:
      "Dental veneers in Hadapsar, Pune: thin, natural-looking ceramic veneers to fix chips, gaps, stains and uneven teeth. See how they work and book a consultation.",
    heroSub:
      "Dental veneers in Hadapsar, Pune reshape and brighten your front teeth with thin, custom-made shells that look natural and are designed to match your face and smile.",
    quickAnswer:
      "Dental veneers are thin shells of ceramic or composite resin bonded to the front of your teeth. They improve the colour, shape and alignment of teeth that are chipped, stained, gapped or uneven, giving you a more balanced smile without the need for braces in suitable cases.",
    overview:
      "Veneers can transform the look of front teeth, but they are a permanent change, because a thin layer of enamel is usually shaved to make room. For that reason, we take time to plan and to make sure veneers are the right choice for you.",
    symptomsTitle: "When are veneers a good option?",
    symptoms: [
      "Chipped, worn or slightly broken front teeth",
      "Stains that do not respond to whitening",
      "Small gaps between teeth",
      "Teeth that are uneven in size or shape",
      "Mildly crooked teeth where braces are not wanted",
    ],
    steps: [
      { title: "Consultation and smile design", text: "We discuss your goals, take photographs and records and plan the shape and shade of your veneers.", art: "consult" },
      { title: "Preparation", text: "A thin layer of enamel is gently removed under local anaesthesia to make space for each veneer.", art: "prep" },
      { title: "Impression and temporaries", text: "An impression is taken for the laboratory, and temporary veneers protect your teeth meanwhile.", art: "impression" },
      { title: "Try-in", text: "We check the fit, shape and colour before bonding, so you can approve the result.", art: "veneer" },
      { title: "Bonding", text: "The veneers are bonded to your teeth and the bite is checked and polished.", art: "composite" },
    ],
    benefits: [
      "A natural-looking, brighter and more even smile",
      "Hides stains, chips and small gaps",
      "Resists staining better than natural enamel (ceramic)",
      "Requires less tooth preparation than crowns",
      "A confident result tailored to your face",
    ],
    suitableTitle: "Who should not have veneers?",
    suitableFor:
      "Veneers are not suitable if you have untreated gum disease or decay, or if you grind your teeth heavily without wearing a night guard. Because the process is not reversible, we advise carefully and may suggest whitening, bonding or aligners first.",
    aftercare: [
      "Avoid biting very hard objects such as ice or pens",
      "Brush twice daily and floss every day",
      "Wear a night guard if you grind your teeth",
      "Limit staining habits such as smoking",
      "Attend regular check-ups and cleanings",
    ],
    localNote:
      "Veneers usually take two to three visits over a couple of weeks. Our Tupe Patil Road clinic in Amanora Park Town is a short drive from Magarpatta City, Hadapsar and Mundhwa, and you can pair the consultation with whitening or a check-up in a single evening or Sunday-morning visit.",
    faqs: [
      { q: "Are veneers permanent?", a: "The preparation is permanent, since some enamel is removed. The veneers themselves can last many years, but may need replacing eventually." },
      { q: "How long do veneers last?", a: "With good care, ceramic veneers can last ten years or more. Composite veneers usually need replacing or repair sooner." },
      { q: "What is the difference between ceramic and composite veneers?", a: "Ceramic veneers are made in a laboratory, are stain-resistant and long-lasting. Composite veneers are built directly on the tooth, are quicker and cheaper, but wear sooner." },
      { q: "Do veneers damage your natural teeth?", a: "Preparing the tooth for a ceramic veneer removes a thin layer of enamel, which cannot grow back, so it is a permanent decision. Done carefully, with healthy gums and good home care, veneers are a well-established treatment. We explain the trade-offs, including less invasive options, before you decide." },
      { q: "How much do dental veneers cost in Pune?", a: "The cost depends on the material (ceramic or composite), the number of teeth and how complex the shape and shade matching is. We give you a clear estimate after your consultation, so you can decide how many teeth to treat." },
      local(
        "Where can I get dental veneers near Magarpatta City and Mundhwa?",
        "Consultation, preparation, try-in and bonding are all done at our clinic.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["teeth-whitening", "smile-makeover", "clear-aligners"],
    keywords: ["ceramic veneers pune", "dental veneers cost pune", "smile design hadapsar", "composite veneers amanora"],
  },

  "smile-makeover": {
    metaDescription:
      "Smile makeover in Hadapsar, Pune: a personalised plan combining whitening, veneers, aligners and more for a smile you love. Book your smile design consultation.",
    heroSub:
      "A smile makeover in Hadapsar, Pune brings together the right cosmetic treatments in the right order, planned around your face, your goals and your budget.",
    quickAnswer:
      "A smile makeover is a customised plan that combines cosmetic and restorative treatments to improve the look of your smile. Depending on your needs it can include teeth whitening, veneers, crowns, clear aligners or braces, gum contouring and fillings, all sequenced so that each step supports the next.",
    overview:
      "No two smiles are the same, which is why there is no single smile makeover treatment. Your plan depends on your teeth, gums, bite and what you want to change, and it often starts with simple steps such as cleaning and whitening.",
    symptomsTitle: "When should you consider a smile makeover?",
    symptoms: [
      "You feel self-conscious about your teeth in photos or when you smile",
      "Your teeth are stained, chipped, uneven or gapped",
      "You have a gummy smile or uneven gums",
      "Old fillings or crowns no longer match your teeth",
      "A special occasion or career change has you thinking about your smile",
    ],
    steps: [
      { title: "Listening and assessing", text: "We listen to your goals and examine your teeth, gums, bite and facial features.", art: "consult" },
      { title: "Smile design and plan", text: "We discuss options, show you what is realistic and prepare a step-by-step plan with costs.", art: "plan" },
      { title: "Healthy foundation", text: "Any decay, gum problems or other issues are treated first, so cosmetic work is built on healthy teeth.", art: "stabilise" },
      { title: "Cosmetic treatments", text: "Whitening, aligners, veneers, crowns or gum contouring are completed in the most sensible order.", art: "veneer" },
      { title: "Finishing and maintenance", text: "We fine-tune the result and give you a plan to protect it, including retainers or a night guard if needed.", art: "smile" },
    ],
    benefits: [
      "A smile designed around your face and wishes",
      "Treatments planned in the right order for a better result",
      "The option to stage treatment and spread costs",
      "More confidence in photos, work and everyday life",
      "A healthier mouth as well as a better-looking one",
    ],
    suitableTitle: "How do I know what I need?",
    suitableFor:
      "Start with a consultation. Often a small number of treatments, such as whitening and a few fillings, can make a big difference, and more extensive work is only recommended if you want it. We will always tell you honestly what is necessary and what is optional.",
    aftercare: [
      "Follow the aftercare for each treatment we complete",
      "Wear your retainer or night guard as advised",
      "Brush twice daily and floss every day",
      "Book regular check-ups and cleanings",
      "Return for touch-up whitening or maintenance when advised",
    ],
    localNote:
      "A smile makeover is planned in stages, so you can book consultation and treatment visits around your schedule. Our Tupe Patil Road clinic in Amanora Park Town is a short drive from Magarpatta City, Hadapsar, Mundhwa and Keshav Nagar, with evening hours until 9 PM and Sunday-morning slots.",
    faqs: [
      { q: "How long does a smile makeover take?", a: "It depends on the treatments included. Simple plans may take a few weeks, while plans involving aligners can take many months." },
      { q: "Is a smile makeover only cosmetic?", a: "No. We make sure your teeth and gums are healthy first, and the plan also improves function and bite where needed." },
      { q: "How much does a smile makeover cost in Pune?", a: "It depends on your plan. After a consultation we provide an itemised estimate so you can choose what suits you and your budget." },
      { q: "Is a smile makeover painful?", a: "Most steps, such as cleaning and whitening, need no anaesthesia, while preparation for veneers or crowns is done under local anaesthesia, so you should feel pressure rather than pain. Mild soreness afterwards is common and settles in a few days." },
      local(
        "Where can I get a smile makeover near Amanora Park Town and Magarpatta?",
        "Your consultation, plan and each stage of treatment are handled at one clinic.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["teeth-whitening", "veneers", "clear-aligners"],
    keywords: ["smile design pune", "cosmetic dentist hadapsar", "smile makeover cost pune", "aesthetic dentistry amanora"],
  },

  "laser-dentistry": {
    metaDescription:
      "Laser dentistry in Hadapsar, Pune: gentle soft-tissue laser treatment for gum contouring, ulcers and minor procedures, with less discomfort. Book a visit.",
    heroSub:
      "Laser dentistry in Hadapsar, Pune: where it is clinically suitable, soft-tissue laser treatment can make minor gum procedures gentler, with less bleeding and often quicker healing.",
    quickAnswer:
      "Laser dentistry uses a focused beam of light to treat soft tissue such as the gums and the lining of the mouth. It can reshape gums, remove small growths, treat mouth ulcers and release tight tissue under the tongue or lip, often with less bleeding and discomfort than a scalpel.",
    overview:
      "Dental lasers are used mostly for gum and soft-tissue work. Because the laser seals small blood vessels as it works, there is usually less bleeding, and many procedures need few or no stitches.",
    symptomsTitle: "When can laser treatment help?",
    symptoms: [
      "A gummy smile or uneven gum line that needs reshaping",
      "Gum tissue that overgrows or covers part of a tooth",
      "Painful mouth ulcers or small soft-tissue growths",
      "A tight frenum under the tongue or lip",
      "Gum procedures where you want less bleeding",
    ],
    steps: [
      { title: "Examination and planning", text: "We examine the area and discuss whether laser is suitable and what to expect.", art: "exam" },
      { title: "Numbing", text: "A local anaesthetic or numbing gel is used so the procedure is comfortable.", art: "anaesthesia" },
      { title: "Laser treatment", text: "The laser is used to reshape or remove the tissue precisely, while sealing small blood vessels.", art: "laser" },
      { title: "Aftercare advice", text: "You receive simple instructions to keep the area clean and comfortable while it heals.", art: "notes" },
      { title: "Review", text: "We check healing at a follow-up visit.", art: "calendar" },
    ],
    benefits: [
      "Less bleeding than conventional soft-tissue surgery",
      "Often needs few or no stitches",
      "A precise, controlled way to reshape gums",
      "Quicker, more comfortable healing for many patients",
      "Reduced need for sutures and extensive dressings",
    ],
    suitableTitle: "Is laser right for me?",
    suitableFor:
      "Laser is a good option for many soft-tissue procedures but is not suitable for everything. It does not replace fillings or most hard-tissue treatment. We will tell you honestly whether laser is the right choice for your problem.",
    aftercare: [
      "Keep the area clean and follow our rinsing instructions",
      "Avoid hot, spicy or sharp foods for a few days",
      "Use any prescribed medicine or gel as advised",
      "Do not touch the area with your fingers or tongue",
      "Attend your review visit",
    ],
    localNote:
      "Gum shaping is often planned alongside other cosmetic work, so patients from Hadapsar, Amanora Park Town and Magarpatta City can combine laser treatment with a smile consultation. Our Tupe Patil Road clinic is a short drive from Mundhwa and Keshav Nagar for the brief follow-up visit.",
    faqs: [
      { q: "Is laser dentistry painful?", a: "Treatment is done with a local anaesthetic or numbing gel, so you should feel little discomfort. Healing is often more comfortable than after conventional surgery." },
      { q: "Is laser dentistry safe?", a: "Yes, when used by a trained dentist for suitable procedures, with proper eye protection and safety steps." },
      { q: "Does laser replace drilling for cavities?", a: "Not in most cases. Laser is used mainly for soft tissue such as gums. Cavities are generally still treated with fillings." },
      { q: "How quickly do I heal?", a: "Many patients heal in about one to two weeks, depending on the procedure. We give you aftercare advice to help." },
      { q: "How much does laser dentistry cost in Pune?", a: "The price depends on the procedure, the area treated and the number of sites. We give you a written estimate after we examine you, so you know the cost before treatment starts." },
      local(
        "Where can I get laser gum treatment near Hadapsar and Magarpatta?",
        "We examine you first and tell you honestly whether laser is the right tool for your problem.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["gum-treatment", "smile-makeover", "veneers"],
    keywords: ["laser gum treatment pune", "gum contouring hadapsar", "soft tissue laser dentist", "gentle laser dentistry"],
  },
};
