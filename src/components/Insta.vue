<template>
    <section class="insta">
        <div class="insta_atSign">
            <h3>@wearetumble</h3>
        </div>
        <div class="insta_imgs">
            <div class="insta_imgs-img" v-for="(img, index) in imgs" :key="index">
                <img :src="img.img">
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const imgs = ref ([
        { img: 'src/assets/insta-1.png' },
        { img: 'src/assets/insta-2.png' },
        { img: 'src/assets/insta-3.png' },
        { img: 'src/assets/insta-4.png' },
        { img: 'src/assets/insta-5.png' },
        { img: 'src/assets/insta-6.png' },
        { img: 'src/assets/insta-7.png' },
    ]);
</script>