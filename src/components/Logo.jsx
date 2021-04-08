import React, { useState, useEffect } from 'react';

const Logo = ({ palabra }) => {

    const [urlLogo, seturlLogo] = useState('');

    const generateLogo = async (logo) => {
        logo = logo.replace('$', '');
        const consulta = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${logo}`);
        const resultado = await consulta.json();
        

        seturlLogo(resultado[0].logo)
    };

    useEffect(() => {
        (async function(){
            if(urlLogo === ''){
                await await generateLogo(palabra);
            }
        })()
    }, [])

    return ( 

        <img src={urlLogo} alt="Logo"/>

     );
}
 
export default Logo;