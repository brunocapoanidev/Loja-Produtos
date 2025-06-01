const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//produtos
const ListaDeProdutos = [
  { id: 1, produto: "celular", preco: "R$ 1500,00", estoque: 20 },
  { id: 2, produto: "computador", preco: "R$ 3000,00", estoque: 10 },
  { id: 3, produto: "videogame", preco: "R$ 4500,00", estoque: 15 },
  { id: 4, produto: "tablet", preco: "R$ 1200,00", estoque: 25 },
  { id: 5, produto: "fone de ouvido", preco: "R$ 250,00", estoque: 50 },
  { id: 6, produto: "smartwatch", preco: "R$ 800,00", estoque: 30 },
  { id: 7, produto: 'monitor 24"', preco: "R$ 700,00", estoque: 12 },
  { id: 8, produto: "teclado mecânico", preco: "R$ 350,00", estoque: 40 },
  { id: 9, produto: "mouse gamer", preco: "R$ 180,00", estoque: 60 },
  {
    id: 10,
    produto: "caixa de som bluetooth",
    preco: "R$ 300,00",
    estoque: 22,
  },
];

//exiber os produtos
app.get("/home", (req, res) => {
  res.render("home", { ListaDeProdutos });
});

// Rota para produto
app.get("/products/:id", (req, res) => {
  const products = ListaDeProdutos[parseInt(req.params.id) - 1];
  res.render("produtos", { products });
});
app.listen(3000, () => {
  console.log("app executando");
});
