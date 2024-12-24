#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require("child_process");

const projectName = process.argv[2] || "my-new-project";
console.log("Obrigado por usar o My React Template");
console.log(`Criando um novo projeto chamado: ${projectName}...`);

// Clona o template base
execSync(`npx degit carlosad1981/my-react-template ${projectName}`, { stdio: "inherit" });

// Instala as dependências
execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

execSync(`cd ${projectName}`, { stdio: "inherit" });

console.log("Projeto criado com sucesso!");
console.log(`Para começar:\n  cd ${projectName}\n  npm run dev`);

// Caminho do arquivo index.js a ser removido, agora dentro da pasta do novo projeto
const indexFilePath = path.join(__dirname, projectName, 'index.js');

// Função para remover o arquivo
const removeFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Erro ao deletar o arquivo ${filePath}:`, err);
        } else {
            console.log(`Arquivo ${filePath} deletado com sucesso!`);
        }
    });
};

// Remover o arquivo index.js
removeFile(indexFilePath);

// Finalizar o processo após a remoção
process.exit(0);