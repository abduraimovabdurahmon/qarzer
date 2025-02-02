import { Scenes } from "telegraf";

// Extend the base SceneSessionData correctly
export interface MySceneSession extends Scenes.SceneSessionData {
    selectedGroup?: string;
    selectedContact?: string;
    amount?: string;
    description?: string;
}

// Define MyContext properly with session type
export interface MyContext extends Scenes.SceneContext {
    session: Scenes.SceneSession<MySceneSession>;
}
