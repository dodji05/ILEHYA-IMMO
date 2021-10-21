<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210504073258 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE prix_reference (id INT AUTO_INCREMENT NOT NULL, zone_id INT DEFAULT NULL, sous_zone_id INT DEFAULT NULL, prix INT DEFAULT NULL, UNIQUE INDEX UNIQ_10D3661A9F2C3FAB (zone_id), UNIQUE INDEX UNIQ_10D3661ABC2547E6 (sous_zone_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE souszone (id INT AUTO_INCREMENT NOT NULL, libelle_souszone VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE prix_reference ADD CONSTRAINT FK_10D3661A9F2C3FAB FOREIGN KEY (zone_id) REFERENCES arrondissement (id)');
        $this->addSql('ALTER TABLE prix_reference ADD CONSTRAINT FK_10D3661ABC2547E6 FOREIGN KEY (sous_zone_id) REFERENCES souszone (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prix_reference DROP FOREIGN KEY FK_10D3661ABC2547E6');
        $this->addSql('DROP TABLE prix_reference');
        $this->addSql('DROP TABLE souszone');
    }
}
