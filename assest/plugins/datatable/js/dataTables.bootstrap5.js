/*!
 DataTables Bootstrap 5 integration
 2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, b, c) {
	a instanceof String && (a = String(a));
	for (var e = a.length, d = 0; d < e; d++) {
		var f = a[d];
		if (b.call(c, f, d, a)) return {
			i: d,
			v: f
		}
	}
	return {
		i: -1,
		v: void 0
	}
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
	if (a == Array.prototype || a == Object.prototype) return a;
	a[b] = c.value;
	return a
};
$jscomp.getGlobal = function(a) {
	a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
	for (var b = 0; b < a.length; ++b) {
		var c = a[b];
		if (c && c.Math == Math) return c
	}
	throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
	var c = $jscomp.propertyToPolyfillSymbol[b];
	if (null == c) return a[b];
	c = a[c];
	return void 0 !== c ? c : a[b]
};
$jscomp.polyfill = function(a, b, c, e) {
	b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e))
};
$jscomp.polyfillUnisolated = function(a, b, c, e) {
	c = $jscomp.global;
	a = a.split(".");
	for (e = 0; e < a.length - 1; e++) {
		var d = a[e];
		if (!(d in c)) return;
		c = c[d]
	}
	a = a[a.length - 1];
	e = c[a];
	b = b(e);
	b != e && null != b && $jscomp.defineProperty(c, a, {
		configurable: !0,
		writable: !0,
		value: b
	})
};
$jscomp.polyfillIsolated = function(a, b, c, e) {
	var d = a.split(".");
	a = 1 === d.length;
	e = d[0];
	e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
	for (var f = 0; f < d.length - 1; f++) {
		var l = d[f];
		if (!(l in e)) return;
		e = e[l]
	}
	d = d[d.length - 1];
	c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
	b = b(c);
	null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, {
		configurable: !0,
		writable: !0,
		value: b
	}) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d = $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, {
		configurable: !0,
		writable: !0,
		value: b
	})))
};
$jscomp.polyfill("Array.prototype.find", function(a) {
	return a ? a : function(b, c) {
		return $jscomp.findInternal(this, b, c).v
	}
}, "es6", "es3");
(function(a) {
	"function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(b) {
		return a(b, window, document)
	}) : "object" === typeof exports ? module.exports = function(b, c) {
		b || (b = window);
		c && c.fn.dataTable || (c = require("datatables.net")(b, c).$);
		return a(c, b, b.document)
	} : a(jQuery, window, document)
})(function(a, b, c, e) {
	var d = a.fn.dataTable;
	a.extend(!0, d.defaults, {
		dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
		renderer: "bootstrap"
	});
	a.extend(d.ext.classes, {
		sWrapper: "dataTables_wrapper dt-bootstrap5",
		sFilterInput: "form-control form-control",
		sLengthSelect: "form-select form-select select2",
		sProcessing: "dataTables_processing card",
		sPageButton: "paginate_button page-item"
	});
	d.ext.renderer.pageButton.bootstrap = function(f, l, A, B, m, t) {
		var u = new d.Api(f),
			C = f.oClasses,
			n = f.oLanguage.oPaginate,
			D = f.oLanguage.oAria.paginate || {},
			h, k, v = 0,
			y = function(q, w) {
				var x, E = function(p) {
					p.preventDefault();
					a(p.currentTarget).hasClass("disabled") || u.page() == p.data.action || u.page(p.data.action).draw("page")
				};
				var r = 0;
				for (x = w.length; r < x; r++) {
					var g = w[r];
					if (Array.isArray(g)) y(q, g);
					else {
						k = h = "";
						switch (g) {
							case "ellipsis":
								h = "&#x2026;";
								k = "disabled";
								break;
							case "first":
								h = n.sFirst;
								k = g + (0 < m ? "" : " disabled");
								break;
							case "قبلی":
								h = n.sPrevious;
								k = g + (0 < m ? "" : " disabled");
								break;
							case "next":
								h = n.sNext;
								k = g + (m < t - 1 ? "" : " disabled");
								break;
							case "last":
								h = n.sLast;
								k = g + (m < t - 1 ? "" : " disabled");
								break;
							default:
								h = g + 1, k = m === g ? "active" : ""
						}
						if (h) {
							var F = a("<li>", {
								"class": C.sPageButton + " " + k,
								id: 0 === A && "string" === typeof g ? f.sTableId + "_" + g : null
							}).append(a("<a>", {
								href: "#",
								"aria-controls": f.sTableId,
								"aria-label": D[g],
								"data-dt-idx": v,
								tabindex: f.iTabIndex,
								"class": "page-link"
							}).html(h)).appendTo(q);
							f.oApi._fnBindAction(F, {
								action: g
							}, E);
							v++
						}
					}
				}
			};
		try {
			var z = a(l).find(c.activeElement).data("dt-idx")
		} catch (q) {}
		y(a(l).empty().html('<ul class="pagination"/>').children("ul"), B);
		z !== e && a(l).find("[data-dt-idx=" + z + "]").trigger("focus")
	};
	return d
});