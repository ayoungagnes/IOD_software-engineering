function SingleCat({name, latinName, imageUrl}) {
    return (
       <li>
            <img src={imageUrl} />
            <div>
                <div>{name}</div><div>{latinName}</div>
            </div>
        </li>
    )
}
export default SingleCat;