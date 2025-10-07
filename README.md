# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
{
    id: 1,
    name: "Gucci",
    price: 1099,
    status: "Almost Out Of Stock",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "U.S.Polo",
    price: 2000,
    status: "Stock is Available",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Wrogn",
    price: 5099,
    status: "Almost Out Of Stock",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Allen Solly",
    price: 1099,
    status: "Out Of Stock",
    image: "https://via.placeholder.com/150",
  }
  import React, { useEffect, useState } from 'react';
import { Gamepad2, Music, Smartphone, MonitorSmartphone, Search } from 'lucide-react';
import Shimmer from './Shimmer';
import Error from './Error';

const EffectCard = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchText, setSearchText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    function handleSearch() {
        const filtered = products.filter((product) =>
            product.brand.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    function handleCategory(e) {
        const categoryMap = {
            Gaming: 'gaming',
            Music: 'audio',
            Mobile: 'mobile',
            Tv: 'tv',
        };
        const filtered = products.filter(
            (product) => product.category === categoryMap[e.currentTarget.name]
        );
        setFilteredProducts(filtered);
    }

    async function getData() {
        try {
            const res = await fetch('https://fakestoreapi.in/api/products');
            const data = await res.json();
            setProducts(data.products);
            setFilteredProducts(data.products);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(true);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mt-4">
            <section>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center gap-3 flex-wrap mb-3">
                            <button
                                className='btn btn-outline-primary'
                                name='Gaming'
                                onClick={handleCategory}
                                title="Gaming"
                            >
                                <Gamepad2 />
                            </button>
                            <button
                                className='btn btn-outline-success'
                                name='Music'
                                onClick={handleCategory}
                                title="Music"
                            >
                                <Music />
                            </button>
                            <button
                                className='btn btn-outline-danger'
                                name='Mobile'
                                onClick={handleCategory}
                                title="Mobile"
                            >
                                <Smartphone />
                            </button>
                            <button
                                className='btn btn-outline-warning'
                                name='Tv'
                                onClick={handleCategory}
                                title="Tv"
                            >
                                <MonitorSmartphone />
                            </button>
                            <input
                                type="text"
                                className="form-control w-auto"
                                placeholder='Search'
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <button
                                className='btn btn-primary'
                                onClick={handleSearch}
                                title="Search"
                            >
                                <Search />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row g-4">
                {!isLoading && <Shimmer />}
                {isLoading && !error && filteredProducts.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card h-100 border-0 shadow rounded-4">
                            <img src={product.image} alt="Invalid" className="img-fluid p-4" />
                            <div className="card-body">
                                <h5 className="card-title fw-semibold text-uppercase">{product.brand}</h5>
                                <h5 className="card-title fw-light">
                                    <pre className='fs-6 badge badge-warning'>{product.category}</pre>
                                </h5>
                                <h5 className="card-title fw-light">
                                    <pre className='fs-6 text-wrap'>{product.title}</pre>
                                </h5>
                            </div>
                            <div className="card-footer bg-white border-top-0">
                                <h6 className="text-success fw-bold fs-4 badge badge-success badge-pill">₹{product.price}</h6>
                                <div className="text-center">
                                    <button className='btn btn-primary btn-lg badge badge-info'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {error && <Error message={error} />}
            </div>
        </div>
    );
};

export default EffectCard;
