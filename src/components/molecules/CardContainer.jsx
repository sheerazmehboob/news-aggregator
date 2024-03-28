import React from 'react'
import Card from './Card'

const CardContainer = ({articles}) => {

    console.log(articles);
  return (
    <div className='flex flex-wrap gap-5 justify-center lg:justify-start'>
    {articles?.map((article, index) => (
        <Card key={index} article={article}/>
    ))}
    </div>
  )
}

export default CardContainer