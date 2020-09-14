import {Search} from './search';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {promise} from 'selenium-webdriver';
import * as moment from 'moment/moment';


export abstract class AbstractService<T> {

    listSize: number;
    search: Search<T>;

    protected progress$: Observable<number>;
    protected progress = 0;
    protected progressObserver: any;

    protected static setUploadUpdateInterval(interval: number): void {
        setInterval(() => {
        }, interval);
    }

    // constructor(protected url: string,
    // 			protected httpClient: HttpClient) {
    //
    // 	this.initialize();
    // }

    constructor(protected url: string, protected httpClient: HttpClient) {
        this.initialize();

        this.progress$ = new Observable<number>(observer => {
            this.progressObserver = observer;
        });
    }

    private initialize() {
        this.buildSearch();
        this.init();
    }

    protected init() {

    }

    public getList(): Observable<T []> {
        let params = new HttpParams();
        params = this.applyRestrictions(params, this.search);
        return this.httpClient.get<HttpResponse<T []>>(this.url, {
            observe: 'response',
            params
        }).pipe(
            map(res => {
                    this.listSize = res.headers.get('listSize') != null ? +res.headers.get('listSize') : 0;
                    const ts: any = res.body;
                    this.postList(ts);
                    return ts;
                }
            ),
            catchError(this.handleError)
        );
    }

    public getAllList(search?: Search<T>): Observable<T[]> {
        let params = new HttpParams();

        if (search == null) {
            search = JSON.parse(JSON.stringify(this.search));
        }
        search.pageSize = 0;
        search.startRow = 0;
        params = this.applyRestrictions(params, search);

        return this.httpClient.get<HttpResponse<T []>>(this.url, {
            observe: 'response',
            params: params
        }).pipe(
            map(res => {
                    const ts: any = res.body;
                    this.postList(ts);
                    return ts;
                }
            ),
            catchError(this.handleError)
        );
    }

    public getListSize() {
        if (this.listSize) {
            return this.listSize;
        }
        return 0;
    }

    public size(): Observable<number> {
        let params = new HttpParams();
        this.search.startRow = 0;
        this.search.pageSize = 1;
        params = this.applyRestrictions(params, this.search);

        return this.httpClient.get(this.url + '/listSize', {
            observe: 'response',
            params
        }).pipe(
            map((res: HttpResponse<number>) => {
                    return res.headers.get('listSize') != null ? +res.headers.get('listSize') : 0;
                }
            ),
            catchError(this.handleError)
        );
    }

    protected applyRestrictions(params: HttpParams, search: any, prefix?: string) {
        if (!prefix) {
            prefix = '';
        } else {
            prefix = prefix + '.';
        }
        for (const key in search) {
            if (search[key] !== null) {
                if (!(search[key] instanceof Object)) {
                    params = params.set(prefix + key, this.toQueryParam(prefix + key, search[key]));
                } else if (search[key] instanceof Date) {
                    params = params.set(prefix + key, this.toQueryParam(prefix + key, search[key]));
                } else {
                    params = this.applyRestrictions(params, search[key], prefix + key);
                }
            }
        }
        return params;
    }

    protected toQueryParam(field: string, value: any) {
        if (value instanceof Date) {
            // return (value as Date).toLocaleString('it-IT', {hour12: false});
            //  yyyy-MM-dd'T'HH:mm:ss
            const date =
                moment(value).utc(true).format('YYYY-MM-DD')
                + 'T' + moment(value).utc(true).format('HH:mm:ss');
            return date;
        }
        return value;
    }

    public find(id: string): Observable<T> {
        return this.httpClient.get<T>(this.url + '/' + id)
            .pipe(
                map(res => {
                        const t: any = <any>res; // json();
                        this.postFind(t);
                        return t;
                    }
                ),
                catchError(this.handleError)
            );
    }

    public newInstance<T>(type: { new(): T; }): T {
        return new type();
    }

    public delete(id: string): Observable<any> {
        return this.httpClient.delete(this.url + '/' + id, {responseType: 'text'})
            .pipe(catchError(this.handleError));
    }

    public persist(element: T): Observable<T> {
        const body = this.marshall(element);
        return this.httpClient.post<T>(this.url, body)
            .pipe(catchError(this.handleError));
    }

    public update(element: T): Observable<T> {
        const body = this.marshall(element);
        return this.httpClient.put<T>(this.url + '/' + this.getId(element), body)
            .pipe(catchError(this.handleError));
    }


    protected handleError(error: HttpErrorResponse): Observable<any> {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return throwError(error['msg'] || 'Server error');
    }

    public getInstance<T>(TCreator: { new(): T; }): T {
        return new TCreator();
    }

    public abstract getId(element: T);

    public abstract buildSearch();

    public getObserver(): Observable<number> {
        return this.progress$;
    }

    public upload(uuid: string, file: any, fileName: string, tipoDocumento_uuid: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (file) {
                this.progress = 0;

                const formData: FormData = new FormData(),
                    xhr: XMLHttpRequest = new XMLHttpRequest();

                formData.append('uploadedFile', file);
                formData.append('nomeFile', file.name);
                formData.append('rootPathUuid', uuid);
                formData.append('fileName', fileName);
                formData.append('tipoDocumento_uuid', tipoDocumento_uuid);

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            // resolve(JSON.parse(xhr.response));
                            resolve(xhr.response);
                        } else {
                            reject(xhr.response);
                        }
                    }
                };

                AbstractService.setUploadUpdateInterval(500);

                xhr.upload.onprogress = (event) => {
                    this.progress = Math.round(event.loaded / event.total * 100);
                    this.progressObserver.next(this.progress);
                };

                xhr.open('POST', this.url + '/upd', true);
                xhr.send(formData);
            }
        });
    }

    protected unmarshall(element: T) {
    }

    protected marshall(element: T) {
        // return JSON.stringify(element);
        return element;
    }

    protected postFind(t: T) {
        this.unmarshall(t);
    }

    protected postList(ts: T[]) {
        for (let t = 0; t < ts.length; t++) {
            this.unmarshall(ts[t]);
        }
    }
}
