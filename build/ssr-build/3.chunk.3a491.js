exports.ids = [3];
exports.modules = {

/***/ "B+SU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/Goal.css
var components_Goal = __webpack_require__("M335");
var Goal_default = /*#__PURE__*/__webpack_require__.n(components_Goal);

// CONCATENATED MODULE: ./components/Goal.js





var Goal_Goal = function Goal(_ref) {
  var desc = _ref.desc,
      image = _ref.image,
      linkid = _ref.linkid,
      title = _ref.title,
      color = _ref.color;
  return Object(preact_min["h"])(
    'div',
    { className: Goal_default.a.goal },
    Object(preact_min["h"])(
      match["Link"],
      { className: Goal_default.a.goal_link, href: linkid },
      Object(preact_min["h"])(
        'div',
        { className: Goal_default.a.goal_content, style: { background: '' + color } },
        Object(preact_min["h"])(
          'h3',
          { className: Goal_default.a.goal_title },
          title
        ),
        Object(preact_min["h"])(
          'p',
          null,
          desc
        )
      ),
      Object(preact_min["h"])('div', { className: Goal_default.a.goal_image, style: { backgroundImage: 'url(' + image + ')' } })
    )
  );
};

/* harmony default export */ var components_Goal_0 = (Goal_Goal);
// EXTERNAL MODULE: ../node_modules/react-meta-tags/lib/index.js
var lib = __webpack_require__("UD6h");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/Goals.js





var unity = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/flags.png";
var light = "https://res.cloudinary.com/awaken/image/upload/v1548582652/allawaken/light.jpg";
var system = "https://res.cloudinary.com/awaken/image/upload/v1548582652/allawaken/thesystem.jpg";

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

var Goals__ref = Object(preact_min["h"])(
  'div',
  { className: 'wrap' },
  Object(preact_min["h"])(
    lib_default.a,
    null,
    Object(preact_min["h"])(
      'title',
      null,
      'All Awaken - Goals'
    ),
    Object(preact_min["h"])('meta', { name: 'description', content: 'Our main goals are to unite all activists, reveal the truth and change the system.' }),
    Object(preact_min["h"])('meta', { property: 'og:title', content: 'All Awaken - Goals' }),
    Object(preact_min["h"])('meta', { property: 'og:description', content: 'Our main goals are to unite all activists, reveal the truth and change the system.' }),
    Object(preact_min["h"])('meta', { property: 'og:type', content: 'website' }),
    Object(preact_min["h"])('meta', { property: 'og:url', content: 'https://www.allawaken.com/goals' }),
    Object(preact_min["h"])('meta', { property: 'og:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/4795.jpg' }),
    Object(preact_min["h"])('meta', { property: 'fb:app_id', content: '1118435171656958' })
  ),
  Object(preact_min["h"])(
    'div',
    { className: 'shell' },
    Object(preact_min["h"])(
      'h2',
      { className: 'ideas_title' },
      'Goals'
    ),
    Object(preact_min["h"])(
      'div',
      { className: 'goals' },
      Object(preact_min["h"])(components_Goal_0, { image: unity, linkid: '/goals/united-activists', color: primaryGreen, title: 'Unite all activists', desc: 'Unite all likeminded people around the world who are fighting to change the system.' }),
      Object(preact_min["h"])(components_Goal_0, { image: light, linkid: '/goals/revealing-truth', color: primaryYellow, title: 'Revealing the truth', desc: 'Recongizing the problem is the first step.' }),
      Object(preact_min["h"])(components_Goal_0, { image: system, linkid: '/goals/system-change', color: primaryRed, title: 'Change the system', desc: 'Enough of the injustice and pain' })
    )
  )
);

var Goals = function Goals() {
  return Goals__ref;
};

/* harmony default export */ var components_Goals = __webpack_exports__["default"] = (Goals);

/***/ }),

/***/ "M335":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"goal":"goal__2Xg51","goal_content":"goal_content__Y6CC4","goal_image":"goal_image__31SzH","goal_link":"goal_link__2xj_m","goal_title":"goal_title__269fS"};

/***/ })

};;
//# sourceMappingURL=3.chunk.3a491.js.map