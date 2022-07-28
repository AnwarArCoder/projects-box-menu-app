import React, {useState} from 'react';
import SecTitle from './Components/SecTitle';
import CategoryLinks from './Components/CategoryLinks'
import ItemsBox from './Components/ItemsBox'
import dataFake from './data'

function App() {

  const [ dataFaking, setDataFaking ] = useState(dataFake)

  const filterByCategory = (cat) => {
    if(cat === 'All'){
      setDataFaking(dataFake)
    } else {
      const newArray = dataFake.filter( (item) => item.category === cat )
      setDataFaking(newArray)
    }
  }


  const allLinksCategory = [ 'All', ...new Set( dataFake.map( item => item.category ) ) ]

  return (
    <div className="App py-100-70">
      <SecTitle />
      <div className='container'>
        <CategoryLinks filterByCategory={filterByCategory} allLinksCategory={allLinksCategory} />
        <ItemsBox dataFaking={dataFaking} />
      </div>
    </div>
  );
}

export default App;
