<template>
    <section>
        <h1>{{ users.name }}</h1> <hr>
        <h3>{{ users.email }}</h3>
    </section>
</template>

<script>
export default {
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    async asyncData({ $axios, params }) {
        const _url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
        const users = await $axios.$get(_url);
        return { users };
    }
}
</script>