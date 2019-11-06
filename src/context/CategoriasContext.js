import React, { Component } from 'react';
import axios from 'axios';

//Crear el context

const CatergoriasContext = React.createContext();

export const CategoriasConsumer = CatergoriasContext.Consumer;



class CategoriasProvider extends Component {
    token = 'FF5ITSRTKG6RGWDKBELB';

    state = {
        categorias: []
    }

    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categorias = await axios.get(url);

        this.setState({
          categorias: categorias.data.categories
        })

        console.log(categorias);

    }

    render() {
        return (
            <CatergoriasContext.Provider

                value={{
                    categorias: this.state.categorias
                }}>
                    {this.props.children}
            </CatergoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;
