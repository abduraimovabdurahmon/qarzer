// Import required modules from Telegraf
import { Scenes } from "telegraf";

// Import scenes
// user start bosganida
import start from "../scenes/start";

import phone from "../scenes/fish";

// Create the stage with scenes
const stage = new Scenes.Stage([
    start,
    phone,
]);

// Export the stage
export default stage;
