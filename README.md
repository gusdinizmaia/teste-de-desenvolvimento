# teste-de-desenvolvimento

Utilizando o comando <code>npm run start:dev</code> vai rodar como padrão na porta localhost:3000, utilizando o end point localhost:3000/api você tem acesso a todos os end points e suas informações.

os endpoint são:
/login - POST(login de usuário)
/users - POST(criação de usuário), GET(listagem de todos os usuários)
/users/:userId - GET(listagem do usuário), PATCH(edição de usuário), DELETE(deleção do usuário)
/task - POST(criação de task)
/task/:taskId - GET(listagem da task), PATCH(edição de task), DELTE(deleção da task)

*Todos estão documentados no endpoint localhost:3000/api, com utilização do swagger
