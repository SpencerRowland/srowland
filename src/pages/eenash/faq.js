import React from "react"
import { Link } from "gatsby"
import EeNashLayout from "../../components/eenash/eeNashLayout"
import MailingListForm from "../../components/eenash/mailingListForm"
import CollapsiblePanel from "../../components/eenash/collapsiblePanel"
import { Helmet } from "react-helmet"

const FaqPage = () => (
    <EeNashLayout>
      <Helmet>
        <title>Frequently Asked Questions | Escape Experience - Nashville Escape Games</title>
        <body class="eenash faq"></body>
      </Helmet>

      <div class="row margin-adjust">
          <div class="page-banner col-xs-12">
              <h1>
                  <span>FREQUENTLY ASKED QUESTIONS</span>
              </h1>        
          </div>
      </div>
    
      <div class="faq-bg">
    
            <div class="container compressed-container">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <h2 class="section-title">BOOKING AN EXPERIENCE</h2>

                <CollapsiblePanel
                  header="How much does this cost?"
                  bodyText="$28 per person plus tax."
                  collapse={true}
                />
                <CollapsiblePanel
                  header="What is your cancellation policy?"
                  bodyText="Our experiences are non-refundable. If you are unable to attend at the time of your scheduled booking, please contact us 24 hours before your event to reschedule and/or receive a “rain check”, or voucher."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Do you offer any discounts?"
                  bodyText="We offer a variety of discounts throughout the year, often based around holidays and special events. To learn about any current offers, join our mailing list and follow Escape Experience - Nashville on Facebook and Instagram."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Do I have to make a reservation?"
                  bodyText="Reservations are strongly encouraged. Booking an experience online is the only way we can guarantee that you will get the time and experience you want. There is always a chance that you will be able to participate in one of our experiences if you walk in without a reservation, but we can only accommodate you if there are available spots in an experience. Online reservations are always given priority, and we almost never have cancellations, but contact us and we will do our best to try and accommodate your needs."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="How do I book an experience?"
                  bodyText="You may book an experience online or call us at (615) 891-7929."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="What happens if I do not book all of the available spots in a room?"
                  bodyText="If you have less than 8 people in your group when you book, the remaining spots will be open for other groups to book with you. This is an essential part of the Escape Experience, as we encourage making new friends and working together to escape."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="The date or time I want to book does not exist on your schedule. What can I do?"
                  bodyText="If you need to book an experience for a different time than what is available on our general schedule you can give us a call at (615) 891-7929. We will do our best to try and accommodate your scheduling needs."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="What happens if I do not book all of the available spots?"
                  bodyText="If you do not book all 8 available spots, the left over spots remain open to the public and the potential exists for other participants that you may not know to join your experience. This situation typically results in a unique experience for everyone, wherein you meet and engage and work together with new and diverse peoples in ways you might not otherwise have the opportunity to do. We encourage the making of new friends, and observe it happening often. There is no faster way to break the ice with strangers then to get locked up in situation that requires everyone to work together and do it fast."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Can I guarantee that there won’t be strangers in the room?"
                  bodyText="Yes. To ensure that there are no strangers in the room with you, you may book all of the 8 available slots for the experience."
                  collapse={false}
                />
                    
                <h2 class="section-title">INSIDE THE EXPERIENCE</h2>
                <CollapsiblePanel
                  header="Am I really going to be 'locked' in a room?"
                  bodyText="Yes. The doors will be locked while you are inside each experience. However, each exit door is equipped with an automatic 'exit button' so that if at any time you feel you need to exit the experience, you may do so. If you must leave your experience, you may reenter the room when ready, but the timer will continue to countdown while you are outside the experience."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="How long is the experience?"
                  bodyText="In each experience, you and your group are given 60 minutes to escape. However, the entire experience takes approximately 90 minutes which includes a 15 minute briefing period before and 15 minutes afterwards for debriefing and pictures."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="What happens if we do NOT escape?"
                  bodyText="When time runs out, your game master will enter the room and offer to guide you through the remainder of the room. We will then take an “after photo” of your group in the lobby, and every member will receive a complimentary sticker."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="What happens if we do escape?"
                  bodyText="Upon escape, you will take a victory picture to show off to all your friends and family. You will also receive a complimentary “I ESCAPED” sticker, and will have the opportunity to purchase one of our “I ESCAPED” t-shirts."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="How early should I arrive?"
                  bodyText="Please arrive at least 15 minutes prior to your experience's scheduled start time. Escape Experience scenarios will begin exactly at their start times and being late might cause you to have less than sixty minutes to play."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Is there an age limit?"
                  bodyText="No, not really. Participants that are 14 years old and under must be accompanied by an adult when they arrive but are not required to have one in the experience with them. We recommend and design our escape experience scenarios for participants that are 12 years old and up. Younger participants may not completely understand all the puzzles and are more likely to have an enjoyable time with an adult present."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Should I bring anything?"
                  bodyText="Everything you will need to escape the scenario will be provided for you inside. You are welcome to bring any items you wish into the scenario, but we do offer complimentary lockers in our lobby to secure your belongings."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Can we bring our phones inside the experience with us?"
                  bodyText="Yes, but you will not be allowed to take any pictures or videos of anything inside the room. You are welcome to use your phone as a tool (a calculator, flashlight, etc.), but it will not be necessary to escape."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="What should I wear?"
                  bodyText="Almost any attire is fine. We recommend shoes you are comfortable standing in for up to an hour. You will have the opportunity to sit down in the experience if you need to, but to get the best experience, you will need to be moving around the room and standing most of the time. Our experiences may also require you to bend over and/or maneuver through spaces slightly smaller than a doorway, so wear clothing that will allow you to maneuver easily."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Can we bring food or drink into the rooms?"
                  bodyText="We ask that no food or drink be taken into our experiences, and alcohol is strictly prohibited on our premises."
                  collapse={false}
                />
                
                <h2 class="section-title">CHILDREN AND INFANTS</h2>
                <CollapsiblePanel
                  header="I don’t have a babysitter. Can I bring my infant child with me?"
                  bodyText="Please contact us directly via phone or email if you are planning to bring a small child or infant with you. We do our very best to accommodate a family's need regarding small children. For any groups bringing a small child or infant we recommend that you book all 8 spots in the experience when booking online. This is both to ensure the child’s safety and the integrity of the experience. A crying child may distract and disturb other participants that are not part of your group, and many items in our experiences could be considered dangerous to young children. Things such as small objects that may be choking hazards, situations that may be difficult to maneuver with a child in hand, as well as general actions and moments of excitement from other participants in the room have the potential to be dangerous for small children. Much of what can potentially happen inside one of our experiences is beyond our control. Therefore, if you must bring your small child or infant with you, you will need to designate someone in your group to closely monitor them at all times."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Do I need to pay for my children?"
                  bodyText="If you are booking all 8 spots in an experience, you will not be required to pay for additional participants that are children under 5 years old. However, if you are booking for less than 8 spots in a public experience, you will be required to purchase a spot for every person (including young children under the age of 5)."
                  collapse={false}
                />
                
                <h2 class="section-title">NUMBER OF PARTICIPANTS</h2>
                <CollapsiblePanel
                  header="What is the recommended group size?"
                  bodyText="Since this is a team building activity, we recommend groups of at least two people. However, a recommended group size really depends on the experience level of the participants and/or what you are trying to achieve or get out of the experience. If you are looking for a challenge, and if you already have experience playing escape rooms (you already know what to expect and how to think and act before you get in there), then just two or three people is probably a large enough group size for you. However, if you are brand new to the escape experience world, you might feel a bit unprepared at first, especially with just two or three people. The larger the group sizes the better the overall chances of an escape – typically. Even so, we’ve had a lot of two person first timer groups (some that escape, some that didn’t), and all have a great time with their escape attempt."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Can one person attempt an experience alone?"
                  bodyText="Escaping an experience on your own within the hour time limit is extremely difficult, but it is possible if you have a lot of experience with escape rooms. We certainly won’t turn anyone away that wants to give it a try on their own. In fact, we encourage it. Attempting to beat the odds is part of what makes the Escape Experience fun and exciting. However, our experiences are designed to have multiple people in the scenario."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="What is the maximum number that can be in one experience?"
                  bodyText="Each experience only allows for a maximum of eight (8) participants per room when booking online. However, under special circumstances, we can allow up to 10 participants inside an experience, but you will need to contact us directly via phone or email to set this up."
                  collapse={false}
                />
                                
                <h2 class="section-title">LOCATION, HOURS, AND MORE</h2>
                <CollapsiblePanel
                  header="Where are you located?"
                  bodyText="We are located in the heart of downtown Nashville on Union Street between 5th and 6th Avenues. Our address is 501 Union Street, Nashville, TN  37219."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="What are your hours of operation?"
                  bodyText="Our general hours are listed below. You can also see specific start times for each experience by clicking the “Book Now” button on the website and choosing a time that works best for you. Additionally, it is possible to schedule an experience at a time not normally available, but you will need to contact us directly to coordinate this.
                  Monday - Thursday: 9:00 AM to 10:00 PM
                  Friday - Saturday: 9:00 AM to 11:45 PM
                  Sunday: 12:00 PM to 10:00 PM"
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Are your experiences wheelchair accessible?"
                  bodyText="Yes. However, please give us a call at (615) 891-7929 to discuss which experience is best for your particular situation."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="How much are your t-shirts?"
                  bodyText="$15 each before tax."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Where can I park?"
                  bodyText="We do not have free parking onsite but we do recommend the Nashville Public Library Garage which is located a block away on Church Street. Visit their webpage (linked below) to find pricing and more details."
                  collapse={false}
                />
                <CollapsiblePanel
                  header="Can we bring food or drink inside the experience?"
                  bodyText="We ask that no food or drink is taken into the experiences. The consumption of alcohol is strictly prohibited on our premises and service may be denied to anyone noticeably intoxicated."
                  collapse={false}
                />
                
            </div>
            </div>
            
            <div class="more-questions">
                <h2>STILL HAVE QUESTIONS?</h2>
                <p>Please feel free to call or email us if your question was not answered above. Visit our <Link to="/eenash/contact">CONTACT</Link> page to find all of our contact details.</p>
            </div>
            
    </div>

    <MailingListForm/>

    </EeNashLayout>
)

export default FaqPage
