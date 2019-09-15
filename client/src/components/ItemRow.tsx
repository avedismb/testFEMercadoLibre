import React from 'react'; 

interface Props {
  item: any
  onClick: (id: string) => void
}

export const ItemRow: React.SFC<Props> = props => {
  const { id, picture, price, title, state_name, free_shipping } = props.item
  const { amount } = price

  const onClick = () => props.onClick(id)

  return <div onClick={onClick} key={id} className='container_item'> 
      <div className='left'>
        <img alt='' src={picture} />
      </div>
      <div className='right'>
        <div className='header_info'>
          <div className='price'>$ {amount}{free_shipping &&< span /> }</div>
          <div className='location'>{state_name} </div>
        </div>
        <div className='description'>{title}</div>
      </div>
  </div>
}