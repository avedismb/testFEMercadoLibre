import React from 'react';

interface Props {
  categories: string[]
}

export const Categories: React.SFC<Props> = props => {
  const categories = props.categories.slice(0)
  const stringText = categories.length > 1 ? categories.slice(0,categories.length-1).join('  >  ') + '  >  ' : ''
  return <div className='categories'>{stringText}<span>{categories.pop()}</span></div>
}