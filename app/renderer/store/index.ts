import logger from 'redux-logger';
import RCReduxModel from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// 👇 引入我们写好的 model
import globalModel from './globalModel';

// 👇 这里只需要调用 RcReduxModel 实例化一下得到最后的 reduxModel
const reduxModel = new RCReduxModel([globalModel]);

// 👇 无侵入式的使用 Redux，即使你写最原始的 reducer 也照样支持
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
