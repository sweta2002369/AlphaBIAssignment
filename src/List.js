
const List = ({ results }) => {

    return (
        <>
            <div>
                {results.map((ele, id) => {
                    return <div key={id} style={{ position: 'relative', display: 'inline', padding: '30px' }}>
                        <picture>
                            <source media="(min-width:650px)" srcset={`${ele?.featured_gif?.images?.preview_gif?.url}`} />
                            <source media="(min-width:465px)" srcset={`${ele?.featured_gif?.images?.preview_gif?.url}`} />
                            <img src={`${ele?.featured_gif?.images?.preview_gif?.url}`} alt="Flowers" width='10%' height='10%' />
                        </picture>

                    </div>
                })}
            </div>
        </>
    )
}

export default List;