/******/ (function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Flag the module as loaded
		/******/ module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/ __webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/ __webpack_require__.d = function (exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter,
			});
			/******/
		}
		/******/
	};
	/******/
	/******/ // define __esModule on exports
	/******/ __webpack_require__.r = function (exports) {
		/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: 'Module',
			});
			/******/
		}
		/******/ Object.defineProperty(exports, '__esModule', { value: true });
		/******/
	};
	/******/
	/******/ // create a fake namespace object
	/******/ // mode & 1: value is a module id, require it
	/******/ // mode & 2: merge all properties of value into the ns
	/******/ // mode & 4: return value when already ns object
	/******/ // mode & 8|1: behave like require
	/******/ __webpack_require__.t = function (value, mode) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (
			mode & 4 &&
			typeof value === 'object' &&
			value &&
			value.__esModule
		)
			return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, 'default', {
			enumerable: true,
			value: value,
		});
		/******/ if (mode & 2 && typeof value != 'string')
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function (key) {
						return value[key];
					}.bind(null, key)
				);
		/******/ return ns;
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/ __webpack_require__.n = function (module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module['default'];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, 'a', getter);
		/******/ return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/ __webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/ __webpack_require__.p = '';
	/******/
	/******/
	/******/ // Load entry module and return exports
	/******/ return __webpack_require__(
		(__webpack_require__.s = './assets/src/site/index.js')
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ '../dev-wp-child/assets/src/site/index.js':
			/*!****************************************!*\
  !*** .-child/assets/src/site/index.js ***!
  \****************************************/
			/*! no exports provided */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				'use strict';
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _node_modules_waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ../../../node_modules/waypoints/lib/jquery.waypoints */ '../dev-wp-child/node_modules/waypoints/lib/jquery.waypoints.js'
					);
				/* harmony import */ var _node_modules_waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						_node_modules_waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _node_modules_jquery_counterup_jquery_counterup__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ../../../node_modules/jquery.counterup/jquery.counterup */ '../dev-wp-child/node_modules/jquery.counterup/jquery.counterup.js'
					);
				/* harmony import */ var _node_modules_jquery_counterup_jquery_counterup__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_node_modules_jquery_counterup_jquery_counterup__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _bidmark_dev_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/node_modules/aos/dist/aos.css */ './node_modules/aos/dist/aos.css'
					);
				/* harmony import */ var _bidmark_dev_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _bidmark_dev_blocks_text_video_text_video_js__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/blocks/text-video/text-video.js */ './blocks/text-video/text-video.js'
					);
				/* harmony import */ var _bidmark_dev_blocks_text_video_text_video_js__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_blocks_text_video_text_video_js__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var _bidmark_dev_blocks_google_map_google_map_js__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/blocks/google-map/google-map.js */ './blocks/google-map/google-map.js'
					);
				/* harmony import */ var _bidmark_dev_blocks_google_map_google_map_js__WEBPACK_IMPORTED_MODULE_4___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_blocks_google_map_google_map_js__WEBPACK_IMPORTED_MODULE_4__
					);
				/* harmony import */ var _bidmark_dev_blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/blocks/modal/modal.js */ './blocks/modal/modal.js'
					);
				/* harmony import */ var _bidmark_dev_blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_5___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_5__
					);
				/* harmony import */ var _sass_site_scss__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! ./sass/site.scss */ '../dev-wp-child/assets/src/site/sass/site.scss'
					);
				/* harmony import */ var _sass_site_scss__WEBPACK_IMPORTED_MODULE_6___default =
					/*#__PURE__*/ __webpack_require__.n(
						_sass_site_scss__WEBPACK_IMPORTED_MODULE_6__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_navigation__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/navigation */ './assets/src/site/js/navigation.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_navigation__WEBPACK_IMPORTED_MODULE_7___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_navigation__WEBPACK_IMPORTED_MODULE_7__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_bootstrap_nav__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/bootstrap-nav */ './assets/src/site/js/bootstrap-nav.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_bootstrap_nav__WEBPACK_IMPORTED_MODULE_8___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_bootstrap_nav__WEBPACK_IMPORTED_MODULE_8__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_floating_header_padded__WEBPACK_IMPORTED_MODULE_9__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/floating-header-padded */ './assets/src/site/js/floating-header-padded.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_floating_header_padded__WEBPACK_IMPORTED_MODULE_9___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_floating_header_padded__WEBPACK_IMPORTED_MODULE_9__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_header_color__WEBPACK_IMPORTED_MODULE_10__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/header-color */ './assets/src/site/js/header-color.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_header_color__WEBPACK_IMPORTED_MODULE_10___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_header_color__WEBPACK_IMPORTED_MODULE_10__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_progress_bar__WEBPACK_IMPORTED_MODULE_11__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/progress-bar */ './assets/src/site/js/progress-bar.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_progress_bar__WEBPACK_IMPORTED_MODULE_11___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_progress_bar__WEBPACK_IMPORTED_MODULE_11__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_not_top_scroll__WEBPACK_IMPORTED_MODULE_12__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/not-top-scroll */ './assets/src/site/js/not-top-scroll.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_not_top_scroll__WEBPACK_IMPORTED_MODULE_12___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_not_top_scroll__WEBPACK_IMPORTED_MODULE_12__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_gravity_forms_js__WEBPACK_IMPORTED_MODULE_13__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/gravity-forms.js */ './assets/src/site/js/gravity-forms.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_gravity_forms_js__WEBPACK_IMPORTED_MODULE_13___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_gravity_forms_js__WEBPACK_IMPORTED_MODULE_13__
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_date_time__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-starter/assets/src/site/js/date-time */ './assets/src/site/js/date-time.js'
					);
				/* harmony import */ var _bidmark_dev_assets_src_site_js_date_time__WEBPACK_IMPORTED_MODULE_14___default =
					/*#__PURE__*/ __webpack_require__.n(
						_bidmark_dev_assets_src_site_js_date_time__WEBPACK_IMPORTED_MODULE_14__
					);
				/* harmony import */ var _js_front_js__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__(
						/*! ./js/front.js */ '../dev-wp-child/assets/src/site/js/front.js'
					);
				/* harmony import */ var _js_front_js__WEBPACK_IMPORTED_MODULE_15___default =
					/*#__PURE__*/ __webpack_require__.n(
						_js_front_js__WEBPACK_IMPORTED_MODULE_15__
					);
				/**  Child Theme Entry Point **/

				/* ======== Load any Modules from the Child Theme node_modules Dir ======== */
				// Number Counter - CounterUp.js

				// Animations - Animate on Scroll

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

				/* ======== Theme Styles ======== */

				/* ======== Custom JS Used for Options ======== */

				/* ======== Custom JS for Structura ======== */

				/***/
			},

		/***/ '../dev-wp-child/assets/src/site/js/front.js':
			/*!*******************************************!*\
  !*** .-child/assets/src/site/js/front.js ***!
  \*******************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				/***/
			},

		/***/ '../dev-wp-child/assets/src/site/sass/site.scss':
			/*!**********************************************!*\
  !*** .-child/assets/src/site/sass/site.scss ***!
  \**********************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ '../dev-wp-child/node_modules/jquery.counterup/jquery.counterup.js':
			/*!*****************************************************************!*\
  !*** .-child/node_modules/jquery.counterup/jquery.counterup.js ***!
  \*****************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				/*!
				 * jquery.counterup.js 2.1.0
				 *
				 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
				 * Released under the GPL v2 License
				 *
				 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
				 *
				 * Date: Feb 24, 2017
				 */
				(function ($) {
					'use strict';

					$.fn.counterUp = function (options) {
						// Defaults
						var settings = $.extend(
								{
									time: 400,
									delay: 10,
									offset: 100,
									beginAt: 0,
									formatter: false,
									context: 'window',
									callback: function () {},
								},
								options
							),
							s;
						return this.each(function () {
							// Store the object
							var $this = $(this),
								counter = {
									time:
										$(this).data('counterup-time') ||
										settings.time,
									delay:
										$(this).data('counterup-delay') ||
										settings.delay,
									offset:
										$(this).data('counterup-offset') ||
										settings.offset,
									beginAt:
										$(this).data('counterup-beginat') ||
										settings.beginAt,
									context:
										$(this).data('counterup-context') ||
										settings.context,
								};

							var counterUpper = function () {
								var nums = [];
								var divisions = counter.time / counter.delay;
								var num = $(this).attr('data-num')
									? $(this).attr('data-num')
									: $this.text();
								var isComma = /[0-9]+,[0-9]+/.test(num);
								num = num.replace(/,/g, '');
								var decimalPlaces = (num.split('.')[1] || [])
									.length;
								if (counter.beginAt > num)
									counter.beginAt = num;
								var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num); // Convert time to total seconds

								if (isTime) {
									var times = num.split(':'),
										m = 1;
									s = 0;

									while (times.length > 0) {
										s += m * parseInt(times.pop(), 10);
										m *= 60;
									}
								} // Generate list of incremental numbers to display

								for (
									var i = divisions;
									i >= (counter.beginAt / num) * divisions;
									i--
								) {
									var newNum = parseFloat(
										(num / divisions) * i
									).toFixed(decimalPlaces); // Add incremental seconds and convert back to time

									if (isTime) {
										newNum = parseInt((s / divisions) * i);
										var hours =
											parseInt(newNum / 3600) % 24;
										var minutes =
											parseInt(newNum / 60) % 60;
										var seconds = parseInt(newNum % 60, 10);
										newNum =
											(hours < 10 ? '0' + hours : hours) +
											':' +
											(minutes < 10
												? '0' + minutes
												: minutes) +
											':' +
											(seconds < 10
												? '0' + seconds
												: seconds);
									} // Preserve commas if input had commas

									if (isComma) {
										while (
											/(\d+)(\d{3})/.test(
												newNum.toString()
											)
										) {
											newNum = newNum
												.toString()
												.replace(
													/(\d+)(\d{3})/,
													'$1' + ',' + '$2'
												);
										}
									}

									if (settings.formatter) {
										newNum = settings.formatter.call(
											this,
											newNum
										);
									}

									nums.unshift(newNum);
								}

								$this.data('counterup-nums', nums);
								$this.text(counter.beginAt); // Updates the number until we're done

								var f = function () {
									if (!$this.data('counterup-nums')) {
										settings.callback.call(this);
										return;
									}

									$this.html(
										$this.data('counterup-nums').shift()
									);

									if ($this.data('counterup-nums').length) {
										setTimeout(
											$this.data('counterup-func'),
											counter.delay
										);
									} else {
										$this.data('counterup-nums', null);
										$this.data('counterup-func', null);
										settings.callback.call(this);
									}
								};

								$this.data('counterup-func', f); // Start the count up

								setTimeout(
									$this.data('counterup-func'),
									counter.delay
								);
							}; // Perform counts when the element gets into view

							$this.waypoint(
								function (direction) {
									counterUpper();
									this.destroy(); //-- Waypoint 3.0 version of triggerOnce
								},
								{
									offset: counter.offset + '%',
									context: counter.context,
								}
							);
						});
					};
				})(jQuery);

				/***/
			},

		/***/ '../dev-wp-child/node_modules/waypoints/lib/jquery.waypoints.js':
			/*!**************************************************************!*\
  !*** .-child/node_modules/waypoints/lib/jquery.waypoints.js ***!
  \**************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
				(function () {
					'use strict';

					var keyCounter = 0;
					var allWaypoints = {};
					/* http://imakewebthings.com/waypoints/api/waypoint */

					function Waypoint(options) {
						if (!options) {
							throw new Error(
								'No options passed to Waypoint constructor'
							);
						}

						if (!options.element) {
							throw new Error(
								'No element option passed to Waypoint constructor'
							);
						}

						if (!options.handler) {
							throw new Error(
								'No handler option passed to Waypoint constructor'
							);
						}

						this.key = 'waypoint-' + keyCounter;
						this.options = Waypoint.Adapter.extend(
							{},
							Waypoint.defaults,
							options
						);
						this.element = this.options.element;
						this.adapter = new Waypoint.Adapter(this.element);
						this.callback = options.handler;
						this.axis = this.options.horizontal
							? 'horizontal'
							: 'vertical';
						this.enabled = this.options.enabled;
						this.triggerPoint = null;
						this.group = Waypoint.Group.findOrCreate({
							name: this.options.group,
							axis: this.axis,
						});
						this.context = Waypoint.Context.findOrCreateByElement(
							this.options.context
						);

						if (Waypoint.offsetAliases[this.options.offset]) {
							this.options.offset =
								Waypoint.offsetAliases[this.options.offset];
						}

						this.group.add(this);
						this.context.add(this);
						allWaypoints[this.key] = this;
						keyCounter += 1;
					}
					/* Private */

					Waypoint.prototype.queueTrigger = function (direction) {
						this.group.queueTrigger(this, direction);
					};
					/* Private */

					Waypoint.prototype.trigger = function (args) {
						if (!this.enabled) {
							return;
						}

						if (this.callback) {
							this.callback.apply(this, args);
						}
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/destroy */

					Waypoint.prototype.destroy = function () {
						this.context.remove(this);
						this.group.remove(this);
						delete allWaypoints[this.key];
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/disable */

					Waypoint.prototype.disable = function () {
						this.enabled = false;
						return this;
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/enable */

					Waypoint.prototype.enable = function () {
						this.context.refresh();
						this.enabled = true;
						return this;
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/next */

					Waypoint.prototype.next = function () {
						return this.group.next(this);
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/previous */

					Waypoint.prototype.previous = function () {
						return this.group.previous(this);
					};
					/* Private */

					Waypoint.invokeAll = function (method) {
						var allWaypointsArray = [];

						for (var waypointKey in allWaypoints) {
							allWaypointsArray.push(allWaypoints[waypointKey]);
						}

						for (
							var i = 0, end = allWaypointsArray.length;
							i < end;
							i++
						) {
							allWaypointsArray[i][method]();
						}
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/destroy-all */

					Waypoint.destroyAll = function () {
						Waypoint.invokeAll('destroy');
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/disable-all */

					Waypoint.disableAll = function () {
						Waypoint.invokeAll('disable');
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/enable-all */

					Waypoint.enableAll = function () {
						Waypoint.Context.refreshAll();

						for (var waypointKey in allWaypoints) {
							allWaypoints[waypointKey].enabled = true;
						}

						return this;
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/refresh-all */

					Waypoint.refreshAll = function () {
						Waypoint.Context.refreshAll();
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/viewport-height */

					Waypoint.viewportHeight = function () {
						return (
							window.innerHeight ||
							document.documentElement.clientHeight
						);
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/viewport-width */

					Waypoint.viewportWidth = function () {
						return document.documentElement.clientWidth;
					};

					Waypoint.adapters = [];
					Waypoint.defaults = {
						context: window,
						continuous: true,
						enabled: true,
						group: 'default',
						horizontal: false,
						offset: 0,
					};
					Waypoint.offsetAliases = {
						'bottom-in-view': function () {
							return (
								this.context.innerHeight() -
								this.adapter.outerHeight()
							);
						},
						'right-in-view': function () {
							return (
								this.context.innerWidth() -
								this.adapter.outerWidth()
							);
						},
					};
					window.Waypoint = Waypoint;
				})();

				(function () {
					'use strict';

					function requestAnimationFrameShim(callback) {
						window.setTimeout(callback, 1000 / 60);
					}

					var keyCounter = 0;
					var contexts = {};
					var Waypoint = window.Waypoint;
					var oldWindowLoad = window.onload;
					/* http://imakewebthings.com/waypoints/api/context */

					function Context(element) {
						this.element = element;
						this.Adapter = Waypoint.Adapter;
						this.adapter = new this.Adapter(element);
						this.key = 'waypoint-context-' + keyCounter;
						this.didScroll = false;
						this.didResize = false;
						this.oldScroll = {
							x: this.adapter.scrollLeft(),
							y: this.adapter.scrollTop(),
						};
						this.waypoints = {
							vertical: {},
							horizontal: {},
						};
						element.waypointContextKey = this.key;
						contexts[element.waypointContextKey] = this;
						keyCounter += 1;

						if (!Waypoint.windowContext) {
							Waypoint.windowContext = true;
							Waypoint.windowContext = new Context(window);
						}

						this.createThrottledScrollHandler();
						this.createThrottledResizeHandler();
					}
					/* Private */

					Context.prototype.add = function (waypoint) {
						var axis = waypoint.options.horizontal
							? 'horizontal'
							: 'vertical';
						this.waypoints[axis][waypoint.key] = waypoint;
						this.refresh();
					};
					/* Private */

					Context.prototype.checkEmpty = function () {
						var horizontalEmpty = this.Adapter.isEmptyObject(
							this.waypoints.horizontal
						);
						var verticalEmpty = this.Adapter.isEmptyObject(
							this.waypoints.vertical
						);
						var isWindow = this.element == this.element.window;

						if (horizontalEmpty && verticalEmpty && !isWindow) {
							this.adapter.off('.waypoints');
							delete contexts[this.key];
						}
					};
					/* Private */

					Context.prototype.createThrottledResizeHandler =
						function () {
							var self = this;

							function resizeHandler() {
								self.handleResize();
								self.didResize = false;
							}

							this.adapter.on('resize.waypoints', function () {
								if (!self.didResize) {
									self.didResize = true;
									Waypoint.requestAnimationFrame(
										resizeHandler
									);
								}
							});
						};
					/* Private */

					Context.prototype.createThrottledScrollHandler =
						function () {
							var self = this;

							function scrollHandler() {
								self.handleScroll();
								self.didScroll = false;
							}

							this.adapter.on('scroll.waypoints', function () {
								if (!self.didScroll || Waypoint.isTouch) {
									self.didScroll = true;
									Waypoint.requestAnimationFrame(
										scrollHandler
									);
								}
							});
						};
					/* Private */

					Context.prototype.handleResize = function () {
						Waypoint.Context.refreshAll();
					};
					/* Private */

					Context.prototype.handleScroll = function () {
						var triggeredGroups = {};
						var axes = {
							horizontal: {
								newScroll: this.adapter.scrollLeft(),
								oldScroll: this.oldScroll.x,
								forward: 'right',
								backward: 'left',
							},
							vertical: {
								newScroll: this.adapter.scrollTop(),
								oldScroll: this.oldScroll.y,
								forward: 'down',
								backward: 'up',
							},
						};

						for (var axisKey in axes) {
							var axis = axes[axisKey];
							var isForward = axis.newScroll > axis.oldScroll;
							var direction = isForward
								? axis.forward
								: axis.backward;

							for (var waypointKey in this.waypoints[axisKey]) {
								var waypoint =
									this.waypoints[axisKey][waypointKey];

								if (waypoint.triggerPoint === null) {
									continue;
								}

								var wasBeforeTriggerPoint =
									axis.oldScroll < waypoint.triggerPoint;
								var nowAfterTriggerPoint =
									axis.newScroll >= waypoint.triggerPoint;
								var crossedForward =
									wasBeforeTriggerPoint &&
									nowAfterTriggerPoint;
								var crossedBackward =
									!wasBeforeTriggerPoint &&
									!nowAfterTriggerPoint;

								if (crossedForward || crossedBackward) {
									waypoint.queueTrigger(direction);
									triggeredGroups[waypoint.group.id] =
										waypoint.group;
								}
							}
						}

						for (var groupKey in triggeredGroups) {
							triggeredGroups[groupKey].flushTriggers();
						}

						this.oldScroll = {
							x: axes.horizontal.newScroll,
							y: axes.vertical.newScroll,
						};
					};
					/* Private */

					Context.prototype.innerHeight = function () {
						/*eslint-disable eqeqeq */
						if (this.element == this.element.window) {
							return Waypoint.viewportHeight();
						}
						/*eslint-enable eqeqeq */

						return this.adapter.innerHeight();
					};
					/* Private */

					Context.prototype.remove = function (waypoint) {
						delete this.waypoints[waypoint.axis][waypoint.key];
						this.checkEmpty();
					};
					/* Private */

					Context.prototype.innerWidth = function () {
						/*eslint-disable eqeqeq */
						if (this.element == this.element.window) {
							return Waypoint.viewportWidth();
						}
						/*eslint-enable eqeqeq */

						return this.adapter.innerWidth();
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/context-destroy */

					Context.prototype.destroy = function () {
						var allWaypoints = [];

						for (var axis in this.waypoints) {
							for (var waypointKey in this.waypoints[axis]) {
								allWaypoints.push(
									this.waypoints[axis][waypointKey]
								);
							}
						}

						for (
							var i = 0, end = allWaypoints.length;
							i < end;
							i++
						) {
							allWaypoints[i].destroy();
						}
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/context-refresh */

					Context.prototype.refresh = function () {
						/*eslint-disable eqeqeq */
						var isWindow = this.element == this.element.window;
						/*eslint-enable eqeqeq */

						var contextOffset = isWindow
							? undefined
							: this.adapter.offset();
						var triggeredGroups = {};
						var axes;
						this.handleScroll();
						axes = {
							horizontal: {
								contextOffset: isWindow
									? 0
									: contextOffset.left,
								contextScroll: isWindow ? 0 : this.oldScroll.x,
								contextDimension: this.innerWidth(),
								oldScroll: this.oldScroll.x,
								forward: 'right',
								backward: 'left',
								offsetProp: 'left',
							},
							vertical: {
								contextOffset: isWindow ? 0 : contextOffset.top,
								contextScroll: isWindow ? 0 : this.oldScroll.y,
								contextDimension: this.innerHeight(),
								oldScroll: this.oldScroll.y,
								forward: 'down',
								backward: 'up',
								offsetProp: 'top',
							},
						};

						for (var axisKey in axes) {
							var axis = axes[axisKey];

							for (var waypointKey in this.waypoints[axisKey]) {
								var waypoint =
									this.waypoints[axisKey][waypointKey];
								var adjustment = waypoint.options.offset;
								var oldTriggerPoint = waypoint.triggerPoint;
								var elementOffset = 0;
								var freshWaypoint = oldTriggerPoint == null;
								var contextModifier,
									wasBeforeScroll,
									nowAfterScroll;
								var triggeredBackward, triggeredForward;

								if (
									waypoint.element !== waypoint.element.window
								) {
									elementOffset =
										waypoint.adapter.offset()[
											axis.offsetProp
										];
								}

								if (typeof adjustment === 'function') {
									adjustment = adjustment.apply(waypoint);
								} else if (typeof adjustment === 'string') {
									adjustment = parseFloat(adjustment);

									if (
										waypoint.options.offset.indexOf('%') >
										-1
									) {
										adjustment = Math.ceil(
											(axis.contextDimension *
												adjustment) /
												100
										);
									}
								}

								contextModifier =
									axis.contextScroll - axis.contextOffset;
								waypoint.triggerPoint = Math.floor(
									elementOffset + contextModifier - adjustment
								);
								wasBeforeScroll =
									oldTriggerPoint < axis.oldScroll;
								nowAfterScroll =
									waypoint.triggerPoint >= axis.oldScroll;
								triggeredBackward =
									wasBeforeScroll && nowAfterScroll;
								triggeredForward =
									!wasBeforeScroll && !nowAfterScroll;

								if (!freshWaypoint && triggeredBackward) {
									waypoint.queueTrigger(axis.backward);
									triggeredGroups[waypoint.group.id] =
										waypoint.group;
								} else if (!freshWaypoint && triggeredForward) {
									waypoint.queueTrigger(axis.forward);
									triggeredGroups[waypoint.group.id] =
										waypoint.group;
								} else if (
									freshWaypoint &&
									axis.oldScroll >= waypoint.triggerPoint
								) {
									waypoint.queueTrigger(axis.forward);
									triggeredGroups[waypoint.group.id] =
										waypoint.group;
								}
							}
						}

						Waypoint.requestAnimationFrame(function () {
							for (var groupKey in triggeredGroups) {
								triggeredGroups[groupKey].flushTriggers();
							}
						});
						return this;
					};
					/* Private */

					Context.findOrCreateByElement = function (element) {
						return (
							Context.findByElement(element) ||
							new Context(element)
						);
					};
					/* Private */

					Context.refreshAll = function () {
						for (var contextId in contexts) {
							contexts[contextId].refresh();
						}
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/context-find-by-element */

					Context.findByElement = function (element) {
						return contexts[element.waypointContextKey];
					};

					window.onload = function () {
						if (oldWindowLoad) {
							oldWindowLoad();
						}

						Context.refreshAll();
					};

					Waypoint.requestAnimationFrame = function (callback) {
						var requestFn =
							window.requestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							requestAnimationFrameShim;
						requestFn.call(window, callback);
					};

					Waypoint.Context = Context;
				})();

				(function () {
					'use strict';

					function byTriggerPoint(a, b) {
						return a.triggerPoint - b.triggerPoint;
					}

					function byReverseTriggerPoint(a, b) {
						return b.triggerPoint - a.triggerPoint;
					}

					var groups = {
						vertical: {},
						horizontal: {},
					};
					var Waypoint = window.Waypoint;
					/* http://imakewebthings.com/waypoints/api/group */

					function Group(options) {
						this.name = options.name;
						this.axis = options.axis;
						this.id = this.name + '-' + this.axis;
						this.waypoints = [];
						this.clearTriggerQueues();
						groups[this.axis][this.name] = this;
					}
					/* Private */

					Group.prototype.add = function (waypoint) {
						this.waypoints.push(waypoint);
					};
					/* Private */

					Group.prototype.clearTriggerQueues = function () {
						this.triggerQueues = {
							up: [],
							down: [],
							left: [],
							right: [],
						};
					};
					/* Private */

					Group.prototype.flushTriggers = function () {
						for (var direction in this.triggerQueues) {
							var waypoints = this.triggerQueues[direction];
							var reverse =
								direction === 'up' || direction === 'left';
							waypoints.sort(
								reverse ? byReverseTriggerPoint : byTriggerPoint
							);

							for (
								var i = 0, end = waypoints.length;
								i < end;
								i += 1
							) {
								var waypoint = waypoints[i];

								if (
									waypoint.options.continuous ||
									i === waypoints.length - 1
								) {
									waypoint.trigger([direction]);
								}
							}
						}

						this.clearTriggerQueues();
					};
					/* Private */

					Group.prototype.next = function (waypoint) {
						this.waypoints.sort(byTriggerPoint);
						var index = Waypoint.Adapter.inArray(
							waypoint,
							this.waypoints
						);
						var isLast = index === this.waypoints.length - 1;
						return isLast ? null : this.waypoints[index + 1];
					};
					/* Private */

					Group.prototype.previous = function (waypoint) {
						this.waypoints.sort(byTriggerPoint);
						var index = Waypoint.Adapter.inArray(
							waypoint,
							this.waypoints
						);
						return index ? this.waypoints[index - 1] : null;
					};
					/* Private */

					Group.prototype.queueTrigger = function (
						waypoint,
						direction
					) {
						this.triggerQueues[direction].push(waypoint);
					};
					/* Private */

					Group.prototype.remove = function (waypoint) {
						var index = Waypoint.Adapter.inArray(
							waypoint,
							this.waypoints
						);

						if (index > -1) {
							this.waypoints.splice(index, 1);
						}
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/first */

					Group.prototype.first = function () {
						return this.waypoints[0];
					};
					/* Public */

					/* http://imakewebthings.com/waypoints/api/last */

					Group.prototype.last = function () {
						return this.waypoints[this.waypoints.length - 1];
					};
					/* Private */

					Group.findOrCreate = function (options) {
						return (
							groups[options.axis][options.name] ||
							new Group(options)
						);
					};

					Waypoint.Group = Group;
				})();

				(function () {
					'use strict';

					var $ = window.jQuery;
					var Waypoint = window.Waypoint;

					function JQueryAdapter(element) {
						this.$element = $(element);
					}

					$.each(
						[
							'innerHeight',
							'innerWidth',
							'off',
							'offset',
							'on',
							'outerHeight',
							'outerWidth',
							'scrollLeft',
							'scrollTop',
						],
						function (i, method) {
							JQueryAdapter.prototype[method] = function () {
								var args =
									Array.prototype.slice.call(arguments);
								return this.$element[method].apply(
									this.$element,
									args
								);
							};
						}
					);
					$.each(
						['extend', 'inArray', 'isEmptyObject'],
						function (i, method) {
							JQueryAdapter[method] = $[method];
						}
					);
					Waypoint.adapters.push({
						name: 'jquery',
						Adapter: JQueryAdapter,
					});
					Waypoint.Adapter = JQueryAdapter;
				})();

				(function () {
					'use strict';

					var Waypoint = window.Waypoint;

					function createExtension(framework) {
						return function () {
							var waypoints = [];
							var overrides = arguments[0];

							if (framework.isFunction(arguments[0])) {
								overrides = framework.extend({}, arguments[1]);
								overrides.handler = arguments[0];
							}

							this.each(function () {
								var options = framework.extend({}, overrides, {
									element: this,
								});

								if (typeof options.context === 'string') {
									options.context = framework(this).closest(
										options.context
									)[0];
								}

								waypoints.push(new Waypoint(options));
							});
							return waypoints;
						};
					}

					if (window.jQuery) {
						window.jQuery.fn.waypoint = createExtension(
							window.jQuery
						);
					}

					if (window.Zepto) {
						window.Zepto.fn.waypoint = createExtension(
							window.Zepto
						);
					}
				})();

				/***/
			},

		/***/ './assets/src/site/index.js':
			/*!**********************************!*\
  !*** ./assets/src/site/index.js ***!
  \**********************************/
			/*! no exports provided */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				'use strict';
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var owl_carousel_dist_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! owl.carousel/dist/assets/owl.carousel.min.css */ './node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
					);
				/* harmony import */ var owl_carousel_dist_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						owl_carousel_dist_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_min_css__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! owl.carousel/dist/assets/owl.theme.default.min.css */ './node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'
					);
				/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_min_css__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						owl_carousel_dist_assets_owl_theme_default_min_css__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var lightbox2_dist_css_lightbox_min_css__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! lightbox2/dist/css/lightbox.min.css */ './node_modules/lightbox2/dist/css/lightbox.min.css'
					);
				/* harmony import */ var lightbox2_dist_css_lightbox_min_css__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						lightbox2_dist_css_lightbox_min_css__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _js_bootstrap_general__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./js/bootstrap-general */ './assets/src/site/js/bootstrap-general.js'
					);
				/* harmony import */ var _js_bootstrap_general__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						_js_bootstrap_general__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var _js_header_5__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./js/header-5 */ './assets/src/site/js/header-5.js'
					);
				/* harmony import */ var _js_header_5__WEBPACK_IMPORTED_MODULE_4___default =
					/*#__PURE__*/ __webpack_require__.n(
						_js_header_5__WEBPACK_IMPORTED_MODULE_4__
					);
				/* harmony import */ var _js_admin__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./js/admin */ './assets/src/site/js/admin.js'
					);
				/* harmony import */ var _js_admin__WEBPACK_IMPORTED_MODULE_5___default =
					/*#__PURE__*/ __webpack_require__.n(
						_js_admin__WEBPACK_IMPORTED_MODULE_5__
					);
				/* harmony import */ var _bidmark_dev_child_assets_src_site_index_js__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! ./../../../../dev-wp-child/assets/src/site/index.js */ '../dev-wp-child/assets/src/site/index.js'
					);
				/**
				 * Site Entry Point for Parent and Child Theme Core
				 */

				/* ======== Global NPM Packages for Parent Theme Usage ======== */
				//global.jQuery = require('jquery');
				// Owl Carousel
				//import 'owl.carousel/dist/owl.carousel.min.js';

				// Lightbox2
				//import 'lightbox2/dist/js/lightbox.min.js';

				// General JS Utilities

				// Prism js
				//import './js/prism';
				// Admnin JS

				// Iconify
				//import Iconify from '@iconify/iconify';
				// Bootstrap JS
				//import * as bootstrap from 'bootstrap';
				// Nootstrap Modal
				//import 'bootstrap/js/dist/modal';

				/* ======== Parent & Child Theme Sass & JS  ======== */

				jQuery(document).ready(function ($) {
					AOS.init({
						// Set Defaults
						disable: window.innerWidth < 1100,
						delay: 100,
						duration: 500,
						offset: 200,
					});
					window.addEventListener('load', AOS.refresh);
				}); // Owl Carousel

				/***/
			},

		/***/ './assets/src/site/js/admin.js':
			/*!*************************************!*\
  !*** ./assets/src/site/js/admin.js ***!
  \*************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				/*document.addEventListener('DOMContentLoaded', function () {
	setTimeout(function () {
		const matches = document.querySelectorAll('.code textarea');
		console.log(matches);
		console.log(Prism);
		console.log('Test');
		matches.forEach((userItem) => {
			userItem.addEventListener('keydown', function (e) {
				if (e.key === 'Tab') {
					e.preventDefault();
					var start = this.selectionStart;
					var end = this.selectionEnd;

					// set textarea value to: text before caret + tab + text after caret
					this.value =
						this.value.substring(0, start) +
						'\t' +
						this.value.substring(end);

					// put caret at right position again
					this.selectionStart = this.selectionEnd = start + 1;
				}
			});

			// Create a div for displaying the highlighted code
			const pre = document.createElement('pre');
			const code = document.createElement('code');
			code.classList.add('language-javascript'); // Change 'javascript' to whatever language you need
			pre.appendChild(code);
			userItem.parentNode.insertBefore(pre, userItem.nextSibling);

			// Update the highlighted code on input
			userItem.addEventListener('input', function () {
				code.textContent = userItem.value;
				Prism.highlightElement(code);
			});

			// Initial highlighting
			code.textContent = userItem.value;
			Prism.highlightElement(code);
		});
	}, 10000); // 10 seconds delay
});
*/
				// Make it so that inside .code textarea's the tab key will insert a tab character instead of moving focus to the next element
				document.addEventListener('DOMContentLoaded', function () {
					const matches = document.querySelectorAll('.code textarea');
					matches.forEach((userItem) => {
						userItem.addEventListener('click', function () {
							userItem.removeEventListener(
								'click',
								arguments.callee
							);
							userItem.addEventListener('keydown', function (e) {
								if (e.key === 'Tab') {
									e.preventDefault();
									var start = this.selectionStart;
									var end = this.selectionEnd; // set textarea value to: text before caret + tab + text after caret

									this.value =
										this.value.substring(0, start) +
										'\t' +
										this.value.substring(end); // put caret at right position again

									this.selectionStart = this.selectionEnd =
										start + 1;
								}
							});
						});
					});
					const buttons = document.querySelectorAll(
						'.components-toolbar-group button'
					);
					buttons.forEach((button) => {
						button.addEventListener('click', function () {
							const matches =
								document.querySelectorAll('.code textarea');
							matches.forEach((userItem) => {
								userItem.addEventListener(
									'keydown',
									function (e) {
										if (e.key === 'Tab') {
											e.preventDefault();
											var start = this.selectionStart;
											var end = this.selectionEnd; // set textarea value to: text before caret + tab + text after caret

											this.value =
												this.value.substring(0, start) +
												'\t' +
												this.value.substring(end); // put caret at right position again

											this.selectionStart =
												this.selectionEnd = start + 1;
										}
									}
								);
							});
						});
					});
				});

				/***/
			},

		/***/ './assets/src/site/js/bootstrap-general.js':
			/*!*************************************************!*\
  !*** ./assets/src/site/js/bootstrap-general.js ***!
  \*************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function bmAddBootstrapClasses() {
					jQuery('.devwp-Button-Wrapper a').addClass('btn');
				}

				window.addEventListener('load', bmAddBootstrapClasses);

				/***/
			},

		/***/ './assets/src/site/js/bootstrap-nav.js':
			/*!*********************************************!*\
  !*** ./assets/src/site/js/bootstrap-nav.js ***!
  \*********************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				jQuery(function () {
					// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
					const button = jQuery('.navbar-toggler'); // Return early if the button don't exist.

					if ('undefined' === typeof button) {
						return;
					}

					button.on('click', function () {
						if (jQuery('body').hasClass('devwp-Menu--Expanded')) {
							jQuery('body').addClass('devwp-Menu--Collapsing');
							setTimeout(function () {
								jQuery('body').removeClass(
									'devwp-Menu--Collapsing'
								);
							}, 700);
							jQuery('body').removeClass('devwp-Menu--Expanded');
						} else {
							jQuery('body').addClass('devwp-Menu--Expanded');
						}
					});
				}); // On document ready:

				jQuery(document).ready(function () {
					// Get all the dropdown menu items
					const dropdowns = document.querySelectorAll(
						'ul .menu-item-has-children'
					); // Check if the viewport is under 1200px

					if (window.innerWidth < 998) {
						// Loop through each dropdown menu item
						jQuery(document).ready(function ($) {
							//$('.dropdown-menu').hide();
							$('.menu-item-has-children > a').click(function (
								e
							) {
								e.preventDefault();

								if ($(this).parent().hasClass('focus')) {
									window.location.href = $(this).attr('href');
								} else {
									$(this).parent().addClass('focus');
								}
							});
						});
					}
				});

				/***/
			},

		/***/ './assets/src/site/js/date-time.js':
			/*!*****************************************!*\
  !*** ./assets/src/site/js/date-time.js ***!
  \*****************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				jQuery(document).ready(function () {
					populateCurrentDateTime();
				});

				function populateCurrentDateTime() {
					var now = new Date();
					var year = now.getFullYear();
					var month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based

					var day = String(now.getDate()).padStart(2, '0');
					var hours = String(now.getHours()).padStart(2, '0');
					var minutes = String(now.getMinutes()).padStart(2, '0');
					var seconds = String(now.getSeconds()).padStart(2, '0');
					jQuery('#year-now').text(year);
					jQuery('#month-now').text(month);
					jQuery('#day-now').text(day);
					jQuery('#time-now').text(
						hours + ':' + minutes + ':' + seconds
					);
				}

				/***/
			},

		/***/ './assets/src/site/js/floating-header-padded.js':
			/*!******************************************************!*\
  !*** ./assets/src/site/js/floating-header-padded.js ***!
  \******************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function bmFloatingHeader() {
					var top = jQuery('.devwp-Header__Inner').outerHeight();
					jQuery(
						'.devwp-Option--Header--Padded-First-Section section:first-of-type, .devwp-Option--Header--Floating .devwp-Section--Padded-First-Section'
					).css({
						'padding-top': top + 'px',
					});
					jQuery(
						'.devwp-Option--Header--Padded-First-Section section:first-of-type'
					).css({
						'padding-top': top + 'px',
					}); // Class to apply padding to sections in templates where page-level options arent displayed by default; archive.php, index.php etc.

					jQuery(
						'.devwp-Option--Header--Floating .devwp-Option--Header--Floating__Padding-Top'
					).css({
						'padding-top': top + 'px',
					});
				}

				jQuery(window).on('resize', function (e) {
					bmFloatingHeader();
				}); // This delays the function from running until 100 milliseconds after the page has loaded which resolves the bug of using window load event in Firefox

				setTimeout(function () {
					bmFloatingHeader();
				}, 200); // Use jQuery to run the bmFloatingHeader function on document ready

				/**jQuery(document).ready(function() {
	bmFloatingHeader();
});

// Use jQuery to run the bmFloatingHeader function on page resize
jQuery(window).resize(function() {
	bmFloatingHeader();
}
);
**/

				/***/
			},

		/***/ './assets/src/site/js/gravity-forms.js':
			/*!*********************************************!*\
  !*** ./assets/src/site/js/gravity-forms.js ***!
  \*********************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				window.addEventListener('load', function () {
					var element = jQuery(".devwp-Footer  input[type='submit']");
					jQuery(element).addClass('btn btn-color1');
				});

				/***/
			},

		/***/ './assets/src/site/js/header-5.js':
			/*!****************************************!*\
  !*** ./assets/src/site/js/header-5.js ***!
  \****************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function bmHeader5Searchform() {
					jQuery('.devwp-Header--5 .searchform-show').click(
						function () {
							jQuery('.devwp-Header--5__Searchform').toggleClass(
								'd-flex'
							);
						}
					);
				}

				window.addEventListener('load', bmHeader5Searchform);

				/***/
			},

		/***/ './assets/src/site/js/header-color.js':
			/*!********************************************!*\
  !*** ./assets/src/site/js/header-color.js ***!
  \********************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				var bmHeaderColor = function () {
					var top_section_background = jQuery(
						'section:first-of-type'
					).css('background-color');
					jQuery(
						'.devwp-Option--Header--Background--Color-Match #devwp-Header > div'
					).css({
						background: top_section_background,
					});
				};

				jQuery(window).resize(function () {
					bmHeaderColor();
				});
				jQuery(document).ready(function () {
					bmHeaderColor();
				});

				/***/
			},

		/***/ './assets/src/site/js/navigation.js':
			/*!******************************************!*\
  !*** ./assets/src/site/js/navigation.js ***!
  \******************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				/**
				 * File navigation.js.
				 *
				 * Handles toggling the navigation menu for small screens and enables TAB key
				 * navigation support for dropdown menus.
				 */
				jQuery(document).ready(function () {});

				(function () {
					const siteNavigation =
						document.getElementById('site-navigation'); // Return early if the navigation don't exist.

					if (!siteNavigation) {
						return;
					}

					const button =
						siteNavigation.getElementsByTagName('button')[0]; // Return early if the button don't exist.

					if ('undefined' === typeof button) {
						return;
					}

					const menu = siteNavigation.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.

					if ('undefined' === typeof menu) {
						button.style.display = 'none';
						return;
					}

					if (!menu.classList.contains('nav-menu')) {
						menu.classList.add('nav-menu');
					} // Toggle the .toggled class and the aria-expanded value each time the button is clicked.

					button.addEventListener('click', function () {
						siteNavigation.classList.toggle('toggled');

						if (button.getAttribute('aria-expanded') === 'true') {
							button.setAttribute('aria-expanded', 'false');
							jQuery('body').removeClass('devwp-Menu--Expanded'); // Add a class of 'devwp-Menu--Collapsing' for 0.8s to allow the menu to animate.

							jQuery('body').addClass('devwp-Menu--Collapsing');
							setTimeout(function () {
								jQuery('body').removeClass(
									'devwp-Menu--Collapsing'
								);
							}, 800);
						} else {
							button.setAttribute('aria-expanded', 'true');
							jQuery('body').addClass('devwp-Menu--Expanded');
							jQuery('body').addClass('testing');
						}
					}); // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.

					document.addEventListener('click', function (event) {
						const isClickInside = siteNavigation.contains(
							event.target
						);

						if (!isClickInside) {
							siteNavigation.classList.remove('toggled');
							button.setAttribute('aria-expanded', 'false');
						}
					}); // Get all the link elements within the menu.

					const links = menu.getElementsByTagName('a'); // Get all the link elements with children within the menu.

					const linksWithChildren = menu.querySelectorAll(
						'.menu-item-has-children > a, .page_item_has_children > a'
					); // Toggle focus each time a menu link is focused or blurred.

					for (const link of links) {
						link.addEventListener('focus', toggleFocus, true);
						link.addEventListener('blur', toggleFocus, true);
					} // Toggle focus each time a menu link with children receive a touch event.

					for (const link of linksWithChildren) {
						link.addEventListener('touchstart', toggleFocus, false);
					}
					/**
					 * Sets or removes .focus class on an element.
					 */

					function toggleFocus() {
						if (event.type === 'focus' || event.type === 'blur') {
							let self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

							while (!self.classList.contains('nav-menu')) {
								// On li elements toggle the class .focus.
								if ('li' === self.tagName.toLowerCase()) {
									self.classList.toggle('focus');
								}

								self = self.parentNode;
							}
						}

						if (event.type === 'touchstart') {
							const menuItem = this.parentNode;
							event.preventDefault();

							for (const link of menuItem.parentNode.children) {
								if (menuItem !== link) {
									link.classList.remove('focus');
								}
							}

							menuItem.classList.toggle('focus');
						}
					}
				})();

				/***/
			},

		/***/ './assets/src/site/js/not-top-scroll.js':
			/*!**********************************************!*\
  !*** ./assets/src/site/js/not-top-scroll.js ***!
  \**********************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function scrollFunction() {
					if (
						document.body.scrollTop > 0 ||
						document.documentElement.scrollTop > 0
					) {
						jQuery('body').addClass('devwp-Header--Not-Top');
					} else {
						jQuery('body').removeClass('devwp-Header--Not-Top');
					}
				}

				window.addEventListener('scroll', scrollFunction);

				/***/
			},

		/***/ './assets/src/site/js/progress-bar.js':
			/*!********************************************!*\
  !*** ./assets/src/site/js/progress-bar.js ***!
  \********************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function bmProgressBar() {
					var winScroll =
						document.body.scrollTop ||
						document.documentElement.scrollTop;
					var height =
						document.documentElement.scrollHeight -
						document.documentElement.clientHeight;
					var scrolled = (winScroll / height) * 100;
					var progressbar = document.getElementById(
						'devwp-Scroll-Progress-Bar'
					);

					if (progressbar) {
						progressbar.style.width = scrolled + '%';
					}
				}

				window.addEventListener('scroll', bmProgressBar);

				/***/
			},

		/***/ './blocks/google-map/google-map.js':
			/*!*****************************************!*\
  !*** ./blocks/google-map/google-map.js ***!
  \*****************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				jQuery(function () {
					jQuery('.devwp-Google-Map')
						.click(function (e) {
							jQuery(this)
								.find('iframe')
								.css('pointer-events', 'all');
						})
						.mouseleave(function (e) {
							jQuery(this)
								.find('iframe')
								.css('pointer-events', 'none');
						});
				});

				/***/
			},

		/***/ './blocks/modal/modal.js':
			/*!*******************************!*\
  !*** ./blocks/modal/modal.js ***!
  \*******************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function dev_wp_modal(modalClass) {
					//if cookie hasn't been set...
					if (document.cookie.indexOf('ModalShown=true') < 0) {
						jQuery('.' + modalClass).modal('show'); //Modal has been shown, now set a cookie so it never comes back

						jQuery('.my' + modalClass + 'Close').click(function () {
							jQuery('.' + modalClass).modal('hide');
						});
						document.cookie =
							'ModalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
					}
				}

				function dev_wp_modal_display(modalClass) {
					setTimeout(dev_wp_modal(modalClass), '1000');
				} //jQuery(document).ready(dev_wp_modal_display("devwp-Modal"));

				/***/
			},

		/***/ './blocks/text-video/text-video.js':
			/*!*****************************************!*\
  !*** ./blocks/text-video/text-video.js ***!
  \*****************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				jQuery(document).ready(function () {
					(function () {
						getVideos();
					})();

					function getVideos() {
						var videos = document.getElementsByClassName(
							'devwp-Text-Video__Youtube-Player'
						);

						for (var i = 0; i < videos.length; i++) {
							var video = videos[i];
							var placeholder =
								video.getAttribute('data-thumbnail') || '';
							var id = video.getAttribute('data-id');
							var thumb = document.createElement('div');
							thumb.classList.add('thumbnail-remove');
							thumb.innerHTML = placeholder
								? createCustomThumbail(placeholder)
								: createThumbail(id);
							video.appendChild(thumb);
							thumb.addEventListener('click', function () {
								// Add the 'loaded' class here when the thumbnail is clicked
								jQuery(this)
									.closest(
										'.devwp-Text-Video__Youtube-Player'
									)
									.addClass('loaded'); // Create the iframe after adding the class

								createIframe(
									this.parentNode,
									this.parentNode.getAttribute('data-id')
								);
							});
						}
					}

					function createCustomThumbail(url) {
						return (
							'<img class="devwp-Text-Video__Video-Thumbnail" src="' +
							url +
							'" alt="Youtube Preview">'
						);
					}

					function createThumbail(id) {
						return (
							'<img class="devwp-Text-Video__Video-Thumbnail" src="//i.ytimg.com/vi_webp/' +
							id +
							'/maxresdefault.webp" alt="Youtube Preview">'
						);
					}

					function createIframe(video, id) {
						var iframe = document.createElement('iframe');
						iframe.setAttribute(
							'src',
							'//www.youtube.com/embed/' +
								id +
								'?autoplay=1&color=white&autohide=2&modestbranding=1&enablejsapi=1&showinfo=0&rel=0'
						);
						iframe.setAttribute('frameborder', '0');
						iframe.setAttribute('class', 'youtube-iframe');
						iframe.setAttribute('playsinline', '1');
						iframe.setAttribute('allowfullscreen', '1');
						video.firstChild.replaceWith(iframe);
						video.lastChild.remove();
					} // Remove Html5 video thumbnail and play button on click of devwp-Text-Video__Video-Thumbnail	with jQuery(this).closest(".devwp-Text-Video__Html5-Player").addClass("loaded");

					jQuery('.devwp-Text-Video__Html5-Player').click(
						function () {
							jQuery(this)
								.closest('.devwp-Text-Video__Html5-Player')
								.addClass('loaded');
						}
					);
				});

				/***/
			},

		/***/ './node_modules/aos/dist/aos.css':
			/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ './node_modules/lightbox2/dist/css/lightbox.min.css':
			/*!**********************************************************!*\
  !*** ./node_modules/lightbox2/dist/css/lightbox.min.css ***!
  \**********************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ './node_modules/owl.carousel/dist/assets/owl.carousel.min.css':
			/*!********************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.carousel.min.css ***!
  \********************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/***/ './node_modules/owl.carousel/dist/assets/owl.theme.default.min.css':
			/*!*************************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.theme.default.min.css ***!
  \*************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// extracted by mini-css-extract-plugin
				/***/
			},

		/******/
	}
);
//# sourceMappingURL=dev-wp.js.map
