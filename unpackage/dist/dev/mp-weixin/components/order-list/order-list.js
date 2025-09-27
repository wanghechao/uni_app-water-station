"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "order-list",
  props: ["store-name"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: _ctx.storeName,
          isFull: true,
          extra: "下单时间:2025-03-22"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-430377c5"], ["__file", "D:/MyUniapp/uni-project/components/order-list/order-list.vue"]]);
wx.createComponent(Component);
