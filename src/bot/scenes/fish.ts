// Import required modules from Telegraf
import { Scenes } from "telegraf";

// Create and name the scene
const fish = new Scenes.BaseScene<Scenes.SceneContext>("fish");

// When the scene is entered
fish.enter(async (ctx) => {
    try {
        await ctx.reply("Iltimos F.I.SH ni kiriting");
    } catch (error) {
        console.error(error);
    }
});

// Handle text input from the user
fish.on("text", async (ctx) => {
    try {
        // Get the entered text
        const text = ctx.message?.text;

        // Check if the text contains at least 3 words
        if (!text || text.split(" ").length < 3) {
            return ctx.reply("Iltimos ismingiz familiyangiz va sharifingizni ajratib yozing.");
        }

        // Save F.I.SH to session
        // @ts-ignore
        ctx.session.fish = text;

        // Move to the next scene
        await ctx.scene.enter("phone");

    } catch (error) {
        console.error(error);
    }
});

// Handle non-text inputs
fish.use(async (ctx) => {
    try {
        await ctx.reply("Iltimos ism familiya va sharifingizni matn ko'rinishida yuboring!");
    } catch (error) {
        console.error(error);
    }
});

// Export the scene
export default fish;
