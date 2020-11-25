import { Injectable } from '@angular/core';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';
import { CircleMode, DragCircleMode, DirectMode, SimpleSelectMode } from 'mapbox-gl-draw-circle';

import DrawRectangle from 'mapbox-gl-draw-rectangle-mode';


@Injectable({
  providedIn: 'root'
})
export class DrawService {

  // 定义绘图工具变量
  private draw = null;
  constructor() {}
  // 获取绘制工具并执行绘制
  public getDrawTools(): MapboxDraw{
    this.draw = this.draw ? this.draw : new MapboxDraw({
      displayControlsDefault: false,
      controls: {},
      modes: {
        ...MapboxDraw.modes,
        draw_rectangle: DrawRectangle,
        draw_circle  : CircleMode,
        drag_circle  : DragCircleMode,
        direct_select: DirectMode,
        simple_select: SimpleSelectMode
      }
    });
    return this.draw;
  }

  // 按照id：数组进行清空绘制;
  // tslint:disable-next-line: typedef
  clearById(ids){
    ids.forEach(element => {
      this.draw.delete(element);
    });
  }

  // 清空绘制
  // tslint:disable-next-line: typedef
  public resetDraw(map){
    if (this.draw){
       this.draw.deleteAll();
       map.removeControl(this.draw);
       this.draw = null;
     }
  }
}
