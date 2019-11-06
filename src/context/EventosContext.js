import React from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;
class EventosProvider extends React.Component {
  token = 'FF5ITSRTKG6RGWDKBELB';
  ordernar = 'date'

  state = {
    eventos : []
  }

  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}
    &categories=${busqueda.categoria}&sort_by=${this.ordernar}&token=${this.token}&locale=es_ES`;

    //Consultar la API con la URL
    const eventos = await axios(url);

    this.setState({
      eventos: eventos.data.events});
  }

  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          obtenerEventos: this.obtenerEventos,
        }}
      >
      {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
