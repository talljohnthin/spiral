import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MdClose from "react-ionicons/lib/MdClose";

export default function TermsAndDisclosuresModal({ isOpen, pleaseClose }) {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={pleaseClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className="modalTitle">
          <span>Terms & Disclosures</span>
          <MdClose onClick={pleaseClose} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <p>
              Welcome to EnergyBillCruncher.com (hereinafter referred to as
              "Company" "we," "us," or "our"). Before you begin to use the
              Website, please take a moment to review these terms and conditions
              ("Agreement") which is a legal agreement. By submitting any
              information on this Website, you agree to be bound by these terms
              and conditions. The Agreement describes the terms and conditions
              which govern your use of the Website and the products and services
              provided through or in connection with the Website (collectively,
              "Service"), which may be updated by us from time to time without
              notice to you. We may also offer other services that are governed
              by different terms and conditions. You must read and agree with
              all of the terms and conditions contained in this Agreement and
              the posted Privacy Policy then in effect ("Privacy Policy"), which
              is incorporated by reference, before you use the Service. If you
              do not agree to be bound by the terms and conditions of this
              Agreement, you may not use or access the Service.
            </p>
            <p>1. USER AGREEMENT.</p>
            <p>
              By using this Website, you agree to be bound by and to comply with
              these Terms and Conditions and the posted Privacy Policy which is
              incorporated herein as though fully set forth herein. Upon
              entering the requested information, our technology will forward
              your information to one of our participating providers or to an
              aggregator and their providers who may contact you regarding your
              request for services or products. This may be done automatically
              and a new window may appear or the provider may contact you
              directly by telephone, email or mail as set forth below. WE ARE
              NOT RESPONSIBLE FOR ANY ACTIONS AFTER YOU HAVE LEFT THIS WEBSITE.
              UPON ENTRY INTO AN PARTICIPANT'S WEBSITE LINKED TO THIS WEBSTIE,
              YOU SHOULD CAREFULLY REVIEW THE Privacy Policy AND TERMS AND
              CONDITIONS OF USE OF THAT WEBSITE BEFORE ENTERING ANY PERSONAL
              INFORMATION AS THOSE POLICES AND TERMS WILL DIFFER FROM THESE. In
              order to provide you the services you have requested, you are
              expressly giving your permission to provide any information
              collected on this Website to third parties. As such, you are
              expressly giving your permission for such third parties to contact
              you by mail, email, text messaging or telephone. By registering
              and using this Website, you agree that such act constitutes a
              purchase, an inquiry and/or an application for purposes of the
              Amended Telemarketing Sales Rule, 16 CFR §310 et seq. (the
              "ATSR"). Notwithstanding that your telephone number may be listed
              on the Federal Trade Commission's Do-Not-Call List (or a state
              do-not-call) list you have authorized us to contact you via
              telemarketing in accordance with the ATSR. Moreover, by
              registering with, or requesting information from, a third-party
              provider at or through the Website or other advertisement media
              made available by us (e.g., email marketing), you agree that such
              action shall constitute a purchase, an inquiry and/or an
              application with the respective third-party provider for purposes
              of the ATSR and you may be contacted via email, direct mail and/or
              telemarketing by such third-party provider in accordance with the
              ATSR. If, at any time, you do not wish to be bound by these
              conditions or you are unsatisfied with the Website, its content or
              other legal notices, you agree that your sole and exclusive remedy
              is to discontinue using this Website and you may opt-out using the
              method given below. You further represent and warrant that: (i)
              You are at least 18 years of age and possess the legal authority
              to enter into an agreement and to use the Website in accordance
              with these Terms and Conditions; (ii) All information supplied by
              you is true and accurate (without limitation of the foregoing, the
              provision of any speculative, incorrect, misleading, false or
              fraudulent information is prohibited); (iii) You understand and
              agree that Company may share personally identifiable information
              and other information provided by, and aggregated information
              about you and other users with its vendors, sponsors, providers,
              service providers and marketers, lookup and reference services,
              other unaffiliated third parties, and other entities that Company
              believes are able to provide its Website users with offers and
              opportunities, as more fully described in the Company's posted
              Privacy Policy (iv) You understand that abuse of this Website may
              result in your being denied access to such Website, as determined
              by Company in its sole discretion; (v) You understand and agree
              that Company controls only the landing page and intake forms on
              this Website. Upon entry of the requested information, a
              participating Provider will be contacting you directly to provide
              you with information regarding their services. Company shall not
              be responsible for any Provider or aggregators contact with you or
              any subsequent agreement you may enter into with such Provider or
              aggregator; and (vi) Your use of the Services on this Website is
              subject to all applicable federal, state and local laws and
              regulations; (vii) You also give us permission to send you
              periodic updates of services and products which may be of interest
              to you through email, mail, or telemarketing; You understand that
              our providers may maintain the information you submitted to us
              whether you elect to use their services or not. In the event you
              no longer want to receive communications from one of our
              providers, you agree to notify the partner directly.
            </p>
            <p>2. SERVICES.</p>
            <p>
              The Website is an online network marketplace. You understand and
              agree that if you submit a request through the Website, we will
              share your personal information (such as your full name, address,
              telephone number, and financial information) with participating
              providers in our network to process and fulfill your request. You
              understand and agree that we are not a solar installer,
              manufacturer or undertake a credit analysis or make credit
              decisions in connection with the Service and that we are not a
              party to any agreement that you may make with any participating
              service provider whom you choose to use or from whom you obtain a
              solar installation. The participating provider(s) with whom you
              contract to assist you is solely responsible for its services to
              you. You further acknowledge and agree that we are not acting as
              your agent or broker and are not recommending any particular
              service provider to you. Any compensation we may receive is paid
              by the participating service provider for advertising services we
              provided to them. We do not charge you a fee to use the Website.
              You understand that the requirements for a particular service are
              made by the participating service providers and we do not endorse,
              warrant, or guarantee the products or service provider or
              installer. Nothing contained in this Agreement shall constitute an
              offer or promise for a loan commitment or solar installation. You
              agree that we shall not be liable for any damages or costs of any
              type which arise out of or in connection with your use of the
              service provider's services. You also give us permission to send
              you periodic updates of services and products which may be of
              interest to you. Please note that information we provide you
              either on the website or by email may not be used as the sole
              basis for your decision to retain a particular service provider,
              and may their services may not meet your particular needs. Please
              seek the advice of an appropriate professional for an assessment
              of the loan information provided by the lender.
            </p>
            <p>3. CHANGES TO TERMS AND CONDITIONS AND POLICIES.</p>
            The Website is an online network marketplace. You understand and
            agree that if you submit a request through the Website, we will
            share your personal information (such as your full name, address,
            telephone number, and financial information) with participating
            providers in our network to process and fulfill your request. You
            understand and agree that we are not a solar installer, manufacturer
            or undertake a credit analysis or make credit decisions in
            connection with the Service and that we are not a party to any
            agreement that you may make with any participating service provider
            whom you choose to use or from whom you obtain a solar installation.
            The participating provider(s) with whom you contract to assist you
            is solely responsible for its services to you. You further
            acknowledge and agree that we are not acting as your agent or broker
            and are not recommending any particular service provider to you. Any
            compensation we may receive is paid by the participating service
            provider for advertising services we provided to them. We do not
            charge you a fee to use the Website. You understand that the
            requirements for a particular service are made by the participating
            service providers and we do not endorse, warrant, or guarantee the
            products or service provider or installer. Nothing contained in this
            Agreement shall constitute an offer or promise for a solar
            installation. You agree that we shall not be liable for any damages
            or costs of any type which arise out of or in connection with your
            use of the service provider's services. You also give us permission
            to send you periodic updates of services and products which may be
            of interest to you. Please note that information we provide you
            either on the website or by email may not be used as the sole basis
            for your decision to retain a particular service provider, and may
            their services may not meet your particular needs. Please seek the
            advice of an appropriate professional for an assessment of the
            proposal provided by the solar installer.
            <p>4. REJECTION, TERMINATION AND CANCELLATION.</p>
            <p>
              Company or its participating service provider may reject any
              registration or subsequent application from any person with or
              without cause at their sole discretion. Your status as a
              registered user creates only a customer relationship with Company
              and does not create an employment relationship, an independent
              contractor relationship, an agency relationship, or any other
              relationship. You may cancel your request at anytime by sending an
              e-mail to info@Energybillcruncher.com.
            </p>
            <p>5. PROHIBITED USER CONDUCT.</p>
            <p>
              A. You are prohibited from any conduct that, in Company's sole
              discretion, restricts or inhibits any other user from using or
              enjoying the Website or any linked Website. You are prohibited
              from accessing or attempting to access private areas of the
              Website or any other user's information. You are prohibited from
              impersonating any person or entity or otherwise falsely stating or
              misrepresenting your affiliation with a person or entity.
            </p>
            <p>
              B. You are prohibited from using any data, content, and any
              information provided or used on the Website, as well as your use
              of our Website, products and services which will infringe or
              facilitate infringement on any copyright, patent, trademark, trade
              secret, or other proprietary, publicity, or privacy rights of any
              person or entity, including third-parties. You are prohibited from
              using any data, content or information which contains or promotes
              any viruses, Trojan horses, worms, time bombs or other computer
              programming or code that is designed or intended to damage,
              destroy, intercept, download, interfere, manipulate, or otherwise
              interrupt or expropriate the Website, data, personal information,
              software, equipment, servers or content or facilitate or promote
              hacking or similar conduct. You are prohibited from harvesting,
              sweeping, or use any other means, to collect information about
              users of the Website; Use automated means, including spiders,
              robots, bots, scripts, crawlers, or the like, in connection with
              any activity on the Website; Resell, assign, sublicense, otherwise
              transfer, or delegate your rights or obligations under these Terms
              and Conditions without the prior express written authorization of
              Company; Modify, publish, transmit, transfer or sell, reproduce,
              create derivative works from, distribute, perform, link, display
              or in any way exploit any Website content; or except as otherwise
              expressly permitted on the Website, use any information you may
              obtain from the Website (including without limitation, user
              information) to send any other person unsolicited messages,
              commercial or otherwise, by electronic, telephonic, postal or
              other means.
            </p>
            <p>6. MARKETING MATERIALS.</p>
            <p>
              By signing up at the Website, you are giving your consent to
              receive promotions or newsletters from Company, our affiliates
              and/or third-party marketers. If you do not wish to receive these
              emails, you may request to be removed by using the opt-out
              mechanism listed in the email messages you receive. To opt-out of
              email promotions from Company alone, you may simply use our
              convenient Opt-Out Page located at the bottom of the first page of
              the Website. Please note that exercising an opt-out mechanism only
              applies to the company with which you exercised that right.
            </p>
            <p>
              7. THIRD PARTY CONTENT/PROMOTIONS, THIRD PARTY PRODUCTS, AND THIRD
              PARTY WEBSITE ACTIVITIES.
            </p>
            <p>
              The Website may display and make available content, promotions,
              advertisements, and offers provided by third parties ("Third Party
              Promotions"), as well as goods and services offered by third
              parties ("Third Party Products"). You understand and agree that
              Company shall not be responsible and shall have no liability for
              any Third Party Promotion or Third Party Product or for your
              activities on any third party Websites for whom Company displays
              offers ("Third Party Website Activity"), and that you participate
              in or choose to click on a Third Party Promotion, purchase and/or
              use a Third Party Product, or participate in a Third Party Website
              Activity solely at your own risk. You agree that your sole remedy
              in connection with any Third Party Promotion, Third Party Product
              or Third Party Website Activity will be with the applicable Third
              Party offering the Third Party Promotion, Third Party Product or
              Third Party Website Activity and that you shall have no remedy
              against Company arising from your use of or participation in, or
              inability to use or participate in, any Third Party Promotion,
              Third Party Product or Third Party Website Activity.
            </p>
            <p>8. RELATIONSHIP WITH MARKETING PROVIDERS.</p>
            <p>
              This is an independent Website and is not affiliated with any of
              the listed products or services. Trademarks, service marks, logos,
              and/or domain names are the property of their respective owners,
              who have no association with or make any endorsement of the
              products or services provided by this Website. Furthermore,
              participating service providers are independent third parties and
              this Website is not acting as a principal, agent or broker with
              respect to any providers.
            </p>
            <p>9. LINKED WEBSITES.</p>
            <p>
              You may be able to link to third parties Websites ("Linked
              Websites") from the Website. Linked Websites are not, however,
              reviewed, controlled or examined by Company in any way and Company
              is not responsible for the content, availability, advertising,
              products or other materials of any such Linked Websites, or any
              additional links contained therein. Except as otherwise noted on
              the Website, these links do not imply Company endorsement of or
              association with the Linked Websites. In no event shall Company be
              liable, directly or indirectly, to anyone for any loss or damage
              arising from or occasioned by the creation or use of links to the
              Linked Websites, the Linked Websites themselves, your
              participation in activities on such Linked Websites, or the
              information, material, products or services accessed through these
              Linked Websites. You should direct any concerns to that Website's
              administrator or webmaster. Company reserves the exclusive right,
              at its sole discretion, to add, change, decline or remove, without
              notice, any feature or link to any of the Linked Websites from the
              Website and/or introduce different features or links.
            </p>
            <p>10. INTELLECTUAL PROPERTY RIGHTS.</p>
            <p>
              The Website contains intellectual property owned by Company and
              other parties. As between Company and you, Company is the sole
              owner of the Website and all materials on or available through the
              Website, including without limitation, all applicable U.S. and
              non-U.S. copyrights, patents, trademarks, and trade secrets, and
              other intellectual property rights thereto (collectively, the
              "Website Content"). Except as otherwise specifically provided in
              these Terms and Conditions, you may not download or save a copy of
              the Website content or any portion thereof, for any purpose;
              however, you may print a copy of individual screens appearing as
              part of the Website content solely for your personal,
              non-commercial use or records, provided that any Company or other
              marks, logos or other legends that appear on the copied screens
              remain on, and are not removed from the printed or stored images
              of such screens. Except as otherwise expressly permitted herein,
              you may not modify, copy, publish, display, transmit, adapt or in
              any way exploit any portion of the Website content unless you
              first obtain prior written consent from Company -- and from all
              other entities with an interest in the relevant intellectual
              property. Any unauthorized attempt to modify any Website content,
              to defeat or circumvent Company security features, or to utilize
              this Website for other than its intended purposes is strictly
              prohibited.
            </p>
            <p>11. DISCLAIMER OF WARRANTIES.</p>
            <p>
              Except as expressly set forth herein, Company is not responsible
              for any incorrect or inaccurate information or entry of
              information, whether caused by users of the Website or by any of
              the equipment or programming associated with or utilized in
              connection with the Website or the products or services provided
              on or through the Website, or by any technical or human error
              which may occur in the processing of information received by
              Company. Company assumes no responsibly for any error, omission,
              interruption, deletion, defect, delay in operation or
              transmission, communications line failure, theft or destruction or
              authorized access to, or alteration of, information received or
              submitted in connection with the Website. Company is not
              responsible for any problems, errors or technical malfunction of
              any telephone network or lines, computer on-line systems, servers
              or providers, computer equipment, or software, or any failure of
              email on account of technical problems or traffic congestion on
              the Internet or at any Website or combination thereof, including
              injury or damage to participants or to any other person's computer
              related to or resulting from use of the Website or Website
              Content. THIS WEBSITE, INCLUDING THE WEBSITE CONTENT IS PROVIDED
              "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EITHER
              EXPRESS OR IMPLIED. WITHOUT LIMITATION OF THE FOREGOING, COMPANY,
              AND ITS PARENT, SUBSIDIARIES, PARTNERS, AGENTS, AFFILIATES,
              LICENSORS, SERVICE PROVIDERS, ADVERTISORS, SUCCESSORS AND ASSIGNS
              SPECIFICALLY DISCLAIM ANY AND ALL WARRANTIES, INCLUDING, BUT NOT
              LIMITED TO: (i) ANY WARRANTIES CONCERNING THE AVAILABILITY,
              ACCURACY, APPROPRIATENESS, RELIABILITY, TIMELINESS, USEFULNESS, OR
              OTHERWISE OF THE WEBSITE, AND THE WEBSITE CONTENT; AND (ii) ANY
              WARRANTIES OF TITLE, WARRANTY OF NON-INFRINGEMENT, WARRANTIES OF
              MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. COMPANY DOES
              NOT WARRANT OR GUARANTEE THAT ANY PORTION OF THE WEBSITE OR THE
              WEBSITE CONTENT WILL BE FREE OF INFECTION BY VIRUSES, WORMS,
              TROJAN HORSES OR ANYTHING ELSE MANIFESTING CONTAMINATING OR
              DESTRUCTIVE PROPERTIES; OR THAT ACCESS TO THE WEBSITE OR WEBSITE
              CONTENT WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
            <p>12. LIMITATION OF LIABILITY.</p>
            <p>
              IN NO EVENT WILL COMPANY, ITS PARENTS, SUBSIDIARIES, PARTNERS,
              AGENTS, AFFILIATES, LICENSORS, PROVIDERS, SUCCESSORS AND ASSIGNS
              AND THEIR RESPECTIVE OFFICERS, DIRECTORS, AND EMPLOYEES AND
              SHAREHOLDERS BE LIABLE TO ANY PARTY (i) FOR ANY INDIRECT, DIRECT,
              SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING,
              BUT NOT LIMITED TO, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS
              INTERRUPTION, LOSS OF PROGRAMS OR INFORMATION, AND THE LIKE), OR
              ANY OTHER DAMAGES ARISING IN ANY WAY OUT OF THE AVAILABILITY, USE,
              RELIANCE ON, OR INABILITY TO USE THE WEBSITE OR WEBSITE CONTENT,
              EVEN IF ALL SUCH PARTIES SHALL HAVE BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES, AND REGARDLESS OF THE FORM OF ACTION,
              WHETHER IN CONTRACT, TORT, OR OTHERWISE; OR (ii) FOR ANY CLAIM
              ATTRIBUTABLE TO ERRORS, OMISSIONS, OR OTHER INACCURACIES IN, OR
              DESTRUCTIVE PROPERTIES OF THE WEBSITE OR THE WEBSITE CONTENT.
            </p>
            <p>13. EXCLUSIONS AND LIMITATIONS.</p>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
              WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
              INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN
              SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED
              BY LAW.
            </p>
            <p>14. MONITORING WEBSITE USAGE.</p>
            <p>
              You agree that Company may electronically monitor the Website and
              disclose any content, records, or electronic communication of any
              kind (i) to satisfy any legal process or request; (ii) to operate
              the Website; or (iii) to protect Company rights or the rights of
              the users, sponsors, providers, licensors, or merchants.
            </p>
            <p>15. INDEMNITY.</p>
            <p>
              You agree to defend, indemnify and hold Company, its parents,
              subsidiaries, partners, agents, affiliates, licensors, providers,
              successors and assigns and their respective officers, directors,
              employees and shareholders harmless from any and all claims,
              liabilities, costs and expenses, including reasonable attorneys
              fees, arising in any way from, in connection with or as a result
              of your use or inability to use the Website and or Website
              Content, any information provided to you by the Website, or any
              violation of these Terms and Conditions by you.
            </p>
            <p>
              YOU HEREBY AGREE TO WAIVE ALL LAWS THAT MAY LIMIT THE EFFICACY OF
              SUCH RELEASES. FOR EXAMPLE, YOU SPECIFICALLY AGREE TO WAIVE THE
              PROVISIONS OF CALIFORNIA CIVIL CODE SECTION 1542, WHICH PROVIDES;
              "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR
              DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF
              EXECUTING THE RELEASE, WHICH IS KNOWN BY HIM, MUST HAVE MATERIALLY
              AFFECTED HIS SETTLEMENT WITH THE DEBTOR."
            </p>
            <p>16. RELEASE.</p>
            <p>
              YOU HEREBY AGREE TO RELEASE, REMISE AND FOREVER DISCHARGE COMPANY
              AND ITS AFFILLIATES, PARTNERS, SERVICE PROVIDERS, CLIENTS,
              VENDORS, AND CONTRCTORS AND EACH OF THEIR RESPECTIVE AGENTS,
              DIRECTORS, OFFICERS, EMPLOYEES, AND ALL OTHER RELATED PERSONS OR
              ENTITIES FROM ANY AND ALL MANNER OF RIGHTS, CLAIMS, COMPLAINTS,
              DEMANDS, CAUSES OF ACTION, PROCEEDINGS, LIABLITIES, OBLIGATIONS,
              LEGAL FEES, COSTS, AND DISBURSEMENTS OF ANY NATURE WHATSOEVER,
              WHETHER KNOWN OR UNKNOWN, WHICH NOW OR HEREAFTER ARISE FROM,
              RELATE TO, OR ARE CONNECTED WITH YOUR USE OF THE SERVICE.
            </p>
            <p>17. DEALINGS WITH THIRD PARTIES.</p>
            <p>
              Your correspondence or business dealings with any third parties as
              a result of your use of this Website and participation in the
              Service, including, but not limited to, business dealings with
              service providers, or any other terms, conditions, warranties,
              representations associated with such dealings, are solely between
              you and such third party. You agree that Company shall not be
              responsible or liable for any loss or damage of any sort incurred
              as the result of any such dealings or as the result of the
              presence of such third party on the Website.
            </p>
            <p>18. DISPUTE RESOLUTION.</p>
            <p>
              This Agreement will be interpreted in accordance with the laws of
              the State of California, without regard to the conflicts of laws
              principles thereof. The parties agree that any and all disputes,
              claims or controversies arising out of or relating to the
              Agreement, its interpretation, performance, or breach, that are
              not resolved by informal negotiation within thirty (30) days (or
              any mutually agreed extension of time), shall be submitted to
              final and binding arbitration before a single arbitrator of the
              American Arbitration Association ("AAA") in Los Angeles,
              California. Either party may commence the arbitration process
              called for herein by submitting a written demand for arbitration
              with the AAA, and providing a copy to the other party. The
              arbitration will be conducted in accordance with the provisions of
              the AAA's Commercial Dispute Resolutions Procedures in effect at
              the time of submission of the demand for arbitration. The costs of
              arbitration plus reasonable attorneys fees (including fees for the
              value of services provided by in house Provider) shall be awarded
              to the prevailing party in such arbitration. Judgment on the award
              rendered by the arbitrator may be entered in the Superior Court of
              California, Los Angeles County, or the United States District
              Court for the Central District of California. Notwithstanding the
              foregoing, the following shall not be subject to arbitration and
              may be adjudicated only in the Superior Court of California, Los
              Angeles County, or the United States District Court for the
              Central District of California: (i) any dispute, controversy, or
              claim relating to or contesting the validity of Company's
              proprietary rights, including without limitation, trademarks,
              service marks, copyrights, or trade secrets; or, (ii) an action by
              a party for temporary, preliminary, or permanent injunctive
              relief, whether prohibitive or mandatory, or other provisional
              relief.
            </p>
            <p>
              RIGHT TO OPT OUT- If you do not wish to be bound by this
              arbitration clause, you must notify the Company in writing within
              60 days after signing this Agreement or your rejection of
              arbitration will not be effective. You must send your request to:
              Your request must include your telephone number(s) and a clear
              statement of your intent, such as "I reject the arbitration clause
              stated in the Company's Website Terms and Conditions."
            </p>
            <p>19. WAIVER AND SEVERABILITY OF TERMS.</p>
            <p>
              The failure by Company to exercise or enforce any right or
              provision of the Agreement shall not constitute a waiver of such
              right or provision. If any provision of the Agreement is found by
              a court of competent jurisdiction to be invalid, the parties
              nevertheless agree that the court should endeavor to give effect
              to the parties' intentions as reflected in the provision, and the
              other provisions of the Agreement remain in full force and effect.
            </p>
            <p>20. ENTIRE AGREEMENT.</p>
            <p>
              This Agreement constitutes the entire agreement between you and
              Company and governs your use of the Website and Service,
              superseding any prior agreements. You also may be subject to
              additional terms and conditions that may apply when you use or
              purchase other Company services, affiliated services, third party
              content or third party software.
            </p>
            <p>21. STATUTE OF LIMITATIONS.</p>
            <p>
              YOU AGREE THAT REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY,
              ANY CLAIM OR CAUSE OF ACTION ARISING OUT OF RELATED TO USE OF THE
              SERVICE OR THE AGREEMENT MUST BE FILED WITHIN ONE (1) YEAR AFTER
              SUCH CLAIM OR CAUSE OF ACTION AROSE OR BE FOREVER BARRED.
            </p>
            <p>
              PLEASE PRINT AND RETAIN A COPY OF THIS AGREEMENT FOR YOUR RECORDS.
            </p>
            <p>22. ADVERTISING DISCLOSURES</p>
            <p>
              Typical bill savings estimates are based on 20-year savings with a
              5kW solar system. These estimates assume a utility inflation rate
              of 2.2% and assume 84% percent of needs met by solar panels. The
              electricity rates used are state averages as of September of 2016
              (according to EIA). Ownership of the solar system and panels is
              also assumed. Typical savings may vary according to roof, shading,
              and other home properties.
            </p>
            <p>
              A consumers eligibility to have the costs of their solar
              installation covered in their state will depend on their tax
              liability. The Federal ITC is a 30 percent tax credit (as of 2019)
              on residential (under Section 25D) and commercial (under Section
              48) properties that is available in states across America (see
              https://www.seia.org/initiatives/solar-investment-tax-credit-itc).
              The average cost of installing solar in terms of labor is around
              10% of system costs* and can vary by state, project scope, and
              installation company. In most cases, a consumer will have more
              than enough credit to cover the cost of their solar installation
              provided they have enough tax liability to take advantage of the
              ITC.
            </p>
            <p>
              *A typical or average size of a solar system is about 5kW (about
              15-25 panels) and typically costs around $30,000. This amount can
              vary tremendously by state and the project scope. The Lawrence
              Berkley National Laboratory (LBNL) estimates that the average cost
              of labor for a solar projevt is around $0.59/W, which is generally
              around 10% of the total cost to install a solar system (assuming a
              solar system and installation cost of $6.19/W). This means that
              the average cost to install a typical sized solar system should be
              around $3,000. These estimates are subject to change as
              technological breakthroughs are constantly bringing the cost of
              solar lower and lower.
            </p>
            <p>
              A consumers eligibility to get paid to install solar will also
              depend on rebates and incentives available in their state, their
              utility company, and tax liability. Eligible users can receive
              payments in the form of $/watt of solar installed (depending on
              their utility provider), in the form of a monetary payment for
              projects that are within a certain scope (i.e., Maryland will pay
              you $1,000 it you install a solar system smaller than 20 kW at
              your primary residence and use a solar installer with a NABCEP
              certification), in the form of monetary compensation, or
              otherwise, from utility providers that offer net metering
              programs, or in the form of a credit on your income taxes
              (provided you have enough tax liability to take advantage). All
              payments are subject to terms, eligibility, and availability and
              can change over time.
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
