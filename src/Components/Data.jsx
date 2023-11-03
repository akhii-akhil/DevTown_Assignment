import React, { useEffect, useState } from "react";
import "./data.css";
import data from '../data.json'
import { MultiSelect } from "react-multi-select-component";
import 'react-dropdown/style.css';
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
const Data = () => {
  const options = [
    { label: " category", value: "category" },
    { label: "age", value: "Age" },
  ];
  const [selected, setSelected] = useState([]);
  const [passedData, setPassedData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerpage = 3
  const lastIndex = currentPage * recordsPerpage
  const firstIndex = lastIndex - recordsPerpage
  const records = passedData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(data.length / recordsPerpage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
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
            </div>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" >
                Category
                <br />
                <br/>
                <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortData('category',"text")}> <i className="fa fa-sort-asc p-[8px]" aria-hidden="true" title="Ascending"></i></button>
             <button className="p-0.4 border border-l-cyan-300 pd-[2px] m-[2px]" onClick={()=>sortDataDesc('category',"text")}> <i className="fa fa-sort-desc p-[8px]" aria-hidden="true" title="Descending"></i></button>
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
  
 function prevPage() {
    if (currentPage != 1) {
       setCurrentPage(currentPage-1)
    }
  }
  function changeCpage(id){
setCurrentPage(id)
  }
  function nextPage() {
    if (currentPage != npage) {
      setCurrentPage(currentPage+1)
   }
  }
  
  
  
   
 
};

export default Data;
