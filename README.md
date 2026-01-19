# Charu Enterprise E-Commerce

A modern, professional B2B e-commerce platform for Charu Enterprise, specializing in industrial fence fittings and hardware. Built with React, TypeScript, and Vite for optimal performance and developer experience.

![Charu Enterprise](./assets/products/charu-logo.png)

## 🌟 Features

### Core Functionality
- **Multi-Currency Support**: Seamless switching between USD and INR with automatic price conversion
- **Product Catalog**: Comprehensive catalog of 20+ industrial fence fittings and hardware
- **Smart Pricing**: Dynamic bulk pricing with automatic discounts for MOQ (Minimum Order Quantity)
- **Shopping Cart**: Full-featured cart with quantity management and price calculations
- **Product Comparison**: Compare up to 4 products side-by-side
- **Product Reviews**: Customer review system with ratings and feedback
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile

### Business Features
- **Bulk Wholesale Inquiry**: Dedicated modal for container load pricing requests
- **Export Information**: Comprehensive export and shipping information pages
- **Dark Mode**: Toggle between light and dark themes
- **Category Filtering**: Browse products by category (Chain Link, Gate Hardware, Post Accessories, Ornamental)
- **Search Functionality**: Quick product search with category filtering
- **Product Details**: Detailed specifications, engineering specs, and material information

### Technical Highlights
- **TypeScript**: Full type safety throughout the application
- **React Router**: Client-side routing with HashRouter for GitHub Pages compatibility
- **Context API**: Global state management for cart, theme, region, and comparison
- **Local Storage**: Persistent cart and review data
- **Toast Notifications**: User-friendly feedback system
- **Lazy Loading**: Optimized image loading for better performance

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Charu Enterprise Ecommerce"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🏗️ Project Structure

```
Charu Enterprise Ecommerce/
├── assets/              # Static assets (images, logos)
│   └── products/        # Product images
├── components/          # Reusable React components
│   ├── ComparisonBar.tsx
│   ├── Layout.tsx       # Header & Footer
│   ├── ProductCard.tsx
│   └── WholesaleModal.tsx
├── context/             # React Context providers
│   ├── CartContext.tsx
│   ├── ComparisonContext.tsx
│   ├── RegionContext.tsx
│   ├── ThemeContext.tsx
│   └── ToastContext.tsx
├── pages/               # Page components
│   ├── AboutPage.tsx
│   ├── CartPage.tsx
│   ├── ComparisonPage.tsx
│   ├── ContactPage.tsx
│   ├── ExportPage.tsx
│   ├── HomePage.tsx
│   ├── ListingPage.tsx
│   └── ProductPage.tsx
├── App.tsx              # Main app component
├── constants.ts         # Product data and categories
├── types.ts             # TypeScript type definitions
├── index.tsx            # App entry point
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## 🎨 Key Technologies

- **React 19** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 6** - Build tool and dev server
- **React Router DOM 7** - Routing
- **Lucide React** - Icon library
- **CSS3** - Styling with custom properties

## 💱 Currency System

The application supports two currencies:
- **USD** (United States Dollar) - Base currency
- **INR** (Indian Rupee) - Conversion rate: 1 USD = 84 INR

Currency can be switched via the navbar. All prices automatically convert and format according to the selected currency.

## 🛒 Product Categories

1. **Chain Link Fittings** - Tension bands, brace bands, rail end cups, etc.
2. **Gate Hardware** - Hinges, latches, drop rods, gate wheels
3. **Post Accessories** - Post caps, floor flanges, anchor bolts
4. **Ornamental Fittings** - Decorative spear points and finials

## 🎯 Features in Detail

### Bulk Pricing
- Products have standard pricing for quantities 1 to (MOQ-1)
- Automatic bulk discount applies when quantity reaches MOQ
- Visual indicators show when bulk pricing is active
- Savings calculator shows per-unit savings

### Shopping Cart
- Add/remove products
- Adjust quantities
- Automatic bulk pricing application
- Persistent storage (localStorage)
- Real-time total calculations

### Product Comparison
- Compare up to 4 products
- Side-by-side specification comparison
- Easy add/remove from comparison bar
- Sticky comparison bar for quick access

### Reviews System
- Star ratings (1-5)
- Written reviews
- Review submission form
- Persistent storage per product
- Review statistics and distribution

## 🌐 Deployment

The application is configured for deployment on GitHub Pages using HashRouter. To deploy:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files
3. Deploy the `dist` folder to your hosting service

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```
VITE_APP_TITLE=Charu Enterprise
```

### Customization
- **Colors**: Modify CSS custom properties in `index.html`
- **Products**: Edit `constants.ts` to add/modify products
- **Currency Rates**: Update `context/RegionContext.tsx`
- **Categories**: Modify `constants.ts` CATEGORIES array

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

The application uses a consistent design system with:
- Primary color: `#0F3460` (Navy Blue)
- Accent color: `#E94560` (Coral Red)
- Success: Green tones
- Warning: Yellow tones
- Dark mode support with slate color palette

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Charu Enterprise.

## 📞 Contact

**Charu Enterprise**
- Address: 2/49, Ashok Nagar, Regent Park, Kolkata, West Bengal 700040
- Email: info@charuenterprise.com
- Phone: +91-XXXXXXXXXX

## 🙏 Acknowledgments

- Built with modern web technologies
- Icons by Lucide React
- Optimized for performance and SEO
- Designed for B2B industrial commerce

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Status**: Production Ready ✅
