/* eslint-disable */
import * as React from 'react';
import { Divider } from 'antd';
import * as util from './index';

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h3>util方法</h3>
        <p>包含各种通用方法</p>
        <Divider />
        <ul>
          <li>
            urlParser:解析url（hash-router）
            <p>
              util.urlParser('/github.com/#/index?cc=dd') ::
              {JSON.stringify(util.urlParser('/github.com/#/index?cc=dd'))}
            </p>
          </li>
          <li>
            getUID:获取唯一id
            <p>util.getUID() :: {util.getUID()}</p>
          </li>
          <li>
            getNextItem: 循环获取一个序列中的下一项
            <p>
              const arr=['#1','#2','#3']; <br />
              const getNextItem=util.getNextItem()(arr); <br />
              getNextItem();
              <br /> getNextItem();
              <br />
              getNextItem();
              <br /> getNextItem();
            </p>
            <p>
              {(() => {
                const arr = ['#1', '#2', '#3'];
                const getNextItem = util.getNextItem()(arr);
                return (
                  <>
                    {getNextItem()}
                    <br />
                    {getNextItem()}
                    <br />
                    {getNextItem()}
                    <br />
                    {getNextItem()}
                  </>
                );
              })()}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
