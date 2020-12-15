import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'foro2',
  connector: 'mongodb',
  url: 'mongodb+srv://cluster0.tksab.mongodb.net/Foro2',
  host: 'cluster0.tksab.mongodb.net ',
  port: 27017,
  user: 'leonardo',
  password: 'joncena123',
  database: 'Foro2',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Foro2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'foro2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.foro2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
