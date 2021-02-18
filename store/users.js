export const state = () => ({
    users: []
});

export const mutations = {
    setUsers( state, users ) {
        state.users = users
    }
};

export const actions = {
    async fetch({ commit }) {
        const _url = `https://jsonplaceholder.typicode.com/users`;
        const users = await this.$axios.$get(_url);
        commit('setUsers', users);
    }
};

export const getters = {
    users: s => s.users
};