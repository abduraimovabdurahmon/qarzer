Here’s an updated **`README.md`** file for your **qarzer** project, reflecting the provided directory structure:

---

# **qarzer - Telegram Debt-Tracking Bot**

`qarzer` is a Telegram bot designed to help users track debts, loans, and payments within a group of acquaintances. It allows users to lend or borrow money, keep track of loan statuses, make partial payments, and receive notifications when a loan is added or paid off.

---

## **Table of Contents:**
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Bot Flow](#bot-flow)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## **Installation**

### Prerequisites:
- **Node.js** version 16 or higher
- **npm** or **yarn** package manager
- **Telegram Bot Token** (You can get one from [BotFather](https://core.telegram.org/bots#botfather))

### Steps:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/abduraimovabdurahmon/qarzer
   cd telegrambot-scenes-basescene-example
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of your project and add your Telegram bot token:
   ```ini
   BOT_TOKEN=your-telegram-bot-token
   ```

4. **Run the bot:**
   ```bash
   npm run dev
   ```
   Or if you're in production:
   ```bash
   npm start
   ```

---

## **Project Structure**

Here’s the directory structure of the `qarzer` project:

```
.
├── README.MD                # Project overview and documentation
├── data
│   ├── database.sqlite       # SQLite database for storing user data and loans
│   └── session.json          # Session data for the bot
├── package-lock.json         # NPM lock file
├── package.json              # NPM package file with dependencies
├── src
│   ├── bot
│   │   ├── scenes            # Scene files for guiding users through interactions
│   │   │   └── start.ts      # Scene for starting the bot interaction
│   │   └── stage
│   │       └── stage.ts      # Scene stage for managing the flow of scenes
│   ├── data-source.ts        # Database connection and TypeORM configuration
│   ├── entity
│   │   └── User.ts           # User entity definition for database
│   ├── index.ts              # Entry point for starting the bot
│   ├── repository
│   │   └── UserRepository.ts # Repository for accessing user data
│   └── service
│       └── userService.ts    # Service for handling user-related operations
└── tsconfig.json             # TypeScript configuration
```

---

## **Bot Flow**

1. **Start the Bot:**
   When the user presses the "Start" button, the bot sends a welcome message and presents a set of options such as creating a new group, lending money, or checking existing loans.

2. **Create a Group:**
   The user can create a new group, and other users can join via an invitation link that the bot sends.

3. **Lend/Borrow Money:**
   Once in the group, users can lend or borrow money. They will be prompted to enter the loan amount and optionally provide a description for the loan.

4. **Tracking and Paying Loans:**
   Users can view all loans in the group, make partial payments, or delete loans as necessary.

---

## **How It Works**

### **User Creation**
Upon the first interaction with the bot, the user is registered in the database with their Telegram ID, username, and full name.

### **Group Management**
Users can create groups, and others can join using an invitation link. Each group is independent, and only members of the group can see and interact with the loans within that group.

### **Loans and Debts**
- **Lend Money:** The lender creates a new loan record with the amount, recipient, and description.
- **Borrow Money:** The borrower receives a notification and can keep track of the loan status.
- **Partial Payment:** The borrower can make partial payments, and the bot will update the loan balance.
- **Loan Deletion:** The loan can be deleted if necessary.

### **Database**
The bot uses **SQLite** for data storage. **TypeORM** is used for database operations. The database stores:
- Users (Telegram ID, username, name)
- Groups (IDs of users who are part of each group)
- Loans (amount, lender, borrower, description)
- Payments (tracking of partial payments made by borrowers)

### **Scenes**
The bot uses **Telegraf.js** with **Scenes** to guide the user through different interactions such as entering their name, phone number, or loan details. This structured flow ensures the user provides all the necessary information.

---

## **Usage**

### 1. **Start the bot:**
   The bot starts by welcoming the user and offering options like creating a new group or lending money.

### 2. **Create a new group:**
   The user can create a group by pressing the corresponding button. An invitation link will be sent to the user, which they can share with their acquaintances.

### 3. **Lend/Borrow Money:**
   After joining a group, users can lend or borrow money. They will need to input the loan amount and provide an optional description.

### 4. **Track and manage loans:**
   Users can view all loans in their group, make partial payments, or delete loans. The bot keeps track of the loan statuses and sends notifications when payments are made.

---

## **Development**

### **Adding new features or modifying the bot:**
- Modify or add scenes in the `/src/bot/scenes` folder.
- Update the database schema in `/src/entity` if necessary.
- Add new commands or functionalities in `/src/index.ts` or create new service methods in `/src/service`.

---

## **Contributing**

Feel free to fork the repository and submit a pull request if you want to contribute to the development of the bot. All contributions are welcome!

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you need more adjustments or additions to the README!