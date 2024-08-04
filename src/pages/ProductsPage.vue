<template>
    <div>
        <h1>Products</h1>
        <ProductsList :products="product" />
    </div>
</template>

<script setup>
import { products } from '../temp-data.js'
import ProductsList from '../components/ProductsList.vue'
import { ref } from 'vue';

const product = ref(products);

</script>

