import React from 'react';
import './Seguros.css'

class SegurosCarro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      marcaCarro: '',
      modeloCarro: '',
      tipoSeguro: '',
      mensagem: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário para o servidor ou processá-los de alguma forma
    this.setState({
      mensagem: 'Formulário enviado com sucesso!',
      nome: '',
      idade: '',
      marcaCarro: '',
      modeloCarro: '',
      tipoSeguro: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Solicitar Seguro de Carro</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="idade">Idade:</label>
            <input
              type="number"
              id="idade"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="marcaCarro">Marca do Carro:</label>
            <input
              type="text"
              id="marcaCarro"
              name="marcaCarro"
              value={this.state.marcaCarro}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="modeloCarro">Modelo do Carro:</label>
            <input
              type="text"
              id="modeloCarro"
              name="modeloCarro"
              value={this.state.modeloCarro}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tipoSeguro">Tipo de Seguro:</label>
            <select
              id="tipoSeguro"
              name="tipoSeguro"
              value={this.state.tipoSeguro}
              onChange={this.handleChange}
              required
            >
              <option value="">Selecione o tipo de seguro</option>
              <option value="Seguro Total">Seguro Total</option>
              <option value="Seguro de Colisão">Seguro de Colisão</option>
              <option value="Seguro de Terceiros">Seguro de Terceiros</option>
            </select>
          </div>
          <button className='button-test' type="submit">Enviar</button>
        </form>
        {this.state.mensagem && <p>{this.state.mensagem}</p>}
      </div>
    );
  }
}

export default SegurosCarro;