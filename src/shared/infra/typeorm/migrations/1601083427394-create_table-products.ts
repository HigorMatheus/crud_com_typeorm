import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableProducts1601083427394 implements MigrationInterface {

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
                    name: 'tipo',
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
        await queryRunner.dropTable('products')
    }

}
