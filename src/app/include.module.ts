import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundamentalNgxModule, ShellbarModule, TabsModule, SearchInputModule, TableModule } from 'fundamental-ngx';
import { AlertModule } from 'fundamental-ngx';
import { ButtonModule } from 'fundamental-ngx';
import { ButtonGroupModule } from 'fundamental-ngx';
import { FormModule } from 'fundamental-ngx';
import { IconModule } from 'fundamental-ngx';
import { IdentifierModule } from 'fundamental-ngx';
import { ImageModule } from 'fundamental-ngx';
import { InlineHelpModule } from 'fundamental-ngx';
import { TileModule } from 'fundamental-ngx';


@NgModule({
  declarations: [],
  imports: [
    FundamentalNgxModule,
    AlertModule,
    ButtonModule,
    ButtonGroupModule,
    FormModule,
    IconModule,
    IdentifierModule,
    ImageModule,
    InlineHelpModule,
    TileModule,
    ShellbarModule,
    TabsModule,
    SearchInputModule,
    TableModule
  ],
  exports: [
    FundamentalNgxModule,
    AlertModule,
    ButtonModule,
    ButtonGroupModule,
    FormModule,
    IconModule,
    IdentifierModule,
    ImageModule,
    InlineHelpModule,
    TileModule,
    ShellbarModule,
    TabsModule,
    SearchInputModule,
    TableModule
  ]
})
export class IncludeModule { }
