import style from 'styled-components';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { device } from '../utils/mediaQueries';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <Wrapper>
            <StyledHeader>
                <h1>
                    clear
                    <br />
                    <span>mind</span>
                </h1>
                <div>
                    <p>self assessment</p>
                    <RiArrowDropDownLine className='drop-down' />
                </div>
            </StyledHeader>
            <StyledInput toggle={toggle}>
                <input
                    type='text'
                    placeholder='search for anything'
                />
                <button className='btn'>urgent support</button>
            </StyledInput>
            <StyledMenu >
                <RxHamburgerMenu onClick={handleToggle} />
            </StyledMenu>
        </Wrapper>
    );
};

const Wrapper = style.nav`
display:flex;
justify-content:space-between;
align-items:center;
gap:0.5rem;
margin-bottom:2rem;


`;

const StyledHeader = style.section`
display:flex;
justify-content:space-between;
max-width: 50%;
width: 20%;

h1{
font-size: 1.5rem;
 color: var(--primary-900);
        span {
            color: var(--highlight);
        }
}
p{
font-size:1rem
}
.drop-down {
        cursor: pointer;
    }
div{
display:flex;
align-items:center
}

/* desktop tablet */
@media ${device.tablet}{
width:270px;
h1{
font-size: 1.5rem;
}
p{
    font-size:0.9rem
}
}

/* desktop design */
@media ${device.desktop}{
width:270px;
h1{
font-size: 1.5rem;
}
p{
    font-size:0.9rem
}
}

/* mobile design */
@media ${device.mobile}{
margin-bottom:0;
max-width: 90%;
width: 70%;
gap:1rem;

h1{
font-size: 2rem;
margin-bottom:0
}
}
`;

const StyledInput = style.section`
max-width:60%;
width:35%;
display:flex;
justify-content:space-between;

input{
padding:5px 20px 5px;
border:transparent;
outline:none;
}
.btn{
    padding:7px 30px;
    transition: var(--transition);
}

@media ${device.laptop}{
width:50%;
}
@media ${device.tablet}{
    input,.btn{
padding:5px 10px ;
}
}

/* Hide Input on mobile */
@media ${device.mobile}{
position: fixed;
    top: 0;
    left:0px;
    margin-left:5px;
    transform: ${(props) =>
        props.toggle ? 'translateX(0%)' : 'translateX(-500%)'};
    transition: transform 0.7s ease-in-out;
    z-index: 1000;
    gap:1rem;   
    
    .btn{
            font-size: 10px;
            padding:0 2rem;
    }


}`;

const StyledMenu = style.button`
background-color:var(--highlight);
border: none;
border-radius:3px;
display:flex;
align-item:center;
padding:5px;


/* Hide elements on tablet and larger screens */
@media ${device.tablet},${device.desktop},${device.desktopLarge}{
display:none
}

`;
export default Navbar;
