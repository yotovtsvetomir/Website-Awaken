exports.ids = [1];
exports.modules = {

/***/ "MCwf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/Syscard.css
var components_Syscard = __webpack_require__("Zb2Z");
var Syscard_default = /*#__PURE__*/__webpack_require__.n(components_Syscard);

// CONCATENATED MODULE: ./components/Syscard.js





var Syscard_Syscard = function Syscard(_ref) {
  var img = _ref.img,
      linkid = _ref.linkid,
      title = _ref.title,
      desc = _ref.desc,
      color = _ref.color,
      secolor = _ref.secolor;
  return Object(preact_min["h"])(
    'div',
    { className: Syscard_default.a.syscard },
    Object(preact_min["h"])(
      match["Link"],
      { href: linkid },
      Object(preact_min["h"])(
        'div',
        { className: Syscard_default.a.syscard_container, style: { background: '' + secolor } },
        Object(preact_min["h"])('div', { className: Syscard_default.a.syscard_img, style: { backgroundImage: 'url(' + img + ')' } }),
        Object(preact_min["h"])(
          'div',
          { className: Syscard_default.a.syscard_content },
          Object(preact_min["h"])(
            'h3',
            { className: Syscard_default.a.syscard_title, style: { background: '' + color } },
            title
          ),
          Object(preact_min["h"])(
            'p',
            { className: Syscard_default.a.syscard_p },
            desc
          )
        )
      )
    )
  );
};

/* harmony default export */ var components_Syscard_0 = (Syscard_Syscard);
// EXTERNAL MODULE: ../node_modules/react-meta-tags/lib/index.js
var lib = __webpack_require__("UD6h");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/TheSystem.js





var economics = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/economics.jpg";
var politics = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/politics.jpg";
var media = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/media.jpg";
var education = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/education.jpg";

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

var TheSystem__ref = Object(preact_min["h"])(
  'div',
  { className: 'wrap' },
  Object(preact_min["h"])(
    lib_default.a,
    null,
    Object(preact_min["h"])(
      'title',
      null,
      'How the world system works?'
    ),
    Object(preact_min["h"])('meta', { name: 'description', content: 'The world system is everwhere and it is the same for each and everyone of us. It is built on 4 major parts - they are economics, politics, media and education. This system unites 99% of the population on Earth.' }),
    Object(preact_min["h"])('meta', { property: 'og:title', content: 'How the world system works?' }),
    Object(preact_min["h"])('meta', { property: 'og:description', content: 'The world system is everwhere and it is the same for each and everyone of us. It is built on 4 major parts - they are economics, politics, media and education. This system unites 99% of the population on Earth.' }),
    Object(preact_min["h"])('meta', { property: 'og:type', content: 'website' }),
    Object(preact_min["h"])('meta', { property: 'og:url', content: 'https://www.allawaken.com/the_system' }),
    Object(preact_min["h"])('meta', { property: 'og:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/blacklogo.jpg' }),
    Object(preact_min["h"])('meta', { property: 'fb:app_id', content: '1118435171656958' })
  ),
  Object(preact_min["h"])(
    'div',
    { className: 'shell' },
    Object(preact_min["h"])(
      'h2',
      { className: 'ideas_title' },
      'The System'
    ),
    Object(preact_min["h"])(
      'h5',
      { className: 'text-headline sysubtitle' },
      'The world system is everwhere and it is the same for each and everyone of us. It is built on 4 major parts - they are economics, politics, media and education. This system unites 99% of the population on Earth.'
    ),
    Object(preact_min["h"])(
      'div',
      { className: 'syscards' },
      Object(preact_min["h"])(
        'div',
        { className: 'sysholder' },
        Object(preact_min["h"])(components_Syscard_0, { img: economics, secolor: secondaryRed, color: primaryRed, linkid: '/the-system/economics', title: 'Economics', desc: 'Every single country has a national debt. The strongest economies have the largest debt. Who do they owe to?' })
      ),
      Object(preact_min["h"])(
        'div',
        { className: 'sysholder' },
        Object(preact_min["h"])(components_Syscard_0, { img: politics, secolor: secondaryBlue, color: primaryBlue, linkid: '/the-system/politics', title: 'Politics', desc: 'All politicians, leaders and corporate CEOs are just puppets to the real rulers who are pulling the strings from behind the scene.' })
      ),
      Object(preact_min["h"])(
        'div',
        { className: 'sysholder' },
        Object(preact_min["h"])(components_Syscard_0, { img: media, secolor: secondaryYellow, color: primaryYellow, linkid: '/the-system/media', title: 'Media', desc: 'Billions of things happen every day. How do they choose exactly which to show to the public?' })
      ),
      Object(preact_min["h"])(
        'div',
        { className: 'sysholder' },
        Object(preact_min["h"])(components_Syscard_0, { img: education, secolor: secondaryGreen, color: primaryGreen, linkid: '/the-system/education', title: 'Education', desc: 'The education system hasn\'t changed for more than 400 years. He who opens a school door, closes a prison - Victor Hugo.' })
      )
    )
  )
);

var TheSystem = function TheSystem() {
  return TheSystem__ref;
};

/* harmony default export */ var components_TheSystem = __webpack_exports__["default"] = (TheSystem);

/***/ }),

/***/ "Zb2Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"syscard":"syscard__1u-ri","syscard_container":"syscard_container__3f471","syscard_title":"syscard_title__2fuXG","syscard_p":"syscard_p__2wRI8","syscard_img":"syscard_img__3icyX"};

/***/ })

};;
//# sourceMappingURL=1.chunk.6ba08.js.map