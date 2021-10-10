(() => {
  "use strict";
  var e, t;
  !(function (e) {
    (e.requestEthereumAccounts = "requestEthereumAccounts"),
      (e.hideRequestEthereumAccounts = "hideRequestEthereumAccounts");
  })(e || (e = {})),
    (function (e) {
      (e.requestEthereumAccountsCancel = "requestEthereumAccountsCancel"),
        (e.requestEthereumAccountsResponse = "requestEthereumAccountsResponse"),
        (e.parentDisconnected = "parentDisconnect");
    })(t || (t = {}));
  const n = (...e) => {};
  new (class {
    constructor() {
      (this.callbackMap = new Map()),
        (this.popupUIResponseMap = new Map()),
        (this._currPopupTab = null),
        (this._currPopupWin = null);
    }
    start() {
      "undefined" == typeof localStorage &&
        (chrome.runtime.onMessage.addListener((e, t, s) => {
          switch (e.type) {
            case "extensionUIRequest":
              if (
                (s(),
                void 0 === t.tab ||
                  void 0 === t.tab.id ||
                  void 0 === t.tab.url ||
                  void 0 === t.tab.title)
              )
                return n("Skipping message, sender tab not specified"), !1;
              let r = e.data.dappInfo.dappLogoURL,
                i = t.tab.favIconUrl;
              return this.handleExtensionUIRequestEvent(
                e,
                t.tab?.id,
                t.tab.title,
                r,
                i,
                t.tab.url,
                1 == e.data.hasMultipleProviders
              );
            case "extensionUIResponse":
              return s(), this.handlePopupResponseEvent(e);
            case "popupUIRequest":
              return s(this.popupUIResponseMap.get(e.data.id)), !0;
            default:
              return n("Unknown message " + e.type), s(), !1;
          }
        }),
        chrome.runtime.onConnect.addListener((e) => {
          n("connected ", e),
            "extensionUIRequest" === e.name && e.onMessage.addListener(n);
        }),
        chrome.runtime.onSuspend.addListener(() => {
          n("SUSPEND EVENT");
        }),
        chrome.runtime.onInstalled.addListener((e) => {
          if ((n("INSTALL EVENT"), "install" !== e.reason)) return;
          chrome.tabs.create({ url: chrome.runtime.getURL("home.html") });
        }),
        this.listenForWindowsClosingAndCancelEthereumRequest());
    }
    handlePopupResponseEvent(e) {
      if ((n(e), void 0 === e.data.id))
        return n("Undefined id in service worker response handler"), !1;
      const t = this.callbackMap.get(e.data.id);
      if (void 0 === t)
        return n("Couldn't find original tab to send response to"), !1;
      this.callbackMap.delete(e.data.id), chrome.tabs.sendMessage(t, e);
      let s = new Array();
      return (
        this.callbackMap.forEach((r, i, a) => {
          r === t &&
            (s.push(i),
            (e.data.id = i),
            n("Also sending event " + e + " to tab " + t),
            chrome.tabs.sendMessage(t, e));
        }),
        s.forEach((e) => {
          this.callbackMap.delete(e);
        }),
        !0
      );
    }
    handleExtensionUIRequestEvent(t, s, r, i, a, o, u) {
      if (!t.data.id)
        return n("Undefined id in service worker request handler"), !1;
      if (o.startsWith("chrome-extension://"))
        throw Error(
          "The service worker is handling an extension ui request from the extension itself, shouldn't happen"
        );
      let c = Array.from(this.callbackMap.values()).find((e) => e === s);
      if ((this.callbackMap.set(t.data.id, s), void 0 === t.data.action))
        return n("Undefined action in service worker script"), !1;
      if (void 0 !== c)
        return (
          n("skipping starting UI since tab already exists"),
          null != this._currPopupWin &&
            chrome.windows.update(this._currPopupWin, { focused: !0 }),
          null != this._currPopupTab &&
            chrome.tabs.update(this._currPopupTab, { highlighted: !0 }),
          !0
        );
      switch (t.data.action) {
        case e.requestEthereumAccounts:
          return (
            this.requestEthereumAccounts(
              s,
              t.data.id,
              t.data.childSession,
              r,
              i,
              a,
              o,
              u
            ),
            !0
          );
        default:
          return n(`Got unknown action type ${t.data.action}`), !1;
      }
    }
    requestEthereumAccounts(t, s, r, i, a, o, u, c) {
      chrome.windows.getCurrent((d) => {
        let p, h;
        if (
          void 0 !== d &&
          void 0 !== d.width &&
          void 0 !== d.left &&
          void 0 !== d.top
        ) {
          let e = c ? 0 : -296;
          (p = d.width + d.left + e), (h = d.top);
        } else (p = 0), (h = 0);
        const l = "fullscreen" === d.state;
        n("Checking if full screen " + l);
        const m = {
          type: "extensionUIRequest",
          data: {
            action: e.requestEthereumAccounts,
            id: s,
            childSession: r,
            dappInfo: {
              dappName: i,
              dappLogoURL: a,
              dappLogoURLAlt: o,
              dappURL: u,
            },
            originTab: t,
          },
        };
        if (null != this._currPopupTab || null != this._currPopupWin)
          return (
            chrome.runtime.sendMessage(m),
            null != this._currPopupWin &&
              chrome.windows.update(this._currPopupWin, { focused: !0 }),
            void (
              null != this._currPopupTab &&
              chrome.tabs.update(this._currPopupTab, { highlighted: !0 })
            )
          );
        this.popupUIResponseMap.set(s, m);
        const b = `index.html?inPageRequest=true&type=extensionUIRequest&action=${e.requestEthereumAccounts}&id=${s}`;
        if (l) {
          const e = b + "&fullScreen=true";
          chrome.tabs.create({ url: chrome.runtime.getURL(e) }, (e) => {
            void 0 !== e.id && (this._currPopupTab = e.id);
          });
        } else
          chrome.windows.create(
            {
              url: chrome.runtime.getURL(b),
              type: "popup",
              left: p,
              top: h,
              height: 550,
              width: 296,
            },
            (e) => {
              void 0 !== e?.id && (this._currPopupWin = e.id);
            }
          );
      });
    }
    listenForWindowsClosingAndCancelEthereumRequest() {
      chrome.tabs.onRemoved.addListener((e) => {
        e === this._currPopupTab &&
          ((this._currPopupTab = null),
          this.callbackMap.forEach((e, n, s) => {
            chrome.tabs.sendMessage(e, {
              type: "extensionUIResponse",
              data: { id: n, action: t.requestEthereumAccountsCancel },
            });
          }),
          this.callbackMap.clear());
      }),
        chrome.windows.onRemoved.addListener((e) => {
          e === this._currPopupWin &&
            ((this._currPopupWin = null),
            this.callbackMap.forEach((e, n, s) => {
              chrome.tabs.sendMessage(e, {
                type: "extensionUIResponse",
                data: { id: n, action: t.requestEthereumAccountsCancel },
              });
            }),
            this.callbackMap.clear());
        });
    }
  })().start();
})();
