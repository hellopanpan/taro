import { AnyAction } from 'redux';
import { CounterModelState } from './counter';
import { Dispatch } from 'dva-core';
export {
  CounterModelState,
};

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    counter?: boolean;
  };
}

export interface ConnectState {
  counter: CounterModelState;
  loading: Loading;
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps {
  dispatch?: Dispatch<AnyAction>;
}
