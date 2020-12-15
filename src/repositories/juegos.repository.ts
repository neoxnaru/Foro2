import {DefaultCrudRepository} from '@loopback/repository';
import {Juegos, JuegosRelations} from '../models';
import {Foro2DataSource} from '../datasources';
import {inject} from '@loopback/core';

export class JuegosRepository extends DefaultCrudRepository<
  Juegos,
  typeof Juegos.prototype._id,
  JuegosRelations
> {
  constructor(
    @inject('datasources.foro2') dataSource: Foro2DataSource,
  ) {
    super(Juegos, dataSource);
  }
}
