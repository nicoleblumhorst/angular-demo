import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../../shared/models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private readonly BASE_URL = 'https://my-json-server.typicode.com/nicoleblumhorst/dummy-car-data';

  constructor(private httpClient: HttpClient) {}

  public getVehicleMakes(): Observable<Brand[]> {
    const path = this.BASE_URL + '/make';

    return this.httpClient.get<Brand[]>(path);
  }
}
