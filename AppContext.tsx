import React from 'react';

const context = {

    isRootScreen: null,
    setIsRootScreen: (val: boolean | null) => {},

    userID: null,
    setUserID: (val: string | null) => {},

    systemID: null,
    setSystemID: (val: string | null) => {},

    hospID: null,
    setHospID: (val: string | null) => {},

    departID: null,
    setDepartID: (val: string | null) => {},

    userRoleID: null,
    setUserRoleID: (val: string | null) => {},

    deepLink: null,
    setDeepLink: () => {},

    theme: false,
    setTheme: (val: boolean) => {},
}

export const AppContext = React.createContext(context);