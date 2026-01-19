import { Product, Category } from './types';

// Import product images
import p1 from './assets/products/1.png';
import p2 from './assets/products/21.jpg';
import p3 from './assets/products/22.jpg';
import p4 from './assets/products/23.jpg';
import p5 from './assets/products/24.jpg';
import p6 from './assets/products/26.jpg';
import p7 from './assets/products/27.jpg';
import p8 from './assets/products/28.jpg';
import p9 from './assets/products/29.jpg';
import p10 from './assets/products/30.jpg';
import p11 from './assets/products/33.jpg';
import p12 from './assets/products/34.jpg';
import p13 from './assets/products/35.jpg';
import p14 from './assets/products/38.jpg';
import p15 from './assets/products/39.jpg';
import p16 from './assets/products/40.jpg';
import p17 from './assets/products/41.jpg';
import p18 from './assets/products/42.jpg';
import p19 from './assets/products/19.jpg';
import p20 from './assets/products/43.jpg';

export const CATEGORIES: Category[] = [
  { id: 'chain-link', name: 'Chain Link Fittings', image: 'https://picsum.photos/400/300?grayscale' },
  { id: 'gate-hardware', name: 'Gate Hardware', image: 'https://picsum.photos/401/300?grayscale' },
  { id: 'post-accessories', name: 'Post Accessories', image: 'https://picsum.photos/402/300?grayscale' },
  { id: 'ornamental', name: 'Ornamental Fittings', image: 'https://picsum.photos/403/300?grayscale' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'TB-001-GALV',
    title: 'Galvanized Tension Band - 2 3/8"',
    description: 'Heavy-duty galvanized steel tension band for securing chain link fabric to terminal posts. Rust-resistant coating ensures long-term durability in harsh climates.',
    category: 'Chain Link Fittings',
    price: 1.85,
    bulkPrice: 1.25,
    moq: 100,
    rating: 4.8,
    reviewCount: 324,
    image: p1,
    specs: {
      material: 'Carbon Steel',
      finish: 'Hot Dip Galvanized',
      diameter: '2 3/8 inch',
      standard: 'ASTM F626',
      weight: '0.35 lbs'
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: '2',
    sku: 'BB-002-BLK',
    title: 'Brace Band - Black Powder Coated',
    description: 'Securely attach rail ends and truss rod holders. Black powder coating provides enhanced aesthetic and corrosion resistance.',
    category: 'Chain Link Fittings',
    price: 2.15,
    bulkPrice: 1.55,
    moq: 100,
    rating: 4.6,
    reviewCount: 128,
    image: p2,
    specs: {
      material: 'Steel',
      finish: 'Black Powder Coat',
      diameter: '2 inch',
      standard: 'ASTM F626',
      weight: '0.30 lbs'
    },
    inStock: true,
    isOnSale: true
  },
  {
    id: '3',
    sku: 'GH-HD-05',
    title: 'Industrial Heavy Duty Gate Hinge (180 Degree)',
    description: 'Commercial grade gate hinge designed for heavy traffic areas. Allows 180-degree opening.',
    category: 'Gate Hardware',
    price: 45.00,
    bulkPrice: 38.50,
    moq: 10,
    rating: 4.9,
    reviewCount: 89,
    image: p3,
    specs: {
      material: 'Malleable Iron',
      finish: 'Galvanized',
      weight: '4.5 lbs',
      standard: 'ISO 9001'
    },
    inStock: true
  },
  {
    id: '4',
    sku: 'DR-36-IND',
    title: '36" Industrial Drop Rod Assembly',
    description: 'Secure dual gates with this heavy-duty drop rod. Includes guides and retainer.',
    category: 'Gate Hardware',
    price: 28.99,
    bulkPrice: 22.00,
    moq: 20,
    rating: 4.7,
    reviewCount: 56,
    image: p4,
    specs: {
      material: 'Steel',
      finish: 'Galvanized',
      diameter: '1 inch',
      weight: '3.2 lbs'
    },
    inStock: true
  },
  {
    id: '5',
    sku: 'PC-AL-238',
    title: 'Aluminum Post Cap - Dome Style',
    description: 'Fits 2 3/8" OD posts. Protects post internals from moisture and debris.',
    category: 'Post Accessories',
    price: 0.95,
    bulkPrice: 0.65,
    moq: 500,
    rating: 4.5,
    reviewCount: 412,
    image: p5,
    specs: {
      material: 'Aluminum Die Cast',
      finish: 'Natural',
      diameter: '2 3/8 inch'
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: '6',
    sku: 'OF-SP-QUAD',
    title: 'Quad Flare Spear Point',
    description: 'Decorative spear point for ornamental iron fences. Weld-on installation.',
    category: 'Ornamental Fittings',
    price: 1.50,
    bulkPrice: 0.95,
    moq: 200,
    rating: 4.8,
    reviewCount: 76,
    image: p6,
    specs: {
      material: 'Cast Iron',
      finish: 'Raw',
      weight: '0.4 lbs'
    },
    inStock: true
  },
  {
    id: '7',
    sku: 'REC-158',
    title: 'Rail End Cup - 1 5/8"',
    description: 'Used to attach top rail or brace rail to a terminal post.',
    category: 'Chain Link Fittings',
    price: 1.75,
    bulkPrice: 1.15,
    moq: 150,
    rating: 4.4,
    reviewCount: 92,
    image: p7,
    specs: {
      material: 'Pressed Steel',
      finish: 'Galvanized',
      diameter: '1 5/8 inch'
    },
    inStock: false
  },
  {
    id: '8',
    sku: 'GL-STD',
    title: 'Standard Gravity Latch',
    description: 'Self-latching gravity latch for residential walk gates.',
    category: 'Gate Hardware',
    price: 8.50,
    bulkPrice: 6.00,
    moq: 50,
    rating: 4.3,
    reviewCount: 215,
    image: p8,
    specs: {
      material: 'Steel',
      finish: 'Black',
      weight: '0.8 lbs'
    },
    inStock: true,
    isOnSale: true
  },
  {
    id: '9',
    sku: 'FF-SQ-4',
    title: 'Square Floor Flange - 4 Hole',
    description: 'Heavy duty square floor flange for mounting fence posts to concrete or wood surfaces.',
    category: 'Post Accessories',
    price: 9.50,
    bulkPrice: 7.25,
    moq: 50,
    rating: 4.7,
    reviewCount: 42,
    image: p9,
    specs: {
      material: 'Pressed Steel',
      finish: 'Galvanized',
      weight: '1.2 lbs'
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: '10',
    sku: 'GF-LATCH-IND',
    title: 'Industrial Gate Fork Latch',
    description: 'Reliable fork latch for chain link gates. Malleable iron construction ensures security.',
    category: 'Gate Hardware',
    price: 12.99,
    bulkPrice: 9.50,
    moq: 25,
    rating: 4.5,
    reviewCount: 110,
    image: p10,
    specs: {
      material: 'Malleable Iron',
      finish: 'Galvanized',
      weight: '2.1 lbs'
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: '11',
    sku: 'GW-RUB-6',
    title: '6" Solid Rubber Gate Wheel',
    description: 'Support heavy gates and prevent sagging with this solid rubber gate wheel.',
    category: 'Gate Hardware',
    price: 34.50,
    bulkPrice: 28.00,
    moq: 10,
    rating: 4.8,
    reviewCount: 65,
    image: p11,
    specs: {
      material: 'Rubber / Steel',
      finish: 'Galvanized Bracket',
      weight: '5.5 lbs'
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: '12',
    sku: 'BA-3STR-45',
    title: '3-Strand Barb Wire Arm (45°)',
    description: 'Enhance security with this 45-degree barb wire arm. Fits standard line posts.',
    category: 'Chain Link Fittings',
    price: 14.25,
    bulkPrice: 10.50,
    moq: 50,
    rating: 4.9,
    reviewCount: 34,
    image: p12,
    specs: {
      material: 'Pressed Steel',
      finish: 'Galvanized',
      weight: '1.8 lbs',
      standard: 'ASTM F626'
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: '13',
    sku: 'TR-KIT-IND',
    title: 'Industrial Truss Rod Kit',
    description: 'Used for bracing terminal posts. Kit includes threaded rod and tightener.',
    category: 'Chain Link Fittings',
    price: 8.75,
    bulkPrice: 6.25,
    moq: 50,
    rating: 4.6,
    reviewCount: 88,
    image: p13,
    specs: {
      material: 'Steel',
      finish: 'Galvanized',
      diameter: '3/8 inch'
    },
    inStock: true
  },
  {
    id: '14',
    sku: 'BC-KENNEL',
    title: 'Butterfly Kennel Clamp',
    description: 'Connects two tubing rails parallel to one another. Ideal for kennel panels.',
    category: 'Chain Link Fittings',
    price: 2.50,
    bulkPrice: 1.75,
    moq: 200,
    rating: 4.7,
    reviewCount: 156,
    image: p14,
    specs: {
      material: 'Steel',
      finish: 'Galvanized'
    },
    inStock: true
  },
  {
    id: '15',
    sku: 'TB-GALV-48',
    title: 'Tension Bar - 48" Galvanized',
    description: 'Used to secure chain link fabric to tension bands. Hot dip galvanized.',
    category: 'Chain Link Fittings',
    price: 4.25,
    bulkPrice: 3.10,
    moq: 100,
    rating: 4.8,
    reviewCount: 210,
    image: p15,
    specs: {
      material: 'Steel',
      finish: 'Galvanized',
      weight: '1.5 lbs'
    },
    inStock: true
  },
  {
    id: '16',
    sku: 'SL-SPRING-HD',
    title: 'Heavy Duty Spring Latch',
    description: 'Industrial spring-loaded latch for high-security commercial gates.',
    category: 'Gate Hardware',
    price: 18.95,
    bulkPrice: 14.50,
    moq: 20,
    rating: 4.9,
    reviewCount: 42,
    image: p16,
    specs: {
      material: 'Stainless Steel',
      finish: 'Brushed',
      weight: '1.2 lbs'
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: '17',
    sku: 'AB-CONC-58',
    title: '5/8" x 6" Concrete Anchor Bolt',
    description: 'High-strength wedge anchors for securing post flanges to concrete surfaces.',
    category: 'Post Accessories',
    price: 3.25,
    bulkPrice: 2.15,
    moq: 100,
    rating: 4.7,
    reviewCount: 124,
    image: p17,
    // Fix: Added finish property and ensured material is distinct from finish as per interface
    specs: {
      material: 'Steel',
      finish: 'Zinc Plated',
      diameter: '5/8 inch',
      length: '6 inch'
    },
    inStock: true
  },
  {
    id: '18',
    sku: 'PC-VIN-44',
    title: 'Vinyl Post Cap - Pyramidal (4x4)',
    description: 'UV-stabilized white vinyl cap for residential ornamental fencing posts.',
    category: 'Post Accessories',
    price: 2.45,
    bulkPrice: 1.80,
    moq: 200,
    rating: 4.6,
    reviewCount: 310,
    image: p18,
    specs: {
      material: 'Vinyl / PVC',
      finish: 'Glossy White',
      diameter: '4x4 inch'
    },
    inStock: true
  },
  {
    id: '19',
    sku: 'BW-ROLLER',
    title: 'Barbed Wire Roller Guide',
    description: 'Used on security fence corners to facilitate smooth barbed wire tensioning.',
    category: 'Chain Link Fittings',
    price: 15.50,
    bulkPrice: 11.25,
    moq: 30,
    rating: 4.8,
    reviewCount: 28,
    image: p19,
    specs: {
      material: 'Steel / Nylon',
      finish: 'Galvanized'
    },
    inStock: true
  },
  {
    id: '20',
    sku: 'DDL-PRO',
    title: 'Pro Series Double Drive Latch',
    description: 'Premium locking mechanism for large double driveway gates.',
    category: 'Gate Hardware',
    price: 52.00,
    bulkPrice: 44.00,
    moq: 5,
    rating: 4.9,
    reviewCount: 19,
    image: p20,
    specs: {
      material: 'Aluminum Alloy',
      finish: 'Black Powder Coat',
      weight: '2.8 lbs'
    },
    inStock: true
  }
];