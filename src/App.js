import { useApplicationData } from './hooks/useApplicationData';


export default function App() {

  const {
    searchResults
  } = useApplicationData();
  
  console.log(searchResults);


  return (
    <div className="App">
      <h1>Shopify Challenge!</h1>
    </div>
  );
}
