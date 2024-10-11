import { ApiProduct } from "./api";
import { type ProductEntity } from "./types/product.entity";

export type FilterType =
  | "popularity"
  | "cost_desc"
  | "cost_asc"
  | "new"
  | "alphabetic";

export const useProductList = () => {
  const search = ref("");
  const debouncedSearch = debouncedRef(search, 500);
  const page = ref(1);
  const limit = ref(-1);
  const currFilter = ref<FilterType>("popularity");
  //   const params = computed(() => ({
  //     page: page.value,
  //     limit: limit.value,
  //     search: search.value,
  //     organizationId: user.value.organizationId,
  //   }));

  const { data, status, refresh } = useLazyAsyncData(
    "product:list",
    async () => {
      const response = await ApiProduct.getList();
      if (response.length === 0) return [] as ProductEntity[];
      return response;
    },
    {
      default: () => [] as ProductEntity[],
      watch: [page, limit, debouncedSearch],
      server: false,
    }
  );

  const filterList = (filter: FilterType) => {};

  return {
    search,
    page,
    limit,
    productList: data,
    status,
    refresh,
    filterList,
    currFilter,
  };
};
