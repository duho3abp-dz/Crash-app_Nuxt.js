<template>
    <section>
        <h1>{{ pageName }}</h1>

        <ul>
            <li v-for="user of users" :key="user.id">
                <a href="#" @click.prevent="openUser(user.id)">{{ user.name }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const _url = 'https://jsonplaceholder.typicode.com/users';
        const users = await $axios.$get(_url);
        return { users };
    },
    data: () => ({
        pageName: 'Users Page'
    }),
    methods: {
        openUser(user) {
            this.$router.push(`/users/${ user }`);
        }
    }
}
</script>