import { v4 as uuidV4 } from 'uuid';
import { hash } from 'bcryptjs';

import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { AppDataSource } from '..';

async function create() {
  const password = await hash('admin', 8);
  await AppDataSource.initialize();
  await AppDataSource.createQueryBuilder()
    .insert()
    .into(User)
    .values({
      id: uuidV4(),
      name: 'Rentx',
      driver_license: 'XXX',
      email: 'admin@rentx.com',
      password,
      is_admin: true,
      created_at: new Date(),
    })
    .execute();
  await AppDataSource.destroy();
}

create()
  .then(() => console.log('User admin created'))
  .catch(err => console.log(err));
