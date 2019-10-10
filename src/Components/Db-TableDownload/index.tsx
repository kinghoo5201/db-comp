import * as React from 'react';
import * as _ from 'lodash';

export class Props {
  /** 容器类名 */
  public className?: string = '';
  /** 容器样式 */
  public style?: React.CSSProperties = {};
  /** 按钮类名 */
  public btnClassName?: string = '';
  /** 按钮样式 */
  public btnStyle?: React.CSSProperties = {};
  /** 按钮文案 */
  public btnText?: string = 'Download';
  /** 下载的文件名 */
  public fileName?: string = 'download';
  /** 下载前操作 */
  public preDownload?: () => void;
  /** 下载后操作 */
  public afterDownload?: () => void;
}

class State {}

export default class Table2Excel extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  static base64(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
  }

  static format(s, c) {
    return s.replace(/{(\w+)}/g, (m, p) => c[p]);
  }

  public handleDownload = () => {
    if (_.isNil(this.props.children)) {
      window.console.warn(`error::Table2Excel 组件需要包裹table！`);
      return;
    }
    if (!this.wrapper) {
      // 组件未加载完毕
      return;
    }
    const table = this.wrapper.querySelector('table');
    if (!table) {
      window.console.warn(`error::Table2Excel children中不存在table！`);
      return;
    }
    this.props.preDownload && this.props.preDownload();
    const uri = 'data:application/vnd.ms-excel;base64,';
    const template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
      'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
      'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
      'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
      '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' +
      'xml><![endif]--></head><body>{table}</body></html>';
    const context = {
      worksheet: 'sheet1',
      table: table.outerHTML,
    };

    const a = document.createElement('a');
    a.download = (this.props.fileName || 'download') + '.xls';
    a.innerHTML = 'download';
    a.href = uri + Table2Excel.base64(Table2Excel.format(template, context));
    a.click();
    a.remove();
    this.props.afterDownload && this.props.afterDownload();
  };

  public wrapper: HTMLDivElement;

  public render() {
    return (
      // 可以通过传入的className来freestyle按钮样式，比如hover显示等等。。。
      <div
        className={`Table-to-excel`}
        style={this.props.style}
        ref={node => {
          this.wrapper = node;
        }}
      >
        <button
          className={this.props.btnClassName}
          style={this.props.btnStyle}
          onClick={this.handleDownload}
        >
          {this.props.btnText}
        </button>
        {this.props.children}
      </div>
    );
  }
}
