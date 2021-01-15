const GridItem = () => {
    return (
        <div className="grid--item" onDragOver={(e)=> {e.target.style.backgroundColor = 'blue'; console.log(e)}}></div>
    )
}

export default GridItem;