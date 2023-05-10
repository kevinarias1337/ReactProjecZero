import React, { Component } from "react";
import Gallery from "./Gallery";
import { motion } from 'framer-motion'

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Slider">
                    <h1>Bienvenido, ¡reserva tu mesa ahora!</h1>
                    <a className="btn-white" href="#">Reservar</a>
                </div>
                <div className="Products">
                    <h2>Nuestros productos</h2>
                    <motion.div className="Gallery-Container">
                        <motion.div className="Gallery-Slider" drag='x' dragConstraints={{ right: 0, left: -2758 }}>
                            {Gallery.map(pic =>
                            (<motion.div className="Gallery-Item">
                                <img src={pic} alt=""></img>
                            </motion.div>))
                            }
                        </motion.div>
                    </motion.div>
                </div>
                <div className="Content">
                    <h2>Papa's Pizzeria</h2>
                    <p>
                        Mucho más que pizzas
                        Nuestra intención en La Viñeta, no es solo proporcionarte una buena comida, queremos ir más allá. Queremos que visitar nuestro restaurante se convierta en toda una experiencia, en la que puedas  vivir todo tipo de sensaciones, y que por un rato, puedas viajar a Italia, a través, no solo del producto que ofrecemos, sino del ambiente propio de nuestro local.
                        Es igual si nos visitas solo, en pareja, con amigos o en grandes grupos, lo que pretendemos es que, al salir de nuestro restaurante, hayas podido vivir, con los 5 sentidos, la auténtica esencia de una pizzería italiana, y que, por supuesto, quieras volver a visitarnos
                        La auténtica experiencia de una pizzería napolitana.
                    </p>
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content;