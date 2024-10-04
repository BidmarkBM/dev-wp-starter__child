/**  Child Theme Entry Point **/

/* ======== Load any Modules from the Child Theme node_modules Dir ======== */
// Number Counter - CounterUp.js
import '../../../node_modules/waypoints/lib/jquery.waypoints';
import '../../../node_modules/jquery.counterup/jquery.counterup';

// Animations - Animate on Scroll

import './../../../../dev-wp-starter/node_modules/aos/dist/aos.css';

/*
 import AOS from './../../../../dev-wp-starter/node_modules/aos/dist/aos.js';
AOS.init({
	// Set Defaults
	disable: window.innerWidth < 1100,
	delay: 100,
	duration: 500,
	offset: 200,
});
window.addEventListener('load', AOS.refresh); */

/* ======== Core Blocks Js ======== */
// Text / Video Section. Replaces dynamic thumbnail
import './../../../../dev-wp-starter/blocks/text-video/text-video.js';
import './../../../../dev-wp-starter/blocks/google-map/google-map.js';
import './../../../../dev-wp-starter/blocks/modal/modal.js';

/* ======== Theme Styles ======== */

import './sass/site.scss';

/* ======== Custom JS Used for Options ======== */
import './../../../../dev-wp-starter/assets/src/site/js/navigation';
import './../../../../dev-wp-starter/assets/src/site/js/bootstrap-nav';
import './../../../../dev-wp-starter/assets/src/site/js/floating-header-padded';
import './../../../../dev-wp-starter/assets/src/site/js/header-color';
import './../../../../dev-wp-starter/assets/src/site/js/progress-bar';
import './../../../../dev-wp-starter/assets/src/site/js/not-top-scroll';
import './../../../../dev-wp-starter/assets/src/site/js/gravity-forms.js';
import './../../../../dev-wp-starter/assets/src/site/js/date-time';

/* ======== Custom JS for Structura ======== */
import './js/front.js';
