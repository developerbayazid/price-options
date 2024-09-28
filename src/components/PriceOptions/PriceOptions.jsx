import { useEffect, useState } from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then((res) => res.json())
            .then((data) => setPriceOptions(data));
    }, []);
    return (
        <div>
            <h2 className="text-5xl text-center py-7 font-bold">
                Best price option in town
            </h2>
            <div className="md:grid grid-cols-3 gap-7 m-12">
                {priceOptions.map((option) => (
                    <PriceOption key={option.id} option={option}></PriceOption>
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;
