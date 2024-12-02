import style from 'styled-components';
import hero from '../assets/hero.png';
import { device } from '../utils/mediaQueries';
import { useEffect } from 'react';

const Hero = () => {

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
        <Wrapper>
            <section className="animate-target">
                <h2>mental Health in London</h2>
                <p>
                    Mental health challenges affect many people in
                    London, ranging from stress and anxiety to more
                    complex conditions like depression and bipolar
                    disorder.
                    <br /> Accessing the right support can be crucial,
                    whether through counseling, therapy, or community
                    resources. London&apos;s diverse population means there
                    are services tailored to different cultural and
                    linguistic needs. However, long waiting times for
                    treatment and the stigma surrounding mental health
                    often act as barriers. It is essential to raise
                    awareness and promote open conversations, creating
                    a city where mental well-being is prioritized and
                    supported.
                </p>
                <button className='btn'>Read More</button>
            </section>
            <section className='img-div animate-target'>
                <img src={hero} alt='illustration' className='img' />
            </section>
        </Wrapper>
    );
};

const Wrapper = style.main`
display:grid;
gap:20px;
grid-template-columns:repeat(2,1fr);
margin-bottom:1.5rem;

.animate-target {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.5s ease-in-out;
    }

.animate {
    opacity: 1;
    transform: translateX(10px);
}

h2 {
    font-size: 3rem;
}
p{
margin-top:0;
}

@media ${device.desktop}{
.img-div{
display:flex;
justify-content:center;
align-items:center;

.img{
object-fit: contain;
}
}
}

@media ${device.tablet}{
gap:15px;

h2 {
    font-size: 2.7rem;
}
p{
margin-top:0;
font-size:0.8rem;
}

.img-div{
display:flex;
justify-content:center;
align-items:center;

.img{
object-fit: contain;
}
}
}

@media ${device.mobile}{
display:flex;
flex-direction:column;
h2{
font-size:2.5rem;
text-align:center;
}
}
`;

export default Hero;
