// Import required modules from Telegraf
import { Scenes } from "telegraf";
import { MyContext } from "../../types";

// Define scene-specific state structure
interface GiveDebtState {
    amount: string;
    selectedGroup: string;
    selectedContact: string;
  }

// Create the scene specifically for giving debt
const giveDebt = new Scenes.BaseScene<MyContext>("give_debt");

// Inline keyboard for entering debt amount (like a phone keypad)
const getKeyboard = () => [
    [
        { text: "1", callback_data: "1" },
        { text: "2", callback_data: "2" },
        { text: "3", callback_data: "3" }
    ],
    [
        { text: "4", callback_data: "4" },
        { text: "5", callback_data: "5" },
        { text: "6", callback_data: "6" }
    ],
    [
        { text: "7", callback_data: "7" },
        { text: "8", callback_data: "8" },
        { text: "9", callback_data: "9" }
    ],
    [
        { text: "Tozalash", callback_data: "clear" },
        { text: "0", callback_data: "0" },
        { text: "⏪", callback_data: "delete" }
    ],
    [
        { text: "✅ Tasdiqlash", callback_data: "confirm" }
    ],
    [
        { text: "🔙 Orqaga", callback_data: "back" }
    ]
];

// When entering the scene, initialize amount and show keypad
giveDebt.enter(async (ctx) => {
    try {
      const state = ctx.scene.state as GiveDebtState;
      state.amount = "0";
      
      await ctx.reply(`Qarz summasini kiriting: \n\n💰 ${state.amount} so'm`, {
        reply_markup: { inline_keyboard: getKeyboard() }
      });
    } catch (error) {
      console.error(error);
    }
  });

// Handle number inputs dynamically
giveDebt.action(/^\d$/, async (ctx) => {
    try {
        const state = ctx.scene.state as GiveDebtState; // Cast state
        let amount = state.amount || "0";
        const digit = ctx.match[0];

        // Prevent leading zeros
        if (amount === "0") {
            amount = digit;
        } else {
            amount += digit;
        }

        state.amount = amount;

        await ctx.editMessageText(`Qarz summasini kiriting: \n\n💰 ${amount} so'm`, {
            reply_markup: { inline_keyboard: getKeyboard() }
        });
    } catch (error) {
        console.error(error);
    }
});

// Handle delete (⏪) button
giveDebt.action("delete", async (ctx) => {
    try {
        const state = ctx.scene.state as GiveDebtState; // Cast state
        let amount = state.amount || "0";

        // Remove last digit
        amount = amount.length > 1 ? amount.slice(0, -1) : "0";
        state.amount = amount;

        await ctx.editMessageText(`Qarz summasini kiriting: \n\n💰 ${amount} so'm`, {
            reply_markup: { inline_keyboard: getKeyboard() }
        });
    } catch (error) {
        console.error(error);
    }
});

// Handle clear (Tozalash) button
giveDebt.action("clear", async (ctx) => {
    try {
        (ctx.scene.state as GiveDebtState).amount = "0";

        await ctx.editMessageText(`Qarz summasini kiriting: \n\n💰 0 so'm`, {
            reply_markup: { inline_keyboard: getKeyboard() }
        });
    } catch (error) {
        console.error(error);
    }
});

// Handle confirm (Tasdiqlash) button
giveDebt.action("confirm", async (ctx) => {
    try {
      const state = ctx.scene.state as GiveDebtState;
      await ctx.deleteMessage();
      ctx.scene.enter("confirm_give_debt", {
        amount: state.amount,
        selectedGroup: state.selectedGroup,
        selectedContact: state.selectedContact
      });
    } catch (error) {
      console.error(error);
    }
  });

// Handle back button
giveDebt.action("back", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("select_contact_for_give_debt");
    } catch (error) {
        console.error(error);
    }
});

// Export the scene
export default giveDebt;
