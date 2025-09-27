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
  __name: "store-list",
  setup(__props) {
    const store_list = [
      {
        store_img_src: "../../static/水店.jpg",
        store_name: "农夫山泉水站",
        store_expense: "15",
        store_introduce: "农夫山泉股份有限公司是中国饮料20强之一,专注于研发、推广饮用天然水、果蔬汁饮料、特殊用途饮料和茶饮料等各类软饮料。"
      },
      {
        store_img_src: "../../static/水店2.jpeg",
        store_name: "百岁山水站",
        store_expense: "11",
        store_introduce: "农夫山泉股份有限公司是中国饮料20强之一,专注于研发、推广饮用天然水、果蔬汁饮料、特殊用途饮料和茶饮料等各类软饮料。"
      },
      {
        store_img_src: "../../static/水店3.jpg",
        store_name: "怡宝水站",
        store_expense: "8",
        store_introduce: "农夫山泉股份有限公司是中国饮料20强之一,专注于研发、推广饮用天然水、果蔬汁饮料、特殊用途饮料和茶饮料等各类软饮料。"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(store_list, (item, k0, i0) => {
          return {
            a: item.store_img_src,
            b: common_vendor.t(item.store_name),
            c: common_vendor.t(item.store_expense),
            d: common_vendor.t(item.store_introduce),
            e: "f9bfa3cf-0-" + i0,
            f: common_vendor.o(($event) => _ctx.$emit("store_click", item.store_name))
          };
        }),
        b: common_vendor.p({
          type: "right"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f9bfa3cf"], ["__file", "D:/MyUniapp/uni-project/components/store-list/store-list.vue"]]);
wx.createComponent(Component);
