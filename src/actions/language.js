import patinaContent from "../LangConfig"

export const setLanguage = (language)=>{
    return {
        type:"SET_LANGUAGE",
        payload:language
    }
}


export const getContent = (lang,key)=>{
    return patinaContent[lang][key]
}