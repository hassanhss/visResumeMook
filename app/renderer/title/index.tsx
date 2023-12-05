import React from 'react';
import lessStyle from './index.less';

interface IPorps {
    /**
     * @description 标题
     */
    text: string;
    /**
     * @description 样式
     */
    styles?: React.CSSProperties;
}

function Title({text,styles}: IPorps){
    return (
        <div style={styles} className={lessStyle.title}>
            {text}
        </div>
    )
}

export default Title;