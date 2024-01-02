import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(),
  {
    provide: APOLLO_OPTIONS,
    useFactory: (
      httpLink: HttpLink,
    ): ApolloClientOptions<unknown> => ({
      link: ApolloLink.from([
        httpLink.create({ uri: 'http://localhost:3000/graphql' }),
      ]),
      cache: new InMemoryCache(),
    }),
    deps: [HttpLink],
  },
    Apollo,
  ]
};
