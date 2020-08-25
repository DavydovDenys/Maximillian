import React, {Component} from "react";

/*Функция для создания своего сообщения об ошибке*/
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  /*Автоматически вызывается при возникновении ошибки
  * errorMessage - можно записать всое сообщение */
  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if (this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }

}

export default ErrorBoundary;