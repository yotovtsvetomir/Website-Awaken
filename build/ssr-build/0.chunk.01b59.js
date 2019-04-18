exports.ids = [0];
exports.modules = {

/***/ "AHs6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a852953c24735c7de40bec8ec5874fca.jpg";

/***/ }),

/***/ "Jo5p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ./components/Landingpage.js



var Landingpage__ref = Object(preact_min["h"])(
  "h1",
  { className: "text-display-3" },
  "How the world works? ",
  Object(preact_min["h"])("br", null),
  " \xA0 It's time to wake up! "
);

var Landingpage_Landingpage = function Landingpage() {
  return Object(preact_min["h"])(
    "div",
    { className: "landingpage", style: { backgroundImage: "url(https://res.cloudinary.com/awaken/image/upload/f_auto/v1548582652/portal/blacklogo.jpg)" } },
    Landingpage__ref
  );
};

/* harmony default export */ var components_Landingpage = (Landingpage_Landingpage);
// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/Card.css
var components_Card = __webpack_require__("WJRo");
var Card_default = /*#__PURE__*/__webpack_require__.n(components_Card);

// CONCATENATED MODULE: ./components/Card.js





var Card_Card = function Card(_ref) {
  var linkid = _ref.linkid,
      title = _ref.title,
      color = _ref.color,
      image = _ref.image;
  return Object(preact_min["h"])(
    'div',
    { className: Card_default.a.card },
    Object(preact_min["h"])(
      match["Link"],
      { className: Card_default.a.card_link, href: linkid },
      Object(preact_min["h"])('img', { className: Card_default.a.card_image, src: image, alt: title }),
      Object(preact_min["h"])(
        'div',
        { className: Card_default.a.card_content },
        Object(preact_min["h"])(
          'h3',
          { className: Card_default.a.card_title, style: { background: '' + color } },
          title
        )
      )
    )
  );
};

/* harmony default export */ var components_Card_0 = (Card_Card);
// EXTERNAL MODULE: ./components/Book.css
var components_Book = __webpack_require__("L299");
var Book_default = /*#__PURE__*/__webpack_require__.n(components_Book);

// CONCATENATED MODULE: ./components/Book.js




var intro = __webpack_require__("AHs6");

var Book_Book = function Book() {
  return Object(preact_min["h"])(
    'div',
    { className: Book_default.a.book_section },
    Object(preact_min["h"])(
      'div',
      { className: 'shell' },
      Object(preact_min["h"])(
        'h2',
        { className: Book_default.a.book_title },
        'The Book ',
        Object(preact_min["h"])('div', { className: Book_default.a.book_decor })
      ),
      Object(preact_min["h"])(
        'p',
        { className: Book_default.a.book_subtitle },
        'Ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ),
      Object(preact_min["h"])('div', { className: Book_default.a.book, style: { backgroundImage: 'url(' + intro + ')' } })
    )
  );
};

/* harmony default export */ var components_Book_0 = (Book_Book);
// EXTERNAL MODULE: ./components/Section.css
var components_Section = __webpack_require__("u2VU");
var Section_default = /*#__PURE__*/__webpack_require__.n(components_Section);

// CONCATENATED MODULE: ./components/Section.js





var Section_Section = function Section(_ref) {
  var flex = _ref.flex,
      bt = _ref.bt,
      image = _ref.image,
      color = _ref.color,
      page = _ref.page,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return Object(preact_min["h"])(
    'div',
    { className: Section_default.a.section, style: { background: '' + color } },
    Object(preact_min["h"])(
      'div',
      { className: flex },
      Object(preact_min["h"])(
        'div',
        { className: Section_default.a.section_content },
        Object(preact_min["h"])(
          'div',
          { className: Section_default.a.section_text },
          Object(preact_min["h"])(
            'h2',
            { className: Section_default.a.section_title },
            title
          ),
          Object(preact_min["h"])(
            'p',
            { className: Section_default.a.section_subhead },
            subtitle
          ),
          Object(preact_min["h"])(
            match["Link"],
            { href: page, className: bt },
            'Dive in'
          )
        )
      ),
      Object(preact_min["h"])(
        'div',
        { className: Section_default.a.holder },
        Object(preact_min["h"])('div', { className: Section_default.a.section_image, style: { backgroundImage: 'url(' + image + ')' } })
      )
    )
  );
};

/* harmony default export */ var components_Section_0 = (Section_Section);
// EXTERNAL MODULE: ../node_modules/react-meta-tags/lib/index.js
var lib = __webpack_require__("UD6h");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("eW0v");

// CONCATENATED MODULE: ../node_modules/react-jsonld/json-ld.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var json_ld_JsonLd = function (_React$Component) {
  _inherits(JsonLd, _React$Component);

  function JsonLd(props) {
    _classCallCheck(this, JsonLd);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  JsonLd.prototype.render = function render() {
    return Object(preact_min["h"])("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(this.props.data) }
    });
  };

  return JsonLd;
}(preact_compat_es["default"].Component);


// CONCATENATED MODULE: ./components/Home.js









var awaken = "https://res.cloudinary.com/awaken/image/upload/w_700,h_700,f_auto/v1549374241/portal/avatar.webp";
var ws = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582653/allawaken/mm.jpg";
var sys = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582654/allawaken/sys.jpg";
var cs = "https://res.cloudinary.com/awaken/image/upload/w_800,h_800,f_auto/v1548582650/allawaken/cs.jpg";
var system = "https://res.cloudinary.com/awaken/image/upload/w_800,h_800,f_auto/v1548582655/allawaken/wws.jpg";

var primaryRed = "#e53935";
var secondaryRed = "#ffebee";

var primaryBlue = "#1e88e5";
var secondaryBlue = "#bbdefb";

var primaryGreen = "#43a047";
var secondaryGreen = "#e8f5e9";

var primaryYellow = "#fbc02d";
var secondaryYellow = "#fffde7";

var primaryGrey = "#fafafa";
var primaryWhite = "#fff";
var blueGrey = "#202124";

var data = {
  "@context": "https://www.schema.org",
  "@type": "Organization",
  "name": "All Awaken",
  "alternateName": "All Awaken",
  "url": "https://www.allawaken.com/",
  "sameAs": ["https://www.instagram.com/allawaken", "https://twitter.com/all_awaken", "https://www.facebook.com/All.Awaken.Official/"]
};

var data2 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Top Stories",
    "item": "https://www.allawaken.com/current-situation"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Community",
    "item": "https://www.allawaken.com/the-system"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "Sign In",
    "item": "https://www.allawaken.com/awaken"
  }, {
    "@type": "ListItem",
    "position": 4,
    "name": "Sign Up",
    "item": "https://www.allawaken.com/goals"
  }]
};

var Home__ref = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    lib_default.a,
    null,
    Object(preact_min["h"])(
      'title',
      null,
      'All Awaken: How the world works?'
    ),
    Object(preact_min["h"])('meta', { name: 'description', content: 'We are All Awaken, we do not retreat, we do not surrender. We are here to prove how the world works and we will not stop until we change the system.' }),
    Object(preact_min["h"])('meta', { property: 'og:title', content: 'All Awaken' }),
    Object(preact_min["h"])('meta', { property: 'og:description', content: 'We are All Awaken, we do not retreat, we do not surrender. We are here to prove how the world works and we will not stop until we change the system.' }),
    Object(preact_min["h"])('meta', { property: 'og:type', content: 'website' }),
    Object(preact_min["h"])('meta', { property: 'og:url', content: 'https://www.allawaken.com' }),
    Object(preact_min["h"])('meta', { property: 'og:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1549533587/portal/blacklogo.jpg' }),
    Object(preact_min["h"])('meta', { property: 'fb:app_id', content: '1118435171656958' }),
    Object(preact_min["h"])('meta', { name: 'twitter:card', content: 'summary' }),
    Object(preact_min["h"])('meta', { name: 'twitter:site', content: '@All_Awaken' }),
    Object(preact_min["h"])('meta', { name: 'twitter:creator', content: '@All_Awaken' }),
    Object(preact_min["h"])('meta', { name: 'twitter:title', content: 'All Awaken' }),
    Object(preact_min["h"])('meta', { name: 'twitter:description', content: 'We are All Awaken, we do not retreat, we do not surrender. We are here to prove how the world works and we will not stop until we change the system.' }),
    Object(preact_min["h"])('meta', { name: 'twitter:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1549533587/portal/blacklogo.jpg' }),
    Object(preact_min["h"])(json_ld_JsonLd, { data: data }),
    Object(preact_min["h"])(json_ld_JsonLd, { data: data2 })
  ),
  Object(preact_min["h"])(components_Landingpage, null),
  Object(preact_min["h"])(
    'div',
    { className: 'cards' },
    Object(preact_min["h"])(
      'div',
      { className: 'shell' },
      Object(preact_min["h"])(
        'div',
        { className: 'cards_container' },
        Object(preact_min["h"])(components_Card_0, { image: ws, linkid: '/current-situation', color: primaryGreen, title: 'Current Situation' }),
        Object(preact_min["h"])(components_Card_0, { image: sys, linkid: '/the-system', color: primaryRed, title: 'The System' }),
        Object(preact_min["h"])(components_Card_0, { image: awaken, linkid: '/awaken', color: primaryBlue, title: 'Awaken' })
      )
    )
  ),
  Object(preact_min["h"])(components_Section_0, { bt: 'button btn-yellow', image: cs, flex: 'section_container', page: '/current-situation', color: primaryWhite, title: 'Current Situation', subtitle: 'Nobody explains how the world works. There is a reason why media and propaganda are so carefully orchestrated.' }),
  Object(preact_min["h"])(components_Section_0, { bt: 'button', image: system, flex: 'section_container2', page: '/the-system', color: primaryWhite, title: 'The System', subtitle: 'We are born owned by the government, forced to live under laws and rules, forced to live within a system that we have never had the chance to choose or agree with.' }),
  Object(preact_min["h"])(components_Section_0, { bt: 'button btn-green', image: awaken, flex: 'section_container', page: '/awaken', color: primaryWhite, title: 'Awaken', subtitle: 'The first step to change the system is to understand it. It\'s time to wake up!' })
);

var Home = function Home() {
  return Home__ref;
};

/* harmony default export */ var components_Home = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "L299":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"book_section":"book_section__1Ztbp","book_title":"book_title__EguGO","book_decor":"book_decor__3vZOF","book_subtitle":"book_subtitle__1ftkB","book":"book__1gppp"};

/***/ }),

/***/ "WJRo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card":"card__19ose","card_image":"card_image__3sMIE","card_link":"card_link__BE99B","card_title":"card_title__9khsa","card_content":"card_content__1tpmB"};

/***/ }),

/***/ "u2VU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"section":"section__2mYQb","section_content":"section_content__JwhRg","section_text":"section_text__1tXe3","section_title":"section_title__3JX8Z","section_subhead":"section_subhead__JnkUS","section_image":"section_image__1lwA_","holder":"holder__2laDX"};

/***/ })

};;
//# sourceMappingURL=0.chunk.01b59.js.map