import { createSlice } from "@reduxjs/toolkit";

// 定义初始化数据
let initialState = {
  counter: 0 as number,
};

// 定义一个切片
const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    // 定义一个数字递增的actions action.type为 上面的定义的name/和该对象的方法名
    //   即action.type=count/increment
    // 在这里一般都是使用同步的reducer
    increment: (state, action) => {
      console.log('调用进来了')
      console.log(state, "state");
      console.log(action, "action");
      console.log(initialState.counter)
    },
  },
});

// 导出该action
export const { increment } = counterSlice.actions;

// 默认导出,到处的文件需要在store入口文件引入
export default counterSlice.reducer;
