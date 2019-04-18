import { h } from 'preact'
import Landingpage from './Landingpage'
import Card from './Card'
import Book from './Book'
import Section from './Section'
import MetaTags from 'react-meta-tags'
import JsonLd from 'react-jsonld';

const awaken = "https://res.cloudinary.com/awaken/image/upload/w_700,h_700,f_auto/v1549374241/portal/avatar.webp";
const ws = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582653/allawaken/mm.jpg";
const sys = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582654/allawaken/sys.jpg";
const cs = "https://res.cloudinary.com/awaken/image/upload/w_800,h_800,f_auto/v1548582650/allawaken/cs.jpg";
const system = "https://res.cloudinary.com/awaken/image/upload/w_800,h_800,f_auto/v1548582655/allawaken/wws.jpg";

const primaryRed = "#e53935";
const secondaryRed = "#ffebee";

const primaryBlue = "#1e88e5";
const secondaryBlue = "#bbdefb";

const primaryGreen = "#43a047";
const secondaryGreen = "#e8f5e9";

const primaryYellow = "#fbc02d";
const secondaryYellow = "#fffde7";

const primaryGrey = "#fafafa";
const primaryWhite = "#fff";
const blueGrey = "#202124";

const data =
{
  "@context": "https://www.schema.org",
  "@type": "Organization",
  "name": "All Awaken",
  "alternateName": "All Awaken",
  "url": "https://www.allawaken.com/",
  "sameAs" : [
   "https://www.instagram.com/allawaken",
   "https://twitter.com/all_awaken",
   "https://www.facebook.com/All.Awaken.Official/"
  ]
};

const data2 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Top Stories",
    "item": "https://www.allawaken.com/current-situation"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Community",
    "item": "https://www.allawaken.com/the-system"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Sign In",
    "item": "https://www.allawaken.com/awaken"
  },{
    "@type": "ListItem",
    "position": 4,
    "name": "Sign Up",
    "item": "https://www.allawaken.com/goals"
  }]
};

const Home = () => (
  <div>
      <MetaTags>
          <title>All Awaken: How the world works?</title>
          <meta name="description" content="We are All Awaken, we do not retreat, we do not surrender. We are here to prove how the world works and we will not stop until we change the system." />
					<meta property="og:title" content="All Awaken" />
          <meta property="og:description" content="We are All Awaken, we do not retreat, we do not surrender. We are here to prove how the world works and we will not stop until we change the system." />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.allawaken.com" />
					<meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1549533587/portal/blacklogo.jpg" />
          <meta property="fb:app_id" content="1118435171656958"/>

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@All_Awaken" />
          <meta name="twitter:creator" content="@All_Awaken" />
          <meta name="twitter:title" content="All Awaken" />
          <meta name="twitter:description" content="We are All Awaken, we do not retreat, we do not surrender. We are here to prove how the world works and we will not stop until we change the system." />
          <meta name="twitter:image" content="https://res.cloudinary.com/awaken/image/upload/v1549533587/portal/blacklogo.jpg" />

          <JsonLd data={data} />
          <JsonLd data={data2} />
        </MetaTags>
    	<Landingpage />
    	<div className="cards">
    		<div className="shell">
    			<div className="cards_container">
    				<Card image={ws} linkid="/current-situation" color={primaryGreen} title="Current Situation"/>
    				<Card image={sys} linkid="/the-system" color={primaryRed} title="The System"/>
    				<Card image={awaken} linkid="/awaken" color={primaryBlue} title="Awaken"/>
    			</div>
    		</div>
    	</div>
    	<Section bt="button btn-yellow" image={cs} flex="section_container" page="/current-situation" color={primaryWhite} title="Current Situation" subtitle="Nobody explains how the world works. There is a reason why media and propaganda are so carefully orchestrated."/>
    	<Section bt="button" image={system} flex="section_container2" page="/the-system"  color={primaryWhite} title="The System" subtitle="We are born owned by the government, forced to live under laws and rules, forced to live within a system that we have never had the chance to choose or agree with."/>
    	<Section bt="button btn-green" image={awaken} flex="section_container" page="/awaken" color={primaryWhite} title="Awaken" subtitle="The first step to change the system is to understand it. It's time to wake up!" />
  </div>
);

export default Home
