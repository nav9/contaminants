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

    const div = document.createElement("div");
    div.className = "mb-3 p-2 border border-secondary rounded";
    div.innerHTML = `
        <strong>${node.label}</strong><br>
        Type: ${node.type}<br>
        ${node.data?.description || ""}
    `;

    // Add new content to TOP
    container.insertBefore(div, container.firstChild);
};