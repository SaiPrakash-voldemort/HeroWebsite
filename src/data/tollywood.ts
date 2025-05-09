import { Product } from '../types';

const tollywoodProducts: Product[] = [
  {
    id: 'tw1',
    title: 'Allu Arjun Pushpa Jacket',
    price: '₹999',
    image: '/images/pushpa-jacket.jpg',
    affiliateLink: 'https://amazon.in/your-affiliate-link',
    category: 'tollywood',
    description: 'Stylish jacket inspired by Allu Arjun\'s look in Pushpa',
    rating: 4.5,
    featured: true
  },
  {
    id: 'tw2',
    title: 'Mahesh Babu Sarkaru Vaari Paata Shirt',
    price: '₹799',
    image: '/images/mahesh-shirt.jpg',
    affiliateLink: 'https://flipkart.com/your-affiliate-link',
    category: 'tollywood',
    description: 'Casual shirt inspired by Mahesh Babu in SVP',
    rating: 4.3
  },
  {
    id: 'tw3',
    title: 'Prabhas Baahubali Pendant',
    price: '₹499',
    image: '/images/baahubali-pendant.jpg',
    affiliateLink: 'https://amazon.in/your-affiliate-link',
    category: 'tollywood',
    description: 'Replica of the iconic pendant from Baahubali',
    rating: 4.7,
    featured: true
  },
  {
    id: 'tw4',
    title: 'Ram Charan RRR Kurta',
    price: '₹1,299',
    image: '/images/rrr-kurta.jpg',
    affiliateLink: 'https://flipkart.com/your-affiliate-link',
    category: 'tollywood',
    description: 'Traditional kurta inspired by Ram Charan\'s look in RRR',
    rating: 4.4
  },
  {
    id: 'tw5',
    title: 'Jr NTR Workout Tank Top',
    price: '₹599',
    image: '/images/ntr-tank.jpg',
    affiliateLink: 'https://amazon.in/your-affiliate-link',
    category: 'tollywood',
    description: 'Gym wear inspired by Jr NTR\'s fitness regime',
    rating: 4.2
  },
  {
    id: 'tw6',
    title: 'Vijay Deverakonda Arjun Reddy Sunglasses',
    price: '₹899',
    image: '/images/arjun-reddy-glasses.jpg',
    affiliateLink: 'https://flipkart.com/your-affiliate-link',
    category: 'tollywood',
    description: 'Stylish sunglasses as seen in Arjun Reddy',
    rating: 4.6,
    featured: true
  }
];

export default tollywoodProducts;