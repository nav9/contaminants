const DATA_PART_1 = [
    {
        id: "organophosphate_pesticides",
        name: "Organophosphate Pesticides",
        type: "pesticide",
        aliases: ["OP pesticides"],
        description: "Broad insecticide class frequently reported in fruit and vegetable residue monitoring programs.",
        effects: [
            "Neurotoxicity",
            "Cholinesterase inhibition",
            "Developmental concerns with chronic exposure"
        ],
        diseases: ["Neurological Disorders"],
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
            "https://pubmed.ncbi.nlm.nih.gov/20632088/"
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
            "Long-term cancer concern"
        ],
        diseases: ["Cancer", "Endocrine and Reproductive Effects"],
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
            "https://pubmed.ncbi.nlm.nih.gov/32415153/"
        ]
    },
    {
        id: "chlorpyrifos",
        name: "Chlorpyrifos",
        type: "pesticide",
        description: "Organophosphate insecticide frequently reported in produce and milk pesticide panels.",
        effects: [
            "Neurodevelopmental concern",
            "Acetylcholinesterase inhibition"
        ],
        diseases: ["Neurological Disorders"],
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
            "https://pubmed.ncbi.nlm.nih.gov/32415153/"
        ]
    },
    {
        id: "mancozeb",
        name: "Mancozeb",
        type: "fungicide",
        description: "Dithiocarbamate fungicide used in fruit and vegetable protection.",
        effects: [
            "Thyroid-related concern",
            "Potential endocrine effects"
        ],
        diseases: ["Endocrine and Reproductive Effects"],
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
            "https://pubmed.ncbi.nlm.nih.gov/38110624/"
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
        type: "poison",
        aliases: ["AFM1"],
        description: "Milk-borne mycotoxin formed in lactating animals after feed contamination with aflatoxin B1.",
        effects: [
            "Hepatotoxicity",
            "Carcinogenic risk"
        ],
        diseases: ["Liver Cancer", "Cancer"],
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
            "https://pubmed.ncbi.nlm.nih.gov/31766982/"
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
            "Neurological effects"
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
            "Hematological toxicity",
            "Developmental toxicity"
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
            "Bone demineralization",
            "Oxidative stress"
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
            "Renal stress",
            "Gastrointestinal irritation",
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
            "Gut microbiome disturbance",
            "Allergic reactions",
            "Antimicrobial resistance pressure"
        ],
        diseases: ["Antimicrobial Resistance"],
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
            "https://pubmed.ncbi.nlm.nih.gov/32801555/"
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
        type: "poison",
        aliases: ["PCDD/Fs"],
        description: "Persistent organic pollutants that bioaccumulate in fat-rich animal foods.",
        effects: [
            "Immune dysfunction",
            "Endocrine disruption",
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
        type: "poison",
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
        type: "poison",
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
        type: "poison",
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
        type: "poison",
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
        id: "beef",
        name: "Beef",
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

// Part 1 dataset. Next prompts can append additional nodes to this array.
const DATA = DATA_PART_1;
