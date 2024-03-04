import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers, Storage } from '@ionic/storage';
import { createClient } from '@supabase/supabase-js'







/**
 *  NOTE: import PocketBasee and Storage in SettingContext file for to fix typing errors
 * 
 */
const appName = "workforce-app"

const DEBUG = false


// POCKETBASE SERVER CONFIG
// const PB_LOCALHOST = "http://127.0.0.1:8090/api"

// const PB_REMOTE_URL = 'https://encostay-mobile.pockethost.io/api'

// const pocketbaseUrl = DEBUG ? PB_LOCALHOST : PB_REMOTE_URL

// const pb = new PocketBase(pocketbaseUrl)



// Create a single supabase client for interacting with your database
const SUPABASE_URL = 'https://cljkapfcywuwxuawtnwv.supabase.co'

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsamthcGZjeXd1d3h1YXd0bnd2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjI5MzcwNCwiZXhwIjoyMDIxODY5NzA0fQ.GeJdhjGjNIpXjNtm27NIFXcvt1XiKC6r2T44Q1bSxno'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)



// BACKEND SERVER CONFIG 
const LOCAL_SERVER_URL = 'http://localhost:8000'

const REMOTE_SERVER_URL = 'https://theworkforceapp.pythonanywhere.com'

// const serverBaseUrl = LOCAL_SERVER_URL

const serverBaseUrl = DEBUG ? LOCAL_SERVER_URL : REMOTE_SERVER_URL




// store data locally to db, indexDB or localstoragee
const storage = new Storage({
    name: `__${appName}`,
    driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
})

storage.create()




export default function Settings() {
    return {
        appName,
        storage,
        DEBUG,
        serverBaseUrl,
        supabase
    }
}

