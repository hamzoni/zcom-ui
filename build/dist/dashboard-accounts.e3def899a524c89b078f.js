(window.webpackJsonp = window.webpackJsonp || []).push([
    [19],
    {
        1736: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return _;
            }),
                n.d(t, "a", function() {
                    return v;
                });
            var a = n(0),
                r = n.n(a),
                o = n(1),
                s = n.n(o),
                c = n(7),
                i = n.n(c),
                l = n(31),
                u = n(21),
                p = n(20),
                d = n(15),
                h = n.n(d),
                m = n(2077),
                f = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function g(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function b(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function y(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var v = (function(e) {
                function t() {
                    return (
                        g(this, t),
                        b(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    y(t, r.a.Component),
                    f(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.index,
                                    a = e.changeTab,
                                    o = e.title,
                                    s = e.className,
                                    c = e.updatedTab,
                                    l = e.disabled,
                                    u = e.subText,
                                    p = i()({"is-active": t}, s);
                                return (
                                    "string" == typeof o &&
                                        o.indexOf(".") > 0 &&
                                        (o = h.a.translate(o)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          r.a.createElement(
                                              "option",
                                              {
                                                  value: n,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              r.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  o,
                                                  c ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : r.a.createElement(
                                              "li",
                                              {
                                                  className: p,
                                                  onClick: l
                                                      ? null
                                                      : a.bind(
                                                            this,
                                                            n,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              r.a.createElement(
                                                  "a",
                                                  null,
                                                  r.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      o,
                                                      c ? "*" : ""
                                                  ),
                                                  u &&
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "tab-subtext"
                                                          },
                                                          u
                                                      )
                                              )
                                          )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (v.propTypes = {
                changeTab: s.a.func,
                isActive: s.a.bool.isRequired,
                index: s.a.number.isRequired,
                className: s.a.string,
                isLinkTo: s.a.string,
                subText: s.a.oneOfType([s.a.object, s.a.string])
            }),
                (v.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var _ = (function(e) {
                function t(e) {
                    g(this, t);
                    var n = b(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (n._setDimensions = n._setDimensions.bind(n)),
                        n
                    );
                }
                return (
                    y(t, r.a.Component),
                    f(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._setDimensions(),
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = e.viewSettings.get(e.setting);
                                t !==
                                    this.props.viewSettings.get(
                                        this.props.setting
                                    ) && this.setState({activeTab: t});
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener(
                                    "resize",
                                    this._setDimensions
                                );
                            }
                        },
                        {
                            key: "_setDimensions",
                            value: function() {
                                var e = window.innerWidth;
                                e !== this.state.width &&
                                    this.setState({width: e});
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e, t) {
                                e !== this.state.activeTab &&
                                    ("" !== t && this.props.history.push(t),
                                    this.props.setting &&
                                        u.a.changeViewSetting(
                                            (function(e, t, n) {
                                                return (
                                                    t in e
                                                        ? Object.defineProperty(
                                                              e,
                                                              t,
                                                              {
                                                                  value: n,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              }
                                                          )
                                                        : (e[t] = n),
                                                    e
                                                );
                                            })({}, this.props.setting, e)
                                        ),
                                    this.setState({activeTab: e}),
                                    this.props.onChangeTab &&
                                        this.props.onChangeTab(e));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.children,
                                    a = t.contentClass,
                                    o = t.tabsClass,
                                    s = t.style,
                                    c = t.segmented,
                                    l =
                                        this.state.width < 900 &&
                                        r.a.Children.count(n) > 2,
                                    u = null,
                                    p = r.a.Children.map(n, function(t, n) {
                                        if (!t) return null;
                                        if (l && t.props.disabled) return null;
                                        var a = n === e.state.activeTab;
                                        return (
                                            a && (u = t.props.children),
                                            r.a.cloneElement(t, {
                                                collapsed: l,
                                                isActive: a,
                                                changeTab: e._changeTab.bind(e),
                                                index: n
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = p[0].props.children),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: i()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            r.a.createElement(
                                                "ul",
                                                {
                                                    style: s,
                                                    className: i()(
                                                        "button-group no-margin",
                                                        o,
                                                        {segmented: c}
                                                    )
                                                },
                                                l
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "select",
                                                              {
                                                                  value: this
                                                                      .state
                                                                      .activeTab,
                                                                  style: {
                                                                      marginTop: 10,
                                                                      marginBottom: 10
                                                                  },
                                                                  className:
                                                                      "bts-select",
                                                                  onChange: function(
                                                                      t
                                                                  ) {
                                                                      var n = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          n,
                                                                          t
                                                                              .target[
                                                                              n
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              p
                                                          )
                                                      )
                                                    : p,
                                                this.props.actionButtons
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              className:
                                                                  "tabs-action-buttons"
                                                          },
                                                          this.props
                                                              .actionButtons
                                                      )
                                                    : null
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: i()("tab-content", a)},
                                            u
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (_.propTypes = {
                setting: s.a.string,
                defaultActiveTab: s.a.number,
                segmented: s.a.bool
            }),
                (_.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (_ = Object(l.connect)(_, {
                    listenTo: function() {
                        return [p.a];
                    },
                    getProps: function() {
                        return {viewSettings: p.a.getState().viewSettings};
                    }
                })),
                (_ = Object(m.a)(_));
        },
        1762: function(e, t, n) {
            var a = n(26),
                r = n(1763),
                o = {},
                s = {},
                c = {};
            function i(e, t, n, a) {
                o[e] || (o[e] = []),
                    s[e] || (s[e] = []),
                    o[e].push(t),
                    s[e].push([n, t, new Date(a)]),
                    c[e] || (c[e] = {}),
                    c[e][n] || (c[e][n] = {deposit: [], withdrawal: []}),
                    c[e][n][t > 0 ? "deposit" : "withdrawal"].push(t);
            }
            function l(e, t, n, a, o, s, c, l, u) {
                return (
                    n || (n = {amount: "", currency: ""}),
                    a || (a = {amount: "", currency: ""}),
                    o || (o = {amount: "", currency: ""}),
                    n.amount && i(n.currency, n.amount, c, s),
                    a.amount && i(a.currency, -a.amount, c, s),
                    o.amount && i(o.currency, -o.amount, c, s),
                    e.push([
                        t,
                        r.printAmount(n),
                        n.currency,
                        r.printAmount(a),
                        a.currency,
                        r.printAmount(o),
                        o.currency,
                        "BTS-DEX",
                        u || "",
                        l || "",
                        s
                    ]),
                    e
                );
            }
            e.exports = {
                parseData: function(e, t, n) {
                    var a = [];
                    a.push([
                        "Type",
                        "Buy Amount",
                        "Buy Currency",
                        "Sell Amount",
                        "Sell Currency",
                        "Fee Amount",
                        "Fee Currency",
                        "Exchange",
                        "Trade Group",
                        "Comment",
                        "Date"
                    ]);
                    var o = {};
                    function s(e) {
                        o[e] || (o[e] = 0), o[e]++;
                    }
                    var c = Object.keys(e),
                        i = Array.isArray(c),
                        u = 0;
                    for (c = i ? c : c[Symbol.iterator](); ; ) {
                        var p;
                        if (i) {
                            if (u >= c.length) break;
                            p = c[u++];
                        } else {
                            if ((u = c.next()).done) break;
                            p = u.value;
                        }
                        var d = e[p],
                            h = d.timestamp,
                            m = d.type,
                            f = d.data,
                            g = null;
                        switch (m) {
                            case "vesting_balance_withdraw":
                                var b = r.parseCurrency(f.amount);
                                (g = r.parseCurrency(f.fee)),
                                    (a = l(
                                        a,
                                        "1.2.30665" === f.owner &&
                                        b.amount > 1e4
                                            ? "Income"
                                            : "Deposit",
                                        b,
                                        null,
                                        g,
                                        h,
                                        m,
                                        n + " : Vesting balance withdraw"
                                    )),
                                    s(m);
                                break;
                            case "balance_claim":
                                (a = l(
                                    a,
                                    "Deposit",
                                    r.parseCurrency(f.total_claimed),
                                    null,
                                    null,
                                    h,
                                    m,
                                    n + " : Balance claim"
                                )),
                                    s(m);
                                break;
                            case "transfer":
                                var y = r.parseCurrency(f.amount);
                                (g = r.parseCurrency(f.fee)),
                                    (a =
                                        f.to == t
                                            ? l(
                                                  a,
                                                  "1.2.391938" === f.to &&
                                                  "1.2.381086" === f.from
                                                      ? "Income"
                                                      : "Deposit",
                                                  y,
                                                  null,
                                                  null,
                                                  h,
                                                  m,
                                                  n + " : From " + f.from
                                              )
                                            : l(
                                                  a,
                                                  "Withdrawal",
                                                  null,
                                                  y,
                                                  g,
                                                  h,
                                                  m,
                                                  n + ": To " + f.to
                                              )),
                                    s(m);
                                break;
                            case "fill_order":
                                var v = r.parseCurrency(f.pays),
                                    _ = r.parseCurrency(f.receives);
                                "BTS" !==
                                    (g = r.parseCurrency(f.fee)).currency &&
                                    (_.currency === g.currency
                                        ? ((_.amount -= g.amount),
                                          (g.amount = 0))
                                        : v.currency === g.currency &&
                                          ((v.amount -= g.amount),
                                          (g.amount = 0))),
                                    (a = l(a, "Trade", _, v, g, h, m)),
                                    s(m);
                                break;
                            case "asset_issue":
                                var w = r.parseCurrency(f.asset_to_issue);
                                (g =
                                    f.issuer === t
                                        ? r.parseCurrency(f.fee)
                                        : null),
                                    f.issue_to_account === t &&
                                        (a = l(
                                            a,
                                            "Deposit",
                                            w,
                                            null,
                                            g,
                                            h,
                                            m,
                                            n + " : Issued to account"
                                        )),
                                    s(m);
                                break;
                            case "account_update":
                            case "proposal_create":
                            case "proposal_update":
                            case "account_whitelist":
                            case "worker_create":
                            case "limit_order_create":
                            case "limit_order_cancel":
                            case "call_order_update":
                                (g = r.parseCurrency(f.fee)).amount > 0 &&
                                    ((a = l(
                                        a,
                                        "Withdrawal",
                                        null,
                                        g,
                                        null,
                                        h,
                                        m,
                                        m + " fee"
                                    )),
                                    s(m));
                                break;
                            case "account_create":
                                f.registrar === t &&
                                    ((a = l(
                                        a,
                                        "Withdrawal",
                                        null,
                                        (g = r.parseCurrency(f.fee)),
                                        null,
                                        h,
                                        m,
                                        m + " fee"
                                    )),
                                    s(m));
                                break;
                            case "asset_fund_fee_pool":
                                (g = r.parseCurrency(f.fee)),
                                    (a = l(
                                        a,
                                        "Withdrawal",
                                        null,
                                        r.parseCurrency({
                                            amount: f.amount,
                                            asset_id: "1.3.0"
                                        }),
                                        g,
                                        h,
                                        m,
                                        "" + m
                                    )),
                                    s(m);
                                break;
                            default:
                                console.log("Unhandled type:", m, f);
                        }
                    }
                    return a;
                },
                filterEntries: function(e, t, n) {
                    if (!t && !n) return e;
                    for (
                        var a = Object.keys(e), r = a.length - 1;
                        r >= 0;
                        r--
                    ) {
                        var o = a[r],
                            s = e[o],
                            c = s.timestamp,
                            i = s.type;
                        s.data,
                            t && i !== t
                                ? delete e[o]
                                : n && new Date(c).getTime() < n && delete e[o];
                    }
                    return (
                        console.log(
                            "Removed " +
                                (a.length - Object.keys(e).length) +
                                " entries by filtering"
                        ),
                        e
                    );
                },
                groupEntries: function(e) {
                    for (
                        var t = {}, n = Object.keys(e), r = n.length - 1;
                        r >= 0;
                        r--
                    ) {
                        var o = n[r],
                            s = e[o],
                            c = s.timestamp,
                            i = s.type,
                            l = s.data;
                        switch (i) {
                            case "fill_order":
                                var u = a(c),
                                    p =
                                        l.receives.asset_id +
                                        "_" +
                                        l.pays.asset_id,
                                    d = t[p],
                                    h = d ? a(d.timestamp) : null;
                                d &&
                                    u.isSame(h, "day") &&
                                    d.data.pays.asset_id === l.pays.asset_id &&
                                    d.data.receives.asset_id ===
                                        l.receives.asset_id &&
                                    ((l.pays.amount =
                                        parseInt(l.pays.amount, 10) +
                                        parseInt(d.data.pays.amount, 10)),
                                    (l.receives.amount =
                                        parseInt(l.receives.amount, 10) +
                                        parseInt(d.data.receives.amount, 10)),
                                    (l.fee.amount =
                                        parseInt(l.fee.amount, 10) +
                                        parseInt(d.data.fee.amount, 10)),
                                    (e[o].data = l),
                                    delete e[d.trx_id]),
                                    (t[p] = {data: l, timestamp: c, trx_id: o});
                        }
                    }
                    return (
                        console.log(
                            "Removed " +
                                (n.length - Object.keys(e).length) +
                                " fill_order entries by grouping"
                        ),
                        e
                    );
                }
            };
        },
        1763: function(e, t, n) {
            var a = n(10).ChainStore;
            e.exports = {
                parseCurrency: function(e) {
                    var t = a.getAsset(e.asset_id),
                        n = (function(e) {
                            if ("number" != typeof e)
                                throw new Error("Input must be a number");
                            return Math.pow(10, e);
                        })((t = t ? t.toJS() : {precision: 5}).precision);
                    return {
                        amount: e.amount / n,
                        currency: t.symbol,
                        asset_id: e.asset_id
                    };
                },
                printAmount: function(e) {
                    if (!e.amount || !e.currency) return "";
                    var t = a.getAsset(e.asset_id);
                    return (
                        (t = t ? t.toJS() : {precision: 5}),
                        e.amount.toFixed(t.precision)
                    );
                },
                getIndex: function(e) {
                    var t = e.split(".");
                    return parseInt(t[2], 10);
                }
            };
        },
        1764: function(e, t, n) {
            var a = n(1765),
                r = n(13),
                o = n(10),
                s = o.ChainTypes,
                c = o.ChainStore,
                i = o.FetchChain,
                l = s.operations,
                u = Object.keys(l),
                p = {},
                d = {};
            function h(e) {
                return new Promise(function(t, n) {
                    if (p[e]) return t(p[e]);
                    r.Apis.instance()
                        .db_api()
                        .exec("get_block", [e])
                        .then(function(n) {
                            (p[e] = new Date(n.timestamp + "Z")), t(p[e]);
                        })
                        .catch(n);
                });
            }
            function m(e) {
                return new Promise(function(t, n) {
                    var a;
                    if (d[e]) return t(d[e]);
                    i("getObject", e, void 0, ((a = {}), (a[e] = !1), a))
                        .then(function(n) {
                            var a = n.toJS();
                            (d[e] = {
                                symbol: a.symbol.replace(
                                    /OPEN\.|BRIDGE\.|RUDEX\.|GDEX\.|BLOCK\./,
                                    ""
                                ),
                                precision: a.precision
                            }),
                                t(d[e]);
                        })
                        .catch(function(e) {
                            n();
                        });
                });
            }
            e.exports = {
                connect: function() {
                    return new Promise(function(e) {
                        r.Apis.instance(a.apiNode, !0)
                            .init_promise.then(function(t) {
                                c.init(!1).then(function() {
                                    e(t);
                                });
                            })
                            .catch(function(e) {
                                console.error("Error connection to node:", e);
                            });
                    });
                },
                disconnect: function() {
                    r.Apis.instance().close();
                },
                getUser: function(e) {
                    return new Promise(function(t, n) {
                        var a;
                        i("getAccount", e, void 0, ((a = {}), (a[e] = !1), a))
                            .then(function(e) {
                                var n = e.toJS();
                                n.balances || (n.balances = {}),
                                    n.call_orders || (n.call_orders = []);
                                var a = Object.keys(n.balances);
                                t({
                                    accountId: n.id,
                                    assets: a,
                                    balances: n.balances
                                });
                            })
                            .catch(n);
                    });
                },
                getBlockTime: h,
                getAssetData: m,
                resolveAssets: function(e, t) {
                    return new Promise(function(n, a) {
                        var r = [],
                            o = {};
                        e &&
                            e.forEach(function(e) {
                                switch (u[e.op[0]]) {
                                    case "transfer":
                                        (o[e.op[1].amount.asset_id] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                        break;
                                    case "fill_order":
                                        (o[e.op[1].pays.asset_id] = !0),
                                            (o[e.op[1].receives.asset_id] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                        break;
                                    case "asset_issue":
                                        (o[
                                            e.op[1].asset_to_issue.asset_id
                                        ] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                }
                            }),
                            t &&
                                t.forEach(function(e) {
                                    o[e] = !0;
                                }),
                            Object.keys(o).forEach(function(e) {
                                !d[e] && e && r.push(m(e));
                            }),
                            Promise.all(r)
                                .then(n)
                                .catch(a);
                    });
                },
                resolveBlockTimes: function(e) {
                    return new Promise(function(t, n) {
                        var a = e.map(function(e) {
                            return (
                                e.block_time &&
                                    (p[e.block_num] = new Date(e.block_time)),
                                h(e.block_num)
                            );
                        });
                        Promise.all(a)
                            .then(t)
                            .catch(n);
                    });
                },
                getAsset: function(e) {
                    return d[e];
                },
                getBlock: function(e) {
                    return p[e];
                }
            };
        },
        1765: function(e, t) {
            e.exports = {
                apiNode: "wss://eu.nodes.bitshares.ws",
                useES: !0,
                esNode: "https://eswrapper.bitshares.eu",
                botPaymentAccounts: []
            };
        },
        1766: function(e, t, n) {
            var a = n(13),
                r = void 0;
            e.exports = function(e) {
                return (
                    (r = e ? fetch : n(1767)),
                    {
                        getAccountHistory: function(e, t, n, r) {
                            return new Promise(function(o, s) {
                                a.Apis.instance()
                                    .history_api()
                                    .exec("get_account_history", [e, t, n, r])
                                    .then(function(e) {
                                        o(e);
                                    })
                                    .catch(s);
                            });
                        },
                        getAccountHistoryES: function(e, t, n) {
                            var a =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : "https://eswrapper.bitshares.eu";
                            return (
                                console.log(
                                    "query",
                                    a +
                                        "/get_account_history?account_id=" +
                                        e +
                                        "&from_=" +
                                        n +
                                        "&size=" +
                                        t +
                                        "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
                                ),
                                new Promise(function(o, s) {
                                    r(
                                        a +
                                            "/get_account_history?account_id=" +
                                            e +
                                            "&from_=" +
                                            n +
                                            "&size=" +
                                            t +
                                            "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
                                    )
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            var t = e.map(function(e) {
                                                return {
                                                    id:
                                                        e.account_history
                                                            .operation_id,
                                                    op: JSON.parse(
                                                        e.operation_history.op
                                                    ),
                                                    result: JSON.parse(
                                                        e.operation_history
                                                            .operation_result
                                                    ),
                                                    block_num:
                                                        e.block_data.block_num,
                                                    block_time:
                                                        e.block_data
                                                            .block_time + "Z"
                                                };
                                            });
                                            o(t);
                                        })
                                        .catch(function() {
                                            o([]);
                                        });
                                })
                            );
                        }
                    }
                );
            };
        },
        1767: function(e, t) {},
        1780: function(e, t, n) {
            var a = n(1762),
                r = a.groupEntries,
                o = a.parseData,
                s = n(1764),
                c = s.resolveBlockTimes,
                i = s.resolveAssets,
                l = n(1766)(!0),
                u = l.getAccountHistoryES,
                p = l.getAccountHistory;
            e.exports = {
                groupEntries: r,
                parseData: o,
                getAccountHistoryES: u,
                getAccountHistory: p,
                resolveBlockTimes: c,
                resolveAssets: i
            };
        },
        2079: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(11),
                s = n.n(o),
                c = n(16),
                i = n(3),
                l = n.n(i),
                u = n(31),
                p = n(20),
                d = n(100),
                h = n(45),
                m = n(67),
                f = n(21),
                g = n(58),
                b = n(32),
                y = n(10),
                v = n(743),
                _ = n(30),
                w = n(15),
                E = n.n(w),
                k = n(19),
                A = n(2077),
                C = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function S(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function T(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function O(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var x = (function(e) {
                function t(e) {
                    S(this, t);
                    var n = T(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {
                            inverseSort: e.viewSettings.get(
                                "dashboardSortInverse",
                                !0
                            ),
                            sortBy: e.viewSettings.get("dashboardSort", "star"),
                            dashboardFilter: e.viewSettings.get(
                                "dashboardFilter",
                                ""
                            )
                        }),
                        n
                    );
                }
                return (
                    O(t, r.a.Component),
                    C(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    !c.a.are_equal_shallow(
                                        e.accounts,
                                        this.props.accounts
                                    ) ||
                                    e.isContactsList !==
                                        this.props.isContactsList ||
                                    e.showMyAccounts !==
                                        this.props.showMyAccounts ||
                                    e.width !== this.props.width ||
                                    e.showIgnored !== this.props.showIgnored ||
                                    e.locked !== this.props.locked ||
                                    e.passwordAccount !==
                                        this.props.passwordAccount ||
                                    !c.a.are_equal_shallow(
                                        e.starredAccounts,
                                        this.props.starredAccounts
                                    ) ||
                                    !c.a.are_equal_shallow(t, this.state)
                                );
                            }
                        },
                        {
                            key: "_onStar",
                            value: function(e, t, n) {
                                n.preventDefault(),
                                    t
                                        ? g.a.removeStarAccount(e)
                                        : g.a.addStarAccount(e);
                            }
                        },
                        {
                            key: "_goAccount",
                            value: function(e, t) {
                                this.props.history.push("/account/" + e),
                                    f.a.changeViewSetting({overviewTab: t});
                            }
                        },
                        {
                            key: "_createAccount",
                            value: function() {
                                this.props.history.push(
                                    "/create-account/wallet"
                                );
                            }
                        },
                        {
                            key: "_onFilter",
                            value: function(e) {
                                this.setState({
                                    dashboardFilter: e.target.value.toLowerCase()
                                }),
                                    f.a.changeViewSetting({
                                        dashboardFilter: e.target.value.toLowerCase()
                                    });
                            }
                        },
                        {
                            key: "_setSort",
                            value: function(e) {
                                var t =
                                    e === this.state.sortBy
                                        ? !this.state.inverseSort
                                        : this.state.inverseSort;
                                this.setState({sortBy: e, inverseSort: t}),
                                    f.a.changeViewSetting({
                                        dashboardSort: e,
                                        dashboardSortInverse: t
                                    });
                            }
                        },
                        {
                            key: "_onAddContact",
                            value: function(e) {
                                g.a.addAccountContact(e);
                            }
                        },
                        {
                            key: "_onRemoveContact",
                            value: function(e) {
                                g.a.removeAccountContact(e);
                            }
                        },
                        {
                            key: "_renderList",
                            value: function(e, t) {
                                var n = this,
                                    a = this.props,
                                    o = a.width,
                                    i = a.starredAccounts,
                                    l = a.isContactsList,
                                    u = a.passwordAccount,
                                    p = this.state,
                                    d = p.dashboardFilter,
                                    h = p.sortBy,
                                    m = p.inverseSort,
                                    f = s.a.List();
                                return e
                                    .filter(function(e) {
                                        if (!e) return !1;
                                        var t = e.get("name"),
                                            a = _.a.isMyAccount(e) || t === u;
                                        return (
                                            !!l || a === n.props.showMyAccounts
                                        );
                                    })
                                    .filter(function(e) {
                                        return (
                                            !!e &&
                                            -1 !==
                                                e
                                                    .get("name")
                                                    .toLowerCase()
                                                    .indexOf(d)
                                        );
                                    })
                                    .sort(function(e, t) {
                                        switch (h) {
                                            case "star":
                                                return (function(e, t, n, a) {
                                                    var r = e.get("name"),
                                                        o = t.get("name"),
                                                        s = a.has(r),
                                                        i = a.has(o);
                                                    return s && !i
                                                        ? n
                                                            ? -1
                                                            : 1
                                                        : i && !s
                                                            ? n
                                                                ? 1
                                                                : -1
                                                            : r > o
                                                                ? n
                                                                    ? 1
                                                                    : -1
                                                                : r < o
                                                                    ? n
                                                                        ? -1
                                                                        : 1
                                                                    : c.a.sortText(
                                                                          r,
                                                                          o,
                                                                          !n
                                                                      );
                                                })(e, t, m, i);
                                            case "name":
                                                return c.a.sortText(
                                                    e.get("name"),
                                                    t.get("name"),
                                                    m
                                                );
                                        }
                                    })
                                    .map(function(e) {
                                        if (e) {
                                            var a = {},
                                                s = {},
                                                c = {};
                                            f = f.clear();
                                            var p = e.get("name"),
                                                d =
                                                    e.get(
                                                        "lifetime_referrer_name"
                                                    ) === p;
                                            e.get("orders") &&
                                                e
                                                    .get("orders")
                                                    .forEach(function(e, t) {
                                                        var n = y.ChainStore.getObject(
                                                            e
                                                        );
                                                        if (n) {
                                                            var a = n.getIn([
                                                                "sell_price",
                                                                "base",
                                                                "asset_id"
                                                            ]);
                                                            c[a]
                                                                ? (c[
                                                                      a
                                                                  ] += parseInt(
                                                                      n.get(
                                                                          "for_sale"
                                                                      ),
                                                                      10
                                                                  ))
                                                                : (c[
                                                                      a
                                                                  ] = parseInt(
                                                                      n.get(
                                                                          "for_sale"
                                                                      ),
                                                                      10
                                                                  ));
                                                        }
                                                    }),
                                                e.get("call_orders") &&
                                                    e
                                                        .get("call_orders")
                                                        .forEach(function(
                                                            e,
                                                            t
                                                        ) {
                                                            var n = y.ChainStore.getObject(
                                                                e
                                                            );
                                                            if (n) {
                                                                var r = n.getIn(
                                                                    [
                                                                        "call_price",
                                                                        "base",
                                                                        "asset_id"
                                                                    ]
                                                                );
                                                                a[r]
                                                                    ? (a[
                                                                          r
                                                                      ] += parseInt(
                                                                          n.get(
                                                                              "collateral"
                                                                          ),
                                                                          10
                                                                      ))
                                                                    : (a[
                                                                          r
                                                                      ] = parseInt(
                                                                          n.get(
                                                                              "collateral"
                                                                          ),
                                                                          10
                                                                      ));
                                                                var o = n.getIn(
                                                                    [
                                                                        "call_price",
                                                                        "quote",
                                                                        "asset_id"
                                                                    ]
                                                                );
                                                                s[o]
                                                                    ? (s[
                                                                          o
                                                                      ] += parseInt(
                                                                          n.get(
                                                                              "debt"
                                                                          ),
                                                                          10
                                                                      ))
                                                                    : (s[
                                                                          o
                                                                      ] = parseInt(
                                                                          n.get(
                                                                              "debt"
                                                                          ),
                                                                          10
                                                                      ));
                                                            }
                                                        });
                                            var h = e.get("balances");
                                            e.get("balances") &&
                                                h.forEach(function(e) {
                                                    var t = y.ChainStore.getObject(
                                                        e
                                                    );
                                                    if (!t || !t.get("balance"))
                                                        return null;
                                                    f = f.push(e);
                                                });
                                            var m =
                                                    _.a.isMyAccount(e) ||
                                                    p === u,
                                                g = i.has(p),
                                                w = g
                                                    ? "gold-star"
                                                    : "grey-star";
                                            return r.a.createElement(
                                                "tr",
                                                {key: p},
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: "clickable",
                                                        onClick: n._onStar.bind(
                                                            n,
                                                            p,
                                                            g
                                                        )
                                                    },
                                                    r.a.createElement(b.a, {
                                                        className: w,
                                                        name: "fi-star",
                                                        title:
                                                            "icons.fi_star.account"
                                                    })
                                                ),
                                                l
                                                    ? (t &&
                                                          r.a.createElement(
                                                              "td",
                                                              {
                                                                  onClick: n._onAddContact.bind(
                                                                      n,
                                                                      p
                                                                  )
                                                              },
                                                              r.a.createElement(
                                                                  b.a,
                                                                  {
                                                                      name:
                                                                          "plus-circle",
                                                                      title:
                                                                          "icons.plus_circle.add_contact"
                                                                  }
                                                              )
                                                          )) ||
                                                      r.a.createElement(
                                                          "td",
                                                          {
                                                              onClick: n._onRemoveContact.bind(
                                                                  n,
                                                                  p
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              b.a,
                                                              {
                                                                  name:
                                                                      "minus-circle",
                                                                  title:
                                                                      "icons.minus_circle.remove_contact"
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    e.get("id")
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "left",
                                                            paddingLeft: 10
                                                        },
                                                        onClick: n._goAccount.bind(
                                                            n,
                                                            p,
                                                            0
                                                        ),
                                                        className:
                                                            "clickable" +
                                                            (m
                                                                ? " my-account"
                                                                : "")
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            className: d
                                                                ? "lifetime"
                                                                : ""
                                                        },
                                                        p
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: "clickable",
                                                        onClick: n._goAccount.bind(
                                                            n,
                                                            p,
                                                            1
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(v.a, {
                                                        noTip: !0,
                                                        balances: [],
                                                        openOrders: c
                                                    })
                                                ),
                                                o >= 750
                                                    ? r.a.createElement(
                                                          "td",
                                                          {
                                                              className:
                                                                  "clickable",
                                                              onClick: n._goAccount.bind(
                                                                  n,
                                                                  p,
                                                                  2
                                                              ),
                                                              style: {
                                                                  textAlign:
                                                                      "right"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              v.a,
                                                              {
                                                                  noTip: !0,
                                                                  balances: [],
                                                                  collateral: a
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                o >= 1200
                                                    ? r.a.createElement(
                                                          "td",
                                                          {
                                                              className:
                                                                  "clickable",
                                                              onClick: n._goAccount.bind(
                                                                  n,
                                                                  p,
                                                                  2
                                                              ),
                                                              style: {
                                                                  textAlign:
                                                                      "right"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              v.a,
                                                              {
                                                                  noTip: !0,
                                                                  balances: [],
                                                                  debt: s
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: "clickable",
                                                        onClick: n._goAccount.bind(
                                                            n,
                                                            p,
                                                            0
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(v.a, {
                                                        noTip: !0,
                                                        balances: f,
                                                        collateral: a,
                                                        debt: s,
                                                        openOrders: c
                                                    })
                                                )
                                            );
                                        }
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.width,
                                    n = e.showIgnored,
                                    a = e.isContactsList,
                                    o = this.state.dashboardFilter,
                                    s = this._renderList(this.props.accounts),
                                    c = this._renderList(
                                        this.props.ignoredAccounts,
                                        !0
                                    ),
                                    i = a
                                        ? E.a.translate(
                                              "explorer.accounts.filter_contacts"
                                          )
                                        : E.a.translate(
                                              "explorer.accounts.filter"
                                          );
                                i += "...";
                                var u = !!k.a.getWallet();
                                return r.a.createElement(
                                    "div",
                                    {style: this.props.style},
                                    this.props.compact
                                        ? null
                                        : r.a.createElement(
                                              "section",
                                              {
                                                  style: {
                                                      paddingTop: "1rem",
                                                      paddingLeft: "2rem"
                                                  }
                                              },
                                              r.a.createElement("input", {
                                                  placeholder: i,
                                                  style: {
                                                      maxWidth: "20rem",
                                                      display: "inline-block"
                                                  },
                                                  type: "text",
                                                  value: o,
                                                  onChange: this._onFilter.bind(
                                                      this
                                                  )
                                              }),
                                              u && !a
                                                  ? r.a.createElement(
                                                        "div",
                                                        {
                                                            onClick: this._createAccount.bind(
                                                                this
                                                            ),
                                                            style: {
                                                                display:
                                                                    "inline-block",
                                                                marginLeft: 5,
                                                                marginBottom:
                                                                    "1rem"
                                                            },
                                                            className:
                                                                "button small"
                                                        },
                                                        r.a.createElement(l.a, {
                                                            content:
                                                                "header.create_account"
                                                        })
                                                    )
                                                  : null,
                                              c && c.length
                                                  ? r.a.createElement(
                                                        "div",
                                                        {
                                                            onClick: this.props
                                                                .onToggleIgnored,
                                                            style: {
                                                                display:
                                                                    "inline-block",
                                                                float: "right",
                                                                marginRight:
                                                                    "20px"
                                                            },
                                                            className:
                                                                "button small"
                                                        },
                                                        r.a.createElement(l.a, {
                                                            content:
                                                                "account." +
                                                                (this.props
                                                                    .showIgnored
                                                                    ? "hide_ignored"
                                                                    : "show_ignored")
                                                        })
                                                    )
                                                  : null
                                          ),
                                    r.a.createElement(
                                        "table",
                                        {
                                            className:
                                                "table table-hover dashboard-table",
                                            style: {fontSize: "0.85rem"}
                                        },
                                        this.props.compact
                                            ? null
                                            : r.a.createElement(
                                                  "thead",
                                                  null,
                                                  r.a.createElement(
                                                      "tr",
                                                      null,
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              onClick: this._setSort.bind(
                                                                  this,
                                                                  "star"
                                                              ),
                                                              className:
                                                                  "clickable"
                                                          },
                                                          r.a.createElement(
                                                              b.a,
                                                              {
                                                                  className:
                                                                      "grey-star",
                                                                  name:
                                                                      "fi-star",
                                                                  title:
                                                                      "icons.fi_star.sort_accounts"
                                                              }
                                                          )
                                                      ),
                                                      a
                                                          ? r.a.createElement(
                                                                "th",
                                                                null,
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        name:
                                                                            "user",
                                                                        title:
                                                                            "icons.user.account"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "left"
                                                              }
                                                          },
                                                          "ID"
                                                      ),
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "left",
                                                                  paddingLeft: 10
                                                              },
                                                              onClick: this._setSort.bind(
                                                                  this,
                                                                  "name"
                                                              ),
                                                              className:
                                                                  "clickable"
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "header.account"
                                                              }
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "right"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "account.open_orders"
                                                              }
                                                          )
                                                      ),
                                                      t >= 750
                                                          ? r.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    l.a,
                                                                    {
                                                                        content:
                                                                            "account.as_collateral"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      t >= 1200
                                                          ? r.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    l.a,
                                                                    {
                                                                        content:
                                                                            "transaction.borrow_amount"
                                                                    }
                                                                )
                                                            )
                                                          : null,
                                                      r.a.createElement(
                                                          "th",
                                                          {
                                                              style: {
                                                                  textAlign:
                                                                      "right",
                                                                  marginRight: 20
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "account.total_value"
                                                              }
                                                          )
                                                      )
                                                  )
                                              ),
                                        r.a.createElement(
                                            "tbody",
                                            null,
                                            s,
                                            n && c.length
                                                ? r.a.createElement(
                                                      "tr",
                                                      {
                                                          className:
                                                              "dashboard-table--hiddenAccounts",
                                                          style: {
                                                              backgroundColor:
                                                                  "transparent"
                                                          },
                                                          key: "hidden"
                                                      },
                                                      r.a.createElement(
                                                          "td",
                                                          {colSpan: "8"},
                                                          E.a.translate(
                                                              "account.hidden_accounts_row"
                                                          ),
                                                          ":"
                                                      )
                                                  )
                                                : null,
                                            n && c
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (x.propTypes = {
                accounts: h.a.ChainAccountsList.isRequired,
                ignoredAccounts: h.a.ChainAccountsList
            }),
                (x.defaultProps = {width: 2e3, compact: !1}),
                (x = Object(m.a)(x));
            var I = (function(e) {
                function t() {
                    return (
                        S(this, t),
                        T(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    O(t, r.a.Component),
                    C(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(x, this.props);
                            }
                        }
                    ]),
                    t
                );
            })();
            I = Object(A.a)(I);
            var j = Object(u.connect)(I, {
                    listenTo: function() {
                        return [p.a, d.a, _.a];
                    },
                    getProps: function() {
                        return {
                            locked: d.a.getState().locked,
                            starredAccounts: _.a.getState().starredAccounts,
                            viewSettings: p.a.getState().viewSettings
                        };
                    }
                }),
                N = n(1758),
                P = n(38),
                L = n(520),
                D = n(396),
                B = n(1736),
                R = n(118),
                F = n.n(R),
                W =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) &&
                                    (e[a] = n[a]);
                        }
                        return e;
                    },
                H = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function z(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function M(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function q(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var J = (function(e) {
                    function t() {
                        return (
                            z(this, t),
                            M(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        q(t, r.a.Component),
                        H(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        F.a,
                                        {
                                            stores: [_.a, p.a, D.a],
                                            inject: {
                                                contacts: function() {
                                                    return _.a.getState()
                                                        .accountContacts;
                                                },
                                                myActiveAccounts: function() {
                                                    return _.a.getState()
                                                        .myActiveAccounts;
                                                },
                                                myHiddenAccounts: function() {
                                                    return _.a.getState()
                                                        .myHiddenAccounts;
                                                },
                                                accountsReady: function() {
                                                    return (
                                                        _.a.getState()
                                                            .accountsLoaded &&
                                                        _.a.getState()
                                                            .refsLoaded
                                                    );
                                                },
                                                passwordAccount: function() {
                                                    return _.a.getState()
                                                        .passwordAccount;
                                                },
                                                currentEntry: p.a
                                                    .getState()
                                                    .viewSettings.get(
                                                        "dashboardEntry",
                                                        "accounts"
                                                    )
                                            }
                                        },
                                        r.a.createElement(U, this.props)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                U = (function(e) {
                    function t(e) {
                        z(this, t);
                        var n = M(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (n.state = {
                                width: null,
                                showIgnored: !1,
                                currentEntry: e.currentEntry
                            }),
                            (n._setDimensions = n._setDimensions.bind(n)),
                            n
                        );
                    }
                    return (
                        q(t, r.a.Component),
                        H(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this._setDimensions(),
                                        window.addEventListener(
                                            "resize",
                                            this._setDimensions,
                                            {capture: !1, passive: !0}
                                        );
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        e.myActiveAccounts !==
                                            this.props.myActiveAccounts ||
                                        e.contacts !== this.props.contacts ||
                                        e.ignoredAccounts !==
                                            this.props.ignoredAccounts ||
                                        e.passwordAccount !==
                                            this.props.passwordAccount ||
                                        t.width !== this.state.width ||
                                        e.accountsReady !==
                                            this.props.accountsReady ||
                                        t.showIgnored !==
                                            this.state.showIgnored ||
                                        t.currentEntry !==
                                            this.state.currentEntry
                                    );
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    window.removeEventListener(
                                        "resize",
                                        this._setDimensions
                                    );
                                }
                            },
                            {
                                key: "_setDimensions",
                                value: function() {
                                    var e = window.innerWidth;
                                    e !== this.state.width &&
                                        this.setState({width: e});
                                }
                            },
                            {
                                key: "_onToggleIgnored",
                                value: function() {
                                    this.setState({
                                        showIgnored: !this.state.showIgnored
                                    });
                                }
                            },
                            {
                                key: "_onSwitchType",
                                value: function(e) {
                                    this.setState({currentEntry: e}),
                                        f.a.changeViewSetting({
                                            dashboardEntry: e
                                        });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.myActiveAccounts,
                                        n = e.myHiddenAccounts,
                                        a = e.accountsReady,
                                        o = e.passwordAccount,
                                        c = this.state,
                                        i = c.width,
                                        l = c.showIgnored;
                                    o && !t.has(o) && (t = t.add(o));
                                    var u = t.toArray().sort();
                                    o && -1 === u.indexOf(o) && u.push(o);
                                    var p = n.toArray().sort(),
                                        d = t.size + n.size + (o ? 1 : 0);
                                    if (!a) return r.a.createElement(P.a, null);
                                    if (!d) return r.a.createElement(L.a, null);
                                    var h = this.props.contacts.toArray();
                                    return r.a.createElement(
                                        "div",
                                        {
                                            ref: "wrapper",
                                            className:
                                                "grid-block page-layout vertical"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                ref: "container",
                                                className:
                                                    "tabs-container generic-bordered-box"
                                            },
                                            r.a.createElement(
                                                B.b,
                                                {
                                                    setting: "accountTab",
                                                    className: "account-tabs",
                                                    defaultActiveTab: 1,
                                                    segmented: !1,
                                                    tabsClass:
                                                        "account-overview no-padding bordered-header content-block"
                                                },
                                                r.a.createElement(
                                                    B.a,
                                                    {title: "account.accounts"},
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "generic-bordered-box"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "box-content"
                                                            },
                                                            r.a.createElement(
                                                                j,
                                                                {
                                                                    accounts: s.a.List(
                                                                        u
                                                                    ),
                                                                    ignoredAccounts: s.a.List(
                                                                        p
                                                                    ),
                                                                    width: i,
                                                                    onToggleIgnored: this._onToggleIgnored.bind(
                                                                        this
                                                                    ),
                                                                    showIgnored: l,
                                                                    showMyAccounts: !0
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    B.a,
                                                    {title: "account.contacts"},
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "generic-bordered-box"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "box-content"
                                                            },
                                                            r.a.createElement(
                                                                j,
                                                                {
                                                                    accounts: h,
                                                                    passwordAccount: o,
                                                                    ignoredAccounts: s.a.List(
                                                                        p
                                                                    ),
                                                                    width: i,
                                                                    onToggleIgnored: this._onToggleIgnored.bind(
                                                                        this
                                                                    ),
                                                                    showIgnored: l,
                                                                    isContactsList: !0
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    B.a,
                                                    {title: "account.recent"},
                                                    r.a.createElement(N.a, {
                                                        accountsList: t,
                                                        limit: 10,
                                                        compactView: !1,
                                                        fullHeight: !0,
                                                        showFilters: !0,
                                                        dashboard: !0
                                                    })
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            t.default = function(e) {
                return r.a.createElement(J, W({}, e, {onlyAccounts: !0}));
            };
        }
    }
]);
//# sourceMappingURL=dashboard-accounts.js.map
