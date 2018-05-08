import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _74a05b82 = () => import('..\\example\\pages\\header.vue' /* webpackChunkName: "pages_header" */).then(m => m.default || m)
const _664fe862 = () => import('..\\example\\pages\\top-tips.vue' /* webpackChunkName: "pages_top-tips" */).then(m => m.default || m)
const _726dc66a = () => import('..\\example\\pages\\popup.vue' /* webpackChunkName: "pages_popup" */).then(m => m.default || m)
const _1c0a876d = () => import('..\\example\\pages\\loadmore.vue' /* webpackChunkName: "pages_loadmore" */).then(m => m.default || m)
const _3b1dfb66 = () => import('..\\example\\pages\\switch.vue' /* webpackChunkName: "pages_switch" */).then(m => m.default || m)
const _0dba2b5e = () => import('..\\example\\pages\\datetime-picker.vue' /* webpackChunkName: "pages_datetime-picker" */).then(m => m.default || m)
const _694609ec = () => import('..\\example\\pages\\textarea.vue' /* webpackChunkName: "pages_textarea" */).then(m => m.default || m)
const _4552c1d8 = () => import('..\\example\\pages\\icons.vue' /* webpackChunkName: "pages_icons" */).then(m => m.default || m)
const _7760410c = () => import('..\\example\\pages\\lazyload.vue' /* webpackChunkName: "pages_lazyload" */).then(m => m.default || m)
const _ab818a1e = () => import('..\\example\\pages\\form-preview.vue' /* webpackChunkName: "pages_form-preview" */).then(m => m.default || m)
const _0b32635f = () => import('..\\example\\pages\\progress.vue' /* webpackChunkName: "pages_progress" */).then(m => m.default || m)
const _0d9ad302 = () => import('..\\example\\pages\\circle.vue' /* webpackChunkName: "pages_circle" */).then(m => m.default || m)
const _415e90e0 = () => import('..\\example\\pages\\tabbar.vue' /* webpackChunkName: "pages_tabbar" */).then(m => m.default || m)
const _6387fca0 = () => import('..\\example\\pages\\search-bar.vue' /* webpackChunkName: "pages_search-bar" */).then(m => m.default || m)
const _b7052366 = () => import('..\\example\\pages\\footer.vue' /* webpackChunkName: "pages_footer" */).then(m => m.default || m)
const _3b38782b = () => import('..\\example\\pages\\flex.vue' /* webpackChunkName: "pages_flex" */).then(m => m.default || m)
const _5d532a39 = () => import('..\\example\\pages\\radio.vue' /* webpackChunkName: "pages_radio" */).then(m => m.default || m)
const _65303c64 = () => import('..\\example\\pages\\button.vue' /* webpackChunkName: "pages_button" */).then(m => m.default || m)
const _432f9242 = () => import('..\\example\\pages\\navbar.vue' /* webpackChunkName: "pages_navbar" */).then(m => m.default || m)
const _0579d10c = () => import('..\\example\\pages\\dialog.vue' /* webpackChunkName: "pages_dialog" */).then(m => m.default || m)
const _4fbbd7d7 = () => import('..\\example\\pages\\spinner.vue' /* webpackChunkName: "pages_spinner" */).then(m => m.default || m)
const _b25e9336 = () => import('..\\example\\pages\\toast.vue' /* webpackChunkName: "pages_toast" */).then(m => m.default || m)
const _3ecaf3c2 = () => import('..\\example\\pages\\panel.vue' /* webpackChunkName: "pages_panel" */).then(m => m.default || m)
const _0b721764 = () => import('..\\example\\pages\\checklist.vue' /* webpackChunkName: "pages_checklist" */).then(m => m.default || m)
const _c6dbb5d8 = () => import('..\\example\\pages\\cell.vue' /* webpackChunkName: "pages_cell" */).then(m => m.default || m)
const _f2af667e = () => import('..\\example\\pages\\cell-swipe.vue' /* webpackChunkName: "pages_cell-swipe" */).then(m => m.default || m)
const _063422f0 = () => import('..\\example\\pages\\input.vue' /* webpackChunkName: "pages_input" */).then(m => m.default || m)
const _15159de1 = () => import('..\\example\\pages\\badge.vue' /* webpackChunkName: "pages_badge" */).then(m => m.default || m)
const _0d2deb14 = () => import('..\\example\\pages\\404.vue' /* webpackChunkName: "pages_404" */).then(m => m.default || m)
const _09c9e080 = () => import('..\\example\\pages\\picker.vue' /* webpackChunkName: "pages_picker" */).then(m => m.default || m)
const _bd33ed72 = () => import('..\\example\\pages\\number-spinner.vue' /* webpackChunkName: "pages_number-spinner" */).then(m => m.default || m)
const _1a54c410 = () => import('..\\example\\pages\\swipe.vue' /* webpackChunkName: "pages_swipe" */).then(m => m.default || m)
const _dc7fc2da = () => import('..\\example\\pages\\slider.vue' /* webpackChunkName: "pages_slider" */).then(m => m.default || m)
const _338ed610 = () => import('..\\example\\pages\\grid.vue' /* webpackChunkName: "pages_grid" */).then(m => m.default || m)
const _24e38c38 = () => import('..\\example\\pages\\infinite-scroll.vue' /* webpackChunkName: "pages_infinite-scroll" */).then(m => m.default || m)
const _534968b2 = () => import('..\\example\\pages\\actionsheet.vue' /* webpackChunkName: "pages_actionsheet" */).then(m => m.default || m)
const _6705fb90 = () => import('..\\example\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/header",
			component: _74a05b82,
			name: "header"
		},
		{
			path: "/top-tips",
			component: _664fe862,
			name: "top-tips"
		},
		{
			path: "/popup",
			component: _726dc66a,
			name: "popup"
		},
		{
			path: "/loadmore",
			component: _1c0a876d,
			name: "loadmore"
		},
		{
			path: "/switch",
			component: _3b1dfb66,
			name: "switch"
		},
		{
			path: "/datetime-picker",
			component: _0dba2b5e,
			name: "datetime-picker"
		},
		{
			path: "/textarea",
			component: _694609ec,
			name: "textarea"
		},
		{
			path: "/icons",
			component: _4552c1d8,
			name: "icons"
		},
		{
			path: "/lazyload",
			component: _7760410c,
			name: "lazyload"
		},
		{
			path: "/form-preview",
			component: _ab818a1e,
			name: "form-preview"
		},
		{
			path: "/progress",
			component: _0b32635f,
			name: "progress"
		},
		{
			path: "/circle",
			component: _0d9ad302,
			name: "circle"
		},
		{
			path: "/tabbar",
			component: _415e90e0,
			name: "tabbar"
		},
		{
			path: "/search-bar",
			component: _6387fca0,
			name: "search-bar"
		},
		{
			path: "/footer",
			component: _b7052366,
			name: "footer"
		},
		{
			path: "/flex",
			component: _3b38782b,
			name: "flex"
		},
		{
			path: "/radio",
			component: _5d532a39,
			name: "radio"
		},
		{
			path: "/button",
			component: _65303c64,
			name: "button"
		},
		{
			path: "/navbar",
			component: _432f9242,
			name: "navbar"
		},
		{
			path: "/dialog",
			component: _0579d10c,
			name: "dialog"
		},
		{
			path: "/spinner",
			component: _4fbbd7d7,
			name: "spinner"
		},
		{
			path: "/toast",
			component: _b25e9336,
			name: "toast"
		},
		{
			path: "/panel",
			component: _3ecaf3c2,
			name: "panel"
		},
		{
			path: "/checklist",
			component: _0b721764,
			name: "checklist"
		},
		{
			path: "/cell",
			component: _c6dbb5d8,
			name: "cell"
		},
		{
			path: "/cell-swipe",
			component: _f2af667e,
			name: "cell-swipe"
		},
		{
			path: "/input",
			component: _063422f0,
			name: "input"
		},
		{
			path: "/badge",
			component: _15159de1,
			name: "badge"
		},
		{
			path: "/404",
			component: _0d2deb14,
			name: "404"
		},
		{
			path: "/picker",
			component: _09c9e080,
			name: "picker"
		},
		{
			path: "/number-spinner",
			component: _bd33ed72,
			name: "number-spinner"
		},
		{
			path: "/swipe",
			component: _1a54c410,
			name: "swipe"
		},
		{
			path: "/slider",
			component: _dc7fc2da,
			name: "slider"
		},
		{
			path: "/grid",
			component: _338ed610,
			name: "grid"
		},
		{
			path: "/infinite-scroll",
			component: _24e38c38,
			name: "infinite-scroll"
		},
		{
			path: "/actionsheet",
			component: _534968b2,
			name: "actionsheet"
		},
		{
			path: "/",
			component: _6705fb90,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
