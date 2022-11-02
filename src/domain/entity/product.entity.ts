export default class ProductEntity {
  public id: string;
  public name: string;
  public description: string;
  public quantity: number;
  public price: number;
  public created_at: Date;
  public updated_at: Date;

  constructor(params: {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    created_at: Date;
    updated_at: Date;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.quantity = params.quantity;
    this.price = params.price;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }

  public static create(params: {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    created_at: Date;
    updated_at: Date;
  }): ProductEntity {
    return new ProductEntity(params);
  }
}
