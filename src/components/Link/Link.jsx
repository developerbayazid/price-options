import PropTypes from 'prop-types';

const Link = ({ route }) => {
    const { name, path } = route;
    return (
        <li className="mr-5 last:mr-0">
            <a
                className="md:hover:bg-red-200 duration-500 md:px-5 md:py-2 md:rounded hover:text-black"
                href={path}
            >
                {name}
            </a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object.isRequired,
};
export default Link;
