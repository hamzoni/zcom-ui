(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    {
        1732: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(29),
                i = n(45),
                c = n(67),
                l = n(1),
                s = n.n(l),
                u = (function() {
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
            var p = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
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
                    })(t, r.a.Component),
                    u(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = Number(
                                        this.props.balance.get("balance")
                                    ),
                                    t = this.props.balance.get("asset_type");
                                return r.a.createElement(o.a, {
                                    amount: e,
                                    asset: t,
                                    asPercentage: this.props.asPercentage,
                                    assetInfo: this.props.assetInfo,
                                    replace: this.props.replace,
                                    hide_asset: this.props.hide_asset
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            (p.propTypes = {
                balance: i.a.ChainObject.isRequired,
                assetInfo: s.a.node,
                hide_asset: s.a.bool
            }),
                (p.defaultProps = {hide_asset: !1}),
                (t.a = Object(c.a)(p));
        },
        1794: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(31),
                i = n(11),
                c = n.n(i),
                l = n(7),
                s = n.n(l),
                u = n(63),
                p = n(38),
                f = n(90),
                m = n(254),
                y = n(510),
                h = n(336),
                _ = n(29),
                d = n(3),
                b = n.n(d),
                v = (function() {
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
            var g = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            })(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        (function(e, t) {
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
                        })(t, a["Component"]),
                        v(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.claim_account_name &&
                                        this.onClaimAccount(
                                            e.claim_account_name,
                                            e.checked
                                        );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    if (
                                        void 0 === this.props.balances ||
                                        !this.props.total_by_account_asset.size
                                    )
                                        return r.a.createElement("div", null);
                                    var t = -1;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "table",
                                            {className: "table"},
                                            r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "th",
                                                        null
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "wallet.unclaimed"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "wallet.unclaimed_vesting"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "account.name"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                this.props.total_by_account_asset
                                                    .map(function(n, a) {
                                                        return r.a.createElement(
                                                            "tr",
                                                            {key: ++t},
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                r.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "checkbox",
                                                                        checked: !!e.props.checked.get(
                                                                            t
                                                                        ),
                                                                        onChange: e.onCheckbox.bind(
                                                                            e,
                                                                            t,
                                                                            n.balances
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                n.unclaimed
                                                                    ? r.a.createElement(
                                                                          _.a,
                                                                          {
                                                                              color:
                                                                                  "info",
                                                                              amount:
                                                                                  n.unclaimed,
                                                                              asset: a.get(
                                                                                  1
                                                                              )
                                                                          }
                                                                      )
                                                                    : null
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                n.vesting
                                                                    .unclaimed
                                                                    ? r.a.createElement(
                                                                          "div",
                                                                          null,
                                                                          r.a.createElement(
                                                                              _.a,
                                                                              {
                                                                                  color:
                                                                                      "info",
                                                                                  amount:
                                                                                      n
                                                                                          .vesting
                                                                                          .unclaimed,
                                                                                  hide_asset: !0,
                                                                                  asset: a.get(
                                                                                      1
                                                                                  )
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "span",
                                                                              null,
                                                                              " of "
                                                                          ),
                                                                          r.a.createElement(
                                                                              _.a,
                                                                              {
                                                                                  color:
                                                                                      "info",
                                                                                  amount:
                                                                                      n
                                                                                          .vesting
                                                                                          .total,
                                                                                  asset: a.get(
                                                                                      1
                                                                                  )
                                                                              }
                                                                          )
                                                                      )
                                                                    : null
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                " ",
                                                                a.get(0),
                                                                " "
                                                            )
                                                        );
                                                    })
                                                    .toArray()
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "onCheckbox",
                                value: function(e, t) {
                                    var n = this.props.checked;
                                    (n = n.get(e) ? n.delete(e) : n.set(e, t)),
                                        h.a.setSelectedBalanceClaims(n);
                                }
                            },
                            {
                                key: "onClaimAccount",
                                value: function(e, t) {
                                    if (!t.size) {
                                        var n = -1;
                                        this.props.total_by_account_asset.forEach(
                                            function(a, r) {
                                                n++,
                                                    r.get(0) === e &&
                                                        (a.unclaimed ||
                                                            a.vesting
                                                                .unclaimed) &&
                                                        (t = t.set(
                                                            n,
                                                            a.balances
                                                        ));
                                            }
                                        ),
                                            t.size &&
                                                h.a.setSelectedBalanceClaims(t);
                                    }
                                }
                            }
                        ]),
                        t
                    );
                })(),
                k = (g = Object(o.connect)(g, {
                    listenTo: function() {
                        return [y.a];
                    },
                    getProps: function() {
                        var e = y.a.getState(),
                            t = e.balances,
                            n = e.address_to_pubkey,
                            a = f.a.getState().keys,
                            r = c.a.Map().asMutable();
                        return (
                            t &&
                                (e.total_by_account_asset = t
                                    .groupBy(function(e) {
                                        var t = "",
                                            o = n.get(e.owner),
                                            i = a.get(o);
                                        i &&
                                            i.import_account_names &&
                                            (t = i.import_account_names.join(
                                                ", "
                                            ));
                                        var l = Math.ceil(
                                            (function(e, t) {
                                                var n = r.get(e);
                                                return (
                                                    n ||
                                                        ((n = c.a
                                                            .Set()
                                                            .asMutable()),
                                                        r.set(e, n)),
                                                    n.add(t),
                                                    n.size
                                                );
                                            })(
                                                c.a.List([
                                                    t,
                                                    e.balance.asset_id
                                                ]),
                                                e.owner
                                            ) / 60
                                        );
                                        return c.a.List([
                                            t,
                                            e.balance.asset_id,
                                            l
                                        ]);
                                    })
                                    .map(function(e) {
                                        return e.reduce(
                                            function(e, t) {
                                                return (
                                                    (t.public_key_string = n.get(
                                                        t.owner
                                                    )),
                                                    (e.balances = e.balances.add(
                                                        t
                                                    )),
                                                    void 0 != t.vested_balance
                                                        ? ((e.vesting.unclaimed += Number(
                                                              t.vested_balance
                                                                  .amount
                                                          )),
                                                          (e.vesting.total += Number(
                                                              t.balance.amount
                                                          )))
                                                        : (e.unclaimed += Number(
                                                              t.balance.amount
                                                          )),
                                                    e
                                                );
                                            },
                                            {
                                                unclaimed: 0,
                                                vesting: {
                                                    unclaimed: 0,
                                                    total: 0
                                                },
                                                balances: c.a.Set()
                                            }
                                        );
                                    })
                                    .sortBy(function(e) {
                                        return e;
                                    })),
                            e
                        );
                    }
                })),
                E = n(68),
                w = n(30),
                O = n(45),
                S = n(237),
                C = n(67),
                j = n(1),
                P = n.n(j),
                x = (function() {
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
            var A = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
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
                    })(t, a["Component"]),
                    x(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.accounts
                                    .filter(function(e) {
                                        return !!e;
                                    })
                                    .filter(function(e) {
                                        return w.a.isMyAccount(e);
                                    })
                                    .map(function(e) {
                                        return e.get("name");
                                    })
                                    .sort();
                                return r.a.createElement(
                                    "span",
                                    null,
                                    r.a.createElement(S.a, {
                                        onChange: this.onAccountSelect.bind(
                                            this
                                        ),
                                        account_names: e,
                                        center: !0
                                    })
                                );
                            }
                        },
                        {
                            key: "onAccountSelect",
                            value: function(e) {
                                this.props.onChange(e);
                            }
                        }
                    ]),
                    t
                );
            })();
            A.propTypes = {
                accounts: O.a.ChainAccountsList.isRequired,
                onChange: P.a.func.isRequired
            };
            var N = Object(C.a)(A),
                T = (function() {
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
            var B = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
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
                    })(t, a["Component"]),
                    T(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                var e = f.a.getState().keys.keySeq();
                                h.a.setPubkeys(e), (this.existing_keys = e);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = f.a.getState().keys.keySeq();
                                t.equals(this.existing_keys) ||
                                    ((this.existing_keys = t),
                                    h.a.setPubkeys(t));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                if (!this.props.account_refs.size)
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "h5",
                                            null,
                                            r.a.createElement(b.a, {
                                                content: "wallet.no_balance"
                                            })
                                        )
                                    );
                                if (this.props.loading)
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "h5",
                                            null,
                                            r.a.createElement(b.a, {
                                                content:
                                                    "wallet.loading_balances"
                                            }),
                                            "…"
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(p.a, {
                                            type: "three-bounce"
                                        })
                                    );
                                if (
                                    !this.props.balances ||
                                    !this.props.balances.size
                                )
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "h5",
                                            null,
                                            r.a.createElement(b.a, {
                                                content: "wallet.no_balance"
                                            })
                                        )
                                    );
                                var e =
                                        this.props.selected_balances.size &&
                                        this.props.claim_account_name,
                                    t = e
                                        ? " (" +
                                          this.props.claim_account_name +
                                          ")"
                                        : null;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "content-block center-content"
                                        },
                                        r.a.createElement(
                                            "h3",
                                            {className: "no-border-bottom"},
                                            r.a.createElement(b.a, {
                                                content: "wallet.claim_balances"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {className: "grid-block vertical"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "grid-content",
                                                style: {
                                                    overflowY:
                                                        "hidden !important"
                                                }
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "full-width-content center-content"
                                                },
                                                r.a.createElement(N, {
                                                    key: this.props.balances,
                                                    accounts: c.a.List(
                                                        this.props.account_refs
                                                    ),
                                                    onChange: this.onClaimAccountChange.bind(
                                                        this
                                                    )
                                                })
                                            ),
                                            r.a.createElement("br", null)
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(k, null)
                                    ),
                                    r.a.createElement("br", null),
                                    r.a.createElement("br", null),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: s()("button success", {
                                                disabled: !e
                                            }),
                                            onClick: this.onClaimBalance.bind(
                                                this
                                            )
                                        },
                                        r.a.createElement(b.a, {
                                            content: "wallet.claim_balance"
                                        }),
                                        t
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "button cancel",
                                            onClick: this.onBack.bind(this)
                                        },
                                        r.a.createElement(b.a, {
                                            content: "wallet.cancel"
                                        })
                                    )
                                );
                            }
                        },
                        {
                            key: "onBack",
                            value: function(e) {
                                e.preventDefault(), window.history.back();
                            }
                        },
                        {
                            key: "onClaimAccountChange",
                            value: function(e) {
                                h.a.claimAccountChange(e);
                            }
                        },
                        {
                            key: "onClaimBalance",
                            value: function() {
                                E.a
                                    .importBalance(
                                        this.props.claim_account_name,
                                        this.props.selected_balances,
                                        !0
                                    )
                                    .catch(function(e) {
                                        console.error("claimBalance", e);
                                        var t = e;
                                        try {
                                            t = e.data.message;
                                        } catch (e) {}
                                        throw (u.a.error(
                                            "Error claiming balance: " + t
                                        ),
                                        e);
                                    });
                            }
                        }
                    ]),
                    t
                );
            })();
            B = Object(o.connect)(B, {
                listenTo: function() {
                    return [y.a, m.a, f.a];
                },
                getProps: function() {
                    var e = y.a.getState();
                    return (e.account_refs = m.a.getAccountRefs()), e;
                }
            });
            t.a = B;
        },
        1811: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(31),
                i = n(7),
                c = n.n(i),
                l = n(63),
                s = n(10),
                u = n(13),
                p = n(90),
                f = n(53),
                m = n(513),
                y = n(38),
                h = n(3),
                _ = n.n(h),
                d = n(15),
                b = n.n(d),
                v = n(1794),
                g = n(336),
                k = n(510),
                E = n(29),
                w = (function() {
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
            var O = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            })(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        (function(e, t) {
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
                        })(t, a["Component"]),
                        w(t, [
                            {
                                key: "render",
                                value: function() {
                                    if (void 0 === this.props.balances)
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(_.a, {
                                                content:
                                                    "wallet.loading_balances"
                                            }),
                                            "…"
                                        );
                                    var e = this.props.balances
                                        .groupBy(function(e) {
                                            return e.balance.asset_id;
                                        })
                                        .map(function(e) {
                                            return e.reduce(function(e, t) {
                                                return (
                                                    e + Number(t.balance.amount)
                                                );
                                            }, 0);
                                        });
                                    return e.size
                                        ? r.a.createElement(
                                              "div",
                                              null,
                                              e
                                                  .map(function(e, t) {
                                                      return r.a.createElement(
                                                          "div",
                                                          {key: t},
                                                          r.a.createElement(
                                                              E.a,
                                                              {
                                                                  color: "info",
                                                                  amount: e,
                                                                  asset: t
                                                              }
                                                          )
                                                      );
                                                  })
                                                  .toArray()
                                          )
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              "None"
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                S = (O = Object(o.connect)(O, {
                    listenTo: function() {
                        return [k.a];
                    },
                    getProps: function() {
                        return k.a.getState();
                    }
                })),
                C = n(19),
                j = n(22),
                P = n(89),
                x = (function() {
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
            var A = (function(e) {
                    function t() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var e = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = e._getInitialState()),
                            e._export("importing"),
                            e
                        );
                    }
                    return (
                        (function(e, t) {
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
                        })(t, P["a"]),
                        x(t, [
                            {
                                key: "_getInitialState",
                                value: function() {
                                    return {importing: !1};
                                }
                            },
                            {
                                key: "importing",
                                value: function(e) {
                                    this.setState({importing: e});
                                }
                            }
                        ]),
                        t
                    );
                })(),
                N = j.a.createStore(A, "ImportKeysStore"),
                T = n(2057),
                B = (function() {
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
            n(2059);
            var I = function(e) {
                    var t = e.key_count;
                    return t
                        ? r.a.createElement(
                              "span",
                              null,
                              "Found ",
                              t,
                              " private keys"
                          )
                        : r.a.createElement("span", null);
                },
                K = (function(e) {
                    function t() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var e = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = e._getInitialState()),
                            (e._renderBalanceClaims = e._renderBalanceClaims.bind(
                                e
                            )),
                            e
                        );
                    }
                    return (
                        (function(e, t) {
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
                        })(t, a["Component"]),
                        B(t, [
                            {
                                key: "_getInitialState",
                                value: function() {
                                    return {
                                        keys_to_account: {},
                                        no_file: !0,
                                        account_keys: [],
                                        reset_file_name:
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0] &&
                                            arguments[0]
                                                ? this.state.reset_file_name
                                                : Date.now(),
                                        reset_password: Date.now(),
                                        password_checksum: null,
                                        import_file_message: null,
                                        import_password_message: null,
                                        imported_keys_public: {},
                                        key_text_message: null,
                                        genesis_filtering: !1,
                                        genesis_filter_status: [],
                                        genesis_filter_finished: void 0,
                                        importSuccess: !1
                                    };
                                }
                            },
                            {
                                key: "reset",
                                value: function(e, t) {
                                    var n = this;
                                    e && e.preventDefault();
                                    var a = this._getInitialState(t);
                                    this.setState(a, function() {
                                        return n.updateOnChange();
                                    });
                                }
                            },
                            {
                                key: "onWif",
                                value: function(e) {
                                    e.preventDefault();
                                    var t = this.refs.wifInput.value;
                                    this.addByPattern(t);
                                }
                            },
                            {
                                key: "onCancel",
                                value: function(e) {
                                    e && e.preventDefault(),
                                        this.setState(this._getInitialState());
                                }
                            },
                            {
                                key: "updateOnChange",
                                value: function() {
                                    g.a.setPubkeys(
                                        Object.keys(
                                            this.state.imported_keys_public
                                        )
                                    );
                                }
                            },
                            {
                                key: "getImportAccountKeyCount",
                                value: function(e) {
                                    var t = {},
                                        n = !1;
                                    for (var a in e) {
                                        var r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (
                                                var c,
                                                    l = e[a].account_names[
                                                        Symbol.iterator
                                                    ]();
                                                !(r = (c = l.next()).done);
                                                r = !0
                                            ) {
                                                var s = c.value;
                                                (t[s] = (t[s] || 0) + 1),
                                                    (n = !0);
                                            }
                                        } catch (e) {
                                            (o = !0), (i = e);
                                        } finally {
                                            try {
                                                !r && l.return && l.return();
                                            } finally {
                                                if (o) throw i;
                                            }
                                        }
                                    }
                                    return n ? t : null;
                                }
                            },
                            {
                                key: "upload",
                                value: function(e) {
                                    var t = this;
                                    this.reset(null, !0);
                                    var n = e.target.files[0],
                                        a = new FileReader();
                                    (a.onload = function(e) {
                                        var a = e.target.result;
                                        try {
                                            var r = void 0;
                                            try {
                                                (r = JSON.parse(a)),
                                                    t._parseImportKeyUpload(
                                                        r,
                                                        n.name,
                                                        function(e) {
                                                            t.setState(
                                                                e,
                                                                function() {
                                                                    e.genesis_filter_finished &&
                                                                        t._passwordCheck();
                                                                }
                                                            );
                                                        }
                                                    );
                                            } catch (e) {
                                                try {
                                                    r || n.name,
                                                        t._parseWalletJson(r);
                                                } catch (e) {
                                                    if (!t.addByPattern(a))
                                                        throw e;
                                                }
                                                t._passwordCheck();
                                            }
                                        } catch (e) {
                                            console.error(
                                                "... ImportKeys upload error",
                                                e
                                            ),
                                                t.setState({
                                                    import_file_message: e
                                                });
                                        }
                                    }),
                                        a.readAsText(n);
                                }
                            },
                            {
                                key: "_parseImportKeyUpload",
                                value: function(e, t, n) {
                                    var a = this,
                                        r = void 0,
                                        o = void 0;
                                    try {
                                        if (!(r = e.password_checksum))
                                            throw t +
                                                " is an unrecognized format";
                                        if (!Array.isArray(e.account_keys))
                                            throw t +
                                                " is an unrecognized format";
                                        o = e.account_keys;
                                    } catch (e) {
                                        throw e.message || e;
                                    }
                                    var i = new T.a();
                                    i.isAvailable()
                                        ? this.setState(
                                              {genesis_filter_initalizing: !0},
                                              function() {
                                                  return i.init(function() {
                                                      var e =
                                                              a.state
                                                                  .genesis_filter_status,
                                                          t = o;
                                                      i.filter(t, function(a) {
                                                          if (
                                                              "missing_public_keys" ===
                                                              a.error
                                                          )
                                                              return (
                                                                  console.error(
                                                                      "un-released format, just for testing"
                                                                  ),
                                                                  void n({
                                                                      password_checksum: r,
                                                                      account_keys: o,
                                                                      genesis_filter_finished: !0,
                                                                      genesis_filtering: !1
                                                                  })
                                                              );
                                                          if (a.success)
                                                              n({
                                                                  password_checksum: r,
                                                                  account_keys: t,
                                                                  genesis_filter_finished: !0,
                                                                  genesis_filtering: !1
                                                              });
                                                          else if (
                                                              void 0 ===
                                                              a.initalizing
                                                          )
                                                              if (
                                                                  void 0 !==
                                                                  a.importing
                                                              ) {
                                                                  if (e.length)
                                                                      e[
                                                                          e.length -
                                                                              1
                                                                      ]
                                                                          .account_name ===
                                                                      a.account_name
                                                                          ? (e[
                                                                                e.length -
                                                                                    1
                                                                            ] = a)
                                                                          : e.push(
                                                                                a
                                                                            );
                                                                  else
                                                                      e.push(a);
                                                                  n({
                                                                      genesis_filter_status: e
                                                                  });
                                                              } else
                                                                  console.error(
                                                                      "unknown status",
                                                                      a
                                                                  );
                                                          else
                                                              n({
                                                                  genesis_filter_initalizing:
                                                                      a.initalizing,
                                                                  genesis_filtering: !0
                                                              });
                                                      });
                                                  });
                                              }
                                          )
                                        : n({
                                              password_checksum: r,
                                              account_keys: o,
                                              genesis_filter_finished: !0,
                                              genesis_filtering: !1
                                          });
                                }
                            },
                            {
                                key: "_parseWalletJson",
                                value: function(e) {
                                    var t = void 0,
                                        n = void 0,
                                        a = {},
                                        r = {},
                                        o = function(e, t) {
                                            e =
                                                u.ChainConfig.address_prefix +
                                                e.substring(3);
                                            var n = s.PublicKey.fromPublicKeyString(
                                                    e
                                                ).toAddressString(),
                                                a = r[t] || [];
                                            (n = "BTS" + n.substring(3)),
                                                a.push(n),
                                                (r[t] = a);
                                        };
                                    try {
                                        if (!Array.isArray(e))
                                            throw new Error(
                                                "Invalid wallet format"
                                            );
                                        var i = !0,
                                            c = !1,
                                            l = void 0;
                                        try {
                                            for (
                                                var p, f = e[Symbol.iterator]();
                                                !(i = (p = f.next()).done);
                                                i = !0
                                            ) {
                                                var m = p.value;
                                                if (
                                                    "key_record_type" ==
                                                        m.type &&
                                                    m.data.account_address &&
                                                    m.data.encrypted_private_key
                                                ) {
                                                    var y =
                                                            m.data
                                                                .account_address,
                                                        h = a[y] || [];
                                                    h.push(
                                                        m.data
                                                            .encrypted_private_key
                                                    ),
                                                        (a[y] = h);
                                                } else if (
                                                    "account_record_type" !=
                                                    m.type
                                                )
                                                    if (
                                                        "property_record_type" !=
                                                            m.type ||
                                                        "encrypted_brainkey" !=
                                                            m.data.key
                                                    ) {
                                                        if (
                                                            "master_key_record_type" ==
                                                            m.type
                                                        ) {
                                                            if (!m.data)
                                                                throw file.name +
                                                                    " invalid master_key_record record";
                                                            if (
                                                                !m.data.checksum
                                                            )
                                                                throw file.name +
                                                                    " is missing master_key_record checksum";
                                                            t = m.data.checksum;
                                                        }
                                                    } else n = m.data.value;
                                                else {
                                                    var _ = m.data.name;
                                                    o(m.data.owner_key, _);
                                                    var d = !0,
                                                        b = !1,
                                                        v = void 0;
                                                    try {
                                                        for (
                                                            var g,
                                                                k = m.data.active_key_history[
                                                                    Symbol
                                                                        .iterator
                                                                ]();
                                                            !(d = (g = k.next())
                                                                .done);
                                                            d = !0
                                                        ) {
                                                            o(g.value[1], _);
                                                        }
                                                    } catch (e) {
                                                        (b = !0), (v = e);
                                                    } finally {
                                                        try {
                                                            !d &&
                                                                k.return &&
                                                                k.return();
                                                        } finally {
                                                            if (b) throw v;
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            (c = !0), (l = e);
                                        } finally {
                                            try {
                                                !i && f.return && f.return();
                                            } finally {
                                                if (c) throw l;
                                            }
                                        }
                                        if (!n)
                                            throw "Please use a BTS 1.0 wallet_export_keys file instead";
                                        if (!t)
                                            throw file.name +
                                                " is missing password_checksum";
                                        if (!enckeys.length)
                                            throw file.name +
                                                " does not contain any private keys";
                                    } catch (e) {
                                        throw e.message || e;
                                    }
                                    var E = [];
                                    for (var w in r) {
                                        var O = [],
                                            S = !0,
                                            C = !1,
                                            j = void 0;
                                        try {
                                            for (
                                                var P,
                                                    x = r[w][Symbol.iterator]();
                                                !(S = (P = x.next()).done);
                                                S = !0
                                            ) {
                                                var A = a[P.value];
                                                if (A) {
                                                    var N = !0,
                                                        T = !1,
                                                        B = void 0;
                                                    try {
                                                        for (
                                                            var I,
                                                                K = A[
                                                                    Symbol
                                                                        .iterator
                                                                ]();
                                                            !(N = (I = K.next())
                                                                .done);
                                                            N = !0
                                                        ) {
                                                            var R = I.value;
                                                            O.push(R);
                                                        }
                                                    } catch (e) {
                                                        (T = !0), (B = e);
                                                    } finally {
                                                        try {
                                                            !N &&
                                                                K.return &&
                                                                K.return();
                                                        } finally {
                                                            if (T) throw B;
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            (C = !0), (j = e);
                                        } finally {
                                            try {
                                                !S && x.return && x.return();
                                            } finally {
                                                if (C) throw j;
                                            }
                                        }
                                        E.push({
                                            account_name: w,
                                            encrypted_private_keys: O
                                        });
                                    }
                                    this.setState({
                                        password_checksum: t,
                                        account_keys: E
                                    });
                                }
                            },
                            {
                                key: "_passwordCheck",
                                value: function(e) {
                                    var t = this;
                                    e &&
                                        "preventDefault" in e &&
                                        e.preventDefault();
                                    var n = this.refs.password,
                                        a = n ? n.value : "";
                                    if (
                                        this.state.password_checksum !=
                                        s.hash
                                            .sha512(s.hash.sha512(a))
                                            .toString("hex")
                                    )
                                        return this.setState({
                                            no_file: !1,
                                            import_password_message: a.length
                                                ? "Incorrect password"
                                                : null
                                        });
                                    this.setState(
                                        {
                                            no_file: !1,
                                            reset_password: Date.now(),
                                            import_password_message: b.a.translate(
                                                "wallet.import_pass_match"
                                            )
                                        },
                                        function() {
                                            return t._decryptPrivateKeys(a);
                                        }
                                    );
                                }
                            },
                            {
                                key: "_decryptPrivateKeys",
                                value: function(e) {
                                    var t = this,
                                        n = s.Aes.fromSeed(e),
                                        a = !0,
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (
                                            var c,
                                                p = this.state.account_keys[
                                                    Symbol.iterator
                                                ]();
                                            !(r = (c = p.next()).done);
                                            r = !0
                                        ) {
                                            var f = c.value;
                                            if (f.encrypted_private_keys)
                                                for (
                                                    var m = f.account_name.trim(),
                                                        y = new RegExp(
                                                            "^" +
                                                                u.ChainConfig
                                                                    .address_prefix
                                                        ),
                                                        h = 0;
                                                    h <
                                                    f.encrypted_private_keys
                                                        .length;
                                                    h++
                                                ) {
                                                    var _ =
                                                            f
                                                                .encrypted_private_keys[
                                                                h
                                                            ],
                                                        d = f.public_keys
                                                            ? f.public_keys[h]
                                                            : null;
                                                    try {
                                                        var b = n.decryptHex(_);
                                                        if (d)
                                                            y.test(d) ||
                                                                (d =
                                                                    u
                                                                        .ChainConfig
                                                                        .address_prefix +
                                                                    d.substring(
                                                                        3
                                                                    ));
                                                        else
                                                            d = s.PrivateKey.fromHex(
                                                                b
                                                            )
                                                                .toPublicKey()
                                                                .toPublicKeyString();
                                                        this.state.imported_keys_public[
                                                            d
                                                        ] = !0;
                                                        var v = (
                                                                this.state
                                                                    .keys_to_account[
                                                                    b
                                                                ] || {
                                                                    account_names: []
                                                                }
                                                            ).account_names,
                                                            g = !1,
                                                            k = !0,
                                                            E = !1,
                                                            w = void 0;
                                                        try {
                                                            for (
                                                                var O,
                                                                    S = v[
                                                                        Symbol
                                                                            .iterator
                                                                    ]();
                                                                !(k = (O = S.next())
                                                                    .done);
                                                                k = !0
                                                            ) {
                                                                O.value == m &&
                                                                    (g = !0);
                                                            }
                                                        } catch (e) {
                                                            (E = !0), (w = e);
                                                        } finally {
                                                            try {
                                                                !k &&
                                                                    S.return &&
                                                                    S.return();
                                                            } finally {
                                                                if (E) throw w;
                                                            }
                                                        }
                                                        if (g) continue;
                                                        v.push(m),
                                                            (this.state.keys_to_account[
                                                                b
                                                            ] = {
                                                                account_names: v,
                                                                public_key_string: d
                                                            });
                                                    } catch (e) {
                                                        console.log(e, e.stack);
                                                        var C = e.message || e;
                                                        l.a.error(
                                                            "Account " +
                                                                m +
                                                                " had a private key import error: " +
                                                                C
                                                        );
                                                    }
                                                }
                                            else {
                                                var j =
                                                    "Account " +
                                                    f.account_name +
                                                    " missing encrypted_private_keys";
                                                console.error(j),
                                                    a &&
                                                        (l.a.error(j),
                                                        (a = !1));
                                            }
                                        }
                                    } catch (e) {
                                        (o = !0), (i = e);
                                    } finally {
                                        try {
                                            !r && p.return && p.return();
                                        } finally {
                                            if (o) throw i;
                                        }
                                    }
                                    this.setState(
                                        {
                                            import_file_message: null,
                                            import_password_message: null,
                                            password_checksum: null
                                        },
                                        function() {
                                            return t.updateOnChange();
                                        }
                                    );
                                }
                            },
                            {
                                key: "_saveImport",
                                value: function(e) {
                                    var t = this;
                                    e.preventDefault();
                                    var n = p.a.getState().keys,
                                        a = {};
                                    for (var r in this.state
                                        .imported_keys_public)
                                        n.has(r) &&
                                            (delete this.state
                                                .imported_keys_public[r],
                                            (a[r] = !0));
                                    if (
                                        0 !==
                                        Object.keys(
                                            this.state.imported_keys_public
                                        ).length
                                    ) {
                                        var o = this.state.keys_to_account,
                                            i = !0,
                                            c = !1,
                                            s = void 0;
                                        try {
                                            for (
                                                var u,
                                                    m = Object.keys(o)[
                                                        Symbol.iterator
                                                    ]();
                                                !(i = (u = m.next()).done);
                                                i = !0
                                            ) {
                                                var y = u.value,
                                                    h = o[y];
                                                h.account_names;
                                                a[h.public_key_string] &&
                                                    delete o[y];
                                            }
                                        } catch (e) {
                                            (c = !0), (s = e);
                                        } finally {
                                            try {
                                                !i && m.return && m.return();
                                            } finally {
                                                if (c) throw s;
                                            }
                                        }
                                        f.a
                                            .unlock()
                                            .then(function() {
                                                N.importing(!0),
                                                    setTimeout(function() {
                                                        return t.saveImport();
                                                    }, 200);
                                            })
                                            .catch(function() {});
                                    } else
                                        l.a.error(
                                            "This wallet has already been imported"
                                        );
                                }
                            },
                            {
                                key: "saveImport",
                                value: function() {
                                    var e = this,
                                        t = this.state.keys_to_account,
                                        n = [],
                                        a = !0,
                                        r = !1,
                                        o = void 0;
                                    try {
                                        for (
                                            var i,
                                                c = Object.keys(t)[
                                                    Symbol.iterator
                                                ]();
                                            !(a = (i = c.next()).done);
                                            a = !0
                                        ) {
                                            var s = i.value,
                                                u = t[s],
                                                p = u.account_names,
                                                f = u.public_key_string;
                                            n.push({
                                                private_plainhex: s,
                                                import_account_names: p,
                                                public_key_string: f
                                            });
                                        }
                                    } catch (e) {
                                        (r = !0), (o = e);
                                    } finally {
                                        try {
                                            !a && c.return && c.return();
                                        } finally {
                                            if (r) throw o;
                                        }
                                    }
                                    this.reset(),
                                        C.a
                                            .importKeysWorker(n)
                                            .then(function(t) {
                                                N.importing(!1);
                                                var a = n.length;
                                                l.a.success(
                                                    b.a.translate(
                                                        "wallet.import_key_success",
                                                        {count: a}
                                                    )
                                                ),
                                                    e.setState({
                                                        importSuccess: !0
                                                    });
                                            })
                                            .catch(function(e) {
                                                console.log("error:", e),
                                                    N.importing(!1);
                                                var t = e;
                                                try {
                                                    t = e.target.error.message;
                                                } catch (e) {}
                                                l.a.error(
                                                    "Key import error: " + t
                                                );
                                            });
                                }
                            },
                            {
                                key: "addByPattern",
                                value: function(e) {
                                    var t = this;
                                    if (!e) return !1;
                                    var n = 0,
                                        a = 0,
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (
                                            var c,
                                                l = (e.match(
                                                    /5[HJK][1-9A-Za-z]{49}/g
                                                ) || [])[Symbol.iterator]();
                                            !(r = (c = l.next()).done);
                                            r = !0
                                        ) {
                                            var u = c.value;
                                            try {
                                                var p = s.PrivateKey.fromWif(u),
                                                    f = p
                                                        .toBuffer()
                                                        .toString("hex"),
                                                    m = p
                                                        .toPublicKey()
                                                        .toPublicKeyString();
                                                (this.state.imported_keys_public[
                                                    m
                                                ] = !0),
                                                    (this.state.keys_to_account[
                                                        f
                                                    ] = {
                                                        account_names: [],
                                                        public_key_string: m
                                                    }),
                                                    n++;
                                            } catch (e) {
                                                a++;
                                            }
                                        }
                                    } catch (e) {
                                        (o = !0), (i = e);
                                    } finally {
                                        try {
                                            !r && l.return && l.return();
                                        } finally {
                                            if (o) throw i;
                                        }
                                    }
                                    return (
                                        this.setState(
                                            {
                                                key_text_message:
                                                    "Found " +
                                                    (n ? n + " valid" : "") +
                                                    (a
                                                        ? " and " +
                                                          a +
                                                          " invalid"
                                                        : "") +
                                                    " key" +
                                                    (n > 1 || a > 1
                                                        ? "s"
                                                        : "") +
                                                    "."
                                            },
                                            function() {
                                                return t.updateOnChange();
                                            }
                                        ),
                                        (this.state.key_text_message = null),
                                        n
                                    );
                                }
                            },
                            {
                                key: "_renderBalanceClaims",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(v.a, null),
                                        r.a.createElement(
                                            "div",
                                            {style: {paddingTop: 15}},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "button success",
                                                    onClick: this.onCancel.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(_.a, {
                                                    content: "wallet.done"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props.privateKey,
                                        n = this.state.keys_to_account,
                                        a = Object.keys(n).length,
                                        o = this.getImportAccountKeyCount(n);
                                    if (!C.a.getWallet())
                                        return r.a.createElement(m.b, {
                                            importKeys: !0,
                                            hideTitle: !0
                                        });
                                    if (this.props.importing)
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {className: "center-content"},
                                                r.a.createElement(y.a, {
                                                    type: "circle"
                                                })
                                            )
                                        );
                                    var i = this.state.genesis_filtering,
                                        l = (!!this.state.genesis_filter_status
                                            .length &&
                                            this.state.genesis_filter_finished,
                                        null);
                                    if (
                                        this.state.genesis_filter_status.length
                                    ) {
                                        l = [];
                                        var s = !0,
                                            u = !1,
                                            p = void 0;
                                        try {
                                            for (
                                                var f,
                                                    h = this.state.genesis_filter_status[
                                                        Symbol.iterator
                                                    ]();
                                                !(s = (f = h.next()).done);
                                                s = !0
                                            ) {
                                                var d = f.value;
                                                d.count &&
                                                    d.total &&
                                                    l.push(
                                                        r.a.createElement(
                                                            "tr",
                                                            {
                                                                key:
                                                                    d.account_name
                                                            },
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                d.account_name
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                i
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          "Filtering",
                                                                          " ",
                                                                          Math.round(
                                                                              (d.count /
                                                                                  d.total) *
                                                                                  100
                                                                          ),
                                                                          " ",
                                                                          "%",
                                                                          " "
                                                                      )
                                                                    : r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          d.count
                                                                      )
                                                            )
                                                        )
                                                    );
                                            }
                                        } catch (e) {
                                            (u = !0), (p = e);
                                        } finally {
                                            try {
                                                !s && h.return && h.return();
                                            } finally {
                                                if (u) throw p;
                                            }
                                        }
                                    }
                                    var v = 0 !== a,
                                        g = b.a.translate(
                                            "wallet.import_password"
                                        );
                                    if ((v && (g = ""), !l && o))
                                        for (var k in ((l = []), o))
                                            l.push(
                                                r.a.createElement(
                                                    "tr",
                                                    {key: k},
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        k
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        o[k]
                                                    )
                                                )
                                            );
                                    var E = r.a.createElement(
                                            "div",
                                            {
                                                className: "button success",
                                                onClick: this.onCancel.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(_.a, {
                                                content: "wallet.cancel"
                                            })
                                        ),
                                        w = 1;
                                    return this.state.importSuccess
                                        ? this._renderBalanceClaims()
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  "div",
                                                  {style: {padding: "10px 0"}},
                                                  r.a.createElement(
                                                      "span",
                                                      null,
                                                      this.state
                                                          .key_text_message
                                                          ? this.state
                                                                .key_text_message
                                                          : r.a.createElement(
                                                                I,
                                                                {key_count: a}
                                                            )
                                                  ),
                                                  v
                                                      ? r.a.createElement(
                                                            "span",
                                                            null,
                                                            " ",
                                                            "(",
                                                            r.a.createElement(
                                                                "a",
                                                                {
                                                                    onClick: this.reset.bind(
                                                                        this
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    _.a,
                                                                    {
                                                                        content:
                                                                            "wallet.reset"
                                                                    }
                                                                )
                                                            ),
                                                            ")"
                                                        )
                                                      : null
                                              ),
                                              l
                                                  ? r.a.createElement(
                                                        "div",
                                                        null,
                                                        l.length
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "table",
                                                                      {
                                                                          className:
                                                                              "table"
                                                                      },
                                                                      r.a.createElement(
                                                                          "thead",
                                                                          null,
                                                                          r.a.createElement(
                                                                              "tr",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  "th",
                                                                                  null,
                                                                                  r.a.createElement(
                                                                                      _.a,
                                                                                      {
                                                                                          content:
                                                                                              "explorer.account.title"
                                                                                      }
                                                                                  )
                                                                              ),
                                                                              r.a.createElement(
                                                                                  "th",
                                                                                  null,
                                                                                  r.a.createElement(
                                                                                      _.a,
                                                                                      {
                                                                                          content:
                                                                                              "settings.restore_key_count"
                                                                                      }
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "tbody",
                                                                          null,
                                                                          l
                                                                      )
                                                                  ),
                                                                  r.a.createElement(
                                                                      "br",
                                                                      null
                                                                  )
                                                              )
                                                            : b.a.translate(
                                                                  "wallet.no_accounts"
                                                              )
                                                    )
                                                  : null,
                                              r.a.createElement("br", null),
                                              v ||
                                              this.state
                                                  .genesis_filter_initalizing
                                                  ? null
                                                  : r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            r.a.createElement(
                                                                "div",
                                                                null,
                                                                t
                                                                    ? r.a.createElement(
                                                                          "form",
                                                                          {
                                                                              onSubmit: this.onWif.bind(
                                                                                  this
                                                                              )
                                                                          },
                                                                          r.a.createElement(
                                                                              _.a,
                                                                              {
                                                                                  component:
                                                                                      "label",
                                                                                  content:
                                                                                      "wallet.paste_private"
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  ref:
                                                                                      "wifInput",
                                                                                  type:
                                                                                      "password",
                                                                                  id:
                                                                                      "wif",
                                                                                  tabIndex: w++
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "button",
                                                                              {
                                                                                  className:
                                                                                      "button",
                                                                                  type:
                                                                                      "submit"
                                                                              },
                                                                              r.a.createElement(
                                                                                  _.a,
                                                                                  {
                                                                                      content:
                                                                                          "wallet.submit"
                                                                                  }
                                                                              )
                                                                          ),
                                                                          E
                                                                      )
                                                                    : r.a.createElement(
                                                                          "form",
                                                                          {
                                                                              onSubmit: this._passwordCheck.bind(
                                                                                  this
                                                                              )
                                                                          },
                                                                          r.a.createElement(
                                                                              "label",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  _.a,
                                                                                  {
                                                                                      content:
                                                                                          "wallet.bts_09_export"
                                                                                  }
                                                                              ),
                                                                              this
                                                                                  .state
                                                                                  .no_file
                                                                                  ? null
                                                                                  : r.a.createElement(
                                                                                        "span",
                                                                                        null,
                                                                                        "  (",
                                                                                        r.a.createElement(
                                                                                            "a",
                                                                                            {
                                                                                                onClick: this.reset.bind(
                                                                                                    this
                                                                                                )
                                                                                            },
                                                                                            "Reset"
                                                                                        ),
                                                                                        ")"
                                                                                    )
                                                                          ),
                                                                          r.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  type:
                                                                                      "file",
                                                                                  id:
                                                                                      "file_input",
                                                                                  accept:
                                                                                      ".json",
                                                                                  style: {
                                                                                      border:
                                                                                          "solid",
                                                                                      marginBottom: 15
                                                                                  },
                                                                                  key: this
                                                                                      .state
                                                                                      .reset_file_name,
                                                                                  onChange: this.upload.bind(
                                                                                      this
                                                                                  )
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "div",
                                                                              null,
                                                                              this
                                                                                  .state
                                                                                  .import_file_message
                                                                          ),
                                                                          this
                                                                              .state
                                                                              .no_file
                                                                              ? null
                                                                              : r.a.createElement(
                                                                                    "div",
                                                                                    null,
                                                                                    r.a.createElement(
                                                                                        "input",
                                                                                        {
                                                                                            type:
                                                                                                "password",
                                                                                            ref:
                                                                                                "password",
                                                                                            key: this
                                                                                                .state
                                                                                                .reset_password,
                                                                                            placeholder: g,
                                                                                            onChange: function() {
                                                                                                e
                                                                                                    .state
                                                                                                    .import_password_message &&
                                                                                                    e
                                                                                                        .state
                                                                                                        .import_password_message
                                                                                                        .length &&
                                                                                                    e.setState(
                                                                                                        {
                                                                                                            import_password_message: null
                                                                                                        }
                                                                                                    );
                                                                                            }
                                                                                        }
                                                                                    ),
                                                                                    r.a.createElement(
                                                                                        "p",
                                                                                        {
                                                                                            className:
                                                                                                "facolor-error"
                                                                                        },
                                                                                        this
                                                                                            .state
                                                                                            .import_password_message
                                                                                    )
                                                                                ),
                                                                          r.a.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "button-group"
                                                                              },
                                                                              r.a.createElement(
                                                                                  "button",
                                                                                  {
                                                                                      className: c()(
                                                                                          "button",
                                                                                          {
                                                                                              disabled: !!this
                                                                                                  .state
                                                                                                  .no_file
                                                                                          }
                                                                                      ),
                                                                                      type:
                                                                                          "submit"
                                                                                  },
                                                                                  r.a.createElement(
                                                                                      _.a,
                                                                                      {
                                                                                          content:
                                                                                              "wallet.submit"
                                                                                      }
                                                                                  )
                                                                              ),
                                                                              E
                                                                          )
                                                                      )
                                                            ),
                                                            r.a.createElement(
                                                                "br",
                                                                null
                                                            ),
                                                            r.a.createElement(
                                                                "br",
                                                                null
                                                            )
                                                        )
                                                    ),
                                              this.state
                                                  .genesis_filter_initalizing
                                                  ? r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "center-content"
                                                            },
                                                            r.a.createElement(
                                                                y.a,
                                                                {type: "circle"}
                                                            )
                                                        )
                                                    )
                                                  : null,
                                              v
                                                  ? r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "button-group"
                                                                },
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className: c()(
                                                                            "button success",
                                                                            {
                                                                                disabled: !v
                                                                            }
                                                                        ),
                                                                        onClick: this._saveImport.bind(
                                                                            this
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        _.a,
                                                                        {
                                                                            content:
                                                                                "wallet.import_keys"
                                                                        }
                                                                    )
                                                                ),
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "button secondary",
                                                                        onClick: this.reset.bind(
                                                                            this
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        _.a,
                                                                        {
                                                                            content:
                                                                                "wallet.cancel"
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "h4",
                                                            null,
                                                            r.a.createElement(
                                                                _.a,
                                                                {
                                                                    content:
                                                                        "wallet.unclaimed"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(_.a, {
                                                            component: "p",
                                                            content:
                                                                "wallet.claim_later"
                                                        }),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block"
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content no-overflow"
                                                                },
                                                                r.a.createElement(
                                                                    _.a,
                                                                    {
                                                                        component:
                                                                            "label",
                                                                        content:
                                                                            "wallet.totals"
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    S,
                                                                    null
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        )
                                                    )
                                                  : null
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (K.defaultProps = {privateKey: !0}),
                (K = Object(o.connect)(K, {
                    listenTo: function() {
                        return [N];
                    },
                    getProps: function() {
                        return {importing: N.getState().importing};
                    }
                }));
            t.a = K;
        },
        2057: function(t, n, a) {
            "use strict";
            (function(t) {
                var r = a(10),
                    o = (function() {
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
                var i = void 0;
                try {
                    var c = a(2058);
                    if (-1 === c.indexOf("3cee441"))
                        throw new Error(
                            "Incorrect hash: bts_genesiskeys_bloom.dat"
                        );
                    i = c;
                } catch (e) {
                    console.log(
                        "WARN: Will be unable to filter BTS 1.0 wallet imports, did not find assets/bts_genesiskeys_bloom.dat",
                        e
                    );
                }
                var l = (function() {
                    function n(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, n),
                            e &&
                                ((this.bloom_buffer = e),
                                (this.bits_in_filter = 8 * e.length));
                    }
                    return (
                        o(n, [
                            {
                                key: "isAvailable",
                                value: function() {
                                    return void 0 !== i;
                                }
                            },
                            {
                                key: "init",
                                value: function(n) {
                                    var a = this;
                                    if (this.bloom_buffer) n();
                                    else {
                                        if (!this.isAvailable())
                                            throw new Error(
                                                "Genesis bloom file was not deployed"
                                            );
                                        var r = new XMLHttpRequest();
                                        (r.responseType = "blob"),
                                            (r.onload = function() {
                                                if (404 !== r.status) {
                                                    var e = new FileReader();
                                                    (e.onload = function(e) {
                                                        var r = new t(
                                                            e.target.result,
                                                            "binary"
                                                        );
                                                        if (
                                                            1048576 !== r.length
                                                        )
                                                            throw new Error(
                                                                "Wrong length"
                                                            );
                                                        (a.bits_in_filter =
                                                            8 * r.length),
                                                            (a.bloom_buffer = r),
                                                            n();
                                                    }),
                                                        e.readAsBinaryString(
                                                            r.response
                                                        );
                                                }
                                            }),
                                            (r.onerror = function() {
                                                console.error("xhr.onerror", e);
                                            }),
                                            r.open("GET", i),
                                            r.send();
                                    }
                                }
                            },
                            {
                                key: "inGenesis",
                                value: function(e) {
                                    if (!this.bloom_buffer)
                                        throw new Error("Call init() first");
                                    for (var t = 0; t < 3; t++) {
                                        var n = r.hash.sha256(t + ":" + e),
                                            a =
                                                parseInt(
                                                    n.slice(-3).toString("hex"),
                                                    16
                                                ) % this.bits_in_filter,
                                            o = a >> 3,
                                            i = 1 << (7 & a);
                                        if (0 == (this.bloom_buffer[o] & i))
                                            return !1;
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "filter",
                                value: function(e, t) {
                                    var n = this;
                                    if (!this.isAvailable())
                                        return (
                                            console.log(
                                                "WARN: Missing bloom filter for BTS 0.9.x wallets"
                                            ),
                                            void t({error: "missing_bloom"})
                                        );
                                    var a = !0;
                                    t({initalizing: a}),
                                        this.init(function() {
                                            try {
                                                t({initalizing: (a = !1)});
                                                for (
                                                    var o = 1, i = 0;
                                                    i < e.length;
                                                    i++
                                                ) {
                                                    var c = 0,
                                                        l = 0,
                                                        s = e[i],
                                                        u =
                                                            s
                                                                .encrypted_private_keys
                                                                .length;
                                                    t({
                                                        importing: !0,
                                                        account_name:
                                                            s.account_name,
                                                        count: l,
                                                        total: u
                                                    });
                                                    for (
                                                        var p =
                                                            s
                                                                .encrypted_private_keys
                                                                .length - 1;
                                                        p >= 0;
                                                        p--
                                                    ) {
                                                        if (
                                                            (++l % o == 0 &&
                                                                ((o = 47),
                                                                t({
                                                                    importing: !0,
                                                                    account_name:
                                                                        s.account_name,
                                                                    count: l,
                                                                    total: u
                                                                })),
                                                            !s.public_keys)
                                                        )
                                                            return void t({
                                                                error:
                                                                    "missing_public_keys"
                                                            });
                                                        var f =
                                                            s.public_keys[p];
                                                        if (
                                                            (/^GPH/.test(f) &&
                                                                (f =
                                                                    "BTS" +
                                                                    f.substring(
                                                                        3
                                                                    )),
                                                            !n.inGenesis(f))
                                                        ) {
                                                            for (
                                                                var m = r.key.addresses(
                                                                        f,
                                                                        "BTS"
                                                                    ),
                                                                    y = !1,
                                                                    h = 0;
                                                                h < m.length;
                                                                h++
                                                            )
                                                                if (
                                                                    n.inGenesis(
                                                                        m[h]
                                                                    )
                                                                ) {
                                                                    y = !0;
                                                                    break;
                                                                }
                                                            y ||
                                                                (delete s
                                                                    .encrypted_private_keys[
                                                                    p
                                                                ],
                                                                delete s
                                                                    .public_keys[
                                                                    p
                                                                ],
                                                                c++);
                                                        }
                                                    }
                                                    var _ = [],
                                                        d = [];
                                                    for (
                                                        p =
                                                            s
                                                                .encrypted_private_keys
                                                                .length - 1;
                                                        p >= 0;
                                                        p--
                                                    )
                                                        s
                                                            .encrypted_private_keys[
                                                            p
                                                        ] &&
                                                            (_.push(
                                                                s
                                                                    .encrypted_private_keys[
                                                                    p
                                                                ]
                                                            ),
                                                            d.push(
                                                                s.public_keys[p]
                                                            ));
                                                    (s.encrypted_private_keys = _),
                                                        t({
                                                            importing: !1,
                                                            account_name:
                                                                s.account_name,
                                                            count: l - c,
                                                            total: u
                                                        }),
                                                        (s.public_keys = d);
                                                }
                                                t({success: !0});
                                            } finally {
                                                a && t({initalizing: (a = !1)});
                                            }
                                        });
                                }
                            }
                        ]),
                        n
                    );
                })();
                n.a = l;
            }.call(this, a(129).Buffer));
        },
        2058: function(e, t, n) {
            e.exports = n.p + "bts_genesiskeys_bloom_3cee441.dat";
        },
        2059: function(e, t, n) {},
        2061: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(2063),
                i = n(31),
                c = n(83),
                l = n(1794),
                s = n(3),
                u = n.n(s),
                p = n(2078),
                f = n(2064),
                m = n(521),
                y = n(11),
                h = n.n(y),
                _ = n(7),
                d = n.n(_),
                b = n(22),
                v = (function() {
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
            var g = (function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                    }
                    return (
                        v(e, [
                            {
                                key: "setBrainkey",
                                value: function(e) {
                                    return e;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                k = b.a.createActions(g),
                E = n(10),
                w = n(89),
                O = (function() {
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
            var C = (function() {
                function e() {
                    S(this, e);
                }
                return (
                    O(e, null, [
                        {
                            key: "getInstance",
                            value: function(t) {
                                var n = e.instances.get(t);
                                n ||
                                    ((n = b.a.createStore(P, "BrainkeyStore")),
                                    e.instances.set(t, n));
                                var a = t + " subscribed_instance";
                                if (!e.instances.get(a)) {
                                    var r = n.chainStoreUpdate.bind(n);
                                    E.ChainStore.subscribe(r),
                                        e.instances.set(a, r);
                                }
                                return n;
                            }
                        },
                        {
                            key: "closeInstance",
                            value: function(t) {
                                var n = e.instances.get(t);
                                if (!n)
                                    throw new Error("unknown instance " + t);
                                var a = t + " subscribed_instance",
                                    r = e.instances.get(a);
                                e.instances.delete(a),
                                    E.ChainStore.unsubscribe(r),
                                    n.clearCache();
                            }
                        }
                    ]),
                    e
                );
            })();
            C.instances = new Map();
            var j = C,
                P = (function(e) {
                    function t() {
                        S(this, t);
                        var e = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            e.clearCache(),
                            e.bindListeners({onSetBrainkey: k.setBrainkey}),
                            e._export(
                                "inSync",
                                "chainStoreUpdate",
                                "clearCache"
                            ),
                            e
                        );
                    }
                    return (
                        (function(e, t) {
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
                        })(t, w["a"]),
                        O(t, [
                            {
                                key: "clearCache",
                                value: function() {
                                    (this.state = {
                                        brnkey: "",
                                        account_ids: h.a.Set()
                                    }),
                                        (this.derived_keys = new Array()),
                                        (this.account_ids_by_key = null);
                                }
                            },
                            {
                                key: "onSetBrainkey",
                                value: function(e) {
                                    this.clearCache(),
                                        this.setState({brnkey: e}),
                                        this.deriveKeys(e),
                                        this.chainStoreUpdate();
                                }
                            },
                            {
                                key: "inSync",
                                value: function() {
                                    return (
                                        this.derived_keys.forEach(function(e) {
                                            if (x(e)) return !1;
                                        }),
                                        !0
                                    );
                                }
                            },
                            {
                                key: "chainStoreUpdate",
                                value: function() {
                                    this.derived_keys.length &&
                                        this.account_ids_by_key !==
                                            E.ChainStore.account_ids_by_key &&
                                        ((this.account_ids_by_key =
                                            E.ChainStore.account_ids_by_key),
                                        this.updateAccountIds());
                                }
                            },
                            {
                                key: "deriveKeys",
                                value: function() {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : this.state.brnkey,
                                        t = this.derived_keys.length,
                                        n = (function(e) {
                                            var t = e
                                                .toPublicKey()
                                                .toPublicKeyString();
                                            return {
                                                private_key: e,
                                                public_string: t
                                            };
                                        })(E.key.get_brainPrivateKey(e, t));
                                    this.derived_keys.push(n),
                                        this.derived_keys.length < 10 &&
                                            this.deriveKeys(e);
                                }
                            },
                            {
                                key: "updateAccountIds",
                                value: function() {
                                    var e = this,
                                        t = h.a
                                            .Set()
                                            .withMutations(function(t) {
                                                e.derived_keys.forEach(function(
                                                    e
                                                ) {
                                                    return (function(e) {
                                                        var n = E.ChainStore.getAccountRefsOfKey(
                                                            e
                                                        );
                                                        n &&
                                                            n.forEach(function(
                                                                e
                                                            ) {
                                                                t.add(e);
                                                            });
                                                    })(e.public_string);
                                                });
                                            });
                                    t.equals(this.state.account_ids) ||
                                        ((this.state.account_ids = t),
                                        this.setState({account_ids: t}));
                                }
                            }
                        ]),
                        t
                    );
                })();
            var x = function(e) {
                    return (
                        void 0 ===
                        E.ChainStore.getAccountRefsOfKey(e.public_string)
                    );
                },
                A = n(67),
                N = n(45),
                T = n(681),
                B = n(1732),
                I = n(508),
                K = n(30),
                R = n(2077),
                z = (function() {
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
            var W = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
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
                    })(t, r.a.Component),
                    z(t, [
                        {
                            key: "onCardClick",
                            value: function(e) {
                                e.preventDefault();
                                var t = this.props.account.get("name");
                                this.props.history.push("/account/" + t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = null,
                                    t = null,
                                    n = !1;
                                if (this.props.account) {
                                    e = this.props.account.get("name");
                                    var a = this.props.account.get("balances");
                                    a &&
                                        (t = a
                                            .map(function(e) {
                                                return E.ChainStore.getObject(
                                                    e
                                                ).get("balance")
                                                    ? r.a.createElement(
                                                          "li",
                                                          {key: e},
                                                          r.a.createElement(
                                                              B.a,
                                                              {balance: e}
                                                          )
                                                      )
                                                    : null;
                                            })
                                            .toArray()),
                                        (n = K.a.isMyAccount(
                                            this.props.account
                                        ));
                                }
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "grid-content account-card",
                                        onClick: this.onCardClick.bind(this)
                                    },
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "card" +
                                                (n ? " my-account" : "")
                                        },
                                        r.a.createElement(
                                            "h4",
                                            {className: "text-center"},
                                            e
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "card-content clearfix"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "float-left"},
                                                r.a.createElement(I.a, {
                                                    account: e,
                                                    size: {
                                                        height: 64,
                                                        width: 64
                                                    }
                                                })
                                            ),
                                            r.a.createElement(
                                                "ul",
                                                {className: "balances"},
                                                t
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
            (W.propTypes = {account: N.a.ChainAccount.isRequired}),
                (W = Object(A.a)(W));
            var M = Object(R.a)(W),
                D = (function() {
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
            function q(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function L(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function U(e, t) {
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
            var G = {
                    listenTo: function() {
                        return [j.getInstance("wmc")];
                    },
                    getProps: function() {
                        return j.getInstance("wmc").getState();
                    }
                },
                J = (function(e) {
                    function t() {
                        return (
                            q(this, t),
                            L(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        U(t, a["Component"]),
                        D(t, [
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    j.closeInstance("wmc");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(
                                            "h3",
                                            null,
                                            r.a.createElement(u.a, {
                                                content: "wallet.brainkey"
                                            })
                                        ),
                                        r.a.createElement(
                                            Y,
                                            null,
                                            r.a.createElement(H, null)
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                F = (J = Object(i.connect)(J, G)),
                H = (function(e) {
                    function t() {
                        return (
                            q(this, t),
                            L(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        U(t, a["Component"]),
                        D(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.brnkey.substring(0, 10);
                                    return r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "span",
                                                {className: ""},
                                                e
                                            ),
                                            "…"
                                        ),
                                        r.a.createElement("p", null),
                                        this.props.account_ids.size
                                            ? r.a.createElement(X, {
                                                  accounts: h.a.List(
                                                      this.props.account_ids.toArray()
                                                  )
                                              })
                                            : r.a.createElement(
                                                  "h5",
                                                  null,
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.no_accounts"
                                                  })
                                              )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            H = Object(i.connect)(H, G);
            var X = (function(e) {
                function t() {
                    return (
                        q(this, t),
                        L(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    U(t, r.a.Component),
                    D(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = Object(m.a)(this.props.accounts)
                                    .filter(function(e) {
                                        return !!e[1];
                                    })
                                    .map(function(e) {
                                        return e[1].get("name");
                                    })
                                    .sort()
                                    .map(function(e) {
                                        return r.a.createElement(M, {
                                            key: e,
                                            account: e
                                        });
                                    });
                                return r.a.createElement("span", null, e);
                            }
                        }
                    ]),
                    t
                );
            })();
            (X.propTypes = {accounts: N.a.ChainAccountsList.isRequired}),
                (X = Object(A.a)(X));
            var Y = (function(e) {
                    function t() {
                        q(this, t);
                        var e = L(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {brnkey: "", accept: !1}), e;
                    }
                    return (
                        U(t, a["Component"]),
                        D(t, [
                            {
                                key: "render",
                                value: function() {
                                    if (this.state.accept)
                                        return r.a.createElement(
                                            "span",
                                            null,
                                            this.props.children
                                        );
                                    var e =
                                        this.state.brnkey &&
                                        "" !== this.state.brnkey;
                                    return r.a.createElement(
                                        "span",
                                        {className: "grid-container"},
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(T.a, {
                                                onChange: this.onBrainkeyChange.bind(
                                                    this
                                                )
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: d()(
                                                    "button success",
                                                    {disabled: !e}
                                                ),
                                                onClick: this.onAccept.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(u.a, {
                                                content: "wallet.accept"
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "onBrainkeyChange",
                                value: function(e) {
                                    this.setState({brnkey: e});
                                }
                            },
                            {
                                key: "onAccept",
                                value: function() {
                                    this.setState({accept: !0}),
                                        k.setBrainkey(this.state.brnkey);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Z = n(1811),
                Q = n(507),
                V = n(34);
            n.d(t, "ExistingAccountOptions", function() {
                return oe;
            });
            var $ = (function() {
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
            function ee(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function te(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function ne(e, t) {
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
            var ae = {
                    listenTo: function() {
                        return [c.a];
                    },
                    getProps: function() {
                        return {wallet: c.a.getState()};
                    }
                },
                re = (function(e) {
                    function t() {
                        return (
                            ee(this, t),
                            te(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        ne(t, a["Component"]),
                        $(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e =
                                        0 !=
                                        this.props.wallet.wallet_names.count();
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-container"},
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-content"},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block center-content"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "page-header"},
                                                    r.a.createElement(
                                                        "h1",
                                                        null,
                                                        r.a.createElement(u.a, {
                                                            content:
                                                                "account.welcome",
                                                            wallet_name: Object(
                                                                V.l
                                                            )()
                                                        })
                                                    ),
                                                    e
                                                        ? r.a.createElement(
                                                              "h3",
                                                              null,
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      content:
                                                                          "wallet.setup_wallet"
                                                                  }
                                                              )
                                                          )
                                                        : r.a.createElement(
                                                              "h3",
                                                              null,
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      content:
                                                                          "wallet.create_wallet_backup"
                                                                  }
                                                              )
                                                          )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "content-block"
                                                    },
                                                    r.a.createElement(
                                                        p.a,
                                                        null,
                                                        r.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account",
                                                            component: Q.b
                                                        }),
                                                        r.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/import-backup",
                                                            component: oe
                                                        }),
                                                        r.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/import-keys",
                                                            component: Z.a
                                                        }),
                                                        r.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/brainkey",
                                                            component: F
                                                        }),
                                                        r.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/balance-claim",
                                                            component: l.a
                                                        })
                                                    ),
                                                    this.props.children
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
            re = Object(i.connect)(re, ae);
            var oe = (function(e) {
                function t() {
                    return (
                        ee(this, t),
                        te(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, a["Component"]),
                    $(t, [
                        {
                            key: "render",
                            value: function() {
                                var e =
                                    0 != this.props.wallet.wallet_names.count();
                                return r.a.createElement(
                                    "span",
                                    null,
                                    e
                                        ? null
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  o.a,
                                                  {
                                                      to:
                                                          "existing-account/import-backup"
                                                  },
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.import_backup",
                                                      wallet_name: Object(V.l)()
                                                  })
                                              ),
                                              r.a.createElement("br", null),
                                              r.a.createElement("br", null),
                                              r.a.createElement(
                                                  o.a,
                                                  {
                                                      to:
                                                          "existing-account/import-keys"
                                                  },
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.import_bts1"
                                                  })
                                              ),
                                              r.a.createElement("br", null),
                                              r.a.createElement("br", null),
                                              r.a.createElement(
                                                  o.a,
                                                  {
                                                      to:
                                                          "existing-account/import-keys"
                                                  },
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.create_wallet"
                                                  })
                                              ),
                                              r.a.createElement("br", null),
                                              r.a.createElement("hr", null)
                                          ),
                                    e ? r.a.createElement(l.a, null) : null,
                                    e
                                        ? r.a.createElement(
                                              "span",
                                              null,
                                              r.a.createElement(
                                                  o.a,
                                                  {to: "dashboard"},
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "button outline"
                                                      },
                                                      r.a.createElement(u.a, {
                                                          component: "span",
                                                          content:
                                                              "header.dashboard"
                                                      })
                                                  )
                                              ),
                                              r.a.createElement(
                                                  o.a,
                                                  {to: "wallet"},
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "button outline"
                                                      },
                                                      r.a.createElement(u.a, {
                                                          content:
                                                              "settings.wallets"
                                                      })
                                                  )
                                              )
                                          )
                                        : null
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            oe = Object(i.connect)(oe, ae);
            t.default = re;
        }
    }
]);
//# sourceMappingURL=existing-account.js.map
