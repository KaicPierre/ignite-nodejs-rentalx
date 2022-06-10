import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'database',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
  synchronize: false,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database Connected');
  })
  .catch(error => console.log(error));

export { AppDataSource };
