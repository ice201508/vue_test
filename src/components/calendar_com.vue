<template>
  <div class="cal-wrap">
    <div class="cal-week">
      <ul>
        <li v-for="(item, index) in weeksList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="cal-date">
      <ul class="cd-ul-wrap">
        <!-- <li v-for="item in dcurr_month_lines_array_com" :key="item.line"> -->
        <li v-for="item in display_cal" :key="item.line">
          <div
            v-for="childItem in item.cal"
            :key="childItem.date"
            class="cuw-item"
            :class="[childItem.class, hasEvent]"
          >
            {{ childItem.date }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// https://github.com/xiangnideye/vue-date-picker
import moment from 'moment';

export default {
  data() {
    return {
      d_now: null,
      // 当前需要显示的日期 年月日
      dcurr_year: null,
      dcurr_month: null,
      dcurr_day: null,
      // 下面是每个月的第一天， 最后一天 是星期几
      dfirst_day: null,
      dlast_day: null,
      // 上个月和这个月的总天数, 利用最后一天的日期就可以了
      dprev_month_days: null,
      dcurr_month_days: null,
      // 当前月有多少行
      dcurr_month_lines: 0,
      weeksList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // 日历的具体数据
      display_cal: [],
      dcurr_month_lines_array: [],
    };
  },
  props: {
    searchTime: String,
    event: {
      type: Array,
      value: [],
    },
  },
  created() {
    // this.getCurrentDate(this.searchTime);
    this.init();
  },
  methods: {
    getCurrentDate(param) {
      // day是星期几 值是0-6  星期日是0
      // date 是多少号， 1-31之间的数据
      this.d_now = moment();
      if (param) {
        this.dcurr_year = moment(new Date(param)).get('year'); // 年份
        this.dcurr_month = moment(new Date(param)).get('month'); // 月份
        this.dcurr_day = moment(new Date(param)).get('date');
      } else {
        this.dcurr_year = this.d_now.get('year');
        this.dcurr_month = this.d_now.get('month');
        this.dcurr_day = this.d_now.get('date');
      }
    },
    init() {
      this.getCurrentDate(this.searchTime);
      console.log(this.dcurr_year, this.dcurr_month, this.dcurr_day);
      this.dfirst_day = moment()
        .set({
          year: this.dcurr_year,
          month: this.dcurr_month,
          date: 1,
        })
        .get('day');

      this.dlast_day = moment()
        .set({
          year: this.dcurr_year,
          month: this.dcurr_month + 1,
          date: 0,
        })
        .get('day');

      // 找每个月多少天，就是这个月日期写零
      this.dprev_month_days = moment()
        .set({
          year: this.dcurr_year,
          month: this.dcurr_month,
          date: 0,
        })
        .get('date');
      this.dcurr_month_days = moment()
        .set({
          year: this.dcurr_year,
          month: this.dcurr_month + 1,
          date: 0,
        })
        .get('date');

      // 总行数
      if (this.dfirst_day === 0) {
        this.dcurr_month_lines = Math.ceil((this.dcurr_month_days + 6) / 7);
      } else {
        this.dcurr_month_lines = Math.ceil((this.dcurr_month_days + this.dfirst_day - 1) / 7);
      }

      this.dcurr_month_lines_array = [];

      for (let i = 1; i <= this.dcurr_month_lines; i++) {
        this.dcurr_month_lines_array.push(i);
      }

      this.display_cal = [];
      this.dcurr_month_lines_array.forEach((item) => {
        this.display_cal.push({
          line: item,
          cal: this.current_lines(item),
        });
      });
      return this.display_cal;
    },

    prev_line_items(items) {
      // if (this.dfirst_day === 3) {
      //   for (let i = 2; i >= 1; i--) {
      //     // items.push({ class: 'prev', date: i, line: 1 })
      //     items.push(this.dprev_month_days - i + 1);
      //   }
      // } else if(this.dfirst_day === 5){

      // }
      if (this.dfirst_day === 0) {
        for (let i = 1; i <= 6; i++) {
          items.unshift({ class: 'prev', date: this.dprev_month_days - i + 1, line: 1 });
          // items.unshift(this.dprev_month_days - i + 1);
        }
      } else {
        for (let i = 1; i < this.dfirst_day; i++) {
          items.unshift({ class: 'prev', date: this.dprev_month_days - i + 1, line: 1 });
          // items.unshift(this.dprev_month_days - i + 1);
        }
      }

      return items;
    },

    after_line_items(items) {
      // if (this.dlast_day === 4) {
      //   for (let i = 1; i <= 3; i++) {
      //     items.push(i);
      //   }
      // }
      if (this.dlast_day === 0) return items;
      for (let i = 1; i <= 7 - this.dlast_day; i++) {
        items.push({ class: 'after', date: i, line: this.dcurr_month_lines });
        // items.push(i);
      }
      return items;
    },

    current_lines(line) {
      let itemList = [];
      this.prev_line_items(itemList);

      for (let i = 1; i <= this.dcurr_month_days; i++) {
        itemList.push({ class: 'curr', date: i, line: line, event: this.event });
        // itemList.push(i);
      }

      this.after_line_items(itemList);

      itemList = itemList.slice(7 * (line - 1), 7 * line);
      return itemList;
    },
  },
  computed: {
    hasEvent: function(param) {
      if (+new Date(this.dcurr_year + this.dcurr_month + param.date) === +new Date(param.date)) {
        console.log(2222, param);
        return 'has-event';
      }
      return '';
    },
  },
  watch: {
    searchTime(newV, oldV) {
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped>
.cal-wrap {
  display: flex;
  flex-flow: column;
  // width: 100%;
  // height: 100%;
}
.cal-week {
  flex: 0 0 50px;
}
.cal-date {
  flex: 1 1 auto;
}

// 下面是标题的样式
.cal-week {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    height: 50px;
    li {
      flex: 1;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      border: 1px solid #ccc;
      padding: 8px 0;
    }
  }
}

.cd-ul-wrap {
  box-sizing: border-box;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    .cuw-item {
      box-sizing: border-box;
      flex: 1;
      height: 100px;
      padding: 10px;
      border: 1px solid #ccc;
      &.prev,
      &.after {
        color: #ccc;
        background-color: #e8e8e8;
      }
      &.curr {
        color: #000;
      }
      &:hover {
        background-color: rgb(90, 89, 89);
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
</style>
