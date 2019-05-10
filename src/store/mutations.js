var mutations={
  setMainTabIndex:(state,param)=>{
    state.mainTabIndex=param.amount.mainTabIndex;
  },
  setDrillTabIndex:(state,param)=>{
    state.drillTabIndex=param.amount.drillTabIndex;
  },
  setActionTypeData:(state,param)=>{
    state.actionTypeData=param.amount.actionTypeData;
  },
  setTapTabData:(state,param)=>{
    state.tapTabData=param.amount.tapTabData;
  },

};
export default mutations;
