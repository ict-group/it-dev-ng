import {AbstractService} from './abstract-service';
import {Router, ActivatedRoute} from '@angular/router';
import {Message} from 'primeng/primeng';
import {OnInit} from '@angular/core';

export abstract class AbstractEditComponent<T> implements OnInit {

    public msgs: Message[] = [];

    public editMode: boolean = false;
    public element: T = null;

  protected windowHeight: number;
  protected windowWidth: number;

    public lang_it = {
      closeText: 'Chiudi',
      prevText: '&#x3C;Prec',
      nextText: 'Succ&#x3E;',
      currentText: 'Oggi',
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu',
        'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
      dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      weekHeader: 'Sm',
      dateFormat: 'dd/mm/yy',
      firstDayOfWeek: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    };

    constructor(protected router: Router,
                protected route: ActivatedRoute,
                protected service: AbstractService<T>,
                public path: string) {
    }

    ngOnInit() {
        let id: string = this.route.snapshot.params['id'];
        if (id) {
            this.editMode = true;
            this.service.find(id).subscribe(
                element => {
                    this.element = <T>element;
                    this.postFind();
                },
                error => {
                    this.addError('Errore nel caricamento dei dati.' + ( error || ''));
                }
            );
        } else {
            this.editMode = false;
            this.element = this.createInstance();
            this.postCreate();
        }

      this.windowHeight = (window.innerHeight * 0.98);
      this.windowWidth = (window.innerWidth * 0.98);
    }

    postCreate() {
    }

    postFind() {
    }

    preSave(): boolean {
        return true;
    }

    preUpdate(): boolean {
        return true;
    }

    postSave() {
    }

    postUpdate() {
    }

    postDelete() {
    }

    save() {
        this.clearMsgs();
        this.editMode = false;
        if (!this.preSave()) {
            return;
        }
        this.service.persist(this.element).subscribe(
            element => {
                this.addInfo('Salvataggio completato con successo. ');
                this.element = <T>element;
                this.postSave();
                this.navigateAfterSave();
            },
            error => {
                this.addError('Impossibile completare il salvataggio. ' + ( error || ''));
                this.saveError();
            }
        );
    }

    saveError() {
    }

    update() {
        // console.log(JSON.stringify(this.element));
        this.clearMsgs();
        this.editMode = false;
        if (!this.preUpdate()) {
            return;
        }
        this.service.update(this.element).subscribe(
            element => {
                this.addInfo('Modifica completata con successo. ');
                this.element = <T>element;
                this.postUpdate();
                this.navigateAfterUpdate();
            },
            error => {
                this.addError('Impossibile completare la modifica. ' + ( error || ''));
                this.saveError();
            }
        );
    }

    delete() {
        this.clearMsgs();
        this.editMode = false;
        this.service.delete(this.getId()).subscribe(
            element => {
                this.postDelete();
                this.navigateAfterDelete();
                this.addInfo('Eliminazione completata con successo. ');
            }, error => {
                this.addError('Impossibile completare l\'eliminazione. ' + ( error || ''));
            }
        );
    }

    goToList() {
        this.clearMsgs();
        this.navigateToList();
    }

    public isEditMode(): boolean {
        return this.editMode;
    }

    public clearMsgs() {
        this.msgs = [];
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

    abstract createInstance(): T;

    abstract getId();

  navigateAfterDelete() {
    this.router.navigate(['/' + this.path + '/list']);
  }

  navigateAfterUpdate() {
    this.router.navigate(['/' + this.path + '/view', this.getId()]);
  }

  navigateAfterSave() {
    this.router.navigate(['/' + this.path + '/view', this.getId()]);
  }

  navigateToList() {
    this.router.navigate(['/' + this.path + '/list']);
  }

}
