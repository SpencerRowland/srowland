import React from "react"
import { Link } from "gatsby"
import EeNashLayout from "../../components/eenash/eeNashLayout"
import MailingListForm from "../../components/eenash/mailingListForm"
import VaccineHeroImage from "../../images/eenash/img/vaccine_title_text_150Y.png"
import { Helmet } from "react-helmet"

const VaccinePage = () => (
    <EeNashLayout>
      <Helmet>
        <title>Vaccine | Escape Experience - Nashville Escape Games</title>
        <body class="eenash cblock"></body>
      </Helmet>

        <div class="row">                                           
            <div class="vaccine-page-cover experience-cover">
                <div class="title-image-page vaccine-page-title">
                    <img alt="Vaccine Escape Game" src={VaccineHeroImage}/>
                </div>
            </div>
        </div>                                                                                                                                                                                 

        <div id="game-details">
            <div class="game-details-wrapper">
                <ul>
                    <li>
                        <span>Escape Rate</span>
                        <p>35%</p>
                    </li>
                    <li>
                        <span>Players</span>
                        <p>2 - 8</p>
                    </li>
                    <li>
                        <span>Best Escape</span>
                        <p>39:19</p>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="row quick-game-description-bg">
            <div class="quick-game-description quick-game-description-padding">
                <h2>Save Yourself<br/>Along With The Rest Of Humanity</h2>
                <p>Vaccine is a thriller escape room. In order to survive, you must enter the abandoned house, find the cure and escape before you too become one of the infected. Do you have the guts to make it happen?</p>
            </div>
        </div>
        <hr class="style7"/> 
        <div class="row">
            <div class="game-details-container">
                <div class="col-md-7 col-xs-12 experience-left-side">
                    <div class="long-game-description backstory-mobile">
                        <h3>Vaccine Backstory</h3>

                        <p>The year is 2035 and the human race is in a terrible state of pandemic. Within months of discovering patient zero, 90% of the human population is already dead or worse. You are one of the few still left.</p>
                        <a role="button" data-toggle="collapse" href="#collapseSynopsis" aria-expanded="false" aria-controls="collapseSynopsis" class="collapsed collapse-button">Read More...</a>
                        <div class="collapse" id="collapseSynopsis" aria-expanded="false">
                            <p>Your small group of resilient survivors has been isolated for months but you've used your adaptive skills and resourcefulness to avoid infection thus far. However, hope is fading. You're ever searching for other healthy people but forever on the lookout for the “infected”.</p>
                            <p>Power and communication grids worldwide have been down for three years. All organized efforts to fight the outbreak have been disbanded and the extinction of the human race has seemed imminent for some time - until four days ago.</p>
                            <p>While hiking east towards the coast in search of food and safety, a much needed glimmer of hope arrives. Your radio picks up a looping signal luring you and your team with coordinates to an old house in a valley. It promises food and shelter but most importantly, the cure.</p>
                            <p>Could this be the message of salvation you've been praying for? Or is it something much worse?</p>
                            <p>It's night when you finally arrive at the coordinates just outside an old abandoned house. Did someone bring a flashlight?</p>
                        </div>
                    </div>
                    <div class="long-game-description backstory-desktop">
                        <h3>Vaccine Backstory</h3>

                        <p>The year is 2035 and the human race is in a terrible state of pandemic. Within months of discovering patient zero, 90% of the human population is already dead or worse. You are one of the few still left.</p>
                        <p>Your small group of resilient survivors has been isolated for months but you've used your adaptive skills and resourcefulness to avoid infection thus far. However, hope is fading. You're ever searching for other healthy people but forever on the lookout for the “infected”.</p>
                            <p>Power and communication grids worldwide have been down for three years. All organized efforts to fight the outbreak have been disbanded and the extinction of the human race has seemed imminent for some time - until four days ago.</p>
                            <p>While hiking east towards the coast in search of food and safety, a much needed glimmer of hope arrives. Your radio picks up a looping signal luring you and your team with coordinates to an old house in a valley. It promises food and shelter but most importantly, the cure.</p>
                            <p>Could this be the message of salvation you've been praying for? Or is it something much worse?</p>
                            <p>It's night when you finally arrive at the coordinates just outside an old abandoned house. Did someone bring a flashlight?</p>
                    </div>
                </div>
                        
                <div class="col-md-5 col-xs-12 experience-right-side">
                    <div class="toolkit">
                        <h3>Required Toolkit</h3>


                        <div class="progress-area">
                            <div class="progress">
                                <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                Teamwork
                                <span class="sr-only">80% Teamwork</span>
                                </div>
                            </div>    
                            <div class="progress">
                                <div class="progress-bar test3 progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                Courage
                                <span class="sr-only">90% Courage</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
                                Survival Skills
                                <span class="sr-only">85% Survival Skills</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                                Resiliency
                                <span class="sr-only">75% Resiliency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="experience-pics" style={{display: "none"}}>
                        <h3>Peek Inside Vaccine</h3>
                        <div class="slider-container">
                            <div>
                                <img src="img/study-map-425.jpg"/>
                            </div>
                            <div>
                                <img src="img/lab-425.jpg"/>
                            </div>
                            <div>
                                <img src="img/the-will-light-425.jpg"/>
                            </div>
                            <div>
                                <img src="img/infinity-mirror-425.jpg"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>   
            
                
        
        <div class="book-game">
            <div class="overlay">
                <div class="book-game-wrapper">
                    <div class="experience-page-book-button">
                        <a href="#">Book Vaccine</a>
                    </div>
                </div>
            </div> 
        </div>

        <MailingListForm/>
      
    </EeNashLayout>
)

export default VaccinePage
