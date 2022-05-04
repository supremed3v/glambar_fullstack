import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SalonPackageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SalonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SalonPackageSalonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SalonPackage {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly services: string[];
  readonly image?: string | null;
  readonly Salons?: (SalonPackageSalon | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SalonPackage, SalonPackageMetaData>);
  static copyOf(source: SalonPackage, mutator: (draft: MutableModel<SalonPackage, SalonPackageMetaData>) => MutableModel<SalonPackage, SalonPackageMetaData> | void): SalonPackage;
}

export declare class Salon {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly gender: string;
  readonly phone_number: number;
  readonly rating?: number | null;
  readonly lat: number;
  readonly lng: number;
  readonly Services?: (Service | null)[] | null;
  readonly address: string;
  readonly salonpackages?: SalonPackageSalon[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Salon, SalonMetaData>);
  static copyOf(source: Salon, mutator: (draft: MutableModel<Salon, SalonMetaData>) => MutableModel<Salon, SalonMetaData> | void): Salon;
}

export declare class Service {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly description?: string | null;
  readonly price: number;
  readonly image?: string | null;
  readonly salonID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Service, ServiceMetaData>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service, ServiceMetaData>) => MutableModel<Service, ServiceMetaData> | void): Service;
}

export declare class SalonPackageSalon {
  readonly id: string;
  readonly salonPackage: SalonPackage;
  readonly salon: Salon;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SalonPackageSalon, SalonPackageSalonMetaData>);
  static copyOf(source: SalonPackageSalon, mutator: (draft: MutableModel<SalonPackageSalon, SalonPackageSalonMetaData>) => MutableModel<SalonPackageSalon, SalonPackageSalonMetaData> | void): SalonPackageSalon;
}