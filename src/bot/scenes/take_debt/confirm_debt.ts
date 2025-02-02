// Import required modules from Telegraf
import { Scenes } from "telegraf";

// Define scene-specific state structure
interface GiveDebtState {
    description: string;
}

// Create the scene specifically for giving debt
const confirmTakeDebt = new Scenes.BaseScene<Scenes.SceneContext>("confirm_take_debt");

// Inline keyboard for entering debt amount (like a phone keypad)
const getKeyboard = () => [
    [
        { text: "Tasdiqlash", callback_data: "confirm" }
    ],
];

// When entering the scene, initialize amount and show keypad
confirmTakeDebt.enter(async (ctx) => {
    try {
        // Explicitly cast scene state
        (ctx.scene.state as GiveDebtState).description = "0";

        await ctx.reply(`15000 so'm qarz uchun izoh yozing: `, {
            reply_markup: { inline_keyboard: getKeyboard() }
        });
    } catch (error) {
        console.error(error);
    }
});


confirmTakeDebt.on("text", async (ctx) => {
    try {
        const state = ctx.scene.state as GiveDebtState; // Cast state
        state.description = ctx.message.text;

        await ctx.reply(`✅ ${state.description} so'm miqdorida qarz olishni tasdiqlash uchun yuqoridagi xabardagi "Tasdiqlash" tugmasini bosing.`);
    } catch (error) {
        console.error(error);
    }
});


// Handle confirm (Tasdiqlash) button
confirmTakeDebt.action("confirm", async (ctx) => {
    try {
        const state = ctx.scene.state as GiveDebtState; // Cast state
        const amount = state.description || "0";

        await ctx.deleteMessage();
        
        await ctx.reply(`✅ Siz ${amount} so'm miqdorida qarz berishni tasdiqladingiz.`);

        return ctx.scene.enter("main");
    } catch (error) {
        console.error(error);
    }
});

// Handle back button
confirmTakeDebt.action("back", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("select_contact_for_give_debt");
    } catch (error) {
        console.error(error);
    }
});

// Export the scene
export default confirmTakeDebt;
