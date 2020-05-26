<template>
  <div class="home">
    <h3>我们下面的组件就是我们 自己定义的日历组件</h3>
    <div class="ic-wrap">
      <input type="text" :value="curr_time" @focus="toggle" />
      <div class="input-calendar" :class="hasDisplay ? 'has-display' : ''">
        <calendar :search-time="curr_time" @sendEvent="getFromChild"></calendar>
      </div>
    </div>
    <div>
      <button @click="prevAfterMonth(-1)">上一月</button>
      <b>{{ curr_time }}</b>
      <button @click="prevAfterMonth(1)">下一月</button>
    </div>
    <calendar :search-time="curr_time" :event="event"></calendar>
  </div>
</template>

<script>
import Calendar from '@/components/calendar_com.vue';
import DateFormat from '@/utils/dateFormmat';

export default {
  name: 'Home',
  data() {
    return {
      // large 是异步请求过来的数据，使用v-if 有值了以后再渲染子组件
      // loadSuccessed: true,
      curr_time: DateFormat.getCurrent(new Date(), 0, 0, 0),
      event: [],
      hasDisplay: false
    };
  },
  created() {
    this.prevAfterMonth(0);
  },
  methods: {
    toggle() {
      this.hasDisplay = true;
    },
    getFromChild(param) {
      this.curr_time = param;
      this.hasDisplay = false;
    },
    prevAfterMonth(num) {
      this.event = [];
      let time = DateFormat.getCurrent(new Date(this.curr_time), 0, num, 0);
      let first_time = DateFormat.getMonthFirstDate(new Date(time));
      let last_time = DateFormat.getMonthLastDate(new Date(time));
      // console.log(time, first_time, last_time);

      this.$http.post('/shijian', { time }).then((res) => {
        res.data.forEach((item) => {
          if (
            +new Date(item.date) > +new Date(first_time) &&
            +new Date(item.date) < +new Date(last_time + ' 23:59:59:999')
          ) {
            this.event.push(item);
          }
        });
        // console.log(11111, this.event, this.event.length);
        this.curr_time = time;
      });
    }
  },
  components: {
    Calendar
  }
};
</script>

<style lang="scss">
.ic-wrap {
  position: relative;
  input {
    width: 220px;
    height: 20px;
    padding: 5px 10px;
  }
  .input-calendar {
    display: none;
    background-color: #fff;
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 9;
    width: 700px;
    &.has-display {
      display: block;
    }
  }
  .cd-ul-wrap li .cuw-item {
    height: auto;
  }
}
.home {
  width: 100%;
  height: 100%;
  border: 2px solid red;
}
</style>
