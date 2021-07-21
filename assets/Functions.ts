import { IOptions } from "sanitize-html";

export const PowerArray = ['user', 'friend', 'mod', 'x', 'x', 'ADMIN']
export function parsePowerId (uId : string | number) {
    const id = Number(uId)
    return PowerArray[id]
}
export function uuidv4 () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
export const ThreadReplyOptionsctx = [
    {
        name: 'Edit',
        slug: 'edit',
        class: 'my-custom-class'
    }
]

export function Clamp (min:number, max:number, v:number) {
    return Math.min(Math.max(v, min), max)
};

export const AllowedIMGHOST = [
    "imgur.com",
    "i.imgur.com",
    "cdn.discordapp.com"
]

export const SanOpts: IOptions = {
    allowedTags: [
        "h1", "h2", "h3", "h4",
        "a", "img", "b", "hr", "em", "p", "strong", "ul", "br", "span",
        "iframe", "div",
        "ul", "ol", "li"
    ],
    allowedAttributes: {
        a: ["href"],
        img: ["src", "alt", "height", "width"],
        'iframe': ['src', "height", "width", "frameborder"]
    },
    allowedIframeHostnames: ['www.youtube.com'],
    selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
    allowedSchemes: ["https", "http"],
    allowedClasses: {
        "*": ["center", "strike", "underline"]
    },
    allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
    allowedSchemesByTag: {},
    disallowedTagsMode: "discard",
    exclusiveFilter: (iframe) => {
        if (iframe.tag === "img") {
            const src = (iframe.attribs.src as string).replace(/https?:\/\//, "");
            for (const url of AllowedIMGHOST) {
                if (src.startsWith(url)) {
                    return false
                }
            }
            return true
        }
        return false
    },
    transformTags: {
        "img": (tagName, attribs) => {
            if (attribs.src.startsWith("https://imgur.com"))
                attribs.src = attribs.src.replace("imgur.com", "i.imgur.com") + ".png"
            console.log(attribs)
            return {
                tagName,
                attribs,
            }
        },
        "iframe": (tagName, attribs) => {
            return {
                tagName,
                attribs: {
                    "frameborder": "0",
                    ...attribs
                }
            }
        }
    }
}
