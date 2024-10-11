import type { ProductEntity } from "./product.entity";

export namespace GetList {
  export type RequestDTO = {
    organizationId: string;
    search?: string;
    page?: number;
    limit?: number;
  };

  export type ResponseDTO = ProductEntity[];
}

export namespace GetEntity {
  export type RequestDTO = {};

  export type ResponseDTO = ProductEntity;
}
