export const environment = {
    production: false,
    apiBaseUrl: "https://qbotukcontosouni.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "9e4d7ef0-9135-47fc-b4cd-a6cbc485e0bd",
        clientId: "3d5f80fc-e314-45f7-9900-b04b70494bad",
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
