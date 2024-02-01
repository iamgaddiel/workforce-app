import { IonAvatar, IonImg, useIonViewWillEnter } from '@ionic/react'
import React, { useState } from 'react'

import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';





type Props = {
    email: string
}


const SmallAvatarImage: React.FC<Props> = ({ email }) => {
    const [avatar, setAvatar] = useState('')


    useIonViewWillEnter(() => {
        (async () => {
            const avatar = createAvatar(thumbs, {
                seed: email
            });
            const svg = await avatar.toDataUri()
            setAvatar(svg)
        })()
    }, [])


    return (
        <IonAvatar>
            <IonImg src={avatar} alt='avatar' className='w-75 h-75' />
        </IonAvatar>
    )
}

export default SmallAvatarImage