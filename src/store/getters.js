var getters={
  getMainTabIndex(state){
    return state.mainTabIndex;
  },
  getDrillTabIndex(state){
    return state.drillTabIndex;
  },

  getActionTypeData(state){
  return state.actionTypeData;
},

  getTapTabData(state){
  return state.tapTabData;
},
};
export default getters;
