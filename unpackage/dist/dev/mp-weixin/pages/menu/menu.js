"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_top_search2 = common_vendor.resolveComponent("top-search");
  const _easycom_menu_content2 = common_vendor.resolveComponent("menu-content");
  (_easycom_top_search2 + _easycom_menu_content2)();
}
const _easycom_top_search = () => "../../components/top-search/top-search.js";
const _easycom_menu_content = () => "../../components/menu-content/menu-content.js";
if (!Math) {
  (_easycom_top_search + _easycom_menu_content)();
}
const _sfc_main = {
  __name: "menu",
  setup(__props) {
    const has_store = common_vendor.ref(false);
    common_vendor.index.$on("store_name", (mes) => {
      has_store.value = true;
    });
    common_vendor.ref("");
    const go_find_store = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    common_vendor.onShow(() => {
      const method_vlaue = common_vendor.index.getStorageSync("deliver_method");
      active_method_btn.value = method_vlaue;
    });
    const active_method_btn = common_vendor.ref(0);
    const chose_btn = (e) => {
      const {
        method
      } = e.target.dataset;
      active_method_btn.value = method;
      common_vendor.index.setStorageSync("deliver_method", active_method_btn.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: active_method_btn.value == 0 ? 1 : "",
        b: active_method_btn.value == 1 ? 1 : "",
        c: common_vendor.o(chose_btn),
        d: has_store.value
      }, has_store.value ? {} : {
        e: common_vendor.o(go_find_store)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-388b40d3"], ["__file", "D:/MyUniapp/uni-project/pages/menu/menu.vue"]]);
wx.createPage(MiniProgramPage);
