## Planning Overview  
We are going to use Agile SW development process. The above is the outline of our planning.  

---

##### Development Process  
For any software process, there are four stages:  
1. Requirement Specification  
2. Design and Development  
3. Testing and Validation  
4. Maintain and Evolution  

Since we use __Agile__ as our SW development process, it means that during our development, __Requirement Specification, Design and Development, and Testing and Validation are interleaved__ (Occur simultaneously or in overlapping cycles, rather than being sequential).  
Through the continuous interleaving of processes and the short term of new version releases, iterative improvements are made based on __user feedback__, thereby shaping the process of __Maintain and Evolution__.  

---

***Special Note***: The market characteristics of __TTM__ indicate that the requirements for our product, __the Exchange Rate Website__, are constantly changing.  
Therefore, at the early stages of the project, the user needs analysis formed through market research will also be adjusted and iterated upon __based on user feedback__ received after each version release.  
Moving forward, the documentation of the Requirement Specification will follow the Agile principle of minimal documentation, with updates made on a per-iteration basis.  

---

##### Members (Roles & Responsiblitis & Portion)  
As a small-scale group who only have 5 people, our division of labor is simple. As follow,  

| POSITION             | NUMBER | NAME           |  
|----------------------|--------|----------------|  
| PO                   | 1      | Evelyn         |  
| Tech Lead            | 1      | Kurisu         |  
| Front-end Designer   | 1      | John Ling      |  
| JavaScript Developer | 1      | Xinyuan Cheng  |  
| QA                   | 1      | Tingshu        |  

***Note***: Since our existing database for exchange rate conversion is limited, the back-end implementation is called through an off-the-shelf API and does not require a back-end engineer.  

---

***Role***  
1. __PO(Product Owner)__:  
   - Responsible for communicating with users, gathering requirements, and writing user stories.  
   - Prioritizes and creates the product backlog.  
   - Ensures the requirements are clear and aligned with the team.  

2. __Tech Lead__:  
   - Ensures the architecture is well-organized into modular, maintainable blocks.  
   - Guides the implementation of technical solutions, ensuring they align with the product's goals and scalability.  

3. __Front-end Designer__:  
   - Structures the web page using HTML (e.g., creating headings, paragraphs, and layouts).  
   - Styles the web page using CSS to ensure visual appeal (e.g., applying colors, fonts, margins, and responsive design).  

4. __JavaScript Developer__:  
   - Implements JavaScript to handle dynamic interactivity on the web page (e.g., form validations, animations, interactive elements).  
   - Integrates APIs to fetch and display data dynamically.  

5. __QA(Quality Assurance)__:  
   - Utilizes automated testing tools to enhance efficiency.  
   - Provides feedback to ensure the product meets acceptance criteria after each iteration.  

---

##### Schedule  
Our product development schedule is iterable:  
**User requirement specification → Design and development → Testing and validation → RELEASE → New user requirement → Design and development → Testing and validation → RELEASE**  

***To be specific,***  

1. In __the first and the second week__, we did the user requirement specification for the first version of our product which is Initial requirement specification.  
   ###### Initial Requirement Specification  
   1. __Core Goal__: Develop a multifunctional, user-friendly currency conversion website.  
   2. __User Stories__:  
      - We collected and sorted out the following survey results from possible user groups and markets (most popular):  
        - I want the webpage to directly __display common currency conversions__, so that I can quickly and easily view the corresponding exchange rates without needing multiple searches or comparisons.  
        - I want to select countries either by __typing in the country names or using a dropdown menu__, so that I can conveniently find the country I want to query.  
        - I want the platform to __support multiple languages__, so that it accommodates non-English-speaking users and promotes the website globally.  
        - I want the ability to __query historical exchange rates__, so that I can compare past rates with current ones to make informed decisions.  
   3. ***Note***:  
      Considering the small scale of our team and software, the relevant stakeholders we mentioned here are solely our users. We mainly focus on responding quickly to user feedback rather than dealing with complex stakeholder coordination.  

   Then, __PO (Evelyn)__ abstracted users' requirements as follow:  
   4. __Product Backlog__  

   | Task                                           | Time Cost | Importance |  
   |------------------------------------------------|-----------|------------|  
   | Currency conversion                            | ★★★★★     | ★★★★       |  
   | Display common currency conversions            | ★★★       | ★          |  
   | Typing in the country names                    | ★         | ★★★        |  
   | Support multiple languages                     | ★★★       | ★★★        |  
   | Query historical exchange rates                | ★★★       | ★★★        |  

   __IN CONCLUSION__, Our planning prioritize implementing the __basic currency conversion and historical exchange rate visualization features__ as the primary goal.  

   5. __Non-functional Requirements__  
      1. **Performance**: Conversion results must be displayed within 0.1 second after user input.  
      2. **Reliability**: Ensure 99.9% uptime for the conversion feature, And automatic fallback mechanism in case of API failure.  
      3. **Accuracy**: Data presented must be consistent with verified historical sources and Charts must dynamically adjust to different time frames selected by users.  
      4. **Security**: Protect user data input (e.g., selected countries or filters) from unauthorized access.  

   6. __Constraints__:  
      - We need to improve our code development efficiency and achieve the most comprehensive functionality.  
      - Our team consists of only 5 people, and we lack surplus startup funding. We might need to rely on donations, so it is essential to limit the usage of both funds and time.  
      ---  
   - The requirement specification spent __3 days__.  

2. __Design and development__:  
   - First of all, the __Front-end designer (John Ling)__ designed page. - it was expected to take __1 day__.  
   - Secondly, __Tech Lead(Kurisu)__ design the system structure of the Website:  
      - Design the struct of system - Decoupling front-end and back-end → Because this Website does not need database and complex logic handle, and it only needs fetch the correct API and handle the basic logic. Thus, we only uses the front-end to approach a faster development speed and focus on the user interaction to give users better experiences.  
      - The framework and programming language → React and JavaScript.  
      - Design the file types and folders of the Website(codes).  
      - The details of each files and folders → includes functions and modules of each files.  
      - The naming rules of values, functions and classes.  
      - The system structure design part was expected to take __1 day__.  
   ( __Note:__ Due to the small team size, the page design implementation will be completed by one person)  
   - Then, The basic functions were implemented by __javascript developer(Xinyuan Cheng).__ :  
      - Currency conversion  
      - Display common currency conversions  
      - Typing in the country names  
      - Support multiple languages  
      - Query historical exchange rates  
   - It spent __4 days__ in total.  
   - The testing is done by our __QA(Tingshu)__:  
      - Basic Currency Conversion and Historical Exchange Rate Visualization Features  
        - Perform functional testing, edge-case testing, and API integration testing  
      - Usability Enhancement Features  
        - Focus on usability testing to ensure a smooth user experience.  
      - Integration of Large Language Models  
        - Conduct API testing, stress testing, and ensure that the model integrates seamlessly with the system.  
   - It spent __2 days__ to test the Website.  
   - The result of testing was fine. The Website fit the functions that users need and did not have any bug.  
   - After testing, we have launched the first version of Website to get the first place in the market.  
   - After getting user feedback, Our group will be flexibility to change our programs to actively respond to market change.  

3. In __the second week__ and __the third week__:  
   - After we launched the first version of our Website, we got some feedbacks from our users → which involved the __requirements change__  
   - Thus, __PO (Evelyn)__ collected the following user stories:  
     - I want the webpage becomes easier to type the currency name, such as type the part of the currency name, it will display some possible fitable currency names.  
   - __PO (Evelyn)__ did the requirement specification, which has the following requirement:  
     - __Currency Selection__  
   - This requirement specification was spent __1 day__.  

   - Then, the page __Front-end designer (John Ling)__ update the design of Website, and the __Tech Lead(Kurisu)__ update the design of design of the system structure.  
     - Add the new features to the page and makes it keeps beautiful.  
     - Add the details of new files → functions.  
   - This process spent __1 day__  

   - Then __javascript developer(Xinyuan Cheng).__ implemented the requirements follow the system structure. - it spent __1 day__.  
     - Add the new features → implemented the __Currency Selection__.  
     - Make sure the reliability of the code.  
   - Before launching the second version, we did testing by __QA(Tingshu)__:  
     - Testing the new feature whether fit users's required.  
     - Testing the reliability of the Website.  
   - __QA(Tingshu)__ found this code was not reliability because the code was too complex and huge → __Tech Lead(Kurisu)__ decided to refactor the code. - it was spent __1 day__.  
   - __Tech Lead(Kurisu)__ update the design of the Website to make sure the new system structure will be scalability and reliability. -it was spent __2 days__.  
   - Then __javascript developer(Xinyuan Cheng).__ refactored the code. -it was spent __3 days__.  
   - After refactoring, __QA(Tingshu)__ did testing again. The result was fine. -it was spent __2 days__.  
   - Then, we launched the second version of our Website.  

4. In __the fourth__ week:  
   - We got some feedbacks from our users → which involved the __requirements change__  
   - Thus, __PO (Evelyn)__ collected the following user stories:  
     - I want the webpage can display the country flag of each currency.  
   - __PO (Evelyn)__ did the requirement specification, which has the following requirement:  
     - __Display the country flag__  
   - This requirement specification was spent __0.5 day__.  

   - Then, the page __Front-end designer (John Ling)__ update the design of Website, and the __Tech Lead(Kurisu)__ update the design of design of the system structure.  
     - Add the new features to the page and makes it keeps beautiful.  
     - Add the details of new files → functions.  
   - This process spent __0.5 day__  

   - Then __javascript developer(Xinyuan Cheng).__ implemented the requirements follow the system structure. - it spent __1 day__.  
     - Add the new features → implemented the __Display the country flag__.  
     - Make sure the reliability of the code.  
   - Before launching the second version, we did testing by __QA(Tingshu)__:  
     - Testing the new feature whether fit users's required.  
     - Testing the reliability of the Website.  
   - The result of testing was fine. - it was spent __1 day__.  
   - Then, we launched the Third version of our Website.  

   - We got feedback from user that history exchange rate function was wrong in some situations.  
   - __Tech Lead(Kurisu)__ and __javascript developer(Xinyuan Cheng).__ quickly analysised the history exchange rate handle logic.  
     - Found the problem of logic.  
     - Fix the handle logic.  
     - Make sure this quick-update does not influence any other functions.  
   - This process spent __1 day__.  
   - Then we did testing by __QA(Tingshu)__ to make sure that: -it spent __2 days__.  
     - The System reliability.  
     - Whether the functions are fit users' required.  
     - The functions handle logic are correct.  
   - Then, we launched the third version of Website.  

   - We got feedbacks from phone users that they need Website fits their devices.  
   - Thus, __PO (Evelyn)__ collected the following user stories:  
     - I want the webpage fits my several devices.  
   - __PO (Evelyn)__ did the requirement specification, which has the following requirement:  
     - __Responsive design__  
   - This requirement specification was spent __0.5 day__.  

   - Then, the page __Front-end designer (John Ling)__ update the design of Website and wrote the CSS code.  
     - Add the new features to the page and makes it keeps beautiful.  
     - Responsive design  
   - This process spent __2.5 days__  
   - Then we did testing by __QA(Tingshu)__ to make sure that: -it spent __1 days__.  
     - The System reliability.  
     - Whether the functions are fit users' required → webpage fits several devices.  
   - The result was fine.  
   - Then, we launched the fourth version of Website.  

---

| **Phase**             | **Task**                                      | **Responsible Person** | **Duration** | **Start Date** | **End Date**   |  
|-----------------------|-----------------------------------------------|-------------------------|--------------|----------------|----------------|  
| Project Planning      | Requirement Specification                     | Evelyn                  | 3 days       | Day 1          |                |  
| Design & Development  | Page design                                   | John Ling               | 1 day        | Day 4          |                |  
| Design & Development  | System Structure Design                       | Kurisu                  | 1 days       | Day 4          |                |  
| Design & Development  | Basic and key functions implement             | Xinyuan Cheng           | 4 days       | Day 5          |                |  
| Testing & Release     | Testing                                       | Tingshu                 | 2 days       | Day 9          |                |  
| Requirement           | Requirement Specification(update)             | Evelyn                  | 1 day        | Day 11         |                |  
| Design & Development  | Page design(update)                           | John Ling               | 1 day        | Day 12         |                |  
| Design & Development  | System Structure Design(update)               | Kurisu                  | 1 day        | Day 13         |                |  
| Design & Development  | New features implement                        | Xinyuan Cheng           | 1 day        | Day 14         |                |  
| Testing & Release     | Testing                                       | Tingshu                 | 1 day        | Day 15         |                |  
| Refactoring           | System Structure Design(update)               | Kurisu                  | 2 days       | Day 16         |                |  
| Refactoring           | Refactoring                                   | Xinyuan Cheng           | 3 days       | Day 18         |                |  
| Testing & Release     | Testing                                       | Tingshu                 | 2 days       | Day 21         |                |  
| Requirement           | Requirement Specification(update)             | Evelyn                  | 0.5 day      | Day 23         |                |  
| Design & Development  | Page design(update)                           | John Ling               | 0.5 day      | Day 23         |                |  
| Design & Development  | System Structure Design(update)               | Kurisu                  | 1 day        | Day 24         |                |  
| Design & Development  | New features implement                        | Xinyuan Cheng           | 1 day        | Day 25         |                |  
| Fix the bug           | Fix the logic problem                         | Kurisu & Xinyuan Cheng  | 1 day        | Day 26         |                |  
| Testing & Release     | Testing                                       | Xinyuan Cheng           | 1 day        | Day 27         |                |  
| Requirement           | Requirement Specification(update)             | Evelyn                  | 0.5 day      | Day 27         |                |  
| Design & Development  | Page design(update) and CSS implement         | John Ling               | 2.5 days     | Day 27         |                |  
| Testing & Release     | Testing                                       | Tingshu                 | 1 day        | Day 29         |                |  

__Note:__ Throughout the project, the Tech Leader(***Kurisu***) plays a crucial role in providing guidance and coordination to ensure smooth collaboration and successful execution.  

---

##### Algorithm  
- **B = ( p * A ) / ( α * β )**  
  __A__ : The currency amount to convert  
  __B__ : Converted currency amount  
  __p__ : Exchange rate  
  __α__ : The value is 0.25  
  __β__ : The value is 4  
- *(just a joke, α * β = 1, so it is nothing. You know who invented it.)*  

---

##### Current Status of the Software  
Our product currently is at the stage of Integrating the Large Language Models, which means we have already done the first three iterations and willing to Expand new functions.  

- **We have done all of the key and basic functions of our Website**  
  - Currency conversion  
  - Display common currency conversions  
  - Typing in the country names  
  - Support multiple languages  
  - Query historical exchange rates  
  - Currency selection  
  - Display the Country flag  
  - Responsive design  
- **And we also provide a maintainability, dependability and security, efficiency and Acceptability software.**  

---

##### Future Plan  
In the future, we hope to offer __customized features tailored to the needs of different users__  
For example, for those who exchange currency for __travel purposes__, their login page could provide relevant travel guides, hotel and attraction booking options, etc.  
For general users __interested in finance__, we could offer stock trend consultations and informative content related to exchange rates.  

Additionally, we aim to __expand the webpage into desktop applications (such as floating windows)__ to make currency inquiries even more convenient.

Thus, we have: 
1. **Customized Features**:  
   - For travelers: Travel guides, hotel/attraction bookings.  
   - For finance enthusiasts: Stock trend consultations, exchange rate insights.  

2. **Expand to Desktop Applications**:  
   - Floating windows for convenient currency inquiries. 

---

### Declaration of Third-Party Resources

The following external resources/packages are used in this project:

#### 1. **React Ecosystem**
- **React** (`react`)  
  _Purpose_: Core library for building user interfaces  
  _Source_: [https://react.dev](https://react.dev)  
  _License_: MIT License

- **React-DOM** (`react-dom`)  
  _Purpose_: DOM rendering for React  
  _Source_: [https://react.dev](https://react.dev)  
  _License_: MIT License

#### 2. **Chart Libraries**
- **Chart.js** (`chart.js`)  
  _Purpose_: Data visualization foundation  
  _Source_: [https://www.chartjs.org](https://www.chartjs.org)  
  _License_: MIT License

- **react-chartjs-2**  
  _Purpose_: React wrapper for Chart.js  
  _Source_: [https://react-chartjs-2.js.org](https://react-chartjs-2.js.org)  
  _License_: MIT License

#### 3. **APIs**
- **ExchangeRate-API**  
  _Purpose_: Real-time/historical currency exchange rates  
  _Endpoint_: `https://v6.exchangerate-api.com/v6/{API_KEY}/`  
  _Source_: [https://www.exchangerate-api.com](https://www.exchangerate-api.com)  
  _Access_: Free tier with API key `70cbad844562588cd1b8e54d`

- **FlagsAPI**  
  _Purpose_: Country flag images  
  _Endpoint_: `https://flagsapi.com/{CODE}/flat/48.png`  
  _Source_: [https://flagsapi.com](https://flagsapi.com)  
  _License_: Public Domain

#### 4. **Development Environment**
- **Node.js**  
  _Purpose_: JavaScript runtime  
  _Source_: [https://nodejs.org](https://nodejs.org)  
  _License_: MIT License

- **npm**  
  _Purpose_: Package management  
  _Source_: [https://www.npmjs.com](https://www.npmjs.com)  
  _License_: Artistic License 2.0

#### 5. **AI**
  _Purpose_: English editing, Markdown formatting optimization.  
  _Source_: [https://www.deepseek.com/](https://www.deepseek.com/) 

---

### Original Code
All code in the following files is developed by our team:  
- `index.js`  
- `App.js`  
- `styles.css`  
- `translations.js`  

This includes:  
- UI components implementation  
- State management logic  
- Multilingual support system  
- CSS styling and responsive design  
- API integration logic  
- Historical data processing  
