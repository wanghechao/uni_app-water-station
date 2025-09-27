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
  setup(__props) {
    common_vendor.index.$on("orderPayParams", (params) => {
      const { title, price, count, total_price } = params;
      const new_data = {
        status: "待付款",
        order_time: (/* @__PURE__ */ new Date()).toLocaleDateString(),
        goods_title: "桶装水",
        goods_price: "11",
        goods_count: "1",
        goods_total_price: "11"
      };
      new_data.goods_title = title;
      new_data.goods_price = price;
      new_data.goods_count = count;
      new_data.goods_total_price = total_price;
      order_data.unshift(new_data);
    });
    const order_data = common_vendor.reactive([{
      status: "待付款",
      order_time: "2024/5/4",
      goods_title: "桶装水",
      goods_price: "11",
      goods_count: "1",
      goods_total_price: "11"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(order_data, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.goods_title),
            b: common_vendor.t(item.goods_price),
            c: common_vendor.t(item.goods_count),
            d: common_vendor.t(item.goods_total_price),
            e: "430377c5-0-" + i0,
            f: common_vendor.p({
              title: item.status,
              isFull: true,
              extra: "下单时间:" + item.order_time
            })
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-430377c5"], ["__file", "D:/MyUniapp/uni-project/components/order-list/order-list.vue"]]);
wx.createComponent(Component);
