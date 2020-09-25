import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from'typeorm'

@Entity()
  class Product  {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    cost: number

    @Column({
        default:false
    })
    digital: boolean

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_ate:Date

}

export default Product