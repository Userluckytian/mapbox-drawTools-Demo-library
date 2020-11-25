（1）cmd命令行先指向projects路径下运行：npm run draw 生成dist目录
（2）cmd命令行指向dist/draw路径下运行：npm pack生成draw.0.0.1.tgz压缩包
（3）将压缩包放到其他项目下运行npm install draw.0.0.1.tgz

本项目并没将以下依赖同时打包，所以不会出现重复npm i的问题。用户需要自行安装以下依赖项。

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

