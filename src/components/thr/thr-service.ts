import {ComponentRequest} from '@/components/thr/component-request';
import {DetailContent} from '@/components/thr/detail-content';

export class ThrService {
  public getData(request: ComponentRequest): Promise<DetailContent> {
    return  new Promise((resolve) => {
      setTimeout(() => {
        resolve({data: `搜索结果更新：${new Date().toLocaleString()}`, total: 12});
      }, 2000);
    });
  }
}
export const thrSev = new ThrService();
export const thrSev2 = new ThrService();
export const thrSev3 = new ThrService();
