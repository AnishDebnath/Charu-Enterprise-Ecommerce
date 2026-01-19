import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserRegion } from '../types';

export const REGIONS: UserRegion[] = [
    { country: 'USA', currency: 'USD', flag: '🇺🇸' },
    { country: 'India', currency: 'INR', flag: '🇮🇳' }
];

interface RegionContextType {
    region: UserRegion;
    setRegion: (region: UserRegion) => void;
    formatPrice: (priceInUSD: number) => string;
    convertPrice: (priceInUSD: number) => number;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

// Conversion rates relative to USD
const RATES = {
    USD: 1,
    INR: 84.0, // Approximate rate
};

export const RegionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [region, setRegion] = useState<UserRegion>(REGIONS[0]);

    const convertPrice = (priceInUSD: number) => {
        return priceInUSD * RATES[region.currency];
    };

    const formatPrice = (priceInUSD: number) => {
        const converted = convertPrice(priceInUSD);

        return new Intl.NumberFormat(region.country === 'India' ? 'en-IN' : 'en-US', {
            style: 'currency',
            currency: region.currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(converted);
    };

    return (
        <RegionContext.Provider value={{ region, setRegion, formatPrice, convertPrice }}>
            {children}
        </RegionContext.Provider>
    );
};

export const useRegion = () => {
    const context = useContext(RegionContext);
    if (context === undefined) {
        throw new Error('useRegion must be used within a RegionProvider');
    }
    return context;
};
