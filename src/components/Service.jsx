import styled from 'styled-components';
import tree from '../assets/tree.png';
import { device } from '../utils/mediaQueries.js';
import { useEffect } from 'react';

const Service = () => {
    useEffect(() => {
        const blocks = document.querySelectorAll('.animate-target');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate'); // Remove this line if you want the animation to happen only once
                    }
                });
            },
            { threshold: 0.3 } // Trigger animation when 30% of the block is visible
        );

        blocks.forEach((block) => observer.observe(block));

        // Clean up the observer
        return () => observer.disconnect();
    }, []);

    // eslint-disable-next-line react/prop-types
    const ContentItem = ({ title, description }) => (
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );

    return (
        <Wrapper className="container animate-target"> 
            <Header className="animate-target">
                <h2>How to use Clear Mind service</h2>
                <p>
                    In this short guide, we&apos;ll take you through the
                    various Clear Mind resources and suggest five ways
                    you can access them.
                </p>
            </Header>
            <Buttons className="animate-target">
                {[
                    'Start from the home page',
                    'Get expert advice',
                    'Use self-assessment',
                    'Take quiz',
                    'Access workbooks',
                ].map((text, index) => (
                    <li key={index}>
                        <button className="btn">{text}</button>
                    </li>
                ))}
            </Buttons>
            <Content className="animate-target">
                <ul>
                    <ContentItem
                        title="Audience"
                        description="Young people, parents and caregivers, employers and employees, faith and belief communities."
                    />
                    <ContentItem
                        title="Mental health concern"
                        description="Sleep, Anxiety, Low mood, Stress."
                    />
                    <ContentItem
                        title="Type of content"
                        description="Free apps, podcasts, blogs, and videos."
                    />
                </ul>
                <img src={tree} alt="tree" className="img" />
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.section`
.animate-target {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.5s ease-in-out;
    }

.animate {
    opacity: 1;
    transform: translateX(10px);
}
`
const Header = styled.section`
    width: 70%;
    margin: 0 auto;

    h2,
    p {
        text-align: center;
        margin:0 auto;
    }

    @media ${device.mobile} {
        width: 100%;
        margin-bottom: 1rem;
        h2{
            margin-bottom:0
        }
    }
`;

const Buttons = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1.2rem;

    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
        margin-bottom: 1rem;
    }
`;

const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    ul {
        flex: 2;
        list-style: none;
        padding: 0;

        li {
            margin-bottom: 1.5rem;

            h3 {
                margin-bottom: 0.5rem;
                color:var(--highlight)
            }

            p {
                margin: 0;
            }
        }
    }

    .img {
        flex: 1;
        max-width: 100%;
        height: auto;
    }

    @media ${device.mobile} {
        .img {
            display: none;
        }
        ul{
            margin-bottom:0 ;
            li > h3{
                margin-bottom:0;
            }
        }
    }
    @media ${device.tablet} {
    flex-direction:column-reverse;
    ul{
        margin:0;
        display:flex;
        gap:20px;
        justify-content:center;
        align-items:start;
        li{
            flex:2
        }
    }
    }

`;

export default Service;
