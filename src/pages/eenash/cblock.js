import React from "react"
import EeNashLayout from "../../components/eenash/eeNashLayout"
import MailingListForm from "../../components/eenash/mailingListForm"
import CblockImageSlider from "../../components/eenash/cblockImageSlider"
import CblockHeroImage from "../../images/eenash/img/C-Block-Escape-Game-Title-comp.png"
import { Helmet } from "react-helmet"

const CblockPage = () => (
    <EeNashLayout>
      <Helmet>
        <title>C-Block Prison Escape Game | Escape Experience - Nashville Escape Games</title>
        <body class="eenash cblock"></body>
      </Helmet>

        <div className="row">                                           
            <div className="c-block-page-cover experience-cover">
                <div className="c-block-page-overlay">
                    <div className="title-image-page c-block-page-title">
                        <img alt="C-Block Escape Game" src={CblockHeroImage}/>
                    </div>
                </div>
            </div>
        </div>                                                                                                                                                                                 

        <div id="game-details">
            <div className="game-details-wrapper">
                <ul>
                    <li>
                        <span>Escape Rate</span>
                        <p>42%</p>
                    </li>
                    <li>
                        <span>Players</span>
                        <p>2 - 8</p>
                    </li>
                    <li>
                        <span>Best Escape</span>
                        <p>36:23</p>
                    </li>
                </ul>
            </div>
            
        </div>

        <div className="row quick-game-description-bg">
            <div className="quick-game-description quick-game-description-padding">
                <h2>Falsely Accused. Redemption Awaits.</h2>
                <p>Ever wonder if you have what it takes to break out of prison? Here's your chance to find out! Locked away in a maximum security prison, your group has 60 minutes to breakout of C-Block before the guard returns.</p>
            </div>
        </div>
        <hr className="style7"/> 
        <div className="row">
            <div className="game-details-container">
                <div className="col-md-7 col-xs-12 experience-left-side">
                    <div className="long-game-description backstory-mobile">
                        <h3>C-Block Backstory</h3>

                        <p>Imprisoned and serving a life-sentence for a crime you didn’t commit, all hope seems lost until a daring escape plan is set in motion for you by a friend on the inside. Luckily, that friend is one of the prison guards.</p>
                        <a role="button" data-toggle="collapse" href="#collapseSynopsis" aria-expanded="false" aria-controls="collapseSynopsis" className="collapsed collapse-button">Read More...</a>
                        <div className="collapse" id="collapseSynopsis" aria-expanded="false">
                            <p>In the time you’ve been locked up, you’ve earned his trust. In light of his belief in your innocence, he’s decided to help you breakout. But he’ll have to be discrete about it or else end up behind bars himself.</p>
                        <p>The escape plan is about to be set in motion for you. Your friend didn’t have time to give you all of the details. All you know is that he has prepared a special prison cell for you with everything you’ll need to escape in it, and he’s arranged to have you transferred to it. Before the transfer can take place, you’ll have to be handcuffed. But don’t worry, he’s already thought that problem through for you.</p>
                        <p>Your friend wanted to give you more information, but there just wasn’t enough time. What he did tell you though, is that the guard in that section of C-Block, will only be gone for 1-hour, and that if you haven’t escaped by then, they’ll be nothing he can do to help.</p>
                        <p>Do you have what it takes to break out of prison before your last chance to escape is gone forever?</p>
                        </div>
                    </div>
                    <div className="long-game-description backstory-desktop">
                        <h3>C-Block Backstory</h3>

                        <p>Imprisoned and serving a life-sentence for a crime you didn’t commit, all hope seems lost until a daring escape plan is set in motion for you by a friend on the inside. Luckily, that friend is one of the prison guards.</p>
                        <p>In the time you’ve been locked up, you’ve earned his trust. In light of his belief in your innocence, he’s decided to help you breakout. But he’ll have to be discrete about it or else end up behind bars himself.</p>
                        <p>The escape plan is about to be set in motion for you. Your friend didn’t have time to give you all of the details. All you know is that he has prepared a special prison cell for you with everything you’ll need to escape in it, and he’s arranged to have you transferred to it. Before the transfer can take place, you’ll have to be handcuffed. But don’t worry, he’s already thought that problem through for you.</p>
                        <p>Your friend wanted to give you more information, but there just wasn’t enough time. What he did tell you though, is that the guard in that section of C-Block, will only be gone for 1-hour, and that if you haven’t escaped by then, they’ll be nothing he can do to help.</p>
                        <p>Do you have what it takes to break out of prison before your last chance to escape is gone forever?</p>
                    </div>
                </div>
                        
                <div className="col-md-5 col-xs-12 experience-right-side">
                    <div className="toolkit">
                        <h3>Required Toolkit</h3>


                        <div className="progress-area">
                            <div className="progress">
                                <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                Teamwork
                                <span className="sr-only">80% Teamwork</span>
                                </div>
                            </div>    
                            <div className="progress">
                                <div className="progress-bar test3 progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                Stealth
                                <span className="sr-only">90% Stealth</span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                                Elusiveness
                                <span className="sr-only">75% Elusiveness</span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                Street Smarts
                                <span className="sr-only">70% Street Smarts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-pics">
                        <h3>Peek Inside C-Block</h3>
                        <div className="slider-container">
                            <CblockImageSlider/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
                
        
        <div className="book-game">
            <div className="overlay">
                <div className="book-game-wrapper">
                    <div className="experience-page-book-button">
                        {/* eslint-disable-next-line */}
                        <a href="#">Book C-Block</a>
                    </div>
                </div>
            </div> 
        </div>

        <MailingListForm/>
      
    </EeNashLayout>
)

export default CblockPage
