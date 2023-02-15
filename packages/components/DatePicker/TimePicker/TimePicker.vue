<template>
    <div class="wv-TimePicker">
      <div class="wv-TimePicker-inputbox" @click="inputFocus">
        <input
          type="text"
          class="wv-TimeInput"
          v-model="inputRef"
          autocomplete="off"
        />
      </div>
      <div v-if="timePickerStatus" ref="timePickerRef" class="wv-outer">
        <span class="triangle">&nbsp;</span>
        <div class="wv-time-picker">
          <ul
            class="wv-ul"
            v-for="item in showUlNum"
            :key="item.count"
            :id="item.id"
          >
            <li
              class="wv-li"
              v-for="list in item.count"
              :key="list"
              :ref="item.liRef"
              @click="selectTime(item.liRef, timeFormat(list - 1), item.id)"
            >
              {{ timeFormat(list - 1) }}
            </li>
          </ul>
        </div>
        <div class="wv-footer">
          <a class="wv-footer-cancel" @click="cancelBtn">取消</a>
          <a class="wv-footer-submit" @click="submitBtn">确定</a>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core';
  import { ref, watch, computed, onMounted } from 'vue';
  
  import { selectedTime, ulList ,getCurrTime } from './TimePicker';
  
  // 获取当日事件
  let DateArr = getCurrTime();
  const timePickerStatus = ref(false);
  const timePickerRef = ref();
  
  const inputRef = ref(DateArr.hour + ":" + DateArr.minu + ":" + DateArr.seco);
  const currHour = ref(DateArr.hour);
  const currMinu = ref(DateArr.minu);
  const currSeco = ref(DateArr.seco);
  let preHour = ref('');
  let preMinu = ref('');
  let preSeco = ref('');
  
  type Props = {
    showCategory?: string[];
    isMountBody?: boolean;
    modelValue: string;
  };
  
  const props = withDefaults(defineProps<Props>(), {
    showCategory: () => ['hour', 'minu', 'seco'],
    isMountBody: true,
    modelValue: '',
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  let showUlNum = computed(() => {
    return ulList.filter((item) => props.showCategory.includes(item.id));
  });
  // 每次点击后返回选择的值
  let inputValue = computed(() => {
    if (!props.showCategory.includes('seco')) {
      return currHour.value + ':' + currMinu.value;
    } else if (!props.showCategory.includes('hour')) {
      return currMinu.value + ':' + currSeco.value;
    }
  
    return currHour.value + ':' + currMinu.value + ':' + currSeco.value;
  });
  
   const timeFormat = (num: number) => {
    return num < 10 ? '0' + num : num.toString();
  };
  
  const inputFocus = () => {
    // 显示出选择器
    timePickerStatus.value = true;
    const temList = [currHour, currMinu, currSeco];
    
    // 保存上次时间
    preHour.value = currHour.value;
    preMinu.value = currMinu.value;
    preSeco.value = currSeco.value;
    setTimeout(() => {
      showUlNum.value.forEach((item, index) => {
        // 获取每列ul的dom，传入函数后控制ul滑动
        const ulDom = document.querySelector(`#${item.id}`)!;
        selectedTime(item.liRef, ulDom, temList[index], item.id);
      });
    }, 200);
  };
  onClickOutside(timePickerRef, () => {
    timePickerStatus.value = false;
  });
  // 将值设置到显示框中
  watch(inputValue, (val) => {
    inputRef.value = val;
  });
  /**
   * 点击时分秒 滚动到指定位置
   * @param el
   * @param val
   * @param id
   */
  const selectTime = (el: any, val: string, id: string) => {
    // 获取到值为val的li的top
    let top = el.value[Number(val)].offsetTop - 65;
  
    // 将ul滑动到该li处
    const ulDom = document.querySelector(`#${id}`)!;
    ulDom.scrollTo({
      top,
    });
  };
  
  const cancelBtn = () => {
    // 取消就返回之前的时间
    inputRef.value = timeFormat(Number(preHour.value)) + ":" + timeFormat(Number(preMinu.value)) + ":" + timeFormat(Number(preSeco.value));
    emit('update:modelValue', inputRef.value);
    timePickerStatus.value = false;
  };
  const submitBtn = () => {
    emit('update:modelValue', inputRef.value);
    timePickerStatus.value = false;
  };
  
  onMounted(() => {
    emit('update:modelValue', inputRef.value);
  });
  </script>
  
  <style lang="scss" scoped>
  @import './TimePicker.scss'
  </style>
  