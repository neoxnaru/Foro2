import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Juegos} from '../models';
import {JuegosRepository} from '../repositories';

export class JuegosController {
  constructor(
    @repository(JuegosRepository)
    public juegosRepository : JuegosRepository,
  ) {}

  @post('/juegos', {
    responses: {
      '200': {
        description: 'Juegos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Juegos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Juegos, {
            title: 'NewJuegos',
            
          }),
        },
      },
    })
    juegos: Juegos,
  ): Promise<Juegos> {
    return this.juegosRepository.create(juegos);
  }

  @get('/juegos/count', {
    responses: {
      '200': {
        description: 'Juegos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Juegos) where?: Where<Juegos>,
  ): Promise<Count> {
    return this.juegosRepository.count(where);
  }

  @get('/juegos', {
    responses: {
      '200': {
        description: 'Array of Juegos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Juegos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Juegos) filter?: Filter<Juegos>,
  ): Promise<Juegos[]> {
    return this.juegosRepository.find(filter);
  }

  @patch('/juegos', {
    responses: {
      '200': {
        description: 'Juegos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Juegos, {partial: true}),
        },
      },
    })
    juegos: Juegos,
    @param.where(Juegos) where?: Where<Juegos>,
  ): Promise<Count> {
    return this.juegosRepository.updateAll(juegos, where);
  }

  @get('/juegos/{id}', {
    responses: {
      '200': {
        description: 'Juegos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Juegos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Juegos, {exclude: 'where'}) filter?: FilterExcludingWhere<Juegos>
  ): Promise<Juegos> {
    return this.juegosRepository.findById(id, filter);
  }

  @patch('/juegos/{id}', {
    responses: {
      '204': {
        description: 'Juegos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Juegos, {partial: true}),
        },
      },
    })
    juegos: Juegos,
  ): Promise<void> {
    await this.juegosRepository.updateById(id, juegos);
  }

  @put('/juegos/{id}', {
    responses: {
      '204': {
        description: 'Juegos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() juegos: Juegos,
  ): Promise<void> {
    await this.juegosRepository.replaceById(id, juegos);
  }

  @del('/juegos/{id}', {
    responses: {
      '204': {
        description: 'Juegos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.juegosRepository.deleteById(id);
  }
}
