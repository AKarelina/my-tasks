import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


// types
export type AffairPriorityType = "high" | "low" | "middle" // need to fix any
export type AffairType = {
    _id: number // need to fix any
    name: string // need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType):  any=> { // need to fix any
    if(filter==="all") {
         return affairs
    } if(filter==="high"){
        return affairs.filter(affair=>affair.priority==="high")
    } if(filter==="middle"){
        return affairs.filter(affair=>affair.priority==="middle")
    } if(filter==="low"){
        return affairs.filter(affair=>affair.priority==="low")
    }

    // need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): any => { // need to fix any

    return affairs.filter(affair=>affair._id!==_id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any
        setAffairs(affairs.filter(affair=>affair._id!==_id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
