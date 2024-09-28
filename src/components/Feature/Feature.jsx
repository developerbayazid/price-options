import PropTypes from 'prop-types';
import { FcOk } from 'react-icons/fc';

const Feature = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center">
                <FcOk className="mr-4"></FcOk>
                {feature}
            </p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string,
};
export default Feature;
