import './Person.css'

 const Person = (props) => {
    const {name, title, city, employer, id, favoriteMovies, country } = props.person
    const {data, i} = props
    const lastI = data.length - 1
    return (
    <div>
       <section>
           {name.first} {name.last}
       </section>
       <button
    //    className={i === 0 ? 'dec-none' : null}
        onClick={props.dec}
        >previous</button>
       <button 
    //    className={i === lastI ? 'inc-none' : null}
       onClick={props.inc}
       >next</button>
    </div>
)}

export default Person