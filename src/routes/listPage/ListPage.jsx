import Filter from '../../components/filter/Filter';
import './listPage.scss';
import { listData } from './../../lib/dummydata';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <div className='listCollection'>
          {data.map(item=>(
            <Card key={item.id} item={item}/>
          ))}
          </div>
        </div>
      </div>
      <div className="mapContainer">
        <div className="map">
          <Map items={data}/>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
