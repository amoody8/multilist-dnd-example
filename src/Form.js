import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { DataContext, columnsFromTheBackend } from "./DataContext"
// import { columnsFromTheBackend } from "./DataContext"

export default function Form(){

    const [ columns, setColumns ] = useState(columnsFromTheBackend)
    const attrColumn = columns[Object.keys(columns)[0]]

    const [ data, setData ] = useContext(DataContext)
    const { register, handleSubmit, resetField } = useForm()

    const onSubmit = (input) => {
        const id = nanoid()
        setData([...data, {id, attribute: input.item}])
        resetField('item')
        // console.log(newitem);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    New Item:
                    <input type="text" {...register("item")} />
                </label>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}