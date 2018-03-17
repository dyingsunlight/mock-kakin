import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoadConfigService implements CanActivate{
  constructor(
    protected state: StateService,
    protected http: HttpClient,
    protected loading: LoadingService
    ) {}
  canActivate(): Observable<boolean> {
    return this.getConfig();
  }
  getConfig(path = './assets/config/default.json') {
    this.loading.show();
    return this.http.get(path).map(config => {
      this.loading.close();
      // 加载补给配置和界面相关信息
      this.state.possibility = config['supplement'];
      this.state.UI = config['user-interface']['supplement'];
      this.state.version = config['user-interface']['version'];
      this.state.about = config['user-interface']['about'];
      return true;
    });
  }
}
