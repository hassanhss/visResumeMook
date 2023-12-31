// renderer/container/root/index.tsx
import React, { useEffect } from 'react';
import './index.less';
import Log from '@assets/logo.png'
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { useAppDispatch, useAppSelector } from '@src/store';
import { increment } from '@src/store/modules/appNameSlice';

function Root() {
  const { appName } = useAppSelector((state) => state.appName);
  const dispatch = useAppDispatch();
  console.log('使用redux获取到的值为')
  console.log(appName);

  useEffect(()=>{
    setTimeout(() => {
      console.log("3s 后修改...");
      dispatch(increment(1))
      console.log(appName)
    },3000);
  },[]);

  // 👇 通过 history.push 进行跳转
  const history = useHistory();

  const onRouterToLink = (router:TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url)
    } else {
      history.push(router.url)
    }
  }

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Log} alt=''/>
        <div styleName="title">VisResumeMook</div>
        <div styleName='tips'>this is a profile make platform</div>
        <div styleName='action'>
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)} >
                {router.text}
              </div>
            );
          })}
        </div>
        <div>{appName}</div>
        <div styleName='copyright'>
          <div styleName='footer'>
            <p styleName='copyright'>
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By hassan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
