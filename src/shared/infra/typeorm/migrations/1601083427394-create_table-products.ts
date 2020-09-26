import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTableProducts1601083427394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'cost',
                    type: 'varchar'
                },
                {
                    name: 'digital',
                    type: 'boolean'
                },
                { 
                    name: 'created_at', 
                    type: 'timestamp', 
                    default: 'now()', 
                },
                { 
                    name: 'updated_at', 
                    type: 'timestamp', 
                    default: 'now()', 
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
