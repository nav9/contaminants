// js/ui.js

// ===============================
// Resizable Split Panels
// ===============================

const resizer = document.getElementById("resizer");
const left = document.getElementById("graph-panel");
const right = document.getElementById("details-panel");

let isResizing = false;

resizer.addEventListener("mousedown", () => {
    isResizing = true;
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const containerOffsetLeft =
        document.getElementById("split-container").offsetLeft;

    const pointerRelativeXpos = e.clientX - containerOffsetLeft;
    const containerWidth =
        document.getElementById("split-container").offsetWidth;

    const leftWidthPercent =
        (pointerRelativeXpos / containerWidth) * 100;

    left.style.width = leftWidthPercent + "%";
    right.style.width = (100 - leftWidthPercent) + "%";
});

document.addEventListener("mouseup", () => {
    isResizing = false;
});

const UIManager = {

    selectedTags: [],

    init() {

        $("#close-banner").click(() => {
            $("#disclaimer-banner").hide();
        });

        $("#search-input").on("input", () => {
            if (!$("#show-suggestions").is(":checked")) return;

            const query = $("#search-input").val();
            setTimeout(() => this.showSuggestions(query), 0);
        });

        $("#submit-btn").click(() => {
            this.addTag($("#search-input").val());
            $("#search-input").val("");
        });

        $("#zoom-in").click(() => GraphManager.zoomIn());
        $("#zoom-out").click(() => GraphManager.zoomOut());
        $("#reset-view").click(() => GraphManager.reset());
    },

    showSuggestions(query) {

        const results = SearchEngine.search(query).slice(0, 10);
        const container = $("#suggestions");
        container.empty();

        results.forEach(r => {
            const item = $("<div>")
                .addClass("suggestion-item")
                .text(r.node.name)
                .click(() => {
                    this.addTag(r.node.name, r.node.id);
                    container.empty();
                });
            container.append(item);
        });
    },

    addTag(text, id = null) {
        const results = id
            ? [{ node: DataStore.nodes.find(n => n.id === id) }]
            : SearchEngine.search(text);

        if (!results.length) return;

        const node = results[0].node;

        if (this.selectedTags.includes(node.id)) return;

        this.selectedTags.push(node.id);

        const tag = $("<span>")
            .addClass("tag tag-" + node.category)
            .text(node.name);

        const closeBtn = $("<button>")
            .text("✖")
            .click(() => this.removeTag(node.id, tag));

        tag.append(closeBtn);
        $("#tags-container").append(tag);

        this.refreshGraph();
    },

    removeTag(id, element) {
        this.selectedTags = this.selectedTags.filter(t => t !== id);
        element.remove();
        this.refreshGraph();
    },

    refreshGraph() {
        GraphManager.update(this.selectedTags);
    },

    // showDetails(node) {
    //     $("#info-content").html(`
    //         <strong>${node.name}</strong><br><br>
    //         Category: ${node.category}<br><br>
    //         Aliases: ${(node.aliases || []).join(", ")}<br><br>
    //         Effects: ${(node.body_effects || []).join(", ")}
    //     `);
    // }

};

function showDetails(node) {

    const container = document.getElementById("info-content");

    const card = document.createElement("div");
    card.className = "detail-card";

    let citationsHTML = "";
    if (node.data?.citations) {
        citationsHTML = `
            <div class="citation">
                <strong>Sources:</strong><br>
                ${node.data.citations.join("<br>")}
            </div>
        `;
    }

    card.innerHTML = `
        <div class="detail-title">${node.label}</div>
        <div>Type: ${node.type}</div>
        ${node.data?.description ? `<div>${node.data.description}</div>` : ""}
        ${node.data?.mechanisms ? `<div><strong>Mechanisms:</strong> ${node.data.mechanisms.join(", ")}</div>` : ""}
        ${node.data?.effects ? `<div><strong>Effects:</strong> ${node.data.effects.join(", ")}</div>` : ""}
        ${node.data?.evidence_level ? `<div><strong>Evidence:</strong> ${node.data.evidence_level}</div>` : ""}
        ${citationsHTML}
    `;

    container.insertBefore(card, container.firstChild);
}

document.getElementById("confidence-slider")
    .addEventListener("input", function () {

    const level = parseInt(this.value);

    simulation.nodes().forEach(n => {
        if (!n.data?.evidence_level) return;

        const strengthMap = {
            "limited": 1,
            "observational_association": 2,
            "moderate_human_epidemiology": 3,
            "strong_human_data": 4,
            "strong_human_carcinogen": 5
        };

        const score = strengthMap[n.data.evidence_level] || 1;

        n.hidden = score < level;
    });

    d3.selectAll("circle")
        .style("display", d => d.hidden ? "none" : "block");

});

document.getElementById("gender-filter")
    .addEventListener("change", function() {

    const gender = this.value;

    simulation.nodes().forEach(n => {
        if (!n.data?.gender_specific) return;

        n.hidden = (gender !== "all" &&
                    n.data.gender_specific !== gender);
    });

    d3.selectAll("circle")
        .style("display", d => d.hidden ? "none" : "block");
});