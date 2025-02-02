// Import required modules from Telegraf
import { Scenes } from "telegraf";
import { MyContext, MySceneSession } from "../../types";

// Define scene-specific state structure
interface ConfirmGiveDebtState {
    amount: string;
    selectedGroup: string;
    selectedContact: string;
    description?: string;
  }

// Create the scene specifically for giving debt
const confirmGiveDebt = new Scenes.BaseScene<MyContext>("confirm_give_debt");

// Inline keyboard for entering debt amount (like a phone keypad)
const getKeyboard = () => [
    [
        { text: "Tasdiqlash", callback_data: "confirm" }
    ],
];

// When entering the scene, initialize amount and show keypad
confirmGiveDebt.enter(async (ctx) => {
    try {
      const state = ctx.scene.state as ConfirmGiveDebtState;
      await ctx.reply(`💰 ${state.amount} so'm qarz uchun izoh yozing:`, {
        reply_markup: { inline_keyboard: getKeyboard() }
      });
    } catch (error) {
      console.error(error);
    }
  });


  confirmGiveDebt.on("text", async (ctx) => {
    try {
      const state = ctx.scene.state as ConfirmGiveDebtState;
      state.description = ctx.message.text;
      await ctx.reply(`✅ ${ctx.message.text} izohi bilan ${state.amount} so'm miqdorida qarz berishni tasdiqlash uchun "Tasdiqlash" tugmasini bosing.`);
    } catch (error) {
      console.error(error);
    }
  });


// Handle confirm (Tasdiqlash) button
confirmGiveDebt.action("confirm", async (ctx) => {
    try {
      const state = ctx.scene.state as ConfirmGiveDebtState;
      await ctx.reply(`✅ ${state.selectedContact} ga ${state.description} izohi bilan ${state.amount} so'm qarz berish tasdiqlandi! Guruh: ${state.selectedGroup}`);
      ctx.scene.enter("main");
    } catch (error) {
      console.error(error);
    }
  });

// Handle back button
confirmGiveDebt.action("back", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("select_contact_for_give_debt");
    } catch (error) {
        console.error(error);
    }
});

// Export the scene
export default confirmGiveDebt;
