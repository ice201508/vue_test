<template>
  <div class="cal-wrap">
    <div class="cal-week">
      <ul>
        <li v-for="(item, index) in weeksList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="cal-date">2</div>
  </div>
</template>

<script>
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
      display_cal: [],
      dcurr_month_lines_array: [],
    };
  },
  props: {
    searchTime: String,
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // day是星期几 值是0-6  星期日是0
      // date 是多少号， 1-31之间的数据
      this.d_now = moment();
      console.log(this.searchTime);
      // this.dcurr_year = this.d_now.get('year');
      // this.dcurr_month = this.d_now.get('month');
      // this.dcurr_day = this.d_now.get('date');
      if (this.searchTime) {
        this.dcurr_year = moment(new Date(this.searchTime)).get('year'); // 年份
        this.dcurr_month = moment(new Date(this.searchTime)).get('month'); // 月份
        this.dcurr_day = moment(new Date(this.searchTime)).get('date');
      } else {
        this.dcurr_year = this.d_now.get('year');
        this.dcurr_month = this.d_now.get('month');
        this.dcurr_day = this.d_now.get('date');
      }

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
      console.log(this.dfirst_day, this.dlast_day);

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
      console.log(this.dprev_month_days, this.dcurr_month_days);

      // 总行数
      if (this.dfirst_day === 0) {
        this.dcurr_month_lines = Math.ceil((this.dcurr_month_days + 6) / 7);
      } else {
        this.dcurr_month_lines = Math.ceil((this.dcurr_month_days + this.dfirst_day - 1) / 7);
      }
      console.log(this.dcurr_month_lines);

      for (let i = 1; i <= this.dcurr_month_lines; i++) {
        this.dcurr_month_lines_array.push(i);
      }
      console.log(this.dcurr_month_lines_array);
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
</style>
