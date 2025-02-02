// Import required modules from Telegraf
import { Scenes } from "telegraf";

// Create and name the scene specifically for selecting a group to give debt
const getGroup = new Scenes.BaseScene<Scenes.SceneContext>("get_group");


// keyboard for selecting a group
const keyboard = [
    [
        {
            text: "Gurux nomini o'zgartirish",
            callback_data: "change_group_name"
        },
    ],
    [
        {
            text: "🔙 Orqaga",
            callback_data: "back"
        }
    ]
];

getGroup.enter(async (ctx) => {
    try {
        await ctx.reply("Xonadoshlar guruxi\n\nFoydalanuvchilar soni: 10\n\nFoydalanuvchilar:\nAbduraxmon\nAzizbek\nAsadullo", {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error(error);
    }
});


// inline keyboard handler



// back button handler
getGroup.action("back", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("get_groups");
    } catch (error) {
        console.error(error);
    }
});


// Export the scene
export default getGroup;
