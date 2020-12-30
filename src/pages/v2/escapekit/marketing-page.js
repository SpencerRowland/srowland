import React from "react"
import styled from "styled-components"

import PrismCode from "components/PrismCode"
import PageContainer from "components/v2/PageContainer"
import CodePenIcon from 'images/v2/codepen.png'
import LeaderboardsImg from 'images/v2/marketing-page-leaderboards.jpg'
import PhotosImg from 'images/v2/marketing-page-photos.jpg'
import Review1 from 'images/v2/marketing-page-review-1.jpg'
import Review2 from 'images/v2/marketing-page-review-2.jpg'
import Review3 from 'images/v2/marketing-page-review-3.jpg'
import FullV1 from 'images/v2/marketing-page-full-v1.png'
import FullV2 from 'images/v2/marketing-page-full-v2.png'


const StyledPost = styled.div`
	margin: 0 auto;
  max-width: 720px;
	padding: 105px 30px 30px;
	width: 100%;
	h1 {
		color: #111;
		font-family: "Rubik", sans-serif;
		font-size: 2.5em;
		font-weight: 500;
		line-height: 1.75;
		margin: 0 0 15px;
	}
	h2 {
		color: #111;
		font-family: "Rubik", sans-serif;
		font-size: 2em;
		font-weight: 300;
		line-height: 1.75;
		margin: 30px 0 15px;
	}
	p {
		color: #111;
		font-family: "Merriweather", serif;
		line-height: 1.75;
		margin: 0 0 15px;
		padding: 0;
	}
	ul {
		color: #111;
		font-family: "Merriweather", serif;
		line-height: 1.75;
    margin-bottom: 15px;
		li {
			margin-bottom: 4px;
		}
	}
	a.text-link {
		border-bottom: 2px solid #eaf6ff;
		color: #036084;
		padding-bottom: 1px;
		text-decoration: none;
		transition: all .2s ease-in-out;
		&:hover {
			background-color: #eaf6ff;
		}
	}
	hr {
		margin: 40px auto;
    border: 4px solid #eaf6ff;
	}
	.img-bg {
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: none;
    margin-top: 64px;
    margin-bottom: 64px;
		background-color: #e9e9e9;
		justify-content: space-evenly;
		padding: 64px 0;
  }
  .going-deep-img-row {
    & > div {
      max-width: 700px;
    }
  }
  .social-proof-img-row {
    & > div {
      max-width: 500px;
    }
  }
  @media (max-width: 768px) {
    .img-bg {
      padding: 32px 0;
    }
    .code-block-buttons {
      flex-direction: column;
      padding-top: 0;
      a:first-child {
        margin-bottom: 15px;
      }
    }
    .going-deep-img-row {
      flex-direction: column;
      & > div {
        margin: 0 0 32px;
        max-width: 500px;
        padding: 0 25px;
        width: 100%;
      }
    }
    .going-deep-button-row {
      padding: 0;
    }
    .social-proof-img-row {
      flex-direction: column;
      & > div {
        margin: 0 0 32px;
        max-width: 500px;
        padding: 0 25px;
        width: 100%;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .final-img-row {
      flex-direction: column;
      & > div {
        margin: 0 0 32px;
        max-width: 500px;
        padding: 0 25px;
        width: 100%;
        &:first-child {
          margin-bottom: 64px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

`

const codeHTML = `
<section>
  
  <div id="tl-wrapper">
    <div id="tl"></div>
  </div>
  
  <div class="spacer"></div>
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 1</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 2</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 3</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 4</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 5</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 6</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 7</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 8</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 9</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  
  <div class="event inactive">
    <div class="event__left image">
      <span class="text">Step 10</span>
    </div>
    <div class="event__center">
      <div class="event__center__point">
        <div class="event__center__point__outer"></div>
        <div class="event__center__point__middle"></div>
        <div class="event__center__point__inner" data-js="point"></div>
      </div>
    </div>
    <div class="event__right">
      <div class="check"></div>
    </div>
  </div>
  
  <div class="spacer"></div>
  <div class="spacer"></div>
  
</section>
`

const codeCSS = `
$spacerHeight: 250px;
$pointColor: #f7c75f;
$pointSize: 54px;

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

section {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  min-height: 100vh;
  margin: 20px 0;
  .spacer {
    height: $spacerHeight;
  }
  .event {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    .text {
      color: #4277ce;
      font-size: 18px;
      font-weight: 500;
      transition: opacity .2s, transform .2s;
    }
    &.inactive {
      .text {
        opacity: 0;
        transform: translateX(20px);
      }
      .check {
        opacity: 0;
        transform: translateX(-20px);
      }
      .event__center__point__outer {
        transform: translate(-50%, -50%) scale(.2);
      }
      .event__center__point__middle {
        transform: translate(-50%, -50%) scale(.3);
      }
      .event__center__point__inner {
        transform: translate(-50%, -50%) scale(.95);
      }
    }
    &__left {
      align-items: center;
      display: flex;
      flex: 1 1 0;
      justify-content: flex-end;
    }
    &__center {
      margin: 0 50px;
      width: 16px;
      &__point {
        height: $pointSize;
        position: relative;
        width: $pointSize;
        left: 50%;
        transform: translateX(-50%);
        & > div {
          position: absolute;
          border-radius: 50%;
          transition: transform .2s;
          z-index: 2;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: $pointColor;
        }
        &__outer {
          width: $pointSize;
          height: $pointSize;
          opacity: .21;
        }
        &__middle {
          width: $pointSize * .64;
          height: $pointSize * .64;
          opacity: .44;
        }
        &__inner {
          width: $pointSize * .426;
          height: $pointSize * .426;
          box-shadow: 0 0 25px 3px $pointColor;
        }
      }
    }
    &__right {
      align-items: center;
      display: flex;
      flex: 1 1 0;
    }
  }
}

#tl-wrapper {
  position: absolute;
  background: rgba(20,88,241,0.2);
  top: 0;
  bottom: 0;
  width: 16px;
  margin: 0 auto;
  overflow: hidden;
}

#tl {
    background-color: #4277ce;
    bottom: 0;
    left: 5px;
    position: absolute;
    top: 0;
    transform: translate(0, -100%);
    transform-style: preserve-3d;
    width: 6px;
    will-change: transform;
}

.check {
  background: transparent;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: relative;
  border: 3px solid #d9f1e0;
  transition: opacity .2s, transform .2s;
  &:after {
    content: "\\2713";
    position: absolute;
    top: -24px;
    left: 3px;
    font-size: 50px;
    color: black;
  }
}
`

const codeJS = `
const timelineWrapper = document.getElementById('tl-wrapper')
const timeline = document.getElementById('tl')
const timelineHeight = timeline.clientHeight
const timelinePoints = document.querySelectorAll('[data-js="point"]')
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// How far down should the bottom of the timeline be from the top of the viewport?
const tlFromTop = .4

setTimelineTransform(timeline)
activateTimelinePoints()
document.addEventListener('scroll', function(e) {
  setTimelineTransform(timeline)
  activateTimelinePoints()
})

function setTimelineTransform(timeline) {
  // The timeline element is positioned absolute inside the timeline wrapper element.
  // The transform style attribute for the timeline element is adjusted based upon
  // the timeline wrapper elements's scroll position.
  const distFromTop = timelineWrapper.getBoundingClientRect().top
  const pctTimelineInView = Math.min(Math.max(vh - (distFromTop + (vh *(1-tlFromTop))), 0), timelineHeight) / timelineHeight
  const transformStyle = 'translate3d(0px, -' + (1 - pctTimelineInView) * 100+ '%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
  timeline.style.transform = transformStyle
}

function activateTimelinePoints() {
  // For each timeline point, check if its distance from top of viewport is
  // less than or equal to the distance of the bottom of the timeline to top of viewport.
  // If yes, remove the inactive class from the closest element with the event class.
  // If not, add the inactive class to the closest element with the event class.
  for (var i = 0; i < timelinePoints.length; i++) {
    const distFromTop = timelinePoints[i].getBoundingClientRect().top
    if (distFromTop <= vh * tlFromTop) {
      timelinePoints[i].closest('.event').classList.remove('inactive')
    } else {
      timelinePoints[i].closest('.event').classList.add('inactive')
    }
  }
}
`

const CodeBlocks = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`

const CodeBlock = styled.div`
  max-width: 600px;
  width: 33%;
  padding: 0 15px;
  &:first-child {
    padding-left: 30px;
  }
  &:last-child {
    padding-right: 30px;
  }
  @media (max-width: 768px) {
    max-width: 500px;
    padding: 0 25px 32px;
    width: 100%;
    &:first-child {
      padding-left: 25px;
    }
    &:last-child {
      padding-right: 25px;
    }
  }
`

const ButtonRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 64px;
  width: 100%;
`

const Button = styled.a`
  align-items: center;
  background-color: #fff;
  border: 1px solid rgb(228, 228, 231);
  border-radius: .25rem;
  color: #000;
  cursor: pointer;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
  justify-content: center;
  margin: 0 15px;
  padding: .75rem 0;
  text-decoration: none;
  transition: all .2s;
  width: 250px;
  &:hover {
    border-color: rgb(212, 212, 216);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.01) 0px 4px 4.1px 0px, rgba(0, 0, 0, 0.02) 0px 4.9px 5.8px 0px, rgba(0, 0, 0, 0.027) 0px 6.3px 8.4px 0px, rgba(0, 0, 0, 0.05) 0px 8.8px 12.9px 0px, rgba(0, 0, 0, 0.11) 0px 15px 23px 0px;
  }
`

const ImgRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 32px;
  width: 50%;
  &:first-child {
    margin-left: 64px;
  }
  &:last-child {
    margin-right: 64px;
  }
  img {
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    max-width: 100%;
  }
  p {
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    margin: 0 0 4px 12px;
  }
`



export default ({data}) => {
	
	return (
		<PageContainer>
			<StyledPost>

				<h1>Redesigning the Escape Kit marketing page</h1>

				<h2>Overview</h2>
				<p>
					When I first launched Escape Kit, I was focused on product development
					so I set up a <a className="text-link" href="https://www.escapekit.co/v1/home/" target="_blank" rel="noopener noreferrer">quick and dirty sales page</a> and
					continued building. After completing the product’s “full” feature set,
					it was time to shift efforts to marketing. It was now obvious the marketing
					page needed a redesign.
				</p>

				<hr></hr>

				<h2>Problems</h2>
				<p>
					The previous sales page was intentionally brief and provided very little detail
					about the product. The copy focused solely on the digital waiver since it was the
					primary feature at the time of writing. The page did a poor job of communicating
					the full value the product could offer and was even causing some confusion amongst
					potential customers.
				</p>
				<p>
					The design also needed to be realigned with the core of the app. The dark visual design
					of the page was inconsistent with the light clean design inside the app.
				</p>
				<p>
					Finally, the page needed some social proof. It was time to display some logos from
					paying customers front and center and highlight the glowing reviews the product was
					receiving.
				</p>

				<hr></hr>

				<h2>Showing How It Works</h2>
				<p>
					My primary goal of the redesign was to clearly illustrate how the core of the
					product worked with a visually clean design that instills confidence and trust
					in the Escape Kit brand.
				</p>
				<p>
					When breaking down the core of the product, there were four critical steps:
				</p>
				<ul>
					<li>Customers complete waiver</li>
					<li>Customers play their game</li>
					<li>Take and upload photos</li>
					<li>Message customers</li>
				</ul>
				<p>
					Every escape room business has a similar process in their business so I was
					confident that I didn’t need to educate potential customers about the problem.
					My challenge was to quickly show why Escape Kit is the ideal tool to solve their
					problem by managing and improving that process.
				</p>
				<p>
					To grab my visitor’s attention, I decided to use a vertical timeline to walk
					through each step with a brief description and image. I keep a folder of bookmarks
					of beautiful web design and an example from <a className="text-link" href="https://www.finsweet.com/story" target="_blank" rel="noopener noreferrer">this webflow agency</a> came to mind
					immediately as the perfect tool for the job.
				</p>
				<p>
					After a deep dive into the site’s code, I was able to dissect the animation
					and implement a solution. See my code below.
				</p>

				<div className="img-bg">
          <CodeBlocks>
            <CodeBlock>
              <PrismCode
                code={codeHTML}
                language="html"
                header="html"
              />
            </CodeBlock>
            <CodeBlock>
              <PrismCode
                code={codeCSS}
                language="css"
                header="scss"
              />
            </CodeBlock>
            <CodeBlock>
              <PrismCode
                code={codeJS}
                language="javascript"
                header="javascript"
              />
            </CodeBlock>
          </CodeBlocks>
          <ButtonRow className="code-block-buttons">
            <Button href="https://codepen.io/spencerrowland/pen/VwKzGeG" target="_blank">
              <img src={CodePenIcon} style={{height:"18px", paddingRight:"12px"}} alt="CodePen" />
              View on CodePen
            </Button>
            <Button href="https://www.escapekit.co/#how-it-works" target="_blank">
              View Live Implementation
            </Button>
          </ButtonRow>
				</div>

        <h2>Going Deep</h2>
				<p>
          Escape Kit had evolved into more than just a digital waiver. It was now a
          powerful marketing tool specifically tailored to the escape room industry and
          I needed to highlight the many features that make that happen.
				</p>
				<p>
          Again, I wanted to focus on showing features instead of describing them in words.
          To do this, I used screenshots of the product with links to live demos to give
          visitors a real example of the feature when possible.
				</p>
				<p>
          For the screenshots, I used a simple Chrome extension called <a className="text-link" href="https://app.prntscr.com/en/index.html" target="_blank" rel="noopener noreferrer">Lightshot</a>.
          The screenshots alone were a bit dull so I dusted off my Photoshop skills
          and added a background along with some color and drop shadows to make the
          images more visually appealing.
				</p>
        <div className="img-bg">
          <ImgRow className="going-deep-img-row">
            <ImgContainer>
              <img src={PhotosImg} alt="Escape Kit Photos"/>
            </ImgContainer>
            <ImgContainer>
              <img src={LeaderboardsImg} alt="Escape Kit Leaderboards"/>
            </ImgContainer>
          </ImgRow>
          <ButtonRow className="going-deep-button-row">
            <Button href="https://www.escapekit.co/#features" target="_blank">
              View Live
            </Button>
          </ButtonRow>
        </div>

        <h2>Adding Social Proof</h2>
				<p>
          The product now had happily paying customers (woohoo!) from all over the world
          who were consistently giving me positive feedback...along with feature requests
          and bug reports of course.
				</p>
				<p>
          A sales page is no place to be humble. I needed to display this positive feedback front and center for all my potential
          customers to easily see.
				</p>
				<p>
          The escape room community is small so I reached out to some
          of my more well known users in the community whose name and face would most likely
          be recognized and asked for reviews to display on the Escape Kit sales page.
				</p>
        <p>
          A few of their slightly coached responses are below.
        </p>
        <div className="img-bg">
          <ImgRow className="social-proof-img-row">
            <ImgContainer>
              <img src={Review1} alt="Escape Kit Review 1"/>
            </ImgContainer>
            <ImgContainer>
              <img src={Review2} alt="Escape Kit Review 2"/>
            </ImgContainer>
            <ImgContainer>
              <img src={Review3} alt="Escape Kit Review 3"/>
            </ImgContainer>
          </ImgRow>
        </div>

        <h2>The Final Result</h2>
				<p>
          With these changes, an updated logo and some on-page SEO optimizations, the redesign
          was complete. The before and after is below.
				</p>


        <div className="img-bg">
          <ImgRow className="final-img-row">
            <ImgContainer style={{maxWidth:"400px"}}>
              <p>Before</p>
              <div style={{maxHeight:"500px", overflow:"auto"}}>
                <img src={FullV1} alt="Escape Kit V1"/>
              </div>
              <Button href="https://www.escapekit.co/v1/home/" target="_blank" style={{margin:"40px auto 0"}}>View Live</Button>
            </ImgContainer>
            <ImgContainer style={{maxWidth:"400px"}}>
              <p>After</p>
              <div style={{maxHeight:"500px", overflow:"auto"}}>
                <img src={FullV2} alt="Escape Kit V2"/>
              </div>
              <Button href="https://www.escapekit.co/" target="_blank" style={{margin:"40px auto 0"}}>View Live</Button>
            </ImgContainer>
          </ImgRow>
        </div>

				<hr></hr>

			</StyledPost>
		</PageContainer>
	)
}

