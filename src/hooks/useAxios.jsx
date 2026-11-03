import axios from 'axios';
import React from 'react';


const axiosInstance = axios.create({

baseURL:'https://zap-shift-server-topaz-sigma.vercel.app'
  
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;

//

//baseURL:'http://localhost:5000'