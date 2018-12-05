import { NgModule } from '@angular/core';

import { CwsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CwsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CwsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CwsSharedCommonModule {}
