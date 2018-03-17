import { Injectable } from '@angular/core';
import { Cache } from '../library/cache';
import { Possibility } from '../../gacha/interface/possibility';

@Injectable()
export class StateService {
  enableProtection = true;
  // 缓存对象，包含抽取的历史记录，以及已经加载过的URL历史
  // 预载时会先通过缓存对象筛选URL是否保留有记录，如果保留有记录则不再发送请求
  cache = new Cache();
  // 以下为全局的抽取配置储存，第一次由路由守卫的调用 load-config 进行 GET 请求加载，确保初始化完成
  version = '加载中...';
  // 全局抽取可能性配置
  possibility: {[key: string]: any | Possibility} = {};
  // 全局界面配置
  UI: {
    precision: {[key: string]: string};
    standard: {[key: string]: string};
    extension: {[key: string]: string};
    equipment: {[key: string]: string};
  };
  about:  {[key: string]: {
    title ?: string,
    body ?: string[]
  }} = {};
}
