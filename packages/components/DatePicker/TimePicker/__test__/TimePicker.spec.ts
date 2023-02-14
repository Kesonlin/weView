/// <reference types="vitest"/>
// @vitest-environment happy-dom
import {
    getCurrTime
} from '../TimePicker'
import TimePicker from "../TimePicker.vue"

import {
    expect,
    describe,
    test
} from "vitest"
import { mount } from "@vue/test-utils"
import { timeFormat } from '../../BasicDatePicker/BasicDatePicker'


describe('TimePicker.vue',() => {
    test("render",async () => {
        // 获取组件
        const wrapper = mount(TimePicker);
        
        // 刚开始时选择框没有出现
        expect(wrapper.find(".wv-outer").exists()).toBe(false);
        // 点击后出现
        await wrapper.find(".wv-TimeInput").trigger("click");
        expect(wrapper.find(".wv-outer").exists()).toBe(true);
        // 点击确定按钮后又消失
        let yes = wrapper.find(".wv-footer-submit")
        let no = wrapper.find(".wv-footer-cancel");
        await no.trigger("click");
        await yes.trigger("click");
        expect(wrapper.find(".wv-outer").exists()).toBe(false);
    })

    test("buttonClick",async () => {
        // 获取组件
        const wrapper = mount(TimePicker);
        await wrapper.find(".wv-TimeInput").trigger("click");
        expect(wrapper.find(".wv-outer").exists()).toBe(true);
        wrapper.find(".wv-footer-cancel").trigger('click');
        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
        wrapper.find(".wv-footer-submit").trigger('click');
        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    })

    test("Func",() => {
        expect(timeFormat(1)).toBe('01');
    })
})

describe("TimePicker.ts",() => {
    test("getCurrTime",() => {
        // 获取今日日期
        let date = new Date();
        let thehour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString();
        let theminu = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString();
        let theseco = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds().toString();
        expect(getCurrTime()).toEqual({hour:thehour,minu:theminu,seco:theseco});
    })
})