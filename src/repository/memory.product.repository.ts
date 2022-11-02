import IBaseRepository from "../domain/interfaces/base.repository";
import ProductEntity from "../domain/entity/product.entity";

export default class MemoryProductRepository
  implements IBaseRepository<ProductEntity>
{
  public create(data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public update(id: string, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public delete(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public find(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public findAll(): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
}
