import './List.css'

function List({
    //La propiedad children es reconocida por defecto dentro de react, 
    //la info es recibida desde el componente padre, que en este caso es App
    children}) {
    return (
        <ul className='TodoList'>
            {children}
        </ul>
    );
  }
  
  export { List };