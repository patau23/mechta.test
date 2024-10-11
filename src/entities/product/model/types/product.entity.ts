export interface ProductEntity {
  id: string;
  createdAt: string; // Дата в формате ISO
  title: string; // Название продукта
  image: string; // URL изображения
  price: number; // Цена продукта
  discount: number; // Скидка в процентах
  description: string; // Описание продукта
  countryManufacturer: string; // Страна производства
  material: string; // Материал изделия
  lenseMaterial: string; // Материал линз
  lenseWidth: string; // Ширина линз
  connector: string; // Тип коннектора
  rating: number; // Рейтинг продукта
  ratesCount: number; // Количество оценок
}
