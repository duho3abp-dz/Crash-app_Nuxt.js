<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">Nuxt SSR</nuxt-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" no-prefetch class="nav-link" to="/about">About</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" no-prefetch class="nav-link" to="/users">Users</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link active-class="active" no-prefetch class="nav-link" to="/login">Login</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
</template>