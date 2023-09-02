import Snowflake from "./Snowflake";

export default class Generator {

    private static snowflake = new Snowflake();

    public static generateSnowflake() {
        return this.snowflake.generate();
    }
}