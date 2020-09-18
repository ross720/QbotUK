export const environment = {
    production: false,
    apiBaseUrl: "https://qbotuniversitynottingham.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "67bda7ee-fd80-41ef-ac91-358418290a1e",
        clientId: "8aefab17-2ec0-4c26-8565-d591c1b0e6ae",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
