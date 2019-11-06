import React from 'react';

import {CategoriasConsumer} from '../context/CategoriasContext'
import {EventosConsumer} from '../context/EventosContext'
class Formulario extends React.Component {
  state= {
    nombre: '',
    categoria: '',

  }

  //Si el uusuario agrega un evento o categorias

  obtenerDatosEvento = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <EventosConsumer>
      {(value) => {
        return(


      <form onSubmit={e => {
        e.preventDefault();
        value.obtenerEventos(this.state)
      }}>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center" >
            Busca tu evento por Nombre o categoria
          </legend>
        </fieldset>

        <div className="uk-column-1-3@m uk margin">
          <div className="uk-margin" uk-margin="true">
            <input type="text"
              name="nombre"
              className="uk-input"
              placeholder="Nombre de evento o ciudad"
              onChange={this.obtenerDatosEvento}
            />
          </div>
          <div className="uk-margin" uk-margin="true">
            <select name="categoria" id="" className="uk-select"
            onChange={this.obtenerDatosEvento}>
            <option value="">--Selecciona una categoria--</option>
              <CategoriasConsumer>
               {(value) => {
                 return(value.categorias.map(categoria => (
                   <option key={categoria.id} value={categoria.id}
                      data-uk-form-select>
                        {categoria.name_localized}
                      </option>
                 )))
               }}
              </CategoriasConsumer>
            </select>
          </div>
          <div>
            <input type="submit" className="uk-button uk-button-danger"
              value="Buscar eventos"
             />
          </div>
        </div>
      </form>
    )
  }}
      </EventosConsumer>
    );
  }
}

export default Formulario;
