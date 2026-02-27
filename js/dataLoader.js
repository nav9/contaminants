// ===============================
// Embedded Data (No CORS Issues)
// ===============================

// ---- CONTAMINANTS ----
const contaminantsData = [
    {
        id: "organophosphates",
        type: "contaminant",
        name: "Organophosphate Pesticides",
        category: "pesticide",
        color: "#ff6666",
        exposure_routes: ["produce", "water"],
        body_systems: ["nervous system", "cardiovascular"],
        mechanisms: [
            "Acetylcholinesterase inhibition",
            "Oxidative stress"
        ],
        effects: ["immune_dysregulation", "atherosclerosis_association"],
        evidence_level: "moderate_human_epidemiology"
    },

    {
        id: "aflatoxin_b1",
        type: "contaminant",
        name: "Aflatoxin B1",
        category: "mycotoxin",
        color: "#ff9966",
        exposure_routes: ["mouldy grains", "groundnuts"],
        body_systems: ["liver", "immune system"],
        mechanisms: [
            "DNA adduct formation",
            "p53 mutation"
        ],
        effects: ["hepatocellular_carcinoma"],
        evidence_level: "strong_human_carcinogen"
    },

    {
        id: "mercury",
        type: "contaminant",
        name: "Mercury",
        category: "heavy_metal",
        color: "#999999",
        exposure_routes: ["large fish"],
        body_systems: ["brain", "kidneys"],
        mechanisms: [
            "Protein binding",
            "Oxidative stress"
        ],
        effects: ["cns_injury"],
        evidence_level: "well_established_neurotoxin"
    },

    {
        id: "lead",
        type: "contaminant",
        name: "Lead",
        category: "heavy_metal",
        color: "#bbbbbb",
        exposure_routes: ["water pipes", "rice contamination"],
        body_systems: ["brain", "cardiovascular"],
        mechanisms: [
            "Nitric oxide disruption",
            "Enzyme inhibition"
        ],
        effects: ["cns_injury"],
        evidence_level: "strong_human_data"
    },

    {
        id: "bpa",
        type: "contaminant",
        name: "Bisphenol A",
        category: "plastic_additive",
        color: "#cc66ff",
        exposure_routes: ["canned food linings"],
        body_systems: ["endocrine"],
        mechanisms: ["Estrogen receptor modulation"],
        effects: ["atherosclerosis_association"],
        evidence_level: "observational_association"
    },

    {
        id: "argemone_oil",
        type: "contaminant",
        name: "Argemone Oil",
        category: "adulterant",
        color: "yellow",
        exposure_routes: ["adulterated mustard oil"],
        body_systems: ["cardiovascular"],
        mechanisms: ["Toxic alkaloids causing capillary damage"],
        effects: ["epidemic_dropsy"],
        evidence_level: "documented_outbreaks"
    }
];


// ---- EFFECTS ----
const effectsData = [
    {
        id: "immune_dysregulation",
        type: "effect",
        name: "Immune Dysregulation",
        description: "Altered immune response and inflammation"
    },

    {
        id: "atherosclerosis_association",
        type: "effect",
        name: "Atherosclerosis (Association)",
        description: "Linked in observational studies to arterial plaque formation"
    },

    {
        id: "hepatocellular_carcinoma",
        type: "effect",
        name: "Liver Cancer (HCC)",
        description: "Primary liver cancer associated with aflatoxin exposure"
    },

    {
        id: "cns_injury",
        type: "effect",
        name: "Central Nervous System Injury",
        description: "Cognitive impairment or neurological damage"
    },

    {
        id: "epidemic_dropsy",
        type: "effect",
        name: "Epidemic Dropsy",
        description: "Edema and cardiac issues due to argemone oil contamination"
    }
];


// ---- SYMPTOMS ----
const symptomsData = [
    {
        id: "fatigue",
        type: "symptom",
        name: "Fatigue"
    },
    {
        id: "chest_pain",
        type: "symptom",
        name: "Chest Pain"
    },
    {
        id: "cognitive_decline",
        type: "symptom",
        name: "Cognitive Decline"
    }
];


// ===============================
// Graph Builder
// ===============================

function buildGraphData() {

    const nodes = [];
    const links = [];

    // Add contaminant nodes
    contaminantsData.forEach(c => {
        nodes.push({
            id: c.id,
            label: c.name,
            type: c.type,
            category: c.category,
            color: c.category === "adulterant" ? "yellow" : c.color,
            data: c
        });

        // Link contaminant to effects
        c.effects.forEach(effectId => {
            links.push({
                source: c.id,
                target: effectId
            });
        });
    });

    // Add effect nodes
    effectsData.forEach(e => {
        nodes.push({
            id: e.id,
            label: e.name,
            type: e.type,
            color: "#66ccff",
            data: e
        });
    });

    // Add symptom nodes
    symptomsData.forEach(s => {
        nodes.push({
            id: s.id,
            label: s.name,
            type: s.type,
            color: "#66ff99",
            data: s
        });
    });

    return { nodes, links };
}