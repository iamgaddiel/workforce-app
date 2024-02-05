import { useIonViewWillEnter } from '@ionic/react'
import React, { useState } from 'react'
import { getSaveData } from '../helpers/storageSDKs'
import { USER } from '../helpers/keys'
import { UserType } from '../@types/User'



const useUser = () => {
    const [userObject, setUserObject] = useState<UserType | null>(null)

    useIonViewWillEnter(() => {
        (async () => {
            const res = await getSaveData(USER) as UserType
            setUserObject(res)
        })()
    }, [])

    return userObject
}

export default useUser