<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210127130447 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE proprietes_images (id INT AUTO_INCREMENT NOT NULL, proprietes_id INT DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, INDEX IDX_85DC84EA1005530 (proprietes_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE proprietes_images ADD CONSTRAINT FK_85DC84EA1005530 FOREIGN KEY (proprietes_id) REFERENCES proprietes (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE proprietes_images');
    }
}
