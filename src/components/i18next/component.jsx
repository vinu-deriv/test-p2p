import React from 'react';
import { Trans } from 'react-i18next';

const Localize = ({ i18n_default_text, values, components, options, i18n }) => (
    <Trans i18n={i18n} defaults={i18n_default_text} values={values} components={components} tOptions={options} />
);

Localize.displayName = 'Localize';

// Trans needs to have the i18n instance in scope
// eslint-disable-next-line react/display-name
const withI18n = i18n => props => <Localize i18n={i18n} {...props} />;

withI18n.displayName = 'withI18n';


export default withI18n;
