import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupportTable } from './support-table';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CustomSelectService {

    constructor(private http: HttpClient) {}

    findbyId(id: number): Observable<SupportTable> {
        return this.http.get<SupportTable>('http://localhost:3000/suporteTable/' + id);
    }

}
