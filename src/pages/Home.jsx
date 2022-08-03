import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import ReactPaginate from "react-paginate";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";
import { useSelector, useDispatch } from 'react-redux';
import {setCategoryId, setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {categoryId,sort,currentPage} = useSelector((state) => state.filter);

    const {searchValue} = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const onChangePage = (number) =>{
        dispatch(setCurrentPage(number))
    };

    useEffect(()=>{
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
        }

    },[]);


    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }

    useEffect(() => {
        setIsLoading(true);

        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sort.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios.get(`https://62c9bcd84795d2d81f811fa0.mockapi.io/items?page=${currentPage}&limit=4&${
                category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((res) =>{
                setItems(res.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0)
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    useEffect(()=>{
        const queryString = qs.stringify({
                sortProperty:sort.sortProperty,
                categoryId,
                currentPage
            });
        navigate(`?${queryString}`);
    },[categoryId, sort.sortProperty, currentPage]);

    const pizzas = items.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>));
    const sceletons = [...Array(6)].map((_, index) => <Skeleton key={index}/>);
    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading ? sceletons : pizzas

                    }
                </div>
                <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
            </div>

        </>
    );
};

export default Home;
