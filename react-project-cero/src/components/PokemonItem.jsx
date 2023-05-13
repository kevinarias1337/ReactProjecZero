import axios from "axios";
import React, { useEffect, useState } from "react";

export const PokemonItem = (props) => {
    const { item } = props;
    const [detail, setDetail] = useState({});

    const getDetail = async() => {
        await axios.get(item.url).then((response) => {
            setDetail(response.data)
        });
    }

    useEffect(() => {
        getDetail();
    }, []);

    console.log(detail);

    return (
        <>
            {
                item && detail && (
                    <div className="pokemon-item">
                        <h2>{item?.name}</h2>
                        <img src={detail?.sprites?.front_default} alt="Pokemon"></img>
                        <p>Número en la Pokedex {detail?.order}</p>
                    </div>
                )
            }
        </>

    );
}