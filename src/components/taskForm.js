
import { useState, useEffect } from "react"

export default function TaskForm(props){

    const{addTask, keyList, keyUpdate}=props;
    // state variable for form change
    const [description, setDescription]=useState("");
    var newKey="task"+(keyList.length+1);
    
    return(
        <section>
            <div class="form-group row col-6 mb-4 p-0 input_form">
                <div className="col-10 ">
                    <input 
                        type="text" 
                        class="form-control rounded-pill form_text"  
                        placeholder="Enter task description"
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }}
                    />
                </div>
                <button 
                    className="btn btn-info col-2 rounded-pill"
                    disabled = {description.length === 0}
                    onClick={()=>{
                        addTask(newKey,description)
                        setDescription("");
                    }}
                    >
                    Add</button>
            </div> 
        </section>
    )
}