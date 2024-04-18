<template>
    <div class="footer">
        <div class="footer_container">
            <h3 class="footer_container-title">
                About us
            </h3>
            <div class="footer_container-line"></div>
            <ul class="footer_container-menu" v-for="(link, index) in links" :key="index">
                <li><a href="#">{{ link.title }}</a></li>
            </ul>
        </div>
        <div class="footer_container">
            <h3 class="footer_container-title">
                Always do good
            </h3>
            <div class="footer_container-line"></div>
            <p>Our feet are deeply planted in our local community. We use our resources to empower & employ local women to break through generational cycles of abuse, oppression, and hardship.</p>
            <button class="footer_container-btn">give back</button>
        </div>
        <div class="footer_container">
            <h3 class="footer_container-title">
                Join the tumble tribe
            </h3>
            <p>Sign up to receive updates from our studio, promotions, and sneak peaks of upcoming products.</p>
            <p>Email Adress *</p>
            <input class="footer_container-input" type="email">
            <button class="footer_container-inputBtn">JOIN</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const links = ref ([
        { title: 'Our story' },
        { title: 'Stockist' },
        { title: 'Shipping & Returns' },
        { title: 'Wholesale enquiries' }
    ])
</script>