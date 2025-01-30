import { UserRepository } from "../repository/UserRepository";

export class UserService {
    /**
     * Checks if a user exists by Telegram ID.
     * @param telegramId - The Telegram user ID
     * @returns Promise<boolean> - True if user exists, otherwise false
     */
    async userExists(telegramId: number): Promise<boolean> {
        const user = await UserRepository.findOne({ where: { telegramId } });
        return !!user; // Convert to boolean (true if found, false otherwise)
    }


    /**
     * Registers a new user.
     * @param telegramId - The Telegram user ID
     * @param username - The Telegram username
     * @param firstName - The first name
     * @param lastName - The last name
     * @returns Promise<void>
     */

    async registerUser(telegramId: number, username: string, firstName: string, lastName: string): Promise<void> {
        await UserRepository.save({ telegramId, username, firstName, lastName });
    }
}
