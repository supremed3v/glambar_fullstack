// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SalonPackage, Salon, Service, SalonPackageSalon } = initSchema(schema);

export {
  SalonPackage,
  Salon,
  Service,
  SalonPackageSalon
};