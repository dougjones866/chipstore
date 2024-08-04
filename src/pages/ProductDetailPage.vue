<template>
  <div>
    <div v-if="product">
      <div class="img-wrap">
        <img :src="product.imageName" alt="product.name" />
      </div>
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h2>{{ product.description }}</h2>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart">Add to cart</button>
      </div>
    </div>
    <div v-if="!product">
      <NotFoundPageVue />
    </div>
  </div>
</template>

<script setup>
import { products } from "../temp-data.js";
import { ref } from "vue";
import { useRoute } from "vue-router";
import NotFoundPageVue from "./NotFoundPage.vue";

const route = useRoute();
const product = ref(
  products.find((product) => product.id === route.params.productId)
);
</script>
