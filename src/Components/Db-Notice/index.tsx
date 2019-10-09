import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './index.scss';

class Content {
  /** 标题 */
  public title: {
    /** 标题前缀 */
    pre?: string;
    /** 标题内容 */
    text: string;
  };
  public link?: {
    /** 普通链接|react-router提供的link */
    type?: 'normal' | 'spa';
    href: string;
    text: string;
    /** 自定义图标 */
    icon?: React.ReactNode;
  };
  public content: React.ReactNode[];
}

export class Props {
  /** 容器样式 */
  public style?: React.CSSProperties = {};
  /** 容器类名 */
  public className?: string = '';
  /** 内容 */
  public content: Content;
}

DbNotice.defaultProps = new Props();

export default function DbNotice(props: Props) {
  if (
    _.isEmpty(props.content) ||
    _.isEmpty(props.content.title) ||
    _.isEmpty(props.content.content)
  ) {
    window.console.warn(
      `error:: content属性，以及content中的title、content中的content不可为空！！`,
    );
    return null;
  }
  return (
    <div className={`db-top-notice ${props.className}`} style={props.style}>
      <div className="db-top-notice-tit">
        <div className="tit-cont">
          {!_.isNil(props.content.title.pre) && (
            <span className="tit-pre">{props.content.title.pre}</span>
          )}
          {props.content.title.text}
        </div>
        {(() => {
          if (!_.isEmpty(props.content.link)) {
            if (
              props.content.link.type === 'normal' ||
              !props.content.link.type
            ) {
              return (
                <a href={props.content.link.href}>
                  {props.content.link.text}
                  {_.isNil(props.content.link.icon) ? (
                    <Icon type="right" />
                  ) : (
                    props.content.link.icon
                  )}
                </a>
              );
            } else {
              return (
                <Link to={props.content.link.href}>
                  {props.content.link.text}
                  {_.isNil(props.content.link.icon) ? (
                    <Icon type="right" />
                  ) : (
                    props.content.link.icon
                  )}
                </Link>
              );
            }
          } else {
            return null;
          }
        })()}
      </div>
      <div className="db-top-notice-content">
        {props.content.content.map((item, index) => {
          return <p key={`${index}-${_.uniqueId()}`}>{item}</p>;
        })}
      </div>
    </div>
  );
}
