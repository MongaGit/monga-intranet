# Estudos


#### Melhores praticas Diretório desenvolvimento NodeJS

```
monga-intranet/
  |- backend/
  |    |- src/
  |    |    |- config/
  |    |    |    |- database.ts         // Configuração do MongoDB
  |    |    |    |- express.ts         // Configuração do Express
  |    |    |
  |    |    |- controllers/
  |    |    |    |- authController.ts   // Controladores para autenticação
  |    |    |    |- chatController.ts   // Controladores para chat
  |    |    |
  |    |    |- middleware/
  |    |    |    |- authMiddleware.ts   // Middleware para autenticação com JWT
  |    |    |
  |    |    |- models/
  |    |    |    |- user.ts             // Modelagem do usuário
  |    |    |
  |    |    |- routes/
  |    |    |    |- authRoutes.ts       // Rotas para autenticação
  |    |    |    |- chatRoutes.ts       // Rotas para chat
  |    |    |
  |    |    |- services/
  |    |    |    |- authService.ts      // Serviços para autenticação
  |    |    |    |- chatService.ts      // Serviços para chat
  |    |    |
  |    |    |- app.ts                   // Configuração principal da aplicação
  |    |
  |    |- tsconfig.json                  // Configurações do TypeScript
  |    |- package.json                   // Dependências e scripts do backend
  |
  |- frontend/
  |    |- public/
  |    |    |- index.html                // Arquivo HTML principal
  |    |
  |    |- src/
  |    |    |- components/
  |    |    |    |- ChatComponent.tsx    // Componente para chat
  |    |    |    |- LoginComponent.tsx   // Componente para login
  |    |    |
  |    |    |- pages/
  |    |    |    |- ChatPage.tsx         // Página de chat
  |    |    |    |- LoginPage.tsx        // Página de login
  |    |    |
  |    |    |- App.tsx                   // Componente principal da aplicação
  |    |    |- index.tsx                 // Ponto de entrada da aplicação
  |    |
  |    |- tsconfig.json                  // Configurações do TypeScript
  |    |- package.json                   // Dependências e scripts do frontend
  |
  |- .gitignore                          // Arquivo de configuração do Git
  |- README.md                           // Documentação do projeto
  |- package.json                        // Dependências e scripts principais
  |- tsconfig.json                       // Configurações globais do TypeScript
```