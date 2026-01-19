
export interface Product {
  id: string;
  sku: string;
  title: string;
  description: string;
  category: string;
  price: number;
  bulkPrice: number;
  moq: number; // Minimum Order Quantity for bulk price
  rating: number;
  reviewCount: number;
  image: string;
  specs: {
    material: string;
    finish: string;
    diameter?: string;
    length?: string;
    standard?: string;
    weight?: string;
  };
  inStock: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isOnSale?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserRegion {
  currency: 'USD' | 'INR';
  country: 'USA' | 'India';
  flag: string;
}