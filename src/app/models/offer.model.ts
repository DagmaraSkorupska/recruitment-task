export interface OfferModel{
  // id?: string;
  // title?: string;
  // description?: number;
  // price?: number;
  // created_at?: number;

  id: number,
  category: number,
  category_name: string,
  title: string,
  description: string,
  price: number,
  created_at: Date
}
