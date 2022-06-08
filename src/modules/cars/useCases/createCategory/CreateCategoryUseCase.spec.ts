import { CategoriesRepositoriesInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoriesInMemory: CategoriesRepositoriesInMemory;

describe('Create category', () => {
  beforeEach(() => {
    categoriesRepositoriesInMemory = new CategoriesRepositoriesInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoriesInMemory,
    );
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category test',
      description: 'Category description test',
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoriesInMemory.findByName(
      category.name,
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to duplicate a existent category name', async () => {
    expect(async () => {
      const category = {
        name: 'Category test',
        description: 'Category description test',
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
