import './card.css';

const Card=props=>{

    return(<div className='fold'>
        <div className='text'>
            <h1 className='taskText'>{props.data.value}</h1>
            </div>
        </div>
    )
}

export default Card