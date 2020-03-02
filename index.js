var fs = require('fs');
var inquirer = require('inquirer');

inicio = '<!DOCTYPE html> <html> <head> <style type="text/css"> body {margin: 0;padding: 0;} table,td,tr { vertical-align: top;border-collapse: collapse; } </style> </head> <body> <table bgcolor="#EFEFEF" cellpadding="0" cellspacing="0" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%"> <tbody> <td style="word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top"> <div style="background-color:#EFEFEF;padding:46px 0;text-align:center;">';
fim =' </div> </td> </tbody> </table> </body> </html>';

inquirer
  .prompt([
    {
      name: 'edicao',
      message: 'Qual é o número da edição?',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.edicao);
    nome = 'informe_'+ answers.edicao + '.html';
    fs.writeFile(nome, inicio, 'utf8', function (err) {
        if (err) throw err;
    });
    blocos();
  });

function blocos(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'bloco',
          message: 'Deseja Inserir um bloco? Se sim, que tipo?',
          choices: ['Apenas Imagem', 'Apenas Texto', 'Imagem a esquerda, Texto a direita', 'Texto a esquerda, Imagem a direita', 'Não desejo inserir mais blocos'],
        },
      ])
      .then(answers => {
        console.info('Answer:', answers.bloco);
        switch(answers.bloco){
            case 'Apenas Imagem': 
                console.log(answers.bloco);
                blocos();
                break;
            case 'Apenas Texto': 
                console.log(answers.bloco);
                blocos();
                break;
            case 'Imagem a esquerda, Texto a direita': 
                console.log(answers.bloco);
                blocos();
                break;
            case 'Texto a esquerda, Imagem a direita': 
                console.log(answers.bloco);
                blocos();
                break;
            case 'Não desejo inserir mais blocos': 
                console.log(answers.bloco);
                fs.appendFile(nome, fim, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
                break;
        }
        
      });
}
