const DATA = [
    {
        id: "organophosphates",
        name: "Organophosphates",
        type: "pesticide",
        category: "purple",
        aliases: ["OP", "Insecticide"],
        description: "Organophosphates are a class of insecticides that act on acetylcholinesterase.",
        effects: [
            "Disrupts thymus function",
            "Autoimmune disruption",
            "Disrupts autonomic nervous system",
            "Causes heart rate/rhythm issues (arrhythmias)",
            "Linked to atherosclerosis",
            "Increases lipid metabolism and fibrinogen (blood thickening)",
            "Promotes clot formation"
        ],
        diseases: ["Arrhythmia", "Atherosclerosis", "Myocardial Infarction"],
        citations: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4235219/"]
    },
    {
        id: "organochlorines",
        name: "Organochlorines",
        type: "pesticide",
        category: "purple",
        aliases: ["OC"],
        description: "Chlorinated organic compounds used historically as pesticides.",
        effects: [
            "Disrupts thymus function",
            "Autoimmune disruption",
            "Linked to atherosclerosis",
            "Myocardial infarction risk"
        ],
        diseases: ["Atherosclerosis", "Myocardial Infarction"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/11264628/"]
    },
    {
        id: "aflatoxins",
        name: "Aflatoxins",
        type: "poison",
        category: "purple",
        aliases: ["Mycotoxin"],
        description: "Poisonous carcinogens and mutagens that are produced by certain molds.",
        effects: [
            "Immune suppression",
            "Liver cancer",
            "Weakens vein and artery walls",
            "Causes internal hemorrhages",
            "Heart failure"
        ],
        diseases: ["Liver Cancer", "Heart Failure"],
        citations: ["https://books.google.com/books?id=8123023650"]
    },
    {
        id: "dioxins",
        name: "Dioxins",
        type: "poison",
        category: "purple",
        aliases: ["TCDD", "Environmental pollutant"],
        description: "Highly toxic environmental persistent organic pollutants.",
        effects: [
            "Skin lesions (chloracne)",
            "Patchy darkening of the skin",
            "Reproductive issues",
            "Hormone interference",
            "Immune system damage"
        ],
        citations: ["https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health"]
    },
    {
        id: "aminoglycosides",
        name: "Aminoglycosides",
        type: "residue",
        category: "brown",
        aliases: ["Antibiotics"],
        description: "A class of antibiotics used to treat severe infections, often found as residues in animal products.",
        effects: [
            "Hearing loss (ototoxicity)",
            "Gaze instability (oscillopsia)",
            "Balance impairments"
        ],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/24584483/"]
    },
    {
        id: "tetracyclines",
        name: "Tetracyclines",
        type: "residue",
        category: "brown",
        aliases: ["Antibiotic"],
        description: "Broad-spectrum antibiotics often found as residues in meat and dairy.",
        effects: [
            "Skin photosensitivity",
            "Fatty liver",
            "Tinnitus",
            "Abdominal pain",
            "Breathing issues",
            "Drug-induced lupus"
        ],
        diseases: ["Lupus"],
        citations: ["Clinical studies on tetracycline side effects"]
    },
    {
        id: "mercury",
        name: "Mercury",
        type: "heavy-metal",
        category: "dark-blue",
        aliases: ["Hg", "Quicksilver"],
        description: "A toxic heavy metal found in fish and industrial waste.",
        effects: [
            "Central nervous system (CNS) injury",
            "Renal dysfunction",
            "Gastrointestinal ulceration",
            "Promotes thrombosis",
            "Inactivates protective artery enzymes"
        ],
        citations: ["https://www.atsdr.cdc.gov/toxprofiles/tp46.pdf"]
    },
    {
        id: "lead",
        name: "Lead",
        type: "heavy-metal",
        category: "dark-blue",
        aliases: ["Pb"],
        description: "Toxic heavy metal sometimes present in rice and old pipes.",
        effects: [
            "CNS injury",
            "Lung dysfunction",
            "Anemia",
            "Liver damage",
            "Cardiovascular dysfunction",
            "Impairs nitric oxide production",
            "Makes plaques unstable/vulnerable"
        ],
        diseases: ["Anemia", "Cardiovascular dysfunction"],
        foundIn: ["Rice"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/22607155/"]
    },
    {
        id: "chromium",
        name: "Chromium",
        type: "heavy-metal",
        category: "dark-blue",
        aliases: ["Cr"],
        description: "Heavy metal, hexavalent chromium is particularly toxic.",
        effects: [
            "Kidney dysfunction",
            "Gastrointestinal disorders",
            "Skin diseases",
            "Increased cancer incidence"
        ],
        citations: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6963458/"]
    },
    {
        id: "cadmium",
        name: "Cadmium",
        type: "heavy-metal",
        category: "dark-blue",
        aliases: ["Cd"],
        description: "Heavy metal found in industrial fertilizers.",
        effects: [
            "Degenerative bone disease (Itai-itai)",
            "Kidney dysfunction",
            "Liver damage",
            "Accumulates in arterial walls",
            "Promotes atherosclerosis",
            "Lung injuries",
            "Impacts zinc/copper metabolism",
            "Cancer"
        ],
        diseases: ["Atherosclerosis", "Cancer"],
        citations: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5935397/"]
    },
    {
        id: "arsenic",
        name: "Arsenic",
        type: "heavy-metal",
        category: "dark-blue",
        aliases: ["As"],
        description: "Toxic metalloid often found in groundwater.",
        effects: [
            "Cardiovascular dysfunction",
            "Carotid artery thickening",
            "Peripheral vascular disease",
            "Skin and hair changes",
            "CNS injury",
            "GI discomfort",
            "Liver damage"
        ],
        detection: {
            lab: "ICP-MS (Inductively Coupled Plasma Mass Spectrometry)",
            home: "Marsh test (historical, requires caution) or field test kits for water."
        },
        citations: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4163567/"]
    },
    {
        id: "chlorpyriphos",
        name: "Chlorpyriphos",
        type: "pesticide",
        category: "purple",
        aliases: ["Chlorpyrifos"],
        description: "Organophosphate insecticide.",
        effects: ["Malignant brain tumors"],
        diseases: ["Glioblastoma multiforme", "Medulloblastomas", "Astrocytomas"],
        detection: {
            lab: "Gas chromatography with mass spectrometry (GC-MS)"
        },
        citations: ["Kashmir orchard farmers research papers"]
    },
    {
        id: "mancozeb",
        name: "Mancozeb",
        type: "fungicide",
        category: "purple",
        description: "Dithiocarbamate non-systemic fungicide.",
        effects: ["Malignant brain tumors"],
        diseases: ["Astrocytomas", "Anaplastic oligodendrogliomas"],
        citations: ["Kashmir orchard farmers research papers"]
    },
    {
        id: "methyl_bromide",
        name: "Methyl Bromide",
        type: "poison",
        category: "purple",
        aliases: ["Bromomethane"],
        description: "Fumigant used for stored grains.",
        effects: [
            "Unstable gait",
            "Vertigo",
            "Polyneuropathy",
            "Optic neuropathy",
            "Depletion of glutathione"
        ],
        foundIn: ["Stored grains"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/30245170/"]
    },
    {
        id: "argemone_oil",
        name: "Argemone Oil",
        type: "adulterant",
        category: "yellow",
        description: "Oil from prickly poppy seeds used to adulterate mustard oil.",
        effects: [
            "Edema and tenderness of abdomen",
            "Fluid retention (dropsy)",
            "Upper and lower limb edema"
        ],
        diseases: ["Epidemic Dropsy"],
        foundIn: ["Mustard oil"],
        citations: ["Jacob, 'Poisons in our food'"]
    },
    {
        id: "microplastics",
        name: "Microplastics",
        type: "poison",
        category: "purple",
        aliases: ["Polyacrylamide", "PVC", "Nylon"],
        description: "Small plastic particles found in the environment.",
        effects: [
            "Alteration in chromosomes",
            "Infertility",
            "Obesity",
            "Cancer"
        ],
        foundIn: ["Shellfish", "Fishes"],
        citations: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10344379/"]
    },
    {
        id: "trans_fats",
        name: "Trans Fats",
        type: "adulterant",
        category: "yellow",
        aliases: ["Hydrogenated oils"],
        description: "Unsaturated fats which are uncommon in nature but can be created artificially.",
        effects: [
            "Arterial clogging",
            "Raises bad cholesterol (LDL)",
            "Lowers good cholesterol (HDL)"
        ],
        diseases: ["Atherosclerosis"],
        foundIn: ["Frying oils", "Low-quality oils"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/16713385/"]
    },
    {
        id: "bpa",
        name: "Bisphenol A",
        type: "poison",
        category: "purple",
        aliases: ["BPA"],
        description: "Chemical used to make certain plastics and resins.",
        effects: [
            "Angina",
            "Accelerated atherosclerosis"
        ],
        foundIn: ["Metal food cans"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/17030592/"]
    },
    {
        id: "formalin",
        name: "Formalin",
        type: "adulterant",
        category: "yellow",
        aliases: ["Formaldehyde"],
        description: "Preservative used to extend shelf life of fish.",
        effects: [
            "Stomach cancer",
            "Lung cancer",
            "Nasopharyngeal cancer"
        ],
        diseases: ["Cancer"],
        foundIn: ["Fish"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/22759160/"]
    },
    {
        id: "sodium_benzoate",
        name: "Sodium Benzoate",
        type: "adulterant",
        category: "yellow",
        description: "Common food preservative.",
        effects: [
            "Allergies",
            "Oxidative stress",
            "Damage to immune system",
            "DNA damage",
            "Interferes with protein digestion",
            "Hyperactivity",
            "Anxiety",
            "Decreased memory"
        ],
        citations: ["Jacob, 'Poisons in our food'"]
    },
    {
        id: "soapstone",
        name: "Soapstone/Talc",
        type: "adulterant",
        category: "yellow",
        description: "Used for polishing dal.",
        effects: [
            "May contain asbestos (carcinogen)",
            "Impair functioning of GI system"
        ],
        foundIn: ["Dal"],
        citations: ["Jacob, 'Poisons in our food'"]
    },
    {
        id: "acrolien",
        name: "Acrolein",
        type: "poison",
        category: "purple",
        description: "Formed during high-heat frying of oils.",
        effects: [
            "Irritant to endothelium",
            "Trigger myocardial infarction"
        ],
        foundIn: ["High-heat fried oils"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/16362847/"]
    },
    {
        id: "acrylamide",
        name: "Acrylamide",
        type: "poison",
        category: "purple",
        description: "Produced in starchy foods during high-temperature cooking.",
        effects: [
            "Platelet activation",
            "Increased cardiovascular risk",
            "Cancer risk"
        ],
        foundIn: ["Potato chips", "Bread"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/15317730/"]
    },
    {
        id: "artificial_sweeteners",
        name: "Artificial Sweeteners",
        type: "adulterant",
        category: "yellow",
        aliases: ["Erythritol", "Aspartame", "Sucralose"],
        description: "Sugar substitutes used in various products.",
        effects: [
            "Stroke risk",
            "Heart attack risk",
            "Enhanced platelet responsiveness",
            "Clot formation"
        ],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/28163503/"]
    },
    {
        id: "selenium",
        name: "Selenium",
        type: "remedy",
        category: "green",
        description: "Natural antagonist to heavy metals.",
        effects: ["Helps process mercury and lead toxins"],
        foundIn: ["Organic seeds", "Nuts"]
    },
    {
        id: "zinc",
        name: "Zinc",
        type: "remedy",
        category: "green",
        description: "Natural antagonist to heavy metals.",
        effects: ["Helps process mercury and lead toxins"],
        foundIn: ["Organic seeds", "Nuts"]
    },
    {
        id: "atherosclerosis",
        name: "Atherosclerosis",
        type: "disease",
        category: "red",
        aliases: ["Artery wall thickening", "Plaque buildup"],
        description: "A disease of the arteries characterized by the deposition of plaques of fatty material on their inner walls.",
        effects: ["Blood thickening", "Clot formation"],
        symptoms: ["Chest pain", "Shortness of breath"]
    },
    {
        id: "kashmir",
        name: "Kashmir",
        type: "place",
        category: "light-grey",
        description: "Region where orchard farmers suffer from brain tumors due to fungicides.",
        connected_to: ["Chlorpyriphos", "Mancozeb", "Captan"]
    },
    {
        id: "pesticide_cocktail",
        name: "Pesticide Cocktail",
        type: "poison",
        category: "purple",
        description: "Mixtures of various pesticides that can have synergistic toxic effects.",
        effects: [
            "Linear positive association with 10-year risk of atherosclerotic cardiovascular disease",
            "Systemic inflammation"
        ],
        diseases: ["Atherosclerotic Cardiovascular Disease"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/28701387/"]
    },
    {
        id: "endotoxins",
        name: "Bacterial Endotoxins (LPS)",
        type: "poison",
        category: "purple",
        description: "Lipopolysaccharides found in the outer membrane of Gram-negative bacteria.",
        effects: [
            "Trigger systemic inflammation",
            "Depresses heart function",
            "Increases risk of heart failure"
        ],
        foundIn: ["Meat", "Dairy"],
        diseases: ["Heart Failure"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/30356064/"]
    },
    {
        id: "citreoviridin",
        name: "Citreoviridin",
        type: "poison",
        category: "purple",
        description: "Mycotoxin produced by Penicillium citreoviride.",
        effects: [
            "Historically linked to 'cardiac beriberi'",
            "Causes sudden cardiac arrest"
        ],
        foundIn: ["Mouldy rice"],
        diseases: ["Cardiac Beriberi", "Sudden Cardiac Arrest"],
        citations: ["https://pubmed.ncbi.nlm.nih.gov/2443046/"]
    },
    {
        id: "spinach",
        name: "Spinach",
        type: "food",
        category: "light-blue",
        description: "Leafy green vegetable, often contains pesticide residues.",
        connected_to: ["organophosphates", "cadmium"]
    },
    {
        id: "apple",
        name: "Apple",
        type: "food",
        category: "light-blue",
        description: "Common fruit, frequently found with pesticide residues (Dirty Dozen).",
        connected_to: ["organophosphates", "chlorpyriphos"]
    },
    {
        id: "red_lentils",
        name: "Red Lentils",
        type: "food",
        category: "light-blue",
        description: "Common pulse, may be polished with soapstone.",
        connected_to: ["soapstone"]
    },
    {
        id: "chickpeas",
        name: "Chickpeas",
        type: "food",
        category: "light-blue",
        description: "Popular legume, may contain lead or pesticide residues.",
        connected_to: ["lead"]
    },
    {
        id: "eggs",
        name: "Eggs",
        type: "food",
        category: "light-blue",
        description: "Animal product, may contain antibiotic residues or dioxins.",
        connected_to: ["dioxins", "tetracyclines"]
    },
    {
        id: "chicken",
        name: "Chicken",
        type: "food",
        category: "light-blue",
        description: "Common meat, may contain antibiotic residues and arsenic (arsenic-based drugs in feed).",
        connected_to: ["arsenic", "tetracyclines", "aminoglycosides", "endotoxins"]
    },
    {
        id: "milk",
        name: "Milk",
        type: "food",
        category: "light-blue",
        description: "Dairy product, may contain aflatoxins and antibiotic residues.",
        connected_to: ["aflatoxins", "tetracyclines", "endotoxins"]
    },
    {
        id: "cheese",
        name: "Cheese",
        type: "food",
        category: "light-blue",
        description: "Cultured dairy product, potential source of mycotoxins and residues.",
        connected_to: ["aflatoxins", "endotoxins"]
    },
    {
        id: "tuna",
        name: "Tuna",
        type: "food",
        category: "light-blue",
        description: "Large predatory fish, known for accumulating methylmercury.",
        connected_to: ["mercury", "microplastics"]
    },
    {
        id: "leukemia",
        name: "Leukemia",
        type: "disease",
        category: "red",
        description: "Cancer of the blood-forming tissues, linked to various environmental toxins.",
        connected_to: ["dioxins", "pesticide_cocktail"]
    },
    {
        id: "kidney_failure",
        name: "Kidney Failure",
        type: "disease",
        category: "red",
        description: "Loss of kidney function, often linked to heavy metal exposure.",
        connected_to: ["cadmium", "chromium", "mercury"]
    },
    {
        id: "neurological_disorder",
        name: "Neurological Disorder",
        type: "disease",
        category: "red",
        description: "Disorders of the nervous system.",
        connected_to: ["mercury", "lead", "arsenic", "chlorpyriphos"]
    },
    {
        id: "gi_disease",
        name: "Gastrointestinal Disease",
        type: "disease",
        category: "red",
        description: "Conditions involving the gastrointestinal tract.",
        connected_to: ["soapstone", "arsenic", "formalin"]
    },
    {
        id: "headache",
        name: "Headache",
        type: "symptom",
        category: "orange",
        description: "Pain in the head, common symptom for many toxicities.",
        connected_to: ["neurological_disorder"]
    },
    {
        id: "stomach_ache",
        name: "Stomach Ache",
        type: "symptom",
        category: "orange",
        description: "Abdominal pain, can be caused by adulterants or heavy metals.",
        connected_to: ["gi_disease"]
    },
    {
        id: "intestinal_pain",
        name: "Intestinal pain",
        type: "symptom",
        category: "orange",
        description: "Pain in the intestines.",
        connected_to: ["gi_disease"]
    },
    {
        id: "flat_feces",
        name: "Flat feces",
        type: "symptom",
        category: "orange",
        description: "Thin or ribbon-like stools, potentially indicative of GI issues.",
        connected_to: ["gi_disease"]
    },
    {
        id: "dark_feces",
        name: "Dark feces",
        type: "symptom",
        category: "orange",
        description: "Dark or black stools, can indicate internal bleeding.",
        connected_to: ["gi_disease"]
    },
    {
        id: "floating_feces",
        name: "Floating feces",
        type: "symptom",
        category: "orange",
        description: "Stools that float, often due to malabsorption or high fat content.",
        connected_to: ["gi_disease"]
    },
    {
        id: "sensitive_teeth",
        name: "Sensitive teeth",
        type: "symptom",
        category: "orange",
        description: "Pain or discomfort in teeth from stimuli like cold or heat.",
        connected_to: ["heavy_metal_toxicity"]
    },
    {
        id: "allergens",
        name: "Allergens",
        type: "allergen",
        category: "brown",
        description: "Substances that cause allergic reactions.",
        connected_to: ["sodium_benzoate"]
    }
];
