//Hnadler main bot
//Linguagem usada: js

//Usando infinitos fs.readdir para ler todos os arquivos do diretorio sem aliases

const fs = require('fs');

fs.readdir("./pasta/arquivo", (err, files) => {
    if(err) console.error(err);
    let arquivoCommand = files.filter(f => f.split(".").pop() === "js");
    arquivoCommand.forEach(f => {
        let props = require(`./pasta/arquivo/${f}`);
        client.commands.set(props.help.name, props);
        console.log(`${f} carregado com sucesso!`);
    })
})

fs.readdir("./pasta2/arquivo", (err, files) => {
    if(err) console.error(err);
    let arquivoCommand = files.filter(f => f.split(".").pop() === "js");
    arquivoCommand.forEach(f => {
        let props = require(`./pasta2/arquivo/${f}`);
        client.commands.set(props.help.name, props);
        console.log(`${f} carregado com sucesso!`);
    })
})

//Usando infinitos fs.readdir para ler todos os arquivos do diretorio com aliases

fs.readdir("./pasta/", (err, files) => {
    if(err) console.error(err);
    let arquivoCommand = files.filter(f => f.split(".").pop() === "js");
    arquivoCommand.forEach(f => {
        let props = require(`./pasta/${f}`);
        client.commands.set(props.help.name, props);
        console.log(`${f} carregado com sucesso!`);
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        })
    })
})

fs.readdir("./pasta2/", (err, files) => {
    if(err) console.error(err);
    let arquivoCommand = files.filter(f => f.split(".").pop() === "js");
    arquivoCommand.forEach(f => {
        let props = require(`./pasta2/${f}`);
        client.commands.set(props.help.name, props);
        console.log(`${f} carregado com sucesso!`);
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        })
    })
})

//Fazer que so detecta o arquivo e os diretorios sem loops de fs.readdir sem aliases

fs.readdirSync('./pasta/').forEach(dir => {
    fs.readdir(`./pasta/${dir}`, (err, files) => {
        if (err) throw err;
        let jsFiles = files.filter(f => f.split(".").pop() === "js");
        jsFiles.forEach(file => {
            let props = require(`./pasta/${dir}/${file}`);
            try {
                client.commands.set(props.help.name, props);
            } catch (err) {
                return console.log(err);
            }
        });
    });
});

//Fazer que so detecta o arquivo e os diretorios sem loops de fs.readdir com aliases

fs.readdirSync('./pasta/').forEach(dir => {
    fs.readdir(`./pasta/${dir}`, (err, files) => {
        if (err) throw err;
        let jsFiles = files.filter(f => f.split(".").pop() === "js");
        jsFiles.forEach(file => {
            let props = require(`./pasta/${dir}/${file}`);
            try {
                client.commands.set(props.help.name, props);
                props.help.aliases.forEach(alias => {
                    client.aliases.set(alias, props.help.name);
                })
            } catch (err) {
                return console.log(err);
            }
        });
    });
});
