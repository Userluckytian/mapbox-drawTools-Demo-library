import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DrawService } from './draw.service';



@Component({
  selector: 'lib-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit, OnChanges, OnDestroy {

  data = [
    {
      id: '框选',
      mode: 'draw_rectangle'
    },
    {
      id: '圆选',
      mode: 'draw_circle'
    },
    {
      id: '多边',
      mode: 'draw_polygon'
    }
  ];

  draw = null;

  @Input() mapboxglmap = null;
  @Output() geometry = new EventEmitter<any>();

  constructor(private drawService: DrawService) { }

  ngOnInit() {
  }

  init(map) {
    map.on('load', function () {
      this.draw = this.drawService.getDrawTools();
      map.addControl(this.draw, 'bottom-right');
    });
    this.addLister(map);
  }

  addLister(map) {
    const self = this;
    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);
    // tslint:disable-next-line: typedef
    function updateArea(e) {
      self.geometry.emit(e);
    }
  }

  // tslint:disable-next-line: typedef
  changesMode(e) {
    this.draw = null; // 下面的getDrawTools清不掉，所以我这里重新写的清空！
    // 先清空上次绘制
    this.drawService.resetDraw(this.mapboxglmap);
    this.draw = this.drawService.getDrawTools();
    this.mapboxglmap.addControl(this.draw, 'bottom-right');
    // 更换模式
    this.draw.changeMode(e.mode);
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.mapboxglmap && change.mapboxglmap.currentValue) {
      this.mapboxglmap = change.mapboxglmap.currentValue;
      this.init(this.mapboxglmap);
    }
  }

  ngOnDestroy() {
    this.draw = null;
    this.mapboxglmap = null;
  }

}
