$(document).ready(function () {
    // Initialize components
    // Initialize components with all nodes shown by default
    VisualizationModule.updateGraph();

    // UI Elements
    const $searchInput = $('#search-input');
    const $submitBtn = $('#submit-search');
    const $suggestions = $('#suggestions-dropdown');
    const $showSuggestions = $('#show-suggestions');
    const $sidebar = $('#details-sidebar');
    const $toggleSidebar = $('#toggle-sidebar');
    const $sidebarContent = $('#sidebar-content');
    const $disclaimer = $('#disclaimer-banner');
    const $closeDisclaimer = $('#close-disclaimer');
    const $resetSearchBtn = $('#reset-search');
    const $helpBtn = $('#help-btn');
    const $helpModal = $('#help-modal');
    const $closeModal = $('.close-modal');

    // Remove minimized class by default
    $sidebar.removeClass('minimized');
    $toggleSidebar.html('<i class="fas fa-chevron-right"></i>');

    // Disclaimer logic
    $closeDisclaimer.on('click', () => $disclaimer.hide());

    // Sidebar logic
    $toggleSidebar.on('click', () => {
        $sidebar.toggleClass('minimized');
        const isMinimized = $sidebar.hasClass('minimized');
        const icon = isMinimized ? 'fa-chevron-left' : 'fa-chevron-right';
        $toggleSidebar.html(`<i class="fas ${icon}"></i>`);
    });

    // Search input handlers
    $searchInput.on('input', function () {
        const query = $(this).val();
        if (query.length < 2 || !$showSuggestions.is(':checked')) {
            $suggestions.hide();
            return;
        }

        const matches = SearchModule.search(query);
        renderSuggestions(matches);
    });

    $searchInput.on('keypress', function (e) {
        if (e.which === 13) {
            submitSearch();
        }
    });

    $submitBtn.on('click', submitSearch);

    $resetSearchBtn.on('click', function () {
        // Clear all tags and highlights
        SearchModule.clearAllTags();
        VisualizationModule.clearHighlights();

        // Clear search input
        $searchInput.val('');
        $suggestions.hide();

        // Reset sidebar
        $sidebarContent.html('<p class="placeholder-text">Click on a node in the graph to view details.</p>');

        // Reset zoom to fit
        VisualizationModule.zoomToFit();
    });

    // Help Modal logic
    $helpBtn.on('click', () => $helpModal.show());
    $closeModal.on('click', () => $helpModal.hide());
    $(window).on('click', (event) => {
        if ($(event.target).is($helpModal)) {
            $helpModal.hide();
        }
    });

    function submitSearch() {
        const query = $searchInput.val();
        const matches = SearchModule.search(query);
        if (matches.length > 0) {
            const item = matches[0].item;
            SearchModule.addTag(item);
            $searchInput.val('');
            $suggestions.hide();
        }
    }

    function renderSuggestions(matches) {
        if (matches.length === 0) {
            $suggestions.hide();
            return;
        }

        $suggestions.empty();
        matches.slice(0, 5).forEach(m => {
            const $item = $(`<div class="suggestion-item">${m.item.name} <small>(${m.item.type})</small></div>`);
            $item.on('click', () => {
                SearchModule.addTag(m.item);
                $searchInput.val('');
                $suggestions.hide();
            });
            $suggestions.append($item);
        });

        $suggestions.show();
    }

    // Global Event Listeners
    $(document).on('tagsChanged', function (e, activeTagIds) {
        VisualizationModule.highlightNodes(activeTagIds);

        if (activeTagIds.length === 0) {
            $sidebarContent.html('<p class="placeholder-text">Click on a node in the graph to view details.</p>');
        }
    });

    $(document).on('nodeClicked', function (e, data) {
        showDetails(data);
    });

    function showDetails(data) {
        $sidebar.removeClass('minimized');
        $toggleSidebar.html('<i class="fas fa-chevron-right"></i>');

        let html = `
            <div class="detail-section">
                <h2>${data.name}</h2>
                <span class="tag tag-${data.type}" style="display:inline-block">${data.type}</span>
                <p>${data.description || 'No description available.'}</p>
            </div>
        `;

        if (data.effects && data.effects.length > 0) {
            html += `
                <div class="detail-section">
                    <h4>Effects & Symptoms</h4>
                    <ul>
                        ${data.effects.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (data.diseases && data.diseases.length > 0) {
            html += `
                <div class="detail-section">
                    <h4>Linked Diseases</h4>
                    <p>${data.diseases.join(', ')}</p>
                </div>
            `;
        }

        if (data.foundIn && data.foundIn.length > 0) {
            html += `
                <div class="detail-section">
                    <h4>Found In / Sprayed On</h4>
                    <p>${data.foundIn.join(', ')}</p>
                </div>
            `;
        }

        if (data.detectionLocations && data.detectionLocations.length > 0) {
            html += `
                <div class="detail-section">
                    <h4>Detected In (Study Locations)</h4>
                    <ul>
                        ${data.detectionLocations.map(loc => {
                            const lines = [];
                            if (loc.place) lines.push(`<strong>${loc.place}</strong>`);
                            if (loc.sample) lines.push(`Sample: ${loc.sample}`);
                            if (loc.year) lines.push(`Year: ${loc.year}`);
                            if (loc.note) lines.push(loc.note);
                            return `<li>${lines.join('<br>')}</li>`;
                        }).join('')}
                    </ul>
                </div>
            `;
        }

        if (data.detection) {
            html += `
                <div class="detail-section">
                    <h4>Detection Methods</h4>
                    ${data.detection.lab ? `<p><strong>Lab:</strong> ${data.detection.lab}</p>` : ''}
                    ${data.detection.home ? `<p><strong>Home:</strong> ${data.detection.home}</p>` : ''}
                </div>
            `;
        }

        if (data.citations && data.citations.length > 0) {
            html += `
                <div class="detail-section">
                    <h4>Citations</h4>
                    <small>
                        ${data.citations.map(c => {
                if (c.startsWith('http')) {
                    return `<p><a href="${c}" target="_blank" style="color: var(--accent-color); word-break: break-all;">${c}</a></p>`;
                }
                return `<p>${c}</p>`;
            }).join('')}
                    </small>
                </div>
            `;
        }

        $sidebarContent.html(html);
    }
});
