import {LazyLoadEvent, Message} from 'primeng/primeng';
import {AbstractService} from './abstract-service';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {Table} from 'primeng/table';

export abstract class AbstractListComponent<T> implements OnInit {

    msgs: Message[] = [];

    element: T = null;
    errorMessage: string;
    model: T[] = [];
    listSize: number;

    firstReload: boolean;

	public lang_it = {
		closeText: "Chiudi",
		prevText: "&#x3C;Prec",
		nextText: "Succ&#x3E;",
		currentText: "Oggi",
		monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
			"Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
		monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu",
			"Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
		dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
		dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
		dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
		weekHeader: "Sm",
		dateFormat: "dd/mm/yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ""
	};

    constructor(protected router: Router,
                public service: AbstractService<T>,
                public path: string) {
    }

    ngOnInit() {
        this.service.buildSearch();
        this.firstReload = true;
    }

    public loaddata(firstReload: boolean, datatable?: any) {
        this.preLoaddata();
        this.service.getList()
            .subscribe(
                model => {
                    this.model = <T []>model;
                    this.listSize = this.service.listSize;
                    this.postList();
                },
                error => this.errorMessage = <any>error);
    }

    public preLoaddata() {
    }

	protected preLoad(event: LazyLoadEvent, datatable?: any) {
		if (event.sortField) {
			this.service.search.orderBy =
				event.sortField + (event.sortOrder > 0 ? ' ASC' : ' DESC');
		}
		this.manageFilters(event);
	}

	protected manageFilters(event: LazyLoadEvent) {
	}

    public lazyLoad(event: LazyLoadEvent, datatable?: any) {
        if (!this.firstReload) {
            this.service.search.startRow = event.first;
        }
        this.service.search.pageSize = event.rows;
		this.preLoad(event, datatable);
        this.loaddata(this.firstReload, datatable);
        if (this.firstReload) {
            this.firstReload = false;
        }
    }

  protected defaultCriteria() {
    this.service.buildSearch();
  }

    public refresh(datatable: Table) {
        this.clearMsgs();
        if ( datatable.lazy) {
          datatable.reset();
        } else {
          // lo simulo
          this.lazyLoad({}, datatable);
        }
    }

    public reload(datatable: Table) {
        this.service.search.startRow = 0;
        this.refresh(datatable);
    }

    public reset(datatable: Table) {
        this.service.buildSearch();
        this.refresh(datatable);
    }

    public newElement(): T {
        throw new Error('override this');
    }

    public onRowSelect(event: T, focusable: any) {
        this.element = event;
        if (focusable) {
            focusable.focus();
        }
    }

    public getNavigateOnView() {
        return null;
    }

    public getNavigateOnEdit() {
        return null;
    }

    public postSave() {
    }

    public postUpdate() {
    }

    public postDelete() {
    }

    public save() {
        this.clearMsgs();
        this.service.persist(this.element).subscribe(
            element => {
                this.addInfo('Salvataggio completato con successo. ');
                this.element = this.newElement();
                this.loaddata(false);
                this.postSave();
            },
            error => {
                this.addError('Impossibile completare il salvataggio. Si prega di riprovare. ');
            }
        );
    }

    public undo(focusable: any) {
        this.clearMsgs();
        this.element = this.newElement();
        if (focusable) {
            focusable.focus();
        }
    }

    public delete(element: T) {
        this.clearMsgs();
        this.service.delete(this.getId()).subscribe(
            result => {
                this.addInfo('Eliminazione completata con successo. ');
                this.element = this.newElement();
                this.loaddata(false);
                this.postDelete();
            }, error => {
                this.addError('Impossibile completare l\'eliminazione. ');
            }
        );
    }


    public update() {
        this.clearMsgs();
        this.service.update(this.element).subscribe(
            element => {
                this.addInfo('Modifica completata con successo. ');
                this.element = this.newElement();
                this.loaddata(false);
                this.postUpdate();
            },
            error => {
                this.addError('Impossibile completare la modifica. ');
            }
        );
    }

    public postList() {
    }

    public addInfo(message: string) {
        this.msgs.push({severity: 'info', summary: 'Informazioni: ', detail: message});
    }

    public addWarn(message: string) {
        this.msgs.push({severity: 'warn', summary: 'Attenzione: ', detail: message});
    }

    public addError(message: string) {
        this.msgs.push({severity: 'error', summary: 'Errore: ', detail: message});
    }

    public clearMsgs() {
        this.msgs = [];
    }

    abstract getId();

  public view(element: T) {
    this.element = element;
    this.router.navigate(['/' + this.path + '/view', this.getId()]);
  }

  public edit(element: T) {
    this.element = element;
    this.router.navigate(['/' + this.path + '/edit', this.getId()]);
  }

  public back() {
    this.router.navigate(['/']);
  }

  annulla() {
    const lastIndexOfSlash = this.path.lastIndexOf('/');
    let backPath = this.path.substring(0, lastIndexOfSlash + 1);
    if ( backPath === '' ) {
      backPath = 'home';
    }
    this.router.navigate(['/' + backPath]);
  }


}
