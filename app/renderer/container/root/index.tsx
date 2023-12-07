// renderer/container/root/index.tsx
import React from 'react';
import './index.less';
import Log from '@assets/logo.png'
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { useSelector } from 'react-redux';

function Root() {
  // 👇 通过 history.push 进行跳转
  const history = useHistory();

  const onRouterToLink = (router:TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url)
    } else {
      history.push(router.url)
    }
  }

  const appName = useSelector((state: any) => state.globalModel.appName);
  console.log('appName=',appName);

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
