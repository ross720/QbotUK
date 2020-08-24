export const environment = {
    production: false,
    apiBaseUrl: "https://qboteduukten.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "9e4d7ef0-9135-47fc-b4cd-a6cbc485e0bd",
        clientId: "b0737784-f15b-490c-bd47-ce99011a70d0",
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
