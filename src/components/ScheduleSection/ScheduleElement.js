import styled from 'styled-components';

export const ScheduleContainer = styled.div`
    background: #fff;
    display:flex;
    justify-content:center;
    align-items: center;
    height:auto;
    max-width: 1300px;
    width: 90%;
    margin: auto auto;
    margin-bottom: 40px;

    @media screen and (max-width: 800px) {
        max-width: 90%;
    }   
`
export const ScheduleTableContainer = styled.div`
    width: 90%;
    flex-direction: column;
    display:flex;
    justify-content:center;
    object-fit: contain;
    
    

    h1 {
        margin: 0 0;
        width: 100%;
        font-size: 20px;
        margin-top: 30px;
    }

    hr {
        border: 2px solid #8C2131;
        height: 5;
        width: 100%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    tr {
        height: 50px;
        border-bottom: 2px solid #F0F0F0;
    }

`

export const Thleft = styled.th`
    text-transform: uppercase;
    color: #3e3e3e;
    margin: 0 0;
    width: 300px;

    h4{
        font-size: 16px;
        margin-bottom: 0;
    }
    
    p {
        letter-spacing: 1px;
        font-size: 15px;
        font-weight: 200;
        text-transform: none;
    }

    @media screen and (max-width: 800px) {
        width: 150px;
    }   
`

export const ThRight = styled.th`
    text-align: left;
    

    h4{
        font-size: 18px;
        margin-left: 30px;
        font-weight: 600;
        margin-bottom: 0;
        color: #8C2131;
    }
    
    p {
        font-size: 16px;
        margin-left: 30px;
        font-weight: 400;
    }
`

// export const ScheduleTh = styled.th`
//     font-size: 20px;
//     font-weight: 300;
//     border-bottom: 1px solid grey;
// `
// export const ScheduleTr = styled.tr`
// `
