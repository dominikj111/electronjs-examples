import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxChartComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxchart';
import { jqxKanbanComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxkanban';

@NgModule({
    imports: [CommonModule],
    declarations: [jqxChartComponent, jqxKanbanComponent],
    exports: [jqxChartComponent, jqxKanbanComponent]
})
export class JQWidgetsModule { }
