import React, { createContext, useContext, ReactNode } from 'react';
import { useImmer } from 'use-immer';
import { searchParameter } from '@/components/Search';

interface SearchParametersContextType {
    params: searchParameter;
    setParams: (func: (draft: searchParameter) => void | searchParameter) => void;
}

const SearchParametersContext = createContext<SearchParametersContextType | undefined>(undefined);

interface SearchParametersProviderProps {
    children: ReactNode;
}

export const SearchParametersProvider: React.FC<SearchParametersProviderProps> = ({ children }) => {
    const [params, setParams] = useImmer<searchParameter>({});

    return (
        <SearchParametersContext.Provider value={{ params, setParams }}>
            {children}
        </SearchParametersContext.Provider>
    );
};

export const useSearchParameters = () => {
    const context = useContext(SearchParametersContext);
    if (!context) {
        throw new Error('useSearchParameters must be used within a SearchParametersProvider');
    }
    return context;
};
