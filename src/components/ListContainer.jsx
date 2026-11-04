const ListContainer = ({data}) => {
    return(
        <>
        <section id = "listContainer">
            {data.map((student) =>(
                <article key={student.id} className="list-item">
                    <h2>{student.name}</h2>
                    <p>{student.program}</p>
                    <button>Delete</button>
                </article>
            ))}
        </section>
        
    </>
    )
}

export default ListContainer