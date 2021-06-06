import React, {useState} from 'react';
import About from '../About';
import Nav from '../Nav';
import Work from '../Work';
import Contact from '../Contact'

function Header() {
  const [categories] = useState([
      {
        component: About,  
        name: "about",
          description: "a short description of me"
      },
      { component: Work,
        name: "work", description: "works in progress"},
      { component: Contact,
        name: "contact", description: "contact info"}
  ]) 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
      <main>
        <currentCategory.component></currentCategory.component>
 
      </main>
    </div>
  );
}

export default Header;
