import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

const getProducts = gql`
query products {
  products {
    _id
    title
    description
    originalPrice
    images {
      default
      optional
    }
    seller {
      _id
      name {
        first
        last
      }
      role
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apollo = inject(Apollo);

  constructor() { }

  getProducts() {
    return this.apollo.watchQuery({ query: getProducts }).valueChanges.pipe(map((result: any) => result.data.products));
  }
}
