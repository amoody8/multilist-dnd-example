import React, {createContext, useState, useEffect } from "react"
import { nanoid } from "nanoid"

export const DataContext = createContext()

export const dataset = [
    {
        id: nanoid(),
        attribute: 'Another one'
    },
    {
        id: nanoid(),
        attribute: 'And Another one'
    }
]

export const columnsFromTheBackend = {
    Attributes: {
        name: 'Attributes',
        items: dataset
    },
    Critical: {
        name: 'Critical',
        items: []
    },
    Essential: {
        name: 'Essential',
        items: []
    },
    Required: {
        name: 'Required',
        items: []
    },
    Request: {
        name: 'Request',
        items: []
    }
}

  

export default function DataList(props) {
    const [ data, setData ] = useState(dataset)
    
    useEffect(() => {
        console.log(data)
      }, [data])
      return (
        <DataContext.Provider value={[ data, setData ]}>
            {props.children}
        </DataContext.Provider>
    )
}
