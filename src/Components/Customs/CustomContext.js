import React, { useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const DataContext = createContext();
export const CustomeContext = ({children}) => {
  const[adkar,setAdkar] = useState([]);
  const [filteredAdkar, setFilteredAdkar] = useState([]);
  const[Counter,setCounter]= useState(0);
  /// modal finished ///
  const[show,setShow]= useState(false)
  const[showAdd,setShowAdd]= useState(false)
  const handleClose=()=> setShow(false)
  const handleShow=()=>setShow(true) 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  /// add card ///
  const [addData,setaddData] = useState({text:'',count:''});
  const[data,setData]=useState([])
  const handleCloseAdd=()=> setShowAdd(false)
  const handleShowAdd=()=>setShowAdd(true)
  ///// handlechange add card ///
  const handleChange =(e)=>{
  const{name,value} = e.target;
  setaddData({...addData,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const updatedData = [...adkar, addData];
      localStorage.setItem('myData', JSON.stringify(updatedData));
      setAdkar(updatedData);
      setaddData({ text: '', count: '' });
      handleCloseAdd();
    } catch (error) {
      toast.error('Failed to save data');
    }
  };
    ////////font size //
  const[fontSize,setFontSize]= useState(24)
  const increaseFontSize =()=>{ setFontSize(prevSize=>Math.min(prevSize + 2,36))  }
  const decreaseSize=()=>{ setFontSize(prevSize=>Math.max(prevSize - 2,18))}

  const handleIncrement=()=>{
    setCounter(Counter+1)
  }
  const reset=()=>{
    setCounter(0)
  }
      //Decrement
      const decrement = useCallback((id) => {
        const updatedAdkar = [...adkar];
        
        if (updatedAdkar[id].count > 0) {
          updatedAdkar[id].count -= 1;
      
          if (updatedAdkar[id].count === 0) {
            updatedAdkar.splice(id, 1);
          }
      
          setAdkar(updatedAdkar);
          setFilteredAdkar(updatedAdkar);
        }
      
        if (updatedAdkar.length === 0) {
          handleShow();
          setTimeout(() => {
            navigate('/home');
          }, 1000);
        }
      }, [adkar, setAdkar, setFilteredAdkar, handleShow, navigate]);
      
      
     // Random Content Notification
    useEffect(() => {
      const interval = setInterval(() => {
        if (adkar.length > 0) {
          const randomIndex = Math.floor(Math.random() * adkar.length);
          const randomContent = adkar[randomIndex].text;
          toast.success(randomContent, {
            position: 'top-right',
            className: 'p-4 fw-bold',
            closeOnClick: true,
            pauseOnFocusLoss: true,
            autoClose: 8000,
          });
        }
      }, 10000); 
      // Reduced interval to 10 seconds
      return () => clearInterval(interval);
    }, [adkar]);
  
  return (
    <DataContext.Provider value={{decreaseSize,increaseFontSize,filteredAdkar, setFilteredAdkar,fontSize,handleCloseAdd,Counter,decrement,handleSubmit,reset,handleIncrement,showAdd,setShowAdd,handleChange,handleShowAdd,setAdkar,adkar,navigate,loading, setLoading,show,setCounter,setShow,addData,setaddData,  handleClose,
      handleShow}}>
      {children}

    </DataContext.Provider>
  );
}
export const useAdkar = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

