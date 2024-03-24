import { handlerPath } from '@libs/handler-resolver';
import {schema} from './schema'

export const getFilmByid = {
  handler: `${handlerPath(__dirname)}/handler.getfilmbyId`,
  events: [
    {
      http: {
        method: 'get',
        path: 'films/{id}'
      },
    }
  ],
};
export const postFilm = {
  handler: `${handlerPath(__dirname)}/handler.postFilm`,
  events: [
    {
      http: {
        method: 'post',
        path: 'films/',
        request:{
          schemas:{
            'application/json': schema,
          }
        }
      },
    }
  ],
};
export const putFilm = {
  handler: `${handlerPath(__dirname)}/handler.putFilm`,
  events: [
    {
      http: {
        method: 'put',
        path: 'films/',
        request:{
          schemas:{
            'application/json': schema,
          }
        }
      },
    }
  ],
};
export const deleteFilm = {
  handler: `${handlerPath(__dirname)}/handler.deleteFilm`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'films/',
        request:{
          schemas:{
            'application/json': schema,
          }
        }
      },
    }
  ],
};
