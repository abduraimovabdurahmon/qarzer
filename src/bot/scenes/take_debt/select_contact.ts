// Import required modules from Telegraf
import { Scenes } from "telegraf";

// Create and name the scene specifically for selecting a group to give debt
const selectContactForTakeDebt = new Scenes.BaseScene<Scenes.SceneContext>("select_contact_for_take_debt");


// keyboard for selecting a group
const keyboard = [
    [
        {
            text: "Abdurahmon",
            callback_data: "tg_id_1"
        },
        {
            text: "Abdulaziz",
            callback_data: "tg_id_2"
        },
    ],
    [
        {
            text: "Abdulloh",
            callback_data: "tg_id_3"
        },
        {
            text: "Abdulvohid",
            callback_data: "tg_id_4"
        }
    ],
    [
        {
            text: "🔙 Orqaga",
            callback_data: "back"
        }
    ]
];


selectContactForTakeDebt.enter(async (ctx) => {
    try {
        await ctx.reply("🔍 Qarz olish uchun Xonadoshlar guruxidagi kontaktni tanlang:", {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error(error);
    }
});



// inline keyboard handler

selectContactForTakeDebt.action("tg_id_1", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("take_debt");
    } catch (error) {
        console.error(error);
    }
});


selectContactForTakeDebt.action("back", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("select_group_for_take_debt");
    } catch (error) {
        console.error(error);
    }
});


// Export the scene
export default selectContactForTakeDebt;