import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Permit} from '../directives/permit';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule],
    declarations: [Permit],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, Permit]
})
export class MySharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MySharedModule,
            providers: []
        };
    }
}

@NgModule({
    exports: [MySharedModule]
})
export class MySharedRootModule {
}
