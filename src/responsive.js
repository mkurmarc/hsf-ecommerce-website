import {css} from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width:380px) {
            ${props}
        }
    `;
};
/* for tablet size. can add other screen sizes using this code block as a template
export const tablet = (props) => {
    return css`
        @media only screen and (max-width:380px) {
            ${props}
        }
    `;
};
*/