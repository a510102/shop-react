import React, { useState, useEffect } from 'react'


export default function Pages({ num, setDePage, dePage }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPagesArray(num)
  }, [num])

  function setPagesArray(num) {
    const newPages = []
    if (num > 2) {
      for (let i = 1; i < (num + 1); i++) {
        newPages.push(i);
      }
      setPages(newPages);
    }
  }

  const active = 'bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l';
  const normal = 'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
  return (
    <ul className='max-w-sm inline-flex mt-2'>
      {
        (pages.length > 1 && dePage !== 1) && <li><button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l' onClick={() => setDePage(dePage - 1)}>Pre</button> </li>
      }
      {
        pages.length > 1 && (pages.map((page, i) => (
          <li key={i}>
            <button className={dePage === page ? active : normal} onClick={() => setDePage(page)}>
              {page}
            </button>
          </li>
        )))
      }
      {
        (pages.length > 1 && dePage !== num) && <li> <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r' onClick={() => setDePage(dePage + 1)}>Next</button></li>
      }

    </ul>
  )
} 