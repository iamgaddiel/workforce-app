import { useIonToast } from '@ionic/react'
import { checkmark, warningOutline } from 'ionicons/icons'


type TostType = 'info' | 'success' | 'danger'

const useToast = () => {

    const [presentToast, dismissToast] = useIonToast()
    

    async function showToast(message: string,  toastType: TostType, header?: string) {
        if (toastType === 'info'){
            await presentToast({
                message,
                position: 'top',
                swipeGesture: 'vertical',
                header,
                color: 'primary',
                duration: 4000
            })
            return
        }


        if (toastType === 'danger'){
            await presentToast({
                message,
                position: 'top',
                swipeGesture: 'vertical',
                header,
                duration: 4000,
                color: 'danger',
                icon: warningOutline
            })
            return
        }
        
        if (toastType === 'success'){
            await presentToast({
                message,
                position: 'top',
                swipeGesture: 'vertical',
                header,
                duration: 4000,
                color: 'success',
                icon: checkmark
            })
            return
        }

    }
    
    return {showToast, dismissToast}
}

export default useToast