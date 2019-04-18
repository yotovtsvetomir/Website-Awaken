exports.ids = [5];
exports.modules = {

/***/ "p82T":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"idea":"idea__1btec","idea_title":"idea_title__2EHj9","idea_link":"idea_link__bwMzZ"};

/***/ }),

/***/ "yQQQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/Idea.css
var components_Idea = __webpack_require__("p82T");
var Idea_default = /*#__PURE__*/__webpack_require__.n(components_Idea);

// CONCATENATED MODULE: ./components/Idea.js





var Idea_Idea = function Idea(_ref) {
  var image = _ref.image,
      linkid = _ref.linkid,
      title = _ref.title,
      color = _ref.color;
  return Object(preact_min["h"])(
    'div',
    { className: Idea_default.a.idea, style: { backgroundImage: 'url(' + image + ')', borderColor: '' + color } },
    Object(preact_min["h"])(
      match["Link"],
      { className: Idea_default.a.idea_link, href: linkid },
      Object(preact_min["h"])(
        'h2',
        { className: Idea_default.a.idea_title, style: { background: '' + color } },
        title
      )
    )
  );
};

/* harmony default export */ var components_Idea_0 = (Idea_Idea);
// EXTERNAL MODULE: ../node_modules/react-meta-tags/lib/index.js
var lib = __webpack_require__("UD6h");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/CurrentSituation.js





var ws = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582650/allawaken/cs.jpg";
var env = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582651/allawaken/env.jpg";
var lies = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582652/allawaken/lies.jpg";
var war = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582654/allawaken/war.jpg";
var poverty = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582653/allawaken/poverty.jpg";

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

var CurrentSituation__ref = Object(preact_min["h"])(
  'div',
  { className: 'ideas' },
  Object(preact_min["h"])(
    lib_default.a,
    null,
    Object(preact_min["h"])(
      'title',
      null,
      'Current Situation in the system'
    ),
    Object(preact_min["h"])('meta', { name: 'description', content: 'Learn more about Wage Slavery, Environment, Media Manipulation, War and Poverty worldwide.' }),
    Object(preact_min["h"])('meta', { property: 'og:title', content: 'Current Situation in the system' }),
    Object(preact_min["h"])('meta', { property: 'og:description', content: 'Learn more about Wage Slavery, Environment, Media Manipulation, War and Poverty worldwide.' }),
    Object(preact_min["h"])('meta', { property: 'og:type', content: 'website' }),
    Object(preact_min["h"])('meta', { property: 'og:url', content: 'https://www.allawaken.com/current_situation' }),
    Object(preact_min["h"])('meta', { property: 'og:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/blacklogo.jpg' }),
    Object(preact_min["h"])('meta', { property: 'fb:app_id', content: '1118435171656958' })
  ),
  Object(preact_min["h"])(
    'div',
    { className: 'shell' },
    Object(preact_min["h"])(
      'h2',
      { className: 'ideas_title' },
      'Current Situation'
    ),
    Object(preact_min["h"])(
      'div',
      { className: 'ideas_container' },
      Object(preact_min["h"])(components_Idea_0, { image: ws, color: primaryRed, linkid: '/current-situation/wage-slavery', title: 'Wage Slavery' }),
      Object(preact_min["h"])(components_Idea_0, { image: env, color: primaryYellow, linkid: '/current-situation/environment', title: 'Environment' }),
      Object(preact_min["h"])(components_Idea_0, { image: lies, color: primaryGreen, linkid: '/current-situation/media', title: 'Media' })
    ),
    Object(preact_min["h"])(
      'div',
      { className: 'ideas_container2' },
      Object(preact_min["h"])(components_Idea_0, { image: war, color: blueGrey, linkid: '/current-situation/war', title: 'War' }),
      Object(preact_min["h"])(components_Idea_0, { image: poverty, color: primaryBlue, linkid: '/current-situation/poverty', title: 'Poverty' })
    )
  )
);

var CurrentSituation = function CurrentSituation() {
  return CurrentSituation__ref;
};

/* harmony default export */ var components_CurrentSituation = __webpack_exports__["default"] = (CurrentSituation);

/***/ })

};;
//# sourceMappingURL=5.chunk.f98f2.js.map