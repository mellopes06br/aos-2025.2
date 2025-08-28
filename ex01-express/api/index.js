import "dotenv/config";
import express from "express";
import cors from "cors";


console.log("Bem-vindo ao Express de Mel");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);


const app = express();

app.use(cors());


app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Mel");
});

app.get("/randomquote", (req, res) => {                              // Endpoint/Rota que retorna uma frase aleatória
  res.json(frasesRandom());
});

const frasesRandom = () => {                                      // Retorna uma frase aleatória
  const index = Math.floor(Math.random() * frases.length);
  return frases[index];
}

const frases = [
  "O dia que se planta, não é o dia que se colhe, siga em frente!", 
  "A persistência é o caminho do êxito.",
  "Seja a mudança que você quer ver no mundo.",
  "Sempre parece impossível. Até que seja feito.",
  "Acredite que você pode. Já é a metade do caminho.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Nunca desista dos seus sonhos!",
  "Você pode não ser o melhor agora mas pode ser o mais dedicado!",
  "A jornada de mil milhas começa com um único passo.",
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "Se você pode sonhar, você pode realizar.",
  "Não tente se tornar uma pessoa de sucesso, mas sim uma pessoa de valor.",
  "Eu não falhei. Só descobri 10.000 maneiras que não funcionam",
  "Falhei por diversas e diversas vezes novamente. É por isso que tive sucesso.",
  "Você não precisa enxergar toda a escadaria, apenas tome o primeiro passo."
]

function randomNumber(){
  var result = Math.floor(Math.random() * 10000000);   // Função para gerar o número aleatório
  return result;
}                   

  app.get('/randomnumber', function (req,res) {          // Endpoint/Rota que retorna um número aleatório
    res.json({number:  randomNumber()});
  })

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

 