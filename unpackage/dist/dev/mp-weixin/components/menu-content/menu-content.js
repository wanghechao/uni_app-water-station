"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_menu_popup2 = common_vendor.resolveComponent("menu-popup");
  (_easycom_uni_icons2 + _easycom_uni_card2 + _easycom_menu_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_menu_popup = () => "../menu-popup/menu-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_card + _easycom_menu_popup)();
}
const _sfc_main = {
  __name: "menu-content",
  setup(__props) {
    const advertise_data = ["一次性消费30以上，送小型饮水机一台", "空桶回收，爱护环境", "配送电话：123321123，可预约送达时间"];
    const left_menu_title = ["今日特价", "山泉水专区", "怡宝专区"];
    const left_active_title = common_vendor.ref("今日特价");
    const right_menu_scroll_top = common_vendor.ref(0);
    const right_menu_elemt = common_vendor.ref(null);
    const show_popup_data = common_vendor.reactive({
      img_src: "src",
      title: "title",
      price: 11
    });
    const child_open = common_vendor.ref(null);
    const show_goods_popup = (goods_data) => {
      const { goods_img, goods_title, price } = goods_data;
      show_popup_data.img_src = goods_img;
      show_popup_data.title = goods_title;
      show_popup_data.price = price;
      child_open.value.popup_mes_fn();
    };
    const left_menu_el_click = (index) => {
      left_active_title.value = left_menu_title[index];
      right_menu_scroll_top.value = right_menu_elemt.value[index].$el.getBoundingClientRect().top;
    };
    const right_menu_data = [
      {
        title: "今日特价",
        small_title: "疯狂星期四，购水9折起",
        all_goods_data: [
          {
            goods_img: "../../static/水店3.jpg",
            goods_title: "怡宝桶装水",
            goods_small_title: "老牌推荐",
            price: "12"
          },
          {
            goods_img: "../../static/水店2.jpeg",
            goods_title: "桶装水",
            goods_small_title: "推荐",
            price: "11"
          }
        ]
      },
      {
        title: "山泉水专区",
        small_title: "纯净山泉，补充人体所需矿物质",
        all_goods_data: [
          {
            goods_img: "../../static/水店3.jpg",
            goods_title: "百岁山桶装水",
            goods_small_title: "老牌推荐",
            price: "22"
          },
          {
            goods_img: "../../static/水店.jpg",
            goods_title: "飘宝桶装水",
            goods_small_title: "推荐购买",
            price: "15"
          },
          {
            goods_img: "../../static/水店2.jpeg",
            goods_title: "力的桶装水",
            goods_small_title: "好物推荐",
            price: "14"
          }
        ]
      },
      {
        title: "怡宝专区",
        small_title: "老品牌，好品质",
        all_goods_data: [
          {
            goods_img: "../../static/水店3.jpg",
            goods_title: "怡宝桶装水",
            goods_small_title: "老牌推荐",
            price: "12"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(advertise_data, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: "8b138e61-0-" + i0,
            c: index
          };
        }),
        b: common_vendor.p({
          type: "sound",
          size: "14",
          color: "rgb(102 64 215)"
        }),
        c: common_vendor.p({
          type: "down"
        }),
        d: common_vendor.f(left_menu_title, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: left_active_title.value == item ? 1 : "",
            c: common_vendor.o(($event) => left_menu_el_click(index))
          };
        }),
        e: common_vendor.f(right_menu_data, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.small_title),
            c: common_vendor.f(item.all_goods_data, (goods, k1, i1) => {
              return {
                a: goods.goods_img,
                b: common_vendor.t(goods.goods_title),
                c: common_vendor.t(goods.goods_small_title),
                d: common_vendor.t(goods.price),
                e: "8b138e61-3-" + i0 + "-" + i1 + "," + ("8b138e61-2-" + i0),
                f: common_vendor.o(($event) => show_goods_popup(goods))
              };
            }),
            d: "8b138e61-2-" + i0
          };
        }),
        f: common_vendor.p({
          type: "plusempty",
          color: "white"
        }),
        g: common_vendor.p({
          spacing: "0",
          padding: "0",
          isFull: true
        }),
        h: right_menu_scroll_top.value,
        i: common_vendor.sr(child_open, "8b138e61-4", {
          "k": "child_open"
        }),
        j: common_vendor.p({
          show_popup_mes: show_popup_data
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8b138e61"], ["__file", "D:/MyUniapp/uni-project/components/menu-content/menu-content.vue"]]);
wx.createComponent(Component);
