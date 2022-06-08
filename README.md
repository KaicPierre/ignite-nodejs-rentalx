**RF** => Requisitos funcionais
**RNF** => Requisitos não funcionais
**RN** => Regra de negócio


# Cadastro de carro

**RF**  
[X] Deve ser possível cadastrar um novo carro;  

**RN**  
[X] Não deve ser possível cadastrar mais de um carro com a mesma placa;  
[X] O carro deve ser cadastrado, por padrão, com disponibilidade ;  
* [] Um carro só pode ser cadastrado por um usuário administrador.  


# Listagem de carros

**RF**  
[] Deve ser possível listar todos os carro disponíveis.

**RN**  
[] O usuário não precisa estar logado no sistema.


# Cadastro de especificação no carro

**RF**  
[ ] Deve ser possível cadastrar uma especificação para um carro;  
[ ] Deve ser possível listar todas as especificações;  
[ ] Deve ser possível listar todos os carros.

**RN**  
[ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado;  
[ ] Não deve ser possível cadastrar outra especificação para um carro que já contém uma;  
[ ] Uma especificação só pode ser cadastrado por um usuário administrador.  


# Cadastro de imagem do carro

**RF**  
[ ] Deve ser possível cadastrar a imagem do carro.

**RNF**  
[ ] Utilizar o multer para o upload de arquivos.  

**RN**  
[ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;  
[ ] Uma iamgem só pode ser cadastrado por um usuário administrador.




# Aluguel de carro

**RF**  
[ ] Deve ser possível cadastrar um aluguel

**RN**  
[ ] O alugel deve ter duração mínima de 24 horas;  
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;  
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

