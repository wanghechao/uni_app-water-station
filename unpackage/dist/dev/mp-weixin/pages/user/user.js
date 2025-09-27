"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const user_content_list = [
      {
        icon: "../../static/定位.png",
        text: "水卡充值"
      },
      {
        icon: "../../static/定位.png",
        text: "水桶押金"
      },
      {
        icon: "../../static/定位.png",
        text: "送货地址"
      },
      {
        icon: "../../static/对话.png",
        text: "意见反馈"
      },
      {
        icon: "../../static/价值评估.png",
        text: "下载软件"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.user_name),
        b: common_vendor.f(user_content_list, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.text)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "D:/MyUniapp/uni-project/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
