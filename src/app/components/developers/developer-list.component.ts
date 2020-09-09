import { Component, OnInit } from '@angular/core';
import {AbstractListComponent} from "../../common/abstract-list-component";
import {Developer} from "../../model/developer";
import {ActivatedRoute, Router} from "@angular/router";
import {DeveloperService} from "../../service/developer.service";

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html'
})
export class DeveloperListComponent extends AbstractListComponent<Developer> implements OnInit {

  public hiddenFields: string[] = ['sequenza_stati'];
  public labels = {};

  constructor(
      router: Router,
      private developerService: DeveloperService,
      protected route: ActivatedRoute
  ) {
    super(router, developerService,'developers')
  }

  ngOnInit(): void {
  }

  getId() {
    return this.element.uuid;
  }
}
