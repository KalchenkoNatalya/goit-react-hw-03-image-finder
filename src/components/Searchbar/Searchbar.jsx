import styles from './Searchbar.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    valueInput: '',
  };

  handleInputChange = event => {
    this.setState({ valueInput: event.target.value.toLowerCase() });
    console.log(this.state.valueInput);
  };

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.valueInput.trim() === '') {
      alert('Please, enter your query!');
      return;
    }

    this.props.onSubmit(this.state.valueInput);
    this.setState({ valueInput: '' });
    event.currentTarget.reset();
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
