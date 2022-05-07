import { SpecificationRepository } from '../repositories/implementations/SpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private SpecificationRepository: SpecificationRepository) {}
  execute({ description, name }: IRequest): void {
    const specificationAlreadyExists =
      this.SpecificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already Exists');
    }

    this.SpecificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
