import {Component} from '@angular/core';
import {AbstractEditComponent} from "../../common/abstract-edit-component";
import {Developer} from "../../model/developer";
import {DeveloperService} from "../../service/developer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng";

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html'
})
export class DeveloperEditComponent extends AbstractEditComponent<Developer> {

  constructor(
      router: Router,
      private developerService: DeveloperService,
      protected route: ActivatedRoute,
      private confirmationService: ConfirmationService
  ) {
    super(router, route, developerService, 'developers')
  }

  getId() {
    return this.element.uuid;
  }

  createInstance(): Developer {
    return new Developer();
  }

  public confirmDelete() {
    this.confirmationService.confirm({
      message: 'Confermi la eliminazione?',
      header: 'Attenzione!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete();
      },
      reject: () => {
      }
    });
  }

  onFileSelect(event) {
    console.log(event.files[0])
  }

  onFileUpload(event) {
    console.log(event.files[0])
  }
}
