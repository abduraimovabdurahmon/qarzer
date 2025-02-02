// Import required modules from Telegraf
import { Scenes } from "telegraf";
import { UserService } from "../../service/userService";

const userService = new UserService();

// Create and name the scene
const start = new Scenes.BaseScene<Scenes.SceneContext>("start");

// When the scene is entered
start.enter(async (ctx) => {
    try {
        
        // bazada bor yoki yo'qligini tekshirish
        const exists = await userService.userExists(ctx.from?.id as number);
        // agar bazada bor bo'lsa

        if (exists) {
            return ctx.scene.enter("main");
        }
        else{
            await userService.registerUser(ctx.from?.id as number, ctx.from?.username as string, ctx.from?.first_name as string, ctx.from?.last_name as string);
            return ctx.scene.enter("main");
        }

    } catch (error) {
        console.error(error);
    }
});


export default start;