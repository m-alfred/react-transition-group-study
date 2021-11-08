var CURRENT_PROTOCOL = location.protocol;
var BAR_ICON_SHARE = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_share.png";
var BAR_ICON_SHARE_WHITE = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_share_white.png";
var BAR_ICON_SHARE2 = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_share.png";
var BAR_ICON_FAVORITE = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_favorite.png";
var BAR_ICON_FAVORITE_WHITE = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_favorite_white.png";
var BAR_ICON_SEARCH = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_search2.png";
var BAR_ICON_SEARCH3 = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_search3.png";
var BAR_ICON_SEARCH_WHITE = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/icon_search_white2.png";
var BAR_ICON_D11_SHARE = CURRENT_PROTOCOL + "//static2.51fanli.net/open/images/icon/d11-share.png";
var SERVER_TIMESTAMP;
(function(w) {
    String.prototype.format = function() {
        for (var temS = this, i = 0; i < arguments.length; ++i) {
            temS = temS.replace(new RegExp("\\{" + i + "\\}","g"), arguments[i]);
        }
        return temS;
    }
    String.prototype.setCookie = function(value, expiryDays, domain, path, secure) {
        if (this.length == 0) {
            return;
        }
        var builder = [this, "=", escape(value)];
        if (expiryDays) {
            var date = new Date();
            date.setTime(date.getTime() + (expiryDays * 86400000));
            builder.push(";expires=");
            builder.push(date.toUTCString());
        }
        if (domain) {
            builder.push(";domain=");
            builder.push(domain);
        }
        if (path) {
            builder.push(";path=");
            builder.push(path);
        }
        if (secure) {
            builder.push(";secure");
        }
        document.cookie = builder.join("");
    }
    ;
    String.prototype.setCookieAlias = function(value, expiryDays, domain, path, secure) {
        if (this.length == 0) {
            return;
        }
        var builder = [this, "=", encodeURIComponent(value)];
        if (expiryDays) {
            var date = new Date();
            date.setTime(date.getTime() + (expiryDays * 86400000));
            builder.push(";expires=");
            builder.push(date.toUTCString());
        }
        if (domain) {
            builder.push(";domain=");
            builder.push(domain);
        }
        if (path) {
            builder.push(";path=");
            builder.push(path);
        }
        if (secure) {
            builder.push(";secure");
        }
        document.cookie = builder.join("");
    }
    ;
    String.prototype.getCookie = function() {
        if (this.length == 0) {
            return '';
        }
        var re = new RegExp('\\b' + this + '\\s*=\\s*([^;]*)','i');
        var match = re.exec(document.cookie);
        return (match && match.length > 1 ? unescape(match[1]) : '');
    }
    ;
    String.prototype.getCookieAlias = function() {
        if (this.length == 0) {
            return '';
        }
        var re = new RegExp('\\b' + this + '\\s*=\\s*([^;]*)','i');
        var match = re.exec(document.cookie);
        return (match && match.length > 1 ? decodeURIComponent(match[1]) : '');
    }
    ;
    function StringBuilder() {
        this.strings = new Array();
    }
    StringBuilder.prototype.append = function(str) {
        this.strings.push(str);
        return this;
    }
    ;
    StringBuilder.prototype.toString = function() {
        return this.strings.join("");
    }
    ;
    var GeneralRegs = {
        alipay: /^(([a-zA-Z0-9])+([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4}))|(0{0,1}1[3456789]{1}[0-9]{9})$/ig,
        bankaccount: /^([a-zA-Z0-9]|-)+$/ig,
        blank: /^\s*$/,
        cellphone: /^0{0,1}1[3456789]{1}[0-9]{9}$/ig,
        email: /^([a-zA-Z0-9])+([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/ig,
        icard: /^(\d{18}|\d{15}|\d{17}x)$/ig,
        ihkcard: /^[a-z0-9]{1}\d{6,7}[a-z0-9]{1}$/ig,
        itwcard: /^[a-z]{1}\d{8,}$/ig,
        uname: /^[\u4e00-\u9fa5a-zA-Z\s]+$/ig,
        url: /^(?:(http(s)?\:)?\/\/)?[A-Za-z0-9-]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/ig,
        vercode: /^\d{6}$/
    };
    var FLNS = {
        "register": function() {
            var a = arguments, o = null, i, j, d, rt;
            for (i = 0; i < a.length; ++i) {
                d = a[i].split(".");
                rt = d[0];
                eval('if (typeof ' + rt + ' == "undefined"){' + rt + ' = {add: function (k, v) { if (!this[k]) { this[k] = v;} return this;} };} o = ' + rt + ';');
                for (j = 1; j < d.length; ++j) {
                    o[d[j]] = o[d[j]] || {};
                    o = o[d[j]];
                    o.add = function(k, v) {
                        if (!this[k]) {
                            this[k] = v;
                        }
                        return this;
                    }
                    ;
                }
            }
            return o;
        }
    };
    var InputValidation = {
        "isNumber": function(intArg) {
            return Object.prototype.toString.call(intArg) === "[object Number]";
        },
        "isEmail": function(emailStr) {
            GeneralRegs.email.lastIndex = 0;
            return GeneralRegs.email.test(emailStr);
        },
        "isName": function(nameStr) {
            GeneralRegs.uname.lastIndex = 0;
            return GeneralRegs.uname.test(nameStr);
        },
        "isUrl": function(urlStr) {
            GeneralRegs.url.lastIndex = 0;
            return GeneralRegs.url.test(urlStr);
        },
        "isPhone": function(phoneArg) {
            GeneralRegs.cellphone.lastIndex = 0;
            return GeneralRegs.cellphone.test(phoneArg);
        },
        "isIcard": function(icardArg) {
            GeneralRegs.icard.lastIndex = 0;
            return GeneralRegs.icard.test(icardArg);
        },
        "isAlipay": function(alipaydArg) {
            GeneralRegs.alipay.lastIndex = 0;
            return GeneralRegs.alipay.test(alipaydArg);
        },
        "isBankaccount": function(bankaccountdArg) {
            GeneralRegs.bankaccount.lastIndex = 0;
            return GeneralRegs.bankaccount.test(bankaccountdArg);
        }
    };
    w.StringBuilder = StringBuilder;
    w.InputValidation = InputValidation;
    w.GeneralRegs = GeneralRegs;
    w.FLNS = FLNS;
}
)(window);
(function() {
    $.extend(FLNS.register("Fanli"), {
        "Class": function(parent) {
            var klass = function() {
                this.init.apply(this, arguments);
            };
            if (parent) {
                var subclass = function() {};
                subclass.prototype = parent.prototype;
                klass.prototype = new subclass();
            }
            klass.prototype.init = function() {}
            ;
            klass.fn = klass.prototype;
            klass.fn.parent = klass;
            klass.extend = function(obj) {
                var extended = obj.extended;
                for (var i in obj) {
                    klass[i] = obj[i];
                }
                if (extended)
                    extended(klass);
            }
            ;
            klass.inculde = function(obj) {
                var included = obj.included;
                for (var i in obj) {
                    klass.fn[i] = obj[i];
                }
                if (included)
                    included(klass);
            }
            ;
            klass.proxy = function(func) {
                var self = this;
                return (function() {
                    return func.apply(self, arguments);
                }
                );
            }
            ;
            klass.fn.proxy = klass.proxy;
            return klass;
        }
    });
    $.extend(FLNS.register("Fanli.Utility"), {
        "random": function(n) {
            var uid = Math.random().toString(16).substr(2, n);
            while (uid.length < n) {
                uid = Math.random().toString(16).substr(2, n);
            }
            return uid;
        },
        "guid": function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0
                  , v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            }).toUpperCase();
        },
        "staticTimeStamp": function(t) {
            var getTime = new Date().getTime();
            var returnts = parseInt(getTime / 300000);
            var currentScriptPath = $('link[rel=stylesheet]').eq(0).attr('href');
            if (t) {
                returnts = parseInt(getTime / (60 * 1000 * t));
            } else if (typeof (currentScriptPath) !== "undefined") {
                var timeStampArr = currentScriptPath.match(/^.*[\?\&](\d+\_\d+){1}$/i);
                if (timeStampArr) {
                    returnts = timeStampArr[1];
                }
            }
            return returnts;
        },
        "isLogin": "prouserid".getCookie() > 0,
        "isHttpsPage": location.protocol == "https:",
        "rootDomain": (function() {
            var tryExecLocation = /^.*?(\.(?:51)?fanli\.com)$/ig.exec(location.hostname);
            var rootDomain = ".fanli.com";
            if (tryExecLocation) {
                rootDomain = tryExecLocation[1];
            }
            return rootDomain;
        }()),
        "isSuperBranch": location.href.indexOf('super.fanli.com/h5') > -1,
        "gtAppVersion": function(comparedVer) {
            var ua = navigator.userAgent.toLocaleLowerCase();
            var uaReg = /fanli(?:-super)?\/(.*) \(/ig;
            var tryRegExec = uaReg.exec(ua) || /(?:c_v=)([^&]*)/gi.exec(location.search);
            var actualVerArr;
            var comparedVerArr;
            var av1, av2, av3, av4;
            var cv1, cv2, cv3, cv4;
            if (!comparedVer || !tryRegExec) {
                return false;
            }
            comparedVerArr = comparedVer.split(".");
            actualVerArr = tryRegExec[1].split(".");
            if (comparedVerArr.length < 4 || actualVerArr.length < 4) {
                return false;
            }
            av1 = parseInt(actualVerArr[0]);
            av2 = parseInt(actualVerArr[1]);
            av3 = parseInt(actualVerArr[2]);
            av4 = parseInt(actualVerArr[3]);
            cv1 = parseInt(comparedVerArr[0]);
            cv2 = parseInt(comparedVerArr[1]);
            cv3 = parseInt(comparedVerArr[2]);
            cv4 = parseInt(comparedVerArr[3]);
            if (((isNaN(av1) ? 0 : (av1 * 100000000)) + (isNaN(av2) ? 0 : (av2 * 1000000)) + (isNaN(av3) ? 0 : (av3 * 10000)) + (isNaN(av4) ? 0 : av4)) >= ((isNaN(cv1) ? 0 : (cv1 * 100000000)) + (isNaN(cv2) ? 0 : (cv2 * 1000000)) + (isNaN(cv3) ? 0 : (cv3 * 10000)) + (isNaN(cv4) ? 0 : cv4))) {
                return true;
            } else {
                return false;
            }
        },
        "bridgeApp": function(ifanliurl) {
            var ua = navigator.userAgent.toLowerCase();
            if (/ip(hone|od|ad)/i.test(ua) && ua.indexOf("fanli") === -1) {
                window.location.href = ifanliurl;
                return;
            }
            var iframe = document.createElement("iframe");
            var iframeStyle = document.createAttribute("style");
            var iframeSrc = document.createAttribute("src");
            document.body.appendChild(iframe);
            iframeStyle.nodeValue = "display:none;width:0;height:0;";
            iframeSrc.nodeValue = ifanliurl;
            iframe.setAttributeNode(iframeStyle);
            iframe.setAttributeNode(iframeSrc);
            setTimeout(function() {
                document.body.removeChild(iframe);
            }, 250);
        },
        "rebuildCallback": function(cb, holdcb) {
            var t = cb;
            if ($.isFunction(cb)) {
                t = "fanliHybrid_" + (+new Date());
                while (window[t]) {
                    t = "fanliApp_" + (+new Date());
                }
                window[t] = function() {
                    cb.apply(null, Array.prototype.slice.call(arguments, 0));
                    if (!holdcb) {
                        delete window[t];
                    }
                }
            }
            return t;
        },
        "currentDomain": document.domain,
        "fanliTitle": function(imgTitle) {
            if (typeof FLFEBridge != 'undefined' && FLFEBridge.title && Fanli.Utility.gtAppVersion("5.10.0.0")) {
                FLFEBridge.title(imgTitle);
            }
        },
        "fanliBg": function(options) {
            if (typeof FLFEBridge != 'undefined' && FLFEBridge.bg && Fanli.Utility.gtAppVersion("5.10.0.0")) {
                FLFEBridge.bg(options);
            }
        },
        "fanliBtns": function(btnsArr) {
            if (typeof FLFEBridge != 'undefined' && FLFEBridge.btns && Fanli.Utility.gtAppVersion("5.10.0.0")) {
                FLFEBridge.btns(btnsArr);
            }
        },
        "showPopLayer": function(url) {
            if (Fanli.Utility.gtAppVersion("5.4.0.0") && InputValidation.isUrl(url)) {
                Fanli.Utility.bridgeApp("ifanli://m.51fanli.com/app/show/web?style=5&url={0}".format(encodeURIComponent(url)));
            }
        },
        "isIos": /ip(hone|od|ad)/i.test(navigator.userAgent.toLowerCase()),
        "convert2HttpsProtocol": function(url) {
            if (!InputValidation.isUrl(url)) {
                return '';
            }
            if (/^https\:/i.test(url)) {
                return url;
            }
            return url.replace(/^(http)\:/i, "$1s:");
        },
        "repairUrl": function(url) {
            if (!InputValidation.isUrl(url)) {
                return '';
            }
            return CURRENT_PROTOCOL + '//' + url.replace(/^(?:(?:http(?:s)?\:)?\/\/)?/i, '');
        },
        "getTodayExpire": function(timestamp) {
            timestamp = timestamp * 1000 || new Date().getTime();
            return (new Date(timestamp + 86400000).setHours(0, 0, 0, 0) - timestamp) / 86400000;
        },
        getUrlParam: function(url, name) {
            if (arguments.length == 1) {
                name = url;
                url = window.location.href;
            }
            var reg = new RegExp("(?:[\?&])" + name + "=([^&]*)&?");
            var r = url.match(reg);
            if (r != null)
                return decodeURIComponent(r[1]);
            return null;
        },
        delUrlParam: function(url, q) {
            url = url.replace(new RegExp('([\?&])' + q + '=([^&]*)','g'), function(match, p1) {
                if (p1 == '?') {
                    return '?';
                }
                return '';
            }).replace(/(.*)\?$/, '$1');
            return url;
        },
        "addParamToUrl": function(url, objParam, needReplace) {
            var needReplace = needReplace || false;
            var arrParam = []
              , hash = '';
            var name, mix;
            if (!url || !objParam || !Object.keys(objParam).length) {
                return '';
            }
            url = url.replace(/(#.*)$/ig, function(res) {
                hash = res;
                return '';
            });
            for (name in objParam) {
                if (Fanli.Utility.getUrlParam(url, name) !== null) {
                    if (needReplace) {
                        url = url.replace(new RegExp("([\?&])" + name + "=([^&]*)"), '$1{0}={1}'.format(name, objParam[name]));
                    }
                } else {
                    arrParam.push('{0}={1}'.format(name, objParam[name]));
                }
            }
            mix = arrParam.length ? (url.indexOf('?') > -1 ? '&' : '?') : '';
            url = "{0}{1}{2}{3}".format(url, mix, arrParam.join('&'), hash);
            return url;
        },
        getRandomText: function(textArr) {
            var text = textArr[Math.floor(Math.random() * textArr.length)];
            return text;
        },
        "isIosX": /ip(hone|od|ad)/i.test(navigator.userAgent.toLowerCase()) && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812,
        "isIosXMax": /ip(hone|od|ad)/i.test(navigator.userAgent.toLowerCase()) && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896,
        "isIosXR": /ip(hone|od|ad)/i.test(navigator.userAgent.toLowerCase()) && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896,
        "isIosBangs": function() {
            return Fanli.Utility.isIosX || Fanli.Utility.isIosXMax || Fanli.Utility.isIosXR;
        }
    });
    Fanli.Utility.fanliLogin = function(href) {
        if (!href) {
            href = window.location.href;
        }
        if (navigator.userAgent.toLowerCase().indexOf("fanli") > -1) {
            Fanli.Utility.bridgeApp("ifanli://m.51fanli.com/app/login?cd=&cb={0}".format(Fanli.Utility.rebuildCallback(function(status, uid, verify_code) {
                if (status == 1) {
                    window.location.href = "//fun.fanli.com/api/user/gourl?u_id={0}&verify_code={1}&url={2}".format(uid, verify_code, encodeURIComponent(href));
                }
            })));
        } else {
            window.location.href = "//m.fanli.com/login?go={0}".format(encodeURIComponent(href))
        }
    }
    ;
    Fanli.Utility.setupShareIcon = function(callback) {
        if (!$.isFunction(callback)) {
            callback = function() {}
            ;
        }
        Fanli.Utility.fanliBtns([{
            "type": 0,
            "name": "分享",
            "imgUrl": BAR_ICON_SHARE,
            "text": "分享",
            "cb": Fanli.Utility.rebuildCallback(callback, true)
        }]);
    }
    ;
    $.extend(FLNS.register("Device.Utility"), {
        "Browser": {
            versions: (function() {
                var u = navigator.userAgent
                  , app = navigator.appVersion;
                return {
                    trident: u.indexOf('Trident') > -1,
                    presto: u.indexOf('Presto') > -1,
                    webkit: u.indexOf('AppleWebKit') > -1,
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                    iPhone: u.indexOf('iPhone') > -1,
                    iPad: u.indexOf('iPad') > -1,
                    webapp: u.indexOf('Safari') == -1,
                    fanliapp: u.indexOf('Fanli') > -1
                };
            }
            )(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }
    });
    if (!'FirstUrl'.getCookie()) {
        var ref = (!!document.referrer && document.referrer.match(/:\/\/(.[^/]+)/)[1].indexOf('fanli.com') < 0) ? document.referrer : "//m{0}/".format(Fanli.Utility.rootDomain);
        'FirstUrl'.setCookie(ref, '', Fanli.Utility.rootDomain, '/');
    }
    if (!'LandingUrl'.getCookie()) {
        'LandingUrl'.setCookie(window.location.href, '', Fanli.Utility.rootDomain, '/');
    }
}());
(function() {
    FLNS.register("Fanli.Utility.Toast").add("open", function(content, toastClass) {
        var $toast = $("#J_singleton_toast");
        var toastOnClass = "text-toast-on";
        var custClass = typeof toastClass === "string" ? toastClass : '';
        if ($toast.length == 0) {
            $toast = $('<div id="J_singleton_toast" class="text-toast {0}"></div>'.format(custClass)).appendTo('body');
        } else {
            $toast[0]['className'] = 'text-toast {0}'.format(custClass);
        }
        $toast.html(content).removeClass(toastOnClass).css({
            marginLeft: 0
        });
        setTimeout(function() {
            $toast.css({
                marginLeft: Math.round(($(window).width() - ($toast.outerWidth ? $toast.outerWidth() : $toast.width())) / 2) + 'px'
            }).addClass(toastOnClass);
        }, 0);
    });
}());
FLNS.register("Fanli.Utility.FixPlaceholder").add("init", function($container) {
    if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
        return;
    }
    var $curContainer = ($container && $container.length) ? $contaienr : $(document);
    var $ipts = $curContainer.find('input[type=number]');
    $ipts.each(function() {
        var $this = $(this);
        if ($this.data('fixplaceholder')) {
            return;
        }
        $this.focus(function() {
            $this.prop('type', 'number');
        }).blur(function() {
            $this.prop('type', 'text');
        }).prop('type', 'text').data('fixplaceholder', 1);
    });
}).init();
Fanli.Utility.appUAInfo = (function() {
    var app = {};
    var matches = navigator.userAgent.match(/Fanli.*?\/(\d*\.\d*\.\d*\.\d*)\s*\(.*?ID:(\d*)-(\d*)-(\d*)-(\d*)-(\d*)\)?(?:;\s*(?:WVC:([^;]+);)?\s*(?:SCR:([0-9\*]+)-([0-9\.]+)))?/i);
    if (matches != null) {
        app.version = matches[1];
        app.appid = parseInt(matches[2]);
        app.uid = parseInt(matches[3]);
        app.devid = parseInt(matches[4]);
        app.mc = parseInt(matches[5]);
        app.patch = parseInt(matches[6]) || 0;
        app.wvc = matches[7] || '';
        app.screen = matches[8] || '';
        app.scale = matches[9] || '';
    }
    return app;
}
)();
window.onpageshow = function(event) {
    if (typeof FL_PERSISTED == 'undefined') {
        FL_PERSISTED = false;
    }
    if (event.persisted && !FL_PERSISTED) {
        window.location.reload();
    }
}
;
(function() {
    $(document).on("click", ".J_need_fanli_login", function(ev) {
        if (!Fanli.Utility.isLogin) {
            ev.preventDefault();
            Fanli.Utility.fanliLogin();
        }
    });
}());
(function() {
    window.SUPPORT_PASSIVE = false;
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
            get: function get() {
                SUPPORT_PASSIVE = true;
            }
        }));
        window.addEventListener('test-passive', null, opts);
    } catch (e) {}
}());
var currentRootDomain = Fanli.Utility.rootDomain;
var verifyCodeImageUrl = "//fun{0}/verify.png?".format(currentRootDomain);
var currentApiRoot = "//m{0}/".format(currentRootDomain);
var currentAppDomain = "m{0}".format(currentRootDomain);
var ifanliProtocol = "m.51fanli.com";
var IS_EMOTIONAL = (function() {
    var abTestCookieName = "__utmt";
    var abTestCookieValue = abTestCookieName.getCookie();
    var storyId = "57857";
    var returnValue = "";
    var tryReg = abTestCookieValue.match(new RegExp(storyId + "([a-zA-Z])"));
    if (tryReg) {
        returnValue = tryReg[1];
    }
    return returnValue == "b";
}());
;(function(exports) {
    var traceCrossPageCookie = "__fl_trace_cpc";
    var traceCrossNativeAndPageCookie = "__fl_trace_cnpc";
    var traceCrossPageCookie1 = "__fl_trace_cpc1";
    var guid = function() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    var tid = guid().toUpperCase();
    var domain = (function() {
        var tryExecLocation = /.*(\.\w*\.\w*)$/ig.exec(location.hostname);
        var rootDomain = ".fanli.com";
        if (tryExecLocation) {
            rootDomain = tryExecLocation[1];
        }
        return rootDomain;
    }());
    var urlReg = /^(?:(?:http(?:s)?:\/\/)?[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])|(?:\/.*))*$/ig;
    var CookieOperation = (function() {
        function _setCookie(name, value, expiryDays, domain, path, secure) {
            var builder = [name, "=", escape(value)];
            if (expiryDays) {
                var date = new Date();
                date.setTime(date.getTime() + (expiryDays * 86400000));
                builder.push(";expires=");
                builder.push(date.toUTCString());
            }
            if (domain) {
                builder.push(";domain=");
                builder.push(domain);
            }
            if (path) {
                builder.push(";path=");
                builder.push(path);
            }
            if (secure) {
                builder.push(";secure");
            }
            document.cookie = builder.join("");
        }
        function _getCookie(name) {
            var re = new RegExp('\\b' + name + '\\s*=\\s*([^;]*)','i');
            var match = re.exec(document.cookie);
            return (match && match.length > 1 ? unescape(match[1]) : '');
        }
        return {
            setCookie: _setCookie,
            getCookie: _getCookie
        };
    }());
    var StringOperation = {
        format: function(s, args) {
            for (var i = 0; i < args.length; ++i) {
                s = s.replace(new RegExp("\\{" + i + "\\}","g"), args[i]);
            }
            return s;
        },
        isUrl: function(url) {
            if (!url) {
                return false;
            }
            urlReg.lastIndex = 0;
            url = url.toString();
            return urlReg.test(url);
        }
    };
    var traceCrossNativeAndPageCookieValue = CookieOperation.getCookie(traceCrossNativeAndPageCookie);
    if (traceCrossNativeAndPageCookieValue) {
        CookieOperation.setCookie(traceCrossPageCookie, traceCrossNativeAndPageCookieValue, "", domain, "/");
        CookieOperation.setCookie(traceCrossNativeAndPageCookie, null, -1, domain, "/");
    }
    var ptid = CookieOperation.getCookie(traceCrossPageCookie);
    var utmvCookie = "__utmv";
    var utmvCookieValue = CookieOperation.getCookie(utmvCookie);
    if (!utmvCookieValue) {
        CookieOperation.setCookie(utmvCookie, guid().toUpperCase(), 60, domain, "/");
    }
    exports.UBT = {
        isObject: function(obj) {
            return Object.prototype.toString.call(obj) === "[object Object]";
        },
        uswitch: true,
        commonData: {
            referrer: encodeURIComponent(document.referrer),
            resolution_h: window.screen.height || 0,
            resolution_v: window.screen.width || 0,
            resolution_r: window.devicePixelRatio || 1,
            language: navigator.language || navigator.userLanguage
        },
        extraRequestData: {},
        behaviorData: {
            tab: ""
        },
        mergeData: function(options) {
            var dataObj = this.commonData;
            if (this.isObject(options)) {
                for (var k in options) {
                    if (options.hasOwnProperty(k)) {
                        dataObj[k] = options[k];
                    }
                }
            }
            return this;
        },
        _sendPV: function() {
            var builder = [];
            var dataObj = this.commonData;
            for (var j in dataObj) {
                if (dataObj.hasOwnProperty(j)) {
                    builder.push(StringOperation.format("{0}={1}", [j, dataObj[j]]));
                }
            }
            builder.push("eventtype=pv");
            this._buildTrackImg(builder.join("&"));
        },
        track: function() {
            if (!this.uswitch) {
                return;
            }
            var tArr = [];
            var builder = [];
            var extraRequestData = this.extraRequestData;
            for (var k in extraRequestData) {
                if (extraRequestData.hasOwnProperty(k)) {
                    builder.push(k + "=" + extraRequestData[k]);
                }
            }
            var length = arguments.length;
            if (/evttype\=.+/.test(arguments[length - 1])) {
                builder.push(arguments[length - 1]);
                length = length - 1;
            } else {
                builder.push("evttype=cd");
            }
            for (var i = 0; i < length; i++) {
                tArr.push([arguments[i]]);
            }
            builder.push(StringOperation.format("spm={0}", [encodeURIComponent(tArr.join("."))]));
            this._buildTrackImg(builder.join("&"));
            return false;
        },
        _buildTrackImg: (function() {
            var imgs = [];
            return function(parastr) {
                var img = new Image();
                var userid = CookieOperation.getCookie("prouserid");
                var utmo = CookieOperation.getCookie("__utmo");
                var utmp = CookieOperation.getCookie("__utmp");
                var utmt = CookieOperation.getCookie("__utmt");
                var utmv = CookieOperation.getCookie("__utmv");
                var $flMeta = $("meta[name=flpn]");
                var defaultParameterArr = [];
                var sliceNo = 0;
                if (utmo) {
                    defaultParameterArr.push("utmo=" + utmo);
                }
                if (utmp) {
                    defaultParameterArr.push("utmp=" + utmp);
                }
                if (utmt) {
                    defaultParameterArr.push("utmt=" + utmt);
                }
                if (utmv) {
                    defaultParameterArr.push("utmv=" + utmv);
                }
                if (userid) {
                    defaultParameterArr.push("userid=" + userid);
                }
                defaultParameterArr.push("tid=" + tid);
                if (ptid) {
                    defaultParameterArr.push("ptid=" + ptid);
                }
                defaultParameterArr.push("timestamp=" + new Date().getTime());
                if ($flMeta.length > 0) {
                    defaultParameterArr.push(StringOperation.format("flpn={0}", [$flMeta.attr("content")]));
                }
                img.onload = img.onerror = function() {
                    img.onload = img.onerror = null;
                }
                imgs.push(img);
                sliceNo = Math.round(Math.random() * 9);
                if (location.pathname.toLowerCase().indexOf("zhide") > -1) {
                    sliceNo = 0;
                }
                img.src = "https://ubt" + sliceNo + ".fanli.com/index.html?" + parastr + "&" + defaultParameterArr.join("&");
            }
        }
        )(),
        PlugIns: (function() {
            var $window = $(window);
            return {
                clickOperation: function(options) {
                    var timeId;
                    $(document).on("click", "a, button, i, span, input[type=button], input[type=submit], .J_fanli_ubt_trigger", function(ev) {
                        var $this = $(this);
                        var $ancestor = $this.parents();
                        var ancestorLen = $ancestor.length;
                        var temArr = [];
                        var traceStr = "";
                        var parameterArr = [];
                        var $module = $this.closest(".J_ubt_module");
                        var module = $module.length > 0 && $module.data("spm");
                        var ubtindex = $this.data("ubtindex");
                        var halfScreen = (window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth) / 2;
                        var tagName = $this[0].tagName;
                        var dataId = $this.data("id");
                        var elementId = $this.attr("id");
                        var klass = $.trim($this.attr("class") || "");
                        var href = $this.attr("href");
                        var text = $.trim($this.attr("data-ubttext") || $this.text() || "");
                        var val = $this.val();
                        var spm = $this.attr("data-spm") || "";
                        var tryHash;
                        var xpathArr = [];
                        var coordinate = {
                            x: ev.pageX - halfScreen,
                            y: ev.pageY
                        };
                        parameterArr.push("coordinate=" + encodeURIComponent("{x:" + coordinate.x + ",y:" + coordinate.y + "}"));
                        if (StringOperation.isUrl(href) && spm) {
                            if (href.indexOf("spm") === -1) {
                                tryHash = href.match(/.*(#.*)$/);
                                if (tryHash) {
                                    href = href.replace(/(#.*)$/ig, '');
                                }
                                if (href.indexOf("?") > -1) {
                                    href = href + "&spm=" + spm;
                                } else {
                                    href = href + "?spm=" + spm;
                                }
                                if (tryHash) {
                                    href = href + tryHash[1];
                                }
                            }
                            $this.attr("href", href);
                        }
                        parameterArr.push("evttype=click");
                        if (href && href != "javascript:void(0);" && href != "javascript:void(0)") {
                            parameterArr.push("href=" + encodeURIComponent(href));
                        }
                        if (spm) {
                            parameterArr.push("spm=" + spm);
                        }
                        if (module) {
                            parameterArr.push("module=" + module);
                        }
                        if (ubtindex) {
                            parameterArr.push("index=" + ubtindex);
                        }
                        parameterArr.push("depth=" + Math.round(($(window).scrollTop() / $(document).height()) * 100));
                        xpathArr.push(tagName.toLowerCase() + "[" + $this.index() + "]");
                        temArr.push(tagName);
                        if (dataId) {
                            temArr.push(StringOperation.format("[data-id={0}]", [dataId]));
                        }
                        if (href) {
                            temArr.push(StringOperation.format("[href={0}]", [href]));
                        }
                        if (elementId) {
                            temArr.push(StringOperation.format("[id={0}]", [elementId]));
                        }
                        if (klass) {
                            temArr.push(StringOperation.format("[class={0}]", [klass]));
                        }
                        if (text) {
                            temArr.push(StringOperation.format("[text={0}]", [text]));
                        }
                        if (val) {
                            temArr.push(StringOperation.format("[value={0}]", [val]));
                        }
                        traceStr += temArr.join("");
                        temArr.length = 0;
                        for (var i = 0; i < ancestorLen; i++) {
                            var $currentNode = $ancestor.eq(i);
                            var currentNode = $ancestor.get(i);
                            var id = $currentNode.attr("id");
                            var klass = $.trim($currentNode.attr("class") || "");
                            var tagName = currentNode.tagName;
                            if (tagName == "HTML" || tagName == "BODY") {
                                break;
                            }
                            temArr.push(tagName);
                            if (id) {
                                temArr.push(StringOperation.format("[id={0}]", [id]));
                            }
                            if (klass) {
                                temArr.push(StringOperation.format("[class={0}]", [klass]));
                            }
                            if (i >= 5 - 1) {
                                break;
                            }
                            traceStr += "_" + temArr.join("");
                            temArr.length = 0;
                        }
                        for (var i = 0; i < ancestorLen; i++) {
                            var $currentNode = $ancestor.eq(i);
                            var tagName = $currentNode[0].tagName.toLowerCase();
                            if (tagName == "html" || tagName == "body") {
                                xpathArr.push(tagName);
                            } else {
                                xpathArr.push(tagName + "[" + $currentNode.index() + "]");
                            }
                        }
                        parameterArr.push("evt=click_" + encodeURIComponent(traceStr));
                        parameterArr.push("xpath=" + xpathArr.reverse().join('/'));
                        if (timeId) {
                            clearTimeout(timeId);
                        }
                        CookieOperation.setCookie(traceCrossPageCookie, tid, "", domain, "/");
                        timeId = setTimeout(function() {
                            UBT._buildTrackImg(parameterArr.join("&"));
                            CookieOperation.setCookie(traceCrossPageCookie1, location.href + "@@" + xpathArr.join('/'), "", domain, "/");
                        }, 25);
                    });
                    return UBT.PlugIns;
                },
                scrollOperation: function() {
                    var $w = $(window);
                    var $d = $(document);
                    var sid;
                    var parameterArr = [];
                    $w.on("scroll", function(ev) {
                        if (sid) {
                            clearTimeout(sid);
                        }
                        sid = setTimeout(function() {
                            var scrollTop = $w.scrollTop();
                            var documentHeight = $d.height();
                            parameterArr.push("dept={0}-{1}".format(scrollTop, documentHeight));
                            parameterArr.push("spm=" + Math.round((scrollTop / documentHeight) * 100));
                            parameterArr.push("evttype=scroll");
                            if (UBT.behaviorData.tab) {
                                parameterArr.push("tab=" + UBT.behaviorData.tab);
                            }
                            UBT._buildTrackImg(parameterArr.join("&"));
                            parameterArr.length = 0;
                        }, 800);
                    });
                    return UBT.PlugIns;
                },
                Exposure: {
                    exposureArr: [],
                    uniqueExposureObj: {},
                    exposureElArr: [],
                    init: function(options) {
                        var settings = $.extend(true, {
                            $ele: $(".lazy, .J_lazy, .J_lazy_img, .J_lazyimg, .J_need_exposure").filter("[data-expo]")
                        }, options);
                        var $ele = settings.$ele;
                        $ele.each(function() {
                            var $this = $(this);
                            var dataExpo = $this.data("expo");
                            if (UBT.PlugIns.Exposure.__isHidden($this)) {
                                return true;
                            }
                            if (dataExpo && UBT.PlugIns.Exposure.__inViewport($this)) {
                                if (!UBT.PlugIns.Exposure.uniqueExposureObj[dataExpo]) {
                                    UBT.PlugIns.Exposure.exposureArr.push(dataExpo);
                                    UBT.PlugIns.Exposure.uniqueExposureObj[dataExpo] = true;
                                }
                                if (!$this.prop("hasPush")) {
                                    $this.prop("hasPush", true);
                                    UBT.PlugIns.Exposure.exposureElArr.push($this);
                                }
                                return true;
                            }
                            if ($this.prop("hasBindScroll")) {
                                return true;
                            }
                            $this.prop("hasBindScroll", true);
                            function scrollHandler() {
                                if (UBT.PlugIns.Exposure.__inViewport($this)) {
                                    if (!UBT.PlugIns.Exposure.uniqueExposureObj[dataExpo]) {
                                        UBT.PlugIns.Exposure.exposureArr.push(dataExpo);
                                        UBT.PlugIns.Exposure.uniqueExposureObj[dataExpo] = true;
                                    }
                                    if (!$this.prop("hasPush")) {
                                        $this.prop("hasPush", true);
                                        UBT.PlugIns.Exposure.exposureElArr.push($this);
                                    }
                                }
                            }
                            $window.on("scroll.EXPOSURE resize.EXPOSURE", scrollHandler);
                        });
                        $window.on("scroll.EXPOSURESEND resize.EXPOSURE", UBT.PlugIns.Exposure.__throttle(250, UBT.PlugIns.Exposure.send));
                        UBT.PlugIns.Exposure.send();
                        return UBT.PlugIns;
                    },
                    send: function() {
                        setTimeout(function() {
                            if (UBT.PlugIns.Exposure.exposureArr.length > 0) {
                                UBT.track('common_baoguang', 'prouserid'.getCookie() || 'ZYSCUSERID'.getCookie() || window.fl && window.fl.app.uid || window.st && window.st.app.uid || $("#J_haohuo_uid").val() || '[userid]', UBT.PlugIns.Exposure.exposureArr.join(","), "evttype=exposure");
                                UBT.PlugIns.Exposure.exposureArr = [];
                            }
                        }, 200);
                    },
                    prepareToSend: function(dataExpo, $el) {
                        if (dataExpo && !UBT.PlugIns.Exposure.uniqueExposureObj[dataExpo]) {
                            UBT.PlugIns.Exposure.exposureArr.push(dataExpo);
                            UBT.PlugIns.Exposure.uniqueExposureObj[dataExpo] = true;
                        }
                        if ($el && $el.length == 1 && !$el.prop("hasPush")) {
                            $el.prop("hasPush", true);
                            UBT.PlugIns.Exposure.exposureElArr.push($el);
                        }
                        setTimeout(function() {
                            UBT.PlugIns.Exposure.send();
                        }, 250);
                    },
                    __inViewport: function($el) {
                        return !UBT.PlugIns.Exposure.__abovethetop($el) && !UBT.PlugIns.Exposure.__belowthefold($el) && !UBT.PlugIns.Exposure.__leftofbegin($el) && !UBT.PlugIns.Exposure.__rightoffold($el);
                    },
                    __belowthefold: function($el) {
                        var fold = $window.height() + $window.scrollTop();
                        return fold <= $el.offset().top;
                    },
                    __abovethetop: function($el) {
                        var fold = $window.scrollTop();
                        return fold >= $el.offset().top + $el.height();
                    },
                    __rightoffold: function($el) {
                        var fold = $window.width() + (typeof Zepto === 'function' ? window.pageXOffset : $window.scrollLeft());
                        return fold <= $el.offset().left;
                    },
                    __leftofbegin: function($el) {
                        var fold = typeof Zepto === 'function' ? window.pageXOffset : $window.scrollLeft();
                        return fold >= $el.offset().left + $el.width();
                    },
                    __isHidden: function($el) {
                        if (typeof jQuery === "function") {
                            return jQuery($el).is(":hidden");
                        }
                        if ($el.length == 0) {
                            return true;
                        }
                        var elem = $el[0];
                        var width = elem.offsetWidth;
                        var height = elem.offsetHeight;
                        return (width === 0 && height === 0) || $el.css("display") === "none";
                    },
                    __throttle: function(delay, fn, debounce_mode) {
                        var last = 0, timeId;
                        if (typeof fn !== 'function') {
                            debounce_mode = fn;
                            fn = delay;
                            delay = 250;
                        }
                        function wrapper() {
                            var that = this
                              , period = (new Date()).getTime() - last
                              , args = arguments;
                            function exec() {
                                last = (new Date()).getTime();
                                fn.apply(that, args);
                            }
                            ;function clear() {
                                timeId = undefined;
                            }
                            ;if (debounce_mode && !timeId) {
                                exec();
                            }
                            timeId && clearTimeout(timeId);
                            if (debounce_mode === undefined && period > delay) {
                                exec();
                            } else {
                                timeId = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - period : delay);
                            }
                        }
                        ;return wrapper;
                    }
                }
            }
        }
        )(),
        init: function() {
            var traceCrossPageCookie1Value = CookieOperation.getCookie(traceCrossPageCookie1);
            this._sendPV();
            CookieOperation.setCookie(traceCrossPageCookie, tid, "", domain, "/");
            if (traceCrossPageCookie1Value) {
                UBT.track(traceCrossPageCookie1Value, "evttype=autotracefromlastpage");
                CookieOperation.setCookie(traceCrossPageCookie1, null, -1, domain, "/");
            }
            return this;
        }
    };
}(this));
(function() {
    if (UBT.uswitch) {
        UBT.mergeData(typeof fgv != "undefined" && fgv.fanlitrace ? fgv.fanlitrace : {}).init();
        UBT.PlugIns.clickOperation().scrollOperation();
        UBT.PlugIns.Exposure.init();
    }
}());
;(function(FWSI) {
    (function() {
        var $wrapBox = $("#J_wrap");
        var $dialog = $("#J_dialog");
        var $closeBtn = $(".J_close");
        var showBack = $("#J_show_back").val();
        var backGopdd = $("#J_back_gopdd").val();
        var pddSceneId = $("#J_pdd_scene_id").val();
        var cardId = $("#J_card_id").val();
        var cardExt = $("#J_card_ext").val();
        var pdd_lijin_url = $("#J_pdd_lijin_url").val();
        var hidden, visibilityChange;
        function setUp() {
            UBT.track("page_name.h5.pty-addcardinit~scene-{0}~std-75172".format(pddSceneId));
            bindAddCard();
            bindBack();
            bindEvent();
        }
        function bindAddCard() {
            if (wagv.isFromWeixin) {
                wx.ready(function() {
                    if (!sessionStorage.getItem("addcard")) {
                        UBT.track("page_name.h5.pty-qdkb~scene-{0}~std-75172".format(pddSceneId));
                        try {
                            wx.addCard({
                                cardList: [{
                                    cardId: cardId,
                                    cardExt: cardExt
                                }],
                                success: function(res) {
                                    UBT.track("page_name.h5.pty-addcardsuccess~scene-{0}~res-{1}~std-75172".format(pddSceneId, (JSON.stringify(res) || "")));
                                },
                                fail: function(res) {
                                    UBT.track("page_name.h5.pty-addcardfail~scene-{0}~res-{1}~std-75172".format(pddSceneId, (JSON.stringify(res) || "")));
                                },
                                complete: function(res) {
                                    UBT.track("page_name.h5.pty-addcardcomplete~scene-{0}~res-{1}~std-75172".format(pddSceneId, (JSON.stringify(res) || "")));
                                }
                            });
                        } catch (err) {
                            UBT.track("page_name.h5.pty-addcardisnotafun~scene-{0}~res-{1}~std-75172".format(pddSceneId, (JSON.stringify(err) || "")));
                        }
                    } else {
                        UBT.track("page_name.h5.pty-addcardretry~scene-{0}~std-75172".format(pddSceneId));
                        if ($dialog.length && !sessionStorage.getItem("closedialog")) {
                            $dialog.show();
                            UBT.track("page_name.h5.pty-wlpop~scene-{0}~std-73622".format(pddSceneId));
                        }
                        $wrapBox.show();
                    }
                    sessionStorage.setItem("addcard", "1");
                });
                wx.error(function(res) {
                    UBT.track("page_name.h5.pty-wxerror~scene-{0}~res-{1}~std-75172".format(pddSceneId, (JSON.stringify(res) || "")));
                });
            } else {
                if ($dialog.length && !sessionStorage.getItem("closedialog")) {
                    $dialog.show();
                }
                $wrapBox.show();
            }
        }
        function bindBack() {
            if (typeof document.hidden !== "undefined") {
                hidden = "hidden";
                visibilityChange = "visibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                hidden = "webkitHidden ";
                visibilityChange = "webkitvisibilitychange";
            }
            hidden && document.addEventListener(visibilityChange, function() {
                if (document[hidden] == false) {
                    if (showBack == 1) {
                        if (backGopdd != 1) {
                            UBT.track("page_name.h5.pty-blankjump~scene-{0}~std-73622".format(pddSceneId));
                            setTimeout(function() {
                                window.location.href = pdd_lijin_url;
                            }, 200);
                        } else {
                            if ($dialog.length && !sessionStorage.getItem("closedialog")) {
                                $dialog.show();
                                UBT.track("page_name.h5.pty-wlpop~scene-{0}~std-73622".format(pddSceneId));
                            }
                            $wrapBox.show();
                        }
                    } else {
                        wx.closeWindow();
                    }
                }
            }, false);
        }
        function bindEvent() {
            $closeBtn.on("click", function() {
                sessionStorage.setItem("closedialog", "1");
                $dialog.hide();
            });
        }
        setUp();
    }
    )();
}(FLNS.register('Fanli.Shop.Wxcard.Index')));
