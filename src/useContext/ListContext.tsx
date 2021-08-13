import * as React from 'react';

interface ListContextProps {
    selectedValue: string;
    onChange: (value: string) => void;
}

export const ListContext = React.createContext<ListContextProps>({
    selectedValue: '',
    onChange: () => {
        /** return something */
    },
});
