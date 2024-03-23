// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyEvent } from 'aws-lambda';
import FilmService from '@services/film'
import Filme from '@entities/filme';

// import schema from './schema';

export const getfilmbyId = middyfy( async (event:APIGatewayProxyEvent) => {
  const filmService = new FilmService();
  const filmTranslated = await filmService.getFilmFromSwapiTranslatedById(Number(event.pathParameters.id));
  console.log('============= handler film translated =============')
  console.dir(filmTranslated);
  return formatJSONResponse({
     filmTranslated
  });
});
export const postFilm = middyfy( async (event:APIGatewayProxyEvent) => {
  const filmService = new FilmService();
  const filmToSaved = event.body.filme as Filme;
  await filmService.postFilm(filmToSaved);
  console.log('============= handler film post post =============')
  console.dir(filmToSaved);
  return formatJSONResponse({
     message:'function executed succesfully'
  });
});
export const putFilm = middyfy( async (event:APIGatewayProxyEvent) => {
  const filmService = new FilmService();
  const filmToSaved = event.body.filme as Filme;
  console.log('post pre')
  await filmService.putFilm(filmToSaved);
  console.log('============= hanlder film put =============')
  console.dir(filmToSaved);
  return formatJSONResponse({
     message:'function executed succesfully'
  });
});
export const deletetFilm = middyfy( async (event:APIGatewayProxyEvent) => {
  const filmService = new FilmService();
  const filmToSaved = event.body.filme as Filme;
  console.log('delete pre')
  await filmService.deleteFilm(filmToSaved);
  console.log('============= handler film delete =============')
  console.dir(filmToSaved);
  return formatJSONResponse({
     message:'function executed succesfully'
  });
});
