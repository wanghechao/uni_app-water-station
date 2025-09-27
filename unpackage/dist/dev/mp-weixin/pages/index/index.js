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
    const go_menu = (store_name) => {
      common_vendor.index.switchTab({
        url: "/pages/menu/menu"
      });
      common_vendor.index.$emit("store_name", store_name);
    };
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
        a: common_vendor.f(banner_list, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        b: common_vendor.o(chose_method),
        c: common_vendor.o(chose_method),
        d: common_vendor.f(store_list, (item, k0, i0) => {
          return {
            a: item.store_img_src,
            b: common_vendor.t(item.store_name),
            c: common_vendor.t(item.store_expense),
            d: common_vendor.t(item.store_introduce),
            e: common_vendor.o(($event) => go_menu(item.store_name)),
            f: "1cf27b2a-1-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/MyUniapp/uni-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
