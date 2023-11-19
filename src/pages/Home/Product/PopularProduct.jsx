import React, { useEffect } from 'react';
import useAxios from '../../hook/useAxios';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const PopularProduct = () => {

    const axiosPublic = useAxios();
    const { data: products = [], refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const res = await axiosPublic.get("/products");
          return res.data;
        },
      });
      const popular = products.filter(item=>item.category === 'popular');
      console.log(popular);

   
    
    return (
        <div>
          <h1><h1>Popular Product:{popular.length}</h1></h1>
        </div>
    );
};

export default PopularProduct;