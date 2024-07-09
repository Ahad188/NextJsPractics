import React from 'react';

const DynamicPage = ({params,  searchParams}) => {
     console.log(params, searchParams);
     return (
          <div>
               <h3>this is dynamic page page number is : {params.id}  </h3>
               <h3>Search by : {searchParams?.category}</h3>
               <h3>Search by : {searchParams?.price}</h3>
          </div>
     );
};

export default DynamicPage;