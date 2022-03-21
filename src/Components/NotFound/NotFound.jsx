import {Routes,Route} from 'react-router-dom'
//See the Location ./components? Correctly
export const NotFound = () => {
  return (
    <div className="notFound">
    <h1 className="p-2 text-4xl font-bold text-center text-blue-700 animate-pluse">Sorry Page Not Found</h1>
      <img alt="notfound" src="https://ih1.redbubble.net/image.3030814282.8054/ur,mouse_pad_flatlay,square,600x600.jpg" className="p-2" />
      {/* Show some 404 not found image or component here */}
    </div>
  );
};