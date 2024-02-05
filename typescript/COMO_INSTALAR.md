## COMO INSTALAR O TYPESCRIPT NO BOT DISCORD

Crie o projeto, abra o terminal (Ctrl + `) e execute esses comandos:

```npm init -y```

```npm i --save discord.js dotenv recursive-readdir```

```npm i -D @types/node ts-node ts-node-dev typescript```

Após a instalação desses arquivos você irá criar o arquivo chamado ``tsconfig.json`` e adicionar o seguinte código:

```json
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "ESNext",
    "outDir": "dist",
    "sourceMap": false,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "resolveJsonModule": true,
    "importHelpers": true
  },
  "include": ["src", "enviroment.d.ts"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}

```

Após ter criado o ``tsconfig.json`` você irá criar o ``enviroment.d.ts`` com o código já pronto. [Clique aqui para acessar o enviroment.d.ts](https://github.com/aquelemesmo/scriptsBotDiscord/typescript/scripts/enviroment.d.ts)

Para inicializar o bot só executar

```npm run start```

E pronto, bot online :)