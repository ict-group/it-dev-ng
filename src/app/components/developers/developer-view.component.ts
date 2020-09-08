import {Component, OnInit} from '@angular/core';
import {AbstractViewComponent} from "../../common/abstract-view-component";
import {Developer} from "../../model/developer";
import {ActivatedRoute, Router} from "@angular/router";
import {DeveloperService} from "../../service/developer.service";

@Component({
  selector: 'app-developer-view',
  templateUrl: './developer-view.component.html'
})
export class DeveloperViewComponent extends AbstractViewComponent<Developer> {

  constructor(
      router: Router,
      private developerService: DeveloperService,
      protected route: ActivatedRoute
  ) {
    super(router, route, developerService, 'developers')
  }

  getId() {
    return this.element.uuid;
  }
}
