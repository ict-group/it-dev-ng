import {Component} from '@angular/core';
import {AbstractEditComponent} from '../../common/abstract-edit-component';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService} from 'primeng';
import {Project} from '../../model/project';
import {ProjectService} from '../../service/project.service';
import {PropertyValue} from '../../model/property.value';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html'
})
export class ProjectEditComponent extends AbstractEditComponent<Project> {

    tagsArray: string[];
    public properties: PropertyValue[] = [];

    constructor(
        router: Router,
        private projectService: ProjectService,
        protected route: ActivatedRoute,
        private confirmationService: ConfirmationService
    ) {
        super(router, route, projectService, 'projects');
    }

    initArrays(){
        if (this.element.tags){
            this.tagsArray = this.element.tags.split(',');
        }
        if (this.element.properties) {
            this.properties = this.element.properties;
        }
    }

    reverseArray(){
        if (this.tagsArray){
            this.element.tags = this.tagsArray.join(',');
        }
    }

    postFind() {
        this.initArrays();
    }

    getId() {
        return this.element.uuid;
    }

    createInstance(): Project {
        return new Project();
    }

    onRowEditInit(propertyValue: PropertyValue) {
    }

    onRowEditSave(propertyValue: PropertyValue) {
    }

    onRowEditCancel(index: number) {
        delete this.properties[index];
    }

    addProperty() {
        const pro: PropertyValue = new PropertyValue();
        this.properties = [...this.properties, pro];
    }

    preUpdate(): boolean {
        this.reverseArray();
        this.adjustProperties();
        return super.preUpdate();
    }

    preSave(): boolean {
        this.reverseArray();
        this.adjustProperties();
        return super.preSave();
    }

    adjustProperties() {
        if (this.properties) {
            this.element.properties = this.properties;
        }
        this.service.update(this.element).subscribe(
            result => console.log(result)
        );
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

}
