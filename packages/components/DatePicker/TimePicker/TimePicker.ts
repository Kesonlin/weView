import { ref, Ref } from 'vue';

/**
 * 获取当前时间
 * @returns 当前格式化后的时分秒
 */
export const getCurrTime = () => {
    const date = new Date();
    return {
      hour:
        date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString(),
      minu:
        date.getMinutes() < 10
          ? '0' + date.getMinutes()
          : date.getMinutes().toString(),
      seco:
        date.getSeconds() < 10
          ? '0' + date.getSeconds()
          : date.getSeconds().toString(),
    };
  };
  
type HourList = {
  top: number;
  val: string;
};
export const ulList = [
  {
    count: 24,
    ulRef: ref(),
    liRef: ref(),
    currRef: ref(''),
    id: 'hour',
  },
  {
    count: 60,
    ulRef: ref(),
    liRef: ref(),
    currRef: ref(''),
    id: 'minu',
  },
  {
    count: 60,
    ulRef: ref(),
    liRef: ref(),
    currRef: ref(''),
    id: 'seco',
  },
];

/**
 * 选择时间的处理函数
 * @param targetRefs 当前ul的所有li的dom（是一整个数组）
 * @param targetRef ul(用来选择后控制ul的滑动)
 * @param targetTime 选择的目标时间
 * @param category 选择的是 时/分/秒
 */
export const selectedTime = (
  targetRefs: Ref<any>,
  targetRef: Element,
  targetTime: Ref<any>,
  category: string
) => {
  let targetList: HourList[] = [];
  // 获取每一列ul的-子元素（每一个li）的offsetTop和值
  targetList = getLiList(targetRefs);

  // 当前选的每个事件的offsetTop
  let hourTop,minuTop,secoTop
  // 找到与目标值相同的top并赋值
  switch (category) {
    case 'hour':
    hourTop =
        targetList.find((item) => item.val === targetTime.value
        )?.top! - 65;

      targetRef.scrollTo({
        top: hourTop,
      });
      break;
    case 'minu':
      minuTop =
        targetList.find(
          (item: { val: string }) => item.val === targetTime.value
        )?.top! - 65;

      targetRef.scrollTo({
        top: minuTop,
      });
      break;
    case 'seco':
      secoTop =
        targetList.find(
          (item: { val: string }) => item.val === targetTime.value
        )?.top! - 65;

      targetRef.scrollTo({
        top: secoTop,
      });
      break;
    default:
      break;
  }

  // 对目标ul添加滚动事件，让滚动到某个数字，输入框的值就改变为对应的那个
  targetRef.addEventListener('scroll', () => {
    targetTime.value = targetList.find(
      (item: { top: number }) => item.top > targetRef.scrollTop + 65
    )?.val!;
  });
};

/**
 * 获取targetRefs的-子元素（每一个li）的offsetTop和值
 * @param targetRefs 
 * @returns 
 */
export const getLiList = (targetRefs: Ref<any>) => {
  return targetRefs.value.map((item: any) => {
    return {
      top: item.offsetTop,
      val: item.innerText,
    };
  });
};
