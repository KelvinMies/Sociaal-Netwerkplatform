CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`voornaam` varchar(255) NOT NULL,
	`achternaam` varchar(255) NOT NULL,
	`gebruikersnaam` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_gebruikersnaam_unique` UNIQUE(`gebruikersnaam`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
