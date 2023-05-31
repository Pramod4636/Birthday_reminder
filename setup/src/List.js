import React from 'react';

const List = ({people}) => {
console.log({people})
return (
<>     

     {
    
        people.map(
         (p)=>{
           const {img ,name,age,id} = p ;
           return (
           
           <article key = {id} className = 'person'>
             
             <img src={img} alt={name} />
             <div>
              <h4>{name}</h4>
              <p>{age}</p>
             </div>
           </article >
           
            );
         }




        )      
     
     
     
     
     }   
     
     <h2>hellow </h2>
      

 </>

  ) ;
};

export default List;
