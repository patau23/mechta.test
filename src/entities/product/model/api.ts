import type { ProductEntity } from "./types/product.entity";
const config = useRuntimeConfig();

export const ApiProduct = {
  getList: async () => {
    return (await $fetch(`${config.public.apiBase}/products`, {
      method: "GET",
    })) as ProductEntity[];
  },
  getProduct: async (id: Pick<ProductEntity, "id">["id"]) => {
    return (await $fetch(`${config.public.apiBase}/products/${id}`, {
      method: "GET",
    })) as ProductEntity;
  },
};
