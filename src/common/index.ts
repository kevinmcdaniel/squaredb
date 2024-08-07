import type { Response, Request } from 'express';
//import { config } from '../config';
const { EMPLOYEE_EMAIL_DOMAIN } = require('../constant/index');
// import { logger } from '../app';
import { QueryData, ResponseWithMessageProps } from './types';
import { ulid } from 'ulid';
import _ from 'lodash';

// export const getStoreId = (): string => {
//     const storeUrl = process.env.BIGCOMMERCE_STORE_BASE_URL as string;
//     const storeId = storeUrl?.split(config?.storeIdSplitChar)?.[config?.storeIdSplitCount] as string;
//     // logger.verbose('Store ID: ', storeId);
//     return storeId;
// };

export const replaceStr = (str: string, search: string, replace: string): string => {
    return str?.replace(search, replace);
};

export const responseWithMessage = ({ res, message, data, statusCode }: ResponseWithMessageProps): Response => {
    return res.status(statusCode).json({ message, data });
};

export const appendCorrelationIdToRequest = ({ req }: { req: Request }): Request => {
    req.headers['x-correlation-id'] = ulid();
    return req;
}

export const obfuscateEmail = (email: string): string => {
    const [localPart = '', domain = ''] = email.split('@');
    if (!localPart || !domain) {
        // logger.error('Invalid email address: ', email);
        throw new Error(
            `Invalid email address: ${email}`
        );
    }
    const obfuscatedLocalPart = localPart?.substring(0, 2) + '*****' + localPart?.substring(localPart?.length - 2);
    return `${obfuscatedLocalPart}@${domain}`;
};

export enum EnumMapping {
    ACTIVE = "1",
    INACTIVE = "0"
};

export function getDomainFromEmail(email: string): string {
    if (!email) {
        // logger.error(`The email is required: ${email}`);
        throw new Error(`The email is required: ${email}`);
    }

    const parts = email.split('@');
    if (parts.length !== 2) {
        // logger.error(`The email must contain one '@' character: ${email}`);
        throw new Error(`The email must contain one '@' character: ${email}`);
    }

    return parts[1] as string;
}

export function checkIfEmployeeOrCustomer (email) {
    return EMPLOYEE_EMAIL_DOMAIN.includes(getDomainFromEmail(email));
}

export function isValidEmailAddress(email: string): boolean {
    if (!email) {
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

export function getSafeNestedConfigValue<T, K extends keyof T, P extends keyof T[K]>(config: T, key: K, subKey: P): T[K][P] | undefined {
    return config[key]?.[subKey];
}

export function flattenAndModify(queryData: object) {
    // Deep clone the original data to avoid mutation
    const newData = _.cloneDeep(queryData);
    // Iterate over each object in the array
    _.forEach(newData, (item: QueryData) => {
        // Iterate over each attribute object
        const parsed = JSON.parse(item.attributes)
        _.forEach(parsed, attr => {
            // Get the key of the attribute
            const key: any = _.keys(attr)[0];
            // Create a new key with 'attr_' prefix
            const newKey = `attr_${key}`;
            // Modify the key in the object
            _.set(item, newKey, _.get(attr, key));
            // Delete the old key if it's different
            if (key !== newKey) {
                _.unset(attr, key);
            }
        });
        _.unset(item, "attributes");
    });

    return newData;
}
