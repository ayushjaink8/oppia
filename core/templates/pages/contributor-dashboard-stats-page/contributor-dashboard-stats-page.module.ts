// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Module for the splash page.
*/

import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'components/shared-component.module';
import { ContributorDashboardStatsPageComponent } from './contributor-dashboard-stats-page.component';
import { ContributorDashboardStatsPageRootComponent } from './contributor-dashboard-stats-page-root.component';
import { CommonModule } from '@angular/common';
import { ContributorDashboardStatsPageRoutingModule } from './contributor-dashboard-stats-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    ContributorDashboardStatsPageRoutingModule
  ],
  declarations: [
    ContributorDashboardStatsPageComponent,
    ContributorDashboardStatsPageRootComponent
  ],
  entryComponents: [
    ContributorDashboardStatsPageComponent,
    ContributorDashboardStatsPageRootComponent,
  ]
})
export class ContributorDashboardStatsPageModule {}
