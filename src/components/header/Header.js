import React from 'react'
import { formatNumber } from '../../Helpers/FormatHelper';
import css from './header.module.css';
export default function Header(props) {
    const handleChange = (event) => {
        props.onChangeFilter(event.target.value);
    }

    const { filter, countryCount, population } = props;
    return (
        <div className={css.flexRow}>
            <input
                placeholder='Filtro'
                style={{ minWidth: '300px' }}
                type="text"
                value={filter}
                onChange={handleChange} />
            <span className={css.countries}> Países: <strong>{countryCount}</strong></span>
            <span className={css.population}> | População: <strong>{formatNumber(population)}</strong></span>
        </div>
    )
}
