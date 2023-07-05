# itemsComunication_React

This is an overview of a project that involves creating a form with various fields, implementing communication between different components in React, and displaying the data received from the form. [Try the app](https://itemscomunication.netlify.app/)

[See repository](https://github.com/Gromarant/itemsComunication_React)

The project requires the following components:

1. Head: This component displays the email of the user registered through the form.

2. Form: This component consists of a form and a submit button. It is responsible for receiving user data.

3. Card: This component displays the data received from the form.
The communication between the components, specifically between the Form and Card components, needs to be implemented in Sibling mode.

<br>
<br>

### Implementation:

<br>

- Receiving the user data from the Form component.


- Rendering the received data in an appropriate format.


### Communication between Components

The project requires communication between the Form and Card components in Sibling mode. This means that the components are at the same level in the component hierarchy, and they need to exchange data without involving a parent component. The communication between the components should be:

* When the user submits the form in the Form component, it should send the entered data to the Card component.

* The Card component should receive the data from the Form component and render it accordingly.

* To establish the communication between the Form and Card components in Sibling mode, you can use one of the following methods:

* Props: Pass the data from the Form component to the Card component using props.

* Context API: Use the Context API to create a shared context between the Form and Card components. The Form component can update the context with the entered data, and the Card component can read the data from the context.

<br>
<br>


## License

This project is distributed under the **MIT License**. You can refer to the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for more details.

<br>

### Next steps and deployment on Netlify:

For the next steps, the following improvements could be considered:

- Implement unit and integration tests to ensure code quality. 
- Implement data persistence using a database or local storage.
- Improve the user interface with more attractive styles and layouts responsive.

<br>
<br>

---
[<img align="left"  height="64" src="./src/assets/logo2023.png">](https://www.gromarant.com/)

<br>

[© 2023 Mariangelica Rodriguez.](https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/) All rights reserved.

<br>

---