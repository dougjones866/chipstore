import { createRouter, createWebHistory } from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
// import Home from "./pages/Home.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //     path: '/',
    //     component: Home,
    // },
    {
      path: "/cart",
      component: ShoppingCartPage,
    },
    {
      path: "/product",
      component: ProductsPage,
    },
    {
      path: "/product/:productId",
      component: ProductDetailPage,
    },
    {
      path: "/:notFound(.*)*",
      component: NotFoundPage,
    },
  ],
});

export default router;
