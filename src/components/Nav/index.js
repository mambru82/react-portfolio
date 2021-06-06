import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"
import personalPhoto from '../../assets/images/CASTRO-ECHEVERRY.JPG'


function Nav(props) {

    const {
        categories=[],
        setCurrentCategory,
        currentCategory,
    } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory]);

    return (
       <header className="flex-row px-1">
            {/* <img src={personalPhoto} alt="portrait of Eduardo Castro"></img> */}
            <h1>
                 <a data-testid="link" href="./index.html">Eduardo Castro</a>
            </h1>
      <nav>
        <ul className="flex-row">
            {categories.map((category) => (
            <li  className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'}`} 
                key={category.name} 
                onClick={()=>{
                    setCurrentCategory(category)}} >
            
                {capitalizeFirstLetter(category.name)}
            
            </li> ))}
        </ul>
      </nav>
        </header>
    )
}

export default Nav;