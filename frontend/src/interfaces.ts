import {CredentialResponse} from "@react-oauth/google";
import {Image} from "./components/gallery/Gallery";

export interface Option {
    value: string,
    label: string
}

export interface DropdownProps {
    setPrompt: Function
    isLoading: boolean
    setGenerated: Function,
    setIsDisabled: Function
    setGeneratedImage: Function
    setInputTitle: Function
    setInputDescription: Function
}

export interface User {
    username: String,
    collectionList: Collection[]
    email: String,
    picture: string
}

export interface Collection {
    description: String
    images: Image[]

}

export interface ImageContainerProps {
    image: string
    isLoading: boolean
    prompt: string,
    isDisabled: boolean,
    setIsDisabled: Function,
    inputTitle: string
    setInputTitle: Function
    inputDescription: string
    setInputDescription: Function
    credentials: CredentialResponse | null

}

export interface ImageSaveData {
    temporaryUrl: string,
    prompt: string,
    title: string,
    description: string
}

export type CarouselType = {
    imageSrc: string,
    imageAlt: string,
    imageId: string
}

export interface AuthorInfo{
    username: string,
    email: string,
    picture: string,
    collectionList: []

}
