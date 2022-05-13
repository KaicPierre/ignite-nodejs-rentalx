import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: ['/src/modules/**/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch(error => console.log(error));

export { AppDataSource };
