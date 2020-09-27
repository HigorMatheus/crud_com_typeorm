
import {
    MigrationInterface,
     QueryRunner,
     Table
} from "typeorm";

export class CreateCategoriaProduct1601144136933 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'product_categories',
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'category',
                    type: 'varchar'
                },
                { 
                    name: 'create_at', 
                    type: 'timestamp', 
                    default: 'now()',
                },
                { 
                    name: 'update_at', 
                    type: 'timestamp', 
                    default: 'now()', 
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product_categories')
    }

}
