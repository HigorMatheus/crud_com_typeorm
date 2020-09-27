import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne} from'typeorm'
import Category from "./categories"

@Entity('products')
  class Product {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    cost: string

    @Column()
    tipo: string

    @ManyToOne(type => Category, category => category.id)
    category_id: string;
    

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_ate:Date

}

export default Product