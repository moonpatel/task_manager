export default function authErrorHandler(errorCode) {
    let msg = "";
    switch (errorCode) {
        case "INVALID_EMAIL":
            msg = "Email is invalid.";
            break;
        case "EMAIL_NOT_FOUND":
        case "INVALID_PASSWORD":
            msg = "Incorrect email or password";
            break;
        case "USER_DISABLED":
            msg = "Account is disabled by admin.";
            break;
        case "EMAIL_EXISTS":
            msg = "Email already exists";
            break;
        default:
            msg = "Unknown error occured.";

            break;
    }
    return msg;
}
