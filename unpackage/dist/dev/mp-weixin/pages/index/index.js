"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_top_search2 = common_vendor.resolveComponent("top-search");
  const _easycom_store_list2 = common_vendor.resolveComponent("store-list");
  (_easycom_top_search2 + _easycom_store_list2)();
}
const _easycom_top_search = () => "../../components/top-search/top-search.js";
const _easycom_store_list = () => "../../components/store-list/store-list.js";
if (!Math) {
  (_easycom_top_search + _easycom_store_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const banner_list = ["../../static/首页banner.jpg", "../../static/首页banner2.png", "../../static/首页banner3.jpg"];
    const chose_method = (e) => {
      common_vendor.index.setStorageSync("deliver_method", e.currentTarget.dataset.deliverMethod);
      common_vendor.index.switchTab({
        url: "../menu/menu"
      });
    };
    const get_store_name = (store_name) => {
      common_vendor.index.switchTab({
        url: "/pages/menu/menu"
      });
      common_vendor.index.$emit("store_name", store_name);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(banner_list, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        b: common_vendor.o(chose_method),
        c: common_vendor.o(chose_method),
        d: common_vendor.o(get_store_name)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/MyUniapp/uni-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
