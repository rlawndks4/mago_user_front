import { useEffect } from "react";
import styled from "styled-components";
import $ from 'jquery'
import { useRouter } from "next/router";
export const WrappersStyle = styled.div`
position:relative;
display:flex;
flex-direction:column;
width:90%;
max-width:1200px;
margin-top:12rem;
margin-left:auto;
margin-right:auto;
margin-bottom:6rem;
min-height:58vh;
font-family:${props=>props.theme.font.normal};
@media screen and (max-width:1050px) { 
    margin-top:5rem;
}

`

export const Wrappers = (props) => {
    let { className, style } = props;
    const router = useRouter();
    const { pathname } = router;
    useEffect(() => {
        $('.wrappers').css('min-height', `${$(window).height() - 372}px`);
    }, [pathname])
    useEffect(() => {

    }, [])
    return (
        <>
            <WrappersStyle className={`wrappers ${className}`} style={style}>
                {props.children ?? ""}
            </WrappersStyle>
        </>
    )
}
export const TitleContainer = styled.div`
align-items:center;
margin-top:36px;
margin-bottom:24px;
position:relative;
font-size:${props => props.theme.size.font2};
width:100%;
text-align:center;
`
export const TitleStyle = styled.div`
font-weight:bold;
display:flex;
align-items:center;
`
export const Title = (props) => {
    const {style} = props;
    return (
        <>
            <TitleContainer style={style}>
                {props?.children ?? ""}
            </TitleContainer>

        </>
    )
}
export const Content = styled.div`
margin:0 auto 1rem 0;
width:100%;
font-size:${props => props.theme.size.font3};
display:flex;
flex-direction:column;
font-weight:normal;
@media screen and (max-width:700px) { 
    
}
`
export const Img = styled.img`
width: 100%;
height:320px;
background:#fff;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-blend-mode: multiply;
@media screen and (max-width:1100px) {
    height: 28.8vw;
}
@media screen and (max-width:600px) {
    height: 52.2222222222vw;
}
`
export const Card = styled.div`
width: 48%; 
margin-bottom:16px;
background: ${props => props.theme.color.background3};
cursor:pointer;
@media screen and (max-width:600px) {
    width:100%;
}
`
export const WrapDiv = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media screen and (max-width:600px) { 
    display:none;
}
`
export const SliderDiv = styled.div`
display:none;
@media screen and (max-width:602px) { 
    display:flex;
}
`
export const ViewerContainer = styled.div`
margin:0 auto;
width:100%;
`
export const SelectType = styled.div`
display:flex;
width:100%;
z-index:5;
background:#fff;
margin:16px 0;
`
export const ShadowContainer = styled.div`
background:#FAFAFA;
border-radius:${props => props.theme.borderRadius};
padding:6px;
box-shadow:${props => props.theme.boxShadow};
`
export const RowContent = styled.div`
display:flex;
width:100%;
`
export const TextButton = styled.button`
width:124px;
height:28px;
border-radius:12px;
font-weight:bold;
border:2px solid ${props => props.theme.color.background1};
color:${props => props.theme.color.font2};
background:#fff;
font-size:${props => props.theme.size.font4};
cursor:pointer;
@media screen and (max-width:700px) { 
    font-size:${props => props.theme.size.font5};
}
`
export const TextFillButton = styled.button`
width:124px;
height:28px;
border-radius:12px;
border:1px solid ${props => props.theme.color.font2};
color:#fff;
background:${props => props.theme.color.font2};
font-size:${props => props.theme.size.font4};
cursor:pointer;
@media screen and (max-width:700px) { 
    font-size:${props => props.theme.size.font5};
}
`