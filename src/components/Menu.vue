<template>
    <section class="menu">
        <div class="menu_title">tumbler</div>
        <div class="menu_itens flex justify-center">
            <ul class="grid grid-cols-5 max-w-md text-center">
                <li v-for="(link, index) in links" :key="index" style="padding-right: 0;">
                    {{ link }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const links = ref ([
        "tumble club",
        "shop",
        "about",
        "contact",
        "stockists",
    ]);
</script>

