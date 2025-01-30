# Telegraf.js Bot

A Node.js-based Telegram bot built with [Telegraf.js](https://telegraf.js.org/).

## Features

- Easily extendable and customizable.
- Lightweight and fast.
- Secure and supports `.env` configuration.

## Requirements

- Node.js (version 14 or later)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/abduraimovabdurahmon/telegrambot-scenes-basescene-example
cd telegrambot-scenes-basescene-example
```

### 2. Install Dependencies

Use npm to install the required dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

1. Copy the example environment configuration file to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file in your favorite text editor and fill in the required fields. For example:

   ```env
   BOT_TOKEN=your-telegram-bot-token
   ```

   - `BOT_TOKEN`: Obtain this token from [BotFather](https://core.telegram.org/bots#botfather).

### 4. Run the Bot

To start the bot, run the following command:

```bash
node index
```

Alternatively, if you want to enable live-reloading during development, you can use [nodemon](https://www.npmjs.com/package/nodemon):

```bash
npx nodemon index
```

### 5. Interact with Your Bot

Search for your bot on Telegram using the username you set up with BotFather and start chatting!

## Project Structure

The project structure is organized as follows:

```
.
├── README.MD           # Documentation for the project, detailing setup, usage, and features.
├── form.json           # JSON file, likely used for managing form data or configuration.
├── index.js            # Entry point of the bot; initializes the bot and handles core logic.
├── scenes/             # Directory for different bot scenes, handling specific user interactions.
│   ├── fish.js         # Scene script for handling interactions related to "fish."
│   └── phone.js        # Scene script for handling interactions related to "phone."
│   ...                 # Other scenes
└── stage.js            # Manages the stages and scene transitions for the bot.

```

## Scripts

- `npm start`: Starts the bot using Node.js.
- `npm run dev`: Starts the bot with `nodemon` for live reloading (if configured in `package.json`).

## Contributing

Feel free to fork this project, submit pull requests, or open issues. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

