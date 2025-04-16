
# About the Mini-Project

### Start
Enter `npm start` in the terminal


### For the "src" folder: It is the main folder for all the code
1. App.js include the main code of the website.
2. styles.css includes the layout style of websit.
3. translation.js include the language translation mode.
4. index.js structs the React.

### Functions
1. Exchange rate function
2. Allowed user choose past exchange rate
(Because the API does not provide the past data(should pay for it), the exchange rate are the same)
1. Display the some of the most commonly used currency exchange rates
2. Language translation
3. Display the historical exchange rate line chart of user selected.
(Because the API does not provide the past data(should pay for it), the historical exchange rate line chart of mine is always horizontal)


---

## Purpose

Our product primarily targets the __2C__ market, aiming to create a __user-friendly currency conversion website that supports multiple languages and offers comprehensive functionality__.

* In the ***initial phase***, we emphasize the practicality of functions, achieving the following:
  1. Users can generate corresponding exchange rate values by __selecting a country and entering an amount__.
  2. Users can visualize __historical exchange rate__ data through clear and intuitive charts, aiding in analyzing future currency purchases.
  3. The main page displays exchange rates for __common countries__, enhancing convenience.
  4. __Multilingual support__ expands the usability range.  

* In the later stages, we plan to develop __extended features__, such as __integrating LLM to analyze data__ and __provide various solutions__ based on users' currency purchase needs, helping them make informed decisions.


|Target user and market| SW development process   |
|------------|------------|
| 2C market and Groups of people who need currency conversion [^1]|  Agile process 

---

### Reason to choose Agile:
>The strategic position is concerned with the external environment,the strategic resources of a firm and capability, Company goal and culture. [^2]

We do the following analyze to come up with the final SW development process:
1. The choice of the SW development direction should be based on the ***zone of Strategic Fit according to market***. Our product is designed for the __2C market__ and is introduced as a __generic product for general users__. This means we need to focus on the __rapid changes and intense competition__ in this market. Therefore, compared to emphasizing high quality, we prioritize Time-to-Market. And based on the zone of Strategic Fit , __TTM should choose Agile direction.__
***Based on Agile direction, we choose Agile process at the beginning of the development.***
* *To declare a misunderstanding of our web*:  
  * Though it is a financial website, Our main goal is to __increase the convenience of general user__, Rather than use in the places requiring strict and precise financial calculations include banks, insurance companies, and more. So We place greater emphasis on feedback from general users. 
  * Our goal is to __continually adapt the product to meet the needs of our target customer base, ensuring responsiveness to market changes__, rather than focusing on data precision or high quality.
2. ***For our company***, as a start-up company which has small scale: 
**Agile** eliminates __cumbersome documentation__, making it easier for us as a small-scale companies to communicate directly during project development, thereby __improving work efficiency__. Moreover, direct collaboration and communication help us to __foster company culture and enhance team cohesion.__
3. ***For our product***, our currency exchange website emphasizes __integrating multiple functions__ to enhance user convenience. Therefore, our main point is to __continuously deliver the product to users, to gather feedback, and to make updates and iterations__. As a result, we don’t need to have clear and specific requirements during the initial phase of the website development.
Additionally, the currency exchange data provided by the website serves as a reference only. It is not intended to be a major decision-making resource for financial investments. Hence, detailed documentation for policy regulations and rigorous testing to meet security-related requirements are not necessary. 

__So, Agile is better suited based on these characteristics.__


[^1]: International travelers, students and workers abroad, and cross-border e-commerce shoppers etc.
[^2]: S. -K. Kim, "Strategic Decision Spectrum for Software Engineering," 2023 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), Singapore, Singapore, 2023, pp. 1708-1712, doi: 10.1109/IEEM58616.2023.10406807.

---

## Planning Overview 
We are going to use Agile SW development process. The above is the outline of our planning.

##### Development process
For any software process, there are four stages:
1. Requirement Specification
2. Design and Development
3. Testing and Validation
4. Maintain and Evolution

Since we use __Agile__ as our SW development process, it means that during our development, __Requirement Specification, Design and Development, and Testing and Validation are interleaved__ (Occur simultaneously or in overlapping cycles, rather than being sequential). 
Through the continuous interleaving of processes and the short term of new version releases, iterative improvements are made based on __user feedback__, thereby shaping the process of __Maintain and Evolution__.

---

***Special Note***: The market characteristics of __TTM__ indicate that the requirements for our product,__the Exchange Rate Website__, are constantly changing. 
Therefore, at the early stages of the project, the user needs analysis formed through market research will also be adjusted and iterated upon __based on user feedback__ received after each version release. 
Moving forward, the documentation of the Requirement Specification will follow the Agile principle of minimal documentation, with updates made on a per-iteration basis.

---
###### Initial requirement specification
1. __Core Goal__: Develop a multifunctional, user-friendly currency conversion website.
2. __User Stories__:
   * As a website user,
     * I want the webpage to directly __display common currency conversions__, so that I can quickly and easily view the corresponding exchange rates without needing multiple searches or comparisons.
     * I want to select countries either by __typing in the country names or using a dropdown menu__, so that I can conveniently find the country I want to query.
     * I want the platform to __support multiple languages__, so that it accommodates non-English-speaking users and promotes the website globally.
     * I want to see __corresponding country flags__ after selecting the countries, so that I can identify the country even if I don’t remember the country name.
     * I want the ability to __query historical exchange rates__, so that I can compare past rates with current ones to make informed decisions.
     * I want __visualized tables reflecting historical exchange rate trends__, so that I can more conveniently analyze trends.
     * I want the website to have an __audio-assistive__ feature, so that I can use the website for queries even if I cannot see.
     * I want the website to have an __aesthetically pleasing interface__, so that I am drawn to its simple layout and feel encouraged to use it.
     * I want the webpage to __assist me in decision-making__, so that it provides more comprehensive insights for consideration.
     * I want the webpage to offer __multiple background color options__, so that I can personalize my own page to suit my preferences.
*  ***Note***: 
  Considering the small scale of our team and software, the relevant stakeholders we mentioned here are solely our users. We mainly focus on responding quickly to user feedback rather than dealing with complex stakeholder coordination.

3. __Product Backlog__
   
| Task                                           | Importance|
|------------------------------------------------|---------------------|
| Display common currency conversions            | ★★★               |
| Typing in the country names or using a dropdown menu | ★★★         |
| Support multiple languages                     | ★★                |
| Corresponding country flags                    | ★★                |
| Query historical exchange rates                | ★★★               |
| Visualized tables reflecting historical exchange rate trends | ★★★       |
| Audio-assistive                                | ★★                |
| Aesthetically pleasing interface               | ★                 |
| Assist me in decision-making                   | ★                 |
| Multiple background color options              | ★                 |

__IN CONCLUSION__, Our planning prioritize implementing the __basic currency conversion and historical exchange rate visualization features__ as the primary goal. __Usability enhancement features__ will be included in the second iteration, __aesthetic__ considerations in the third iteration, and the __integration of large language models__ will be considered last.

4. __Non-functional Requirements__
   1. Performance:Conversion results must be displayed within 0.1 second after user input.
   2. Reliability: Ensure 99.9% uptime for the conversion feature, And automatic fallback mechanism in case of API failure.
   3. Accuracy: Data presented must be consistent with verified historical sources and Charts must dynamically adjust to different time frames selected by users.
   4. Security: Protect user data input (e.g., selected countries or filters) from unauthorized access.
5. __Constraints__:
   * We need to improve our code development efficiency and achieve the most comprehensive functionality.
   * Our team consists of only 5 people, and we lack surplus startup funding. We might need to rely on donations, so it is essential to limit the usage of both funds and time.
  ---
  
   
##### Members(Roles & Responsiblitis & Portion)
As a small-scale group who only have 5 people, our division of labor is simple. As follow,
| POSITION | NUMBER | NAME |
|----------|--------|------|
|    PO    |  1     |Evelyn|
|Tech Lead |1       |Kurisu| 
|Front-end Designer| 1 | John Ling|
|JavaScript Developer|1 |Xinyuan Cheng|
|QA        |1       |Tingshu| 

***Note***: Since our existing database for exchange rate conversion is limited, the back-end implementation is called through an off-the-shelf api and does not require a back-end engineer.

***Role***
1. __PO(Product Owner)__:
   * Responsible for communicating with users, gathering requirements, and writing user stories.
   * Prioritizes and creates the product backlog.
   * Ensures the requirements are clear and aligned with the team.
2. __Tech Lead__:
   * Ensures the architecture is well-organized into modular, maintainable blocks.
   * Guides the implementation of technical solutions, ensuring they align with the product's goals and scalability.
3. __Front-end Designer__: 
   * Structures the web page using HTML (e.g., creating headings, paragraphs, and layouts).
   * Styles the web page using CSS to ensure visual appeal (e.g., applying colors, fonts, margins, and responsive design).
4. __JavaScript Developer__:
   * Implements JavaScript to handle dynamic interactivity on the web page (e.g., form validations, animations, interactive elements).
   * Integrates APIs to fetch and display data dynamically.
5. __QA(Quality Assurance)__:
   * Utilizes automated testing tools to enhance efficiency.
   * Provides feedback to ensure the product meets acceptance criteria after each iteration.
----
##### Schedule
Our product development schedule is iterable :
User requirement specification--> Design and development --> Testing and validation --> RELEASE --> New user requirement --> Design and development --> Testing and validation --> RELEASE


***To be specific,***
1. At the beginning of the project, we hoped to build an exchange rate conversion website that could provide convenience for users.
2. After the overall goal is defined, the __specification of user requirements__ is carried out by __PO (Evelyn)__ which takes __1 week__. PO writes the user story and creates the product backlog. Then, our product come into the design and development stage.
3. __Design and development__:
   * First of all, the __Front-end designer (John Ling)__ built the HTML framework, and used CSS to beautify the style and page design. - it is expected to take __3 days__.
  ( __Note:__ Due to the small team size, the page design and static page code implementation will be completed by one person)
    * Then, The dynamic interaction is implemented by __javascript developer(Xinyuan Cheng).__ In order to reduce the TTM, Xinyuan Cheng's task is divided into the following parts(According to the importance in __product backlog__):
      * Achieve Basic currency conversion and historical exchange rate visualization features -5 days
      * Usability enhancement features - 2 days
      * Webpage Aesthetic - 2 days
      * Integration of large language models -3 days
    * After each of the MVP have done , Our product would do testing and then launch into to market to get feedback from the users.
  * The testing is done by our __QA(Tingshu)__:
    * Basic Currency Conversion and Historical Exchange Rate Visualization Features => __Testing Duration: 1.5 days__
      * Perform functional testing, edge-case testing, and API integration testing
    * Usability Enhancement Features => __Testing Duration: 1 day__
      * Focus on usability testing to ensure a smooth user experience.
    * Webpage Aesthetics => __Testing Duration: 0.5 days__
      * Test for cross-browser compatibility and responsiveness across devices.
    * Integration of Large Language Models => __Testing Duration: 2 days__
      * Conduct API testing, stress testing, and ensure that the model integrates seamlessly with the system.
  * After getting user feedback, Our group will be flexibility to change our programs to actively respond to market change.

| **Phase**             | **Task**                                      | **Responsible Person** | **Duration** | **Start Date** | **End Date**   |
|-----------------------|-----------------------------------------------|-------------------------|--------------|----------------|----------------|
| Project Planning      | Requirement Specification           | Evelyn                  | 1 week       | Day 1          | Day 7          |
| Design & Development  | Static page design and implementation         | John Ling               | 3 days       | Day 8          | Day 10         |
| Design & Development  | Basic currency conversion & historical rates  | Xinyuan Cheng           | 5 days       | Day 11         | Day 15         |
| Testing & Release     | Testing basic currency conversion and release | Tingshu                 | 1.5 days     | Day 16         | Day 18       |
| Design & Development  | Usability enhancement features                | Xinyuan Cheng           | 2 days       | Day 19         | Day 20         |
| Testing & Release     | Testing usability enhancement and release     | Tingshu                 | 1 day        | Day 21         | Day 21       |
| Design & Development  | Webpage aesthetics                            | Xinyuan Cheng           | 2 days       | Day 22         | Day 23         |
| Testing & Release     | Testing webpage aesthetics and release        | Tingshu                 | 0.5 days     | Day 24         | Day 24         |
| Design & Development  | Integration of large language models          | Xinyuan Cheng           | 3 days       | Day 25         | Day 27         |
| Testing & Release     | Testing large language model integration      | Tingshu                 | 2 days       | Day 28         | Day 29         |

__Note:__ Throughout the project, the Tech Leader(***Kurisu***) plays a crucial role in providing guidance and coordination to ensure smooth collaboration and successful execution.

---
##### Algorithm
---

##### Current status of the software
Our product currently is at the stage of Integrating the Large Language Models,which means we have already done the first three iterations and willing to Expand new functions.

___

##### Future plan
In the future, we hope to offer __customized features tailored to the needs of different users__
For example, for those who exchange currency for __travel purposes__, their login page could provide relevant travel guides, hotel and attraction booking options, etc.  
For general users __interested in finance__, we could offer stock trend consultations and informative content related to exchange rates.  

Additionally, we aim to __expand the webpage into desktop applications (such as floating windows)__ to make currency inquiries even more convenient.  





