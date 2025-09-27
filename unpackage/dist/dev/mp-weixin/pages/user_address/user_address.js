"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_card2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_popup2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "user_address",
  setup(__props) {
    common_vendor.index.setNavigationBarTitle({
      title: "选择地址"
    });
    const valiForm = common_vendor.ref(null);
    const address_data = common_vendor.ref([{
      user_name: "hc",
      user_phone_number: "123321",
      user_address: "广东省广州市天河区22号"
    }]);
    const formData = common_vendor.ref({
      name: "",
      phone: "",
      address: ""
    });
    const use_address = (address) => {
      common_vendor.index.$emit("sent_address", address);
      common_vendor.index.navigateBack();
    };
    const remove_address = (item_index) => {
      if (item_index >= 0 && item_index < address_data.value.length) {
        address_data.value.splice(item_index, 1);
        common_vendor.index.showToast({
          title: "删除成功"
        });
      } else {
        console.error("无此下标");
      }
    };
    const add_new_address_popup = common_vendor.ref(null);
    const show_popup_address = () => {
      add_new_address_popup.value.open();
    };
    const rule = {
      name: {
        rules: [{
          required: true,
          errorMessage: "姓名不能为空"
        }]
      },
      phone: {
        rules: [{
          required: true,
          errorMessage: "电话号码不能为空"
        }]
      },
      address: {
        rules: [{
          required: true,
          errorMessage: "收货地址不能为空"
        }]
      }
    };
    const add_new_address = () => {
      valiForm.value.validate().then((res) => {
        address_data.value.push({
          user_name: formData.value.name,
          user_phone_number: formData.value.phone,
          user_address: formData.value.address
        });
        add_new_address_popup.value.close();
        common_vendor.index.showToast({
          title: "添加成功"
        });
      }).catch((err) => {
        console.log(err);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(address_data.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => remove_address(index), index),
            b: common_vendor.t(item.user_address),
            c: common_vendor.o(($event) => use_address(item.user_address), index),
            d: "a9a1aff2-0-" + i0,
            e: common_vendor.p({
              title: item.user_name,
              isFull: true,
              ["sub-title"]: "电话号码:" + item.user_phone_number
            }),
            f: index
          };
        }),
        b: common_vendor.o(($event) => formData.value.name = $event),
        c: common_vendor.p({
          type: "text",
          placeholder: "请输入姓名",
          modelValue: formData.value.name
        }),
        d: common_vendor.p({
          name: "name",
          label: "姓名",
          required: true,
          ["label-align"]: "right"
        }),
        e: common_vendor.o(($event) => formData.value.phone = $event),
        f: common_vendor.p({
          type: "text",
          placeholder: "请输入电话号码",
          modelValue: formData.value.phone
        }),
        g: common_vendor.p({
          name: "phone",
          label: "电话号码",
          required: true,
          ["label-width"]: "100",
          ["label-align"]: "right"
        }),
        h: formData.value.address,
        i: common_vendor.o(($event) => formData.value.address = $event.detail.value),
        j: common_vendor.p({
          name: "address",
          label: "收货地址",
          required: true,
          ["label-width"]: "100",
          ["label-align"]: "right"
        }),
        k: common_vendor.sr(valiForm, "a9a1aff2-2,a9a1aff2-1", {
          "k": "valiForm"
        }),
        l: common_vendor.p({
          modelValue: formData.value,
          rules: rule
        }),
        m: common_vendor.o(add_new_address),
        n: common_vendor.sr(add_new_address_popup, "a9a1aff2-1", {
          "k": "add_new_address_popup"
        }),
        o: common_vendor.p({
          type: "bottom"
        }),
        p: common_vendor.o(show_popup_address)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a9a1aff2"], ["__file", "D:/MyUniapp/uni-project/pages/user_address/user_address.vue"]]);
wx.createPage(MiniProgramPage);
