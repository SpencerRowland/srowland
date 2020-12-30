import React from "react"
import EeNashLayout from "../../components/eenash/eeNashLayout"
import MailingListForm from "../../components/eenash/mailingListForm"
import InheritanceImageSlider from "../../components/eenash/inheritanceImageSlider"
import InheritanceHeroImage from "../../images/eenash/img/inheritance-title-image.png"
import { Helmet } from "react-helmet"

const InheritancePage = () => (
    <EeNashLayout>
      <Helmet>
        <title>The Inheritance | Escape Experience - Nashville Escape Games</title>
        <body class="eenash inheritance"></body>
      </Helmet>

        <div className="row">                                           
            <div className="the-inheritance-page-cover experience-cover">
                <div className="title-image-page the-inheritance-page-title">
                    <img alt="The Inheritance Escape Game" src={InheritanceHeroImage}/>
                </div>
            </div>
        </div>                                                                                                                                                                                 

        <div id="game-details">
            <div className="game-details-wrapper">
                <ul>
                    <li>
                        <span>Escape Rate</span>
                        <p>27%</p>
                    </li>
                    <li>
                        <span>Players</span>
                        <p>2 - 8</p>
                    </li>
                    <li>
                        <span>Best Escape</span>
                        <p>36:43</p>
                    </li>
                </ul>
            </div>
            
        </div>
        <div className="row quick-game-description-bg">
            <div className="quick-game-description quick-game-description-padding">
                <h2>Claim What Is Rightfully Yours<br/>Before Someone Else Does</h2>
                <p>The Inheritance is a clue-like escape room that is part mystery and part scavenger hunt. The details of this Escape Experience remain suspiciously vague and will be one of the more challenging escape rooms you'll ever play.</p>
            </div>
        </div>
        <hr className="style7"/> 
        <div className="row">
            <div className="game-details-container">
                <div className="col-md-7 col-xs-12 experience-left-side">
                    <div className="long-game-description backstory-mobile">
                        <h3>The Inheritance Backstory</h3>

                        <p>It would seem that your distant yet eccentric uncle has suddenly passed away. Aside from rumors, you knew very little about your Uncle Nicky, only that he was a scientist of some sort and that he was very devoted to his work.</p>
                        <a role="button" data-toggle="collapse" href="#collapseSynopsis" aria-expanded="false" aria-controls="collapseSynopsis" className="collapsed collapse-button">Read More...</a>
                        <div className="collapse" id="collapseSynopsis" aria-expanded="false">
                            <p>On the night of his presumed death, the evening news aired a live broadcast of a fire in a lab building downtown - a building owned by the company your uncle worked for. After the building was extinguished and later the next day, the only scorched remains found were reportedly identified by the authorities there as Nickolia Vandershaff - your uncle. But the events leading up to your uncle’s death were mysterious.</p>
                            <p>The last time anyone in the family saw him was six weeks ago. But nothing seemed out of the ordinary about his absence until after his death. His death began to look very mysterious when a postcard from Jakarta, Indonesia, dated almost 20 years ago, arrived in the mail with the following written on the backside, “Should anything ever happen to me, wait for a call from John. Don’t trust anyone else! - Uncle Nicki”.</p>
                            <p>Days later, men claiming to be Federal Agents of some kind began visiting members of family and asking about your uncle’s whereabouts and dealings prior to his death. No one told them about the postcard.</p>
                            <p>This morning, when the phone rang, a man on the other side said that his name was John Turner, that he was your Uncle Nicky’s attorney, and that he was summoning you to your Uncle’s Study in his house for the the reading of his will - which to your surprise, you have been specifically named in. You barely knew the guy. John was very specific about the time in which you were to arrive.</p>
                            <p>What really happened to your Uncle Nicky? What was he working on? Why was the government involved. Why did he name you in his Will, and why did he specify that you read his will in the Study of his home. What did he need you to do? You’re about to find out.</p>
                        </div>
                    </div>
                    <div className="long-game-description backstory-desktop">
                        <h3>The Inheritance Backstory</h3>

                        <p>It would seem that your distant yet eccentric uncle has suddenly passed away. Aside from rumors, you knew very little about your Uncle Nicky, only that he was a scientist of some sort and that he was very devoted to his work.</p>
                        <p>On the night of his presumed death, the evening news aired a live broadcast of a fire in a lab building downtown - a building owned by the company your uncle worked for. After the building was extinguished and later the next day, the only scorched remains found were reportedly identified by the authorities there as Nickolia Vandershaff - your uncle. But the events leading up to your uncle’s death were mysterious.</p>
                        <p>The last time anyone in the family saw him was six weeks ago. But nothing seemed out of the ordinary about his absence until after his death. His death began to look very mysterious when a postcard from Jakarta, Indonesia, dated almost 20 years ago, arrived in the mail with the following written on the backside, “Should anything ever happen to me, wait for a call from John. Don’t trust anyone else! - Uncle Nicki”.</p>
                        <p>Days later, men claiming to be Federal Agents of some kind began visiting members of family and asking about your uncle’s whereabouts and dealings prior to his death. No one told them about the postcard.</p>
                        <p>This morning, when the phone rang, a man on the other side said that his name was John Turner, that he was your Uncle Nicky’s attorney, and that he was summoning you to your Uncle’s Study in his house for the the reading of his will - which to your surprise, you have been specifically named in. You barely knew the guy. John was very specific about the time in which you were to arrive.</p>
                        <p>What really happened to your Uncle Nicky? What was he working on? Why was the government involved. Why did he name you in his Will, and why did he specify that you read his will in the Study of his home. What did he need you to do? You’re about to find out.</p>
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
                                <div className="progress-bar test3 progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                                Intellect
                                <span className="sr-only">75% Intellect</span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
                                Mystery
                                <span className="sr-only">85% Mystery</span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
                                Imagination
                                <span className="sr-only">65% Imagination</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-pics">
                        <h3>Peek Inside The Inheritance</h3>
                        <div className="slider-container">
                            <InheritanceImageSlider/>
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
                        <a href="#">Book The Inheritance</a>
                    </div>
                </div>
            </div> 
        </div>

        <MailingListForm/>
      
    </EeNashLayout>
)

export default InheritancePage
