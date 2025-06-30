//single selection Accordian
//multiple selection Accordian
import { useState } from 'react';
import data from './data'

const Accordian = () => {
    const [selected,setSelected]=useState(null);

    function handleSingleSelection(getCurrId){
        setSelected(getCurrId);
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                        data.map(dataItem => (
                            <div className="item">
                                <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                                    <h3>{dataItem.title}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected==dataItem.id ? 
                                    <div className='content'>{dataItem.content}</div>
                                    :null
                                }
                            </div>
                        )) : <div>No data Found</div>
                }
            </div>            
        </div>
    );
}

export default Accordian;