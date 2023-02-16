/// <reference types="vitest"/>
// @vitest-environment happy-dom
import {
    getCurrAdjacentMonth,
    timeFormat,
    dateFormat,
    unlinkBefore,
    unlinkAfter,
    getCurrMonthFirstDay,
    getCurrMonthDayCount,
    getPrevMonthRestDays,
    getNextMonthRestDays,
    getCurrPageDays,
    clickPrevOrNext
} from "../DateTimePicker"
import {
    expect,
    describe,
    test
} from "vitest"
import { mount } from "@vue/test-utils"
import DateTimePicker from "../DateTimePicker.vue"


describe('DateTimePicker.vue',() => {
  test("render",async () => {
    // 获取组件
    const wrapper = mount(DateTimePicker);
    
    // 刚开始选择框没有出现
    expect(wrapper.find(".wv-DatePicker").attributes("style")).toBe("position: absolute; display: none;")
    // 点击后选择框才出现
    await wrapper.find('.wv-input').trigger('click');
    expect(wrapper.find(".wv-DatePicker").attributes("style")).toBe("position: absolute; top: -10px; left: -50px;");
    // 点击取消或确定按钮后才消失
    await wrapper.find(".wv-DateTimePicker-footer-cancel").trigger("click");
    expect(wrapper.find(".wv-DatePicker").attributes("style")).toBe("position: absolute; top: -10px; left: -50px; display: none;")
    await wrapper.find(".wv-DateTimePicker-footer-submit").trigger("click");
    expect(wrapper.find(".wv-DatePicker").attributes("style")).toBe("position: absolute; top: -10px; left: -50px; display: none;")

    // 获取今日日期
    let date = new Date();
    let theday = date.getDate();
    let themonth = date.getMonth() + 1;
    let theyear = date.getFullYear();
    let todayNum = wrapper.find('.wv-today-style');
    // 拥有这个属性的盒子，文字为当前日期
    expect(todayNum.text()).toBe(theday+'');
    
    let time = wrapper.find('.wv-DatePicker-content-left-top-date');
    let yearleft = wrapper.find('.year-left');
    let monthleft = wrapper.find('.month-left');
    let yearright = wrapper.find('.year-right');
    let monthright = wrapper.find('.month-right');
    // 如果月份年份进退按钮被点了,年月份变换
    expect(yearleft.classes()).toContain('year-left')
    await monthleft.trigger('click');
    expect(Number(time.text().slice(5,7))).toBe(themonth-1);
    await monthright.trigger('click');
    expect(Number(time.text().slice(5,7))).toBe(themonth);
    await yearleft.trigger('click');
    expect(Number(time.text().slice(0,4))).toBe(theyear-1);
    await yearright.trigger('click');
    expect(Number(time.text().slice(0,4))).toBe(theyear);
  })  
})

describe('DateTimePicker.ts', () => {
    let date = new Date();
    let timestamp = date.getTime();
    let theday = date.getDate();
    let themonth = date.getMonth() + 1;
    let theyear = date.getFullYear();
    test('getCurrAdjacentMonth', () => {
      expect(getCurrAdjacentMonth()).toEqual({theYear: theyear,theMonth:themonth});
    })

    test("timeFormat",() => {
      expect(timeFormat(2)).toBe('02');
      expect(timeFormat(11)).toBe(11);
    })
    test("dateFormat",() => {
      expect(dateFormat(timestamp)).toBe(theyear+'-'+timeFormat(themonth)+'-'+theday)
    })
    
    test("unlinkBefore",() => {
      expect(unlinkBefore(2,2023)).toEqual({month:2,year:2023})
      expect(unlinkBefore(0,2023)).toEqual({month:12,year:2022})
    })
    test("unlinkAfter",() => {
      expect(unlinkAfter(2,2023)).toEqual({month:2,year:2023})
      expect(unlinkAfter(13,2023)).toEqual({month:1,year:2024})
    })

    test("getCurrMonthFirstDay",() => {
      expect(getCurrMonthFirstDay(2023,2)).toBe(3)
    })

    test("getCurrMonthDayCount",() => {
      expect(getCurrMonthDayCount(2023,2)).toBe(28)
    })

    test("getPrevMonthRestDays",() => {
      expect(getPrevMonthRestDays(2023,2)).toEqual([29,30,31])
    })

    test("getNextMonthRestDays",() => {
      expect(getNextMonthRestDays(2023,2)).toEqual([1,2,3,4,5,6,7,8,9,10,11])
    })

    test("getCurrPageDays",() => {
      expect(getCurrPageDays(2023,2)).toEqual([
        { value: 29, category: 'prev', timestamp: 1674921600000 },
        { value: 30, category: 'prev', timestamp: 1675008000000 },
        { value: 31, category: 'prev', timestamp: 1675094400000 },
        { value: 1, category: 'curr', timestamp: 1675180800000 }, 
        { value: 2, category: 'curr', timestamp: 1675267200000 }, 
        { value: 3, category: 'curr', timestamp: 1675353600000 }, 
        { value: 4, category: 'curr', timestamp: 1675440000000 }, 
        { value: 5, category: 'curr', timestamp: 1675526400000 }, 
        { value: 6, category: 'curr', timestamp: 1675612800000 }, 
        { value: 7, category: 'curr', timestamp: 1675699200000 }, 
        { value: 8, category: 'curr', timestamp: 1675785600000 }, 
        { value: 9, category: 'curr', timestamp: 1675872000000 },
        { value: 10, category: 'curr', timestamp: 1675958400000 },
        { value: 11, category: 'curr', timestamp: 1676044800000 },
        { value: 12, category: 'curr', timestamp: 1676131200000 },
        { value: 13, category: 'curr', timestamp: 1676217600000 },
        { value: 14, category: 'curr', timestamp: 1676304000000 },
        { value: 15, category: 'curr', timestamp: 1676390400000 },
        { value: 16, category: 'curr', timestamp: 1676476800000 },
        { value: 17, category: 'curr', timestamp: 1676563200000 },
        { value: 18, category: 'curr', timestamp: 1676649600000 },
        { value: 19, category: 'curr', timestamp: 1676736000000 },
        { value: 20, category: 'curr', timestamp: 1676822400000 },
        { value: 21, category: 'curr', timestamp: 1676908800000 },
        { value: 22, category: 'curr', timestamp: 1676995200000 },
        { value: 23, category: 'curr', timestamp: 1677081600000 },
        { value: 24, category: 'curr', timestamp: 1677168000000 },
        { value: 25, category: 'curr', timestamp: 1677254400000 },
        { value: 26, category: 'curr', timestamp: 1677340800000 },
        { value: 27, category: 'curr', timestamp: 1677427200000 },
        { value: 28, category: 'curr', timestamp: 1677513600000 },
        { value: 1, category: 'next', timestamp: 1677600000000 },
        { value: 2, category: 'next', timestamp: 1677686400000 },
        { value: 3, category: 'next', timestamp: 1677772800000 },
        { value: 4, category: 'next', timestamp: 1677859200000 },
        { value: 5, category: 'next', timestamp: 1677945600000 },
        { value: 6, category: 'next', timestamp: 1678032000000 },
        { value: 7, category: 'next', timestamp: 1678118400000 },
        { value: 8, category: 'next', timestamp: 1678204800000 },
        { value: 9, category: 'next', timestamp: 1678291200000 },
        { value: 10, category: 'next', timestamp: 1678377600000 },
        { value: 11, category: 'next', timestamp: 1678464000000 }
      ])
    })
    
    test("clickPrevOrNext",() => {
      expect(clickPrevOrNext({ value: 29, category: 'prev', timestamp: 1674921600000 },2023,2)).toEqual({ month: 1, year: 2023 })
    })

    test("clickPrevOrNext",() => {
      expect(clickPrevOrNext({ value: 11, category: 'next', timestamp: 1678464000000 },2023,2)).toEqual({ month: 3, year: 2023 })
    })
})