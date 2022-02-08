
import { useEffect, useState } from 'react';
import { uncheckedList} from './data';
import List from './list';
import TaskForm from './taskForm';
import Info from './info';

export default function Dashboard() {
    
    // state variables
    const [pendingTasks,setPendingTasks]=useState();
    const [completedTasks,setCompletedTasks]=useState();
    const [keyList,setKeyList]=useState(Object.keys(uncheckedList));
    var [about, setAbout]=useState();

    useEffect(()=>{setPendingTasks(uncheckedList)},[]);
    
    // eventHandler for button check-uncheck
    const markAsChecked = (key) =>{
        setCompletedTasks({
            ...completedTasks,
            [key]:pendingTasks[key]
        })
        delete pendingTasks[key]
    }

    const markAsUnchecked = (key) =>{
        setPendingTasks({
            ...pendingTasks,
            [key]:completedTasks[key]
        })
        delete completedTasks[key]
    }

    // for adding new task 
    const addTask=(key,description)=>{
        setPendingTasks({
            ...pendingTasks,
            [key]: {
                description: description,
                timestamp: new Date()
            }
        })
        setKeyList([...keyList,key])
    }

    // for showing description - view button
    const viewMore = (desc) =>{
        setAbout(
                about=desc
            )
    }

    return (
        <section className='container '>
            
            <TaskForm
                addTask={addTask}
                keyList={keyList}
            />
            
            
            <div className='row'>
                <div className='col-6'>
                    {/* function call for to do list*/}
                    < List 
                        list = {pendingTasks}
                        fireListEvent = {markAsChecked}
                        buttonText = "Check"
                        title = "Tasks to be done !!"
                        buttonStyle="btn-info"
                        descFxn={viewMore}
                    />
                 </div>
                 <div className='col-6'>
                    {/* function call for completed list*/}
                    < List 
                        list = {completedTasks}
                        fireListEvent = {markAsUnchecked}
                        buttonText = "Uncheck"
                        title = "Completed tasks !!"
                        buttonStyle="btn-outline-info"
                        descFxn={viewMore}
                    />
                 </div>
            </div> 

            <Info 
                about={about}
                closeFxn={setAbout}
            />
                                
        </section>
    );
}