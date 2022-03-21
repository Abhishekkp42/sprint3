import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mx-20 navbar"
        style={{
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "space-evenly"
      }}>
      {/* <button onClick={onClick} className='px-1 m-1 text-white bg-blue-500 rounded border-2 border-blue-500 hover:bg-white hover:text-blue-500'></button> */}
     <Link to="/"> <button className="px-1 m-1 text-white bg-blue-500 rounded border-2 border-blue-500 Home hover:bg-white hover:text-blue-500">Home</button></Link>
     <Link to="/section/mystery"> <button className="px-1 m-1 text-white bg-blue-500 rounded border-2 border-blue-500 Mystery hover:bg-white hover:text-blue-500">Mystery</button></Link>
      <Link to="/section/technology"><button className="px-1 m-1 text-white bg-blue-500 rounded border-2 border-blue-500 Technology hover:bg-white hover:text-blue-500">Technology</button></Link>
      <Link to="/section/mythology"><button className="px-1 m-1 text-white bg-blue-500 rounded border-2 border-blue-500 Mythology hover:bg-white hover:text-blue-500">Mythology</button></Link>
      <Link to="/section/history"><button className="px-1 m-1 text-white bg-blue-500 rounded border-2 border-blue-500 history hover:bg-white hover:text-blue-500">history</button></Link>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <Link to="/history"><button className="history"> Link to history here  </button></Link>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};