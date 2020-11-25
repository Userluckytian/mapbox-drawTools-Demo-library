import { NgModule } from '@angular/core';
import { DrawComponent } from './draw.component';
import { DrawService } from './draw.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DrawComponent],
  imports: [CommonModule
  ],
  providers: [DrawService],
  exports: [DrawComponent]
})
export class DrawModule { }
