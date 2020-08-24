export const environment = {
    production: false,
    apiBaseUrl: "https://qboteduuknine.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "9e4d7ef0-9135-47fc-b4cd-a6cbc485e0bd",
        clientId: "23a698fe-ef8e-41b6-a4fc-5227fb09d814",
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
