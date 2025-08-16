
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-XHCFCXXZ.js",
      "chunk-CBSC4RTL.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4TETKK6E.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/accounts/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CF5SKPI6.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/accounts/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WKJ2DPV7.js",
      "chunk-CBSC4RTL.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/patient"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WKJ2DPV7.js",
      "chunk-CBSC4RTL.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/patient/profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WKJ2DPV7.js",
      "chunk-CBSC4RTL.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/patient/portal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WKJ2DPV7.js",
      "chunk-CBSC4RTL.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/patient/profile-details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WKJ2DPV7.js",
      "chunk-CBSC4RTL.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "route": "/patient/consultation-details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WKJ2DPV7.js",
      "chunk-CBSC4RTL.js",
      "chunk-QKCMVC7O.js",
      "chunk-IH6XRI2Y.js"
    ],
    "redirectTo": "/patient/patient/portal",
    "route": "/patient/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12167, hash: '28ad94141fc8787c811af63c55d2d9575816d1d356cdcd035fd3642ea334da12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7778, hash: '812d9d37eeda334c2f5618a5ad10ad5d4625038b4d2b94bb2daaa2e8c5b4a4e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'accounts/login/index.html': {size: 24707, hash: '14d9b04a85cbe5942597e10a97aa3512df3868b81266dc4b5d8ff4cd0b8e56cb', text: () => import('./assets-chunks/accounts_login_index_html.mjs').then(m => m.default)},
    'patient/portal/index.html': {size: 33958, hash: '3a22d86fee0b1ed718d5cae23b18eb09bf506cabed22d8f647d2d608fa80171c', text: () => import('./assets-chunks/patient_portal_index_html.mjs').then(m => m.default)},
    'accounts/register/index.html': {size: 24246, hash: 'c61a2e087d7ded1cb3ecaabe86d7ad56cd0bfa6002cacef68342c8dac13d1271', text: () => import('./assets-chunks/accounts_register_index_html.mjs').then(m => m.default)},
    'patient/index.html': {size: 20724, hash: 'e4ef29ae2b7282ee47f7e0b24645749d500ad6ece6086a2fe8b2c2f79dbc4eaf', text: () => import('./assets-chunks/patient_index_html.mjs').then(m => m.default)},
    'patient/profile/index.html': {size: 24937, hash: '5890bb39d95e06336231ee0f75357d3845e37670f15e3a3a4195d9157849d8c7', text: () => import('./assets-chunks/patient_profile_index_html.mjs').then(m => m.default)},
    'patient/profile-details/index.html': {size: 33353, hash: 'af1242826cbd8cab292408d4f879df9069b22d73011e44fba7f63fb5d627a4fd', text: () => import('./assets-chunks/patient_profile-details_index_html.mjs').then(m => m.default)},
    'styles-GCPKOHA7.css': {size: 316829, hash: 'urosGMVUyf8', text: () => import('./assets-chunks/styles-GCPKOHA7_css.mjs').then(m => m.default)}
  },
};
