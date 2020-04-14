// 获取当前月份的格式化时间， 例子  2008-8-8
function getCurrent(param, year, month, day) {
  let years = param.getFullYear() + year;
  let months = param.getMonth() + 1 + month;
  let days = param.getDate() + day;
  return years + '-' + months + '-' + days;
}
// 获取当前时间所在月份的 第一天   例如 4.13 得到的就是 2020-4-1
function getMonthFirstDate(param) {
  let years = param.getFullYear();
  let months = param.getMonth() + 1;
  return years + '-' + months + '-1';
}
// 获取当前时间所在月份的 最后一天
function getMonthLastDate(param) {
  let years = param.getFullYear();
  let months = param.getMonth() + 1;
  let days = new Date(years, months, 0).getDate();
  return years + '-' + months + '-' + days;
}

export default {
  getCurrent,
  getMonthFirstDate,
  getMonthLastDate,
};
