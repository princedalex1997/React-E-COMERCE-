import React from 'react'



const [state,setstate]= useState(false);

  const showDropdown=()=>{
    setstate(true);
  }
  const hideDropdown=()=>{
    setstate(false);
  }

<div className="classname" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              Categories
              {state ?( <ul onMouseEnter={showdropdown}>
                <li>1st value</li>
                <li>2st value</li>
                <li>3st value</li>
                </ul>):
                null}
</div>
export default Dropdown
