import * as React from 'react';
import * as _ from 'lodash';
import { Row, Col } from 'antd';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { urlParser } from './utils';
import './App.scss';

const context = (require as any).context('./Components', true, /doc\.tsx/);
const componentDocs: string[] = context.keys();

class Wrapper extends React.Component<any, any> {
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
          {this.props.children}
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
              <Wrapper>
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
