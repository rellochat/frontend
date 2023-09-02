export default class Validation {

    public static email(email: string | null) {
        if (!email) return { code: 401, message: "Email field is required." };
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return { code: 401, message: "Your email must be a proper email." };
        return { code: 200, message: null };
    }

    public static password(password: string | null, field?: boolean) {
        if (!password) return { code: 401, message: `The ${field ? "password" : "confirm password"} field is required.` };
        if (!/^.{8,}$/.test(password)) return { code: 401, message: `The password must be atleast 8 characters long.` };
        if (!/[A-Z]/.test(password)) return { code: 401, message: "The password must contain atleast one capital letter (A-Z)." };
        if (!/[a-z]/.test(password)) return { code: 401, message: "The password must contain atleast a lowercase letter (a-z)." };
        if (!/[!@#$%^&*]/.test(password)) return { code: 401, message: "The password must include atleast one special character (!, @, #, $, %, ^, &, *)." };

        return { code: 200, message: null };
    }
}