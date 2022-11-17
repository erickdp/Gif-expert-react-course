import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => setInputValue(target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue);
        console.log(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                value={inputValue}
                placeholder="Ingresa un categoria"
                type="text"
                onChange={onInputChange}
            />
        </form>
    )
}
