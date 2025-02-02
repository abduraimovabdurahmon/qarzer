// Import required modules from Telegraf
import { Scenes } from "telegraf";

// Import scenes
// user start bosganida
import start from "../scenes/start";
import main from "../scenes/main";
import selectGroupForGiveDebt from "../scenes/give_debt/select_group";
import selectContactForGiveDebt from "../scenes/give_debt/select_contact";
import giveDebt from "../scenes/give_debt/give_debt";
import selectGroupForTakeDebt from "../scenes/take_debt/select_group";
import selectContactForTakeDebt from "../scenes/take_debt/select_contact";
import takeDebt from "../scenes/take_debt/take_debt";
import getGroups from "../scenes/groups/get_groups";
import getGroup from "../scenes/groups/get_group";
import confirmGiveDebt from "../scenes/give_debt/confirm_debt";
import confirmTakeDebt from "../scenes/take_debt/confirm_debt";
import { MyContext } from "../types";



// Create the stage with scenes
const stage = new Scenes.Stage<MyContext>([
    // user start bosganida
    start,
    // asosiy menu
    main,
    // qarz berish uchun scenelar
    selectGroupForGiveDebt,
    selectContactForGiveDebt,
    giveDebt,
    confirmGiveDebt,
    // qarz olish uchun scenelar
    selectGroupForTakeDebt,
    selectContactForTakeDebt,
    takeDebt,
    confirmTakeDebt,
    // guruxlarim
    getGroups,
    getGroup
]);

// Export the stage
export default stage;
