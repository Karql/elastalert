import testPostHandler from '../handlers/test/post';
import metadataHandler from '../handlers/metadata/get';
import searchHandler from '../handlers/search/get';
import { Route } from './route.model';


const routes: Route[] = [
   {
    path: 'test',
    method: 'post',
    handler: testPostHandler
  }, 
  {
    path: 'metadata/:type',
    method: ['get'],
    handler: [metadataHandler]
  },
  {
    path: 'search/:index',
    method: ['post'],
    handler: [searchHandler]
  }
];

export default routes;
