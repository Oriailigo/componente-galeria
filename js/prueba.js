
// dentro de la estrucutra del corrousel:






Plugin.prototype.setTranslate = function (el, xValue, yValue) {
    // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
    if (this.s.useLeft) {
        el.style.left = xValue;
    } else {
        _lgUtils2.default.setVendor(el, 'Transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px)');
    }
};












Plugin.prototype.mousewheel = function () {
    var _this = this;
    _lgUtils2.default.on(_this.outer, 'mousewheel.lg', function (e) {

        if (!e.deltaY) {
            return;
        }

        if (e.deltaY > 0) {
            _this.goToPrevSlide();
        } else {
            _this.goToNextSlide();
        }

        e.preventDefault();
    });
};



/////////////////////////
////////////////////////
//////////////////////////




/**!
* lg-pager.js | 1.0.0 | October 5th 2016
* http://sachinchoolur.github.io/lg-pager.js
* Copyright (c) 2016 Sachin N; 
* @license GPLv3 
*/(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgPager = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
if (typeof define === "function" && define.amd) {
    define([], factory);
} else if (typeof exports !== "undefined") {
    factory();
} else {
    var mod = {
        exports: {}
    };
    factory();
    global.lgPager = mod.exports;
}
})(this, function () {
'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

var pagerDefaults = {
    pager: false
};

var Pager = function Pager(element) {

    this.el = element;

    this.core = window.lgData[this.el.getAttribute('lg-uid')];
    this.core.s = _extends({}, pagerDefaults, this.core.s);

    if (this.core.s.pager && this.core.items.length > 1) {
        this.init();
    }

    return this;
};

Pager.prototype.init = function () {
    var _this = this;
    var pagerList = '';
    var $pagerCont;
    var $pagerOuter;
    var timeout;

    _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div class="lg-pager-outer"></div>');

    if (_this.core.s.dynamic) {
        for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
            pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[j].thumb + '" /></div></span>';
        }
    } else {
        for (var i = 0; i < _this.core.items.length; i++) {
            if (!_this.core.s.exThumbImage) {
                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.items[i].querySelector('img').getAttribute('src') + '" /></div></span>';
            } else {
                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.items[i].getAttribute(_this.core.s.exThumbImage) + '" /></div></span>';
            }
        }
    }

    $pagerOuter = _this.core.outer.querySelector('.lg-pager-outer');

    $pagerOuter.innerHTML = pagerList;

    $pagerCont = _this.core.outer.querySelectorAll('.lg-pager-cont');
    for (var k = 0; k < $pagerCont.length; k++) {

        /*jshint loopfunc: true */
        (function (index) {
            utils.on($pagerCont[index], 'click.lg touchend.lg', function () {
                _this.core.index = index;
                _this.core.slide(_this.core.index, false, false);
            });
        })(k);
    }

    utils.on($pagerOuter, 'mouseover.lg', function () {
        clearTimeout(timeout);
        utils.addClass($pagerOuter, 'lg-pager-hover');
    });

    utils.on($pagerOuter, 'mouseout.lg', function () {
        timeout = setTimeout(function () {
            utils.removeClass($pagerOuter, 'lg-pager-hover');
        });
    });

    utils.on(_this.core.el, 'onBeforeSlide.lgtm', function (e) {
        for (var n = 0; n < $pagerCont.length; n++) {
            utils.removeClass($pagerCont[n], 'lg-pager-active');
            if (e.detail.index === n) {
                utils.addClass($pagerCont[n], 'lg-pager-active');
            }
        }
    });
};

Pager.prototype.destroy = function () {};

window.lgModules.pager = Pager;
});

},{}]},{},[1])(1)
});











/**!
* lg-hash.js | 1.0.0 | October 5th 2016
* http://sachinchoolur.github.io/lg-hash.js
* Copyright (c) 2016 Sachin N; 
* @license GPLv3 
*/(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgHash = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
if (typeof define === "function" && define.amd) {
    define([], factory);
} else if (typeof exports !== "undefined") {
    factory();
} else {
    var mod = {
        exports: {}
    };
    factory();
    global.lgHash = mod.exports;
}
})(this, function () {
'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

var hashDefaults = {
    hash: true
};
var Hash = function Hash(element) {
    this.el = element;
    this.core = window.lgData[this.el.getAttribute('lg-uid')];
    this.core.s = _extends({}, hashDefaults, this.core.s);
    if (this.core.s.hash) {
        this.oldHash = window.location.hash;
        this.init();
    }

    return this;
};

Hash.prototype.init = function () {
    var _this = this;
    var _hash;

    // Change hash value on after each slide transition
    utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
        window.location.hash = 'lg=' + _this.core.s.galleryId + '&slide=' + event.detail.index;
    });

    // Listen hash change and change the slide according to slide value
    utils.on(window, 'hashchange.lghash', function () {
        _hash = window.location.hash;
        var _idx = parseInt(_hash.split('&slide=')[1], 10);

        // it galleryId doesn't exist in the url close the gallery
        if (_hash.indexOf('lg=' + _this.core.s.galleryId) > -1) {
            _this.core.slide(_idx, false, false);
        } else if (_this.core.lGalleryOn) {
            _this.core.destroy();
        }
    });
};

Hash.prototype.destroy = function () {
    if (!this.core.s.hash) {
        return;
    }

    // Reset to old hash value
    if (this.oldHash && this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0) {
        window.location.hash = this.oldHash;
    } else {
        if (history.pushState) {
            history.pushState('', document.title, window.location.pathname + window.location.search);
        } else {
            window.location.hash = '';
        }
    }

    utils.off(this.core.el, '.lghash');
};

window.lgModules.hash = Hash;
});

},{}]},{},[1])(1)
});





/**!
* lg-share.js | 1.3.0 | May 20th 2020
* http://sachinchoolur.github.io/lg-share.js
* Copyright (c) 2016 Sachin N; 
* @license GPLv3 
*/(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgShare = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
if (typeof define === "function" && define.amd) {
define([], factory);
} else if (typeof exports !== "undefined") {
factory();
} else {
var mod = {
    exports: {}
};
factory();
global.lgShare = mod.exports;
}
})(this, function () {
'use strict';

var _extends = Object.assign || function (target) {
for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
}

return target;
};

// var shareSefaults = {
//     share: false,
//     facebook: true,
//     facebookDropdownText: 'Facebook',
//     twitter: true,
//     twitterDropdownText: 'Twitter',
//     googlePlus: true,
//     googlePlusDropdownText: 'GooglePlus',
//     pinterest: true,
//     pinterestDropdownText: 'Pinterest'
// };

function toCamelCase(input) {
return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
});
}

// var Share = function Share(element) {

//     this.el = element;

//     this.core = window.lgData[this.el.getAttribute('lg-uid')];
//     this.core.s = _extends({}, shareSefaults, this.core.s);

//     if (this.core.s.share) {
//         this.init();
//     }

//     return this;
// };

// Share.prototype.init = function () {
//     var _this = this;
//     var shareHtml = '<button aria-label="Share" aria-haspopup="true" aria-expanded="false" id="lg-share" class="lg-icon">' + '<ul class="lg-dropdown" style="position: absolute;">';
//     shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
//     shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
//     shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
//     shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
//     shareHtml += '</ul></button>';

//     this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', shareHtml);
//     this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div id="lg-dropdown-overlay"></div>');
//     var shareButton = document.getElementById('lg-share');
//     utils.on(shareButton, 'click.lg', function () {
//         if (utils.hasClass(_this.core.outer, 'lg-dropdown-active')) {
//             utils.removeClass(_this.core.outer, 'lg-dropdown-active');
//             shareButton.setAttribute('aria-expanded', false);
//         } else {
//             utils.addClass(_this.core.outer, 'lg-dropdown-active');
//             shareButton.setAttribute('aria-expanded', true);
//         }
//     });

//     utils.on(document.getElementById('lg-dropdown-overlay'), 'click.lg', function () {
//         utils.removeClass(_this.core.outer, 'lg-dropdown-active');
//         shareButton.setAttribute('aria-expanded', false);
//     });

//     utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {

//         setTimeout(function () {
//             if (_this.core.s.facebook) {
//                 document.getElementById('lg-share-facebook').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _this.getSharePropsUrl(event.detail.index, 'data-facebook-share-url'));
//             }
//             if (_this.core.s.twitter) {
//                 document.getElementById('lg-share-twitter').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + _this.getShareProps(event.detail.index, 'data-tweet-text') + '&url=' + _this.getSharePropsUrl(event.detail.index, 'data-twitter-share-url'));
//             }
//             if (_this.core.s.googlePlus) {
//                 document.getElementById('lg-share-googleplus').setAttribute('href', 'https://plus.google.com/share?url=' + _this.getSharePropsUrl(event.detail.index, 'data-googleplus-share-url'));
//             }
//             if (_this.core.s.pinterest) {
//                 document.getElementById('lg-share-pinterest').setAttribute('href', 'http://www.pinterest.com/pin/create/button/?url=' + _this.getSharePropsUrl(event.detail.index, 'data-pinterest-share-url') + '&media=' + encodeURIComponent(_this.getShareProps(event.detail.index, 'href') || _this.getShareProps(event.detail.index, 'data-src')) + '&description=' + _this.getShareProps(event.detail.index, 'data-pinterest-text'));
//             }
//         }, 100);
//     });
// };

// Share.prototype.getSharePropsUrl = function (index, prop) {
//     var shareProp = this.getShareProps(index, prop);
//     if (!shareProp) {
//         shareProp = window.location.href;
//     }
//     return encodeURIComponent(shareProp);
// };

// Share.prototype.getShareProps = function (index, prop) {
//     var shareProp = '';
//     if (this.core.s.dynamic) {
//         shareProp = this.core.items[index][toCamelCase(prop.replace('data-', ''))];
//     } else if (this.core.items[index].getAttribute(prop)) {
//         shareProp = this.core.items[index].getAttribute(prop);
//     }
//     return shareProp;
// };

// Share.prototype.destroy = function () {};

// window.lgModules.share = Share;
});

},{}]},{},[1])(1)
});



/**!
* lg-rotate.js | 1.2.0-beta.0 | October 5th 2020
* http://sachinchoolur.github.io/lg-rotate.js
* Copyright (c) 2016 Sachin N; 
* @license GPLv3 
*/(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgRotate = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
if (typeof define === "function" && define.amd) {
    define([], factory);
} else if (typeof exports !== "undefined") {
    factory();
} else {
    var mod = {
        exports: {}
    };
    factory();
    global.lgRotate = mod.exports;
}
})(this, function () {
'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

var rotateDefaults = {
    rotate: false,
    rotateLeft: false,
    rotateRight: false,
    flipHorizontal: false,
    flipVertical: false
};

var Rotate = function Rotate(element) {

    this.core = window.lgData[element.getAttribute('lg-uid')];
    this.core.s = _extends({}, rotateDefaults, this.core.s);

    if (this.core.s.rotate && this.core.doCss()) {
        this.init();
    }

    return this;
};

Rotate.prototype.buildTemplates = function () {
    var rotateIcons = '';
    if (this.core.s.flipVertical) {
        rotateIcons += '<button aria-label="flip vertical" class="lg-flip-ver lg-icon"></button>';
    }
    if (this.core.s.flipHorizontal) {
        rotateIcons += '<button aria-label="Flip horizontal" class="lg-flip-hor lg-icon"></button>';
    }
    if (this.core.s.rotateLeft) {
        rotateIcons += '<button aria-label="Rotate left" class="lg-rotate-left lg-icon"></button>';
    }
    if (this.core.s.rotateRight) {
        rotateIcons += '<button aria-label="Rotate right" class="lg-rotate-right lg-icon"></button>';
    }
    this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', rotateIcons);
};

Rotate.prototype.init = function () {
    var _this = this;
    this.buildTemplates();

    // Save rotate config for each item to persist its rotate, flip values
    // even after navigating to diferent slides
    this.rotateValuesList = {};

    // event triggered after appending slide content
    utils.on(_this.core.el, 'onAferAppendSlide.lgtmrotate', function (event) {
        // Get the current element
        var imageWrap = _this.core.___slide[event.detail.index].querySelector('.lg-img-wrap');
        utils.wrap(imageWrap, 'lg-img-rotate');
    });

    utils.on(_this.core.outer.querySelector('.lg-rotate-left'), 'click.lg', this.rotateLeft.bind(this));
    utils.on(_this.core.outer.querySelector('.lg-rotate-right'), 'click.lg', this.rotateRight.bind(this));
    utils.on(_this.core.outer.querySelector('.lg-flip-hor'), 'click.lg', this.flipHorizontal.bind(this));
    utils.on(_this.core.outer.querySelector('.lg-flip-ver'), 'click.lg', this.flipVertical.bind(this));

    // Reset rotate on slide change
    utils.on(_this.core.el, 'onBeforeSlide.lgtmrotate', function (event) {
        if (!_this.rotateValuesList[event.detail.index]) {
            _this.rotateValuesList[event.detail.index] = {
                rotate: 0,
                flipHorizontal: 1,
                flipVertical: 1
            };
        }
    });
};

Rotate.prototype.applyStyles = function () {
    var image = this.core.___slide[this.core.index].querySelector('.lg-img-rotate');
    utils.setVendor(image, 'Transform', 'rotate(' + this.rotateValuesList[this.core.index].rotate + 'deg)' + ' scale3d(' + this.rotateValuesList[this.core.index].flipHorizontal + ', ' + this.rotateValuesList[this.core.index].flipVertical + ', 1)');
};

Rotate.prototype.rotateLeft = function () {
    this.rotateValuesList[this.core.index].rotate -= 90;
    this.applyStyles();
};

Rotate.prototype.rotateRight = function () {
    this.rotateValuesList[this.core.index].rotate += 90;
    this.applyStyles();
};

Rotate.prototype.getCurrentRotation = function (el) {
    if (!el) {
        return 0;
    }
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue('-webkit-transform') || st.getPropertyValue('-moz-transform') || st.getPropertyValue('-ms-transform') || st.getPropertyValue('-o-transform') || st.getPropertyValue('transform') || 'none';
    if (tm !== 'none') {
        var values = tm.split('(')[1].split(')')[0].split(',');
        if (values) {
            var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            return angle < 0 ? angle + 360 : angle;
        }
    }
    return 0;
};

Rotate.prototype.flipHorizontal = function () {
    var rotateEl = this.core.___slide[this.core.index].querySelector('.lg-img-rotate');
    var currentRotation = this.getCurrentRotation(rotateEl);
    var rotateAxis = 'flipHorizontal';
    if (currentRotation === 90 || currentRotation === 270) {
        rotateAxis = 'flipVertical';
    }
    this.rotateValuesList[this.core.index][rotateAxis] *= -1;
    this.applyStyles();
};

Rotate.prototype.flipVertical = function () {
    var rotateEl = this.core.___slide[this.core.index].querySelector('.lg-img-rotate');
    var currentRotation = this.getCurrentRotation(rotateEl);
    var rotateAxis = 'flipVertical';
    if (currentRotation === 90 || currentRotation === 270) {
        rotateAxis = 'flipHorizontal';
    }
    this.rotateValuesList[this.core.index][rotateAxis] *= -1;

    this.applyStyles();
};

Rotate.prototype.destroy = function () {
    // Unbind all events added by lightGallery rotate plugin
    utils.off(this.core.el, '.lgtmrotate');
    this.rotateValuesList = {};
};

window.lgModules.Rotate = Rotate;
});

},{}]},{},[1])(1)
});