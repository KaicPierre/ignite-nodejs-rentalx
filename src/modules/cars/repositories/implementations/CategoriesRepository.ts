import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database';
import { Category } from '../../entities/Category';
import {
  ICreateCategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICreateCategoriesRepository {
  private repository: Repository<Category>;

  private static INSTACE: CategoriesRepository;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTACE) {
  //     CategoriesRepository.INSTACE = new CategoriesRepository();
  //   }
  //   return CategoriesRepository.INSTACE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });
    return category;
  }
}

export { CategoriesRepository };
