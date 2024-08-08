<?php declare(strict_types=1);

namespace ZrmSwSurcharge\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1722878022CreateSurchargeTable extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1722878022;
    }

    public function update(Connection $connection): void
    {
        $sql = <<<SQL
CREATE TABLE IF NOT EXISTS `surcharge` (
    `id` BINARY(16) NOT NULL,
    `version_id` BINARY(16) NOT NULL,
    `type` VARCHAR(255) COLLATE utf8mb4_unicode_ci,
    `surcharge_value` float NOT NULL DEFAULT '0',
    `active` TINYINT(1) COLLATE utf8mb4_unicode_ci,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3),
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_unicode_ci;
SQL;

        $connection->executeStatement($sql);
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}
