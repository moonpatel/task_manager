export default function authErrorHandler(errorCode) {
    switch (errorCode) {
        case "INVALID_EMAIL":
            console.log("Email is invalid.");
            break;
        case "EMAIL_NOT_FOUND":
            console.log("Incorrect email or password");
            break;
        case "INVALID_PASSWORD":
            console.log("Incorrect email or password");
            break;
        case "USER_DISABLED":
            console.log("Account is disabled by admin.");
            break;
        case "EMAIL_EXISTS":
            console.log("Email already exists");
            break;
        default:
            console.log("Unknown error occured.");
            break;
    }
}
