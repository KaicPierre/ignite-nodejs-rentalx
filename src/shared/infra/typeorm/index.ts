import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'database',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: ['src/modules/**/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database Connected');
  })
  .catch(error => console.log(error));

export { AppDataSource };