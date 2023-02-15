export const tableHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 获取当前年月
export const getCurrAdjacentMonth = () => {
    const date = new Date();
    const theYear = date.getFullYear();
    const theMonth = date.getMonth() + 1;
  
    return {
      theYear,
      theMonth,
    };
  };
  
  // 格式化时间
  export const timeFormat = (time: number) => {
    return time < 10 ? '0' + time : time;
  };
  
  // 格式化日期
  export const dateFormat = (time: number) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = timeFormat(date.getMonth() + 1);
    const day = timeFormat(date.getDate());
  
    return year + '-' + month + '-' + day;
  };
  
  /**
   * 日期组件左侧点击
   * @param month
   * @param year
   * @returns
   */
  export const unlinkBefore = (month: number, year: number) => {
    if (month <= 0) {
      month = 12;
      year--;
    }
    return {
      month,
      year,
    };
  };
  
  /**
   * 日期组件右侧点击
   * @param month
   * @param year
   * @returns
   */
  export const unlinkAfter = (month: number, year: number) => {
    if (month > 12) {
      month = 1;
      year++;
    }
    return {
      month,
      year,
    };
  };
  
  /**
   * 获取本月第一天是周几
   * @param year
   * @param month
   * @returns
   */
  export const getCurrMonthFirstDay = (year: number, month: number) => {
    const date = new Date(year, month - 1, 1);
    return date.getDay();
  };
  
  /**
   * 获取本月有多少天
   * @param year
   * @param month
   * @returns
   */
  export const getCurrMonthDayCount = (year: number, month: number) => {
    const date = new Date(year, month, 0);
    return date.getDate();
  };
  
  /**
   * 获取上个月在当前页面显示的天数
   * @param year
   * @param month
   * @returns
   */
  export const getPrevMonthRestDays = (year: number, month: number) => {
    let days = getCurrMonthFirstDay(year, month);
    let lastDate = getCurrMonthDayCount(year, month - 1);
    if (days === 0) {
      days = 7;
    }
    let restDays: number[] = [];
    while (restDays.length < days) {
      restDays.push(lastDate--);
    }
    return restDays.reverse();
  };
  
  /**
   * 获取下一个月在当前页显示的天数
   * @param year
   * @param month
   * @returns
   */
  export const getNextMonthRestDays = (year: number, month: number) => {
    const prevMonthRestDayCount = getPrevMonthRestDays(year, month).length;
    const currMonthDayCount = getCurrMonthDayCount(year, month);
    const nextMonthRestDayCount = 42 - prevMonthRestDayCount - currMonthDayCount;
    const restDays: number[] = [];
  
    for (let i = 1; i <= nextMonthRestDayCount; i++) {
      restDays.push(i);
    }
  
    return restDays;
  };
  
  export interface IDate {
    value: number;
    category: string;
    timestamp: number;
  }
  /**
   * 获取当前月页面需要显示的全部日期
   * @param year
   * @param month
   * @returns
   */
  export const getCurrPageDays = (year: number, month: number) => {
    const prevDays = getPrevMonthRestDays(year, month);
    let currMonthList: number[] = [];
    const currMonthDays = getCurrMonthDayCount(year, month);
    for (let i = 1; i <= currMonthDays; i++) {
      currMonthList.push(i);
    }
    const nextDays = getNextMonthRestDays(year, month);
    const objPrevDays: IDate[] = prevDays.map((item) => {
      const date = year + '-' + (month - 1) + '-' + item;
      return {
        value: item,
        category: 'prev',
        timestamp: new Date(date).getTime(),
      };
    });
  
    const objCurrMonthList: IDate[] = currMonthList.map((item) => {
      const date = year + '-' + month + '-' + item;
      return {
        value: item,
        category: 'curr',
        timestamp: new Date(date).getTime(),
      };
    });
  
    const objNextDays: IDate[] = nextDays.map((item) => {
      const date = year + '-' + (month + 1) + '-' + item;
      return {
        value: item,
        category: 'next',
        timestamp: new Date(date).getTime(),
      };
    });
  
    return [...objPrevDays, ...objCurrMonthList, ...objNextDays];
  };
  
  /**
   * 用来处理点击上个月或下个月的日期
   * @param td
   * @param year
   * @param month
   * @returns
   */
  export const clickPrevOrNext = (td: IDate, year: number, month: number) => {
    if (td.category === 'prev') {
      if (month === 1) {
        year--;
        month = 12;
      } else {
        month--;
      }
    }
  
    if (td.category === 'next') {
      if (month === 12) {
        year++;
        month = 1;
      } else {
        month++;
      }
    }
  
    return {
      month,
      year,
    };
  };
  