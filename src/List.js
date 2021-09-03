import React from 'react';

const List = (props) => {
  return (
    <>
    {props.people.map((person)=>{
      const {id ,name ,age ,image} = person
      return(
        <div className="person" key={id}>
          <img src={image} alt=''></img>
          <h4>{name}</h4>
          <p>{age}</p>


        </div>
      )

    })}

  
    </>
  );
};

export default List;


