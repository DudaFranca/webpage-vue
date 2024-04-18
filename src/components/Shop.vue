<template>
    <section class="shop">
        <div class="shop_symbol">
            <img class="shop_symbol-img" src="../assets/simbolo.png" />
        </div>
        <div class="shop_title">
            <h2 class="shop_title-title font-bold">Shop our favorites</h2>
        </div>
        <div class="shop_products">
            <div class="shop_products-product" v-for="(img, index) in imgs" :key="index">
                <img :src="img.img" class="shop_products-img">
                <p class="shop_products-text">{{ img.title }}</p>
                <p class="shop_products-value">{{ img.value }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const imgs = ref ([
        { img: 'src/assets/1.png', title: 'Round Brass Keyring', value: '$14.00' },
        { img: 'src/assets/2.png', title: 'On the Move Fringe Earrings', value: '$50.00' },
        { img: 'src/assets/3.png', title: 'Arch Dangle Earrings', value: '$50.00' },
        { img: 'src/assets/4.png', title: 'Stud Earrings', value: '$28.00' }
    ]);
</script>
