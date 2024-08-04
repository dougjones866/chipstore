<template>
<div>
    <div v-if="cartItems.length > 0">
      <div
        class="product-container"
        v-for="product in cartItems"
        :key="product.id"
      >
        <img
          class="product-image"
          :src="product.imageName"
          alt="product.name"
        />
        <div class="details-wrap">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
        <button class="remove-button">Remove from Cart</button>
      </div>
      <button class="checkout-button">Proceed to Checkout</button>
    </div>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty!</p>
    </div>

</div>
</template>

<script setup>
import { products } from "../temp-data.js";
import { ref, computed } from "vue";


const props = defineProps({
  cartItems: {
    // type: Number,
    // required: true
  }
});
const cartItem = computed(() => products.find(cartItems => product.id === props.productId));

</script>