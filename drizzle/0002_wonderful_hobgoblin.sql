ALTER TABLE `users` RENAME COLUMN `email` TO `e-mail`;--> statement-breakpoint
ALTER TABLE `users` DROP CONSTRAINT `users_email_unique`;--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_e-mail_unique` UNIQUE(`e-mail`);