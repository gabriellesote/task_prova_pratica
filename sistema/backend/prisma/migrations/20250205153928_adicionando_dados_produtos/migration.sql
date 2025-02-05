/*
  Warnings:

  - Added the required column `modified_at` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_produto` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `modified_at` DATETIME(3) NOT NULL,
    ADD COLUMN `nome_produto` VARCHAR(60) NOT NULL,
    ADD COLUMN `quantidade` INTEGER NOT NULL,
    ADD COLUMN `valor` DOUBLE NOT NULL;
