import React, { useEffect, useState } from "react";
import "./data.css";
import data from '../data.json'
import { MultiSelect } from "react-multi-select-component";
import 'react-dropdown/style.css';
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
const Main = () => {
  const options = [
    { label: " category", value: "category" },
    { label: "age", value: "Age" },
  ];
  const [selected, setSelected] = useState([]);
  const [passedData, setPassedData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1)
  const [appear, setAppear] = useState(false)
  const [appearDesc, setAppearDesc] = useState(false)
  const [cat,setCat]=useState()
  const [val,setVal]=useState()
  const recordsPerpage = 3
  const lastIndex = currentPage * recordsPerpage
  const firstIndex = lastIndex - recordsPerpage
  const records = passedData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(passedData.length / recordsPerpage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  //sort the data in asc
  function sortData(co, type) {
    if (type == "text") {
      const newData = [...passedData].sort((a, b) => 
       a[co].toLowerCase() > b[co].toLowerCase()?1:-1)
      setPassedData(newData)
    }
    if (type == "number") {
      const newData = [...passedData].sort((a, b) => 
       a[co] > b[co]?1:-1)
      setPassedData(newData)
   }
  }
  //Filtering the data for number
  function filterDat(e, col) {
    setVal(e.target.value)
    const d=data.filter((i) => {
      return e.target.value===''?i:i[col].toString().includes(e.target.value)
    })
    setPassedData(d) 
  }
  //Sort the data in descending
  function sortDataDesc(co, type) {
    if (type == "text") {
      const newData = [...passedData].sort((a, b) => 
       a[co].toLowerCase() < b[co].toLowerCase()?1:-1)
      setPassedData(newData)
    }
    if (type == "number") {
      const newData = [...passedData].sort((a, b) => 
       a[co] < b[co]?1:-1)
      setPassedData(newData)
   }
  }
  //category Filtering for String
  function filterDatCategory(e, col) {
    setCat(e.target.value)
    const d = data.filter((i) => {
      return e.target.value==''?i:i[col].includes(e.target.value)
    })
    setPassedData(d)
  }
  return (
    <>
     
      <div class="relative overflow-x-auto mt-[9%] w-[81%] ml-[9%]">
      
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" class="px-6 py-3" >
                Image
              </th>
              <th scope="col" class="px-6 py-3" >
                Title
                <br/>
                <br/>
                <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortData('title',"text")} title="Ascending"><i className="fa fa-sort-asc p-[8px]" aria-hidden="true" title="Ascending"/></button>
             <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortDataDesc('title',"text")}><i className="fa fa-sort-desc p-[8px]" aria-hidden="true" title="Descending"/></button>
              </th>
              <th scope="col" class="px-6 py-3">
                Description
                <br />
                <br/>
                <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortData('description',"text")}><i className="fa fa-sort-asc p-[8px]" aria-hidden="true" title="Ascending"/></button>
             <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortDataDesc('description',"text")}><i className="fa fa-sort-desc p-[8px]" aria-hidden="true" title="Descending"/></button>
                
              </th>
              <th scope="col" class="px-6 py-3" >
                Age
                <br />
                <br />
                <div className="flex">
                <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortData('age',"number")}>   <i className="fa fa-sort-asc p-[8px]" aria-hidden="true" title="Ascending"></i> </button>
            <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortDataDesc('age',"number")}> <i className="fa fa-sort-desc p-[8px]" aria-hidden="true" title="Descending"></i></button>
            <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={() => {
                  setAppear(!appear)
             }}><svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 512 512"> <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg> </button>
                  {appear && <div> 
                  <input type="text" className="border border-s-violet-300 " value={val} onChange={(e)=>filterDat(e,"age")}/> 
                </div>
                }
                </div>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" >
                Category
                <br />
                <br/>
                <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortData('category',"text")}> <i className="fa fa-sort-asc p-[8px]" aria-hidden="true" title="Ascending"></i></button>
                <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={() => sortDataDesc('category', "text")}> <i className="fa fa-sort-desc p-[8px]" aria-hidden="true" title="Descending"></i></button>
                <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={() => {
                  setAppearDesc(!appearDesc)
             }}><svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 512 512"> <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg> </button>
                  {appearDesc && <div> 
                  <input type="text" className="border border-s-violet-300 " value={cat} onChange={(e)=>filterDatCategory(e,"category")}/> 
                </div>
                }
              </th>
            </tr>
          </thead>
          <tbody>
            {
              records.map((i) => {
                return (
                  <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={i.Image} width={'94%'} />
                      </th>
                      <td class="px-6 py-4">
                        {i.title}
                      </td>
                      <td class="px-6 py-4">
                        {
                          i.description
                        }
                      </td>
                      <td class="px-6 py-4">
                        {i.age}
                      </td>
                      <td class="px-6 py-4">
                        {i.category}
                      </td>
                    </tr>
                  </>
                )
              })
            }
            
           
          </tbody>
        </table>
        <nav className="float-left">
          <ul className="pagination m-[3.25%] ml-[44%]">
           
          <li className='page-item'><a href="#" className="page-link" onClick={prevPage}>Prev</a></li>
            {
              numbers.map((n, i) => {
                return (
                  <li className={`page-item ${currentPage === n}? active: '' ` } key={i}>
                    
                    <a href="#" className="page-link" onClick={() => changeCpage(n)}>{n}</a>
                </li>

                )
              })
            }
            <li className='page-item'>
              <a href="#" className="page-link" onClick={nextPage}>Next</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </>
  );
  //For previous Page
 function prevPage() {
    if (currentPage != 1) {
       setCurrentPage(currentPage-1)
    }
  }
  //For Current Page
  function changeCpage(id){
setCurrentPage(id)
  }
  //For nextPage
  function nextPage() {
    if (currentPage != npage) {
      setCurrentPage(currentPage+1)
   }
  }
};

export default Main;
