const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');
    return conteudoDoArquivo;
  }
  catch(e) {
    return null;
  }
}

module.exports = leArquivo;
