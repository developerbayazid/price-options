import axios from 'axios';
import { useEffect, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(
                'https://openapi.programming-hero.com/api/phones?search=iphone'
            )
            .then((data) => {
                const phoneData = data.data.data;
                const fakePhoneData = phoneData.map((phone) => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]),
                    };
                    return obj;
                });
                setPhones(fakePhoneData);
                setLoading(false);
            });
    }, []);
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold py-12">Best Phone Price Chart</h1>
            {loading && (
                <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                />
            )}

            <BarChart width={600} height={300} data={phones}>
                <Bar dataKey="price" fill="#7E22CE"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;
