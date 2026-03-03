const DATA_PART_1 = [
    {
        id: "organophosphate_pesticides",
        name: "Organophosphate Pesticides",
        type: "pesticide",
        aliases: ["OP pesticides"],
        description: "Broad insecticide class frequently reported in fruit and vegetable residue monitoring programs.",
        effects: [
            "Can disrupt thymus function and immune regulation",
            "Cholinesterase inhibition with autonomic nervous system effects",
            "Arrhythmia and sudden-cardiac-event risk in severe exposure",
            "Can alter lipid metabolism and raise fibrinogen",
            "Pro-thrombotic tendency and plaque instability",
            "Developmental neurotoxicity concern with chronic exposure"
        ],
        diseases: [
            "Neurological Disorders",
            "Autoimmune Disorders",
            "Arrhythmia",
            "Atherosclerosis",
            "Myocardial Infarction"
        ],
        foundIn: [
            "Apple",
            "Grape",
            "Tomato",
            "Cabbage",
            "Okra",
            "Green Chilli",
            "Spinach",
            "Cauliflower",
            "Potato",
            "Onion",
            "Brinjal",
            "Carrot"
        ],
        detectionLocations: [
            {
                place: "North-Western Himalayan region, India",
                sample: "Fresh vegetables",
                year: 2022,
                note: "Pesticides detected in 116/300 samples; 49 above EU limits."
            },
            {
                place: "Lucknow, Uttar Pradesh, India",
                sample: "Market vegetables",
                year: 2011,
                note: "20 vegetables screened for multi-class residues."
            },
            {
                place: "Multi-country meta-analysis",
                sample: "Fresh fruits and vegetables",
                year: 2023,
                note: "24 studies and 69,467 datapoints synthesized."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/38144849/",
            "https://pubmed.ncbi.nlm.nih.gov/35385990/",
            "https://pubmed.ncbi.nlm.nih.gov/20632088/",
            "https://pubmed.ncbi.nlm.nih.gov/32816635/",
            "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4235219/"
        ]
    },
    {
        id: "organochlorine_pesticides",
        name: "Organochlorine Pesticides",
        type: "pesticide",
        aliases: ["OCPs", "HCH", "DDT"],
        description: "Persistent pesticides (for example HCH and DDT) still found in legacy contamination monitoring.",
        effects: [
            "Bioaccumulation in fat-rich foods",
            "Endocrine disruption",
            "Immune dysregulation risk",
            "Association with atherosclerotic progression",
            "Association with non-fatal myocardial infarction",
            "Long-term cancer concern"
        ],
        diseases: [
            "Cancer",
            "Endocrine and Reproductive Effects",
            "Autoimmune Disorders",
            "Atherosclerosis",
            "Myocardial Infarction"
        ],
        foundIn: [
            "Rice",
            "Wheat Flour",
            "Chickpea",
            "Pigeon Pea (Toor Dal)",
            "Mung Bean (Moong Dal)",
            "Black Gram (Urad Dal)",
            "Red Lentil (Masoor Dal)",
            "Spinach",
            "Tomato",
            "Potato",
            "Onion",
            "Cabbage",
            "Brinjal",
            "Mango",
            "Guava",
            "Apple",
            "Grape",
            "Milk",
            "Butter",
            "Ghee",
            "Mustard Oil"
        ],
        detectionLocations: [
            {
                place: "Northern Uttar Pradesh, India",
                sample: "Cereals, pulses, vegetables, fruits, milk and oils",
                year: 1990,
                note: "Survey included arhar, moong, gram, lentil and black gram pulses."
            },
            {
                place: "Bangalore, Bhubaneswar, Guwahati, Ludhiana and Udaipur, India",
                sample: "Peri-urban bovine milk",
                year: 2020,
                note: "Detected HCH, DDT and other pesticides in milk samples."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/1698760/",
            "https://pubmed.ncbi.nlm.nih.gov/32415153/",
            "https://pubmed.ncbi.nlm.nih.gov/11264628/"
        ]
    },
    {
        id: "chlorpyrifos",
        name: "Chlorpyrifos",
        type: "pesticide",
        description: "Organophosphate insecticide frequently reported in produce and milk pesticide panels.",
        effects: [
            "Neurodevelopmental concern",
            "Acetylcholinesterase inhibition",
            "Association with malignant brain tumors in high-exposure agricultural cohorts"
        ],
        diseases: ["Neurological Disorders", "Brain Tumors", "Glioblastoma Multiforme", "Astrocytoma", "Medulloblastoma"],
        foundIn: [
            "Apple",
            "Milk",
            "Tomato",
            "Cabbage",
            "Okra",
            "Green Chilli"
        ],
        detectionLocations: [
            {
                place: "Solan, Himachal Pradesh, India",
                sample: "Apple fruits and orchard soil",
                year: 2023,
                note: "Field persistence and risk assessment study."
            },
            {
                place: "Bhubaneswar, Bangalore, Ludhiana, Udaipur and Guwahati, India",
                sample: "Peri-urban bovine milk",
                year: 2020,
                note: "Detected in multicenter milk surveillance."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/38110624/",
            "https://pubmed.ncbi.nlm.nih.gov/32415153/",
            "https://pubmed.ncbi.nlm.nih.gov/39292407/"
        ]
    },
    {
        id: "mancozeb",
        name: "Mancozeb",
        type: "fungicide",
        description: "Dithiocarbamate fungicide used in fruit and vegetable protection.",
        effects: [
            "Thyroid-related concern",
            "Potential endocrine effects",
            "Association with malignant brain tumor burden in high-exposure cohorts"
        ],
        diseases: ["Endocrine and Reproductive Effects", "Brain Tumors", "Astrocytoma", "Anaplastic Oligodendroglioma"],
        foundIn: ["Apple"],
        detectionLocations: [
            {
                place: "Solan, Himachal Pradesh, India",
                sample: "Apple fruits and soil",
                year: 2023,
                note: "Measured dissipation after field spray at multiple locations."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/38110624/",
            "https://pubmed.ncbi.nlm.nih.gov/39292407/"
        ]
    },
    {
        id: "lindane",
        name: "Lindane",
        type: "pesticide",
        description: "Legacy organochlorine pesticide reported in residue dissipation studies on pulses.",
        effects: [
            "Neurotoxicity",
            "Persistent organic pollutant burden"
        ],
        diseases: ["Neurological Disorders"],
        foundIn: ["Chickpea"],
        detectionLocations: [
            {
                place: "Hisar, Haryana, India",
                sample: "Chickpea grains under field conditions",
                year: 2000,
                note: "Residue dissipation study for lindane and fenvalerate."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/10831328/"
        ]
    },
    {
        id: "cypermethrin",
        name: "Cypermethrin",
        type: "pesticide",
        description: "Synthetic pyrethroid found in multi-residue surveys of milk and vegetables.",
        effects: [
            "Neurological irritation",
            "Potential endocrine effects"
        ],
        diseases: ["Neurological Disorders"],
        foundIn: ["Milk", "Tomato", "Cabbage", "Okra"],
        detectionLocations: [
            {
                place: "Bhubaneswar, Bangalore, Ludhiana, Udaipur and Guwahati, India",
                sample: "Peri-urban bovine milk",
                year: 2020,
                note: "Detected among multiple pesticides in milk."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/32415153/",
            "https://pubmed.ncbi.nlm.nih.gov/20632088/"
        ]
    },
    {
        id: "aflatoxin_m1",
        name: "Aflatoxin M1",
        type: "contaminant",
        aliases: ["AFM1"],
        description: "Milk-borne mycotoxin formed in lactating animals after feed contamination with aflatoxin B1.",
        effects: [
            "Immune suppression risk",
            "Hepatotoxicity",
            "Liver carcinogenic risk",
            "Vascular and cardiac toxicity has been reported in severe exposure literature"
        ],
        diseases: ["Liver Cancer", "Cancer", "Heart Failure"],
        foundIn: ["Milk", "Curd (Yogurt)", "Paneer", "Cheese"],
        detectionLocations: [
            {
                place: "Retail markets in Chhattisgarh, India",
                sample: "Milk and value-added dairy products",
                year: 2022,
                note: "52/146 samples positive; 35.6% positivity reported."
            },
            {
                place: "Hisar, Haryana, India",
                sample: "Raw and pasteurized milk",
                year: 2020,
                note: "31 samples exceeded FSSAI limit in one city survey."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/35602443/",
            "https://pubmed.ncbi.nlm.nih.gov/31766982/",
            "https://pubmed.ncbi.nlm.nih.gov/30846090/"
        ]
    },
    {
        id: "arsenic",
        name: "Arsenic",
        type: "heavy-metal",
        aliases: ["As"],
        description: "Toxic metalloid found in contaminated groundwater-food systems, especially rice chains.",
        effects: [
            "Carcinogenicity",
            "Cardiovascular toxicity",
            "Carotid thickening and peripheral vascular disease associations",
            "Neurological effects",
            "Skin and hair changes",
            "Gastrointestinal and liver toxicity"
        ],
        diseases: ["Cancer", "Cardiovascular Disease", "Neurological Disorders"],
        foundIn: ["Rice", "Wheat Flour", "Potato", "Spinach", "Papaya", "Milk", "Fish"],
        detection: {
            lab: "ICP-MS, ICP-OES, HPLC-ICP-MS",
            home: "Certified field kits are for screening only; lab confirmation is required."
        },
        detectionLocations: [
            {
                place: "Rural Bengal, West Bengal, India",
                sample: "Cooked rice and drinking water exposure",
                year: 2021,
                note: "Cooked rice was a major contributor to inorganic arsenic intake."
            },
            {
                place: "Jalangi and Domkal blocks, West Bengal, India",
                sample: "Food composites including rice, vegetables and spices",
                year: 2002,
                note: "Reported elevated arsenic in multiple food groups."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/34837872/",
            "https://pubmed.ncbi.nlm.nih.gov/12176088/"
        ]
    },
    {
        id: "lead",
        name: "Lead",
        type: "heavy-metal",
        aliases: ["Pb"],
        description: "Neurotoxic heavy metal detected in vegetables, dairy and some animal-source foods.",
        effects: [
            "Neurotoxicity",
            "Can impair nitric-oxide-mediated vascular relaxation",
            "Hematological toxicity",
            "Anemia and developmental toxicity",
            "Can destabilize atherosclerotic plaques"
        ],
        diseases: ["Neurological Disorders", "Kidney Disease", "Cardiovascular Disease"],
        foundIn: [
            "Spinach",
            "Potato",
            "Carrot",
            "Onion",
            "Milk",
            "Eggs",
            "Chicken Meat",
            "Fish"
        ],
        detectionLocations: [
            {
                place: "Solapur, Maharashtra, India",
                sample: "Fruits and vegetables",
                year: 2022,
                note: "Lead was the highest mean metal among Pb, Hg, Cd and As in this dataset."
            },
            {
                place: "Ludhiana and Bathinda, Punjab, India",
                sample: "Milk from urban and rural households",
                year: 2023,
                note: "Milk assessed for Pb, As, Cd and Hg by ICP-MS."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/36061256/",
            "https://pubmed.ncbi.nlm.nih.gov/37225915/"
        ]
    },
    {
        id: "cadmium",
        name: "Cadmium",
        type: "heavy-metal",
        aliases: ["Cd"],
        description: "Bioaccumulative heavy metal linked to renal and bone toxicity.",
        effects: [
            "Kidney injury",
            "Liver injury",
            "Bone demineralization",
            "Oxidative stress",
            "Atherosclerotic plaque instability"
        ],
        diseases: ["Kidney Disease", "Cancer"],
        foundIn: ["Spinach", "Potato", "Cabbage", "Milk", "Fish", "Shrimp"],
        detectionLocations: [
            {
                place: "Thoothukudi, Tamil Nadu, India",
                sample: "Commercial fish and shellfish",
                year: 2021,
                note: "Cadmium intake in multiple species exceeded PTWI in risk assessment."
            },
            {
                place: "Ludhiana and Bathinda, Punjab, India",
                sample: "Milk",
                year: 2023,
                note: "Included cadmium in household milk risk assessment."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/34649206/",
            "https://pubmed.ncbi.nlm.nih.gov/37225915/"
        ]
    },
    {
        id: "mercury",
        name: "Mercury",
        type: "heavy-metal",
        aliases: ["Hg"],
        description: "Heavy metal that biomagnifies in aquatic food chains, especially predatory fish.",
        effects: [
            "Neurotoxicity",
            "Renal toxicity",
            "Gastrointestinal injury risk",
            "Pro-thrombotic effects",
            "Can disrupt vascular protective enzyme systems",
            "Fetal developmental risk"
        ],
        diseases: ["Neurological Disorders", "Kidney Disease"],
        foundIn: ["Fish", "Shrimp"],
        detectionLocations: [
            {
                place: "Vembanad Lake, Kerala, India",
                sample: "Edible fish tissues",
                year: 2017,
                note: "THg limit exceeded in most sampled species."
            },
            {
                place: "Thane creek and Ulhas estuary, Maharashtra, India",
                sample: "Commonly consumed fish",
                year: 2013,
                note: "Site-wise accumulation linked to pollution gradients."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/28243932/",
            "https://pubmed.ncbi.nlm.nih.gov/25464706/"
        ]
    },
    {
        id: "chromium",
        name: "Chromium",
        type: "heavy-metal",
        aliases: ["Cr"],
        description: "Trace metal; hexavalent forms are highly toxic and monitored in fish and produce risk studies.",
        effects: [
            "Kidney dysfunction",
            "Gastrointestinal disorders",
            "Skin disease risk",
            "Carcinogenic concern for Cr(VI)"
        ],
        diseases: ["Kidney Disease", "Cancer"],
        foundIn: ["Fish", "Shrimp", "Spinach"],
        detectionLocations: [
            {
                place: "Thoothukudi, Tamil Nadu, India",
                sample: "Fish and shellfish",
                year: 2021,
                note: "Part of multi-element seafood health risk analysis."
            },
            {
                place: "Solapur, Maharashtra, India",
                sample: "Fruits and vegetables",
                year: 2022,
                note: "Heavy metal panel included chromium-related risk interpretation in follow-up analyses."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/34649206/",
            "https://pubmed.ncbi.nlm.nih.gov/36061256/"
        ]
    },
    {
        id: "tetracyclines",
        name: "Tetracycline Residues",
        type: "residue",
        aliases: ["Oxytetracycline", "Chlortetracycline"],
        description: "Veterinary antibiotic residues detected in eggs and milk when withdrawal periods are not respected.",
        effects: [
            "Skin photosensitivity",
            "Fatty liver injury risk with prolonged exposure",
            "Tinnitus and vestibular adverse effects",
            "Abdominal pain and breathing-related adverse reactions",
            "Drug-induced lupus has been reported with some tetracycline-class drugs",
            "Antimicrobial resistance pressure"
        ],
        diseases: ["Antimicrobial Resistance", "Drug-Induced Lupus"],
        foundIn: ["Eggs", "Milk", "Chicken Meat"],
        detectionLocations: [
            {
                place: "Hisar, Haryana, India",
                sample: "Layer eggs",
                year: 2025,
                note: "13% samples positive; 38.5% of positives exceeded MRL."
            },
            {
                place: "Palakkad district, Kerala, India",
                sample: "Raw pooled milk",
                year: 2020,
                note: "Oxytetracycline detected; several samples exceeded MRL."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/39778680/",
            "https://pubmed.ncbi.nlm.nih.gov/32801555/",
            "https://www.ncbi.nlm.nih.gov/books/NBK549905/",
            "https://www.ncbi.nlm.nih.gov/books/NBK547733/"
        ]
    },
    {
        id: "fluoroquinolones",
        name: "Fluoroquinolone Residues",
        type: "residue",
        aliases: ["Enrofloxacin", "Ciprofloxacin"],
        description: "Veterinary antibiotic class reported in poultry and meat residue investigations.",
        effects: [
            "Selection pressure for resistant bacteria",
            "Potential tendon and microbiome adverse effects"
        ],
        diseases: ["Antimicrobial Resistance"],
        foundIn: ["Chicken Meat", "Eggs"],
        detectionLocations: [
            {
                place: "Delhi-NCR, India",
                sample: "Retail chicken tissues",
                year: 2014,
                note: "Civil-society laboratory report detected multiple antibiotic residues."
            },
            {
                place: "Bangladesh (national dataset in review)",
                sample: "Poultry meat tissues",
                year: 2021,
                note: "Peer-reviewed review reports enrofloxacin prevalence in poultry tissues."
            }
        ],
        citations: [
            "https://www.cseindia.org/the-environment-health-bulletin-sept-2014-5526",
            "https://pubmed.ncbi.nlm.nih.gov/33746363/"
        ]
    },
    {
        id: "dioxins_furans",
        name: "Dioxins and Furans",
        type: "contaminant",
        aliases: ["PCDD/Fs"],
        description: "Persistent organic pollutants that bioaccumulate in fat-rich animal foods.",
        effects: [
            "Immune dysfunction",
            "Endocrine disruption",
            "Skin lesions (chloracne)",
            "Patchy skin darkening",
            "Reproductive issues",
            "Carcinogenicity"
        ],
        diseases: ["Cancer", "Immune Dysfunction", "Endocrine and Reproductive Effects"],
        foundIn: ["Eggs", "Milk", "Butter", "Ghee", "Fish", "Chicken Meat"],
        detectionLocations: [
            {
                place: "Western zone, India",
                sample: "Eggs from birds near municipal/hazardous waste incineration sites",
                year: 2008,
                note: "All samples showed PCDD/F residues in the study."
            },
            {
                place: "Global food-chain exposure pattern (WHO)",
                sample: "Animal fat-rich foods",
                year: 2023,
                note: "WHO notes >90% human exposure via food, mainly meat, dairy, fish and shellfish."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/18478170/",
            "https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health"
        ]
    },
    {
        id: "microplastics",
        name: "Microplastics",
        type: "contaminant",
        description: "Small plastic particles detected in edible tissues of marine fish in multiple Indian coastal studies.",
        effects: [
            "Potential gut inflammation",
            "Carrier for co-contaminants",
            "Uncertain chronic toxicology requiring surveillance"
        ],
        diseases: ["Gastrointestinal Disease"],
        foundIn: ["Fish", "Shrimp"],
        detectionLocations: [
            {
                place: "Kerala coast, India",
                sample: "Pelagic fishes (edible and inedible tissues)",
                year: 2020,
                note: "7% fish had MPs in edible tissue in this dataset."
            },
            {
                place: "Veraval/Sikka, Gujarat coast, India",
                sample: "Pelagic and demersal fishes",
                year: 2024,
                note: "68% analyzed fish had MPs in edible tissues."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/32814179/",
            "https://pubmed.ncbi.nlm.nih.gov/38334930/"
        ]
    },
    {
        id: "formaldehyde",
        name: "Formaldehyde (Formalin Use)",
        type: "adulterant",
        aliases: ["Formalin"],
        description: "Illegal preservative use in fish retail chains to delay spoilage.",
        effects: [
            "Mucosal irritation",
            "Respiratory irritation",
            "Carcinogenic concern with chronic exposure"
        ],
        diseases: ["Cancer", "Gastrointestinal Disease"],
        foundIn: ["Fish", "Shrimp"],
        detectionLocations: [
            {
                place: "Chennai, Tamil Nadu, India",
                sample: "Retail fish markets (N4 Beach, Chintadripet, Vanagaram, Pattinapakkam, Kasimedu)",
                year: 2021,
                note: "High market-wise formaldehyde detection rates reported."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/33474598/"
        ]
    },
    {
        id: "trans_fats",
        name: "Industrial Trans Fats",
        type: "adulterant",
        aliases: ["TFA", "Hydrogenated Vegetable Oil"],
        description: "Partially hydrogenated oils and high-trans fats linked with cardiometabolic risk.",
        effects: [
            "Raises LDL cholesterol",
            "Cardiovascular risk"
        ],
        diseases: ["Cardiovascular Disease"],
        foundIn: ["Butter", "Ghee", "Mustard Oil"],
        detectionLocations: [
            {
                place: "Multi-state India dietary assessment",
                sample: "Edible oils and fats",
                year: 2012,
                note: "Punjab HVO intake estimate exceeded WHO-referenced intake in the paper."
            },
            {
                place: "Pan-India surveillance framework (FSSAI)",
                sample: "Food survey including trans-fat and acrylamide",
                year: 2021,
                note: "FSSAI lists national survey reports for this category."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/22950538/",
            "https://www.fssai.gov.in/cms/national-surveys.php"
        ]
    },
    {
        id: "acrylamide",
        name: "Acrylamide",
        type: "contaminant",
        description: "Process contaminant formed in high-temperature cooking of carbohydrate-rich foods.",
        effects: [
            "Probable carcinogenic concern",
            "Neurotoxicity concern"
        ],
        diseases: ["Cancer", "Neurological Disorders"],
        foundIn: ["Potato", "Wheat Flour"],
        detectionLocations: [
            {
                place: "Vending food surveillance dataset (Europe)",
                sample: "Potato chips and bakery products",
                year: 2017,
                note: "Potato chips showed highest acrylamide levels in this study."
            },
            {
                place: "Pan-India survey listing (FSSAI)",
                sample: "Foods assessed for trans-fat and acrylamide",
                year: 2021,
                note: "National survey listing published by regulator."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/28058246/",
            "https://www.fssai.gov.in/cms/national-surveys.php"
        ]
    },
    {
        id: "argemone_oil",
        name: "Argemone Oil Adulteration",
        type: "adulterant",
        description: "Toxic adulteration of edible oils (especially mustard oil) linked to epidemic dropsy outbreaks.",
        effects: [
            "Capillary leak and edema",
            "Cardiorespiratory complications"
        ],
        diseases: ["Epidemic Dropsy", "Cardiovascular Disease"],
        foundIn: ["Mustard Oil"],
        detectionLocations: [
            {
                place: "Delhi and Uttar Pradesh (Trans-Yamuna areas), India",
                sample: "Household cooking mustard oil during outbreak",
                year: 1994,
                note: "Sanguinarine detected in suspected oils in outbreak investigation."
            },
            {
                place: "Multiple outbreaks reported in India",
                sample: "Adulterated edible oils",
                year: 1999,
                note: "Clinical review summarizes epidemic dropsy causation and toxicology."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/7896391/",
            "https://pubmed.ncbi.nlm.nih.gov/10621875/"
        ]
    },
    {
        id: "salmonella",
        name: "Salmonella Contamination",
        type: "contaminant",
        description: "Foodborne bacterial contamination in eggs and poultry chains.",
        effects: [
            "Fever",
            "Diarrhea",
            "Abdominal cramps"
        ],
        diseases: ["Foodborne Infection", "Gastrointestinal Disease"],
        foundIn: ["Eggs", "Chicken Meat"],
        detectionLocations: [
            {
                place: "Coimbatore, Tamil Nadu, India",
                sample: "Retail eggs and egg trays",
                year: 2006,
                note: "Salmonella detected in shell and contents; resistant strains reported."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/16943017/"
        ]
    },
    {
        id: "campylobacter",
        name: "Campylobacter Contamination",
        type: "contaminant",
        description: "Poultry-associated pathogen with documented drug resistance in retail chains.",
        effects: [
            "Gastroenteritis",
            "Fever",
            "Diarrhea"
        ],
        diseases: ["Foodborne Infection", "Antimicrobial Resistance"],
        foundIn: ["Chicken Meat"],
        detectionLocations: [
            {
                place: "Northern India",
                sample: "Retail poultry meat and related samples",
                year: 2018,
                note: "High prevalence with multidrug resistance reported."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/29377719/"
        ]
    },

    {
        id: "rice",
        name: "Rice",
        type: "food",
        description: "Staple grain; key exposure pathway for arsenic in several South Asian settings.",
        connected_to: ["arsenic", "organochlorine_pesticides"]
    },
    {
        id: "wheat_flour",
        name: "Wheat Flour",
        type: "food",
        description: "Widely consumed cereal; monitored for pesticide residues and process contaminants.",
        connected_to: ["organochlorine_pesticides", "acrylamide", "arsenic"]
    },
    {
        id: "apple",
        name: "Apple",
        type: "food",
        description: "Fruit with pesticide residue surveillance in orchard and market studies.",
        connected_to: ["organophosphate_pesticides", "chlorpyrifos", "mancozeb", "organochlorine_pesticides"]
    },
    {
        id: "grape",
        name: "Grape",
        type: "food",
        description: "Fruit included in multi-residue produce surveillance datasets.",
        connected_to: ["organophosphate_pesticides", "organochlorine_pesticides"]
    },
    {
        id: "mango",
        name: "Mango",
        type: "food",
        description: "Common fruit in Indian residue monitoring programs.",
        connected_to: ["organochlorine_pesticides"]
    },
    {
        id: "guava",
        name: "Guava",
        type: "food",
        description: "Fruit represented in legacy pesticide surveillance datasets.",
        connected_to: ["organochlorine_pesticides"]
    },
    {
        id: "papaya",
        name: "Papaya",
        type: "food",
        description: "Fruit included in arsenic food composite studies in affected regions.",
        connected_to: ["arsenic"]
    },
    {
        id: "banana",
        name: "Banana",
        type: "food",
        description: "Common fruit; contamination profile varies by source and post-harvest handling.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "pomegranate",
        name: "Pomegranate",
        type: "food",
        description: "Fruit crop subject to pesticide application management.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "spinach",
        name: "Spinach",
        type: "food",
        description: "Leafy vegetable repeatedly represented in pesticide and heavy metal studies.",
        connected_to: ["organophosphate_pesticides", "organochlorine_pesticides", "lead", "cadmium", "arsenic", "chromium"]
    },
    {
        id: "tomato",
        name: "Tomato",
        type: "food",
        description: "High-volume vegetable included in multi-class pesticide monitoring.",
        connected_to: ["organophosphate_pesticides", "chlorpyrifos", "cypermethrin", "organochlorine_pesticides"]
    },
    {
        id: "potato",
        name: "Potato",
        type: "food",
        description: "Starchy staple that can accumulate metals and form acrylamide when fried.",
        connected_to: ["lead", "cadmium", "arsenic", "organophosphate_pesticides", "organochlorine_pesticides", "acrylamide"]
    },
    {
        id: "onion",
        name: "Onion",
        type: "food",
        description: "Vegetable represented in market basket pesticide studies.",
        connected_to: ["organophosphate_pesticides", "organochlorine_pesticides", "lead"]
    },
    {
        id: "cabbage",
        name: "Cabbage",
        type: "food",
        description: "Vegetable with long-term multi-residue surveillance data in India.",
        connected_to: ["organophosphate_pesticides", "chlorpyrifos", "cypermethrin", "cadmium", "organochlorine_pesticides"]
    },
    {
        id: "cauliflower",
        name: "Cauliflower",
        type: "food",
        description: "Common cruciferous vegetable monitored in residue surveys.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "okra",
        name: "Okra",
        type: "food",
        description: "Vegetable included in long-term pesticide residue monitoring in India.",
        connected_to: ["organophosphate_pesticides", "chlorpyrifos", "cypermethrin"]
    },
    {
        id: "brinjal",
        name: "Brinjal",
        type: "food",
        description: "Eggplant represented in Indian vegetable pesticide datasets.",
        connected_to: ["organophosphate_pesticides", "organochlorine_pesticides"]
    },
    {
        id: "green_chilli",
        name: "Green Chilli",
        type: "food",
        description: "Frequently tested vegetable commodity in pesticide panels.",
        connected_to: ["organophosphate_pesticides", "chlorpyrifos"]
    },
    {
        id: "carrot",
        name: "Carrot",
        type: "food",
        description: "Root vegetable in market basket and heavy metal exposure studies.",
        connected_to: ["organophosphate_pesticides", "lead"]
    },
    {
        id: "mustard_oil",
        name: "Mustard Oil",
        type: "food",
        description: "Widely consumed edible oil; historical risk of argemone adulteration.",
        connected_to: ["argemone_oil", "trans_fats", "organochlorine_pesticides"]
    },
    {
        id: "milk",
        name: "Milk",
        type: "food",
        description: "Dairy staple monitored for aflatoxin, pesticide, antibiotic and heavy metal residues.",
        connected_to: [
            "aflatoxin_m1",
            "organochlorine_pesticides",
            "chlorpyrifos",
            "cypermethrin",
            "arsenic",
            "lead",
            "cadmium",
            "tetracyclines",
            "dioxins_furans"
        ]
    },
    {
        id: "curd",
        name: "Curd (Yogurt)",
        type: "food",
        description: "Fermented milk product; can carry upstream milk contaminants.",
        connected_to: ["aflatoxin_m1"]
    },
    {
        id: "paneer",
        name: "Paneer",
        type: "food",
        description: "Fresh cheese product; contamination profile tracks milk quality and adulteration control.",
        connected_to: ["aflatoxin_m1"]
    },
    {
        id: "butter",
        name: "Butter",
        type: "food",
        description: "Fat-rich dairy matrix that can concentrate fat-soluble contaminants.",
        connected_to: ["organochlorine_pesticides", "dioxins_furans", "trans_fats"]
    },
    {
        id: "ghee",
        name: "Ghee",
        type: "food",
        description: "Clarified milk fat; monitored for persistent pesticide and dioxin burdens.",
        connected_to: ["organochlorine_pesticides", "dioxins_furans", "trans_fats"]
    },
    {
        id: "cheese",
        name: "Cheese",
        type: "food",
        description: "Dairy product potentially concentrating residues from source milk.",
        connected_to: ["aflatoxin_m1", "dioxins_furans"]
    },
    {
        id: "chicken_meat",
        name: "Chicken Meat",
        type: "food",
        description: "Major animal protein source; monitored for antibiotic residues and bacterial contamination.",
        connected_to: ["tetracyclines", "fluoroquinolones", "lead", "salmonella", "campylobacter", "dioxins_furans"]
    },
    {
        id: "mutton",
        name: "Mutton",
        type: "food",
        description: "Ruminant meat; contaminant risk depends on feed, water and environment.",
        connected_to: ["dioxins_furans"]
    },
    {
        id: "buffalo",
        name: "Buffalo",
        type: "food",
        description: "Ruminant meat in contaminant surveillance datasets outside India and in mixed studies.",
        connected_to: ["dioxins_furans", "fluoroquinolones"]
    },
    {
        id: "pork",
        name: "Pork",
        type: "food",
        description: "Animal-source food with potential veterinary drug and POP exposure pathways.",
        connected_to: ["dioxins_furans"]
    },
    {
        id: "eggs",
        name: "Eggs",
        type: "food",
        description: "Nutrient-dense food monitored for antibiotic residues, dioxins and microbial contamination.",
        connected_to: ["tetracyclines", "fluoroquinolones", "dioxins_furans", "lead", "salmonella"]
    },
    {
        id: "fish",
        name: "Fish",
        type: "food",
        description: "Important protein source with known exposure routes for mercury, microplastics and formaldehyde adulteration.",
        connected_to: ["mercury", "microplastics", "formaldehyde", "arsenic", "cadmium", "chromium", "dioxins_furans"]
    },
    {
        id: "shrimp",
        name: "Shrimp",
        type: "food",
        description: "Seafood commodity monitored for microplastics, heavy metals and preservative misuse.",
        connected_to: ["microplastics", "formaldehyde", "mercury", "cadmium", "chromium"]
    },
    {
        id: "chickpea",
        name: "Chickpea",
        type: "food",
        description: "Major pulse in India; included in pesticide residue work and legacy OCP surveillance.",
        connected_to: ["lindane", "organochlorine_pesticides", "arsenic"]
    },
    {
        id: "pigeon_pea",
        name: "Pigeon Pea (Toor Dal)",
        type: "food",
        description: "Common Indian pulse; monitored in broad residue datasets.",
        connected_to: ["organochlorine_pesticides"]
    },
    {
        id: "mung_bean",
        name: "Mung Bean (Moong Dal)",
        type: "food",
        description: "Widely consumed pulse represented in Indian legacy pesticide surveys.",
        connected_to: ["organochlorine_pesticides"]
    },
    {
        id: "black_gram",
        name: "Black Gram (Urad Dal)",
        type: "food",
        description: "Pulse category item in food contaminant surveillance datasets.",
        connected_to: ["organochlorine_pesticides"]
    },
    {
        id: "red_lentil",
        name: "Red Lentil (Masoor Dal)",
        type: "food",
        description: "Pulse consumed across India; contamination risk tied to cultivation and storage practices.",
        connected_to: ["organochlorine_pesticides"]
    },
    {
        id: "kidney_bean",
        name: "Kidney Bean (Rajma)",
        type: "food",
        description: "Legume where storage/mycotoxin and residue control are relevant food safety concerns.",
        connected_to: ["organochlorine_pesticides"]
    },
    {
        id: "soybean",
        name: "Soybean",
        type: "food",
        description: "Legume crop with pesticide-management and residue implications.",
        connected_to: ["organophosphate_pesticides", "aflatoxin_m1"]
    },
    {
        id: "green_peas",
        name: "Green Peas",
        type: "food",
        description: "Legume vegetable with contamination profile dependent on agricultural inputs.",
        connected_to: ["organophosphate_pesticides", "aflatoxin_m1"]
    },

    {
        id: "cancer",
        name: "Cancer",
        type: "disease",
        description: "Group of diseases associated with multiple food-borne chemical exposures.",
        connected_to: ["liver_cancer"]
    },
    {
        id: "liver_cancer",
        name: "Liver Cancer",
        type: "disease",
        description: "Strongly associated with chronic aflatoxin exposure and other hepatotoxic contaminants.",
        connected_to: ["cancer"]
    },
    {
        id: "kidney_disease",
        name: "Kidney Disease",
        type: "disease",
        description: "Renal injury risk increases with chronic heavy metal exposure.",
        connected_to: ["abdominal_pain"]
    },
    {
        id: "neurological_disorders",
        name: "Neurological Disorders",
        type: "disease",
        description: "Neurologic effects linked to pesticide and heavy metal exposure profiles.",
        connected_to: ["headache"]
    },
    {
        id: "cardiovascular_disease",
        name: "Cardiovascular Disease",
        type: "disease",
        description: "Cardiometabolic risk influenced by trans fats and some toxic exposures.",
        connected_to: ["breathlessness"]
    },
    {
        id: "endocrine_reproductive_effects",
        name: "Endocrine and Reproductive Effects",
        type: "disease",
        description: "Hormonal and reproductive disruption associated with select persistent pollutants.",
        connected_to: ["immune_dysfunction"]
    },
    {
        id: "antimicrobial_resistance",
        name: "Antimicrobial Resistance",
        type: "disease",
        description: "Population-level risk amplified by misuse of veterinary antibiotics in food-animal systems.",
        connected_to: ["foodborne_infection"]
    },
    {
        id: "gastrointestinal_disease",
        name: "Gastrointestinal Disease",
        type: "disease",
        description: "GI effects can arise from microbial contamination and chemical adulteration.",
        connected_to: ["diarrhea", "vomiting", "abdominal_pain", "nausea"]
    },
    {
        id: "foodborne_infection",
        name: "Foodborne Infection",
        type: "disease",
        description: "Acute infection risk from contaminated animal products and poor handling.",
        connected_to: ["diarrhea", "vomiting", "fever"]
    },
    {
        id: "immune_dysfunction",
        name: "Immune Dysfunction",
        type: "disease",
        description: "Immune modulation can occur with persistent toxicant exposure.",
        connected_to: ["headache"]
    },
    {
        id: "epidemic_dropsy",
        name: "Epidemic Dropsy",
        type: "disease",
        description: "Clinical syndrome caused by argemone oil adulteration in edible oils.",
        connected_to: ["edema", "breathlessness", "abdominal_pain"]
    },

    {
        id: "edema",
        name: "Edema",
        type: "symptom",
        description: "Fluid accumulation and swelling; hallmark feature in epidemic dropsy outbreaks."
    },
    {
        id: "diarrhea",
        name: "Diarrhea",
        type: "symptom",
        description: "Common symptom in foodborne infection and some chemical exposures."
    },
    {
        id: "vomiting",
        name: "Vomiting",
        type: "symptom",
        description: "Acute GI symptom in foodborne illness and toxic exposures."
    },
    {
        id: "abdominal_pain",
        name: "Abdominal Pain",
        type: "symptom",
        description: "Frequent symptom in GI toxic or infectious presentations."
    },
    {
        id: "headache",
        name: "Headache",
        type: "symptom",
        description: "Non-specific neurologic symptom that can appear in toxic exposures."
    },
    {
        id: "breathlessness",
        name: "Breathlessness",
        type: "symptom",
        description: "Reported in severe epidemic dropsy and cardiorespiratory compromise."
    },
    {
        id: "nausea",
        name: "Nausea",
        type: "symptom",
        description: "Common early symptom in food poisoning and chemical irritation."
    },
    {
        id: "fever",
        name: "Fever",
        type: "symptom",
        description: "Typical in bacterial foodborne infections."
    },

    {
        id: "wash_peel_produce",
        name: "Wash and Peel Produce",
        type: "remedy",
        description: "Reduces some surface pesticide residues; does not remove systemic residues.",
        connected_to: ["organophosphate_pesticides", "chlorpyrifos", "cypermethrin"]
    },
    {
        id: "pre_harvest_interval",
        name: "Respect Pre-Harvest Interval",
        type: "remedy",
        description: "Following label PHI reduces pesticide residue carry-over to harvest.",
        connected_to: ["lindane", "chlorpyrifos", "mancozeb", "organophosphate_pesticides"]
    },
    {
        id: "withdrawal_compliance",
        name: "Antibiotic Withdrawal Compliance",
        type: "remedy",
        description: "Veterinary withdrawal periods are critical to reduce antibiotic residues in milk, eggs and meat.",
        connected_to: ["tetracyclines", "fluoroquinolones"]
    },
    {
        id: "dry_storage_mold_control",
        name: "Dry Storage and Mold Control",
        type: "remedy",
        description: "Feed and grain moisture control lowers mycotoxin risk entering milk and foods.",
        connected_to: ["aflatoxin_m1"]
    },
    {
        id: "lab_screening",
        name: "Laboratory Screening",
        type: "remedy",
        description: "Routine GC-MS, LC-MS/MS and ICP-MS surveillance is needed for contaminant control.",
        connected_to: [
            "organophosphate_pesticides",
            "organochlorine_pesticides",
            "arsenic",
            "lead",
            "cadmium",
            "mercury",
            "tetracyclines",
            "dioxins_furans"
        ]
    }
];

const DATA_PART_2 = [
    {
        id: "aminoglycosides",
        name: "Aminoglycoside Residues",
        type: "residue",
        aliases: ["Gentamicin", "Neomycin", "Streptomycin"],
        description: "Antibiotic residues relevant to poultry and dairy chains when withdrawal controls fail.",
        effects: [
            "Hearing loss (ototoxicity)",
            "Gaze instability (oscillopsia)",
            "Balance impairment"
        ],
        diseases: ["Neurological Disorders"],
        foundIn: ["Eggs", "Chicken Meat", "Milk"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/24584483/"
        ]
    },
    {
        id: "dimethoate",
        name: "Dimethoate",
        type: "pesticide",
        description: "Organophosphate insecticide associated with neurotoxic and long-term health concerns.",
        effects: [
            "Cholinesterase inhibition",
            "Neurotoxicity",
            "Association with malignant brain tumors in high-exposure cohorts"
        ],
        diseases: ["Brain Tumors", "Glioblastoma Multiforme", "Medulloblastoma"],
        foundIn: ["Apple", "Tomato", "Cabbage", "Green Chilli"],
        detectionLocations: [
            {
                place: "Kashmir Valley, India",
                sample: "Agricultural-use exposure in orchard/farm populations",
                year: 2024,
                note: "Case-control analysis reported elevated CNS tumor risk with specific pesticide exposures."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/39292407/"
        ]
    },
    {
        id: "phosalone",
        name: "Phosalone",
        type: "pesticide",
        description: "Organophosphate pesticide used in crop systems; exposure is linked with neurotoxic outcomes.",
        effects: [
            "Autonomic and central nervous system toxicity",
            "Association with malignant brain tumors in high-exposure groups"
        ],
        diseases: ["Brain Tumors", "Astrocytoma", "Ependymoma"],
        foundIn: ["Apple", "Grape", "Tomato"],
        detectionLocations: [
            {
                place: "Kashmir Valley, India",
                sample: "Agricultural exposure histories",
                year: 2024,
                note: "Included in pesticide panel in CNS tumor case-control data."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/39292407/"
        ]
    },
    {
        id: "captan",
        name: "Captan",
        type: "fungicide",
        description: "Fungicide used in fruit production with chronic exposure concerns in occupational settings.",
        effects: [
            "Respiratory and skin irritation",
            "Association with malignant brain tumor burden in exposed cohorts"
        ],
        diseases: [
            "Brain Tumors",
            "Glioblastoma Multiforme",
            "Anaplastic Oligodendroglioma",
            "Choroid Plexus Papilloma"
        ],
        foundIn: ["Apple", "Grape"],
        detectionLocations: [
            {
                place: "Kashmir Valley, India",
                sample: "Case-control occupational pesticide exposure dataset",
                year: 2024,
                note: "Study evaluated fungicide and insecticide exposure in CNS tumors."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/39292407/"
        ]
    },
    {
        id: "methyl_bromide",
        name: "Methyl Bromide",
        type: "poison",
        aliases: ["Bromomethane"],
        description: "Fumigant used in stored-grain and quarantine settings; high exposure can be neurotoxic.",
        effects: [
            "Unstable gait",
            "Vertigo",
            "Polyneuropathy",
            "Optic neuropathy",
            "Glutathione depletion in multiple tissues"
        ],
        diseases: ["Polyneuropathy", "Optic Neuropathy"],
        foundIn: ["Wheat Flour", "Rice", "Chickpea"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/30245170/"
        ]
    },
    {
        id: "phosphine",
        name: "Phosphine",
        type: "poison",
        description: "Fumigation gas from aluminum phosphide used in grain storage; acute poisonings can be severe.",
        effects: [
            "Severe oxidative stress",
            "Multiorgan injury including liver, lung and heart",
            "Neurological sequelae in survivors"
        ],
        diseases: ["Heart Failure", "Neurological Disorders"],
        foundIn: ["Rice", "Wheat Flour", "Pigeon Pea (Toor Dal)"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/35364745/"
        ]
    },
    {
        id: "pyrethroids",
        name: "Pyrethroid Pesticides",
        type: "pesticide",
        description: "Insecticide class that can cause neurocutaneous symptoms in acute or high-level exposure.",
        effects: [
            "Itching and burning skin sensation",
            "Paresthesia",
            "Muscle twitching"
        ],
        diseases: ["Neurological Disorders"],
        foundIn: ["Cabbage", "Tomato", "Capsicum", "Cucumber"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/32578811/"
        ]
    },
    {
        id: "bisphenol_a",
        name: "Bisphenol A (BPA)",
        type: "poison",
        description: "Endocrine-active chemical that can migrate from some can linings and plastic contact materials.",
        effects: [
            "Endothelial dysfunction",
            "Association with angina and accelerated atherosclerosis"
        ],
        diseases: ["Atherosclerosis", "Myocardial Infarction", "Cardiovascular Disease"],
        foundIn: ["Packaged Ready Meals", "Canned Foods", "Chocolate"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/17030592/"
        ]
    },
    {
        id: "nitrofurans",
        name: "Nitrofuran Residues",
        type: "residue",
        description: "Banned/restricted veterinary antimicrobials with residue concerns in aquaculture chains.",
        effects: [
            "Potential carcinogenic concern",
            "Antimicrobial resistance pressure"
        ],
        diseases: ["Cancer", "Antimicrobial Resistance"],
        foundIn: ["Shrimp", "Fish"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/33746363/"
        ]
    },
    {
        id: "chloramphenicol",
        name: "Chloramphenicol Residues",
        type: "residue",
        description: "Restricted antibiotic residue of concern in aquaculture products in some markets.",
        effects: [
            "Bone marrow suppression concern",
            "Antimicrobial resistance pressure"
        ],
        diseases: ["Antimicrobial Resistance", "Bone Loss"],
        foundIn: ["Shrimp", "Fish"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/33746363/"
        ]
    },
    {
        id: "sodium_benzoate",
        name: "Sodium Benzoate",
        type: "adulterant",
        description: "Common preservative; excess or susceptible exposure has been linked to oxidative and behavioral concerns.",
        effects: [
            "Allergic reactions",
            "Oxidative stress",
            "DNA damage signals in experimental systems",
            "Hyperactivity and anxiety signals in susceptible populations"
        ],
        diseases: ["Gastrointestinal Disease", "Immune Dysfunction"],
        foundIn: ["Fish", "Packaged Ready Meals", "Canned Foods"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/24257217/",
            "https://pubmed.ncbi.nlm.nih.gov/27497115/"
        ]
    },
    {
        id: "ammonia_ice_adulteration",
        name: "Ammonia in Ice (Adulteration)",
        type: "adulterant",
        description: "Illegal ammonia use in icing can irritate gastrointestinal and respiratory mucosa.",
        effects: [
            "Gastric irritation",
            "Intestinal tissue irritation",
            "Airway irritation"
        ],
        diseases: ["Gastrointestinal Disease"],
        foundIn: ["Fish", "Shrimp"],
        citations: [
            "https://www.atsdr.cdc.gov/toxprofiles/tp126.pdf"
        ]
    },
    {
        id: "alum_fitkari",
        name: "Alum (Fitkari) Misuse",
        type: "adulterant",
        description: "Aluminum salt misuse in food handling can increase aluminum exposure burden.",
        effects: [
            "Kidney stress in high exposure scenarios",
            "Gastrointestinal irritation"
        ],
        diseases: ["Kidney Disease", "Gastrointestinal Disease"],
        foundIn: ["Herbs", "Leafy Greens"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/30688604/"
        ]
    },
    {
        id: "soapstone_talc",
        name: "Soapstone/Talc Adulteration",
        type: "adulterant",
        description: "Adulteration and polishing agent concerns in pulses; talc contamination can carry mineral hazards.",
        effects: [
            "Gastrointestinal irritation",
            "Potential asbestos-linked concern when contaminated talc is used"
        ],
        diseases: ["Gastrointestinal Disease", "Cancer"],
        foundIn: ["Red Lentil (Masoor Dal)", "Pigeon Pea (Toor Dal)", "Mung Bean (Moong Dal)"],
        citations: [
            "Thankamma Jacob, Poisons in Our Food",
            "https://www.who.int/news-room/fact-sheets/detail/asbestos-elimination-of-asbestos-related-diseases"
        ]
    },
    {
        id: "pesticide_cocktail",
        name: "Pesticide Cocktail (Mixed Exposure)",
        type: "poison",
        description: "Mixtures of pesticides can show additive/synergistic toxicity beyond single-agent assumptions.",
        effects: [
            "Systemic inflammation",
            "Linear association with 10-year ASCVD risk in mixed exposure analyses"
        ],
        diseases: ["Atherosclerosis", "Cardiovascular Disease", "Myocardial Infarction"],
        foundIn: ["Tomato", "Cabbage", "Spinach", "Apple"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/28701387/"
        ]
    },
    {
        id: "bacterial_endotoxins_lps",
        name: "Bacterial Endotoxins (LPS)",
        type: "poison",
        description: "Lipopolysaccharides in contaminated foods can trigger systemic inflammation and cardiac stress.",
        effects: [
            "Systemic inflammation",
            "Depressed cardiac contractility"
        ],
        diseases: ["Heart Failure", "Cardiovascular Disease", "Foodborne Infection"],
        foundIn: ["Chicken Meat", "Milk", "Cheese"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/30356064/"
        ]
    },
    {
        id: "citreoviridin",
        name: "Citreoviridin",
        type: "poison",
        description: "Mycotoxin historically associated with cardiac beriberi in moldy rice exposures.",
        effects: [
            "Cardiac toxicity",
            "Sudden cardiac arrest risk in severe exposure"
        ],
        diseases: ["Heart Failure", "Myocardial Infarction"],
        foundIn: ["Rice"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/2443046/"
        ]
    },
    {
        id: "t2_toxin",
        name: "T-2 Toxin",
        type: "poison",
        description: "Trichothecene mycotoxin with oxidative and cardiotoxic injury potential.",
        effects: [
            "Oxidative tissue injury",
            "Cardiac tissue toxicity",
            "Blood pressure dysregulation"
        ],
        diseases: ["Hypertension", "Cardiovascular Disease"],
        foundIn: ["Wheat Flour", "Rice", "Jaggery"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/32872081/"
        ]
    },
    {
        id: "acrolein",
        name: "Acrolein",
        type: "poison",
        description: "Reactive aldehyde generated in high-heat frying and polluted agricultural environments.",
        effects: [
            "Endothelial irritation",
            "Platelet activation and thrombosis tendency"
        ],
        diseases: ["Myocardial Infarction", "Cardiovascular Disease"],
        foundIn: ["Sunflower Oil", "Palm Oil", "Mustard Oil"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/16362847/"
        ]
    },
    {
        id: "artificial_sweeteners",
        name: "Artificial Sweeteners (High Intake)",
        type: "adulterant",
        aliases: ["Erythritol", "Aspartame", "Sucralose"],
        description: "High intake exposure patterns are under investigation for thrombotic and cardiometabolic effects.",
        effects: [
            "Enhanced platelet responsiveness (reported for erythritol)",
            "Potentially increased clotting tendency"
        ],
        diseases: ["Myocardial Infarction", "Stroke", "Cardiovascular Disease"],
        foundIn: ["Packaged Ready Meals", "Canned Foods", "Chocolate"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/36849732/"
        ]
    },
    {
        id: "pfas",
        name: "PFAS (Per- and Polyfluoroalkyl Substances)",
        type: "poison",
        description: "Persistent fluorinated contaminants linked to dyslipidemia, endocrine disruption and immune effects.",
        effects: [
            "Lipid metabolism disruption",
            "Immune suppression risk",
            "Endocrine and developmental concerns"
        ],
        diseases: ["Cardiovascular Disease", "Immune Dysfunction", "Endocrine and Reproductive Effects", "Cancer"],
        foundIn: ["Fish", "Shrimp", "Packaged Ready Meals", "Canned Foods"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/33049253/",
            "https://www.epa.gov/pfas/our-current-understanding-human-health-and-environmental-risks-pfas"
        ]
    },
    {
        id: "ptfe_teflon_exposure",
        name: "PTFE/Teflon Thermal Decomposition Exposure",
        type: "poison",
        description: "Overheated non-stick cookware can release decomposition fumes with acute respiratory toxicity.",
        effects: [
            "Polymer fume fever",
            "Respiratory irritation"
        ],
        diseases: ["Gastrointestinal Disease", "Cardiovascular Disease"],
        foundIn: ["Packaged Ready Meals", "Cooked Foods"],
        citations: [
            "https://www.ncbi.nlm.nih.gov/books/NBK594276/"
        ]
    },
    {
        id: "plastic_packaging_migration",
        name: "Plastic Packaging Migration (Microwave Risk)",
        type: "poison",
        description: "Heating food in some plastic containers can increase migration of micro/nanoplastics and additives.",
        effects: [
            "Genotoxicity concern",
            "Oxidative stress",
            "Gut microbiome disruption"
        ],
        diseases: ["Cancer", "Gastrointestinal Disease", "Infertility"],
        foundIn: ["Packaged Ready Meals", "Takeaway Foods", "Canned Foods"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/38897105/"
        ]
    },
    {
        id: "nanoplastics",
        name: "Nanoplastics",
        type: "poison",
        description: "Sub-micron plastic particles with emerging evidence of systemic inflammatory and cardiopulmonary effects.",
        effects: [
            "Cardiopulmonary effects",
            "Inflammatory responses",
            "Oxidative stress",
            "Potential nutrient absorption and microflora disruption"
        ],
        diseases: ["Cardiovascular Disease", "Gastrointestinal Disease", "Infertility"],
        foundIn: ["Fish", "Shrimp", "Packaged Ready Meals"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/36380951/"
        ]
    },
    {
        id: "parasitic_worms",
        name: "Parasitic Worm Contamination",
        type: "poison",
        aliases: ["Helminths", "Nematodes"],
        description: "Foodborne helminths in fish and other foods remain a major global burden.",
        effects: [
            "Abdominal pain",
            "Diarrhea",
            "Nutritional compromise"
        ],
        diseases: ["Foodborne Infection", "Gastrointestinal Disease"],
        foundIn: ["Fish", "Shrimp", "Leafy Greens"],
        citations: [
            "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections"
        ]
    },
    {
        id: "copper_excess",
        name: "Copper (Excess Exposure)",
        type: "heavy-metal",
        aliases: ["Cu"],
        description: "Copper is essential but excessive dietary/environmental intake can be hepatotoxic and pro-oxidative.",
        effects: [
            "Oxidative stress",
            "Gastrointestinal irritation",
            "Liver injury in high exposure"
        ],
        diseases: ["Gastrointestinal Disease", "Liver Cancer"],
        foundIn: ["Fish", "Chocolate"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/34649206/"
        ]
    },
    {
        id: "zinc_excess",
        name: "Zinc (Excess Exposure)",
        type: "heavy-metal",
        aliases: ["Zn"],
        description: "Zinc is essential but excessive intake can disrupt copper metabolism and GI health.",
        effects: [
            "Nausea and abdominal pain",
            "Copper metabolism disruption"
        ],
        diseases: ["Gastrointestinal Disease"],
        foundIn: ["Fish"],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/34649206/"
        ]
    },

    {
        id: "chocolate",
        name: "Chocolate",
        type: "food",
        description: "Cocoa-derived food where cadmium and lead burdens can vary by origin and processing.",
        connected_to: ["lead", "cadmium", "copper_excess", "bisphenol_a", "artificial_sweeteners"],
        detectionLocations: [
            {
                place: "Brazilian market dataset",
                sample: "Commercial chocolates",
                year: 2024,
                note: "Estimated exposure values were below benchmark limits in this cohort."
            },
            {
                place: "Global cocoa/chocolate evidence synthesis",
                sample: "Systematic review and meta-analysis",
                year: 2024,
                note: "Cadmium and lead concentrations vary by cocoa origin and product type."
            }
        ],
        citations: [
            "https://pubmed.ncbi.nlm.nih.gov/38763644/",
            "https://pubmed.ncbi.nlm.nih.gov/39144282/"
        ]
    },
    {
        id: "mulberry",
        name: "Mulberry",
        type: "food",
        description: "Berry fruit; contamination profile depends on farming inputs and handling.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "raspberry",
        name: "Raspberry",
        type: "food",
        description: "Berry crop often represented in international pesticide residue monitoring.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "blueberry",
        name: "Blueberry",
        type: "food",
        description: "Berry commodity included in global residue and packaging migration discussions.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "plastic_packaging_migration"]
    },
    {
        id: "cluster_beans",
        name: "Cluster Beans",
        type: "food",
        description: "Legume vegetable where pesticide management and washing practices influence residue exposure.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "cowpea_beans",
        name: "Cowpea Beans",
        type: "food",
        description: "Pulse legume included in residue risk discussions in tropical farming systems.",
        connected_to: ["organophosphate_pesticides", "organochlorine_pesticides"]
    },
    {
        id: "coconut",
        name: "Coconut",
        type: "food",
        description: "Food and oil source with contamination profile tied to processing and storage.",
        connected_to: ["organophosphate_pesticides", "aflatoxin_m1"]
    },
    {
        id: "capsicum",
        name: "Capsicum",
        type: "food",
        description: "Common vegetable represented in pesticide residue surveillance datasets.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "chlorpyrifos"]
    },
    {
        id: "button_mushroom",
        name: "Button Mushroom",
        type: "food",
        description: "Cultivated mushroom where substrate quality and handling drive contamination profile.",
        connected_to: ["lead", "cadmium"]
    },
    {
        id: "oyster_mushroom",
        name: "Oyster Mushroom",
        type: "food",
        description: "Cultivated mushroom with metal uptake potential depending on substrate and water quality.",
        connected_to: ["lead", "cadmium"]
    },
    {
        id: "broccoli",
        name: "Broccoli",
        type: "food",
        description: "Cruciferous vegetable included in urban residue monitoring programs globally.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "lead"]
    },
    {
        id: "watermelon",
        name: "Watermelon",
        type: "food",
        description: "Melon crop where pesticide and heavy metal exposure can vary by irrigation source.",
        connected_to: ["organophosphate_pesticides", "lead"]
    },
    {
        id: "muskmelon",
        name: "Muskmelon",
        type: "food",
        description: "Melon with contamination profile shaped by soil, water and pesticide practices.",
        connected_to: ["organophosphate_pesticides", "lead"]
    },
    {
        id: "curry_leaf",
        name: "Curry Leaf",
        type: "food",
        description: "Leafy herb often consumed fresh, making residue washing practices relevant.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "lead"]
    },
    {
        id: "red_chillies",
        name: "Red Chillies",
        type: "food",
        description: "Spice crop where drying and storage influence contamination burden.",
        connected_to: ["organophosphate_pesticides", "aflatoxin_m1"]
    },
    {
        id: "sweet_potato",
        name: "Sweet Potato",
        type: "food",
        description: "Root crop where environmental metal uptake can occur.",
        connected_to: ["lead", "cadmium", "acrylamide"]
    },
    {
        id: "yam",
        name: "Yam",
        type: "food",
        description: "Tuber crop with contamination profile linked to soil quality.",
        connected_to: ["lead", "cadmium"]
    },
    {
        id: "madras_cucumber",
        name: "Madras Cucumber",
        type: "food",
        description: "Regional vegetable where irrigation and pesticide use determine residue load.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "ivy_gourd",
        name: "Coccinea (Ivy Gourd)",
        type: "food",
        description: "Vegetable consumed widely in India; monitored under broad pesticide classes.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "banana_stem",
        name: "Banana Stem",
        type: "food",
        description: "Traditional food ingredient with contamination profile tied to cultivation inputs.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "banana_flower",
        name: "Banana Flower",
        type: "food",
        description: "Traditional edible flower with agricultural-input-dependent residue profile.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "jackfruit",
        name: "Jackfruit",
        type: "food",
        description: "Tropical fruit represented in local contamination and adulteration contexts.",
        connected_to: ["organophosphate_pesticides", "lead"]
    },
    {
        id: "flat_beans",
        name: "Flat Beans",
        type: "food",
        description: "Pod vegetable where pesticide handling practices influence residues.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "turmeric",
        name: "Turmeric",
        type: "food",
        description: "Spice root that can accumulate contaminants from soil and post-harvest adulteration.",
        connected_to: ["lead", "chromium"]
    },
    {
        id: "mango_ginger",
        name: "Mango Ginger",
        type: "food",
        description: "Rhizome crop with contamination pattern similar to other root spices.",
        connected_to: ["lead", "organophosphate_pesticides"]
    },
    {
        id: "orange",
        name: "Orange",
        type: "food",
        description: "Citrus fruit represented in global pesticide residue surveillance.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "ber",
        name: "Ber (Indian Jujube)",
        type: "food",
        description: "Traditional fruit where residue profile depends on orchard management.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "radish",
        name: "Radish",
        type: "food",
        description: "Root vegetable included in urban market residue studies.",
        connected_to: ["organophosphate_pesticides", "lead", "cadmium"]
    },
    {
        id: "longan",
        name: "Longan",
        type: "food",
        description: "Fruit included in global produce safety monitoring contexts.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "pineapple",
        name: "Pineapple",
        type: "food",
        description: "Tropical fruit where contamination profile depends on cultivation and post-harvest handling.",
        connected_to: ["organophosphate_pesticides"]
    },
    {
        id: "mint_leaf",
        name: "Mint Leaf",
        type: "food",
        description: "Leafy herb often eaten raw, increasing relevance of wash/peel interventions.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "lead"]
    },
    {
        id: "coriander_leaf",
        name: "Coriander Leaf",
        type: "food",
        description: "Herb with high surface-area exposure to spray residues.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "lead"]
    },
    {
        id: "drumstick_leaf",
        name: "Drumstick Leaf",
        type: "food",
        description: "Leaf vegetable where environmental exposure and washing quality affect risk.",
        connected_to: ["organophosphate_pesticides", "lead"]
    },
    {
        id: "drumstick",
        name: "Drumstick (Moringa Pods)",
        type: "food",
        description: "Vegetable pod with contamination profile linked to cultivation inputs.",
        connected_to: ["organophosphate_pesticides", "lead"]
    },
    {
        id: "ginger",
        name: "Ginger",
        type: "food",
        description: "Root spice with potential heavy metal contamination in polluted soils.",
        connected_to: ["lead", "cadmium"]
    },
    {
        id: "garlic",
        name: "Garlic",
        type: "food",
        description: "Bulb crop monitored in mixed heavy-metal and pesticide surveys.",
        connected_to: ["lead", "cadmium", "organophosphate_pesticides"]
    },
    {
        id: "ridge_gourd",
        name: "Ridge Gourd",
        type: "food",
        description: "Vegetable crop in residue monitoring frameworks.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "bitter_gourd",
        name: "Bitter Gourd",
        type: "food",
        description: "Vegetable often represented in pesticide residue monitoring programs.",
        connected_to: ["organophosphate_pesticides", "pyrethroids"]
    },
    {
        id: "cucumber",
        name: "Cucumber",
        type: "food",
        description: "High-water vegetable frequently evaluated in multi-residue studies.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "lead"]
    },
    {
        id: "jaggery",
        name: "Jaggery",
        type: "food",
        description: "Traditional sweetener where storage and processing quality can influence contamination.",
        connected_to: ["t2_toxin", "lead", "sodium_benzoate"]
    },
    {
        id: "almonds",
        name: "Almonds",
        type: "food",
        description: "Nut source of selenium and zinc support in balanced diets.",
        connected_to: ["aflatoxin_m1", "selenium_zinc_support"]
    },
    {
        id: "cashew",
        name: "Cashew",
        type: "food",
        description: "Nut consumed globally; contamination risk depends on storage and processing.",
        connected_to: ["aflatoxin_m1", "selenium_zinc_support"]
    },
    {
        id: "walnut",
        name: "Walnut",
        type: "food",
        description: "Nut food relevant in diet-based mitigation strategies.",
        connected_to: ["selenium_zinc_support"]
    },
    {
        id: "sunflower_oil",
        name: "Sunflower Oil",
        type: "food",
        description: "Cooking oil where repeated high-heat use can generate reactive toxic aldehydes.",
        connected_to: ["trans_fats", "acrolein"]
    },
    {
        id: "palm_oil",
        name: "Palm Oil",
        type: "food",
        description: "Cooking fat where process quality and high-heat reuse influence risk profile.",
        connected_to: ["trans_fats", "acrolein"]
    },
    {
        id: "soybean_oil",
        name: "Soybean Oil",
        type: "food",
        description: "Widely used oil with contamination/adulteration risk depending on handling.",
        connected_to: ["trans_fats", "acrolein"]
    },
    {
        id: "coconut_oil",
        name: "Coconut Oil",
        type: "food",
        description: "Oil used in many regions; high-heat reuse still generates reactive compounds.",
        connected_to: ["acrolein"]
    },
    {
        id: "olive_oil",
        name: "Olive Oil",
        type: "food",
        description: "Edible oil with lower contamination risk when authentic and not repeatedly overheated.",
        connected_to: ["acrolein"]
    },
    {
        id: "rice_bran_oil",
        name: "Rice Bran Oil",
        type: "food",
        description: "Edible oil where oxidation and adulteration controls remain important.",
        connected_to: ["trans_fats", "acrolein"]
    },
    {
        id: "tuna",
        name: "Tuna",
        type: "food",
        description: "Predatory fish species with elevated methylmercury concern in many geographies.",
        connected_to: ["mercury", "pfas", "microplastics", "nanoplastics"]
    },
    {
        id: "sardine",
        name: "Sardine",
        type: "food",
        description: "Lower trophic fish generally lower in mercury than large predators, but still monitored.",
        connected_to: ["microplastics", "nanoplastics"]
    },
    {
        id: "mackerel",
        name: "Mackerel",
        type: "food",
        description: "Marine fish species included in heavy-metal and microplastic surveillance.",
        connected_to: ["mercury", "microplastics", "pfas"]
    },
    {
        id: "salmon",
        name: "Salmon",
        type: "food",
        description: "Internationally consumed fish where microplastics and persistent contaminants are monitored.",
        connected_to: ["microplastics", "pfas", "nitrofurans"]
    },
    {
        id: "rohu",
        name: "Rohu",
        type: "food",
        description: "Common South Asian freshwater fish included in metal surveillance programs.",
        connected_to: ["mercury", "lead", "cadmium", "microplastics"]
    },
    {
        id: "catla",
        name: "Catla",
        type: "food",
        description: "Indian freshwater fish with contamination profile linked to water quality.",
        connected_to: ["mercury", "lead", "cadmium", "microplastics"]
    },
    {
        id: "canned_foods",
        name: "Canned Foods",
        type: "food",
        description: "Processed foods where can-lining migration and additive load are risk factors.",
        connected_to: ["bisphenol_a", "sodium_benzoate", "pfas", "plastic_packaging_migration"]
    },
    {
        id: "packaged_ready_meals",
        name: "Packaged Ready Meals",
        type: "food",
        description: "Convenience foods where packaging migration risk rises when heated in unsuitable containers.",
        connected_to: ["plastic_packaging_migration", "bisphenol_a", "artificial_sweeteners", "pfas"]
    },
    {
        id: "takeaway_foods",
        name: "Takeaway Foods",
        type: "food",
        description: "Takeaway and fast-food packaging can contribute to PFAS and plastic additive migration burden.",
        connected_to: ["plastic_packaging_migration", "pfas"]
    },
    {
        id: "leafy_greens",
        name: "Leafy Greens",
        type: "food",
        description: "Broad leafy-vegetable group with pesticide and washing-related exposure relevance.",
        connected_to: ["organophosphate_pesticides", "pyrethroids", "alum_fitkari", "parasitic_worms"]
    },
    {
        id: "herbs",
        name: "Herbs",
        type: "food",
        description: "Fresh herbs are often eaten raw and require stringent cleaning and source control.",
        connected_to: ["organophosphate_pesticides", "alum_fitkari", "lead"]
    },
    {
        id: "cooked_foods",
        name: "Cooked Foods",
        type: "food",
        description: "Cooking technique and container choice affect process contaminants and migration risk.",
        connected_to: ["acrylamide", "acrolein", "ptfe_teflon_exposure"]
    },

    {
        id: "autoimmune_disorders",
        name: "Autoimmune Disorders",
        type: "disease",
        description: "Immune dysregulation disorders potentially influenced by chronic toxicant exposure.",
        connected_to: ["immune_dysfunction", "systemic_lupus_erythematosus", "autoimmune_thyroiditis"]
    },
    {
        id: "systemic_lupus_erythematosus",
        name: "Systemic Lupus Erythematosus",
        type: "disease",
        description: "Autoimmune disease node added for exposure-risk relationship exploration."
    },
    {
        id: "autoimmune_thyroiditis",
        name: "Autoimmune Thyroiditis",
        type: "disease",
        description: "Autoimmune thyroid disease node for endocrine-immune disruption mapping."
    },
    {
        id: "arrhythmia",
        name: "Arrhythmia",
        type: "disease",
        description: "Abnormal heart rhythm that can be triggered by neurotoxic or cardiotoxic exposures.",
        connected_to: ["cardiovascular_disease"]
    },
    {
        id: "atherosclerosis",
        name: "Atherosclerosis",
        type: "disease",
        description: "Arterial plaque disease linked to chronic inflammation, dyslipidemia and toxic exposures.",
        connected_to: ["cardiovascular_disease"]
    },
    {
        id: "myocardial_infarction",
        name: "Myocardial Infarction",
        type: "disease",
        description: "Acute coronary thrombosis event associated with plaque instability and pro-thrombotic states.",
        connected_to: ["cardiovascular_disease"]
    },
    {
        id: "heart_failure",
        name: "Heart Failure",
        type: "disease",
        description: "Reduced pumping capacity of the heart, can be aggravated by toxic and inflammatory burdens.",
        connected_to: ["cardiovascular_disease"]
    },
    {
        id: "brain_tumors",
        name: "Brain Tumors",
        type: "disease",
        description: "Group node for malignant and non-malignant CNS tumors linked in pesticide-exposure datasets.",
        connected_to: ["cancer"]
    },
    {
        id: "glioblastoma_multiforme",
        name: "Glioblastoma Multiforme",
        type: "disease",
        description: "Aggressive malignant brain tumor subtype."
    },
    {
        id: "medulloblastoma",
        name: "Medulloblastoma",
        type: "disease",
        description: "Highly malignant embryonal CNS tumor."
    },
    {
        id: "astrocytoma",
        name: "Astrocytoma",
        type: "disease",
        description: "Glial-origin tumor spectrum including high-grade forms."
    },
    {
        id: "anaplastic_oligodendroglioma",
        name: "Anaplastic Oligodendroglioma",
        type: "disease",
        description: "High-grade oligodendroglial tumor subtype."
    },
    {
        id: "ependymoma",
        name: "Ependymoma",
        type: "disease",
        description: "Tumor arising from ependymal cells in brain or spinal cord."
    },
    {
        id: "choroid_plexus_papilloma",
        name: "Choroid Plexus Papilloma",
        type: "disease",
        description: "Rare intraventricular tumor subtype."
    },
    {
        id: "polyneuropathy",
        name: "Polyneuropathy",
        type: "disease",
        description: "Diffuse peripheral nerve dysfunction linked with toxic exposures."
    },
    {
        id: "optic_neuropathy",
        name: "Optic Neuropathy",
        type: "disease",
        description: "Optic nerve dysfunction that can occur in toxic exposure contexts."
    },
    {
        id: "drug_induced_lupus",
        name: "Drug-Induced Lupus",
        type: "disease",
        description: "Autoimmune-like syndrome associated with selected medications."
    },
    {
        id: "bone_loss",
        name: "Bone Loss",
        type: "disease",
        description: "Reduced bone mineral density linked with chronic toxicant and nutritional stress."
    },
    {
        id: "infertility",
        name: "Infertility",
        type: "disease",
        description: "Reproductive outcome associated with multiple endocrine and genotoxic exposures."
    },
    {
        id: "hypertension",
        name: "Hypertension",
        type: "disease",
        description: "Elevated blood pressure with multifactorial toxic and metabolic determinants."
    },
    {
        id: "stroke",
        name: "Stroke",
        type: "disease",
        description: "Acute cerebrovascular event associated with thrombotic and vascular risk factors."
    },

    {
        id: "itching",
        name: "Itching",
        type: "symptom",
        description: "Common neurocutaneous symptom in pyrethroid exposure."
    },
    {
        id: "burning_sensation",
        name: "Burning Sensation",
        type: "symptom",
        description: "Paresthesia-like burning sensation can occur in pyrethroid toxicity."
    },
    {
        id: "muscle_twitching",
        name: "Muscle Twitching",
        type: "symptom",
        description: "Neuromuscular hyperexcitability symptom in select toxic exposures."
    },
    {
        id: "tinnitus",
        name: "Tinnitus",
        type: "symptom",
        description: "Auditory symptom reported with ototoxic and vestibular-toxic compounds."
    },
    {
        id: "oscillopsia",
        name: "Oscillopsia",
        type: "symptom",
        description: "Illusion of moving visual field, classically seen in vestibulotoxic injury."
    },
    {
        id: "balance_impairment",
        name: "Balance Impairment",
        type: "symptom",
        description: "Vestibular and neurological symptom."
    },

    {
        id: "selenium_zinc_support",
        name: "Selenium and Zinc Support",
        type: "remedy",
        description: "Adequate selenium and zinc intake supports antioxidant defense and heavy-metal response pathways.",
        connected_to: ["mercury", "lead", "cadmium", "arsenic", "zinc_excess"]
    },
    {
        id: "medical_chelation",
        name: "Medical Chelation (Supervised)",
        type: "remedy",
        description: "Chelation should only be used under specialist supervision after confirmed heavy-metal diagnosis.",
        connected_to: ["arsenic", "lead", "mercury", "cadmium"]
    },
    {
        id: "avoid_microwaving_plastic",
        name: "Avoid Microwaving Food in Plastic Packaging",
        type: "remedy",
        description: "Use glass/ceramic for reheating to reduce microplastic/additive migration from unsuitable plastics.",
        connected_to: ["plastic_packaging_migration", "nanoplastics", "bisphenol_a"]
    },
    {
        id: "choose_low_trophic_fish",
        name: "Choose Lower-Trophic Fish More Often",
        type: "remedy",
        description: "Selecting smaller fish species can reduce mercury burden while retaining nutritional benefits.",
        connected_to: ["mercury", "pfas", "microplastics"]
    },
    {
        id: "cold_chain_hygiene",
        name: "Cold-Chain and Hygiene Control",
        type: "remedy",
        description: "Improved icing, cold-chain and hygiene reduce preservative misuse and microbial contamination in seafood.",
        connected_to: ["formaldehyde", "ammonia_ice_adulteration", "salmonella", "campylobacter", "parasitic_worms"]
    }
];

// Part 1 + Part 2 dataset. Additional batches can be appended in future prompts.
const DATA = DATA_PART_1.concat(DATA_PART_2);
