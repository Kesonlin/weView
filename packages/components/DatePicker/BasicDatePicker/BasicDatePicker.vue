<template>
  <div class="wv-DatePicker-inputbox" ref="DatePickerInputbox">
    <input type="text" class="wv-input" v-model="DateTime" @click="openDatePicker" placeholder="Pick a day"/>
  </div>
    <div
      class="wv-DatePicker"
      :style="DatePickerStyle"
      v-show="DatePickerPanel"
      ref="DatePickerRef"
    >
    <span class="triangle">&nbsp;</span>
        <div class="wv-DatePicker-content-left">
          <div class="wv-DatePicker-content-left-top">
            <div class="wv-DatePicker-content-left-top-icon">
              <span class="year-left" @click="clickBefore('year')">&lt;&lt;</span>
              <span class="month-left" @click="clickBefore('month')">&lt;</span>
            </div>
            <div class="wv-DatePicker-content-left-top-date">
              {{ theData }}
            </div>
            <div class="wv-DatePicker-content-right-top-icon">
              <span class="month-right" @click="clickAfter('month')"> &gt; </span>
              <span class="year-right" @click="clickAfter('year')"> &gt;&gt; </span>
            </div>
          </div>
          <div>
            <table class="wv-table">
              <thead>
                <tr>
                  <th v-for="item in tableHeader" :key="item">{{ item }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(list, index) in theTds" :key="index">
                  <td
                    v-for="td in list"
                    :key="td"
                    :class="[
                      tdStyle,
                    ]"
                    @click="selectDate(td)"
                  >
                    <div :class="[
                      beforeAndAfterStyle(td, 'curr'),
                      ]"
                      >
                      <span
                        :class="[
                          selectedStartDate === td.value
                          ? 'dc-selected-date'
                          : '',
                          selectedDate(td),
                        ]"
                        >{{ td.value }}</span
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref,CSSProperties,onMounted,computed,watch } from 'vue'
import { useElementBounding,onClickOutside } from '@vueuse/core'
import {
  tableHeader,
  getCurrAdjacentMonth,
  timeFormat,
  unlinkBefore,
  unlinkAfter,
  getCurrPageDays,
  IDate,
  dateFormat,
  clickPrevOrNext,
} from './BasicDatePicker';

const props = defineProps({
  modelValue: {
    type: String
  }
})
const emits = defineEmits(["update:modelValue"])

const tdStyle = 'wv-td';
const currDate = new Date().getDate();

const DatePickerPanel = ref(false);
const DatePickerRef = ref();
const selectedStartDate = ref<number>();

const DatePickerInputbox = ref(null);
const DatePickerStyle = ref<CSSProperties>({
  position: 'absolute',
  top: '',
  left: '',
});
const selectedDateList = ref<number[]>([1661090509502, 1661090509502]);


// 打开日期选择器事件
const openDatePicker = () => {
  const {
    top: inputTop,
    left: inputLeft,
    height: inputHeight,
    bottom: inputBottom,
  } = useElementBounding(DatePickerInputbox);
  const { height: panelHeight } = useElementBounding(DatePickerRef);

  
  if (inputBottom.value > panelHeight.value) {
    DatePickerStyle.value.top = inputTop.value + inputHeight.value + 10 + 'px';
  } else {
    DatePickerStyle.value.top = inputTop.value - panelHeight.value - 10 + 'px';
  }
  DatePickerStyle.value.left = inputLeft.value + 'px';

  DatePickerPanel.value = true;
};

// 点击外面日期选择器消失
onClickOutside(DatePickerRef, () => {
  DatePickerPanel.value = false;
});

const { theYear, theMonth } = getCurrAdjacentMonth();
let theDateYear = ref(theYear);
let theDateMonth = ref(theMonth);
let theTds = ref<any[][]>([]);

let modelInput = ref();

const clickBefore = (category: string) => {
  if (category === 'month') {
    theDateMonth.value--;
      const { month, year } = unlinkBefore(
        theDateMonth.value,
        theDateYear.value
      );
      theDateMonth.value = month;
      theDateYear.value = year;
  } else if (category === 'year') {
    theDateYear.value--;
  }
  initArr();
};

const clickAfter = (category: string) => {
  if (category === 'month') {
      theDateMonth.value++;
      const { month: theMonth, year: theYear } = unlinkAfter(
        theDateMonth.value,
        theDateYear.value
      );
      theDateMonth.value = theMonth;
      theDateYear.value = theYear;
    }
  else if (category === 'year') {
      theDateYear.value++;
  }
  initArr();
};

const selectDate = (td: IDate) => {
  let year =theDateYear.value;
  let month = timeFormat(theDateMonth.value);
  let day = timeFormat(td.value);
  const { month: currMonth, year: currYear } = clickPrevOrNext(
    td,
    year,
    Number(month)
  );

  selectedRange(td);
  const timeStamp = new Date(currYear + '-' + currMonth + '-' + day).getTime();
  DateTime.value = dateFormat(timeStamp);
  // 选择器消失
  DatePickerPanel.value = false;
}

const selectedRange = (td: IDate) => {
  // 没时间直接push，有就清空再push
  if(selectedDateTime.value.length === 0) {
    selectedDateTime.value.push({ val: td.timestamp});
  } else {
    selectedDateTime.value.shift();
    selectedDateTime.value.push({ val: td.timestamp});
  }
};


// 初始化表格
function updateDateTime(dateList: number[]) {
  modelInput.value = dateFormat(dateList[0]);
}

onMounted(() => {
  updateDateTime(selectedDateList.value);
});

for (let i = 0; i < 6; i++) {
  theTds.value[i] = new Array();
}
const initArr = () => {
  for (let i = 0; i < 6; i++) {
      theTds.value[i] = new Array();
  }
};

// 选择样式改变
type SelectedDateTimeRange = {
  val: number;
};
let selectedDateTime = ref<SelectedDateTimeRange[]>([]);


/**
 * 被选中的开始和结束的样式
 * @param td
 */
 const selectedDate = (td: IDate) => {
  if (
    selectedDateTime &&
    selectedDateTime.value.length !== 0 &&
    td.timestamp === selectedDateTime.value[0]?.val
  ) {
    return 'wv-selected-date';
  }
  return '';
};

// 设置当前月份样式/非当前月份样式
const beforeAndAfterStyle = (td: IDate, curr?: string) => {
  // 获取今天时间戳
  var now_date = new Date();//获取Date对象
  now_date.setHours(0);//设置小时
  now_date.setMinutes(0);//设置分钟
  now_date.setSeconds(0);//设置秒
  now_date.setMilliseconds(0);//设置毫妙
  var timestamp = now_date.getTime();//获取毫秒时间戳
  if (td.category === 'prev' || td.category === 'next') {
    return 'wv-prev-and-next';
  } else {
    if (td.category === 'curr' && td.value === currDate && curr && td.timestamp == timestamp) {
      return 'wv-today-style';
    }
    return '';
  }
};

// 下面是watch
watch(
  [theDateYear, theDateMonth],
  (val) => {
    let i = 0;
    getCurrPageDays(val[0], val[1]).forEach((tds, index) => {
      if ((index + 1) % 7 === 0) {
        theTds.value[i].push(tds);
        i++;
      } else {
        theTds.value[i].push(tds);
      }
    });
  },
  {
    immediate: true,
  }
);

// 下面是computed
const theData = computed(() => {
  return theDateYear.value + '年' + timeFormat(theDateMonth.value) + '月';
});

const DateTime = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emits('update:modelValue', val)
  }
})

</script>
  
<style lang="scss" scoped>
  @import './BasicDatePicker.scss';
</style>
  