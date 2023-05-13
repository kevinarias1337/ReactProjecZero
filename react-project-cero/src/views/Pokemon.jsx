import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokemonItem } from "../components/PokemonItem";

const url = 'https://pokeapi.co/api/v2/pokemon';

export const Pokemon = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setPost(response.data)
        });
    }, []);

    if (!post) return null;

    return (
        <div className="pokemon-container">
            {post && post.results.map(item => (
                <PokemonItem item={item}/>
            ))}
        </div>
    );
}