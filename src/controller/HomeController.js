import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Eduardo',
      sobrenome: 'Gonçalves',
      email: 'dudue0578@gmail.com',
      idade: 45,
      peso: 90,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
