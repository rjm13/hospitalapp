import React from 'react';

const context = {

    isRootScreen: null,
    setIsRootScreen: (val: boolean | null) => {},

    userID: null,
    setUserID: (id: string | null) => {},

    deepLink: null,
    setDeepLink: () => {},

    theme: false,
    setTheme: (val: boolean) => {},
}

export const AppContext = React.createContext(context);