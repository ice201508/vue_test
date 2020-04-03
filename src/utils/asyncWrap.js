// export default function(promise) {
//   return promise
//     .then((data) => {
//       return [null, data];
//     })
//     .catch((err) => {
//       return [err];
//     });
// }

// 最终版完善的异步函数
// https://www.jdon.com/idea/nodejs/error-first-callbacks.html
// 回调模式，回调函数的第一个参数保留给error对象
export default function(promise, errProps = {}, errFirst = true) {
  console.log(1, typeof promise, promise instanceof Promise);
  return promise
    .then((data) => {
      return errFirst ? [null, data] : [data, null];
    })
    .catch((err) => {
      // if (errProps) Object.assign(err, errProps);
      if (errProps) {
        return errFirst ? [errProps, null] : [null, errProps];
      }
      return errFirst ? [err, null] : [null, err];
    });
}
