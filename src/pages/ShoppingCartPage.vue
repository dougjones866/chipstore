<template>
  <div>
    <h1>Shopping Cart</h1>
    <ShoppingCartList :cartItems="cartItem" />
  </div>
</template>

<script setup>
import ShoppingCartList from "../components/ShoppingCartList.vue";
import { ref } from "vue";
import { cartItems } from "../temp-data.js";

const cartItem = ref(cartItems);
</script>
