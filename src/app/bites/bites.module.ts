import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitesRoutingModule } from './bites-routing.module';
import { BitesComponent } from './bites.component';
import { BiteListComponent } from './bite-list/bite-list.component';
import { BiteComponent } from './bite/bite.component';
import { ContentToplineComponent } from './bite/content/content-topline/content-topline.component';
import { ContentChartComponent } from './bite/content/content-chart/content-chart.component';
import { BiteService } from './shared/bite.service';
import { SortablejsModule } from 'angular-sortablejs';
import { RecipeService } from './shared/recipe.service';
import { HxlproxyService } from 'hxl-preview-ng-lib';
import { CookBookService } from 'hxl-preview-ng-lib';
import { AnalyticsService } from 'hxl-preview-ng-lib';
import { InlineEditComponent } from './shared/inline-edit/inline-edit.component';
import { FormsModule } from '@angular/forms';
import { PersistService } from './shared/persist.service';
import { HdxPersistService } from './shared/persist/hdx-persist.service';
import { ContentTimeseriesChartComponent } from './bite/content/content-timeseries-chart/content-timeseries-chart.component';
import { CommonModule as MyCommonModule } from '../common/common.module';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { SimpleModule } from 'hxl-preview-ng-lib';

@NgModule({
  imports: [
    CommonModule,
    BitesRoutingModule,
    SortablejsModule,
    FormsModule,
    MyCommonModule,
    SimpleModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    BitesComponent,
    InlineEditComponent
  ],
  declarations: [BitesComponent, BiteListComponent, BiteComponent, ContentToplineComponent, ContentChartComponent, InlineEditComponent,
    ContentTimeseriesChartComponent],
  providers: [
    BiteService,
    RecipeService,
    HxlproxyService,
    CookBookService,
    AnalyticsService,
    {
      provide: PersistService,
      useClass: HdxPersistService
    }
  ]
})
export class BitesModule { }
