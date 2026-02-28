// Levenshtein distance algorithm for string matching
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

const SearchModule = (function () {
    let wordCache = new Map();
    let activeTags = new Set();

    function search(query) {
        if (!query) return [];

        query = query.toLowerCase();
        let matches = [];

        DATA.forEach(item => {
            let score = Infinity;

            // Match name
            const nameScore = calculateMatchScore(query, item.name.toLowerCase());
            score = Math.min(score, nameScore);

            // Match aliases
            if (item.aliases) {
                item.aliases.forEach(alias => {
                    score = Math.min(score, calculateMatchScore(query, alias.toLowerCase()));
                });
            }

            // Match description and effects for symptoms/diseases
            if (item.description && item.description.toLowerCase().includes(query)) {
                score = Math.min(score, 2); // Boost for partial match in description
            }

            if (item.effects) {
                item.effects.forEach(effect => {
                    if (effect.toLowerCase().includes(query)) {
                        score = Math.min(score, 3);
                    }
                });
            }

            if (score < 5 || (query.length > 2 && item.name.toLowerCase().includes(query))) {
                matches.push({ item, score });
            }
        });

        return matches.sort((a, b) => a.score - b.score);
    }

    function calculateMatchScore(query, target) {
        if (target === query) return 0;
        if (target.startsWith(query)) return 1;
        if (target.includes(query)) return 2;
        return levenshteinDistance(query, target);
    }

    function addTag(item) {
        if (activeTags.has(item.id)) return false;
        activeTags.add(item.id);

        const tag = $(`<div class="tag tag-${item.type || 'default'}" data-id="${item.id}" style="background-color: var(--color-${item.type || 'default'})">
            ${item.name}
            <i class="fas fa-times close-tag"></i>
        </div>`);

        // Ensure good contrast for tag text
        const categoryColor = getComputedStyle(document.documentElement).getPropertyValue(`--color-${item.type}`).trim();
        tag.css('color', getContrastColor(categoryColor));

        tag.find('.close-tag').on('click', function () {
            removeTag(item.id);
        });

        $('#active-tags').append(tag);
        $(document).trigger('tagsChanged', [Array.from(activeTags)]);
        return true;
    }

    function removeTag(id) {
        activeTags.delete(id);
        $(`.tag[data-id="${id}"]`).remove();
        $(document).trigger('tagsChanged', [Array.from(activeTags)]);
    }

    function getContrastColor(hexColor) {
        if (!hexColor || hexColor === 'transparent') return '#000';

        // Simple YIQ brightness check
        let r, g, b;
        if (hexColor.startsWith('#')) {
            const hex = hexColor.slice(1);
            r = parseInt(hex.substr(0, 2), 16);
            g = parseInt(hex.substr(2, 2), 16);
            b = parseInt(hex.substr(4, 2), 16);
        } else if (hexColor.startsWith('rgb')) {
            const matches = hexColor.match(/\d+/g);
            r = matches[0]; g = matches[1]; b = matches[2];
        } else {
            return '#000';
        }

        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? '#000' : '#fff';
    }

    return {
        search,
        addTag,
        removeTag,
        getActiveTags: () => Array.from(activeTags)
    };
})();
