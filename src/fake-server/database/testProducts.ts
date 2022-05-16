import axios from 'axios';
// import fetch from 'isomorphic-unfetch';
function Products({ data }) {
    return data;
}

Products.getInitialProps = async () => {
    const res = await axios.get('http://localhost:3063/v1/api/getProducts', { params: { pageIndex: 1, pageSize: 10 } });
    return { data: res.data };
};

export default Products();
