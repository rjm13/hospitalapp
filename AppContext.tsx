import React from 'react';

const context = {

    isRootScreen: null,
    setIsRootScreen: (val: boolean | null) => {},

    userID: null,
    setUserID: (id: string | null) => {},

    deepLink: null,
    setDeepLink: () => {},
}

export const AppContext = React.createContext(context);