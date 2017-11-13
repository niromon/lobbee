import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const baseUrl = API_URL;

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) {}

    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();

        formdata.append('file', file);

        const req = new HttpRequest('POST', baseUrl + 'api/admin/upload', formdata, {
            reportProgress: true,
            responseType: 'text'
        });

        return this.http.request(req);
    }

}