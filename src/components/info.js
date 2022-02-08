import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Info(props){
    const{about,closeFxn}=props
    console.log(about);
    
    // fxn to generate the description card 
    var generateDesc=()=>{
        if(!about)
            return <></>
        var descCard=(<>
        <div className='backdrop'>
            <div className='card pl-2 desc_card'>
                <div className=" card-body row align text-left">
                    <div className='col-11 text-left'>
                        <h3 className='mb-4'>description:</h3>
                        <p>{about}</p>
                    </div>
                    <div className='col-1 text-right '>
                        <FontAwesomeIcon icon={faTimes} 
                            type="button"
                            onClick={()=>closeFxn("")}/>
                    </div>
                </div> 
            </div>
        </div>
        
        </>)
        return descCard;
    }

    return(
        <section>
            {generateDesc()}
        </section>
    )
}