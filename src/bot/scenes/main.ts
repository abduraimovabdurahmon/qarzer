// mainScene.ts
import { Scenes } from "telegraf";
import { MyContext } from "../types";


const main = new Scenes.BaseScene<MyContext>("main");

const keyboard = [
  [
    { text: "💰 Qarz berish", callback_data: "select_group_for_give_debt" },
    { text: "🤝 Qarz olish", callback_data: "select_group_for_take_debt" }
  ],
  [{ text: "🏠 Guruxlarim", callback_data: "get_groups" }],
  [
    { text: "📜 Qarzlarim (haqqim)", callback_data: "debts" },
    { text: "📑 Qarzlarim", callback_data: "my_debts" }
  ],
];

main.enter(async (ctx) => {
  try {
    await ctx.reply("🔍 O'zingizga kerakli bo'limni tanlang:", {
      reply_markup: { inline_keyboard: keyboard }
    });
  } catch (error) {
    console.error(error);
  }
});



// inline keyboard handler

// Qarz berish
main.action("select_group_for_give_debt", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("select_group_for_give_debt");
    } catch (error) {
        console.error(error);
    }
});

// Qarz olish
main.action("select_group_for_take_debt", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("select_group_for_take_debt");
    } catch (error) {
        console.error(error);
    }
});


// Guruxlarim
main.action("get_groups", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("get_groups");
    } catch (error) {
        console.error(error);
    }
});

// Export the scene
export default main;
