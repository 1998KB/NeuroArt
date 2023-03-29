export interface Option {
    value: string,
    label: string
}

export interface DropdownProps {
    setPrompt: Function
    isLoading: boolean
    setGenerated: Function
}

export type CarouselType = {
    imageSrc: string,
    imageAlt: string
}
