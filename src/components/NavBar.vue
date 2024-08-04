<template>
    <div class="nav-bar">
        <router-link to="/product" class="products-link">
            <div class="logo-wrap">
                <img :src="logoImg" alt="logo" />
            </div>

        </router-link>
        <router-link to="/cart" class="cart-link">
            <button>Shopping Cart</button>
        </router-link>
        
    </div>
</template>

<script setup>
import { ref } from "vue";
import logo from "../assets/logo.png";

const logoImg = ref(logo);

</script>

<style scoped>


</style>