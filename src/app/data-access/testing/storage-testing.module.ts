import { NgModule } from '@angular/core';

import { storageToken } from '../storage.token';
import { InMemoryStorage } from './in-memory-storage.service';

@NgModule({
  providers: [{ provide: storageToken, useClass: InMemoryStorage }],
})
export class StorageTestingModule {}
