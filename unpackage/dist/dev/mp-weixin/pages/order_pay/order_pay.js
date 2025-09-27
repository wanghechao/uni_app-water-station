"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  (_easycom_uni_section2 + _easycom_uni_data_checkbox2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_data_checkbox)();
}
const _sfc_main = {
  __name: "order_pay",
  setup(__props) {
    const order_data = common_vendor.reactive({
      address: "",
      count: "",
      img: "",
      price: "",
      title: "",
      store_name: ""
    });
    common_vendor.onMounted(() => {
      const instance = common_vendor.getCurrentInstance().proxy;
      const eventChannel = instance.getOpenerEventChannel();
      eventChannel.on("acceptData", function(data) {
        const { address, count, img, price, title } = data;
        order_data.address = address;
        order_data.count = count;
        order_data.img = img;
        order_data.price = price;
        order_data.title = title;
      });
    });
    const total_price = common_vendor.computed(() => order_data.price * order_data.count);
    const go_buy = () => {
      common_vendor.index.$emit("orderPayParams", {
        title: order_data.title,
        price: order_data.price,
        count: order_data.count,
        total_price: total_price.value
      });
      common_vendor.index.switchTab({
        url: "/pages/order/order"
      });
    };
    const radio = common_vendor.ref(0);
    const pay = [
      {
        text: "微信支付",
        value: 0
      },
      {
        text: "线下支付",
        value: 1
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(order_data.address),
        b: common_vendor.p({
          title: "收货地址",
          type: "line"
        }),
        c: common_vendor.p({
          title: "商品信息",
          type: "line"
        }),
        d: order_data.img,
        e: common_vendor.t(order_data.title),
        f: common_vendor.t(order_data.price),
        g: common_vendor.t(order_data.count),
        h: common_vendor.p({
          title: "支付方式",
          type: "line"
        }),
        i: common_vendor.o(($event) => radio.value = $event),
        j: common_vendor.p({
          mode: "list",
          icon: "right",
          localdata: pay,
          modelValue: radio.value
        }),
        k: common_vendor.t(total_price.value),
        l: common_vendor.o(go_buy)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b7482c6"], ["__file", "D:/MyUniapp/uni-project/pages/order_pay/order_pay.vue"]]);
wx.createPage(MiniProgramPage);
