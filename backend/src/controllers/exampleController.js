const ExampleController = {};

ExampleController.exampleRoute = (req, res) => {
    // Lógica do controlador
    res.json({ message: 'Exemplo de rota' });
};

module.exports = ExampleController;
