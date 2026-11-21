import type { TreatmentContent } from "./types";
import { local } from "./local";

/** Orthodontic, children's and preventive care. */
export const CONTENT_B: Record<string, TreatmentContent> = {
  braces: {
    metaDescription:
      "Braces in Hadapsar, Pune: straighten crooked, crowded or gapped teeth with metal or ceramic braces for teens and adults. See the process and book a visit.",
    heroSub:
      "Braces in Hadapsar, Pune straighten crooked, crowded or gapped teeth and correct your bite, with metal or ceramic options planned carefully for teens and adults.",
    quickAnswer:
      "Braces are fixed appliances made of brackets and wires that gently move teeth into better positions over time. They correct crooked teeth, gaps, crowding and bite problems. Options include metal braces and tooth-coloured ceramic braces, and they suit both teenagers and adults.",
    overview:
      "Straight teeth are easier to clean, more comfortable to chew with and often more attractive. Braces work by applying light, steady pressure, and a plan tailored to your mouth decides how long the process takes.",
    symptomsTitle: "When are braces recommended?",
    symptoms: [
      "Crooked, overlapping or crowded teeth",
      "Gaps between teeth",
      "Teeth that stick out or an overbite or underbite",
      "A crossbite or a bite that does not meet properly",
      "Difficulty cleaning teeth because they are hard to reach",
      "Wanting a straighter smile as a teenager or as an adult",
    ],
    steps: [
      { title: "Consultation and records", text: "We examine your teeth and bite, take X-rays and photographs, and discuss what you want to achieve.", art: "exam" },
      { title: "Treatment plan", text: "You receive a written plan with the type of braces, expected duration and estimated cost.", art: "plan" },
      { title: "Preparation", text: "Any cavities or gum problems are treated first, and sometimes a tooth needs to be removed to make space.", art: "stabilise" },
      { title: "Fitting the braces", text: "Brackets are bonded to the teeth and the first wire is placed. Fitting is usually comfortable, though teeth can feel tender for a few days.", art: "braces" },
      { title: "Regular adjustments", text: "Every four to six weeks we adjust the wires to keep teeth moving. Good hygiene during this period is essential.", art: "calendar" },
      { title: "Retention", text: "Once the braces are removed, retainers keep your teeth in their new position.", art: "retainer" },
    ],
    benefits: [
      "Straighter, more even teeth",
      "A healthier, more balanced bite",
      "Teeth that are easier to clean",
      "Effective for a very wide range of problems, including complex ones",
      "A choice of metal or less noticeable ceramic braces",
    ],
    suitableTitle: "Braces or clear aligners?",
    suitableFor:
      "Braces work for nearly all cases, including complex ones, and do not depend on you remembering to wear them. Clear aligners suit mild to moderate problems and patients who value discretion. We explain both so you can choose with confidence.",
    aftercare: [
      "Brush after every meal and clean around brackets carefully",
      "Avoid very sticky or hard foods that can break brackets",
      "Use interdental brushes or a water flosser as shown",
      "Attend every adjustment visit",
      "Wear retainers as instructed after treatment",
    ],
    localNote:
      "Braces mean regular visits every four to six weeks for a year or two, so a convenient clinic matters. Our Tupe Patil Road clinic is a short drive from Magarpatta City, Amanora Park Town and Keshav Nagar, with evening hours until 9 PM and Sunday-morning slots for adjustments.",
    faqs: [
      { q: "Do braces hurt?", a: "Fitting is usually comfortable, but your teeth and gums can feel sore for a few days after fitting and after adjustments. Over-the-counter pain relief and soft foods help." },
      { q: "How long will I need braces?", a: "Most treatments take around 12 to 24 months, but this varies with your case. We give you an estimate after the examination." },
      { q: "What is the difference between metal and ceramic braces?", a: "Metal braces are the most durable and often the most affordable. Ceramic braces are tooth-coloured and less noticeable but can stain more easily if not cleaned well." },
      { q: "How much do braces cost in Pune?", a: "The cost depends on the type of braces (metal or ceramic), how complex your case is and how long treatment takes. After your examination and records you receive a written estimate that includes retainers, so you know the full cost up front." },
      local(
        "Where can I get braces near Magarpatta City or Keshav Nagar?",
        "Your examination, braces fitting and every monthly adjustment take place at one clinic, which keeps the many visits simple.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["clear-aligners", "kids-dentistry", "teeth-cleaning"],
    keywords: ["braces cost in pune", "ceramic braces pune", "orthodontic treatment hadapsar", "metal braces amanora"],
  },

  "clear-aligners": {
    metaDescription:
      "Clear aligners in Hadapsar, Pune: straighten teeth discreetly with nearly invisible, removable trays. See who is suitable, how it works and book a visit.",
    heroSub:
      "Clear aligners in Hadapsar, Pune straighten your teeth discreetly with nearly invisible, removable trays, planned carefully and checked at regular visits with us.",
    quickAnswer:
      "Clear aligners are a series of transparent, custom-made plastic trays that gradually move your teeth. You wear each set for a week or two, then move to the next. They are removable for eating and cleaning, and are far less noticeable than traditional braces.",
    overview:
      "Many adults avoid orthodontic treatment because they do not want visible metal. Clear aligners offer a more discreet option for suitable cases, and being removable they make brushing and flossing easier than with fixed braces.",
    symptomsTitle: "When are clear aligners a good choice?",
    symptoms: [
      "Mild to moderate crowding or spacing",
      "Teeth that have shifted after earlier orthodontic treatment",
      "A desire for a discreet option for work or social reasons",
      "Teeth that are hard to clean because they overlap",
      "A wish for a removable appliance you can take out to eat",
    ],
    steps: [
      { title: "Consultation and assessment", text: "We examine your teeth and gums, take records and decide whether aligners suit your case.", art: "exam" },
      { title: "Digital planning", text: "A digital scan or impressions are used to plan how your teeth will move, and we show you the expected result.", art: "scan" },
      { title: "Receiving your aligners", text: "You receive your first sets, along with clear instructions on wearing and cleaning them.", art: "aligner" },
      { title: "Switching trays", text: "You change to the next tray every one to two weeks, wearing them for most of the day and night.", art: "calendar" },
      { title: "Check-ups", text: "We review progress regularly and make adjustments such as small attachments if they are needed.", art: "inspect" },
      { title: "Retainers", text: "After treatment, retainers hold your teeth in their new position.", art: "retainer" },
    ],
    benefits: [
      "Nearly invisible, so they suit professional and social life",
      "Removable for eating, brushing and special occasions",
      "Typically comfortable, with no brackets or wires",
      "Easier to keep your teeth and gums clean",
      "A clear preview of the planned result",
    ],
    suitableTitle: "Are aligners right for me?",
    suitableFor:
      "Aligners work best for mild to moderate problems and for patients who can wear them for around 20 to 22 hours a day. Complex bite problems often need braces. We will always recommend the option most likely to give you a good result.",
    aftercare: [
      "Wear the aligners for the recommended hours every day",
      "Remove them to eat and drink anything except water",
      "Brush your teeth before putting them back in",
      "Clean the aligners daily with a soft brush and cool water",
      "Keep spare sets safe and attend all check-ups",
    ],
    localNote:
      "Aligners are worn at home, with short review visits every few weeks. Our Tupe Patil Road clinic is a short drive from Magarpatta City, Amanora Park Town, Mundhwa and Keshav Nagar, and evening hours until 9 PM and Sunday-morning slots make it easier to fit reviews around work.",
    faqs: [
      { q: "Are clear aligners painful?", a: "You may feel pressure or mild soreness for a day or two each time you start a new tray. This is normal and usually settles quickly." },
      { q: "How long does clear aligner treatment take?", a: "It depends on the case. Many treatments last between six and eighteen months. We give you an estimate after your assessment." },
      { q: "Can I eat with aligners in?", a: "No. Remove them to eat and drink anything other than water, then clean your teeth before putting them back." },
      { q: "Are clear aligners as effective as braces?", a: "For suitable mild to moderate cases they can be very effective. More complex bite problems may be better treated with braces." },
      { q: "How much do clear aligners cost in Pune?", a: "It depends on how many trays your case needs and how complex it is, since a mild case needs fewer trays than a crowded one. After the assessment we give you a written estimate that says what is included, such as retainers and review visits." },
      local(
        "Where can I get clear aligners near Amanora Park Town or Magarpatta?",
        "Your assessment, scan, aligner fitting and the review visits every few weeks are all at our clinic, so you can fit them around an office schedule.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["braces", "teeth-whitening", "smile-makeover"],
    keywords: ["invisible braces pune", "clear aligner cost pune", "teeth straightening hadapsar", "removable braces"],
  },

  "kids-dentistry": {
    metaDescription:
      "Kids dentist in Hadapsar, Pune: gentle, fear-free dental care for infants, children and teens, with check-ups, sealants and fluoride. Book your child's visit.",
    heroSub:
      "A gentle kids dentist in Hadapsar, Pune: friendly, fear-free dental care that helps your child build healthy habits and feel relaxed about visiting the dentist.",
    quickAnswer:
      "Kids dentistry focuses on the dental health of infants, children and teenagers. It covers check-ups, cleaning, fluoride, sealants, treating cavities in baby and adult teeth, and guiding healthy habits. The aim is to prevent problems and make dental visits a comfortable, positive experience.",
    overview:
      "Baby teeth matter. They hold space for adult teeth, help children chew and speak, and decay in them can cause pain and infection. Starting dental visits early lets us prevent problems and helps children feel at ease.",
    symptomsTitle: "When should you bring your child to the dentist?",
    symptoms: [
      "By your child's first birthday or when the first tooth appears",
      "Twice a year for routine check-ups and cleaning",
      "Dark spots, holes or white patches on the teeth",
      "Tooth pain, swelling or trouble eating",
      "Thumb sucking, nail biting or mouth breathing habits",
      "A knocked, chipped or loose tooth after an injury",
    ],
    steps: [
      { title: "Friendly first meeting", text: "We let your child look around and meet us, with no rush and no treatment on the first visit if they are nervous.", art: "kid" },
      { title: "Gentle examination", text: "We count and check the teeth, gums and bite, and explain what we see to both child and parent.", art: "exam" },
      { title: "Cleaning and fluoride", text: "A gentle clean and fluoride application strengthen teeth and help prevent cavities.", art: "fluoride" },
      { title: "Preventive care", text: "Where suitable, we apply sealants to the deep grooves of back teeth to block decay.", art: "sealant" },
      { title: "Treatment if needed", text: "Cavities are treated gently, and we advise on diet, brushing and habits at home.", art: "composite" },
    ],
    benefits: [
      "Early detection of cavities and bite problems",
      "A calm, positive attitude to the dentist",
      "Stronger teeth through fluoride and sealants",
      "Good brushing and eating habits from a young age",
      "Guidance on habits like thumb sucking and pacifier use",
    ],
    suitableTitle: "Helping an anxious child",
    suitableFor:
      "Many children feel nervous at first. We use simple language, show and explain before we do, and work at a comfortable pace. It helps if parents stay positive and avoid words like pain or hurt before the visit. We never force treatment.",
    aftercare: [
      "Brush twice daily with a smear or pea-sized amount of fluoride toothpaste",
      "Supervise brushing until about the age of seven or eight",
      "Limit sugary snacks and sweet drinks, especially at bedtime",
      "Do not let babies sleep with a bottle of milk or juice",
      "Return every six months for a check-up",
    ],
    localNote:
      "Families from the housing societies around Amanora Park Town, Magarpatta City and Mundhwa can bring more than one child in the same visit. Our Sunday-morning slot suits school timetables, and a clinic close to home helps children see the dentist as a normal, friendly part of life.",
    faqs: [
      { q: "When should my baby first see a dentist?", a: "By the first birthday, or when the first tooth appears. An early visit lets us check development and guide you on cleaning and feeding." },
      { q: "Do baby teeth really need fillings?", a: "Yes. Untreated decay in baby teeth can cause pain and infection, and may affect the adult teeth coming through." },
      { q: "Will my child feel pain at the dentist?", a: "A check-up and cleaning should not hurt. If a filling is needed we numb the area first, explain each step in simple words and stop if your child needs a break." },
      { q: "How much does a dentist visit cost for a child in Hadapsar?", a: "A routine child check-up is one of the most affordable dental visits, while treatment such as a filling costs more. We tell you the cost of anything beyond the check-up before we begin, so parents are never surprised." },
      local(
        "Where can I find a kids dentist near Amanora Park Town and Magarpatta?",
        "We welcome children from infants to teenagers, and parents are welcome to sit beside the chair throughout.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["dental-checkup", "teeth-cleaning", "braces"],
    keywords: ["pediatric dentist pune", "child dentist hadapsar", "baby teeth care", "kids dental check-up amanora"],
  },

  "teeth-cleaning": {
    metaDescription:
      "Teeth cleaning in Hadapsar, Pune: professional scaling and polishing to remove plaque and tartar and protect your gums. Book your six-monthly cleaning today.",
    heroSub:
      "Teeth cleaning in Hadapsar, Pune: professional scaling and polishing removes the plaque and tartar that brushing misses, protecting your gums and leaving your teeth fresh and smooth.",
    quickAnswer:
      "Professional teeth cleaning, also called scaling and polishing, removes plaque and hardened tartar from above and just below the gum line using ultrasonic and hand instruments, then polishes the teeth. It helps prevent gum disease and cavities and removes surface stains.",
    overview:
      "Even careful brushing leaves some plaque behind, and over time it hardens into tartar that only a dental professional can remove. Left alone, it irritates the gums and can lead to bleeding, bad breath and gum disease.",
    symptomsTitle: "When do you need a dental cleaning?",
    symptoms: [
      "It has been six months or more since your last cleaning",
      "Your gums bleed when you brush or floss",
      "You notice yellow or brown tartar build-up",
      "You have persistent bad breath",
      "Your teeth look stained from tea, coffee or tobacco",
      "You wear braces or have crowded teeth that are hard to clean",
    ],
    steps: [
      { title: "Quick examination", text: "We check your teeth and gums before cleaning, so any area of concern can be noted.", art: "exam" },
      { title: "Scaling", text: "An ultrasonic scaler and hand instruments remove tartar and plaque above and below the gum line.", art: "scaling" },
      { title: "Stain removal and polishing", text: "The teeth are polished with a fine paste to remove surface stains and leave them smooth.", art: "polish" },
      { title: "Flossing and rinsing", text: "We clean between the teeth and rinse away debris.", art: "floss" },
      { title: "Personal advice", text: "We show you how to brush and floss effectively and advise on any areas that need extra care.", art: "brush" },
    ],
    benefits: [
      "Removes tartar that brushing cannot",
      "Helps prevent gum disease and tooth loss",
      "Reduces bad breath",
      "Brightens teeth by removing surface stains",
      "Lets us catch problems early",
    ],
    suitableTitle: "Will cleaning loosen my teeth?",
    suitableFor:
      "No. If your teeth feel loose after a cleaning, it is usually because tartar was holding swollen gums together. The gums settle as they heal. If you have advanced gum disease, we may recommend a deeper cleaning in stages. We will explain this clearly.",
    aftercare: [
      "Your teeth may feel sensitive for a day or two",
      "Avoid very hot, cold or staining foods for a few hours",
      "Brush gently twice daily and floss once a day",
      "Use a soft toothbrush and fluoride toothpaste",
      "Book your next cleaning in six months",
    ],
    localNote:
      "A scale and polish takes about half an hour, so it fits into a weekday evening. Our Tupe Patil Road clinic is close to Amanora Park Town, Magarpatta City and Keshav Nagar, and you can book the whole household on a Sunday morning, when we are open from 11 AM to 2 PM.",
    faqs: [
      { q: "Does teeth cleaning hurt?", a: "Most people find it comfortable. If your gums are inflamed or your teeth are sensitive, you might feel some tenderness, and we work gently to keep you comfortable." },
      { q: "How often should I have my teeth cleaned?", a: "Most people benefit from a cleaning every six months. If you have gum disease or other risk factors, we may suggest more frequent visits." },
      { q: "Does scaling damage tooth enamel?", a: "No. Scaling removes tartar, not enamel. Done correctly by a dentist, it is safe and protects your teeth." },
      { q: "Will cleaning whiten my teeth?", a: "Cleaning removes surface stains, so teeth can look brighter. It does not change the natural shade. For that, you would need whitening treatment." },
      { q: "How much does teeth cleaning cost in Pune?", a: "A routine scaling and polishing is one of the most affordable dental treatments. The price rises if you have heavy tartar or gum disease, or need a deeper clean over more than one visit. We confirm the cost with you before we start." },
      local(
        "Where can I get teeth cleaning near Magarpatta City and Amanora Park Town?",
        "A scaling and polishing visit takes about half an hour, so it fits easily around work or school.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["dental-checkup", "gum-treatment", "teeth-whitening"],
    keywords: ["scaling and polishing pune", "dental cleaning cost pune", "tartar removal hadapsar", "teeth cleaning near amanora"],
  },

  "dental-checkup": {
    metaDescription:
      "Dental check-up and digital X-ray in Hadapsar, Pune: a thorough six-monthly exam to catch cavities and gum problems early. Book your family check-up today.",
    heroSub:
      "A dental check-up and digital X-ray in Hadapsar, Pune: a thorough six-monthly examination catches cavities, gum disease and other problems early, when they are simple to treat.",
    quickAnswer:
      "A dental check-up is a routine examination of your teeth, gums, bite and mouth to find problems early. It usually includes a visual check, a review of your oral hygiene, an oral cancer screen and, when needed, digital X-rays that show decay and bone health that cannot be seen by eye.",
    overview:
      "Most dental problems start without pain. A small cavity or early gum disease can quietly progress until it needs more involved treatment. Regular check-ups catch these issues while they are still easy to treat.",
    symptomsTitle: "When should you book a check-up?",
    symptoms: [
      "Every six months, even if nothing hurts",
      "You are new to the area or have not seen a dentist for over a year",
      "Before starting braces, implants or other major treatment",
      "You have bleeding gums, bad breath or sensitivity",
      "A child's first visit or routine review",
      "During pregnancy or when planning a pregnancy",
    ],
    steps: [
      { title: "Health history", text: "We note any medical conditions, medicines and concerns so we can plan safely.", art: "notes" },
      { title: "Examination", text: "We check every tooth, your gums, bite, jaw joints, tongue and the soft tissues of your mouth.", art: "exam" },
      { title: "Digital X-rays when needed", text: "Low-dose digital X-rays are taken only when they will help us find or monitor a problem.", art: "xray" },
      { title: "Explanation", text: "We go through our findings with you and show you anything of concern.", art: "consult" },
      { title: "A clear plan", text: "You receive a simple plan in priority order, with the estimated cost, and decide how to proceed.", art: "plan" },
    ],
    benefits: [
      "Early detection of cavities and gum disease",
      "Simpler and less costly treatment",
      "Early screening for mouth ulcers and other changes",
      "A personalised oral-care routine",
      "Peace of mind for you and your family",
    ],
    suitableTitle: "Are dental X-rays safe?",
    suitableFor:
      "Modern digital X-rays use a very low dose of radiation, and we take them only when they will change or support the diagnosis. If you are pregnant, tell us. We avoid X-rays unless they are clearly necessary and take extra precautions.",
    aftercare: [
      "Follow the oral-care advice we give you",
      "Book any recommended treatment promptly",
      "Brush twice daily and floss once a day",
      "Keep a six-monthly check-up routine",
      "Contact us if anything changes between visits",
    ],
    localNote:
      "You can book check-ups for the whole household at once, on a weekday evening or on a Sunday morning. We are on Tupe Patil Road, opposite Sadhna Bank in Amanora Park Town, a short trip from Hadapsar, Magarpatta City and Mundhwa, so a visit fits easily around school pick-ups or work.",
    faqs: [
      { q: "How often should I have a dental check-up?", a: "Most people should have a check-up every six months. Some may need more frequent visits, depending on their gum health and risk of decay." },
      { q: "What does a dental check-up include?", a: "We examine your teeth, gums, bite and mouth, review your oral hygiene, take X-rays when needed and discuss any treatment." },
      { q: "Do I need X-rays at every check-up?", a: "No. We take X-rays only when they are needed, such as for a new patient, a specific concern or routine monitoring at suitable intervals." },
      { q: "Are check-ups necessary for children?", a: "Yes. Regular visits help protect baby and adult teeth and help children feel comfortable with the dentist." },
      { q: "How much does a dental check-up cost in Hadapsar?", a: "A routine check-up is an affordable way to prevent costly treatment later. The total depends on whether X-rays or a cleaning are added at the same visit, and we tell you in advance so the total is clear." },
      local(
        "Where can I get a dental check-up near Amanora Park Town and Mundhwa?",
        "We see adults and children, so the whole family can be examined in one visit.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["teeth-cleaning", "tooth-fillings", "kids-dentistry"],
    keywords: ["dental checkup near me", "digital x-ray dental pune", "oral examination hadapsar", "family dentist amanora"],
  },

  "gum-treatment": {
    metaDescription:
      "Gum treatment in Hadapsar, Pune: stop bleeding, swollen or receding gums and treat gum disease with gentle, modern care. Book your gum health check today.",
    heroSub:
      "Gum treatment in Hadapsar, Pune: stop bleeding, swollen or receding gums and control gum disease with gentle care and a clear plan to keep your gums healthy.",
    quickAnswer:
      "Gum treatment cleans away the plaque and tartar causing gum disease, including below the gum line, and helps the gums heal and reattach. Early gum disease, called gingivitis, can usually be reversed. More advanced disease, called periodontitis, can be controlled with deeper cleaning and careful maintenance.",
    overview:
      "Gum disease is a leading cause of tooth loss in adults, and it often does not hurt in the early stages. Bleeding when you brush, red or puffy gums and a bad taste are warning signs that should not be ignored.",
    symptomsTitle: "Signs you may need gum treatment",
    symptoms: [
      "Gums that bleed when you brush or floss",
      "Red, swollen or tender gums",
      "Persistent bad breath or a bad taste",
      "Gums pulling away from the teeth, making teeth look longer",
      "Loose or shifting teeth",
      "Pus or discomfort around the gum line",
    ],
    steps: [
      { title: "Gum assessment", text: "We measure the gum pockets around each tooth and take X-rays where needed to check the supporting bone.", art: "gum" },
      { title: "Diagnosis and plan", text: "We explain whether you have gingivitis or a more advanced disease and what treatment is needed.", art: "plan" },
      { title: "Deep cleaning", text: "Scaling and root planing remove plaque and tartar from above and below the gum line, with local anaesthesia for comfort if required.", art: "scaling" },
      { title: "Home-care coaching", text: "We show you the brushing and interdental cleaning techniques that suit your mouth.", art: "brush" },
      { title: "Review and maintenance", text: "We re-check your gums after healing and set up regular maintenance visits.", art: "calendar" },
    ],
    benefits: [
      "Stops gum bleeding and inflammation",
      "Helps keep your natural teeth for longer",
      "Reduces bad breath",
      "Slows or halts the loss of supporting bone",
      "Supports your general health, which gum disease can affect",
    ],
    suitableTitle: "Gum disease and your general health",
    suitableFor:
      "Gum disease is linked with conditions such as diabetes, and smoking makes it worse and harder to treat. Tell us about any health conditions you have, because controlling them helps your gums heal. Advanced cases may need ongoing care and sometimes referral for surgical treatment.",
    aftercare: [
      "Brush gently twice daily with a soft brush",
      "Clean between your teeth every day using floss or interdental brushes",
      "Avoid smoking and tobacco, which slow healing",
      "Rinse as advised and avoid very hot food on the first day",
      "Attend all maintenance visits, usually every three to six months",
    ],
    localNote:
      "Deep gum cleaning sometimes needs more than one visit, and evening appointments until 9 PM help you fit them around work. Our Tupe Patil Road clinic is close to Amanora Park Town, Magarpatta City and Keshav Nagar, which also makes the regular maintenance visits easier to keep.",
    faqs: [
      { q: "Can gum disease be cured?", a: "Early gum disease (gingivitis) can usually be reversed with good cleaning and home care. More advanced disease can be controlled but needs ongoing maintenance." },
      { q: "Why do my gums bleed?", a: "Bleeding is usually a sign of inflammation caused by plaque. Better cleaning and professional treatment normally stops it within a couple of weeks." },
      { q: "Can receding gums grow back?", a: "Gum tissue does not grow back by itself, but treatment can stop further recession. Some cases may need gum grafting, and we advise on this if relevant." },
      { q: "How much does gum treatment cost in Pune?", a: "It depends on how advanced the disease is and how many areas need deep cleaning. A mild case may need one visit, while a more advanced case can need several visits and ongoing maintenance. After a gum assessment we give you a written estimate." },
      local(
        "Where can I get gum treatment near Keshav Nagar and Magarpatta?",
        "Assessment, deep cleaning and the follow-up maintenance visits are all at our clinic.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["teeth-cleaning", "bad-breath-treatment", "dental-checkup"],
    keywords: ["bleeding gums treatment pune", "periodontal treatment hadapsar", "gingivitis treatment", "receding gums treatment"],
  },

  "bad-breath-treatment": {
    metaDescription:
      "Bad breath treatment in Hadapsar, Pune: find and treat the real cause of persistent bad breath, from gum disease to tongue coating. Book a discreet visit.",
    heroSub:
      "Bad breath treatment in Hadapsar, Pune: persistent bad breath has a cause, and in most cases it can be found and treated. We help you get to the bottom of it, discreetly and without judgement.",
    quickAnswer:
      "Bad breath, or halitosis, is most often caused by bacteria in the mouth, from plaque, gum disease, a coated tongue, cavities or dry mouth. Treatment depends on the cause and usually involves a professional clean, treating gum disease or decay, tongue cleaning and better home care.",
    overview:
      "Almost everyone has bad breath sometimes, but when it is constant it can affect your confidence at work and in social life. Mouthwashes only mask the smell for a short time and do not fix its source.",
    symptomsTitle: "Signs you may need treatment for bad breath",
    symptoms: [
      "Bad breath that persists even after brushing",
      "A bad taste in your mouth",
      "A white or yellow coating on your tongue",
      "Bleeding or swollen gums",
      "A dry mouth, especially on waking",
      "Others, or you, notice an odour",
    ],
    steps: [
      { title: "Discussion and history", text: "We ask about your diet, habits and health, since many things can affect breath.", art: "consult" },
      { title: "Mouth examination", text: "We check your teeth, gums, tongue and any old dental work for sources of odour.", art: "inspect" },
      { title: "Professional cleaning", text: "Scaling and polishing remove plaque and tartar, a common source of odour.", art: "scaling" },
      { title: "Treat the underlying cause", text: "We treat gum disease, cavities or broken fillings, which can all trap bacteria.", art: "stabilise" },
      { title: "Tongue and home-care guidance", text: "We show you how to clean your tongue and teeth properly, and advise on diet and hydration.", art: "tongue" },
    ],
    benefits: [
      "Fresher breath that lasts",
      "More confidence in conversation",
      "Healthier gums and teeth",
      "Treats the cause instead of covering it up",
      "A discreet, judgement-free approach",
    ],
    suitableTitle: "When bad breath is not from the mouth",
    suitableFor:
      "If your mouth is healthy but the problem remains, causes such as sinus or tonsil problems, reflux or certain medicines may be involved. We will let you know and suggest you speak to your doctor, so you do not go on treating the wrong cause.",
    aftercare: [
      "Brush twice daily and floss every day",
      "Clean your tongue gently each morning and night",
      "Drink plenty of water to avoid a dry mouth",
      "Cut down on tobacco, which worsens breath and gum disease",
      "Visit for a check-up and clean every six months",
    ],
    localNote:
      "Our approach is always discreet and judgement-free. Our Tupe Patil Road clinic in Amanora Park Town is a short trip from nearby offices in Magarpatta City and from homes across Hadapsar and Keshav Nagar, and evening appointments until 9 PM make it easy to come after work.",
    faqs: [
      { q: "What causes bad breath?", a: "Most cases come from bacteria in the mouth: plaque, gum disease, a coated tongue, cavities or dry mouth. Certain foods, tobacco and some health conditions can also contribute." },
      { q: "Can mouthwash cure bad breath?", a: "Mouthwash may freshen your breath for a short time but does not fix the cause. A dental examination finds what needs treating." },
      { q: "Is bad breath a sign of a serious problem?", a: "Usually it is a dental issue that is easy to treat. Occasionally it can point to a medical problem, and we will advise you if that appears to be the case." },
      { q: "Can bad breath come from the stomach or throat?", a: "Sometimes. Reflux, tonsil stones, sinus problems and some medicines can contribute. If your teeth, gums and tongue are healthy, we say so and suggest you speak to your physician, so you do not keep treating the wrong thing." },
      { q: "How much does bad breath treatment cost in Hadapsar?", a: "It depends on the cause. A professional cleaning may be all that is needed, while gum disease or decay needs additional treatment. We explain the cost clearly before we begin." },
      local(
        "Where can I get bad breath treatment near Magarpatta City and Amanora Park Town?",
        "Our approach is private and judgement-free, and most visits take about 30 to 45 minutes.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["teeth-cleaning", "gum-treatment", "dental-checkup"],
    keywords: ["halitosis treatment pune", "mouth odour hadapsar", "fresh breath dentist", "persistent bad breath cause"],
  },

  "sensitive-teeth": {
    metaDescription:
      "Sensitive teeth treatment in Hadapsar, Pune: find the cause of sharp pain with hot, cold or sweet foods and get lasting relief. Book your consultation today.",
    heroSub:
      "Sensitive teeth treatment in Hadapsar, Pune: if hot, cold or sweet foods make you wince, there is usually a reason and a fix. We find the cause and treat it, so you can enjoy food and drink again.",
    quickAnswer:
      "Tooth sensitivity is a short, sharp pain when teeth meet hot, cold, sweet or acidic food or air. It happens when the protective enamel wears or gums recede, exposing the sensitive dentine beneath. Treatment depends on the cause and can include desensitising agents, fluoride, fillings or bonding.",
    overview:
      "Sensitivity is common and treatable, but it can also be an early sign of a cavity, a cracked tooth or gum recession. Switching toothpaste may help in mild cases, but it is worth having the cause checked.",
    symptomsTitle: "Common signs of sensitive teeth",
    symptoms: [
      "A sharp twinge with cold drinks or ice cream",
      "Pain when drinking hot tea or coffee",
      "Discomfort with sweet or sour food",
      "Pain when brushing or breathing in cold air",
      "Visible gum recession or worn spots near the gum line",
      "Sensitivity after teeth whitening or a recent filling",
    ],
    steps: [
      { title: "Find the sensitive teeth", text: "We test your teeth and examine your gums, enamel and bite to pinpoint the problem.", art: "inspect" },
      { title: "Check for other causes", text: "We rule out cavities, cracks, loose fillings or gum disease, which need different treatment.", art: "xray" },
      { title: "Desensitising treatment", text: "We apply desensitising agents or fluoride varnish to block the exposed tubules in the dentine.", art: "fluoride" },
      { title: "Repair worn areas", text: "Exposed or worn areas near the gum line can be sealed or bonded to protect them.", art: "composite" },
      { title: "Home-care advice", text: "We advise on toothpaste, brushing technique and diet, and suggest a night guard if you grind your teeth.", art: "brush" },
    ],
    benefits: [
      "Relief from sharp pain with hot, cold or sweet foods",
      "Protects worn or exposed tooth surfaces",
      "Identifies hidden problems like cracks or decay early",
      "Lets you enjoy food and drink again",
      "Simple, comfortable treatment",
    ],
    suitableTitle: "Sensitivity or something more serious?",
    suitableFor:
      "Short, sharp pain that fades quickly is usually sensitivity. Pain that lingers, wakes you at night or comes with swelling can mean a deeper problem, such as an infected nerve, and needs prompt examination. We will tell you which applies to you.",
    aftercare: [
      "Use a toothpaste made for sensitive teeth and brush with a soft brush",
      "Brush gently without scrubbing across the gum line",
      "Limit fizzy, citrus and other acidic drinks",
      "Use a night guard if you grind your teeth",
      "Return if the sensitivity does not improve",
    ],
    localNote:
      "If you have been putting up with the problem for weeks, a short visit to find the cause is the first step towards relief. Our Tupe Patil Road clinic in Amanora Park Town is easy to reach from Hadapsar, Magarpatta City and Mundhwa, with evening appointments until 9 PM.",
    faqs: [
      { q: "What causes sensitive teeth?", a: "Common causes include worn enamel, receding gums, tooth decay, cracked teeth, aggressive brushing, grinding and acidic foods." },
      { q: "Will sensitive teeth go away?", a: "In many cases yes, with the right treatment and habits. Some people need ongoing care to keep it under control." },
      { q: "Does sensitive-teeth toothpaste work?", a: "For many people it helps, especially with daily use for a few weeks. If the problem persists, a dental treatment may be needed." },
      { q: "How much does sensitive teeth treatment cost in Pune?", a: "Simple desensitising treatments are inexpensive, while a filling or bonding costs more. We find the cause first, then explain the options and their prices before we start." },
      local(
        "Where can I get sensitive teeth treated near Hadapsar and Magarpatta?",
        "A short visit to find the cause is the first step towards relief, and we can usually tell you our findings the same day.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["tooth-fillings", "gum-treatment", "teeth-whitening"],
    keywords: ["tooth sensitivity treatment pune", "cold sensitivity teeth", "desensitising treatment", "hot and cold tooth pain hadapsar"],
  },
};
