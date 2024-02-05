require("dotenv").config()
import { ExtendedClient} from "./estruturas/Client";

export const client = new ExtendedClient();

client.start()