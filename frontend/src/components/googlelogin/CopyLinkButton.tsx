import { useState } from "react";

interface CopyLinkButtonProps {
    id: string;
    onCopy: (id: string) => void;
}

export const CopyLinkButton = ( props : CopyLinkButtonProps) => {
    const [copied, setCopied] = useState(false);

    function copyLink() {
        navigator.clipboard.writeText(`https://blue-sky-0e47a0403.2.azurestaticapps.net/image/${props.id}`)
            .then(() => {
                setCopied(true);
                props.onCopy(props.id);
            })
            .catch((error) => console.error(error));
        setTimeout(() => {
            setCopied(false)
        },3000)
    }

    return (
        <button onClick={copyLink}>
            {copied ? "Link copied!" : "Share"}
        </button>
    );
}
