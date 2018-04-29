import { DynamicModule, Global, Module } from '@nestjs/common'

import { LoggerConfig } from '@/core/modules/logger/logger'
import { createLoggerProviders } from '@/core/modules/logger/logger.providers'

@Global()
@Module({})
export class LoggerModule {
  static forRoot(config?: LoggerConfig): DynamicModule {
    const providers = createLoggerProviders(config)
    return {
      module: LoggerModule,
      components: providers,
      exports: providers,
    }
  }
}
