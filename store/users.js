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
        const _url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
        const users = await $axios.$get(_url);
        commit('setUsers', users);
    }
};

export const getters = {
    users: s => s.state
};