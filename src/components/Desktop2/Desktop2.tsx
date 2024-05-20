import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _14327653_54742311Icon } from './_14327653_54742311Icon.js';
import { APPLYNOWBUTTON_Property1WithPr } from './APPLYNOWBUTTON_Property1WithPr/APPLYNOWBUTTON_Property1WithPr';
import { Award_starIcon2 } from './Award_starIcon2.js';
import { Award_starIcon3 } from './Award_starIcon3.js';
import { Award_starIcon4 } from './Award_starIcon4.js';
import { Award_starIcon5 } from './Award_starIcon5.js';
import { Award_starIcon } from './Award_starIcon.js';
import { BiImageAltIcon2 } from './BiImageAltIcon2.js';
import { BiImageAltIcon3 } from './BiImageAltIcon3.js';
import { BiImageAltIcon4 } from './BiImageAltIcon4.js';
import { BiImageAltIcon5 } from './BiImageAltIcon5.js';
import { BiImageAltIcon } from './BiImageAltIcon.js';
import { BxTimeFiveIcon } from './BxTimeFiveIcon.js';
import { CompleteIcon } from './CompleteIcon.js';
import classes from './Desktop2.module.css';
import { Ellipse8382Icon } from './Ellipse8382Icon.js';
import { Ellipse8383Icon } from './Ellipse8383Icon.js';
import { Ellipse8384Icon } from './Ellipse8384Icon.js';
import { FiBrEye } from './FiBrEye/FiBrEye';
import { FiBrInterrogation } from './FiBrInterrogation/FiBrInterrogation';
import { FiBrPaperPlane } from './FiBrPaperPlane/FiBrPaperPlane';
import { FiBrStar } from './FiBrStar/FiBrStar';
import { Frame1000015526Icon } from './Frame1000015526Icon.js';
import { GraduatedIcon } from './GraduatedIcon.js';
import { GraduationHatIcon } from './GraduationHatIcon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon3 } from './GroupIcon3.js';
import { GroupIcon4 } from './GroupIcon4.js';
import { GroupIcon5 } from './GroupIcon5.js';
import { GroupIcon } from './GroupIcon.js';
import { Medal_Property11 } from './Medal_Property11/Medal_Property11';
import { OnlineLearningIcon } from './OnlineLearningIcon.js';
import { Progress_Property1Default } from './Progress_Property1Default/Progress_Property1Default';
import { QuestionMarkIcon } from './QuestionMarkIcon.js';
import { Rectangle8809Icon2 } from './Rectangle8809Icon2.js';
import { Rectangle8809Icon3 } from './Rectangle8809Icon3.js';
import { Rectangle8809Icon } from './Rectangle8809Icon.js';
import { ScribbleFinalVersion24Icon } from './ScribbleFinalVersion24Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:99 */
export const Desktop2: FC<Props> = memo(function Desktop2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.desktop1}>
        <div className={classes.frame1000015514}>
          <div className={classes.lOGO}>LOGO</div>
          <div className={classes.image446}></div>
          <div className={classes.frame1000015515}>
            <div className={classes.login}>Login</div>
            <div className={classes.frame1000015511}>
              <div className={classes.signup}>Signup</div>
            </div>
          </div>
        </div>
        <div className={classes.frame1000015578}>
          <div className={classes.frame1000015580}>
            <div className={classes.frame1000015326}>
              <div className={classes.graduationHat}>
                <GraduationHatIcon className={classes.icon10} />
              </div>
              <div className={classes.anIITDelhiAlumniInitiative}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>An</span>
                  <span className={classes.label2}> </span>
                  <span className={classes.label3}>IIT Delhi</span>
                  <span className={classes.label4}> </span>
                  <span className={classes.label5}>Alumni Initiative</span>
                </p>
              </div>
            </div>
            <div className={classes.frame1000015579}>
              <div className={classes.becomeAnExpertInTheFieldOfData}>
                <p className={classes.labelWrapper2}>
                  <span className={classes.label6}>Become an Expert in the field of</span>
                  <span className={classes.label7}> </span>
                  <span className={classes.label8}>Data Science with 6 courses</span>
                </p>
              </div>
              <div className={classes.aSpeciallyCraftedTechKickstart}>
                <p className={classes.labelWrapper3}>
                  <span className={classes.label9}>A specially crafted Tech Kickstarter, with </span>
                  <span className={classes.label10}>5+ extensive online courses.</span>
                </p>
              </div>
            </div>
            <div className={classes.frame1000015572}>
              <div className={classes.frame1000015573}>
                <div className={classes.award_star}>
                  <Award_starIcon className={classes.icon11} />
                </div>
                <div className={classes.personalMentorship}>Personal Mentorship</div>
              </div>
              <div className={classes.frame1000015571}>
                <div className={classes.award_star2}>
                  <Award_starIcon2 className={classes.icon12} />
                </div>
                <div className={classes.internshipAssistance}>Internship Assistance</div>
              </div>
              <div className={classes.frame1000015574}>
                <div className={classes.award_star3}>
                  <Award_starIcon3 className={classes.icon13} />
                </div>
                <div className={classes.industryCertifiedCourses}>Industry Certified Courses</div>
              </div>
            </div>
          </div>
          <div className={classes.frame1000015582}>
            <div className={classes.frame10000155112}>
              <div className={classes.enrollNow}>Enroll Now</div>
              <FiBrPaperPlane
                className={classes.fiBrPaperPlane}
                classes={{ group: classes.group }}
                swap={{
                  group: (
                    <div className={classes.group}>
                      <GroupIcon className={classes.icon} />
                    </div>
                  ),
                }}
              />
            </div>
            <div className={classes.frame1000015581}>
              <div className={classes.knowMore}>Know More</div>
              <FiBrInterrogation
                className={classes.fiBrInterrogation}
                swap={{
                  vector: <VectorIcon className={classes.icon2} />,
                  vector2: <VectorIcon2 className={classes.icon3} />,
                  vector3: <VectorIcon3 className={classes.icon4} />,
                }}
              />
            </div>
          </div>
        </div>
        <div className={classes.macBookAir3}>
          <div className={classes.frame1000015587}>
            <div className={classes.onlineLearning}>
              <OnlineLearningIcon className={classes.icon14} />
            </div>
            <div className={classes.frame1000015584}>
              <div className={classes._24}>24</div>
              <div className={classes.courses}>Courses</div>
            </div>
          </div>
          <div className={classes.rectangle8727}></div>
          <div className={classes.frame1000015588}>
            <div className={classes.graduated}>
              <GraduatedIcon className={classes.icon15} />
            </div>
            <div className={classes.frame1000015583}>
              <div className={classes._30k}>30k+</div>
              <div className={classes.learners}>Learners</div>
            </div>
          </div>
          <div className={classes.rectangle8728}></div>
          <div className={classes.frame1000015589}>
            <div className={classes.questionMark}>
              <QuestionMarkIcon className={classes.icon16} />
            </div>
            <div className={classes.frame1000015585}>
              <div className={classes._100k}>100k+</div>
              <div className={classes.doubtsSolved}>Doubts Solved</div>
            </div>
          </div>
          <div className={classes.rectangle8729}></div>
          <div className={classes.frame1000015590}>
            <div className={classes.complete}>
              <CompleteIcon className={classes.icon17} />
            </div>
            <div className={classes.frame1000015586}>
              <div className={classes._10k}>10k+</div>
              <div className={classes.studentProjects}>Student Projects</div>
            </div>
          </div>
        </div>
        <div className={classes.frame1000015591}>
          <div className={classes.overview}>Overview</div>
          <div className={classes.curriculum}>Curriculum</div>
          <div className={classes.refund}>Refund</div>
          <div className={classes.testimonials}>Testimonials</div>
          <div className={classes.rectangle8807}></div>
        </div>
      </div>
      <div className={classes.courseCurriculuM}>
        <div className={classes.frame1000015155}>
          <div className={classes.frame1000015151}>
            <div className={classes.text}>DATASCIENCE COURSE LEARNING PATH</div>
          </div>
          <div className={classes.dataScienceCourseCurriculum}>
            <p className={classes.labelWrapper4}>
              <span className={classes.label11}>Data Science</span>
              <span className={classes.label12}> Course Curriculum</span>
            </p>
          </div>
        </div>
        <div className={classes.frame1000015154}>
          <div className={classes.frame1000015152}>
            <div className={classes.frame1000015153}>
              <div className={classes.c}>C++</div>
              <div className={classes.learnCForStrongProgrammingFund}>
                Learn C++ for strong programming fundamentals.
              </div>
            </div>
            <div className={classes.frame10000151512}>
              <FiBrEye
                swap={{
                  group: <GroupIcon2 className={classes.icon5} />,
                }}
              />
              <div className={classes.text2}>View Curriculum</div>
            </div>
          </div>
          <div className={classes.frame10000151532}>
            <div className={classes.frame10000151533}>
              <div className={classes.mERNStack}>MERN Stack</div>
              <div className={classes.masterTheMERNStackForHighDeman}>
                Master the MERN stack for high-demand projects.
              </div>
            </div>
            <div className={classes.frame10000151513}>
              <FiBrEye
                swap={{
                  group: <GroupIcon3 className={classes.icon6} />,
                }}
              />
              <div className={classes.text3}>View Curriculum</div>
            </div>
          </div>
          <div className={classes.frame10000151542}>
            <div className={classes.frame10000151534}>
              <div className={classes.dataStructureAlgorithm}>Data Structure &amp; Algorithm</div>
              <div className={classes.excelInDataStructuresAndAlgori}>
                Excel in Data Structures and Algorithms for interview success.
              </div>
            </div>
            <div className={classes.frame10000151514}>
              <FiBrEye
                swap={{
                  group: <GroupIcon4 className={classes.icon7} />,
                }}
              />
              <div className={classes.text4}>View Curriculum</div>
            </div>
          </div>
          <div className={classes.frame10000151552}>
            <div className={classes.frame10000151535}>
              <div className={classes.competitveProgramming}>Competitve Programming</div>
              <div className={classes.excelInDataStructuresAndAlgori2}>
                Excel in Data Structures and Algorithms for interview success.
              </div>
            </div>
            <div className={classes.frame10000151515}>
              <FiBrEye
                swap={{
                  group: <GroupIcon5 className={classes.icon8} />,
                }}
              />
              <div className={classes.text5}>View Curriculum</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.courseCurriculuM2}>
        <div className={classes.unlock6CertificatesInternshipO}>
          <p className={classes.labelWrapper5}>
            <span className={classes.label13}>Unlock </span>
            <span className={classes.label14}>6 Certificates</span>
            <span className={classes.label15}> &amp; </span>
            <span className={classes.label16}>Internship Opportunities!</span>
          </p>
        </div>
        <div className={classes.frame1000015599}>
          <div className={classes.frame1000015596}>
            <div className={classes.get6IndustryRecognizedCertific}>Get 6 Industry Recognized Certificates!</div>
            <div className={classes.newCerticiateDesign}>
              <div className={classes.frame40025}></div>
              <div className={classes.frame40026}>
                <div className={classes.wwwLOGOCom}>www.LOGO.com</div>
                <div className={classes.certificateIDTDUIUX2023234}>
                  <p className={classes.labelWrapper6}>
                    <span className={classes.label17}>Certificate-ID:</span>
                    <span className={classes.label18}> </span>
                    <span className={classes.label19}>TD-UIUX-2023-234 </span>
                  </p>
                </div>
                <div className={classes.datEOfIssueSeptember62023}>
                  <p className={classes.labelWrapper7}>
                    <span className={classes.label20}>DatE of issue:</span>
                    <span className={classes.label21}> </span>
                    <span className={classes.label22}>September 6, 2023</span>
                  </p>
                </div>
                <div className={classes.frame40033}>
                  <div className={classes.frame40027}>
                    <div className={classes.line30}></div>
                    <div className={classes.shivamGoyal}>Shivam Goyal</div>
                    <div className={classes.coFounder}>Co Founder</div>
                  </div>
                  <div className={classes.frame40028}>
                    <div className={classes.line302}></div>
                    <div className={classes.abhishekGangwar}>Abhishek Gangwar</div>
                    <div className={classes.coFounder2}>Co Founder</div>
                  </div>
                </div>
                <div className={classes.sample}>Sample</div>
                <div className={classes.sample2}>Sample</div>
                <div className={classes.tutedude1}></div>
                <div className={classes.tutedude2}></div>
                <div className={classes.cERTIFICATEOFCompletion}>
                  <div className={classes.textBlock}>CERTIFICATE</div>
                  <div className={classes.textBlock2}>OF</div>
                  <div className={classes.textBlock3}>Completion</div>
                </div>
                <div className={classes.frame40030}>
                  <div className={classes.uIUXDESIGNING}>UI UX DESIGNING</div>
                </div>
              </div>
              <div className={classes.verifyAtWwwLOGOComVerifyCertif}>
                <p className={classes.labelWrapper8}>
                  <span className={classes.label23}>Verify at</span>
                  <span className={classes.label24}> </span>
                  <span className={classes.label25}>www.LOGO.com/verify-certificate</span>
                </p>
              </div>
              <div className={classes.frame40034}>
                <div className={classes.frame40029}>
                  <div className={classes.thisCertificateIsProudlyPresen}>This Certificate is proudly presented to</div>
                  <div className={classes.johnDoe}>John Doe</div>
                </div>
                <div className={classes.thisCertifiesThatJohnDoeComple}>
                  This certifies that John Doe completed the UI UX Designing course on September 22, 2023. All
                  coursework and assessments were successfully finished to meet LOGO&#39;s standards. LOGO wishes you
                  the best in all your future endeavors.
                </div>
              </div>
              <div className={classes.frame40036}>
                <div className={classes.lOGO2}>LOGO</div>
                <div className={classes.lOGO3}>LOGO</div>
                <div className={classes.lOGO4}>LOGO</div>
                <div className={classes.lOGO5}>LOGO</div>
                <div className={classes.lOGO6}>LOGO</div>
                <div className={classes.lOGO7}>LOGO</div>
                <div className={classes.lOGO8}>LOGO</div>
                <div className={classes.lOGO9}>LOGO</div>
              </div>
              <div className={classes.frame40045}>
                <div className={classes.lOGO10}>LOGO</div>
                <div className={classes.lOGO11}>LOGO</div>
                <div className={classes.lOGO12}>LOGO</div>
                <div className={classes.lOGO13}>LOGO</div>
                <div className={classes.lOGO14}>LOGO</div>
                <div className={classes.lOGO15}>LOGO</div>
                <div className={classes.lOGO16}>LOGO</div>
                <div className={classes.lOGO17}>LOGO</div>
              </div>
              <div className={classes.frame40046}>
                <div className={classes.lOGO18}>LOGO</div>
                <div className={classes.lOGO19}>LOGO</div>
                <div className={classes.lOGO20}>LOGO</div>
                <div className={classes.lOGO21}>LOGO</div>
                <div className={classes.lOGO22}>LOGO</div>
                <div className={classes.lOGO23}>LOGO</div>
                <div className={classes.lOGO24}>LOGO</div>
                <div className={classes.lOGO25}>LOGO</div>
              </div>
              <div className={classes.frame40037}>
                <div className={classes.lOGO26}>LOGO</div>
                <div className={classes.lOGO27}>LOGO</div>
                <div className={classes.lOGO28}>LOGO</div>
                <div className={classes.lOGO29}>LOGO</div>
                <div className={classes.lOGO30}>LOGO</div>
                <div className={classes.lOGO31}>LOGO</div>
                <div className={classes.lOGO32}>LOGO</div>
                <div className={classes.lOGO33}>LOGO</div>
              </div>
              <div className={classes.frame40038}>
                <div className={classes.lOGO34}>LOGO</div>
                <div className={classes.lOGO35}>LOGO</div>
                <div className={classes.lOGO36}>LOGO</div>
                <div className={classes.lOGO37}>LOGO</div>
                <div className={classes.lOGO38}>LOGO</div>
                <div className={classes.lOGO39}>LOGO</div>
                <div className={classes.lOGO40}>LOGO</div>
                <div className={classes.lOGO41}>LOGO</div>
              </div>
              <div className={classes.frame40039}>
                <div className={classes.lOGO42}>LOGO</div>
                <div className={classes.lOGO43}>LOGO</div>
                <div className={classes.lOGO44}>LOGO</div>
                <div className={classes.lOGO45}>LOGO</div>
                <div className={classes.lOGO46}>LOGO</div>
                <div className={classes.lOGO47}>LOGO</div>
                <div className={classes.lOGO48}>LOGO</div>
                <div className={classes.lOGO49}>LOGO</div>
              </div>
              <div className={classes.frame40040}>
                <div className={classes.lOGO50}>LOGO</div>
                <div className={classes.lOGO51}>LOGO</div>
                <div className={classes.lOGO52}>LOGO</div>
                <div className={classes.lOGO53}>LOGO</div>
                <div className={classes.lOGO54}>LOGO</div>
                <div className={classes.lOGO55}>LOGO</div>
                <div className={classes.lOGO56}>LOGO</div>
                <div className={classes.lOGO57}>LOGO</div>
              </div>
              <div className={classes.frame40041}>
                <div className={classes.lOGO58}>LOGO</div>
                <div className={classes.lOGO59}>LOGO</div>
                <div className={classes.lOGO60}>LOGO</div>
                <div className={classes.lOGO61}>LOGO</div>
                <div className={classes.lOGO62}>LOGO</div>
                <div className={classes.lOGO63}>LOGO</div>
                <div className={classes.lOGO64}>LOGO</div>
                <div className={classes.lOGO65}>LOGO</div>
              </div>
              <div className={classes.frame40042}>
                <div className={classes.lOGO66}>LOGO</div>
                <div className={classes.lOGO67}>LOGO</div>
                <div className={classes.lOGO68}>LOGO</div>
                <div className={classes.lOGO69}>LOGO</div>
                <div className={classes.lOGO70}>LOGO</div>
                <div className={classes.lOGO71}>LOGO</div>
                <div className={classes.lOGO72}>LOGO</div>
                <div className={classes.lOGO73}>LOGO</div>
              </div>
              <div className={classes.frame40043}>
                <div className={classes.lOGO74}>LOGO</div>
                <div className={classes.lOGO75}>LOGO</div>
                <div className={classes.lOGO76}>LOGO</div>
                <div className={classes.lOGO77}>LOGO</div>
                <div className={classes.lOGO78}>LOGO</div>
                <div className={classes.lOGO79}>LOGO</div>
                <div className={classes.lOGO80}>LOGO</div>
                <div className={classes.lOGO81}>LOGO</div>
              </div>
              <div className={classes.frame40044}>
                <div className={classes.lOGO82}>LOGO</div>
                <div className={classes.lOGO83}>LOGO</div>
                <div className={classes.lOGO84}>LOGO</div>
                <div className={classes.lOGO85}>LOGO</div>
                <div className={classes.lOGO86}>LOGO</div>
                <div className={classes.lOGO87}>LOGO</div>
                <div className={classes.lOGO88}>LOGO</div>
                <div className={classes.lOGO89}>LOGO</div>
              </div>
            </div>
            <div className={classes.frame10000155722}>
              <div className={classes.frame10000155732}>
                <div className={classes.award_star4}>
                  <Award_starIcon4 className={classes.icon18} />
                </div>
                <div className={classes.officialAndVerified}>Official and Verified</div>
              </div>
              <div className={classes.frame10000155712}>
                <div className={classes.award_star5}>
                  <Award_starIcon5 className={classes.icon19} />
                </div>
                <div className={classes.enhancesCredibility}>Enhances Credibility</div>
              </div>
            </div>
          </div>
          <div className={classes.frame1000015597}>
            <div className={classes.frame1000015598}>
              <div className={classes.bagInternshipOpportunities}>Bag Internship Opportunities!</div>
              <div className={classes.withEveryCourseWeMakeYouNotOnl}>
                With every course, we make you not only industry-ready but also help you crack your first internship.
              </div>
            </div>
            <div className={classes._14327653_54742311}>
              <_14327653_54742311Icon className={classes.icon20} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.refund2}>
        <div className={classes.donTMissOutOnThisLimitedTimeOp}>
          <p className={classes.labelWrapper9}>
            <span className={classes.label26}>Don&#39;t miss out on this </span>
            <span className={classes.label27}>limited-time opportunity</span>
            <span className={classes.label28}> to learn for </span>
            <span className={classes.label29}>Free!</span>
          </p>
        </div>
        <div className={classes.frame1000015525}>
          <div className={classes.ellipse8382}>
            <Ellipse8382Icon className={classes.icon21} />
          </div>
          <div className={classes.ellipse8384}>
            <Ellipse8384Icon className={classes.icon22} />
          </div>
          <div className={classes.ellipse8383}>
            <Ellipse8383Icon className={classes.icon23} />
          </div>
          <div className={classes._100RefundOffer}>100% Refund Offer 😎 </div>
          <div className={classes.frame1000015527}>
            <div className={classes._20SeatsLeft}>20 Seats Left</div>
            <div className={classes.frame1000015526}>
              <Frame1000015526Icon className={classes.icon24} />
            </div>
            <div className={classes.frame1000015528}>
              <div className={classes.bxTimeFive}>
                <BxTimeFiveIcon className={classes.icon25} />
              </div>
              <div className={classes.offerEndsIn100Mins}>Offer ends in 10:00Mins</div>
            </div>
          </div>
          <div className={classes.scribbleFinalVersion24}>
            <ScribbleFinalVersion24Icon className={classes.icon26} />
          </div>
        </div>
        <div className={classes.frame1000015592}>
          <div className={classes.howDoesItWork}>How does it work?</div>
          <div className={classes.frame1000015535}>
            <Progress_Property1Default />
            <div className={classes.frame1000015593}>
              <div className={classes.steps}>
                <div className={classes.rectangle8809}>
                  <Rectangle8809Icon className={classes.icon27} />
                </div>
                <div className={classes.step1}>Step 1</div>
              </div>
              <div className={classes.step12}>
                <div className={classes.step1EnrollIntoYourFavoriteCou}>
                  Step 1 : Enroll into your favorite course for only ₹1,499
                </div>
                <div className={classes.frame1000015533}>
                  <div className={classes.image533}></div>
                </div>
                <div className={classes.startLearningWithLifetimeCours}>
                  <p className={classes.labelWrapper10}>
                    <span className={classes.label30}>Start Learning with </span>
                    <span className={classes.label31}>Lifetime Course Access.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.frame1000015594}>
              <div className={classes.steps2}>
                <div className={classes.rectangle88092}>
                  <Rectangle8809Icon2 className={classes.icon28} />
                </div>
                <div className={classes.step2}>Step 2</div>
              </div>
              <div className={classes.step22}>
                <div className={classes.step2CompleteCourseAssignments}>
                  Step 2: Complete Course &amp; Assignments within 2 Years!
                </div>
                <div className={classes.frame10000155332}>
                  <div className={classes._2}>2</div>
                  <div className={classes.yearsTimeFromTheDateOfEnrollme}>years time from the date of enrollment</div>
                </div>
                <div className={classes.finishTheCourseWithin2YearsToQ}>
                  <p className={classes.labelWrapper11}>
                    <span className={classes.label32}>Finish the course within </span>
                    <span className={classes.label33}>2 Years</span>
                    <span className={classes.label34}> to Qualify for Refund.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.frame1000015595}>
              <div className={classes.steps3}>
                <div className={classes.rectangle88093}>
                  <Rectangle8809Icon3 className={classes.icon29} />
                </div>
                <div className={classes.step3}>Step 3</div>
              </div>
              <div className={classes.step32}>
                <div className={classes.step3Receive100RefundUponCompl}>
                  Step 3: Receive 100% Refund upon completion
                </div>
                <div className={classes.frame1000015534}>
                  <div className={classes._100}>100%</div>
                  <div className={classes.enrollmentFeeIsRefunded}>Enrollment Fee is refunded</div>
                </div>
                <div className={classes.uponCourseCompletionWithin2Yea}>
                  <p className={classes.labelWrapper12}>
                    <span className={classes.label35}>Upon Course Completion within </span>
                    <span className={classes.label36}>2 Years</span>
                    <span className={classes.label37}>, Get Your </span>
                    <span className={classes.label38}>₹1,499 Back.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame1000015170}>
        <div className={classes.topCompaniesHiringDataScientis}>
          <p className={classes.labelWrapper13}>
            <span className={classes.label39}>Top Companies Hiring</span>
            <span className={classes.label40}> </span>
            <span className={classes.label41}>Data Scientist</span>
          </p>
        </div>
        <div className={classes.frame1000015166}>
          <div className={classes.frame1000015164}>
            <div className={classes.logo}>Logo</div>
          </div>
          <div className={classes.frame1000015163}>
            <div className={classes.logo2}>Logo</div>
          </div>
          <div className={classes.frame1000015165}>
            <div className={classes.logo3}>Logo</div>
          </div>
          <div className={classes.frame10000151662}>
            <div className={classes.logo4}>Logo</div>
          </div>
          <div className={classes.frame1000015167}>
            <div className={classes.logo5}>Logo</div>
          </div>
          <div className={classes.frame1000015168}>
            <div className={classes.logo6}>Logo</div>
          </div>
          <div className={classes.frame1000015169}>
            <div className={classes.logo7}>Logo</div>
          </div>
        </div>
      </div>
      <div className={classes.rectangle310}></div>
      <div className={classes.howDoesTheInternshipProgramWor}>How does the Internship Program works ?</div>
      <div className={classes.line2}></div>
      <div className={classes.frame18}>
        <div className={classes.biImageAlt}>
          <BiImageAltIcon className={classes.icon30} />
        </div>
      </div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.line5}></div>
      <div className={classes.frame19}>
        <div className={classes.biImageAlt2}>
          <BiImageAltIcon2 className={classes.icon31} />
        </div>
      </div>
      <div className={classes.frame20}>
        <div className={classes.biImageAlt3}>
          <BiImageAltIcon3 className={classes.icon32} />
        </div>
      </div>
      <div className={classes.frame21}>
        <div className={classes.biImageAlt4}>
          <BiImageAltIcon4 className={classes.icon33} />
        </div>
      </div>
      <div className={classes.frame23}>
        <div className={classes.biImageAlt5}>
          <BiImageAltIcon5 className={classes.icon34} />
        </div>
      </div>
      <div className={classes.learnFromOurStructuredPreRecor}>
        Learn from our structured pre recorded courses made by experts to meet industry needs
      </div>
      <div className={classes._11LiveDoubtSolvingSupportAvail}>
        1:1 live doubt solving support available throughout the day to clear your doubts instantly{' '}
      </div>
      <div className={classes.buildMajorProjectsWhichMakesYo}>
        Build major projects which makes your resume stand apart{' '}
      </div>
      <div className={classes.getGuaranteedPaidInternshipsAf}>
        Get guaranteed paid internships after completion of the program along with course completion certificates
      </div>
      <div className={classes.personalMentorsToGuideAndHelpY}>
        Personal mentors to guide and help you throughout your journey as a friend
      </div>
      <APPLYNOWBUTTON_Property1WithPr className={classes.aPPLYNOWBUTTON} />
    </div>
  );
});
