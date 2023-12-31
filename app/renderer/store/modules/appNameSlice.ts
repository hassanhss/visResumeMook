import { createSlice } from "@reduxjs/toolkit";

// 定义初始化数据
let initialState = {
  appName: 'Resume Desktop',
};

// 定义一个切片
let appNameSlice = createSlice({
  name: "appName",
  initialState,
  reducers: {
    // 定义一个数字递增的actions action.type为 上面的定义的name/和该对象的方法名
    //   即action.type=count/increment
    // 在这里一般都是使用同步的reducer
    nameChange: (state, action) => {
      console.log('调用进来了')
      return {
        ...state,
        appName : action.payload
      }
    },
  },
});

// 导出该action
export const { nameChange } = appNameSlice.actions;

// 默认导出,到处的文件需要在store入口文件引入
export default appNameSlice.reducer;
