import React, { useState } from "react"
// import { nanoid } from "nanoid"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
// import { useForm } from "react-hook-form"
import Form from "./Form"
import DataList, { columnsFromTheBackend } from "./DataContext"

const onDragEnd = (result, columns, setColumns) => {
  if(!result.destination) return

  const { source, destination } = result
  
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0 , removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }
}

function App() {
  const [ columns, setColumns ] = useState(columnsFromTheBackend)
  const attrColumn = columns[Object.keys(columns)[0]]
  const col1 = columns[Object.keys(columns)[1]]
  const col2 = columns[Object.keys(columns)[2]]
  const col3 = columns[Object.keys(columns)[3]]
  const col4 = columns[Object.keys(columns)[4]]

  return(
    <div>
      <DataList>
        <div style={{margin:'8', borderBottom:'1px solid black', backgroundColor: '#efefef'}}>
            <Form/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
          <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns) }>
          <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>{col1.name}</h2>
                <div style={{margin: 8}}>
                  <Droppable droppableId={col1.name} key={col1.name}>
                    {(provided, snapshot) =>{
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                              background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                              padding: 4,
                              width: 250,
                              minHeight: 500
                          }}
                        >
                        {col1.items.map((item, index) => {
                          return(
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color:'white',
                                        ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.attribute}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
              <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>{col2.name}</h2>
                <div style={{margin: 8}}>
                  <Droppable droppableId={col2.name} key={col2.name}>
                    {(provided, snapshot) =>{
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                              background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                              padding: 4,
                              width: 250,
                              minHeight: 500
                          }}
                        >
                        {col2.items.map((item, index) => {
                          return(
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color:'white',
                                        ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.attribute}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
              <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>{col3.name}</h2>
                <div style={{margin: 8}}>
                  <Droppable droppableId={col3.name} key={col3.name}>
                    {(provided, snapshot) =>{
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                              background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                              padding: 4,
                              width: 250,
                              minHeight: 500
                          }}
                        >
                          {col3.items.map((item, index) => {
                          return(
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color:'white',
                                        ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.attribute}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
              <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>{col4.name}</h2>
                <div style={{margin: 8}}>
                  <Droppable droppableId={col4.name} key={col4.name}>
                    {(provided, snapshot) =>{
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                              background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                              padding: 4,
                              width: 250,
                              minHeight: 500
                          }}
                        >
                        {col4.items.map((item, index) => {
                          return(
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color:'white',
                                        ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.attribute}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
              <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>{attrColumn.name}</h2>
                <div style={{margin: 8}}>
                  <Droppable droppableId={attrColumn.name} key={attrColumn.name}>
                    {(provided, snapshot) =>{
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                              background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                              padding: 4,
                              width: 250,
                              minHeight: 500
                          }}
                        >
                        {attrColumn.items.map((item, index) => {
                          return(
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color:'white',
                                        ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.attribute}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
          </DragDropContext>
        </div>
      </DataList>
    </div>
  )
}
export default App