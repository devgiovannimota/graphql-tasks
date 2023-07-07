Documentação da API GraphQL-task

A API GraphQL fornecida possui os seguintes esquemas e mutações:

# Tipos de Objetos

### Task

- ` title: String
- ` description: String
- ` id: Int

### TaskInput

- ` title: String
- ` description: String

### Query

- ` tasks: [Task]
- ` getTaskById(id: Int): Task

### Mutation

- ` createTask(data: TaskInput): Task
- ` deleteTask(id: Int): Boolean
- ` updateTask(id: Int, data: TaskInput): Task

### User

- ` id: Int
- ` login: String
- ` avatar_url: String
- ` token: String
- ` tasks: [Task]

# Consultas Disponíveis

tasks: Retorna uma lista de todas as tarefas disponíveis.
getTaskById(id: Int): Retorna uma tarefa específica com base no ID fornecido.

# Mutations Disponíveis

- ` createTask(data: TaskInput): Cria uma nova tarefa com os dados fornecidos.
- ` deleteTask(id: Int): Exclui uma tarefa com o ID fornecido. Retorna true se a exclusão for bem-sucedida.
- ` updateTask(id: Int, data: TaskInput): Atualiza uma tarefa existente com os dados fornecidos. Retorna a tarefa atualizada.
