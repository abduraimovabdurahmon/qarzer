// Import required modules from Telegraf
import { Scenes } from "telegraf";
import { MyContext } from "../../types";

// Create and name the scene specifically for selecting a group to give debt
const selectGroupForGiveDebt = new Scenes.BaseScene<MyContext>("select_group_for_give_debt");


// keyboard for selecting a group
const keyboard = [
    [
        {
            text: "👥 Guruh 1",
            callback_data: "group_1"
        },
        {
            text: "👥 Guruh 2",
            callback_data: "group_2"
        }
    ],
    [
        {
            text: "👥 Guruh 3",
            callback_data: "group_3"
        },
        {
            text: "👥 Guruh 4",
            callback_data: "group_4"
        }
    ],
    [
        {
            text: "👥 Guruh 5",
            callback_data: "group_5"
        },
        {
            text: "👥 Guruh 6",
            callback_data: "group_6"
        }
    ],
    [
        {
            text: "👥 Guruh 7",
            callback_data: "group_7"
        },
        {
            text: "👥 Guruh 8",
            callback_data: "group_8"
        }
    ],
    [
        {
            text: "👥 Guruh 9",
            callback_data: "group_9"
        },
        {
            text: "👥 Guruh 10",
            callback_data: "group_10"
        }
    ],
    [
        {
            text: "🔙 Orqaga",
            callback_data: "back"
        }
    ]
]



selectGroupForGiveDebt.enter(async (ctx) => {
    try {
      await ctx.reply("💰 Qarz berish uchun guruhni tanlang:", {
        reply_markup: { inline_keyboard: keyboard }
      });
    } catch (error) {
      console.error(error);
    }
  });



// Handle selected group using regex
selectGroupForGiveDebt.action(/^group_\d+$/, async (ctx) => {
    try {
      const selectedGroup = ctx.match[0];
      await ctx.deleteMessage();
      ctx.scene.enter("select_contact_for_give_debt", { selectedGroup });
    } catch (error) {
      console.error(error);
    }
  });



selectGroupForGiveDebt.action("back", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("main");
    } catch (error) {
        console.error(error);
    }
});

// Export the scene
export default selectGroupForGiveDebt;
