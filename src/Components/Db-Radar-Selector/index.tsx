import * as React from 'react';
import * as _ from 'lodash';
import RadarChart from './RadarChart';
import './index.scss';

class Props {
  activeKey?: string = '';

  className?: string = '';

  style?: React.CSSProperties = {};

  data: {
    /** 指标名 */
    indexName: string;
    /** 指标值 */
    indexValue: string | number;
    /** 目标值 */
    targetValue: string | number;
  }[] = [];

  handleTabClick?: (params?: any) => any = () => {};
}

class State {
  activeKey: string = '';
}

export default class RaderTabs extends React.Component<Props, State> {
  static defaultProps = new Props();
  state = new State();
  componentWillMount() {
    window.addEventListener('click', this.onRadarLabelClick);
    window.addEventListener('touch', this.onRadarLabelClick);
  }

  componentDidMount() {
    this.handleProps(this.props);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.handleProps(nextProps);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onRadarLabelClick);
    window.removeEventListener('touch', this.onRadarLabelClick);
  }

  handleProps = (props: Props) => {
    const activeKey = _.isNil(props.activeKey)
      ? _.get(props.data, '[0].indexName', '')
      : props.activeKey;
    this.setState({ activeKey });
  };

  onRadarLabelClick = (e: any) => {
    const { data, handleTabClick } = this.props;
    const { activeKey } = this.state;
    const { className, innerText } = e.target;
    if (className === 'radar-label') {
      const indexName = innerText.slice(0, innerText.lastIndexOf('（')).trim();
      if (indexName !== activeKey) {
        data.forEach((item: { [props: string]: any }) => {
          if (item.indexName === indexName) {
            this.setState({ activeKey: item.indexName }, () => {
              handleTabClick && handleTabClick(item);
            });
          }
        });
      }
    }
  };

  render() {
    const { data, handleTabClick } = this.props;
    const { activeKey } = this.state;
    const scale = {
      score: {
        min: 0,
        max: 100,
      },
    };
    const crood = {
      radius: 0.6,
    };
    const axises = [
      {
        name: 'item',
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null,
          },
          hideFirstLine: false,
        },
        label: {
          htmlTemplate: (text: string) => {
            let index = 0;
            let itemObj: { [propName: string]: any } = {};
            data.some((item: { [propName: string]: any }, idx: number) => {
              if (item.indexName === text) {
                index = idx;
                itemObj = item;
                return true;
              }
            });
            const len = data.length;
            let width = '6.5rem';
            const { indexName, indexValue, indexUnit } = itemObj;
            switch (len) {
              case 4:
                width = index % 2 !== 0 ? '5.4rem' : '12rem';
                break;
              default:
            }
            const isActive = activeKey === indexName;
            return `
            <span class='radar-label' style='display: inline-block; cursor: pointer; text-align: center;
              width: ${width}; ${
              isActive ? 'font-weight: 600; color: #1890FF' : ''
            }'>
              ${indexName}<br />（${indexValue}）</span>
          `;
          },
        },
      },
      {
        name: 'score',
        visible: true,
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null,
          },
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
        label: null,
      },
    ];
    const geom = {
      color: 'rgba(24,144,255,1)',
      size: 2,
    };

    return (
      <div
        className={`bees-m-card ${this.props.className}`}
        style={{ ...this.props.style }}
      >
        <div className="quota-radar">
          <RadarChart
            size={{ width: 344.64, height: 250 }}
            data={data}
            scale={scale}
            axises={axises}
            crood={crood}
            geom={geom}
            pointGeom={{}}
            active={activeKey}
            forceFit
            onTooltipChange={handleTabClick}
          />
        </div>
      </div>
    );
  }
}
