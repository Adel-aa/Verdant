export interface Plant {
  id: string;
  name: string;
  price: number;
  category: 'indoor' | 'outdoor' | 'succulents';
  description: string;
  imageUrl: string;
}

export const plants: Plant[] = [
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    price: 45.99,
    category: 'indoor',
    description: 'The iconic split-leaf philodendron, perfect for making a statement.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    price: 29.99,
    category: 'indoor',
    description: 'Low-maintenance plant known for its air-purifying qualities.',
    imageUrl: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lavender',
    name: 'English Lavender',
    price: 19.99,
    category: 'outdoor',
    description: 'Fragrant purple blooms perfect for garden borders.',
    imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roses',
    name: 'Garden Roses',
    price: 34.99,
    category: 'outdoor',
    description: 'Classic pink roses that bloom throughout summer.',
    imageUrl: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'echeveria',
    name: 'Echeveria Elegans',
    price: 15.99,
    category: 'succulents',
    description: 'Beautiful rosette-forming succulent with powder-blue leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aloe',
    name: 'Aloe Vera',
    price: 24.99,
    category: 'succulents',
    description: 'Healing plant with thick, succulent leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=800'
  }
];