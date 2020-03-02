import React, { useState, useEffect } from "react";
import { settings } from 'carbon-components';
import { bugs } from '../../../../package.json'
import { Link } from 'carbon-components-react';

const { prefix } = settings;

function Empty () {
    return (
        <div className={`${prefix}--popup-empty`}>
            <h2 className={`${prefix}--popup-empty__heading`}>
                Carbon not found
            </h2>
            <p className={`${prefix}--popup-empty__copy`}>
                We could not find Carbon being used on this page. If you believe this to be in error please <Link href={bugs.url} target="_blank">submit an issue</Link>.
            </p>
        </div>
    );
}

export { Empty };