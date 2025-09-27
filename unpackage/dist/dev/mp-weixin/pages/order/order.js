"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_order_list2 = common_vendor.resolveComponent("order-list");
  _easycom_order_list2();
}
const _easycom_order_list = () => "../../components/order-list/order-list.js";
if (!Math) {
  _easycom_order_list();
}
const _sfc_main = {
  __name: "order",
  setup(__props) {
    const top_nav = ["全部", "待支付", "待服务", "已完成", "已取消"];
    const active_tab = common_vendor.ref("全部");
    common_vendor.ref(0);
    const handle_tab_click = (e) => {
      const { on_change_value } = e.currentTarget.dataset;
      active_tab.value = top_nav[on_change_value];
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(top_nav, (item, idx, i0) => {
          return {
            a: common_vendor.t(item),
            b: idx,
            c: active_tab.value === item ? 1 : "",
            d: common_vendor.o(handle_tab_click, idx),
            e: idx
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93207a4f"], ["__file", "D:/MyUniapp/uni-project/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
