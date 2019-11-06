import React from 'react';

import Evento from './Evento'

import PropTypes from 'prop-types';

import {EventosConsumer} from '../context/EventosContext'

const propTypes = {}

const defaultProps = {}

const ListaEventos = (props) => {
  return(
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <h1>Resultados</h1>
      <EventosConsumer>
      { value => {
        return value.eventos.map(evento =>  (
          <Evento key={evento.id} evento={evento}/>
        ))
      }}
      </EventosConsumer>
    </div>
  )
};

ListaEventos.propTypes = propTypes
ListaEventos.defaultProps = defaultProps

export default ListaEventos;
