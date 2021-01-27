import {Moment} from 'moment';

export class ComponentRequest {
  public createRangeTime: Moment[] = [];
  public updateRangeTime: Moment[] = [];
  public searchText: string = '';
  public createRangeTimeStartTime?: Moment;
  public createRangeTimeEndTime?: Moment;
  public updateRangeTimeStartTime?: Moment;
  public updateRangeTimeEndTime?: Moment;
  public formatData() {
    if (this.createRangeTime && this.createRangeTime.length > 1) {
        this.createRangeTimeStartTime =  this.createRangeTime[0];
        this.createRangeTimeEndTime = this.createRangeTime[1];
    }
    if (this.updateRangeTime && this.updateRangeTime.length > 1) {
      this.updateRangeTimeStartTime =  this.updateRangeTime[0];
      this.updateRangeTimeEndTime = this.updateRangeTime[1];
    }
  }
}
