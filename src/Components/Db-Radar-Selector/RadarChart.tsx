import * as React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
import * as _ from 'lodash';
import DataSet from '@antv/data-set';

const { DataView } = DataSet;

function transform(data: { [props: string]: any }[]) {
  const itemRes: any[] = [];
  _.isArray(data) &&
    data.forEach((item: { [props: string]: any }) => {
      const { indexName, indexValue, targetValue } = item;
      itemRes.push({
        item: indexName,
        indexValue: parseFloat(indexValue),
        targetValue: parseFloat(targetValue),
      });
    });

  return itemRes;
}

class Props {
  title? = '';

  className? = '';

  style?: { [propName: string]: any } = {};

  size: {
    width: number;
    height: number;
  } = {
    width: 400,
    height: 400,
  };

  data: object[] = [];

  // 展示数据
  forceFit = false;

  // 是否自适应外部容器大小
  scale?: { [propName: string]: any } = {};

  crood?: { [propName: string]: any } = {
    radius: 1,
  };

  // 坐标系
  axises?: { [props: string]: any }[] = [];

  // 坐标轴
  tooltip?: boolean | { [propName: string]: any } = false;

  // 提示框
  geom?: {
    position?: [] | string;
    color?: [] | string | ((params?: any) => any);
    size?: number;
  } = {};

  // 图表
  lineGeom?: {
    position?: [] | string;
    color?: [] | string | ((params?: any) => any);
    size?: number;
  } = {};

  // 图表
  pointGeom?: {
    position?: [] | string;
    color?: [] | string | ((params?: any) => any);
    size?: number;
  } = {};

  // 图表
  legend?: any = false;

  active = '';

  onTooltipChange: (params?: any) => any = () => {};
}

// 雷达图
export default class RadarTabs extends React.Component<Props, any> {
  static defaultProps = new Props();

  onTooltipChange = e => {
    const { onTooltipChange, data } = this.props;
    const { items } = e;
    const { title } = items[0];
    data.map((item: { [props: string]: any }) => {
      if (item.indexName === title) {
        onTooltipChange && onTooltipChange(item);
      }
    });
  };

  render() {
    const {
      title,
      style,
      forceFit,
      size,
      data,
      scale,
      crood,
      axises,
      tooltip,
      legend,
      geom,
      lineGeom,
      pointGeom,
    } = this.props;

    const { width, height } = size;
    const containerStyle = !forceFit
      ? {
          ...size,
          ...style,
        }
      : {};

    const dv = new DataView().source(transform(data));
    dv.transform({
      type: 'fold',
      fields: ['indexValue'], // 展开字段集
      key: 'key', // key字段
      value: 'score', // value字段
      // retains: [ 'targetValue' ]
    });

    const styles = { fontSize: '12px' };

    return (
      <div className={'bees-radar'} style={containerStyle}>
        {title && <div className="bees-radar-title">{title}</div>}

        <Chart
          width={width}
          height={height}
          padding={20}
          scale={scale}
          data={dv}
          forceFit={forceFit}
          onTooltipChange={this.onTooltipChange}
          styles={styles}
        >
          {/* 坐标类型 */}
          <Coord type="polar" {...crood} />

          {/* 坐标轴 */}
          {axises &&
            axises.map(axias => {
              return <Axis key={axias.name} {...axias} />;
            })}

          {/* 提示框 */}
          {tooltip && <Tooltip {...(tooltip as any)} hideMarkers={true} />}

          {legend && <Legend name="key" marker="square" position="top-right" />}

          {(geom || lineGeom) && (
            <Geom
              type="line"
              position={'item*score' as any}
              {...((geom || lineGeom) as any)}
              select={[
                true,
                {
                  mode: 'single', // 选中模式，单选、多选
                  cancelable: false, // 选中之后是否允许取消选中，默认允许取消选中
                  animate: true, // 选中是否执行动画，默认执行动画
                },
              ]}
            />
          )}

          {pointGeom && (
            <Geom
              type="point"
              position="item*score"
              color="key"
              shape="circle"
              size={1}
              style={{
                stroke: '#fff',
                lineWidth: 1,
                fillOpacity: 1,
              }}
              select={[
                true,
                {
                  mode: 'single', // 选中模式，单选、多选
                  cancelable: false, // 选中之后是否允许取消选中，默认允许取消选中
                  animate: true, // 选中是否执行动画，默认执行动画
                },
              ]}
            />
          )}

          <Geom type="area" position="item*score" />
        </Chart>
      </div>
    );
  }
}
