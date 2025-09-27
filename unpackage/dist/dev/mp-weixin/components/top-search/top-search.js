"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "top-search",
  setup(__props) {
    const store_name = common_vendor.ref("");
    common_vendor.index.$on("store_name", (mes) => {
      store_name.value = mes;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(store_name.value ? store_name.value : "选择地址"),
        b: common_vendor.p({
          type: "location"
        }),
        c: common_vendor.p({
          type: "forward"
        }),
        d: common_vendor.p({
          type: "search"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9c336843"], ["__file", "D:/MyUniapp/uni-project/components/top-search/top-search.vue"]]);
wx.createComponent(Component);
