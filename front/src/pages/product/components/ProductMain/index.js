import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { withRouter, useParams } from 'react-router-dom';

//component import
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';

//fake data
// import ProductList from '../../data/ProductList';
import UserLike from '../../data/UserLike';

function ProductMain(props) {
    const { refresh } = props;
    const { category } = useParams();

    const [data, setData] = useState(null);
    const [brandList, setBrandList] = useState(null);
    const [categoryProduct, setCategoryProduct] = useState(null);
    const [displayProducts, setDisplayProducts] = useState(null);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState({
        minPrice: '',
        maxPrice: '',
        brand: '0',
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(filter);
    }, [filter]);

    useEffect(() => {
        const getProductList = async () => {
            try {
                let response = await axios.get(`${API_URL}/products/all`);
                setData(response.data.allProduct);
                setBrandList(response.data.brandList);
            } catch (e) {
                setError(e.message);
            }
        };
        getProductList();
    }, []);

    //change category
    useEffect(() => {
        const filter = (categoryId) => {
            return data.filter((item) => {
                return item.product_category_id === categoryId;
            });
        };

        const toCategory = () => {
            if (data) {
                switch (category) {
                    case 'allProduct':
                        setCategoryProduct(data);
                        setDisplayProducts(data);
                        break;
                    case 'clothe':
                        setCategoryProduct(filter(1));
                        setDisplayProducts(filter(1));

                        break;
                    case 'shoes':
                        setCategoryProduct(filter(2));
                        setDisplayProducts(filter(2));

                        break;
                    case 'equipment':
                        setCategoryProduct(filter(3));
                        setDisplayProducts(filter(3));

                        break;
                    case 'food':
                        setCategoryProduct(filter(4));
                        setDisplayProducts(filter(4));

                        break;
                    default:
                        console.log('error');
                }
            }
        };
        toCategory();
    }, [category, data, refresh]);

    //keyword search
    const doSearch = () => {
        let handelData = categoryProduct.filter((item) => {
            return item.product_name.indexOf(search) !== -1;
        });
        setDisplayProducts(handelData);
    };

    const clearFilter = () => {
        let newObj = {
            minPrice: '',
            maxPrice: '',
            brand: '0',
        };
        setFilter(newObj);
    };

    //TODO:filter function
    //filter
    const doFilter = () => {
        console.log(priceFilter(categoryProduct));
        setDisplayProducts(priceFilter(categoryProduct));
        clearFilter();
    };
    const priceFilter = (value) => {
        return value.filter((item) => {
            return (
                Number(item.minPrice) >= Number(filter.minPrice) &&
                Number(item.maxPrice) <= Number(filter.maxPrice)
            );
        });
    };

    //TODO:sort function

    //TODO:render display products
    // useEffect(() => {
    //     console.log(categoryProduct);
    // }, [categoryProduct]);

    /**
     *
     * @param {string} id 商品的id
     * @returns {boolean}
     */
    const isLike = (id) => {
        return UserLike.includes(id);
    };

    return (
        <>
            <main className="px-3 max-w-screen-xl my-0 mx-auto">
                <ProductFilter
                    brandList={brandList}
                    setSearch={setSearch}
                    search={search}
                    doSearch={doSearch}
                    setFilter={setFilter}
                    filter={filter}
                    doFilter={doFilter}
                />
                <section className="my-5 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {displayProducts &&
                        displayProducts.map((item) => {
                            return (
                                <ProductCard
                                    key={item.product_id}
                                    productName={item.product_name}
                                    category={item.product_category_name}
                                    brand={item.brand_name}
                                    photo={item.img_name}
                                    price={item.product_price}
                                    sale={item.total_sale}
                                    like={isLike(item.product_id)}
                                />
                            );
                        })}
                </section>
            </main>
        </>
    );
}

export default ProductMain;
