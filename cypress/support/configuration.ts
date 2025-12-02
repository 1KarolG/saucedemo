export class Configuration {
    private static readonly _baseURL = 'https://www.saucedemo.com';
    private static readonly _baseEndpoointURL = 'https://airportgap.com/api/';
    private static readonly _authToken = 'uonnecDLJcKgP6Xi6FbLzGKy';
    private static readonly _browserWidth = 1920;
    private static readonly _browserHeight = 1080;
    private static readonly _inventorySize = 6;
    private static readonly _username = 'standard_user';
    private static readonly _password = 'secret_sauce';
    private static readonly _apiOkResponseStatus = 200;
    private static readonly _airportsEndpoint = 'airports';
    private static readonly _distanceEndpoint = 'airports/distance';
    private static readonly _apiResponseDataSize = 30;
    private static readonly _expectedAirportNames = ["Akureyri Airport", "St. Anthony Airport", "CFB Bagotville"];
    private static readonly _requestBody = 'from=KIX&to=NRT';
    private static readonly _expectedDistance = 400;

    public static get baseURL() {
        return this._baseURL;
    }

    public static get baseEndpoointURL() {
        return this._baseEndpoointURL;
    }

    public static get authToken() {
        return this._authToken;
    }

    public static get browserWidth() {
        return this._browserWidth;
    }

    public static get browserHeight() {
        return this._browserHeight;
    }

    public static get inventorySize() {
        return this._inventorySize;
    }

    public static get username() {
        return this._username;
    }

    public static get password() {
        return this._password;
    }

    public static get apiOkResponseStatus() {
        return this._apiOkResponseStatus;
    }

    public static get airportsEndpoint() {
        return this._airportsEndpoint;
    }

    public static get distanceEndpoint() {
        return this._distanceEndpoint;
    }

    public static get apiResponseDataSize() {
        return this._apiResponseDataSize;
    }

    public static get expectedAirportNames() {
        return this._expectedAirportNames;
    }

    public static get requestBody() {
        return this._requestBody;
    }

    public static get expectedDistance() {
        return this._expectedDistance;
    }
}