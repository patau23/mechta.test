import { ApiProduct } from "./api";
import { type ProductEntity } from "./types/product.entity";

export const useProduct = (id: Pick<ProductEntity, "id">["id"]) => {
  const { data, status, refresh } = useLazyAsyncData(
    `product:${id}`,
    async () => {
      const response = await ApiProduct.getProduct(id);
      if (!response) return {} as ProductEntity;
      return response;
    },
    {
      default: () => ({} as ProductEntity),
      server: false,
    }
  );
  return {
    data,
    status,
    refresh,
  };
};
