exports.ids = [6];
exports.modules = {

/***/ "2Zki":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"awaken":"awaken__3q2pb","awaken_decor":"awaken_decor__3cS2g","awaken_content":"awaken_content__2s2bm","awaken_link":"awaken_link__3RpCW","awaken_title":"awaken_title__idwdl"};

/***/ }),

/***/ "FQDb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/Awaken.css
var components_Awaken = __webpack_require__("2Zki");
var Awaken_default = /*#__PURE__*/__webpack_require__.n(components_Awaken);

// CONCATENATED MODULE: ./components/Awaken.js





var Awaken_Awaken = function Awaken(_ref) {
  var image = _ref.image,
      linkid = _ref.linkid,
      title = _ref.title,
      color = _ref.color;
  return Object(preact_min["h"])(
    'div',
    { className: Awaken_default.a.awaken, style: { backgroundImage: 'url(' + image + ')' } },
    Object(preact_min["h"])('div', { className: Awaken_default.a.awaken_decor, style: { background: '' + color } }),
    Object(preact_min["h"])(
      match["Link"],
      { className: Awaken_default.a.awaken_link, href: linkid },
      Object(preact_min["h"])(
        'div',
        { className: Awaken_default.a.awaken_content },
        Object(preact_min["h"])(
          'h3',
          { className: Awaken_default.a.awaken_title },
          title
        )
      )
    )
  );
};

/* harmony default export */ var components_Awaken_0 = (Awaken_Awaken);
// EXTERNAL MODULE: ../node_modules/react-meta-tags/lib/index.js
var lib = __webpack_require__("UD6h");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/AllAwaken.js





var allawaken = "https://res.cloudinary.com/awaken/image/upload/v1548582649/portal/avatar.webp";
var change = "https://res.cloudinary.com/awaken/image/upload/v1548582653/allawaken/plan.jpg";
var freedom = "https://res.cloudinary.com/awaken/image/upload/v1548582650/allawaken/code.jpg";
var jjoin = "https://res.cloudinary.com/awaken/image/upload/v1548582652/allawaken/joinn.jpg";

var primaryRed = "#e53935";
var secondaryRed = "#ffebee";

var primaryBlue = "#1e88e5";
var secondaryBlue = "#bbdefb";

var primaryGreen = "#43a047";
var secondaryGreen = "#e8f5e9";

var primaryYellow = "#fbc02d";
var secondaryYellow = "#fffde7";

var primaryGrey = "#eee";
var primaryWhite = "#fff";
var blueGrey = "#202124";

var AllAwaken__ref = Object(preact_min["h"])(
  'div',
  { className: 'wrap' },
  Object(preact_min["h"])(
    lib_default.a,
    null,
    Object(preact_min["h"])(
      'title',
      null,
      'All Awaken - Vision and Mission'
    ),
    Object(preact_min["h"])('meta', { name: 'description', content: 'Learn more about who we are, what is the plan, what is our code and how to join us.' }),
    Object(preact_min["h"])('meta', { property: 'og:title', content: 'All Awaken - Vision and Mission' }),
    Object(preact_min["h"])('meta', { property: 'og:description', content: 'Learn more about who we are, what is the plan, what is our code and how to join us.' }),
    Object(preact_min["h"])('meta', { property: 'og:type', content: 'website' }),
    Object(preact_min["h"])('meta', { property: 'og:url', content: 'https://www.allawaken.com/awaken' }),
    Object(preact_min["h"])('meta', { property: 'og:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/4795.jpg' }),
    Object(preact_min["h"])('meta', { property: 'fb:app_id', content: '1118435171656958' })
  ),
  Object(preact_min["h"])(
    'div',
    { className: 'shell' },
    Object(preact_min["h"])('h2', { className: 'ideas_title' }),
    Object(preact_min["h"])(
      'div',
      { className: 'awakens' },
      Object(preact_min["h"])(
        'div',
        { className: 'awaholder' },
        Object(preact_min["h"])(components_Awaken_0, { image: allawaken, linkid: '/awaken/whoweare', title: 'Who we are', color: primaryBlue })
      ),
      Object(preact_min["h"])(
        'div',
        { className: 'awaholder' },
        Object(preact_min["h"])(components_Awaken_0, { image: change, linkid: '/awaken/theplan', title: 'The Plan', color: primaryYellow })
      ),
      Object(preact_min["h"])(
        'div',
        { className: 'awaholder' },
        Object(preact_min["h"])(components_Awaken_0, { image: freedom, linkid: '/awaken/code', title: 'Code', color: primaryRed })
      ),
      Object(preact_min["h"])(
        'div',
        { className: 'awaholder' },
        Object(preact_min["h"])(components_Awaken_0, { image: jjoin, linkid: '/awaken/join', title: 'Join', color: primaryGreen })
      )
    )
  )
);

var AllAwaken = function AllAwaken() {
  return AllAwaken__ref;
};

/* harmony default export */ var components_AllAwaken = __webpack_exports__["default"] = (AllAwaken);

/***/ })

};;
//# sourceMappingURL=6.chunk.3bb7a.js.map