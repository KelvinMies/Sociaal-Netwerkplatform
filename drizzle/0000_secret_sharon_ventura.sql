CREATE TABLE `groepen` (
	`id` int AUTO_INCREMENT NOT NULL,
	`naam` varchar(255) NOT NULL,
	`beschrijving` text,
	`datum_van_oprichting` date NOT NULL,
	`beheerderID` int NOT NULL,
	CONSTRAINT `groepen_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`voornaam` varchar(255) NOT NULL,
	`achternaam` varchar(255) NOT NULL,
	`gebruikersnaam` varchar(255) NOT NULL,
	`e-mail` varchar(255) NOT NULL,
	`wachtwoord` varchar(255) NOT NULL,
	`geboortedatum` date,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_gebruikersnaam_unique` UNIQUE(`gebruikersnaam`),
	CONSTRAINT `users_e-mail_unique` UNIQUE(`e-mail`)
);
--> statement-breakpoint
ALTER TABLE `groepen` ADD CONSTRAINT `groepen_beheerderID_users_id_fk` FOREIGN KEY (`beheerderID`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;