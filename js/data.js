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
        type: "medicine",
        category: "green",
        aliases: ["Antibiotics"],
        description: "A class of antibiotics used to treat severe infections.",
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
        type: "medicine",
        category: "green",
        aliases: ["Antibiotic"],
        description: "Broad-spectrum antibiotics.",
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
    }
];
