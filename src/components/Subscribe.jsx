import style from 'styled-components';
import subscribe from '../assets/subscribe.png';
import { device } from '../utils/mediaQueries.js';


const Subscribe = () => {
    return (
        <Wrapper>
            <img src={subscribe} alt='subscribe' className='img' />
            <section>
                <h2>Subscribe to our Newsletter</h2>
                <p>
                    Stay tuned and subscribe to our newsletter. Get
                    the latest tips and resources for Londoners.
                </p>
                <button className='btn'>Subscribe</button>
            </section>
        </Wrapper>
    );
};

const Wrapper = style.div`
.img{
width:50%
}

  section{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center; 
    text-align: center;
    }

@media ${device.mobile}{
.img{
    margin:0 auto;
}

    h2{
    margin:0;
    font-size:1.7rem;
    }
     p{
     font-size:0.7rem;
    }

}
   
   
@media ${device.tablet},${device.desktop},${device.desktopLarge}{

.img{
   margin:0 auto;
}
    h2{
    margin:1rem 0;
    }
     p{
    margin:0;
    font-size:1rem;
    }
    .btn{
    margin:1rem 0;
    }
}
    @media ${device.tablet},${device.desktop},${device.desktopLarge}{
    .img{
width:20%;
}
    }
`;

export default Subscribe;
