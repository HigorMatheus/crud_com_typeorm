import {
    getConnection,
    MigrationInterface,
     QueryRunner,
    } from "typeorm";
import Product from "../../../../modules/products/infra/typeorm/entities/product";

export class addCategoryInProducts1601153864869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getConnection()
        .createQueryBuilder()
        .update(Product).set({ name: 'category_id'}).execute()
        // await queryRunner.addColumn("products", new TableColumn({
        //     name: "category_Id",
        //     type: "int"
        // }));
        // await queryRunner.createForeignKey("products", new TableForeignKey({
        //     columnNames: ["category_Id"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "product_categories",
        // }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
