import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3802277e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a4b2e150 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _552dd8e5 = () => interopDefault(import('../pages/Products.vue' /* webpackChunkName: "pages/Products" */))
const _658fda32 = () => interopDefault(import('../pages/warehouse.vue' /* webpackChunkName: "pages/warehouse" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fr",
    component: _3802277e,
    name: "index___fr"
  }, {
    path: "/it",
    component: _3802277e,
    name: "index___it"
  }, {
    path: "/login",
    component: _a4b2e150,
    name: "login___en"
  }, {
    path: "/Products",
    component: _552dd8e5,
    name: "Products___en"
  }, {
    path: "/warehouse",
    component: _658fda32,
    name: "warehouse___en"
  }, {
    path: "/fr/login",
    component: _a4b2e150,
    name: "login___fr"
  }, {
    path: "/fr/Products",
    component: _552dd8e5,
    name: "Products___fr"
  }, {
    path: "/fr/warehouse",
    component: _658fda32,
    name: "warehouse___fr"
  }, {
    path: "/it/login",
    component: _a4b2e150,
    name: "login___it"
  }, {
    path: "/it/Products",
    component: _552dd8e5,
    name: "Products___it"
  }, {
    path: "/it/warehouse",
    component: _658fda32,
    name: "warehouse___it"
  }, {
    path: "/",
    component: _3802277e,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
