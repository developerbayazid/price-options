import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-purple-700 text-white p-10 rounded-md flex flex-col mt-3">
            <h2 className="text-center">
                <span className="text-6xl font-bold">${price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl mt-12 text-center">{name}</h4>
            <div className="mt-7 flex-grow">
                {features.map((feature, index) => (
                    <Feature key={index} feature={feature}></Feature>
                ))}
            </div>
            <button className="w-full mt-5 rounded-md py-3 bg-orange-500 hover:bg-orange-700 duration-500">
                Buy Now
            </button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};
export default PriceOption;
