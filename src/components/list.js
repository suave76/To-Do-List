

export default function List(props){

    const {list, fireListEvent, buttonText, title, descFxn}= props;

    // fxn to generate the task lists 
    const generateHTML = () => {
        if(!list)
            return <></>
        var html = Object.keys(list).map((item, index) => (
            <>
                <div className = "col-1">
                    <p>{index + 1}</p>
                </div>
                <div className='col-8'>
                    <p className='float-left text-left'>{list[item].description}</p>
                </div>
                <div className='col-1 '>
                    <p 
                        type="button" 
                        className="text-white float-right"
                        onClick={()=>{descFxn(list[item].description)}}
                        >view</p>
                </div>
                <div className='col-2'>
                    <button 
                        className = "btn btn-sm btn-outline-light float-right"
                        onClick={() => {fireListEvent(item)}}
                    >{buttonText}</button>
                </div>
            </> 
            ))
        return html;
    }
    return(
        <section>
            <div className="card card_prop">
                <div className='card-title mt-4 mb-1' >
                    <h3 className="text-center">{title}</h3>
                </div>
                <div className='card-body p-0'></div>
                <div className="row p-3">
                    {generateHTML()}
                </div>
           </div>
        </section>
    )
}