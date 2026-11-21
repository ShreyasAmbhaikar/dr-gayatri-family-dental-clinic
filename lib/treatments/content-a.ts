import type { TreatmentContent } from "./types";
import { local } from "./local";

/** Restorative and implant treatments. */
export const CONTENT_A: Record<string, TreatmentContent> = {
  "root-canal-treatment": {
    metaDescription:
      "Root canal treatment in Hadapsar, Pune: relieve tooth pain and save your natural tooth with gentle, modern care. See the steps and cost factors. Book today.",
    heroSub:
      "Root canal treatment in Hadapsar, Pune relieves tooth pain and saves your natural tooth. We clean out the infection under local anaesthesia, seal the tooth and restore it, often in a single sitting.",
    quickAnswer:
      "Root canal treatment (RCT) removes the infected or inflamed pulp from inside a tooth, cleans and disinfects the root canals, and seals them so the tooth can be kept instead of extracted. It is done under local anaesthesia and is usually followed by a filling or crown to protect the tooth.",
    overview:
      "Inside every tooth, beneath the enamel and dentine, is a soft core called the pulp, which holds the tooth's nerves and blood vessels. When deep decay, a crack or an injury lets bacteria reach it, the pulp becomes inflamed or infected. The result is the throbbing, lingering pain many people know, and sometimes swelling or an abscess at the root.",
    symptomsTitle: "When do you need a root canal?",
    symptoms: [
      "Persistent or throbbing toothache, especially when chewing or at night",
      "Sensitivity to hot or cold that lingers for 30 seconds or more after the food or drink is gone",
      "Swollen, tender gums or a small pimple-like bump (a fistula) near the tooth",
      "A tooth that has darkened after an injury or from deep decay",
      "A tooth that hurts to bite on, or feels slightly high or loose",
      "A deep cavity or cracked tooth that reaches the nerve",
    ],
    steps: [
      { title: "Diagnosis", text: "We examine the tooth, take a digital X-ray and test the nerve, so we can confirm a root canal is needed and plan the safest approach.", art: "xray", image: "/images/rct/step-1-diagnosis.png" },
      { title: "Cleaning", text: "Under local anaesthesia we make a small opening, remove the infected pulp, and clean and shape the root canals with fine instruments.", art: "decay", image: "/images/rct/step-2-cleaning.png" },
      { title: "Sealing", text: "The canals are disinfected and sealed with gutta-percha, a biocompatible filling material, so bacteria cannot return. A temporary filling protects the tooth.", art: "stabilise", image: "/images/rct/step-3-sealing.png" },
      { title: "Restoration", text: "The tooth is rebuilt with a filling or, for back teeth that take heavy chewing forces, a crown, restoring its strength, function and appearance.", art: "crown", image: "/images/rct/step-4-restoration.png" },
    ],
    benefits: [
      "Relieves the pain of an infected or inflamed tooth",
      "Stops infection spreading to the jawbone and neighbouring teeth",
      "Saves your natural tooth and the bone around its root",
      "Restores normal chewing and a natural appearance",
      "Often costs less than extracting and replacing the tooth",
    ],
    suitableTitle: "Root canal or extraction?",
    suitableFor:
      "A root canal is usually worth trying when enough healthy tooth remains to rebuild. If the tooth is cracked below the gum, has lost too much structure or the surrounding bone is badly damaged, extraction may be wiser. We examine the tooth, show you the X-ray and explain both routes, including how a missing tooth would later be replaced, so you can choose with confidence.",
    aftercare: [
      "Wait until the numbness has worn off before eating or drinking anything hot",
      "Avoid chewing on the treated tooth until the permanent filling or crown is in place",
      "Mild soreness for a few days is normal; take any prescribed medicine as advised",
      "Book the crown or final filling promptly, because a temporary filling is not meant to last",
      "Brush gently, floss daily and keep your six-monthly check-ups",
    ],
    localNote:
      "A tooth that throbs at night cannot wait for a convenient moment, so location matters. Our Tupe Patil Road clinic in Amanora Park Town, near Kotak Mahindra Bank, is a short drive from Magarpatta City, Mundhwa and Keshav Nagar, with evening hours until 9 PM and Sunday-morning appointments. Call first so we can advise you and fit you in as early as we can.",
    faqs: [
      { q: "Is a root canal treatment painful?", a: "The tooth is numbed with local anaesthesia, so root canal treatment should feel much like having a filling. The pain people associate with root canals comes from the infection before treatment, and treatment is what relieves it. Mild soreness for a few days afterwards is normal and is managed with medicines." },
      { q: "How long does a root canal take, and can it be done in one sitting?", a: "A straightforward tooth can often be treated in a single sitting of about 45 to 60 minutes. A tooth with a severe infection or complex, curved canals may need two visits, so the infection can settle between them. We tell you what to expect after the X-ray." },
      { q: "Will I need a crown after a root canal?", a: "Usually yes for back teeth (molars and premolars), because a tooth without its nerve is more brittle and has to withstand heavy chewing. A crown protects it from fracturing. Front teeth that are largely intact can sometimes be restored with a filling alone. We advise after examining the tooth." },
      { q: "How much does root canal treatment cost in Hadapsar, Pune?", a: "The price depends on which tooth is treated, how many canals it has, how severe the infection is and whether you need a crown afterwards, so it varies from tooth to tooth. After an examination and X-ray we give you a written estimate, and you can decide without any obligation." },
      { q: "Root canal or tooth extraction: which is better?", a: "Saving your own tooth is usually the better long-term option when enough healthy tooth remains. Extraction leaves a gap that is normally replaced with an implant, bridge or denture, which adds cost and time. If the tooth cannot be saved, we tell you honestly and discuss replacement." },
      local(
        "Where can I get a root canal near Magarpatta City or Amanora Park Town?",
        "Diagnosis, root canal treatment and the final crown or filling are all done at one clinic.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["crowns-bridges", "tooth-extraction", "emergency-dental-care"],
    keywords: ["root canal cost in pune", "rct in hadapsar", "single sitting rct pune", "root canal specialist amanora park town", "save natural tooth pune"],
  },

  "dental-implants": {
    metaDescription:
      "Dental implants in Hadapsar, Pune: replace missing teeth with natural-looking, long-lasting implants. Learn the steps, recovery and cost factors. Book today.",
    heroSub:
      "Dental implants in Hadapsar replace a missing tooth with a fixed, natural-looking tooth that looks, feels and works like your own, planned and placed at our clinic in Amanora Park Town.",
    quickAnswer:
      "A dental implant is a small titanium or zirconia post placed in the jawbone to replace a missing tooth root. Once it fuses with the bone, a custom crown is fixed on top. The result is a replacement tooth that stays firmly in place without relying on the neighbouring teeth for support.",
    overview:
      "Losing a tooth affects more than your smile. Chewing becomes harder, neighbouring teeth can drift into the gap, and the jawbone under the missing tooth slowly shrinks. A dental implant replaces the root as well as the visible tooth, which is why many patients choose it over a removable denture or a bridge.",
    symptomsTitle: "When are dental implants recommended?",
    symptoms: [
      "You have one or more missing teeth and want a fixed replacement",
      "A tooth is too damaged or infected to be saved and needs removal",
      "Loose dentures slip, click or make eating uncomfortable",
      "You would rather not grind down healthy neighbouring teeth for a bridge",
      "Gaps are changing the way you chew, speak or smile",
      "You want to help protect the jawbone in the area where a tooth was lost",
    ],
    steps: [
      { title: "Consultation and examination", text: "We review your medical and dental history, examine your teeth and gums, and discuss what you want from the treatment.", art: "exam" },
      { title: "X-rays and treatment plan", text: "Digital X-rays or a scan show the amount and quality of bone available. You receive a written plan with the number of implants, the timeline and the estimated cost.", art: "xray" },
      { title: "Implant placement", text: "Under local anaesthesia, the implant is placed in the jawbone. Most patients describe the experience as comfortable, with mild soreness afterwards.", art: "implant" },
      { title: "Healing", text: "Over the following months the implant fuses with the bone. A temporary solution can usually be arranged so you are not left with a visible gap.", art: "healing" },
      { title: "Crown placement", text: "Once healing is complete, a custom-made crown matched to your natural teeth is fixed to the implant, and we check your bite carefully.", art: "crown" },
    ],
    benefits: [
      "Looks and feels like a natural tooth",
      "Fixed in place, with no slipping like a loose denture",
      "Does not require shaving down healthy neighbouring teeth",
      "Helps you chew a wide range of foods with confidence",
      "Designed to last many years with good care",
      "Helps protect the jawbone around the missing tooth",
    ],
    suitableTitle: "Am I a candidate for an implant?",
    suitableFor:
      "Most healthy adults with enough jawbone and healthy gums can be considered. If bone is thin, a bone graft may be advised first. Smoking, uncontrolled diabetes and untreated gum disease can reduce the chance of success, so we address these before starting. If an implant is not suitable, we will explain alternatives such as a bridge or a partial denture.",
    aftercare: [
      "Keep to soft, cool foods for the first few days",
      "Take prescribed medicines exactly as advised",
      "Clean gently around the area and follow our brushing guidance",
      "Avoid smoking, which slows healing and raises the risk of failure",
      "Attend review visits and a professional clean every six months",
    ],
    localNote:
      "Implant care involves several short visits over a few months, so a clinic close to home helps. Our Tupe Patil Road clinic in Amanora Park Town is a short drive from Magarpatta City, Mundhwa and Keshav Nagar, with evening hours until 9 PM and Sunday-morning slots for consultations and review visits.",
    faqs: [
      { q: "Is getting a dental implant painful?", a: "The procedure is done under local anaesthesia, so you should not feel pain while it happens. Afterwards, mild soreness and swelling are common for a few days and usually settle with the medicines we prescribe." },
      { q: "How long do dental implants last?", a: "With good oral hygiene, regular check-ups and no smoking, implants are designed to last many years, often decades. The crown on top may need replacing sooner because of normal wear." },
      { q: "How long does the dental implant process take?", a: "It depends on the case. Many patients complete treatment in about three to six months, because the implant needs time to fuse with the bone before the final crown is fitted. Cases needing a bone graft can take longer." },
      { q: "Dental implant or bridge: which is better?", a: "A bridge uses the neighbouring teeth as anchors, so they must be shaved down. An implant stands on its own and replaces the root as well. We explain the pros and cons of each for your situation." },
      { q: "How much do dental implants cost in Hadapsar, Pune?", a: "The cost depends on how many implants you need, the type of crown and whether a bone graft or other preparation is required, so there is no single price. After an examination and X-rays we give you a written estimate with each part itemised, and you are under no obligation to go ahead." },
      local(
        "Where can I get dental implants near Magarpatta or Amanora Park Town?",
        "Implant planning, placement and the final crown are all done at one clinic, so you do not have to travel between practices.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["full-mouth-implants", "crowns-bridges", "dentures"],
    keywords: ["dental implant cost in pune", "tooth implant hadapsar", "titanium implants", "missing teeth replacement pune"],
  },

  "full-mouth-implants": {
    metaDescription:
      "Full mouth dental implants in Hadapsar, Pune: a fixed full-arch solution for missing or failing teeth. Understand the process, timeline and cost. Book now.",
    heroSub:
      "Full mouth dental implants in Hadapsar, Pune replace all or most of your teeth with a secure, fixed set supported by implants, so you can eat, speak and smile without removable dentures.",
    quickAnswer:
      "Full mouth dental implants replace an entire upper or lower arch, or both, using a small number of implants to support a fixed set of teeth. They suit people who have lost most of their teeth or whose remaining teeth cannot be saved, and who want a stable alternative to removable dentures.",
    overview:
      "Living with many missing teeth, or with dentures that never quite fit, affects nutrition, speech and confidence. Full mouth implant treatment, often called a full-arch or all-on-four style approach, uses carefully placed implants to anchor a fixed bridge of teeth.",
    symptomsTitle: "When should you consider full mouth implants?",
    symptoms: [
      "Most of your natural teeth are missing, loose or badly decayed",
      "You wear full dentures that move, rub or limit what you can eat",
      "Advanced gum disease has left your remaining teeth unsaveable",
      "You want a fixed solution rather than something you remove at night",
      "You have been told that several single implants would be too complex",
    ],
    steps: [
      { title: "Detailed assessment", text: "We examine your teeth, gums and bite, take X-rays and review your health history to decide whether a full-arch approach is suitable.", art: "exam" },
      { title: "Planning and estimate", text: "You receive a staged plan covering extractions, bone considerations, number of implants, timeline and total estimated cost.", art: "plan" },
      { title: "Preparing the mouth", text: "Teeth that cannot be saved are removed and any infection or gum disease is treated, so the implants heal in a healthy environment.", art: "stabilise" },
      { title: "Implant placement", text: "Implants are placed under local anaesthesia, and we talk through ways to keep anxious patients comfortable.", art: "implant" },
      { title: "Healing and temporary teeth", text: "A temporary arrangement is provided while the implants fuse with the bone, so you are not without teeth.", art: "healing" },
      { title: "Final teeth and bite check", text: "A custom-made fixed set of teeth is fitted and adjusted, and you receive clear cleaning instructions.", art: "bite" },
    ],
    benefits: [
      "A fixed set of teeth that does not slip or need an adhesive",
      "Improved chewing compared with loose dentures",
      "Clearer speech and a more natural smile",
      "Helps maintain facial support by preserving the jawbone",
      "One coordinated plan instead of many separate treatments",
    ],
    suitableTitle: "Is this treatment right for me?",
    suitableFor:
      "You need reasonable general health, healthy gums once infection is treated, and enough bone, or a plan to rebuild it. Smokers and people with uncontrolled diabetes face higher risks, so we advise on these first. If full mouth implants are not the right option, we will say so and discuss implant-retained dentures or conventional dentures.",
    aftercare: [
      "Follow the soft-food plan we give you for the first weeks",
      "Clean around the implants daily using the tools we show you",
      "Do not smoke while the implants are healing",
      "Attend every review so the bite and the implants can be checked",
      "Book professional cleaning at least every six months",
    ],
    localNote:
      "Full-arch care runs over several months with short visits for review and adjustment, so convenience matters. Our Tupe Patil Road clinic is easy to reach from Magarpatta City, Amanora Park Town and Mundhwa, with evening and Sunday-morning slots to help you keep to the plan.",
    faqs: [
      { q: "How many implants are needed for a full arch?", a: "It depends on your bone and bite. Many full-arch plans use four to six implants per arch, but we confirm the number only after examination and X-rays." },
      { q: "Can I get teeth on the same day?", a: "In some suitable cases a temporary fixed set can be fitted soon after implant placement. We will tell you honestly whether this is possible for you rather than promise it in advance." },
      { q: "Is full mouth implant treatment the same as All-on-4?", a: "All-on-4 is one popular design that uses four implants to support a fixed set of teeth on one arch. Some patients need five or six implants depending on their bone and bite, so we choose the design after your scans, not before." },
      { q: "How much do full mouth dental implants cost in Pune?", a: "Full-arch treatment is a significant investment, and prices across Pune vary widely with the number of implants, the materials and whether one or both arches are treated. After an examination and scans we give you a written, itemised estimate for each stage, so you can compare it fairly and plan ahead." },
      local(
        "Do you offer full mouth implants near Magarpatta City and Mundhwa?",
        "Yes. We plan the whole treatment, from extractions and implants to the final fixed teeth, at one clinic.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["dental-implants", "dentures", "full-mouth-rehabilitation"],
    keywords: ["all on 4 implants pune", "full arch implants hadapsar", "fixed teeth in pune", "implant supported teeth"],
  },

  "crowns-bridges": {
    metaDescription:
      "Dental crowns and bridges in Hadapsar, Pune: restore broken, decayed or missing teeth with strong, natural-looking ceramic work. See how it works and book.",
    heroSub:
      "A dental crown or bridge in Hadapsar protects a weakened tooth or closes a gap, custom-made to match the colour and shape of your own teeth.",
    quickAnswer:
      "A dental crown is a custom-made cap that covers a damaged tooth to restore its shape, strength and appearance. A dental bridge replaces one or more missing teeth by attaching an artificial tooth to crowns placed on the teeth on either side of the gap.",
    overview:
      "Teeth that are cracked, heavily filled or weakened after a root canal often need a crown to stop them breaking. A bridge is a fixed way of filling a gap, so you can chew properly and the neighbouring teeth do not tilt into the space.",
    symptomsTitle: "When do you need a crown or bridge?",
    symptoms: [
      "A tooth is cracked, worn down or too broken for a filling",
      "A large filling is failing or leaving too little tooth behind",
      "You have had a root canal and the tooth needs protection",
      "A tooth is badly discoloured or misshapen",
      "You are missing one or more teeth and want a fixed replacement",
      "You need to cover a dental implant with a tooth-shaped crown",
    ],
    steps: [
      { title: "Examination and planning", text: "We examine the tooth, take X-rays and agree the most suitable material and shade with you.", art: "exam" },
      { title: "Tooth preparation", text: "Under local anaesthesia the tooth is gently shaped to make room for the crown, and any decay is removed.", art: "prep" },
      { title: "Impression or scan", text: "An accurate impression records your tooth and bite so the lab can make a precise restoration.", art: "impression" },
      { title: "Temporary crown", text: "A temporary crown protects the tooth and keeps your smile looking normal while the final one is made.", art: "temp" },
      { title: "Fitting the final crown or bridge", text: "The permanent restoration is checked for fit, colour and bite, then fixed firmly in place.", art: "crown" },
    ],
    benefits: [
      "Restores strength to weak or broken teeth",
      "Natural-looking colour and shape",
      "Closes gaps without removable parts (bridge)",
      "Helps you chew comfortably again",
      "Often lasts ten years or more with good care",
    ],
    suitableTitle: "Crown, filling or implant: which is right?",
    suitableFor:
      "A filling is enough when enough healthy tooth remains. A crown is advised when it does not. If a tooth cannot be saved, we compare a bridge with an implant, looking at the neighbouring teeth, your gums and your budget, and we explain the trade-offs honestly.",
    aftercare: [
      "Avoid very hard or sticky foods on the new crown for the first day",
      "Brush twice daily and clean under a bridge with floss threaders or interdental brushes",
      "Do not use your teeth to open packets or bite hard objects",
      "Tell us if the bite feels high so we can adjust it",
      "Visit every six months for a check-up and cleaning",
    ],
    localNote:
      "Crowns usually take two visits, about a week or two apart. Our Tupe Patil Road clinic, close to Kotak Mahindra Bank, is a short trip from Amanora Park Town, Magarpatta City and Keshav Nagar, and the temporary crown keeps you comfortable until the final one is ready.",
    faqs: [
      { q: "How long does a dental crown last?", a: "Crowns commonly last ten years or more when you keep up good brushing, flossing and regular check-ups. Habits such as teeth grinding can shorten their life." },
      { q: "Is the crown procedure painful?", a: "The tooth is numbed with local anaesthesia, so you should feel pressure rather than pain during preparation. The tooth may feel sensitive for a few days afterwards." },
      { q: "Which crown material is right for me?", a: "There is no single answer. Zirconia is very strong, all-ceramic looks the most natural at the front, and metal-ceramic is a long-established option. We recommend what suits the tooth and your budget." },
      { q: "What is the difference between a dental crown and a bridge?", a: "A crown covers one tooth. A bridge is a set of connected crowns that also holds an artificial tooth, so it replaces a missing tooth." },
      { q: "How much do dental crowns and bridges cost in Pune?", a: "The main factors are the material (zirconia, all-ceramic or metal-ceramic), the number of crowns or units in a bridge, and whether a root canal or build-up is needed first. We quote after examining the tooth, so you know the full cost before we prepare it." },
      local(
        "Where can I get a dental crown near Amanora Park Town or Keshav Nagar?",
        "Both crown visits, preparation and fitting, take place at our clinic, and a temporary crown keeps you comfortable in between.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["dental-implants", "root-canal-treatment", "tooth-fillings"],
    keywords: ["tooth cap cost in pune", "zirconia crown hadapsar", "dental bridge pune", "ceramic crown amanora"],
  },

  dentures: {
    metaDescription:
      "Dentures in Hadapsar, Pune: comfortable, natural-looking complete and partial dentures made to fit well. See how fitting works and book a consultation.",
    heroSub:
      "Comfortable, well-fitting dentures in Hadapsar restore your chewing, your speech and your confidence, with careful adjustments until they feel right.",
    quickAnswer:
      "Dentures are removable replacement teeth made to fit your gums. Complete dentures replace all the teeth in an arch, while partial dentures fill gaps and clip onto remaining natural teeth. Well-made dentures restore chewing and speech and support the shape of your face.",
    overview:
      "Dentures remain a dependable and affordable way to replace missing teeth. A good result depends on accurate impressions, careful bite records and patient adjustments, not just on the materials used.",
    symptomsTitle: "When are dentures a good option?",
    symptoms: [
      "You have lost many or all of your teeth",
      "Remaining teeth are too weak or loose to be saved",
      "You need a budget-friendly replacement that can be made quickly",
      "Implants are not suitable for medical or bone reasons",
      "Your current denture is loose, cracked or uncomfortable",
    ],
    steps: [
      { title: "Consultation and planning", text: "We examine your mouth, discuss complete, partial or implant-retained options and explain the cost.", art: "consult" },
      { title: "Impressions", text: "Accurate impressions of your gums and remaining teeth are taken to guide the denture design.", art: "impression" },
      { title: "Bite records and tooth selection", text: "We record how your jaws meet and choose the size, shape and shade of the teeth with you.", art: "bite" },
      { title: "Try-in", text: "You try a wax model of the denture, so the fit and appearance can be adjusted before the final version is made.", art: "denture" },
      { title: "Fitting and adjustments", text: "The finished denture is fitted and fine-tuned. Follow-up visits remove any sore spots as you get used to it.", art: "smile" },
    ],
    benefits: [
      "Restores your ability to chew a wider range of foods",
      "Improves speech and facial support",
      "A non-surgical solution that suits many health conditions",
      "Can be completed in a relatively short time",
      "Adjustable and repairable if your mouth changes",
    ],
    suitableTitle: "Dentures or implants?",
    suitableFor:
      "Dentures are suitable for most people who want a non-surgical solution. Implants offer a fixed, more stable alternative if you have enough bone and are comfortable with a longer treatment and higher cost. We lay out both so you can choose with confidence, and an implant-supported denture is a middle option worth discussing.",
    aftercare: [
      "Expect a short adjustment period for speech and eating",
      "Remove and rinse the dentures after meals",
      "Clean them daily with a soft brush and denture cleaner, not toothpaste",
      "Keep them out at night in water or a denture solution",
      "Return for adjustments if any area feels sore",
    ],
    localNote:
      "Denture fittings need several visits over a few weeks, so a nearby clinic makes the process easier, especially for older patients. Our Tupe Patil Road clinic in Amanora Park Town is a short trip from Hadapsar, Mundhwa and Magarpatta City, and we allow unhurried time at each fitting.",
    faqs: [
      { q: "How long do dentures take to make?", a: "Most dentures take several visits over a few weeks, covering impressions, bite records, a try-in and the final fitting." },
      { q: "How long does it take to get used to dentures?", a: "Most people adapt within a few weeks. Speaking and eating can feel strange at first, and we adjust the fit as needed." },
      { q: "How long do dentures last?", a: "Dentures commonly last five to ten years, but gums change shape over time, so relining or replacement may be needed sooner." },
      { q: "How much do dentures cost in Pune?", a: "The price depends on whether the denture is complete or partial, the quality of the teeth and base, and whether extractions, relining or implant retention are involved. We give you a written estimate after your examination, including the adjustment visits." },
      local(
        "Where can I get dentures near Hadapsar and Mundhwa?",
        "Impressions, try-in and fitting are all carried out at our clinic, and we schedule the visits so you are not left without teeth for longer than necessary.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["dental-implants", "full-mouth-implants", "crowns-bridges"],
    keywords: ["complete denture cost in pune", "partial denture hadapsar", "false teeth pune", "denture relining"],
  },

  "tooth-fillings": {
    metaDescription:
      "Tooth-coloured fillings in Hadapsar, Pune: repair cavities and chips with natural-looking composite fillings, often in one visit. Book your appointment today.",
    heroSub:
      "Tooth-coloured fillings in Hadapsar repair cavities, chips and worn spots so they blend in with your smile, usually in a single visit.",
    quickAnswer:
      "A tooth-coloured filling repairs a tooth damaged by decay or a chip, using a composite resin that matches the natural shade of your teeth. The resin is bonded to the tooth and hardened with a light, so the repair is strong and almost invisible.",
    overview:
      "Small cavities are easy to treat, and the earlier they are found the simpler and cheaper the treatment. Composite fillings need less tooth removed than old-style silver fillings and can be shaped to match your bite.",
    symptomsTitle: "When do you need a filling?",
    symptoms: [
      "A visible dark spot or hole on a tooth",
      "Pain or sensitivity when eating something sweet, hot or cold",
      "Food repeatedly getting stuck between two teeth",
      "A chipped or broken edge on a tooth",
      "A rough spot you can feel with your tongue",
    ],
    steps: [
      { title: "Examination and X-ray", text: "We find the extent of the decay, often with a small X-ray, and choose the right treatment.", art: "xray" },
      { title: "Numbing the tooth", text: "Local anaesthesia makes the treatment comfortable.", art: "anaesthesia" },
      { title: "Removing the decay", text: "The decayed part is carefully cleaned away while keeping as much healthy tooth as possible.", art: "decay" },
      { title: "Placing the composite", text: "The resin is matched to your tooth shade, applied in layers and hardened with a curing light.", art: "composite" },
      { title: "Shaping and polishing", text: "We check your bite, trim the filling and polish it so it feels smooth.", art: "polish" },
    ],
    benefits: [
      "Blends in with your natural teeth",
      "Preserves more healthy tooth than older fillings",
      "Usually completed in one comfortable visit",
      "Bonds to the tooth, helping to strengthen it",
      "Stops decay from spreading and causing pain",
    ],
    suitableTitle: "When a filling is not enough",
    suitableFor:
      "If decay is very deep and has reached the nerve, a root canal may be needed. If a large part of the tooth is missing, a crown will protect it better than a filling. We tell you which suits the tooth after the examination.",
    aftercare: [
      "Wait until the numbness has worn off before eating",
      "Mild sensitivity for a few days is common",
      "Avoid very hard foods on the new filling for the first day",
      "Brush twice daily and floss to prevent new cavities",
      "Visit every six months so small problems are caught early",
    ],
    localNote:
      "Most fillings are finished in one visit, so they fit easily into a working day. Our Tupe Patil Road clinic in Amanora Park Town is a short drive from Magarpatta City, Mundhwa and Keshav Nagar, with evening appointments until 9 PM and a Sunday-morning slot.",
    faqs: [
      { q: "Is a tooth-coloured filling painful?", a: "The tooth is numbed first, so you should not feel pain during treatment. Some mild sensitivity afterwards is normal and settles quickly." },
      { q: "How long does a composite filling last?", a: "Often between five and ten years or more, depending on its size, your bite and how well you look after your teeth." },
      { q: "Are tooth-coloured fillings safe?", a: "Yes. Composite resin fillings are widely used worldwide and contain no mercury." },
      { q: "Can I eat after a filling?", a: "Wait until the numbness has worn off completely, then eat softer foods first so you do not bite your cheek or tongue." },
      { q: "How much does a tooth-coloured filling cost in Pune?", a: "It depends on the size and position of the cavity and how many surfaces are involved. Fillings are one of the more affordable treatments, and we confirm the cost of each tooth before we begin." },
      local(
        "Where can I get tooth-coloured fillings near Magarpatta City?",
        "Most fillings are completed in a single visit, so you can fit one around a working day.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["crowns-bridges", "root-canal-treatment", "dental-checkup"],
    keywords: ["composite filling cost pune", "cavity treatment hadapsar", "white fillings", "dental filling near amanora"],
  },

  "full-mouth-rehabilitation": {
    metaDescription:
      "Full mouth rehabilitation in Hadapsar, Pune: a phased plan to restore worn, damaged or missing teeth and a healthy bite. Understand the process and book.",
    heroSub:
      "Full mouth rehabilitation in Pune restores worn, damaged or missing teeth in one coordinated, phased plan, so your health, bite and smile are rebuilt together instead of through unconnected repairs.",
    quickAnswer:
      "Full mouth rehabilitation is a comprehensive treatment plan that restores most or all of the teeth in both jaws. It combines treatments such as gum care, fillings, root canals, crowns, implants and bite correction, planned together so the final result is healthy, comfortable and long-lasting.",
    overview:
      "Years of grinding, acid wear, untreated decay, gum disease or tooth loss can leave a mouth that needs many treatments. Treating each problem separately can be costly and may not fix the underlying bite problem.",
    symptomsTitle: "When is full mouth rehabilitation advised?",
    symptoms: [
      "Many teeth are worn down by grinding or acid",
      "You have several broken, decayed or heavily filled teeth",
      "You are missing multiple teeth and your bite has collapsed",
      "Chewing is painful or limited and your jaw feels tired",
      "Your teeth have changed shape and you want to restore your smile",
    ],
    steps: [
      { title: "Comprehensive examination", text: "We assess your teeth, gums, jaw joints and bite, and record your concerns and goals.", art: "exam" },
      { title: "Diagnosis and X-rays", text: "Full-mouth X-rays and photographs help us understand the underlying causes, not just the visible damage.", art: "xray" },
      { title: "Phased treatment plan", text: "You receive a clear, ordered plan with timelines and estimated costs for each phase.", art: "plan" },
      { title: "Stabilise health first", text: "We treat infection, gum disease and decay so the foundation is healthy before rebuilding.", art: "stabilise" },
      { title: "Rebuild function and appearance", text: "Crowns, fillings, implants, veneers or other restorations are completed in planned stages.", art: "crown" },
      { title: "Protect the result", text: "A night guard or retainer and regular reviews help protect the work you have invested in.", art: "nightguard" },
    ],
    benefits: [
      "One coordinated plan instead of many separate treatments",
      "A healthier, more comfortable bite",
      "Restored chewing and a more confident smile",
      "Staged care that spreads the cost and effort over time",
      "Addresses the cause of damage, not just the symptoms",
    ],
    suitableTitle: "Is full mouth rehabilitation right for me?",
    suitableFor:
      "It suits people with widespread damage, wear or missing teeth who want a lasting solution. It requires commitment to treatment visits and good home care. If your needs are limited to a few teeth, we will recommend simpler treatment instead.",
    aftercare: [
      "Wear the night guard we provide if you grind your teeth",
      "Brush twice daily and clean between teeth every day",
      "Keep six-monthly cleaning and review appointments",
      "Limit acidic drinks that can wear teeth down",
      "Contact us promptly if any restoration feels loose or uncomfortable",
    ],
    localNote:
      "Staged treatment works best when visits are convenient. Our Tupe Patil Road clinic is a short drive from Hadapsar, Magarpatta City and Amanora Park Town, with evening and Sunday-morning slots, and you receive the plan and each phase's estimate in writing.",
    faqs: [
      { q: "How long does full mouth rehabilitation take?", a: "It depends on the plan. Straightforward cases may take a few months, while complex cases with implants can take longer. We give you an estimated timeline after the examination." },
      { q: "Will it be painful?", a: "Treatments are performed with local anaesthesia, and we discuss comfort options with you. Mild soreness after some stages is normal." },
      { q: "What is the difference between full mouth rehabilitation and a smile makeover?", a: "A smile makeover mainly changes how your teeth look. Full mouth rehabilitation also treats function, such as worn teeth, a collapsed bite, missing teeth or jaw strain, so the work is planned as a whole. Some patients need both, and we explain which applies to you." },
      { q: "How much does full mouth rehabilitation cost in Pune?", a: "There is no standard price, because it depends on which teeth need which treatments, the materials chosen and the number of visits. After your examination you receive a phase-by-phase estimate, so you can see what each stage costs and decide the pace." },
      local(
        "Where can I get full mouth rehabilitation near Hadapsar and Magarpatta?",
        "The examination, planning and every phase of treatment are coordinated at one clinic, so your plan and your records stay in one place.",
        "Magarpatta City, Mundhwa and Keshav Nagar",
      ),
    ],
    related: ["dental-implants", "crowns-bridges", "smile-makeover"],
    keywords: ["full mouth restoration pune", "bite correction", "worn teeth treatment", "complete dental rehabilitation"],
  },
};
