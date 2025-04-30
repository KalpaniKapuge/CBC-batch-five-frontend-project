import './App.css'
import Header from './components/header.jsx'
import ProductCard from './components/productCard.jsx'

function App() {
  

  return (
    <>
     <Header/>
     <ProductCard
             name="Apple Laptop"
             description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis a quo laudantium! 
             Sed officiis quam atque optio perferendis voluptas rem illum laudantium dicta ex doloremque nobis, 
             exercitationem non consequatur."
             price="1000/="
             picture="https://img.freepik.com/free-photo/laptop-stone-surface-sea-background_1232-430.jpg"
           />
           <ProductCard
             name="Gaming Laptop"
             description="Lorem ipsum dolor sit amet consectetur"
             price="84000/="
             picture="https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg"
           />
    </>
  )
}

export default App
