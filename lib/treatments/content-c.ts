import type { TreatmentContent } from "./types";

/** Surgical, emergency and cosmetic treatments. */
export const CONTENT_C: Record<string, TreatmentContent> = {
  "tooth-extraction": {
    metaDescription:
      "Tooth extraction in Hadapsar, Pune: gentle, carefully planned removal of damaged, infected or problem teeth under local anaesthesia. Book a consultation.",
    heroSub:
      "When a tooth cannot be saved, we remove it gently and carefully under local anaesthesia, and plan its replacement so your smile and bite stay healthy.",
    facts: [
      ["Anaesthesia", "Local"],
      ["Simple extraction", "Often 20–30 minutes"],
      ["Healing", "Gum settles in 1–2 weeks"],
    ],
    quickAnswer:
      "A tooth extraction is the removal of a tooth from its socket in the jawbone. It is recommended when a tooth is too damaged, decayed or loose to be saved, or when it must be removed for orthodontic or other reasons. It is done under local anaesthesia, so you should feel pressure but not pain.",
    overview: [
      "We always try to save a natural tooth first, because it is usually the best option. But some teeth are too broken, infected or loose to repair, and removing them protects your health and prevents infection spreading.",
      "Extractions range from simple removals to surgical ones for broken or impacted teeth. We explain what to expect, make sure you are fully numb, and talk through how to replace the tooth afterwards, so the gap does not cause other problems.",
    ],
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
      { title: "Examination and X-ray", text: "We examine the tooth and take an X-ray to plan the safest approach." },
      { title: "Anaesthesia", text: "The area is numbed with local anaesthetic, and we check you are comfortable before starting." },
      { title: "Removing the tooth", text: "The tooth is loosened and removed carefully. A surgical approach may be used for broken or impacted teeth." },
      { title: "Cleaning and care of the socket", text: "The area is cleaned, and stitches are placed if needed." },
      { title: "Aftercare instructions", text: "You receive written advice on eating, cleaning and medicines, and we plan your replacement tooth if you want one." },
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
      "Often yes. A root canal, filling or crown can save many damaged teeth, and we will always discuss these first. If extraction is the best option, we explain why and what comes next, including replacement with an implant, bridge or denture.",
    aftercare: [
      "Bite gently on the gauze for 30–45 minutes to control bleeding",
      "Avoid rinsing, spitting hard, using a straw or smoking for at least 48 hours",
      "Eat soft, cool food and avoid hot drinks on the first day",
      "Take any prescribed medicines as directed",
      "Contact us if you have heavy bleeding, increasing pain or swelling after a few days",
    ],
    costIntro:
      "The cost of a tooth extraction in Hadapsar depends on whether the removal is simple or surgical. We give you the price after we examine the tooth, so you know the total before we begin.",
    costFactors: [
      "Whether the extraction is simple or surgical",
      "The position of the tooth and the shape of its roots",
      "Whether the tooth is broken, infected or impacted",
      "The number of teeth being removed",
      "Whether stitches or follow-up visits are needed",
    ],
    localNote:
      "Because pain can strike at any time, patients from Amanora Park Town and Magarpatta often call us first, and we do our best to see urgent cases at the earliest suitable slot.",
    faqs: [
      { q: "Is a tooth extraction painful?", a: "The area is fully numbed, so you should feel pressure but no pain during the procedure. Some soreness afterwards is normal and settles in a few days." },
      { q: "How long does it take to recover?", a: "The socket usually starts to heal within a week, and the gum settles over one to two weeks. The bone takes longer to fill in." },
      { q: "What is a dry socket and how do I avoid it?", a: "A dry socket happens when the blood clot is lost from the socket, which can cause severe pain. Avoid rinsing hard, using straws and smoking for the first few days to help prevent it." },
      { q: "Do I need to replace the tooth?", a: "Usually it is a good idea, because gaps can cause neighbouring teeth to drift and make chewing harder. We discuss implants, bridges and dentures with you." },
      { q: "Can I go to work after an extraction?", a: "Many people return to normal activity the same day or the next, though it is wise to rest and avoid strenuous exercise for a day." },
    ],
    related: ["dental-implants", "wisdom-tooth-removal", "emergency-dental-care"],
    keywords: ["tooth removal in pune", "tooth extraction cost pune", "gentle tooth extraction hadapsar", "surgical extraction"],
  },

  "wisdom-tooth-removal": {
    metaDescription:
      "Wisdom tooth removal in Hadapsar, Pune: relief from painful, impacted or infected wisdom teeth with careful planning and gentle surgery. Book your consultation.",
    heroSub:
      "Get relief from painful, swollen or impacted wisdom teeth with careful planning, gentle technique and clear aftercare from start to finish.",
    facts: [
      ["Anaesthesia", "Local"],
      ["Planning", "OPG or digital X-ray"],
      ["Swelling peaks", "Around day 2–3"],
    ],
    quickAnswer:
      "Wisdom tooth removal is the surgical or simple extraction of the third molars at the back of the mouth. It is advised when these teeth are impacted, painful, repeatedly infected, decaying or damaging neighbouring teeth. It is done under local anaesthesia after an X-ray shows the position of the tooth.",
    overview: [
      "Wisdom teeth often lack the space to come through properly. They can become stuck under the gum or bone, trap food, cause infection and damage the tooth in front. Not every wisdom tooth needs removing, but those causing problems should be dealt with early.",
      "We use an X-ray to see the position of the tooth and its roots, and explain whether removal is needed. If it is, we plan it carefully, and with clear aftercare and a review visit to make sure you heal comfortably.",
    ],
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
      { title: "Examination and X-ray", text: "An OPG or digital X-ray shows how the tooth is positioned and how close it is to nerves and neighbouring teeth." },
      { title: "Planning", text: "We explain whether the tooth needs removing, the type of procedure and any risks, in plain language." },
      { title: "Anaesthesia", text: "The area is numbed with local anaesthetic, so you feel pressure but not pain." },
      { title: "Removing the tooth", text: "A small opening in the gum is made if needed, and the tooth is removed carefully, sometimes in sections." },
      { title: "Closing and aftercare", text: "Stitches are placed if needed, and you receive written instructions and a prescription." },
      { title: "Review", text: "We check your healing and remove stitches if necessary." },
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
    costIntro:
      "The cost of wisdom tooth removal in Hadapsar depends on how difficult the tooth is to remove. A fully erupted tooth is simpler than a deeply impacted one, and we give you an estimate after the X-ray.",
    costFactors: [
      "How deeply impacted the tooth is",
      "The angle of the tooth and its roots",
      "Whether one tooth or several are being removed",
      "Whether a surgical approach is needed",
      "The X-ray and follow-up visits",
    ],
    localNote:
      "Young professionals from nearby IT offices and colleges in Magarpatta and Hadapsar usually book this treatment ahead of a weekend, so recovery days fit around work.",
    faqs: [
      { q: "Is wisdom tooth removal painful?", a: "The area is numbed, so you should not feel pain during the procedure. After the anaesthetic wears off, soreness is normal and is managed with prescribed medicines." },
      { q: "How long is the recovery?", a: "Most people feel much better in three to five days, and the gum heals over a couple of weeks. Swelling usually peaks on the second or third day." },
      { q: "How many wisdom teeth can be removed at once?", a: "It depends on the case. Often teeth are removed one side at a time, so you can still chew on the other side while healing." },
      { q: "Can I eat after wisdom tooth removal?", a: "Yes, after the numbness wears off. Stick to soft, cool foods for the first few days and avoid chewing on the treated side." },
      { q: "What are the risks?", a: "Risks include infection, dry socket, swelling and rarely temporary numbness. We discuss these with you in advance and take steps to minimise them." },
    ],
    related: ["tooth-extraction", "emergency-dental-care", "dental-checkup"],
    keywords: ["wisdom tooth extraction cost pune", "impacted wisdom tooth", "third molar removal hadapsar", "wisdom tooth pain"],
  },

  "emergency-dental-care": {
    metaDescription:
      "Emergency dentist in Hadapsar, Pune: fast help for severe toothache, swelling, broken or knocked-out teeth. Call first; Sunday-morning visits available.",
    heroSub:
      "Severe toothache, swelling, a broken tooth or an injury? Call us. We see urgent cases at the earliest suitable slot to relieve your pain and protect your tooth.",
    facts: [
      ["Action", "Call us first"],
      ["Hours", "Mon–Sat, plus Sunday morning"],
      ["Aim", "Relieve pain, protect the tooth"],
    ],
    quickAnswer:
      "A dental emergency is any sudden problem that needs prompt care, such as severe toothache, facial swelling, a knocked-out or broken tooth, bleeding that will not stop or a lost filling or crown with pain. Call us as soon as possible so we can advise you and see you quickly.",
    overview: [
      "Dental emergencies rarely happen at a convenient time. The right first steps at home can make a real difference, especially if a tooth is knocked out. We can talk you through what to do on the phone.",
      "Our priority is to relieve your pain and treat the cause. Once the emergency is under control we discuss the longer-term treatment you may need, such as a root canal, filling, crown or extraction. We will not rush you into anything.",
    ],
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
      { title: "Call us", text: "Tell us your symptoms. We will advise on first aid and book the earliest suitable appointment." },
      { title: "Quick assessment", text: "We examine the area and take an X-ray if required to find the cause of the problem." },
      { title: "Relief first", text: "We deal with the pain, whether by cleaning an infection, opening a tooth to drain it or stabilising an injured tooth." },
      { title: "Treat the cause", text: "We carry out the treatment needed now, or plan it for a follow-up visit." },
      { title: "Follow-up", text: "We check your recovery and complete any further treatment." },
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
    costIntro:
      "The cost of emergency dental care depends on what is needed to treat the problem. We explain the options and the price before we start, so you can make an informed decision even when you are in pain.",
    costFactors: [
      "The nature of the problem and the treatment required",
      "Whether an X-ray is needed",
      "Whether a tooth can be saved or must be removed",
      "Whether follow-up visits are necessary",
      "Whether further treatment such as a crown or root canal is advised",
    ],
    localNote:
      "We are on Tupe Patil Road, close to Kotak Mahindra Bank in Amanora Park Town, so patients from Hadapsar, Magarpatta and Mundhwa can reach us quickly. Please call before you set out.",
    faqs: [
      { q: "Do you treat emergencies?", a: "Yes. Please call us first so we can advise you and see you at the earliest suitable appointment. We are open Monday to Saturday and on Sunday mornings." },
      { q: "What should I do if my tooth is knocked out?", a: "Handle it by the crown, not the root. Rinse gently without scrubbing, keep it moist in milk, and see a dentist within the hour if you can. Do not let it dry out." },
      { q: "I have a swollen face. Is it serious?", a: "Swelling can be a sign of spreading infection and should be seen quickly. If you have trouble breathing or swallowing, go to a hospital emergency department straight away." },
      { q: "Can you treat a toothache the same day?", a: "We do our best to see urgent cases the same day, depending on the schedule. Call us and we will tell you the earliest available time." },
      { q: "Should I take painkillers before I come?", a: "A standard over-the-counter painkiller as directed on the pack can help. Avoid putting aspirin on the gum, and tell us what you took." },
    ],
    related: ["root-canal-treatment", "tooth-extraction", "wisdom-tooth-removal"],
    keywords: ["emergency dentist near me", "toothache treatment hadapsar", "broken tooth repair pune", "dentist open sunday hadapsar"],
  },

  "teeth-whitening": {
    metaDescription:
      "Teeth whitening in Hadapsar, Pune: safe, dentist-supervised whitening for a visibly brighter smile. See who it suits, how it works and book your consultation.",
    heroSub:
      "Brighten your smile safely with dentist-supervised whitening, planned around your teeth and your sensitivity, for results you can be happy with.",
    facts: [
      ["Visit length", "About 60–90 minutes"],
      ["Sensitivity", "Mild and temporary"],
      ["Results", "Vary by starting shade"],
    ],
    quickAnswer:
      "Professional teeth whitening uses a controlled bleaching gel, applied by a dentist, to lighten the natural shade of your teeth and remove deep stains from tea, coffee, tobacco and ageing. It is quicker and more predictable than over-the-counter products and is carried out after a check that your teeth and gums are healthy.",
    overview: [
      "Teeth gradually darken with age and with the things we drink and eat. Whitening can lift stains that brushing cannot reach, but it works best on healthy teeth, and it does not change the colour of fillings, crowns or veneers.",
      "Before starting, we examine your teeth and gums, treat any cavities or gum problems and explain what result is realistic. Then we protect your gums and apply the gel, checking the shade as we go, so you can see the change for yourself.",
    ],
    symptomsTitle: "Who is whitening for?",
    symptoms: [
      "Teeth that have yellowed with age",
      "Stains from tea, coffee, cola, red wine or tobacco",
      "A wedding, interview or event coming up",
      "Teeth that look dull even though you brush well",
      "A wish to lighten teeth before braces, veneers or a smile makeover",
    ],
    steps: [
      { title: "Examination and shade check", text: "We examine your teeth and gums, record your starting shade and discuss realistic expectations." },
      { title: "Cleaning", text: "A professional cleaning removes surface stains and plaque so the gel works evenly." },
      { title: "Protecting the gums", text: "A barrier is applied to protect your gums and lips from the whitening gel." },
      { title: "Whitening gel", text: "The gel is applied to the teeth in timed stages, with the shade checked during the session." },
      { title: "Finishing and advice", text: "We remove the gel, apply a desensitising product if needed and explain how to keep your new shade." },
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
    costIntro:
      "The cost of teeth whitening in Hadapsar depends on the method and the number of sessions required. We give you a clear estimate at your consultation, so you know what to expect before you decide.",
    costFactors: [
      "The method used and the number of sessions",
      "Your starting shade and the result you want",
      "Whether a cleaning is done first",
      "Whether take-home maintenance trays are included",
      "Any dental work needed before whitening",
    ],
    localNote:
      "Many patients from Amanora Park Town and Magarpatta City book whitening before weddings and festive occasions, so it helps to plan a few weeks ahead.",
    faqs: [
      { q: "Is teeth whitening safe?", a: "Yes, when done by a dentist on healthy teeth. We protect your gums and use controlled concentrations." },
      { q: "Does whitening hurt?", a: "Some people feel mild, temporary sensitivity during or after treatment. It usually settles within a day or two, and we can reduce it with desensitising products." },
      { q: "How long do the results last?", a: "It varies, but results often last from several months to a couple of years, depending on your habits. Avoiding staining drinks and tobacco helps." },
      { q: "How many shades lighter will my teeth get?", a: "It depends on your starting shade and the type of staining. We assess this at your consultation and tell you what is realistic." },
      { q: "Can I whiten teeth with crowns or fillings?", a: "Whitening does not change the colour of crowns or fillings, so they may look darker afterwards. We plan the order of treatments with this in mind." },
    ],
    related: ["teeth-cleaning", "veneers", "smile-makeover"],
    keywords: ["teeth whitening cost in pune", "dental bleaching hadapsar", "professional teeth whitening", "yellow teeth treatment"],
  },

  veneers: {
    metaDescription:
      "Dental veneers in Hadapsar, Pune: thin, natural-looking ceramic veneers to fix chips, gaps, stains and uneven teeth. See how they work and book a consultation.",
    heroSub:
      "Reshape and brighten your front teeth with thin, custom-made veneers that look natural and are designed to match your face and smile.",
    facts: [
      ["Visits", "Usually 2–3"],
      ["Material", "Ceramic or composite"],
      ["Best for", "Front-tooth appearance"],
    ],
    quickAnswer:
      "Dental veneers are thin shells of ceramic or composite resin bonded to the front of your teeth. They improve the colour, shape and alignment of teeth that are chipped, stained, gapped or uneven, giving you a more balanced smile without the need for braces in suitable cases.",
    overview: [
      "Veneers can transform the look of front teeth, but they are a permanent change, because a thin layer of enamel is usually shaved to make room. For that reason, we take time to plan and to make sure veneers are the right choice for you.",
      "We discuss the look you want, show you what is realistic and match the shade to your natural teeth and complexion. Where another treatment such as whitening or braces would suit you better, we say so honestly.",
    ],
    symptomsTitle: "When are veneers a good option?",
    symptoms: [
      "Chipped, worn or slightly broken front teeth",
      "Stains that do not respond to whitening",
      "Small gaps between teeth",
      "Teeth that are uneven in size or shape",
      "Mildly crooked teeth where braces are not wanted",
    ],
    steps: [
      { title: "Consultation and smile design", text: "We discuss your goals, take photographs and records and plan the shape and shade of your veneers." },
      { title: "Preparation", text: "A thin layer of enamel is gently removed under local anaesthesia to make space for each veneer." },
      { title: "Impression and temporaries", text: "An impression is taken for the laboratory, and temporary veneers protect your teeth meanwhile." },
      { title: "Try-in", text: "We check the fit, shape and colour before bonding, so you can approve the result." },
      { title: "Bonding", text: "The veneers are bonded to your teeth and the bite is checked and polished." },
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
    costIntro:
      "The cost of veneers in Hadapsar depends on the material and the number of teeth. We give you a clear estimate after your consultation, so you can decide how many teeth to treat.",
    costFactors: [
      "The material: ceramic or composite",
      "The number of teeth being treated",
      "The complexity of the shape and shade matching",
      "Any preparation such as whitening or gum treatment first",
      "A night guard to protect the veneers",
    ],
    localNote:
      "Patients from Amanora Park Town and Magarpatta often combine veneers with whitening to match the shade of the rest of their smile, and we plan the sequence with them.",
    faqs: [
      { q: "Are veneers permanent?", a: "The preparation is permanent, since some enamel is removed. The veneers themselves can last many years, but may need replacing eventually." },
      { q: "Do veneers hurt?", a: "The teeth are numbed during preparation, so you should not feel pain. Some temporary sensitivity afterwards is normal." },
      { q: "How long do veneers last?", a: "With good care, ceramic veneers can last ten years or more. Composite veneers usually need replacing or repair sooner." },
      { q: "What is the difference between ceramic and composite veneers?", a: "Ceramic veneers are made in a laboratory, are stain-resistant and long-lasting. Composite veneers are built directly on the tooth, are quicker and cheaper, but wear sooner." },
      { q: "Can veneers fix crooked teeth?", a: "They can disguise mild crookedness, but aligners or braces are better for correcting a bite or significant crowding." },
    ],
    related: ["teeth-whitening", "smile-makeover", "clear-aligners"],
    keywords: ["ceramic veneers pune", "dental veneers cost pune", "smile design hadapsar", "composite veneers amanora"],
  },

  "smile-makeover": {
    metaDescription:
      "Smile makeover in Hadapsar, Pune: a personalised plan combining whitening, veneers, aligners and more for a smile you love. Book your smile design consultation.",
    heroSub:
      "A smile makeover brings together the right treatments in the right order, planned around your face, your goals and your budget.",
    facts: [
      ["Approach", "Personalised plan"],
      ["Treatments", "Combined as needed"],
      ["Start with", "A consultation"],
    ],
    quickAnswer:
      "A smile makeover is a customised plan that combines cosmetic and restorative treatments to improve the look of your smile. Depending on your needs it can include teeth whitening, veneers, crowns, clear aligners or braces, gum contouring and fillings, all sequenced so that each step supports the next.",
    overview: [
      "No two smiles are the same, which is why there is no single smile makeover treatment. Your plan depends on your teeth, gums, bite and what you want to change, and it often starts with simple steps such as cleaning and whitening.",
      "We begin with a conversation about what you like and dislike about your smile. We take photographs and records, explain the options and tell you which are essential, which are optional and what to expect, so you can decide at your own pace.",
    ],
    symptomsTitle: "When should you consider a smile makeover?",
    symptoms: [
      "You feel self-conscious about your teeth in photos or when you smile",
      "Your teeth are stained, chipped, uneven or gapped",
      "You have a gummy smile or uneven gums",
      "Old fillings or crowns no longer match your teeth",
      "A special occasion or career change has you thinking about your smile",
    ],
    steps: [
      { title: "Listening and assessing", text: "We listen to your goals and examine your teeth, gums, bite and facial features." },
      { title: "Smile design and plan", text: "We discuss options, show you what is realistic and prepare a step-by-step plan with costs." },
      { title: "Healthy foundation", text: "Any decay, gum problems or other issues are treated first, so cosmetic work is built on healthy teeth." },
      { title: "Cosmetic treatments", text: "Whitening, aligners, veneers, crowns or gum contouring are completed in the best order." },
      { title: "Finishing and maintenance", text: "We fine-tune the result and give you a plan to protect it, including retainers or a night guard if needed." },
    ],
    benefits: [
      "A smile designed around your face and wishes",
      "Treatments planned in the right order for the best result",
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
    costIntro:
      "Because a smile makeover is built from the treatments you choose, the cost varies a lot. We give you an itemised plan, so you can see the cost of each part and decide what to do now and what to leave for later.",
    costFactors: [
      "Which treatments are included in your plan",
      "The number of teeth involved",
      "The materials chosen for veneers or crowns",
      "Preparation work needed for a healthy foundation",
      "The number of visits and the length of treatment",
    ],
    localNote:
      "Many patients from Hadapsar and Magarpatta City start with a consultation to understand their options, with no obligation to proceed.",
    faqs: [
      { q: "How long does a smile makeover take?", a: "It depends on the treatments included. Simple plans may take a few weeks, while plans involving aligners can take many months." },
      { q: "Will I see what my smile will look like before I start?", a: "We discuss the likely result with you using photographs and records, and a try-in is used for veneers before the final bonding." },
      { q: "Is a smile makeover only cosmetic?", a: "No. We make sure your teeth and gums are healthy first, and the plan also improves function and bite where needed." },
      { q: "Can I do it in stages?", a: "Yes. Your plan can be staged so that you complete treatment gradually and spread the cost." },
      { q: "How much does a smile makeover cost?", a: "It depends on your plan. After a consultation we provide an itemised estimate so you can choose what suits you and your budget." },
    ],
    related: ["teeth-whitening", "veneers", "clear-aligners"],
    keywords: ["smile design pune", "cosmetic dentist hadapsar", "smile makeover cost pune", "aesthetic dentistry amanora"],
  },

  "laser-dentistry": {
    metaDescription:
      "Laser dentistry in Hadapsar, Pune: gentle soft-tissue laser treatment for gum contouring, ulcers and minor procedures, with less discomfort. Book a visit.",
    heroSub:
      "Where it is clinically suitable, laser treatment can make minor gum procedures gentler, with less bleeding and often quicker healing.",
    facts: [
      ["Use", "Soft-tissue procedures"],
      ["Comfort", "Often little or no stitches"],
      ["Best for", "Gum shaping and minor surgery"],
    ],
    quickAnswer:
      "Laser dentistry uses a focused beam of light to treat soft tissue such as the gums and the lining of the mouth. It can reshape gums, remove small growths, treat mouth ulcers and release tight tissue under the tongue or lip, often with less bleeding and discomfort than a scalpel.",
    overview: [
      "Dental lasers are used mostly for gum and soft-tissue work. Because the laser seals small blood vessels as it works, there is usually less bleeding, and many procedures need few or no stitches.",
      "Laser is not a replacement for every dental treatment and is not suitable for all cases. We assess your situation, explain whether laser is the right tool for it, and explain the alternatives, so you can make an informed choice.",
    ],
    symptomsTitle: "When can laser treatment help?",
    symptoms: [
      "A gummy smile or uneven gum line that needs reshaping",
      "Gum tissue that overgrows or covers part of a tooth",
      "Painful mouth ulcers or small soft-tissue growths",
      "A tight frenum under the tongue or lip",
      "Gum procedures where you want less bleeding",
    ],
    steps: [
      { title: "Examination and planning", text: "We examine the area and discuss whether laser is suitable and what to expect." },
      { title: "Numbing", text: "A local anaesthetic or numbing gel is used so the procedure is comfortable." },
      { title: "Laser treatment", text: "The laser is used to reshape or remove the tissue precisely, while sealing small blood vessels." },
      { title: "Aftercare advice", text: "You receive simple instructions to keep the area clean and comfortable while it heals." },
      { title: "Review", text: "We check healing at a follow-up visit." },
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
      "Laser is a good option for many soft-tissue procedures but is not suitable for everything. It does not replace fillings or most hard-tissue treatment. We will tell you honestly whether laser is the best choice for your problem.",
    aftercare: [
      "Keep the area clean and follow our rinsing instructions",
      "Avoid hot, spicy or sharp foods for a few days",
      "Use any prescribed medicine or gel as advised",
      "Do not touch the area with your fingers or tongue",
      "Attend your review visit",
    ],
    costIntro:
      "The cost of laser dentistry depends on the procedure and the area treated. We give you a written estimate after we examine you, so you know the cost before treatment starts.",
    costFactors: [
      "The type of procedure and the area treated",
      "How many teeth or sites are involved",
      "Whether it is combined with another treatment",
      "Whether more than one visit is needed",
      "Any additional medicines or follow-up required",
    ],
    localNote:
      "Patients from Hadapsar and Amanora Park Town are often referred to us for gum shaping as part of a smile makeover, and we plan it alongside other treatments.",
    faqs: [
      { q: "Is laser dentistry painful?", a: "Treatment is done with a local anaesthetic or numbing gel, so you should feel little or no pain. Healing is often more comfortable than after conventional surgery." },
      { q: "Is laser dentistry safe?", a: "Yes, when used by a trained dentist for suitable procedures, with proper eye protection and safety steps." },
      { q: "Does laser replace drilling for cavities?", a: "Not in most cases. Laser is used mainly for soft tissue such as gums. Cavities are generally still treated with fillings." },
      { q: "How quickly do I heal?", a: "Many patients heal in about one to two weeks, depending on the procedure. We give you aftercare advice to help." },
      { q: "Can laser help with gum disease?", a: "It can be used as an addition to conventional treatment in some cases. We discuss whether it is suitable for you." },
    ],
    related: ["gum-treatment", "smile-makeover", "veneers"],
    keywords: ["laser gum treatment pune", "gum contouring hadapsar", "soft tissue laser dentist", "gentle laser dentistry"],
  },
};
