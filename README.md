功能已经实现，也测试过了，样式还没调整！

声 明： 本组件基于mapbox

        1、安装依赖
            （1）npm i mapbox-gl-draw
            （2）npm i mapbox-gl-draw-circle
            （3）npm i mapbox-gl-draw-rectangle-mode

        2、引入： 在需要的模块中引入：
                 import { DrawModule } from 'draw';
                 @NgModule({
                    imports: [..., DrawModule],
                    ......
                  })
                  export class MyModule { }

        3、使用方法：在html模板中使用
                 <lib-draw [mapboxglmap]="mapboxglmap" (geometry)="getInfo($event)"></lib-draw>

        4、输入参数
            mapboxglmap：确保地图加载成功后作为参数传递给组件！

        5、输出参数
            用户绘制完成后，通过geometry参数获取用户绘制后的geometry信息！

