import { NgModule } from '@angular/core';
import { QuotationListComponent } from './quotation-list/quotation-list';
import { IonicModule } from 'ionic-angular/module';
@NgModule({
	declarations: [QuotationListComponent],
	imports: [IonicModule],
	exports: [QuotationListComponent]
})
export class ComponentsModule {}
