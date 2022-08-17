import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/if-not/if-not.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';

@NgModule({
  declarations: [IfNotDirective, MultipleDirective, WelcomeDirective],
  imports: [CommonModule, CoreRoutingModule, AuthModule, StorageModule],
  exports: [IfNotDirective, MultipleDirective, WelcomeDirective],
})
export class CoreModule {}
