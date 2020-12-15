import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Juegos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  _id: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Juegos>) {
    super(data);
  }
}

export interface JuegosRelations {
  // describe navigational properties here
}

export type JuegosWithRelations = Juegos & JuegosRelations;
