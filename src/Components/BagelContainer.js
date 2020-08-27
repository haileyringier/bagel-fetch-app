import React  from 'react'
import Bagel from '../Components/Bagel'

export default function BagelContainer({ bagels }) {

    console.log('made it')
    const bagelList = (bagels) => {
        return bagels.map(bagel => {
            return <Bagel key={bagel.id} {...bagel} />
        })
    }

    return(
        <ul>
            {bagelList(bagels)}
        </ul>
    )
}