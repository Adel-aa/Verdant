export interface Venue {
  id: string;
  name: string;
  capacity: number;
  pricePerDay: number;
  description: string;
  imageUrl: string;
}

export interface AddOn {
  id: string;
  name: string;
  pricePerUnit: number;
  category: 'audio' | 'visual' | 'other';
  description: string;
}

export interface MealOption {
  id: string;
  name: string;
  pricePerPerson: number;
  description: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

export interface CartItem {
  id: string;
  type: 'venue' | 'addon' | 'meal';
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}