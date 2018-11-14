import { NgModule } from '@angular/core';
import { OneComponent } from './one/one';
import { TwoComponent } from './two/two';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [OneComponent,
    TwoComponent],
	imports: [
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [OneComponent,
    TwoComponent]
})
export class ComponentsModule {}
