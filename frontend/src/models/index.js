// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, Salon } = initSchema(schema);

export {
  Service,
  Salon
};