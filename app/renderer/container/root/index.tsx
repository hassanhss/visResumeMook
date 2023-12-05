// renderer/container/root/index.tsx
import React from 'react';
import './index.less';
import Log from '@assets/logo.png'
import { useHistory } from 'react-router';
import { Shell, shell } from 'electron';

function Root() {
  // 👇 通过 history.push 进行跳转
  const history = useHistory();

  const onRouterToLink = (text:string) => {
    if (text !== '简历') {
      shell.openExternal('https://github.com/PDKSophia/visResumeMook')
    } else {
      history.push('/resume')
    }
  }

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Log} alt=''/>
        <div styleName="title">VisResumeMook</div>
        <div styleName='tips'>this is a profile make platform</div>
        <div styleName='action'>
          {['介绍','简历','源码'].map((text,index)=>{
              return <div key={index} styleName='item'>{text}</div>
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
