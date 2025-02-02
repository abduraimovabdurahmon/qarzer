// Import dotenv for environment variables
import * as dotenv from 'dotenv';
dotenv.config();

import { Scenes } from "telegraf";



// Import Telegraf and required modules
import { Telegraf, Context } from 'telegraf';
import * as LocalSession from 'telegraf-session-local';
import stage from './bot/stage/stage'; // Import stage for scenes
import { AppDataSource } from './data-source';
import { MyContext } from './bot/types';


// Create the bot instance
const bot = new Telegraf<MyContext>(process.env.BOT_TOKEN as string);

// Setup LocalSession for storing user data
const localSession = new LocalSession({
    database: 'data/session.json',
});

// Use LocalSession as middleware
bot.use(localSession.middleware());

// Use stage middleware
bot.use(stage.middleware());

// Handle /start command
bot.start((ctx) => {
    try {
        return ctx.scene.enter("start");
    } catch (error) {
        console.error(error);
    }
});


async function main() {
    await AppDataSource.initialize();
    // Start the bot
    bot.launch();
}

// Call the main function
main();


// Graceful stop handling
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

