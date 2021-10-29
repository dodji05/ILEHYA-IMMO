<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210504080811 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prix_reference DROP INDEX UNIQ_10D3661A9F2C3FAB, ADD INDEX IDX_10D3661A9F2C3FAB (zone_id)');
        $this->addSql('ALTER TABLE prix_reference DROP FOREIGN KEY FK_10D3661ABC2547E6');
        $this->addSql('DROP INDEX UNIQ_10D3661ABC2547E6 ON prix_reference');
        $this->addSql('ALTER TABLE prix_reference CHANGE sous_zone_id souszone_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prix_reference ADD CONSTRAINT FK_10D3661AB6002ADF FOREIGN KEY (souszone_id) REFERENCES souszone (id)');
        $this->addSql('CREATE INDEX IDX_10D3661AB6002ADF ON prix_reference (souszone_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prix_reference DROP INDEX IDX_10D3661A9F2C3FAB, ADD UNIQUE INDEX UNIQ_10D3661A9F2C3FAB (zone_id)');
        $this->addSql('ALTER TABLE prix_reference DROP FOREIGN KEY FK_10D3661AB6002ADF');
        $this->addSql('DROP INDEX IDX_10D3661AB6002ADF ON prix_reference');
        $this->addSql('ALTER TABLE prix_reference CHANGE souszone_id sous_zone_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prix_reference ADD CONSTRAINT FK_10D3661ABC2547E6 FOREIGN KEY (sous_zone_id) REFERENCES souszone (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_10D3661ABC2547E6 ON prix_reference (sous_zone_id)');
    }
}
