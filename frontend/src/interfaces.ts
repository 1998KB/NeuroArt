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
}


export interface ImageContainerProps {
    image: string
    isLoading: boolean
    prompt: string,
    isDisabled: boolean,
    setIsDisabled: Function

}
export interface ImageSaveData {
    temporaryUrl: string,
    prompt:string,
    title: string,
    description: string
}

export type CarouselType = {
    imageSrc: string,
    imageAlt: string,
    imageId: string
}

