// Import required modules from Telegraf
import { Scenes } from "telegraf";
import { MyContext } from "../../types";


interface SelectContactForGiveDebtState {
    selectedGroup: string;
}

// Create and name the scene specifically for selecting a group to give debt
const selectContactForGiveDebt = new Scenes.BaseScene<MyContext>(
    "select_contact_for_give_debt"
) as Scenes.BaseScene<MyContext> & {
    state: SelectContactForGiveDebtState;
};


// keyboard for selecting a group
const keyboard = [
    [
        {
            text: "Abdurahmon",
            callback_data: "unique_id_1"
        },
        {
            text: "Abdulaziz",
            callback_data: "unique_id_2"
        },
    ],
    [
        {
            text: "Abdulloh",
            callback_data: "unique_id_3"
        },
        {
            text: "Abdulvohid",
            callback_data: "unique_id_4"
        }
    ],
    [
        {
            text: "🔙 Orqaga",
            callback_data: "back"
        }
    ]
];


selectContactForGiveDebt.enter(async (ctx) => {
    try {
      await ctx.reply("🔍 Qarz berish uchun kontaktni tanlang:", {
        reply_markup: { inline_keyboard: keyboard }
      });
    } catch (error) {
      console.error(error);
    }
  });


// inline keyboard handler

selectContactForGiveDebt.action(/^unique_id_\d+$/, async (ctx) => {
    try {
      const selectedContact = ctx.match[0];
      await ctx.deleteMessage();
      ctx.scene.enter("give_debt", { 
        selectedGroup: (ctx.scene.state as SelectContactForGiveDebtState).selectedGroup,
        selectedContact
      });
    } catch (error) {
      console.error(error);
    }
  });


selectContactForGiveDebt.action("back", async (ctx) => {
    try {
        await ctx.deleteMessage();
        return ctx.scene.enter("select_group_for_give_debt");
    } catch (error) {
        console.error(error);
    }
});


// Export the scene
export default selectContactForGiveDebt;