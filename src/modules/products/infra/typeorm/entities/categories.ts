import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany} from'typeorm'
import Product from './product'

@Entity('product_categories')
  class Category {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    category: string

    @OneToMany(type => Product, product => product.id)
    products: Product[];

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_ate:Date

}

export default Category