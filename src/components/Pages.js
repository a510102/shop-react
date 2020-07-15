import React, { useState, useEffect } from 'react'

import './Pages.scss'

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

  return (
    <ul className='pages'>
      {
        dePage !== 1 && <li><button onClick={() => setDePage(dePage - 1)}>Pre</button> </li>
      }
      {
        pages.length > 1 && (pages.map((page, i) => (
          <li key={i}>
            <button className={page === dePage ? 'active' : ''} onClick={() => setDePage(page)}>
              {page}
            </button>
          </li>
        )))
      }
      {
        dePage !== num && <li> <button onClick={() => setDePage(dePage + 1)}>Next</button></li>
      }

    </ul>
  )
} 