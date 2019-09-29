/* eslint-disable import/extensions */
import * as React from 'react';
import * as _ from 'lodash';
import { Row, Col, Icon, Tag } from 'antd';
import * as hljs from 'highlight.js';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { urlParser } from './utils';
import './App.scss';

const context = (require as any).context('./Components', true, /doc\.tsx$/);
const componentDocs: string[] = context.keys();

const totalContext = (require as any).context(
  './Components',
  true,
  /[^(doc)]\.((tsx)|(md)|(scss)|(ts)|(js))$/,
);
const totalContextKey = totalContext.keys();

class WrapProps {
  public path: string;
}
class WrapState {
  public files: string[] = [];
  public doc: string = '';
  public isDocShow: boolean = false;
  public sourceCode: def.ICommonObj = {};
  public selectedSource: string = '';
}
class Wrapper extends React.Component<WrapProps, WrapState> {
  public static defaultProps = new WrapProps();

  public state = new WrapState();

  public componentDidMount() {
    this.handleSelectKeys(this.props);
  }

  public componentWillReceiveProps(nextProps: WrapProps) {
    this.handleSelectKeys(nextProps);
  }

  public handleSelectKeys = (props: WrapProps) => {
    const keys: string[] = [];
    totalContextKey.forEach((key: string) => {
      if (this.props.path === key.split('/')[1]) {
        keys.push(key);
      }
    });
    this.setState({ files: keys }, () => this.handleData(props));
  };

  public handleData = (props: WrapProps) => {
    fetch(`/db-comp/src/Components/${props.path}/doc.tsx`)
      .then(res => res.text())
      .then(doc => this.setState({ doc }));
    this.state.files.forEach(file => {
      fetch(`/db-comp/src/Components/${file.replace(/^\.\//, '')}`)
        .then(res => res.text())
        .then(text => {
          this.setState({
            sourceCode: {
              ...this.state.sourceCode,
              [file]: text,
            },
          });
        });
    });
  };

  public render() {
    const urlObj = urlParser();
    return (
      <Row className="doc-page">
        <Col span={6} className="left-panel">
          {componentDocs.map(item => {
            const path = item.replace(/^\./, '').replace(/\.tsx$/, '');
            const text = item.split('/')[1];
            return (
              <Link
                key={path}
                to={path}
                className={`nav-link${urlObj.path === path ? ' active' : ''}`}
              >
                {text}
              </Link>
            );
          })}
        </Col>
        <Col span={18} className="right-panel">
          <div className="code-box">
            <div className="code-box-demo">{this.props.children}</div>
            <div className="code-box-actions">
              <Tag
                color={this.state.isDocShow ? '#2db7f5' : ''}
                onClick={() => {
                  this.setState({
                    isDocShow: !this.state.isDocShow,
                  });
                }}
                style={{ cursor: 'pointer' }}
              >
                查看demo代码
                <Icon type="code" title="展示demo源代码" />
              </Tag>
            </div>
            <div
              className={`highlight-wrapper ${
                this.state.isDocShow ? 'active' : ''
              }`}
            >
              <div className="highlight">
                <pre>
                  <code
                    className="hljs"
                    dangerouslySetInnerHTML={{
                      __html: hljs.highlightAuto(this.state.doc).value,
                    }}
                  />
                </pre>
              </div>
            </div>
            <div className="code-box-actions">
              {this.state.files.map(item => {
                return (
                  <Tag
                    key={item}
                    style={{ cursor: 'pointer' }}
                    color={this.state.selectedSource === item ? '#2db7f5' : ''}
                    onClick={() => {
                      this.setState({
                        selectedSource:
                          this.state.selectedSource === item ? '' : item,
                      });
                    }}
                  >
                    查看{item}
                    <Icon type="code" title={`展示${item}源代码`} />
                  </Tag>
                );
              })}
            </div>
            <div
              className={`highlight-wrapper ${
                this.state.selectedSource ? 'active' : ''
              }`}
            >
              <div className="highlight">
                <pre>
                  <code
                    className="hljs"
                    dangerouslySetInnerHTML={{
                      __html: hljs.highlightAuto(
                        _.get(
                          this.state.sourceCode,
                          this.state.selectedSource,
                          '',
                        ),
                      ).value,
                    }}
                  />
                </pre>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default class App extends React.Component<any, any> {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => {
              return (
                <Redirect
                  to={_.get(componentDocs, '[0]', '')
                    .replace(/^\./, '')
                    .replace(/\.tsx$/, '')}
                />
              );
            }}
          />
          {componentDocs.map(item => {
            const path = item.replace(/^\./, '').replace(/\.tsx$/, '');
            const Component = context(item).default;
            const Comp = () => (
              <Wrapper path={item.split('/')[1]}>
                <Component />
              </Wrapper>
            );
            return <Route exact key={path} path={path} component={Comp} />;
          })}
        </Switch>
      </HashRouter>
    );
  }
}
