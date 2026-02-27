// js/search.js

const SearchEngine = {

    normalize(str) {
        return str.toLowerCase().trim();
    },

    scoreMatch(query, text) {
        const distance = levenshtein(query, text);
        return distance / Math.max(query.length, text.length);
    },

    search(query) {
        query = this.normalize(query);
        if (!query || !DataStore.loaded) return [];

        const cached = SearchCache.get(query);
        if (cached) return cached;

        const results = [];

        DataStore.nodes.forEach(node => {
            let bestScore = Infinity;

            const fields = [
                node.name,
                ...(node.aliases || []),
                ...(node.body_effects || [])
            ];

            fields.forEach(field => {
                if (!field) return;
                const score = this.scoreMatch(query, this.normalize(field));
                if (score < bestScore) bestScore = score;
            });

            if (bestScore < 0.6) {
                results.push({ node, score: bestScore });
            }
        });

        results.sort((a, b) => a.score - b.score);

        SearchCache.set(query, results);
        return results;
    }

};
