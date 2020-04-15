export default {
  state: {
    addr: '北京',
  },
  getters: {
    addrFormat(state) {
      return '== ' + state.addr + ' ==';
    },
  },
  mutations: {
    add(param) {
      this.state.addr += param + ', ';
    },
  },
  actions: {},
};
