"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_number_box2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_number_box + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "menu-popup",
  props: ["show_popup_mes"],
  setup(__props, { expose: __expose }) {
    const { show_popup_mes } = __props;
    const goods_info_pop = common_vendor.ref(null);
    const popup_data = [
      {
        goods_img: "../../static/水店.jpg",
        goods_title: "怡宝桶装水",
        goods_small_title: "容量1L，环保pc材质"
      }
    ];
    const deliver_address = common_vendor.ref("");
    common_vendor.index.$on("sent_address", (data) => {
      deliver_address.value = data;
    });
    const popup_mes_fn = () => {
      goods_info_pop.value.open();
      const {
        img_src,
        title,
        price
      } = show_popup_mes;
      popup_data[0].goods_img = img_src;
      popup_data[0].goods_title = title;
      buy_water_price.value = price;
    };
    __expose({
      popup_mes_fn
    });
    const buy_water_price = common_vendor.ref(11);
    const buy_water_number = common_vendor.ref(1);
    const total_water_price = common_vendor.computed(() => buy_water_price.value * buy_water_number.value);
    const popup_deliver_index = common_vendor.ref(0);
    const popup_deliver_array = ["外送", "自提"];
    const time = /* @__PURE__ */ new Date();
    const get_now_time = () => {
      return time.getFullYear() + `-${time.getMonth() + 1}-` + time.getDate();
    };
    const today = get_now_time();
    const deliver_time = common_vendor.ref(get_now_time());
    const bindPickerChange = (e) => {
      popup_deliver_index.value = e.detail.value;
    };
    const bindPickerTime = (e) => {
      deliver_time.value = e.detail.value;
    };
    const phone_ref = common_vendor.ref("");
    const create_order = () => {
      if (deliver_address.value && phone_ref.value.length > 10) {
        common_vendor.index.navigateTo({
          url: "/pages/order_pay/order_pay",
          events: {
            // 调用被跳转的页面的函数（没啥用）
            // acceptData(res) {
            // 	console.log(res);
            // }
          },
          success(res) {
            res.eventChannel.emit("acceptData", {
              address: deliver_address.value,
              img: popup_data[0].goods_img,
              title: popup_data[0].goods_title,
              price: buy_water_price.value,
              count: buy_water_number.value
            });
          }
        });
        return;
      }
      common_vendor.index.showToast({
        title: "配送地址或电话有误",
        icon: "error"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(popup_data, (item, k0, i0) => {
          return {
            a: item.goods_img,
            b: common_vendor.t(item.goods_title),
            c: common_vendor.t(item.goods_small_title),
            d: "f0cbc991-1-" + i0 + ",f0cbc991-0",
            e: "f0cbc991-2-" + i0 + ",f0cbc991-0",
            f: "f0cbc991-3-" + i0 + ",f0cbc991-0",
            g: "f0cbc991-4-" + i0 + ",f0cbc991-0"
          };
        }),
        b: common_vendor.t(popup_deliver_array[popup_deliver_index.value]),
        c: common_vendor.p({
          type: "right"
        }),
        d: common_vendor.o(bindPickerChange),
        e: popup_deliver_index.value,
        f: popup_deliver_array,
        g: common_vendor.t(deliver_time.value),
        h: common_vendor.p({
          type: "right"
        }),
        i: common_vendor.o(bindPickerTime),
        j: deliver_time.value,
        k: common_vendor.unref(today),
        l: common_vendor.t(deliver_address.value ? deliver_address.value : "选择地址"),
        m: common_vendor.p({
          type: "right"
        }),
        n: phone_ref.value,
        o: common_vendor.o(($event) => phone_ref.value = $event.detail.value),
        p: common_vendor.o(($event) => buy_water_number.value = $event),
        q: common_vendor.p({
          min: 1,
          max: 9,
          modelValue: buy_water_number.value
        }),
        r: common_vendor.t(total_water_price.value),
        s: common_vendor.o(create_order),
        t: common_vendor.sr(goods_info_pop, "f0cbc991-0", {
          "k": "goods_info_pop"
        }),
        v: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f0cbc991"], ["__file", "D:/MyUniapp/uni-project/components/menu-popup/menu-popup.vue"]]);
wx.createComponent(Component);
