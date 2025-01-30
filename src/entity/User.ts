import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    telegramId!: number; // Telegram User ID (unique identifier)

    @Column({ nullable: true })
    username?: string; // Telegram username (optional)

    @Column()
    firstName!: string; // First name

    @Column({ nullable: true })
    lastName?: string; // Last name (optional)

    @CreateDateColumn()
    createdAt!: Date; // Auto-generated timestamp

    @UpdateDateColumn()
    updatedAt!: Date; // Auto-updated timestamp
}
