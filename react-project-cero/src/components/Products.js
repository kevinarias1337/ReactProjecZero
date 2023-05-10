import React, { Component } from "react";
import Gallery from "./Gallery";
import { motion } from 'framer-motion'

class Products extends Component {
    render() {
        return (
            <div className="Products">
                <h2>Nuestros productos</h2>
                <motion.div className="Gallery-Container">
                    <motion.div className="Gallery-Slider" drag='x' dragConstraints={{right:0, left:-2758}}>
                        {Gallery.map(pic =>
                        (<motion.div className="Gallery-Item">
                            <img src={pic} alt=""></img>
                        </motion.div>))
                        }
                    </motion.div>
                </motion.div>
            </div>
        );
    }
}

export default Products;