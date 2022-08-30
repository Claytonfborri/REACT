import React from 'react'

const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o evento');
    }
  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log('clicou')}>Clique aqui também!</button>
        </div>
    </div>
  )
}

export default Events