import styled from 'styled-components';
import support from '../assets/support.png';
import community from '../assets/community.png';
import careers from '../assets/careers.png';
import employers from '../assets/employers.jpg';
import { device } from '../utils/mediaQueries.js';
import { useEffect } from 'react';

const Support = () => {

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

    return (
        <Wrapper className="container">
            <SupportContent className="animate-target">
                <h2>I&apos;m looking for support for...</h2>
                <p>
                    Clear Mind supports Londoners to look after their mental
                    health and wellbeing in a way that works for them. Clear Mind
                    supports Londoners to look after their mental health.
                </p>
            </SupportContent>
            <SupportBlock className="animate-target">
                <section className="young-div">
                    <div className="young-div-content">
                        <h3>Young people</h3>
                        <p>
                            We invite young people to guide and review our
                            content - so you can be sure we&apos;ll help with the
                            issues that really matter to you.
                        </p>
                        <button className="btn">Read more</button>
                    </div>
                    <img src={support} alt="mental puzzle" className="img" />
                </section>
                <ul>
                    <li className="content-row">
                        <h3>Faith & Belief Communities</h3>
                        <img src={community} alt="group of people" className="img" />
                    </li>
                    <li className="content-row">
                        <h3>Parents & Careers</h3>
                        <img src={careers} alt="group of people" className="img" />
                    </li>
                    <li className="content-row">
                        <h3>Employers & Employees</h3>
                        <img src={employers} alt="group of people" className="img" />
                    </li>
                </ul>
            </SupportBlock>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;

    .animate-target {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.5s ease-in-out;
    }

.animate {
    opacity: 1;
    transform: translateX(10px);
}
`;

const SupportContent = styled.section`
    display: flex;
    justify-content: space-between;

    h2 {
        margin-bottom: 0;
    }

    @media ${device.tablet} {
        gap: 10px;
        align-items: center;
        margin-bottom: 1rem;

        h2 {
            flex: 1.1;
        }

        p {
            flex: 1;
            margin: 0;
        }
    }

    @media ${device.mobile} {
        flex-direction: column;
    }
`;

const SupportBlock = styled.section`
    .young-div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .img {
            width: 25%;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .content-row {
        border: 1px solid var(--highlight);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: var(--shadow-1);
        border-radius: var(--borderRadius);

        .img {
            width: 80%;
        }
    }

    @media ${device.tablet} {
        .young-div {
            gap: 10px;
            margin-bottom: 1rem;
        }

        .young-div-content {
            flex: 1.1;

            h3 {
                margin-bottom: 0;
            }
        }

        .img {
            flex: 1;
        }
    }

    @media ${device.mobile} {
        ul {
            grid-template-columns: repeat(1, 1fr);
        }
        .one-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
        }

        .img {
            width: 80%;
            margin: 0 auto;
        }
    }
`;

export default Support;
