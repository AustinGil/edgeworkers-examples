/**
 * @param a
 * @param b
 */
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError('Cannot call a class as a function');
}
/**
 * @param a
 * @param b
 */
function _defineProperties(a, b) {
  for (var c, d = 0; d < b.length; d++)
    (c = b[d]),
      (c.enumerable = c.enumerable || !1),
      (c.configurable = !0),
      'value' in c && (c.writable = !0),
      Object.defineProperty(a, c.key, c);
}
/**
 * @param a
 * @param b
 * @param c
 */
function _createClass(a, b, c) {
  return (
    b && _defineProperties(a.prototype, b), c && _defineProperties(a, c), a
  );
}
/**
 * @param a
 * @param b
 */
function _inherits(a, b) {
  if ('function' != typeof b && null !== b)
    throw new TypeError('Super expression must either be null or a function');
  (a.prototype = Object.create(b && b.prototype, {
    constructor: { value: a, writable: !0, configurable: !0 },
  })),
    b && _setPrototypeOf(a, b);
}
/**
 * @param a
 */
function _getPrototypeOf(a) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }),
    _getPrototypeOf(a)
  );
}
/**
 * @param a
 * @param b
 */
function _setPrototypeOf(a, b) {
  return (
    (_setPrototypeOf =
      Object.setPrototypeOf ||
      function (a, b) {
        return (a.__proto__ = b), a;
      }),
    _setPrototypeOf(a, b)
  );
}
/**
 *
 */
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () { })
      ),
      !0
    );
  } catch {
    return !1;
  }
}
/**
 * @param a
 */
function _assertThisInitialized(a) {
  if (void 0 === a)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
/**
 * @param a
 * @param b
 */
function _possibleConstructorReturn(a, b) {
  if (b && ('object' == typeof b || 'function' == typeof b)) return b;
  if (void 0 !== b)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return _assertThisInitialized(a);
}
/**
 * @param a
 */
function _createSuper(a) {
  var b = _isNativeReflectConstruct();
  return function () {
    var c,
      d = _getPrototypeOf(a);
    if (b) {
      var e = _getPrototypeOf(this).constructor;
      c = Reflect.construct(d, arguments, e);
    } else c = Reflect.apply(d, this, arguments);
    return _possibleConstructorReturn(this, c);
  };
}
/**
 * @param a
 * @param b
 */
function _slicedToArray(a, b) {
  return (
    _arrayWithHoles(a) ||
    _iterableToArrayLimit(a, b) ||
    _unsupportedIterableToArray(a, b) ||
    _nonIterableRest()
  );
}
/**
 * @param a
 */
function _arrayWithHoles(a) {
  if (Array.isArray(a)) return a;
}
/**
 * @param a
 * @param b
 */
function _iterableToArrayLimit(a, b) {
  var c =
    undefined == a
      ? null
      : ('undefined' != typeof Symbol && a[Symbol.iterator]) || a['@@iterator'];
  if (undefined != c) {
    var d,
      e,
      f = [],
      g = !0,
      h = !1;
    try {
      for (
        c = c.call(a);
        !(g = (d = c.next()).done) && (f.push(d.value), !(b && f.length === b));
        g = !0
      );
    } catch (error) {
      (h = !0), (e = error);
    } finally {
      try {
        g || undefined == c['return'] || c['return']();
      } finally {
        if (h) throw e;
      }
    }
    return f;
  }
}
/**
 * @param a
 * @param b
 */
function _unsupportedIterableToArray(a, b) {
  if (a) {
    if ('string' == typeof a) return _arrayLikeToArray(a, b);
    var c = Object.prototype.toString.call(a).slice(8, -1);
    return (
      'Object' === c && a.constructor && (c = a.constructor.name),
      'Map' === c || 'Set' === c
        ? [...a]
        : 'Arguments' === c ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          ? _arrayLikeToArray(a, b)
          : void 0
    );
  }
}
/**
 * @param a
 * @param b
 */
function _arrayLikeToArray(a, b) {
  (undefined == b || b > a.length) && (b = a.length);
  for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
  return d;
}
/**
 *
 */
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
var Range = (function () {
  /**
   *
   */
  function a() {
    var b =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
      c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
    _classCallCheck(this, a), (this.location = b), (this.length = c);
  }
  return (
    _createClass(a, [
      {
        key: 'max',
        value: function (a) {
          return (
            'number' == typeof a && (this.length = a - this.location),
            this.location + this.length
          );
        },
      },
      {
        key: 'isValid',
        value: function () {
          return -1 < this.location;
        },
      },
      {
        key: 'toArray',
        value: function () {
          return [this.location, this.max()];
        },
      },
      {
        key: 'toString',
        value: function () {
          return -1 == this.location
            ? 'invalid range'
            : '[' + this.location + ',' + this.max() + ')';
        },
      },
    ]),
    a
  );
})(),
  BaseConfigDefaults = {
    wordSeparators: '-/\\:()<>%._=&[]+ \t\n\r',
    uppercaseLetters: (function () {
      for (var a = [], b = 0; 26 > b; b++) a.push(String.fromCharCode(65 + b));
      return a.join('');
    })(),
    ignoredScore: 0.9,
    skippedScore: 0.15,
    emptyQueryScore: 0,
    maxIterations: Math.pow(2, 16),
  },
  QSConfigDefaults = {
    longStringLength: 150,
    maxMatchStartPct: 0.15,
    minMatchDensityPct: 0.75,
    maxMatchDensityPct: 0.95,
    beginningOfStringPct: 0.1,
  },
  Config = (function () {
    /**
     * @param b
     */
    function a(b) {
      _classCallCheck(this, a), Object.assign(this, BaseConfigDefaults, b);
    }
    return (
      _createClass(a, [
        {
          key: 'useSkipReduction',
          value: function () {
            return !0;
          },
        },
        {
          key: 'adjustRemainingScore',
          value: function (a, b, c, d, e, f) {
            return c * f.length;
          },
        },
      ]),
      a
    );
  })(),
  QuickScoreConfig = (function (a) {
    var b = Math.min;
    /**
     * @param a
     */
    function c(a) {
      return (
        _classCallCheck(this, c),
        d.call(this, Object.assign({}, QSConfigDefaults, a))
      );
    }
    _inherits(c, a);
    var d = _createSuper(c);
    return (
      _createClass(c, [
        {
          key: 'useSkipReduction',
          value: function (a, b, c, d, e, f, g) {
            var h = a.length,
              index = h <= this.longStringLength,
              index_ = g.location / h;
            return index || index_ < this.maxMatchStartPct;
          },
        },
        {
          key: 'adjustRemainingScore',
          value: function (a, c, d, e, f, g, h, index) {
            var index_ = a.length <= this.longStringLength,
              k = index.location / a.length,
              l = 1,
              m = 1 - k;
            return (
              e ||
              ((l = c.length / index.length),
                (l =
                  index_ &&
                    k <= this.beginningOfStringPct &&
                    l >= this.minMatchDensityPct
                    ? 1
                    : l),
                (m = l >= this.maxMatchDensityPct ? 1 : m)),
              d * b(g.length, this.longStringLength) * l * m
            );
          },
        },
      ]),
      c
    );
  })(Config);
/**
 * @param a
 */
function createConfig(a) {
  return a instanceof Config ? a : new QuickScoreConfig(a);
}
var DefaultConfig = createConfig(),
  BaseConfig = new Config(),
  QuicksilverConfig = new Config({
    emptyQueryScore: 0.9,
    adjustRemainingScore: function (a, b, c, d, e, f, g) {
      var h = c * f.length;
      return d || (h += (g.location - e.location) / 2), h;
    },
  });
/**
 *
 */
function quickScore() {
  var a = Math.min;
  /**
   * @param l
   * @param m
   * @param n
   */
  function b(l, m, n) {
    if (m.length === 0) return h.ignoredScore;
    if (m.length > l.length) return 0;
    for (var o = e && e.length, p = m.length; 0 < p; p--) {
      if (k > h.maxIterations) return 0;
      k++;
      var q = g.substring(m.location, m.location + p),
        r = getRangeOfSubstring(
          f,
          q,
          new Range(l.location, l.length - m.length + p)
        );
      if (r.isValid()) {
        (n.location = n.isValid() ? a(n.location, r.location) : r.location),
          n.max(r.max()),
          e && e.push([r.location, r.max()]);
        var s = new Range(r.max(), l.max() - r.max()),
          t = new Range(m.location + p, m.length - p),
          u = b(s, t, n);
        if (u) {
          var v = s.location - l.location,
            w = !0,
            x = h.useSkipReduction(c, d, u, s, l, s, r, n);
          if (r.location > l.location)
            if (x && -1 < h.wordSeparators.indexOf(c[r.location - 1]))
              for (var y = r.location - 2; y >= l.location; y--)
                -1 < h.wordSeparators.indexOf(c[y])
                  ? v--
                  : (v -= h.skippedScore);
            else if (x && -1 < h.uppercaseLetters.indexOf(c[r.location]))
              for (var z = r.location - 1; z >= l.location; z--)
                -1 < h.uppercaseLetters.indexOf(c[z])
                  ? v--
                  : (v -= h.skippedScore);
            else (v -= r.location - l.location), (w = !1);
          return (
            (v += h.adjustRemainingScore(c, d, u, w, l, s, r, n)),
            (v /= l.length),
            v
          );
        }
        e && (e.length = o);
      }
    }
    return 0;
  }
  var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
    d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : '',
    e = 2 < arguments.length ? arguments[2] : void 0,
    f =
      3 < arguments.length && arguments[3] !== void 0
        ? arguments[3]
        : c.toLocaleLowerCase(),
    g =
      4 < arguments.length && arguments[4] !== void 0
        ? arguments[4]
        : d.toLocaleLowerCase(),
    h =
      5 < arguments.length && arguments[5] !== void 0
        ? arguments[5]
        : DefaultConfig,
    index =
      6 < arguments.length && arguments[6] !== void 0
        ? arguments[6]
        : new Range(0, c.length),
    k = 0;
  return d ? b(index, new Range(0, d.length), new Range()) : h.emptyQueryScore;
}
quickScore.createConfig = createConfig;
/**
 * @param a
 * @param b
 * @param c
 */
function getRangeOfSubstring(a, b, c) {
  var d = a.indexOf(b, c.location),
    e = new Range();
  return -1 < d && d < c.max() && ((e.location = d), (e.length = b.length)), e;
}
var QuickScore = (function () {
  /**
   *
   */
  function a() {
    var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, a);
    var d = Array.isArray(c) ? { keys: c } : c,
      e = d.scorer,
      f = void 0 === e ? quickScore : e,
      g = d.transformString,
      h = void 0 === g ? toLocaleLowerCase : g,
      index = d.keys,
      index_ = void 0 === index ? [] : index,
      k = d.sortKey,
      l = void 0 === k ? '' : k,
      m = d.minimumScore,
      n = void 0 === m ? 0 : m,
      o = d.config;
    (this.scorer = f),
      (this.minimumScore = n),
      (this.config = o),
      (this.transformStringFunc = h),
      'function' == typeof f.createConfig && (this.config = f.createConfig(o)),
      this.setKeys(index_, l),
      this.setItems(b),
      (this.compareScoredStrings = this.compareScoredStrings.bind(this));
  }
  return (
    _createClass(a, [
      {
        key: 'search',
        value: function (a) {
          var b = [],
            c = this.items,
            d = this.transformedItems,
            e = this.keys,
            f = this.config,
            g = a ? this.minimumScore : -1,
            h = this.transformString(a),
            k = c.length,
            l = e.length;
          if ('string' == typeof c[0])
            for (var m = 0; m < k; m++) {
              var n = c[m],
                o = d[m],
                p = [],
                q = this.scorer(n, a, p, o, h, f);
              q > g && b.push({ item: n, score: q, matches: p, _: o });
            }
          else
            for (var r = 0; r < k; r++) {
              for (
                var s = c[r],
                t = d[r],
                u = {
                  item: s,
                  score: 0,
                  scoreKey: '',
                  scoreValue: '',
                  scores: {},
                  matches: {},
                  _: t,
                },
                v = l ? e : Object.keys(t),
                w = v.length,
                x = 0,
                y = '',
                z = '',
                A = 0;
                A < w;
                A++
              ) {
                var B = v[A],
                  C = B.name,
                  D = void 0 === C ? B : C,
                  E = B.scorer,
                  F = void 0 === E ? this.scorer : E,
                  G = t[D];
                if (G) {
                  var H = this.getItemString(s, B),
                    I = [],
                    J = F(H, a, I, G, h, f);
                  (u.scores[D] = J),
                    (u.matches[D] = I),
                    J > x && ((x = J), (y = D), (z = H));
                }
              }
              x > g &&
                ((u.score = x),
                  (u.scoreKey = y),
                  (u.scoreValue = z),
                  b.push(u));
            }
          return b.sort(this.compareScoredStrings), b;
        },
      },
      {
        key: 'setKeys',
        value: function (a) {
          var b =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : '';
          if (
            ((this.keys = [a].flat()), (this.sortKey = b), this.keys.length)
          ) {
            var c = this.scorer;
            (this.keys = this.keys.map(function (a) {
              var b = a.length > 0 ? { name: a, scorer: c } : a;
              if (!Array.isArray(b.name))
                -1 < b.name.indexOf('.') && (b.path = b.name.split('.'));
              else if (1 < b.name.length)
                (b.path = b.name), (b.name = b.path.join('.'));
              else {
                var d = _slicedToArray(b.name, 1);
                b.name = d[0];
              }
              return b;
            })),
              (this.sortKey = this.sortKey || this.keys[0].name);
          }
        },
      },
      {
        key: 'setItems',
        value: function (a) {
          var b = [a].flat(),
            c = b.length,
            d = [],
            e = this.keys,
            f = e.length;
          if ('string' == typeof b[0])
            for (var g = 0; g < c; g++) d.push(this.transformString(b[g]));
          else
            for (var h = 0; h < c; h++) {
              for (
                var k = b[h],
                l = {},
                m = f ? e : Object.keys(k),
                n = m.length,
                o = 0;
                o < n;
                o++
              ) {
                var p = m[o],
                  q = this.getItemString(k, p);
                q &&
                  'string' == typeof q &&
                  (l[p.name || p] = this.transformString(q));
              }
              d.push(l);
            }
          (this.items = b), (this.transformedItems = d);
        },
      },
      {
        key: 'getItemString',
        value: function (a, b) {
          var c = b.name,
            d = b.path;
          return d
            ? d.reduce(function (a, b) {
              return a && a[b];
            }, a)
            : a[c || b];
        },
      },
      {
        key: 'transformString',
        value: function (a) {
          return this.transformStringFunc(a);
        },
      },
      {
        key: 'compareScoredStrings',
        value: function (c, a) {
          var b = c._,
            d = a._,
            e = 'string' == typeof b ? b : b[this.sortKey],
            f = 'string' == typeof d ? d : d[this.sortKey];
          return c.score === a.score
            ? void 0 === e || void 0 === f
              ? void 0 === e && void 0 === f
                ? 0
                : void 0 === e
                  ? 1
                  : -1
              : e === f
                ? 0
                : e < f
                  ? -1
                  : 1
            : a.score - c.score;
        },
      },
    ]),
    a
  );
})();
/**
 * @param a
 */
function toLocaleLowerCase(a) {
  return a.toLocaleLowerCase();
}
export {
  BaseConfig,
  DefaultConfig,
  QuickScore,
  QuicksilverConfig,
  Range,
  createConfig,
  quickScore,
};
