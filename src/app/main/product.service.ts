import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
import { IProductDetail } from './IProductDetail';


@Injectable()
export class ProductService {
    _url = 'http://localhost:8090';
    constructor(private http: HttpClient) {

    }

    // getProduct(): Observable<IProductDetail[]> {
    //     debugger;
    //     return this._http.get(this._url + '/product').map((response: Response) => <IProductDetail[]>response.json());
    //     debugger;
    // }

    getProduct(): Observable<IProductDetail[]> {
        debugger;
        return this.http.get<IProductDetail[]>(this._url + '/product');
    }

    // getPrescriberById(id): Observable<IProductDetail> {
    //     return this._http.get(this._url + '/prescriber/' + id)
    //         .map((response: Response) => <IProductDetail>response.json());

    // }

    // InsertPrescriber(prescriber: IProductDetail): Observable<string> {
    //     debugger;
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const options = new RequestOptions({ headers: headers });
    //     return this._http.post(this._url + '/prescriber', prescriber, new RequestOptions)
    //         .map((response: Response) => <string>response.json());
    // }

    // UpdatePrescriber(prescriber: IProductDetail): Observable<string> {
    //     debugger;
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const options = new RequestOptions({ headers: headers });
    //     return this._http.put(this._url + '/prescriber', prescriber, new RequestOptions)
    //         .map((response: Response) => <string>response.json());
    // }

    // UpdatePrescriberStatus(prescriber: IProductDetail): Observable<string> {
    //     debugger;
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const options = new RequestOptions({ headers: headers });
    //     return this._http.put(this._url + '/prescriber/s', prescriber, new RequestOptions)
    //         .map((response: Response) => <string>response.json());
    // }


    DeletePrescriber(id): Observable<string> {

        // return newFunction(id);
        return this.http.delete(this._url + '/prescriber/' + id)
            .map((response: Response) => <string>response.json()[0]);
    }

}

