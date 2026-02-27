const SearchCache = {
    store: {},
    maxSize: 50,

    get(query) {
        return this.store[query];
    },

    set(query, results) {
        if (Object.keys(this.store).length > this.maxSize) {
            delete this.store[Object.keys(this.store)[0]];
        }
        this.store[query] = results;
    }
};
