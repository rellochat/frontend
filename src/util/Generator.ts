import IUser from "@/interfaces/IUser";
import Snowflake from "./Snowflake";

export default class Generator {

    private static snowflake = new Snowflake();

    public static generateSnowflake() {
        return this.snowflake.generate();
    }

    public static generateSecret() {
        let secret = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 12; i++) secret += characters[Math.floor(Math.random() * characters.length)];

        return secret;
    }

    public static generateToken(user: IUser | null | undefined) {
        if (!user) return { code: 500, message: "User is required for token generation." };
        return { code: 200, message: `${Buffer.from(user._id).toString("base64url")}.${Buffer.from(user.lastLogin.toString()).toString("base64url")}.${Buffer.from(user.secret).toString("base64url")}` }
    }
}