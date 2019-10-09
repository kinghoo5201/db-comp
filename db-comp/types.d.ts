/** 这里可以定义全局的接口、模块 */

/** 全局类型定义 */
declare namespace def {
  /** 通用万能对象 */
  export interface ICommonObj {
    [propName: string]: any;
  }
  /** 组件中通用类型 */
  namespace component {
    export type ICommonCallback = (...arg: any) => any;
  }
  /** 通用model中类型 */
  namespace models {
    /** 使用键值修改的reducer的payload */
    export interface ICommonPayload {
      path: string;
      value: any;
    }
    /** connect函数类型 */
    export type IConnectFn = (param: def.ICommonObj) => def.ICommonObj;
  }
}
