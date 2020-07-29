import React, { Fragment } from 'react'
import css from './countries.module.css';
import { formatNumber } from '../../Helpers/FormatHelper';

export default function Country({ country }) {
    const { name, population, } = country
    return (
        <Fragment>
            <div className={`${css.border} ${css.country}`}>
                <div><img className={css.flag} src={country.flag} alt={country.name} /></div>
                <div>
                    <p className={css.name}>{name}</p>
                    <p>População: {formatNumber(population)}</p>
                </div>
            </div>
        </Fragment>
    )
}
