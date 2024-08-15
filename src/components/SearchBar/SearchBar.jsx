import styles from './SearchBar.module.css'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Search field can not be empty');


export const SearchBar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('')
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()){
        return <Toaster />
    }
    onSubmit(searchQuery)
    setSearchQuery('')
  }
    return (
        <header className={styles.card}>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
          <button onClick={notify} type="submit">Search</button>
          <Toaster />
            </form>;
        </header>
    );
};
