export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  affiliateLink: string;
  category: 'tollywood' | 'tech';
  description?: string;
  rating?: number;
  featured?: boolean;
}